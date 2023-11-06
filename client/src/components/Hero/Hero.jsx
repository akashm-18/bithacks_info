import './Hero.css';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';
import SearchBar from '../SearchBar/SearchBar';
const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        {/* left side */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <motion.h1
              initial={{ y: '2rem', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 2,
                type: 'ease-in',
              }}
            >
              Explore <br /> and Join the
              <br /> Events
            </motion.h1>
          </div>
          <div className="flexColStart secondaryText flexhero-des">
            <span>
              Discover the world's most exciting events with our InfoPortal
            </span>
            <span>
              Stay connected to events from every corner of the globe with our
              InfoPortal
            </span>
          </div>

          <SearchBar />

          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={0} end={20} duration={4} /> <span>+</span>
              </span>
              <span className="secondaryText inf">Total Events</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp start={0} end={15} duration={4} /> <span>+</span>
              </span>
              <span className="secondaryText">Total Users</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp end={6} /> <span>+</span>
              </span>
              <span className="secondaryText">Patrners</span>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="flexCenter hero-right">
          <motion.div
            initial={{ x: '7rem', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: 'ease-in',
            }}
            className="image-container"
          >
            <img src="./fimage.webp" alt="houses" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
