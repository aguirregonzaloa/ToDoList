const formAdd = document.querySelector('.additem');
const formSearch = document.querySelector('.search input');
const list = document.querySelector('.todos');

const AddList = todos => {
    const html = ` <li class="add">
    <span>${todos}</span>
    <i class="far fa-trash-alt delete"></i>
    </li>`;
    list.innerHTML += html;
};

// Add item to the list
formAdd.addEventListener('submit', e =>{
    e.preventDefault();
    const todos = formAdd.add.value.trim();
   // console.log(todos);
    if(todos.length){
        AddList(todos);
        formAdd.reset();
    }
});

// Remove item to the list

list.addEventListener('click', e => {
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
});

const filterTODOS = (filter) =>{
    Array.from(list.children)
    .filter(todo => !todo.textContent.includes(filter))
    .forEach(todo => todo.classList.add('filtered'));

    Array.from(list.children)
    .filter(todo => todo.textContent.includes(filter))
    .forEach(todo => todo.classList.remove('filtered'));
};

formSearch.addEventListener('keyup', e =>{
    const term = formSearch.value.trim();
    //console.log(term);
    filterTODOS(term);
});