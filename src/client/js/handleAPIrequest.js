const handleAPIrequest = async url => {
    let res = await fetch('/postTextToMeaningCloud',{
        method: 'POST', 
        mode: 'cors',
        credentials: 'same-origin',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({url})
    })
    res = await res.json()
    return res;
}

export {handleAPIrequest}