function inputValidation(inputNumber) {
    if (/^[01]+$/.test(inputNumber)) {
        return inputNumber;
    } else {
        return null;
    }
}
