import { useSelector } from 'react-redux';

import petsSelector from '../../../redux/pets/selectors';

import { Button, IconFormButton } from './FormPetButton.styled';
import sprite from '../../../images/icons.svg';

const FormPetButton = ({ handleNextStage, handleCancelStage, currentStage }) => {
  const isLoading = useSelector(petsSelector.selectIsLoading);
  return (
    <>
      {currentStage !== 'third' && (
        <Button type="button" onClick={handleNextStage}>
          <span>Next</span>
          <IconFormButton width={24} height={24}>
            <use href={`${sprite}#icon-pawprint-1`}></use>
          </IconFormButton>
        </Button>
      )}
      {currentStage === 'third' && (
        <Button type="submit" disabled={isLoading}>
          <span>Done</span>
          <IconFormButton width={24} height={24}>
            <use href={`${sprite}#icon-pawprint-1`}></use>
          </IconFormButton>
        </Button>
      )}
      <Button type="button" onClick={handleCancelStage}>
        <IconFormButton width={24} height={24}>
          <use href={`${sprite}#icon-arrow-left`}></use>
        </IconFormButton>
        <span>{currentStage === 'first' ? 'Cancel' : 'Back'}</span>
      </Button>
    </>
  );
};

export default FormPetButton;
