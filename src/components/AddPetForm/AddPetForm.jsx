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

  const FirstStageForm = ({ values }) => (
    <>
      <RadioButton checked={values.option === 'your pet'}>
        <Field type="radio" name="option" value="your pet" />
        <span>your pet</span>
      </RadioButton>
      <RadioButton checked={values.option === 'sell'}>
        <Field type="radio" name="option" value="sell" />
        <span>sell</span>
      </RadioButton>
      <RadioButton checked={values.option === 'lost/found'}>
        <Field type="radio" name="option" value="lost/found" />
        <span>lost/found</span>
      </RadioButton>
      <RadioButton checked={values.option === 'in good hands'}>
        <Field type="radio" name="option" value="in good hands" />
        <span>in good hands</span>
      </RadioButton>
    </>
  );
  const SecondStageForm = ({ values }) => (
    <>
      <BoxInputField>
        <FieldLabel htmlFor="name">Pet’s name</FieldLabel>
        <InputField type="text" name="name" placeholder="Type name pet" />
      </BoxInputField>
      <BoxInputField>
        <FieldLabel htmlFor="date">Date of birth</FieldLabel>
        <InputField type="text" name="date" placeholder="Type date of birth" />
      </BoxInputField>
      <BoxInputField>
        <FieldLabel htmlFor="type">Type</FieldLabel>
        <InputField type="text" name="type" placeholder="Type of pet" />
      </BoxInputField>
    </>
  );

  const ThirdStageForm = () => {
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
                {currentStage === 'third' && <ThirdStageForm values={values} />}
              </BoxFieldsForm>
            </div>
            <BoxButton>
              <Button type={typeButton} onClick={handleNextStage}>
                <span>{currentStage === 'third' ? 'Done' : 'Next'}</span>
                <span>
                  <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_40415_1171)">
                      <path
                        d="M15.8613 14.3614C15.5946 12.378 14.3528 10.689 12.5393 9.84335C10.7259 8.99778 8.63364 9.13211 6.94302 10.2027L2.86887 12.7822C2.19287 13.2102 1.68351 13.8312 1.39581 14.5777C1.10804 15.3244 1.06917 16.1265 1.28316 16.8976C1.49755 17.6688 1.94487 18.336 2.57661 18.8273C3.20843 19.3185 3.96541 19.5877 4.76566 19.6055L4.81795 19.6064C6.82515 19.6654 8.73238 20.5626 10.0576 22.0732C10.3995 22.4627 10.8104 22.7707 11.2701 22.985C11.52 23.1016 11.7847 23.1904 12.0602 23.2498C12.8426 23.4181 13.6413 23.3319 14.37 23.0005C15.0983 22.669 15.6881 22.1235 16.0753 21.4232C16.4625 20.7227 16.6108 19.9334 16.5042 19.1402L15.8613 14.3614ZM13.7874 21.7199C12.8605 22.1415 11.7867 21.9107 11.1152 21.1454C10.3171 20.2356 9.34232 19.5124 8.26431 19.0097C7.18729 18.5075 6.00694 18.2256 4.79792 18.1988L4.7635 18.1981C3.75999 18.1617 2.90849 17.4913 2.6386 16.5211C2.36646 15.5402 2.76132 14.5154 3.6214 13.9707L7.69572 11.3913C8.97945 10.5785 10.5677 10.4765 11.9446 11.1185C13.3215 11.7606 14.2645 13.0429 14.4671 14.5489L15.1099 19.3277C15.2455 20.3371 14.714 21.2984 13.7874 21.7199Z"
                        fill="#FEF9F9"
                      />
                      <path
                        d="M5.22141 9.395C6.04872 9.45268 6.84539 9.13584 7.46485 8.50281C8.05409 7.90035 8.41268 7.07719 8.4743 6.18465C8.53553 5.29253 8.29336 4.42803 7.79259 3.75024C7.26615 3.03826 6.52075 2.61472 5.69438 2.55808C4.03247 2.44276 2.5737 3.88268 2.44231 5.76882C2.3395 7.27089 3.10962 8.60845 4.26712 9.14821C4.56268 9.28603 4.88352 9.37179 5.22141 9.395ZM3.84575 5.86564C3.92319 4.75419 4.70887 3.89987 5.59756 3.96152C5.75809 3.97253 5.91412 4.01357 6.06098 4.08206C6.28767 4.18776 6.49296 4.35885 6.66113 4.58657C6.9637 4.99576 7.10917 5.52908 7.07079 6.08799C7.03208 6.64716 6.81495 7.15525 6.45913 7.51885C6.13302 7.85207 5.72802 8.02001 5.31905 7.99154L5.31823 7.99156C4.43038 7.93071 3.76986 6.9768 3.84575 5.86564Z"
                        fill="#FEF9F9"
                      />
                      <path
                        d="M11.1413 8.64674C12.903 9.46825 15.0978 8.50366 16.0337 6.4965C16.9699 4.48884 16.2982 2.1872 14.5365 1.36569C12.7749 0.544262 10.5802 1.50926 9.644 3.51692C8.70804 5.52408 9.37973 7.82531 11.1413 8.64674ZM13.942 2.64068C15.0006 3.13431 15.3671 4.59743 14.7587 5.90196C14.1507 7.206 12.7944 7.86538 11.7358 7.37175C10.6772 6.87812 10.3109 5.41549 10.919 4.11146C11.5273 2.80692 12.8834 2.14705 13.942 2.64068Z"
                        fill="#FEF9F9"
                      />
                      <path
                        d="M16.2437 12.1137L16.2439 12.1137C16.473 12.33 16.7294 12.5019 17.0047 12.6303C18.2895 13.2294 19.9776 12.8782 21.1256 11.6638C21.7865 10.9649 22.1763 10.0817 22.2231 9.1772C22.2722 8.23053 21.9445 7.37386 21.3004 6.76479C20.6561 6.15605 19.7819 5.87691 18.8394 5.97926C17.9389 6.07718 17.0793 6.51599 16.4189 7.21518C15.0251 8.68985 14.9466 10.8873 16.2437 12.1137ZM17.4413 8.18148C17.8726 7.72497 18.423 7.43976 18.9915 7.37795C19.5174 7.32074 19.9943 7.46614 20.3341 7.78723C20.6736 8.1084 20.8455 8.57605 20.8181 9.10434C20.7885 9.67522 20.5348 10.241 20.1032 10.6974C19.2422 11.6083 17.9444 11.785 17.2102 11.0913C16.4768 10.3977 16.5804 9.09242 17.4413 8.18148Z"
                        fill="#FEF9F9"
                      />
                      <path
                        d="M23.1699 14.8269L23.1696 14.8262C22.3732 13.3622 20.3748 12.9039 18.7144 13.8049C17.0546 14.707 16.3507 16.6321 17.145 18.0959C17.4346 18.6299 17.8843 19.0304 18.4193 19.2798C19.3518 19.7147 20.5439 19.6911 21.6004 19.1182C23.2601 18.2161 23.9642 16.2911 23.1699 14.8269ZM20.9293 17.8818C19.9491 18.4133 18.8064 18.2084 18.3816 17.4249C17.9569 16.6424 18.4076 15.5729 19.3859 15.0411C20.0359 14.6884 20.7581 14.6603 21.2949 14.9107C21.5664 15.0373 21.7906 15.2351 21.9337 15.4984C22.3576 16.2812 21.9069 17.3503 20.9293 17.8818Z"
                        fill="#FEF9F9"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_40415_1171">
                        <rect width="24" height="24" fill="white" transform="translate(0.5)" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
              </Button>
              <Button type="button" onClick={handleCancelStage}>
                <span>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M4 12L20 12M4 12L10 6M4 12L10 18"
                      stroke="#54ADFF"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
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
