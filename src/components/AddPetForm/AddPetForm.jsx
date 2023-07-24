import React, { useState } from 'react';
import { Formik } from 'formik';
import {
  Form,
  TitleAddPetForm,
  NextStageForm,
  BoxStageForm,
  BoxButton,
  BoxTitle,
  BoxFieldsForm,
} from './AddPetForm.styled';
import FirstStageForm from './FirstStageForm/FirstStageForm';
import SecondStageForm from './SecondStageForm/SecondStageForm';
import ThirdStageForm from './ThirdStageForm/ThirdStageForm';
import FormPetButton from './FormPetButton/FormPetButton';

const AddPetForm = () => {
  const [currentStage, setCurrentStage] = useState('first');
  const [selectedFile, setSelectedFile] = useState('');
  const [showPlaceholder, setShowPlaceholder] = useState(true);
  const [previewImage, setPreviewImage] = useState('');

  const titleColorText = color => {
    switch (color) {
      case 'second':
        return 'var(--dark-blue)';
      case 'third':
        return 'var(--success-color)';
      default:
        return '#888';
    }
  };

  const handleNextStage = () => {
    if (currentStage === 'first') {
      setCurrentStage('second');
    } else if (currentStage === 'second') {
      setCurrentStage('third');
    }
    // You can add more conditions for additional stages if needed.
  };
  const handleCancelStage = () => {
    if (currentStage === 'second') {
      setCurrentStage('first');
    } else if (currentStage === 'third') {
      setCurrentStage('second');
    }
  };

  return (
    <Formik
      initialValues={{
        option: 'your_pet',
        photo: selectedFile,
        name: '',
        date_of_birth: '',
        type: '',
      }}
      onSubmit={(values, { setSubmitting }) => {
        const formData = {
          ...values,
          photo: selectedFile,
        };
        console.log(formData);
        setSubmitting(false);
      }}
    >
      {formik => {
        return (
          <Form onSubmit={formik.handleSubmit}>
            <div>
              <BoxTitle>
                <TitleAddPetForm>Add pet</TitleAddPetForm>
                <BoxStageForm>
                  <NextStageForm current={currentStage}>Choose option</NextStageForm>
                  <NextStageForm title={titleColorText(currentStage)} current={currentStage}>
                    Personal details
                  </NextStageForm>
                  <NextStageForm current={currentStage}>More info</NextStageForm>
                </BoxStageForm>
              </BoxTitle>
              <BoxFieldsForm>
                {currentStage === 'first' && <FirstStageForm formik={formik} />}
                {currentStage === 'second' && <SecondStageForm formik={formik} />}
                {currentStage === 'third' && (
                  <ThirdStageForm
                    showPlaceholder={showPlaceholder}
                    previewImage={previewImage}
                    setPreviewImage={setPreviewImage}
                    setShowPlaceholder={setShowPlaceholder}
                    setSelectedFile={setSelectedFile}
                  />
                )}
              </BoxFieldsForm>
            </div>
            <BoxButton>
              <FormPetButton
                currentStage={currentStage}
                handleNextStage={handleNextStage}
                handleCancelStage={handleCancelStage}
              ></FormPetButton>
            </BoxButton>
          </Form>
        );
      }}
    </Formik>
  );
};

export default AddPetForm;
