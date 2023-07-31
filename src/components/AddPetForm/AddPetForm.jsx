import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import * as yup from 'yup';

import authOperations from 'redux/pets/operations';

import FirstStageForm from './FirstStageForm/FirstStageForm';
import SecondStageForm from './SecondStageForm/SecondStageForm';
import ThirdStageForm from './ThirdStageForm/ThirdStageForm';
import FormPetButton from './FormPetButton/FormPetButton';

import {
  Form,
  TitleAddPetForm,
  NextStageForm,
  BoxStageForm,
  BoxButton,
  BoxFieldsForm,
  ContainerForm,
} from './AddPetForm.styled';

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

const getValidationSchema = file =>
  yup.object().shape({
    category: yup.string().oneOf(['sell', 'lost-found', 'for-free', 'your_pet']).required(),
    name: yup.string().required().min(2).max(16),
    birthday: yup.date().required(),
    type: yup.string().required().min(2).max(16),
    avatar: yup.mixed().test('required', 'Please select a file', () => !!file),
    sex: yup.string().when('category', {
      is: category => ['sell', 'lost-found', 'for-free'].includes(category),
      then: () => yup.string().oneOf(['male', 'female']).required(),
    }),
    location: yup.string().when('category', {
      is: category => ['sell', 'lost-found', 'for-free'].includes(category),
      then: () => yup.string().required('Location is required'),
    }),
    price: yup.number().when('category', {
      is: 'sell',
      then: () => yup.number().required().positive().typeError('Price must be a number'),
    }),
    comments: yup.string().max(120),
  });

const AddPetForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [currentStage, setCurrentStage] = useState('first');
  const [currentRadioButton, setCurrentRadioButton] = useState('your_pet');
  const [showPlaceholder, setShowPlaceholder] = useState(true);
  const [previewImage, setPreviewImage] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const initialValues = {
    title: '',
    category: currentRadioButton,
    avatar: '',
    name: '',
    birthday: '',
    type: '',
    sex: '',
    comments: '',
    location: '',
    price: '',
  };

  useEffect(() => {
    if (submitSuccess) {
      if (currentRadioButton === 'your_pet') {
        navigate('/user');
      } else if (currentRadioButton !== 'your_pet') {
        navigate(`/notices/${currentRadioButton}`);
      }
    }
  }, [submitSuccess, currentRadioButton, navigate]);

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
    <Formik initialValues={initialValues} validationSchema={getValidationSchema(selectedFile)} onSubmit={handleSubmit}>
      {formik => {
        const handleOptionChange = event => {
          setCurrentRadioButton(event.target.value);
          formik.handleChange(event);
        };
        return (
          <Form>
            <ContainerForm currentStage={currentStage} currentRadioButton={currentRadioButton}>
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
                    <FirstStageForm
                      currentRadioButton={currentRadioButton}
                      handleOptionChange={handleOptionChange}
                      formik={formik}
                    />
                  )}
                  {currentStage === 'second' && (
                    <SecondStageForm currentRadioButton={currentRadioButton} formik={formik} />
                  )}
                  {currentStage === 'third' && (
                    <ThirdStageForm
                      formik={formik}
                      currentRadioButton={currentRadioButton}
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
            </ContainerForm>
          </Form>
        );
      }}
    </Formik>
  );
};

export default AddPetForm;
