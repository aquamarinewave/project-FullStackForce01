const selectUserPets = state => state.userPets.pets;
const selectIsLoading = state => state.userPets.isLoading;
const selectError = state => state.userPets.error;

const userPetsSelector = {
  selectUserPets,
  selectIsLoading,
  selectError,
};

export default userPetsSelector;
