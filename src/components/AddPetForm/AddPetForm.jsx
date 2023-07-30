import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';

import authOperations from 'redux/pets/operations';

import FirstStageForm from './FirstStageForm/FirstStageForm';
import SecondStageForm from './SecondStageForm/SecondStageForm';
import ThirdStageForm from './ThirdStageForm/ThirdStageForm';
import FormPetButton from './FormPetButton/FormPetButton';

import { Form, TitleAddPetForm, NextStageForm, BoxStageForm, BoxButton, BoxFieldsForm } from './AddPetForm.styled';

const titleColorText = step => {
  switch (step) {
    case 'second':
      return 'var(--dark-blue)';
    case 'third':
      return 'var(--success-color)';
    default:
      return '#888';
  }
};
const titleText = category => {
  switch (category) {
    case 'sell':
      return 'Add pet for sale';
    case 'lost-found':
      return 'Add lost pet';
    case 'for-free':
      return 'Add a pet in good hands';
    default:
      return 'Add pet';
  }
};

const AddPetForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [currentStage, setCurrentStage] = useState('first');
  const [currentRadioButton, setCurrentRadioButton] = useState('your_pet');
  const [selectedFile, setSelectedFile] = useState('');
  const [showPlaceholder, setShowPlaceholder] = useState(true);
  const [previewImage, setPreviewImage] = useState('');
  const [selectedGender, setSelectedGender] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const initialValues = {
    title: '',
    category: currentRadioButton,
    avatar: selectedFile,
    name: '',
    birthday: '',
    type: '',
    sex: selectedGender,
    comments: '',
    location: '',
    price: '',
  };

  useEffect(() => {
    if (submitSuccess) {
      navigate(-1);
    }
  }, [submitSuccess, navigate]);

  const handleNextStage = () => {
    if (currentStage === 'first') {
      setCurrentStage('second');
    } else if (currentStage === 'second') {
      setCurrentStage('third');
    }
  };

  const handleCancelStage = () => {
    if (currentStage === 'second') {
      setCurrentStage('first');
    } else if (currentStage === 'third') {
      setCurrentStage('second');
    } else {
      navigate(-1);
    }
  };

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    const formData = {
      ...values,
      avatar: selectedFile,
    };

    try {
      if (currentRadioButton === 'your_pet') {
        await dispatch(authOperations.addPetThunk(formData));
      } else {
        await dispatch(authOperations.addNoticeThunk(formData));
      }

      setSubmitSuccess(true); // Перенаправлення лише у разі успішного запиту
    } catch (error) {
      console.log('Error submitting form:', error);
      // Тут можна виконати додаткові дії або показати повідомлення про помилку
    }

    setSubmitting(false);
    resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {formik => {
        const handleOptionChange = event => {
          setCurrentRadioButton(event.target.value);
          formik.handleChange(event);
        };
        const handleSexChange = event => {
          setSelectedGender(event.target.value);
          formik.handleChange(event);
        };
        return (
          <Form currentStage={currentStage} currentRadioButton={currentRadioButton}>
            <div>
              <TitleAddPetForm currentStage={currentStage} currentRadioButton={currentRadioButton}>
                {currentStage !== 'first' ? titleText(currentRadioButton) : 'Add pet'}{' '}
              </TitleAddPetForm>
              <BoxStageForm>
                <NextStageForm current={currentStage}>Choose option</NextStageForm>
                <NextStageForm title={titleColorText(currentStage)} current={currentStage}>
                  Personal details
                </NextStageForm>
                <NextStageForm current={currentStage}>More info</NextStageForm>
              </BoxStageForm>
              <BoxFieldsForm>
                {currentStage === 'first' && (
                  <FirstStageForm currentRadioButton={currentRadioButton} handleOptionChange={handleOptionChange} />
                )}
                {currentStage === 'second' && (
                  <SecondStageForm currentRadioButton={currentRadioButton} formik={formik} />
                )}
                {currentStage === 'third' && (
                  <ThirdStageForm
                    selectedGender={selectedGender}
                    handleSexChange={handleSexChange}
                    currentRadioButton={currentRadioButton}
                    formik={formik}
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
