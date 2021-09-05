const validateInput = (text) => {
    if (!text) throw 'No Text Entered';
    return text
}

export { validateInput }