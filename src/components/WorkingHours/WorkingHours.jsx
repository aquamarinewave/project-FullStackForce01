import React, { useState } from 'react';
// import React, { useState, useEffect } from 'react';

import { ModalWeek, ModalContent, ModalClose } from './WorkingHours.styled.js';
const WorkingHours = (props) => {

    const { daysWorkingInWeek } = props;
    
    // useEffect(() => {
    //     const DaysAndTimeWork = [];
    //     daysWorkingInWeek.map()
    // }, []);

  const [isModalOpen, setModalOpen] = useState(false);

    const handleButtonClick = () => {
      console.log(daysWorkingInWeek);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Открыть модальное окно</button>
      {isModalOpen && (
        <ModalWeek>
          <ModalContent>
            <ModalClose onClick={closeModal}>
              &times;
            </ModalClose>
            <p>Содержимое модального окна</p>
          </ModalContent>
        </ModalWeek>
      )}
    </div>
  );
};

export default WorkingHours;
