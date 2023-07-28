import {
  SearchContainer,
  SearchForm,
  SearchInput,
  SearchIconContainer,
  SearchIconBtn,
  IconSearch,
  IconCrossSmall,
} from './Search.styled';
import sprite from '../../images/icons.svg';

const Search = () => {
  return (
    <SearchContainer>
      <SearchForm>
        <SearchInput type="text" name="searchfornews" placeholder="Search" />
        <SearchIconContainer>
          <SearchIconBtn type="submit">
            <IconSearch width={24} height={24}>
              <use href={`${sprite}#icon-search`}></use>
            </IconSearch>
          </SearchIconBtn>
          <button type="button">
            <IconCrossSmall width={24} height={24}>
              <use href={`${sprite}#icon-cross-small`}></use>
            </IconCrossSmall>
          </button>
        </SearchIconContainer>
      </SearchForm>
    </SearchContainer>
  );
};

export default Search;

// const Search = ({ onSubmit }) => {
//   const [inputName, setInputName] = useState('');

//   const hangleNameOnChange = event => {
//     setInputName(event.currentTarget.value.toLowerCase());
//   };

//   const handleSubmit = event => {
//     event.preventDefault();
//     if (inputName.trim() === '') {
//       alert('Type something in search input');
//       return;
//     }
//     onSubmit(inputName);
//     setInputName('');
//   };

//   return (
//     <SearchContainer>
//       <SearchForm onSubmit={handleSubmit}>
//         <SearchInput
//           type="text"
//           name="searchfornews"
//           placeholder="Search"
//           value={inputName}
//           onChange={hangleNameOnChange}
//           autoComplete="off"
//           autoFocus
//         />
//         <SearchIconContainer>
//           <SearchIconBtn type="submit">
//             <IconSearch width={24} height={24}>
//               <use href={`${sprite}#icon-search`}></use>
//             </IconSearch>
//           </SearchIconBtn>
//           <button type="button">
//             <IconCrossSmall width={24} height={24}>
//               <use href={`${sprite}#icon-cross-small`}></use>
//             </IconCrossSmall>
//           </button>
//         </SearchIconContainer>
//       </SearchForm>
//     </SearchContainer>
//   );
// };
