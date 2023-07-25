import {
  BoxPetAvatar,
  ContainerAvatar,
  FieldAvatar,
  InputFieldTextArea,
  ParagraphPetAvatar,
  ShowPlaceholderAvatar,
  TextArea,
  TextSpan,
} from './ThirdStageForm.styled';

const ThirdStageForm = ({
  showPlaceholder,
  setPreviewImage,
  setShowPlaceholder,
  setSelectedFile,
  previewImage,
  formik,
  currentRadioButton,
}) => {
  // const handlePhotoChange = event => {
  //   const file = event.currentTarget.files[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onloadend = () => {
  //       setPreviewImage(reader.result);
  //     };
  //     reader.readAsDataURL(file);
  //     setShowPlaceholder(false);
  //     setSelectedFile(file);
  //   } else {
  //     setShowPlaceholder(true);
  //     setPreviewImage('');
  //     setSelectedFile(null);
  //   }
  // };

  const handlePhotoChange = event => {
    const file = event.currentTarget.files[0];
    if (file) {
      const formData = new FormData();
      formData.append('avatar', file);
      setSelectedFile(formData);
      setPreviewImage(URL.createObjectURL(file));
      setShowPlaceholder(false);
    } else {
      setShowPlaceholder(true);
      setPreviewImage('');
      setSelectedFile(null);
    }
  };

  if (currentRadioButton === 'your_pet') {
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
            <FieldAvatar type="file" id="photoInput" name="avatar" accept="image/*" onChange={handlePhotoChange} />
          </BoxPetAvatar>
        </ContainerAvatar>
        <div>
          <TextSpan>Comments</TextSpan>
          <InputFieldTextArea
            as={TextArea} // Використовуємо наші стилі для textarea
            id="comments"
            name="comments" // Вказуємо ім'я поля, яке буде використовуватись в Formik
            placeholder="Type of pet"
            value={formik.values.comments}
            onChange={formik.handleChange}
            // onChange={event => {
            //   handlePhotoChange(event);
            //   setSelectedFile(event.currentTarget.files[0]);
            // }}
          />
        </div>
      </>
    );
  }
};

export default ThirdStageForm;
