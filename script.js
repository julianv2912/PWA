fetch('https://hp-api.onrender.com/api/characters')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('characters');
    data.slice(0, 10).forEach(character => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <img src="${character.image || 'https://via.placeholder.com/200'}" alt="${character.name}">
        <h3>${character.name}</h3>
        <p>${character.house || 'Sin casa'}</p>
      `;
      container.appendChild(card);
    });
  });
