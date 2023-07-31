import React, { useState, useEffect } from 'react';

import {
  ModalContent,
  InfoTitle,
  InfoLink,
  EmptyBlock,
  WorkingTimeToday,
  TableDayWeek,
  TableDayTime,
} from './WorkingHours.styled.js';

const WorkingHours = props => {
  const { daysWorkingInWeek } = props;
  const [currentDay, setCurrentDay] = useState('');

  const DayIsSunday = 6;

  const daysOfWeek = ['MN', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];

  useEffect(() => {
    const getDayOfWeek = () => {
      const currentDate = new Date();
      const dayOfWeek = currentDate.getDay();
      setCurrentDay(dayOfWeek);
    };

    getDayOfWeek();
  }, []);

  const [isModalOpen, setModalOpen] = useState(false);

  const handleButtonClick = () => {
    setModalOpen(prevState => !prevState);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const renderModalWindow = () => {
    const renderedItems = [];

    for (let i = 0; i < daysOfWeek.length; i++) {
      renderedItems.push(
        <li key={i}>
          <TableDayWeek>{daysOfWeek[i]}</TableDayWeek>
          {!daysWorkingInWeek[i].isOpen ? (
            <TableDayTime>Closed</TableDayTime>
          ) : (
            <TableDayTime>{daysWorkingInWeek[i].from + '-' + daysWorkingInWeek[i].to}</TableDayTime>
          )}
        </li>
      );
    }
    return renderedItems;
  };

  return (
    <div>
      <InfoTitle>Time:</InfoTitle>
      <WorkingTimeToday>
        {!daysWorkingInWeek || daysWorkingInWeek.length === 0 ? (
          <EmptyBlock>-</EmptyBlock>
        ) : currentDay !== 0 && daysWorkingInWeek[currentDay] ? (
          daysWorkingInWeek[currentDay].isOpen ? (
            <InfoLink onClick={handleButtonClick}>
              {daysWorkingInWeek[currentDay-1].from} - {daysWorkingInWeek[currentDay-1].to}
            </InfoLink>
          ) : (
            <InfoLink onClick={handleButtonClick}>closed today</InfoLink>
          )
        ) : (
          <InfoLink onClick={handleButtonClick}>
            {daysWorkingInWeek[DayIsSunday].from} - {daysWorkingInWeek[DayIsSunday].to}
          </InfoLink>
        )}
      </WorkingTimeToday>

      {isModalOpen && (
        <ModalContent onClick={closeModal}>
          <ul>{renderModalWindow()}</ul>
        </ModalContent>
      )}
    </div>
  );
};

export default WorkingHours;
