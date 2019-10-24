function greaterThanZero(field) {
  if (field <= 0) {
    throw new Error('field should be greater than 0');
  }
}

module.exports = {
  greaterThanZero
};
