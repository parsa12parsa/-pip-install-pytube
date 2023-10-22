document.querySelector('#equal').addEventListener('click', c => {
    fetch('/', {
        method: "POST",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            'test': 'my-text'
        })
    })
});