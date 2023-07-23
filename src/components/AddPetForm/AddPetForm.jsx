import React, { useState } from 'react';
import { Formik, Field } from 'formik';
import {
  RadioButton,
  Form,
  Button,
  TitleAddPetForm,
  NextStageForm,
  BoxStageForm,
  BoxButton,
  BoxTitle,
  BoxFieldsForm,
  FieldLabel,
  InputField,
  BoxInputField,
  BoxPetAvatar,
  ShowPlaceholderAvatar,
  ParagraphPetAvatar,
  ContainerAvatar,
  TextArea,
  InputFieldTextArea,
} from './AddPetForm.styled';
import Icon from 'utils/Icon/Icon';

const options = [
  {
    value: 'your_pet',
    label: 'your pet',
  },
  {
    value: 'sell',
    label: 'sell',
  },
  {
    value: 'lost_or_found',
    label: 'lost/found',
  },
  {
    value: 'in_good_hands',
    label: 'in good hands',
  },
];

const FirstStageForm = ({ values }) => (
  <>
    {options.map(({ value, label }) => (
      <RadioButton checked={values.option === value}>
        <Field type="radio" name="option" value={value} />
        <span>{label}</span>
      </RadioButton>
    ))}
  </>
);

const inputs = [
  {
    name: 'name',
    placeholder: 'Type name pet',
    label: 'Pet’s name',
  },
  {
    name: 'date_of_birth',
    placeholder: 'Type date of birth',
    label: 'Date of birth',
  },
  {
    name: 'type',
    placeholder: 'Type of pet',
    label: 'Type',
  },
];

const SecondStageForm = ({ values }) => (
  <>
    {inputs.map(({ name, value, placeholder, label }) => (
      <BoxInputField>
        <FieldLabel htmlFor={name}>{label}</FieldLabel>
        <InputField type="text" name={name} placeholder={placeholder} value={values[name]} />
      </BoxInputField>
    ))}
  </>
);

const ThirdStageForm = ({ showPlaceholder, setPreviewImage, setShowPlaceholder, setSelectedFile, previewImage }) => {
  const handlePhotoChange = event => {
    const file = event.currentTarget.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
      setShowPlaceholder(false);
      setSelectedFile(file); // Оновлення поля "photo" з Formik
    } else {
      setShowPlaceholder(true);
      setPreviewImage('');
      setSelectedFile(null); // Якщо файл не обрано, очистити поле "photo" з Formik
    }
  };

  return (
    <>
      <ContainerAvatar>
        <ParagraphPetAvatar>Load the pet’s image:</ParagraphPetAvatar>
        <BoxPetAvatar
          onClick={() => {
            // Коли клікаємо на контейнер, активуємо вікно вибору файлів
            if (!showPlaceholder) return;
            const fileInput = document.getElementById('photoInput');
            if (fileInput) {
              fileInput.click();
            }
          }}
        >
          {showPlaceholder ? (
            <ShowPlaceholderAvatar>Заглушка</ShowPlaceholderAvatar>
          ) : (
            <img src={previewImage} alt="Selected" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          )}
          <Field
            type="file"
            id="photoInput"
            name="photo"
            accept="image/*"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              opacity: 0, // Сховати стандартний input
            }}
            onChange={event => {
              handlePhotoChange(event);
              setSelectedFile(event.currentTarget.files[0]);
            }}
          />
        </BoxPetAvatar>
      </ContainerAvatar>
      <span>Comments</span>
      <InputFieldTextArea
        as={TextArea} // Використовуємо наші стилі для textarea
        name="comment" // Вказуємо ім'я поля, яке буде використовуватись в Formik
        placeholder="Type of pet"
      />
    </>
  );
};

const AddPetForm = () => {
  const [currentStage, setCurrentStage] = useState('first');
  const [selectedFile, setSelectedFile] = useState(null);
  const [showPlaceholder, setShowPlaceholder] = useState(true);
  const [previewImage, setPreviewImage] = useState('');

  const typeButton = currentStage === 'third' ? 'submit' : 'button';

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
      initialValues={{ option: 'your pet', photo: selectedFile }}
      onSubmit={values => {
        const formData = {
          ...values,
          photo: selectedFile,
        };
        console.log(formData);
      }}
    >
      {({ values, isSubmitting, setFieldValue }) => {
        return (
          <Form>
            <div>
              <BoxTitle>
                <TitleAddPetForm>Add pet</TitleAddPetForm>
                <BoxStageForm>
                  <NextStageForm current={currentStage}>Choose option</NextStageForm>
                  <NextStageForm current={currentStage}>Personal details</NextStageForm>
                  <NextStageForm current={currentStage}>More info</NextStageForm>
                </BoxStageForm>
              </BoxTitle>
              <BoxFieldsForm>
                {currentStage === 'first' && <FirstStageForm values={values} />}
                {currentStage === 'second' && <SecondStageForm values={values} />}
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
              <Button type={typeButton} onClick={handleNextStage}>
                <span>{currentStage === 'third' ? 'Done' : 'Next'}</span>
                <Icon name="pawprint-1" color="var(--container-bg)" size={24} />
              </Button>

              <Button type="button" onClick={handleCancelStage}>
                <Icon name="arrow-left" color="var(--dark-blue)" size={24} />
                <span>{currentStage === 'first' ? 'Cancel' : 'Back'}</span>
              </Button>
            </BoxButton>
          </Form>
        );
      }}
    </Formik>
  );
};

export default AddPetForm;
