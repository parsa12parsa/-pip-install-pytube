// document.querySelector('#equal').addEventListener('click', c => {
//     fetch('/', {
//         method: "POST",
//         credentials: "same-origin",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify({
//             'test': 'my-text'
//         })
//     })
// });
var step = 'none';
const view = document.querySelector('.view #box');


document.querySelector('body').addEventListener('keydown', c => {
    if (c.key in [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) {
        view.innerHTML = view.innerHTML == '0' ? '' : view.innerHTML;
        input_view(c.key);
    }
    else if (c.key == 'c' || c.key == 'C') {
        view.innerHTML = 0;
    }
});

document.querySelectorAll('#t2 li div').forEach(i => {
    i.addEventListener('click', c => {
        let content = c.target.innerHTML;
        view.innerHTML = view.innerHTML == '0' ? '' : view.innerHTML;

        if (content == '<b>C</b>' || content == 'C') {
            view.innerHTML = 0;
        }

        input_view(content);
    })
});

document.querySelectorAll('#t3 li').forEach(i => {
    i.addEventListener('click', c => {
        let content = c.target.getAttribute('att');

        change_step(content);
    })
});


function input_view(num) {
    if (num in [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) {
        switch (step) {
            case 'none':
                view.innerHTML += num;
                break;
        }
    }
}

function change_step(s) {
    if (s in ['plus', 'minus', 'equal']) {
        step = s;
    }
}