import React, { useContext, useState } from 'react';
import { Modal, Button } from '@mantine/core';
import { DatePicker } from '@mantine/dates';
import { useMutation } from 'react-query';
import UserDetailContext from '../../context/UserDetailContext.js';
import { bookVisit } from '../../utils/api.js';
import { toast } from 'react-toastify';
import dayjs from 'dayjs';
const BookingModal = ({ opened, setOpened, email, propertyId }) => {
  const [value, setValue] = useState(null);
  const {
    userDetails: { token },
    setUserDetails,
  } = useContext(UserDetailContext);

  const handleBookingSuccess = () => {
    toast.success('You have booked your visit', {
      position: 'bottom-right',
    });
    setUserDetails((prev) => ({
      ...prev,
      bookings: [
        ...prev.bookings,
        {
          id: propertyId,
        },
      ],
    }));
  };

  const { mutate, isLoading } = useMutation({
    mutationFn: () =>
      bookVisit(value, propertyId, 'abisheks.ec20@bitsathy.ac.in', token),
    onSuccess: () => handleBookingSuccess(),
    onError: ({ response }) => toast.error(response.data.message),
    onSettled: () => setOpened(false),
  });

  return (
    <Modal
      opened={opened}
      onClose={() => setOpened(false)}
      title="Book tickets"
      centered
    >
      <div className="flexColCenter" style={{ gap: '1rem' }}>
        <Button onClick={() => mutate()}>Register Event</Button>
      </div>
    </Modal>
  );
};

export default BookingModal;
