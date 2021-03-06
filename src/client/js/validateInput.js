import {errorCodes} from "./errorCodes";

//return validity of url
const returnIsValidURL = url => {
    //https://stackoverflow.com/questions/5717093/check-if-a-javascript-string-is-a-url
    var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
        '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    return !!pattern.test(url);
}

//function that validates user input and returns submitted url if valid, otherwise throws error
const validateInput = url => {
    if (!url) throw errorCodes.emptyField;
    if (!returnIsValidURL(url)) throw errorCodes.invalidURL;
    return url
}

export {validateInput}