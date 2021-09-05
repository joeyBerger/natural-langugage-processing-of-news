import { handleSubmit } from './js/formHandler'

const results = document.getElementById('results')
results.style.display = 'none';

const submittedText = document.getElementById('submitted-text')
const testButton = document.getElementById('test-button')

const errorMessage = document.getElementById('error-message')
errorMessage.style.display = 'none'

const resultsContainer = document.getElementById('results-container')

testButton.addEventListener('click',async (e) => {
    let text;
    results.style.display = 'none';
    errorMessage.style.display = 'none'
    try {text = handleSubmit(e)}
    catch (e) {
        errorMessage.style.display = 'block'
        return
    }
    let res = await fetch('/postTextToMeaningCloud',{
        method: 'POST', 
        mode: 'cors',
        credentials: 'same-origin',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({text})
    })
    res = await res.json()
    results.style.display = 'block';
    submittedText.innerHTML = text

    const subjects = ["confidence","subjectivity","score","agreement","irony"]
    subjects.forEach(k => {
        const newDiv = document.createElement("div");
        newDiv.innerHTML = `${k.slice(0,1).toUpperCase()}${k.slice(1)} : ${res[k]}`
        resultsContainer.appendChild(newDiv)
    })
})