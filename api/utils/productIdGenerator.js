function formatProductId(prefix, number) {
  return `${prefix}${String(number).padStart(6, "0")}`;
}

module.exports = { formatProductId };
