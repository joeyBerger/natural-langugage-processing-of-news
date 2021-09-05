import {handleSubmit} from './js/formHandler'
import {handleAPIrequest} from './js/handleAPIrequest'

import './styles/resets.scss'
import './styles/base.scss'
import './styles/form.scss'
import './styles/section.scss'
import './styles/footer.scss'
import './styles/header.scss'

import './styles/custom-styling.scss'

const results = document.getElementById('results-master-container');
results.style.display = 'none';

const testButton = document.getElementById('submit-button');

const errorMessage = document.getElementById('error-message');
errorMessage.style.display = 'none';

const resultsContainer = document.getElementById('results-data-container');

testButton.addEventListener('click', async (e) => {
    let url;
    results.style.display = 'none';
    errorMessage.style.display = 'none'
    try {url = handleSubmit(e)}
    catch (e) {
        errorMessage.innerHTML = `Error : ${e}`;
        errorMessage.style.display = 'block'
        return
    }
    const res = await handleAPIrequest(url)
    results.style.display = 'block';

    //remove any existing children from results container
    while (resultsContainer.firstChild) {
        resultsContainer.removeChild(resultsContainer.firstChild);
    }

    //add submitted URL
    const enteredURL = document.createElement("div");
    enteredURL.innerHTML = `URL : ${url}`;
    enteredURL.classList.add('data-piece');
    resultsContainer.appendChild(enteredURL);


    //display results for each data piece
    const subjects = ["confidence","subjectivity","score","agreement","irony"]
    subjects.forEach(k => {
        const dataDiv = document.createElement("div");
        dataDiv.innerHTML = `${k.slice(0,1).toUpperCase()}${k.slice(1)} : ${res[k]}`;
        dataDiv.classList.add('data-piece');
        resultsContainer.appendChild(dataDiv);
    })
})