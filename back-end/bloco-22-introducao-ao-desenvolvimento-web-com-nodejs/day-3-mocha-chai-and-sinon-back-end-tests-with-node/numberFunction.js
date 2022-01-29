function isNeutral(number) {
    if (number > 0) return 'Positive';
    else if (number < 0) return 'Negative';
    else if (number == 0) return 'Neutral';
    else return 'Error';
}

module.exports = isNeutral;