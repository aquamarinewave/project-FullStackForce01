import { Field } from 'formik';
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
}) => {
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
          <FieldAvatar
            type="file"
            id="photoInput"
            name="photo"
            accept="image/*"
            onChange={event => {
              handlePhotoChange(event);
              setSelectedFile(event.currentTarget.files[0]);
            }}
          />
        </BoxPetAvatar>
      </ContainerAvatar>
      <div>
        <TextSpan>Comments</TextSpan>
        <InputFieldTextArea
          as={TextArea} // Використовуємо наші стилі для textarea
          id="comment"
          name="comment" // Вказуємо ім'я поля, яке буде використовуватись в Formik
          placeholder="Type of pet"
          value={formik.values.comment}
          onChange={formik.handleChange}
        />
      </div>
    </>
  );
};

export default ThirdStageForm;
