import {handleSubmit} from './js/formHandler'
import {handleAPIrequest} from './js/handleAPIrequest'

import './styles/resets.scss'
import './styles/base.scss'
import './styles/form.scss'
import './styles/footer.scss'
import './styles/header.scss'

const results = document.getElementById('results');
results.style.display = 'none';

const submittedURL = document.getElementById('submitted-url');
const testButton = document.getElementById('submit-button');

const errorMessage = document.getElementById('error-message');
errorMessage.style.display = 'none';

const resultsContainer = document.getElementById('results-container');

testButton.addEventListener('click', async (e) => {
    let url;
    results.style.display = 'none';
    errorMessage.style.display = 'none'
    try {url = handleSubmit(e)}
    catch (e) {
        errorMessage.innerHTML = e;
        errorMessage.style.display = 'block'
        return
    }
    const res = await handleAPIrequest(url)
    results.style.display = 'block';
    submittedURL.innerHTML = url;

    //remove any existing children from results container
    while (resultsContainer.firstChild) {
        resultsContainer.removeChild(resultsContainer.firstChild);
    }

    //display results for each data piece
    const subjects = ["confidence","subjectivity","score","agreement","irony"]
    subjects.forEach(k => {
        const newDiv = document.createElement("div");
        newDiv.innerHTML = `${k.slice(0,1).toUpperCase()}${k.slice(1)} : ${res[k]}`;
        resultsContainer.appendChild(newDiv);
    })
})