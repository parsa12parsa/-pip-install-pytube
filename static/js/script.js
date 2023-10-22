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

const step = 'none';
var view = document.querySelector('.view #box');

document.querySelectorAll('#t2 li div').forEach(i => {
    i.addEventListener('click', c => {
        let content = c.target.innerHTML;

        view.innerHTML = view.innerHTML == '0' ? '' : view.innerHTML;

        switch (step) {
            case 'none':
                view.innerHTML += content;
                break;
        }
    })
});