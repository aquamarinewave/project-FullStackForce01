const selectPets = state => state.pets.pets;
const selectIsLoading = state => state.pets.isLoading;
const selectError = state => state.pets.error;

const petsSelector = {
  selectPets,
  selectIsLoading,
  selectError,
};

export default petsSelector;
