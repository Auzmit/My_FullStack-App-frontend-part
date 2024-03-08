const form = document.getElementById('form_search');
const input = document.getElementById('form_input');
const button = document.getElementById('btn_search');
const result = document.querySelector('#result');

input.focus();

button.addEventListener('click', async (e) => {
  e.preventDefault();
  const value = new FormData(form);
  const name = value.get('name');
  const endPoint = 'http://localhost:8080/search.json?q=';

  fetch(`${endPoint}${name}`)
    .then((response) => response.json())
    .then(async (collection) => {
      const elements = collection.data.map((person) => {
        const li = document.createElement('li');
        li.textContent = `${person.name} | ${person.phone}`;
        return li;
      });
    if (elements.length) {
      const ol = await document.createElement('ol');
      ol.append(...elements);
      result.replaceChildren(ol);
    } else {
      const error = document.createElement('p');
      error.textContent = 'Пользователи не найдены';
      result.replaceChildren(error);
    };
    
    input.focus();
    });
});
