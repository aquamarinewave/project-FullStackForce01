import { Button } from './FormPetButton.styled';

const { default: Icon } = require('utils/Icon/Icon');

const FormPetButton = ({ handleNextStage, handleCancelStage, currentStage }) => {
  return (
    <>
      {currentStage !== 'third' && (
        <Button type="button" onClick={handleNextStage}>
          <span>Next</span>
          <Icon name="pawprint-1" color="var(--container-bg)" size={24} />
        </Button>
      )}
      {currentStage === 'third' && (
        <Button type="submit">
          <span>Done</span>
          <Icon name="pawprint-1" color="var(--container-bg)" size={24} />
        </Button>
      )}
      <Button type="button" onClick={handleCancelStage}>
        <Icon name="arrow-left" color="var(--dark-blue)" size={24} />
        <span>{currentStage === 'first' ? 'Cancel' : 'Back'}</span>
      </Button>
    </>
  );
};

export default FormPetButton;
