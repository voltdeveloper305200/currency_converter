export const validateInput = (input, setInput) => {
  let value = input.replace(",", ".");
  value = value.replace(/[^0-9.]/g, "");
  value = value.replace(/^00+/, "0");
  const parts = value.split(".");
  if (parts.length > 1) {
    const integerPart = parts[0].replace(/^00+/, "0");
    const decimalPart = parts[1].substring(0, 6);
    value = `${integerPart}.${decimalPart}`;
  }
  const firstDotIndex = value.indexOf(".");
  if (firstDotIndex !== -1) {
    value = `${value.substring(0, firstDotIndex + 1)}${value
      .substring(firstDotIndex + 1)
      .replace(/\./g, ",")}`;
  }
  setInput(value);
};

export const validatePaste = (event) => {
  event.preventDefault();
  const pastedData = event.clipboardData.getData("text/plain");
  const formattedData = pastedData.replace(/[^0-9,.]+/g, "");
  const dotCount = (formattedData.match(/\./g) || []).length;
  const commaCount = (formattedData.match(/,/g) || []).length;
  if (dotCount > 1 || commaCount > 1) {
    return;
  }
  const result = formattedData.replace(",", ".");
  return result;
};
