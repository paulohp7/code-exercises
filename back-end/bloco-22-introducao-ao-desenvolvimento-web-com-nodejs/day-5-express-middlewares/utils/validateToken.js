function validateToken (token) {
    return (token.match(/^[a-zA-Z0-9]*$/) && token.length == 12);
};

module.exports = validateToken;