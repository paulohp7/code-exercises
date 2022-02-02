const validatePassword = (password) => {
    if (password.length > 3 && password.length < 9) {
      return password.match(/^[0-9]*$/);
    };
    return false;
};

module.exports = validatePassword;