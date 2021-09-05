
const handleError = (elem,msg) => {
    elem.innerHTML = `Error : ${msg}`;
    elem.style.display = 'block';
}

export {handleError}