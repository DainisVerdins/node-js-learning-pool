const checkUsersValid = (goodUsers) => {
  return function allUsersValid(submittedUsers) {
    return submittedUsers.every((submittedUser) => {
      // check if any submitUsers are valid
      return goodUsers.some((goodUser) => submittedUser.id === goodUser.id);
    }); // check if submittedUser is inside goodUsers array
  };
};

module.exports = checkUsersValid;
