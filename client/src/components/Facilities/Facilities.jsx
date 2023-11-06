import { useAuth0 } from '@auth0/auth0-react';
import { Box, Button, Group, NumberInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import React, { useContext } from 'react';
import UserDetailContext from '../../context/UserDetailContext';
import useProperties from '../../hooks/useProperties.jsx';
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import { createResidency } from '../../utils/api';
const Facilities = ({
  prevStep,
  propertyDetails,
  setPropertyDetails,
  setOpened,
  setActiveStep,
}) => {
  const form = useForm({
    initialValues: {
      teamSize: propertyDetails.facilities.teamSize,
    },
    validate: {
      teamSize: (value) => (value < 1 ? 'Must have atleast one member' : null),
    },
  });

  const { teamSize } = form.values;

  const handleSubmit = () => {
    const { hasErrors } = form.validate();
    if (!hasErrors) {
      setPropertyDetails((prev) => ({
        ...prev,
        facilities: { teamSize },
      }));
      mutate();
    }
  };

  // ==================== upload logic
  const { user } = useAuth0();
  const {
    userDetails: { token },
  } = useContext(UserDetailContext);
  const { refetch: refetchProperties } = useProperties();

  const { mutate, isLoading } = useMutation({
    mutationFn: () =>
      createResidency(
        {
          ...propertyDetails,
          facilities: { teamSize },
        },
        token
      ),
    onError: ({ response }) =>
      toast.error(response.data.message, { position: 'bottom-right' }),
    onSettled: () => {
      toast.success('Added Successfully', { position: 'bottom-right' });
      setPropertyDetails({
        title: '',
        description: '',
        price: 0,
        country: '',
        city: '',
        address: '',
        image: null,
        facilities: {
          teamSize: 0,
        },
        userEmail: 'abisheks.ec20@bitsathy.ac.in',
      });
      setOpened(false);
      setActiveStep(0);
      refetchProperties();
    },
  });

  return (
    <Box maw="30%" mx="auto" my="sm">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <NumberInput
          withAsterisk
          label="Team Size"
          min={0}
          {...form.getInputProps('teamSize')}
        />
        <Group position="center" mt="xl">
          <Button variant="default" onClick={prevStep}>
            Back
          </Button>
          <Button type="submit" color="green" disabled={isLoading}>
            {isLoading ? 'Submitting' : 'Add Property'}
          </Button>
        </Group>
      </form>
    </Box>
  );
};

export default Facilities;
