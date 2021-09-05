import { errorCodes } from "../src/client/js/errorCodes"

describe("Testing the submit functionality", () => {
    test("Testing the handleSubmit() function", () => {
        //test that errorCodes is an object
        expect(errorCodes).toBeInstanceOf(Object)
})});