import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/style.css'

const list = document.querySelector('.list');
const titleInput = document.querySelector('#title');
const bodyInput = document.querySelector('#body');
const btn = document.querySelector('#submit-btn');


function postInfo() {
    const card = document.createElement('div')
    card.classList.add('card');
    card.classList.add('card_element');
    card.setAttribute('id', `${Math.random}`);
    
    const title = document.createElement('h3');
    const body = document.createElement('p');
    const deleteBtn = document.createElement('button');

    title.textContent = titleInput.value;
    title.classList.add('card-title');
    body.textContent = bodyInput.value;
    body.classList.add('card-text');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('btn');
    deleteBtn.classList.add('btn-danger');
    deleteBtn.classList.add('button_delete');

    card.appendChild(title);
    card.appendChild(body);
    card.appendChild(deleteBtn);

    deleteBtn.addEventListener('click', (e) => {
        const el = e.target.closest(".card");
        el.remove();
    })

    list.appendChild(card);
}

btn.addEventListener('click', postInfo);
