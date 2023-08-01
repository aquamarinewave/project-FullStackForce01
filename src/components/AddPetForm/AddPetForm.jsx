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

const firstStageValidationSchema = yup.object().shape({
  category: yup.string().oneOf(['sell', 'lost-found', 'for-free', 'my-pet']).required(),
});

const secondStageValidationSchema = category => {
  if (category === 'my-pet') {
    return yup.object().shape({
      name: yup.string().required().min(2).max(16),
      birthday: yup.date().required(),
      type: yup.string().required().min(2).max(16),
    });
  } else {
    return yup.object().shape({
      title: yup.string().required('Title is required').min(5),
      name: yup.string().required().min(2).max(16),
      birthday: yup.date().required(),
      type: yup.string().required().min(2).max(16),
    });
  }
};

const getValidationSchema = (file, currentStage, currentRadioButton) => {
  switch (currentStage) {
    case 'first':
      return firstStageValidationSchema;
    case 'second':
      return secondStageValidationSchema(currentRadioButton);
    default:
      return yup.object().shape({
        avatar: yup.mixed().test('required', 'Please select a file', () => !!file),
        comments: yup.string().max(120),
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
      });
  }
};

const AddPetForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [currentStage, setCurrentStage] = useState('first');
  const [currentRadioButton, setCurrentRadioButton] = useState('my-pet');
  const [showPlaceholder, setShowPlaceholder] = useState(true);
  const [previewImage, setPreviewImage] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [selectedFile, setSelectedFile] = useState('');

  const initialValues = {
    title: '',
    category: currentRadioButton,
    avatar: selectedFile,
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
      if (currentRadioButton === 'my-pet') {
        navigate('/user');
      } else if (currentRadioButton !== 'my-pet') {
        navigate(`/notices/${currentRadioButton}`);
      }
    }
  }, [submitSuccess, currentRadioButton, navigate]);

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
      if (currentRadioButton === 'my-pet') {
        await dispatch(authOperations.addPetThunk(formData));
      } else {
        await dispatch(authOperations.addNoticeThunk(formData));
      }

      setSubmitSuccess(true);
    } catch (error) {
      console.log('Error submitting form:', error);
      // Тут можна виконати додаткові дії або показати повідомлення про помилку
    }

    setSubmitting(false);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={getValidationSchema(selectedFile, currentStage)}
      onSubmit={handleSubmit}
    >
      {formik => {
        const handleOptionChange = event => {
          setCurrentRadioButton(event.target.value);
          formik.handleChange(event);
        };

        const handleNextStage = async () => {
          try {
            // Перевірка валідації на поточному етапі
            const currentStageValidationSchema = getValidationSchema(selectedFile, currentStage, currentRadioButton);
            await currentStageValidationSchema.validate(formik.values, { abortEarly: false });

            // Перевірка обов'язкових полів на пусте значення
            let requiredFields = [];
            if (currentStage === 'first') {
              requiredFields = ['category'];
            } else if (currentStage === 'second') {
              requiredFields =
                currentRadioButton === 'my-pet' ? ['name', 'birthday', 'type'] : ['title', 'name', 'birthday', 'type'];
            }

            const missingRequiredFields = requiredFields.filter(field => !formik.values[field]);

            if (missingRequiredFields.length > 0) {
              // Якщо є незаповнені обов'язкові поля, встановлюємо помилку для кожного з них
              const validationErrors = missingRequiredFields.reduce((acc, field) => {
                acc[field] = 'This field is required';
                return acc;
              }, {});
              formik.setErrors(validationErrors);
            } else {
              // Якщо немає помилок, перехід до наступного етапу
              if (currentStage === 'first') {
                setCurrentStage('second');
              } else if (currentStage === 'second') {
                setCurrentStage('third');
              }
            }
          } catch (errors) {
            // Перетворюємо масив помилок у об'єкт та встановлюємо їх у форму
            const validationErrors = errors.inner.reduce((acc, error) => {
              acc[error.path] = error.message;
              return acc;
            }, {});
            formik.setErrors(validationErrors);
          }
        };

        return (
          <Form>
            <ContainerForm currentStage={currentStage} currentRadioButton={currentRadioButton}>
              <div>
                <TitleAddPetForm currentStage={currentStage} currentRadioButton={currentRadioButton}>
                  {currentStage !== 'first' ? titleText(currentRadioButton) : 'Add pet'}
                </TitleAddPetForm>
                <BoxStageForm>
                  <NextStageForm current={currentStage}>Choose option</NextStageForm>
                  <NextStageForm currentStage={currentStage} current={currentStage}>
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
