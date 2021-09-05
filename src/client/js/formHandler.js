import { validateInput } from "./validateInput";

function handleSubmit(e) {
    e.preventDefault()
    return validateInput(document.getElementById('name').value)
}

export { handleSubmit }
