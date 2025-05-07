// List of tools/games (you can add more!)
const tools = [
    { name: "Life Stats", link: "/life-stats/", img: "/life stats/images/life-stats.svg/" },
    { name: "Stimulation Clicker", link: "/stimulation-clicker/", img: "stimulation-clicker.svg" },
    { name: "Infinite Craft", link: "/infinite-craft/", img: "infinite-craft.svg" },
    { name: "Internet Artifacts", link: "/internet-artifacts/", img: "internet-artifacts.svg" },
    { name: "Password Game", link: "/password-game/", img: "password-game.svg" },
    { name: "Space Elevator", link: "/space-elevator/", img: "space-elevator.svg" }
  ];
  
  const container = document.getElementById('cardsContainer');
  
  // Generate cards dynamically
  tools.forEach(tool => {
    const card = document.createElement('a');
    card.href = tool.link;
    card.className = 'card';
    card.innerHTML = `
      <img src="${tool.img}" alt="${tool.name}">
      <p>${tool.name}</p>
    `;
    container.appendChild(card);
  });
  