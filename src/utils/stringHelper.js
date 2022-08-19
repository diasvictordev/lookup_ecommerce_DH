const limiterText = (text) => {
  if (text.length > 50) {
    const stringFormatted = `${text.substring(0, 50)}...`
    return stringFormatted
  }
  return text
};

module.exports = {limiterText};
