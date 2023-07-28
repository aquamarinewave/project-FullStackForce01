import { Button, IconFormButton } from './FormPetButton.styled';

import sprite from '../../../images/icons.svg';
// import { Link } from 'react-router-dom';

// const { default: Icon } = require('utils/Icon/Icon');

const FormPetButton = ({ handleNextStage, handleCancelStage, currentStage }) => {
  return (
    <>
      {currentStage !== 'third' && (
        <Button type="button" onClick={handleNextStage}>
          <span>Next</span>
          <IconFormButton width={24} height={24}>
            <use href={`${sprite}#icon-pawprint-1`}></use>
          </IconFormButton>
          {/* <IconFormButton name="pawprint-1" color="var(--container-bg)" size={24} /> */}
        </Button>
      )}
      {currentStage === 'third' && (
        <Button type="submit">
          {/* <Link to={`/user`}> */}
          <span>Done</span>
          <IconFormButton width={24} height={24}>
            <use href={`${sprite}#icon-pawprint-1`}></use>
          </IconFormButton>
          {/* </Link> */}
        </Button>
      )}
      <Button type="button" onClick={handleCancelStage}>
        <IconFormButton width={24} height={24}>
          <use href={`${sprite}#icon-arrow-left`}></use>
        </IconFormButton>
        {/* <Icon name="arrow-left" color="var(--dark-blue)" size={24} /> */}
        <span>{currentStage === 'first' ? 'Cancel' : 'Back'}</span>
      </Button>
    </>
  );
};

export default FormPetButton;
