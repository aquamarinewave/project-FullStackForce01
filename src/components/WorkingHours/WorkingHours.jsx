// import React, { useState } from 'react';
import React, { useState, useEffect } from 'react';

import { ModalWeek, ModalContent, ModalClose } from './WorkingHours.styled.js';
const WorkingHours = props => {
  const { daysWorkingInWeek } = props;
  const [dayOfWeek, setDayOfWeek] = useState('');

// const daysOfWeek = ['MN', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];

    useEffect(() => {
      const getDayOfWeek = () => {
        const currentDate = new Date();
        const dayOfWeek = currentDate.getDay();
        (!daysWorkingInWeek) ? setDayOfWeek(daysWorkingInWeek[dayOfWeek].from) : setDayOfWeek("XXX");

        
        // setCurrentDay(daysOfWeek[dayOfWeek];
      };

      getDayOfWeek();
    }, [daysWorkingInWeek]);


  const [isModalOpen, setModalOpen] = useState(false);

  const handleButtonClick = () => {
    console.log(daysWorkingInWeek);
    // console.log(daysWorkingInWeek[dayOfWeek].from);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      {/* {!dayOfWeek ? console.log(daysWorkingInWeek[dayOfWeek]) : console.log('null')}; */}
      <button onClick={handleButtonClick}>{dayOfWeek}</button>
      {isModalOpen && (
        <ModalWeek>
          <ModalContent>
            <ModalClose onClick={closeModal}>&times;</ModalClose>
            {}
            <p>Содержимое модального окна</p>
          </ModalContent>
        </ModalWeek>
      )}
    </div>
  );
};

export default WorkingHours;
