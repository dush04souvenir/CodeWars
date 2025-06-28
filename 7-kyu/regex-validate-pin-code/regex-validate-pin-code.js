function validatePIN(pin) {
  // Check if pin is exactly 4 or 6 characters and all digits
  return /^(\d{4}|\d{6})$/.test(pin);
}
​