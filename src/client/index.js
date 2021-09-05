import {handleSubmit} from './js/formHandler'
import {handleAPIrequest} from './js/handleAPIrequest'
import './styles/resets.scss'
import './styles/base.scss'
import './styles/form.scss'
import './styles/section.scss'
import './styles/custom-styling.scss'

//store resultsMasterContainer and hide
const resultsMasterContainer = document.getElementById('results-master-container');
resultsMasterContainer.style.display = 'none';

//store errorMessage and hide
const errorMessage = document.getElementById('error-message');
errorMessage.style.display = 'none';

//store processingMessage and hide
const processingMessage = document.getElementById('processing-message');
processingMessage.style.display = 'none';

//store resultsMasterContainer
const resultsDataContainer = document.getElementById('results-data-container');

//store submitButton
const submitButton = document.getElementById('submit-button');

//add event listner to submit button
submitButton.addEventListener('click', async (e) => {
    let url;
    resultsMasterContainer.style.display = 'none';
    errorMessage.style.display = 'none';
    try {url = handleSubmit(e)}
    catch (e) {
        errorMessage.innerHTML = `Error : ${e}`;
        errorMessage.style.display = 'block';
        return
    }

    //show processing message
    processingMessage.style.display = 'block';

    const res = await handleAPIrequest(url)

    //show resultsMasterContainer container
    resultsMasterContainer.style.display = 'block';

    //hide processing message
    processingMessage.style.display = 'none';


    //remove any existing children from resultsMasterContainer container
    while (resultsDataContainer.firstChild) {
        resultsDataContainer.removeChild(resultsDataContainer.firstChild);
    }

    //add submitted URL
    const enteredURL = document.createElement("div");
    enteredURL.innerHTML = `URL : ${url}`;
    enteredURL.classList.add('data-piece');
    resultsDataContainer.appendChild(enteredURL);


    //display resultsMasterContainer for each data piece
    const subjects = ["confidence","subjectivity","score","agreement","irony"]
    subjects.forEach(k => {
        const dataDiv = document.createElement("div");
        dataDiv.innerHTML = `${k.slice(0,1).toUpperCase()}${k.slice(1)} : ${res[k]}`;
        dataDiv.classList.add('data-piece');
        resultsDataContainer.appendChild(dataDiv);
    })
})