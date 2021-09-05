import { validateInput } from "../src/client/js/validateInput"
import { errorCodes } from "../src/client/js/errorCodes"

describe("Testing the validate input functionality", () => {
    test("Testing the validateInput() function", () => {

        //test that validateInput() is defined
        expect(validateInput).toBeDefined();

        //test that valid url is accepted
        const validURL = 'https://google.com'
        expect(validURL).toBe(validateInput(validURL))

        //test that invalid url throws correct error code
        const invalidURL = 'invalidURL'
        expect(() => {validateInput(invalidURL);}).toThrow(errorCodes.invalidURL);

        //test that empty string throws correct error code
        const emptyStr = ''
        expect(() => {validateInput(emptyStr);}).toThrow(errorCodes.emptyField);           
})});