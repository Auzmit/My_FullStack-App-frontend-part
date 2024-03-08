const form = document.querySelector('form');
const button = document.querySelector('button');
const result = document.querySelector('#result');

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
        li.textContent = person.name;
        return li;
      });
    const ol = await document.createElement('ol');
    ol.append(...elements);
    result.replaceChildren(ol);
    });
});
