const container = document.getElementById('characters');
const buttons = document.querySelectorAll('nav button');

const API = 'https://hp-api.onrender.com/api/characters/house/';

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const house = btn.getAttribute('data-house');
    loadCharacters(house);
  });
});

function loadCharacters(house) {
  container.innerHTML = '<p>Cargando personajes...</p>';
  fetch(`${API}${house}`)
    .then(res => res.json())
    .then(data => {
      container.innerHTML = '';
      data.forEach(character => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
          <img src="${character.image || 'https://via.placeholder.com/200'}" alt="${character.name}">
          <h3>${character.name}</h3>
          <p>${character.house}</p>
          <p>${character.actor || 'Sin actor'}</p>
        `;
        container.appendChild(card);
      });
    })
    .catch(() => {
      container.innerHTML = '<p>Error al cargar personajes.</p>';
    });
}
