import React, { useEffect, useState } from 'react';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
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
import { addNoticeThunk, addPetThunk } from 'redux/pets/operations';
import { useNavigate } from 'react-router-dom';

const AddPetForm = () => {
  const dispatch = useDispatch();
  const [currentStage, setCurrentStage] = useState('first');
  const [currentRadioButton, setCurrentRadioButton] = useState('your_pet');
  const [selectedFile, setSelectedFile] = useState('');
  const [showPlaceholder, setShowPlaceholder] = useState(true);
  const [previewImage, setPreviewImage] = useState('');
  const [selectedGender, setSelectedGender] = useState('');
  const navigate = useNavigate();
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    if (submitSuccess) {
      navigate('/user');
    }
  }, [submitSuccess, navigate]);

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
  const titleText = title => {
    switch (title) {
      case 'sell':
        return 'Add pet for sale';
      case 'lost_or_found':
        return 'Add lost pet';
      default:
        return 'Add pet';
    }
  };

  const handleNextStage = () => {
    if (currentStage === 'first') {
      setCurrentStage('second');
    } else if (currentStage === 'second') {
      setCurrentStage('third');
    }
  };

  const handleCancelStage = () => {
    // if (currentStage === 'second') {
    //   setCurrentStage('first');
    // } else if (currentStage === 'third') {
    //   setCurrentStage('second');
    // }
    if (currentStage === 'second') {
      setCurrentStage('first');
    } else if (currentStage === 'third') {
      setCurrentStage('second');
    } else {
      // Якщо назва кнопки "Cancel", перенаправте на /user
      navigate('/user');
    }
  };

  // const history = useHistory();

  return (
    <Formik
      initialValues={{
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
      }}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        const formData = {
          ...values,
          avatar: selectedFile,
        };
        if (currentRadioButton === 'your_pet') {
          dispatch(addPetThunk(formData))
            .then(() => setSubmitSuccess(true))
            .catch(error => console.log('Error submitting form:', error));
        } else {
          dispatch(addNoticeThunk(formData))
            .then(() => setSubmitSuccess(true))
            .catch(error => console.log('Error submitting form:', error));
        }
        setSubmitting(false);
        resetForm();
      }}
    >
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
          <Form>
            <div>
              <BoxTitle>
                <TitleAddPetForm>
                  {currentStage !== 'first' ? titleText(currentRadioButton) : 'Add pet'}
                </TitleAddPetForm>
                <BoxStageForm>
                  <NextStageForm current={currentStage}>Choose option</NextStageForm>
                  <NextStageForm title={titleColorText(currentStage)} current={currentStage}>
                    Personal details
                  </NextStageForm>
                  <NextStageForm current={currentStage}>More info</NextStageForm>
                </BoxStageForm>
              </BoxTitle>
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
