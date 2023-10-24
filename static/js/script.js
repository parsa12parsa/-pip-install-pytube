var step = 'none';
var memory = {
    num1: null,
    num2: null
}
const view = document.querySelector('.view #box');


document.querySelector('body').addEventListener('keydown', c => {
    if (c.key in [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) {
        view.innerHTML = view.innerHTML == '0' ? '' : view.innerHTML;
        input_view(c.key);
    }
    else if (c.key == 'c' || c.key == 'C') {
        view.innerHTML = 0;
        step = 'none';
        memory = {
            num1: null,
            num2: null
        }
    }
    else if (['-', '+', '=', 'Enter'].includes(c.key)) {
        change_step(c.key.replace('+', 'plus').replace('-', 'minus').replace('Enter', 'equal').replace('=', 'equal'));
    }
});

document.querySelectorAll('#t2 li div').forEach(i => {
    i.addEventListener('click', c => {
        let content = c.target.innerHTML;
        view.innerHTML = view.innerHTML == '0' ? '' : view.innerHTML;

        if (content == '<b>C</b>' || content == 'C') {
            view.innerHTML = 0;
            step = 'none';
            memory = {
                num1: null,
                num2: null
            }
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
        view.innerHTML += num;
    }
}

async function change_step(s) {
    if (['plus', 'minus', 'equal'].includes(s)) {
        if (step == 'none') {
            step = s;
            memory.num1 = view.innerHTML;
            view.innerHTML = '0';
        } else if (s = 'equal') {
            memory.num2 = view.innerHTML;

            await fetch('/', {
                method: "POST",
                headers: {
                    Accept: 'application.json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    calculate: {
                        type: step,
                        number_1: Number(memory.num1),
                        number_2: Number(memory.num2)
                    }
                })
            }).then(response => {
                response.json().then(v => {
                    view.innerHTML = v.resault;
                    memory.num1 = v.resault;
                    memory.num2 = null;
                });
            });

            step = 'none';
        }
    }
}