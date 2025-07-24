const songs = [
  {
    title: "Shape of You – Ed Sheeran",
    url: "https://www.youtube.com/embed/JGwWNGJdvx8?autoplay=1",
    img: "https://i.ytimg.com/vi/JGwWNGJdvx8/hqdefault.jpg"
  },
  {
    title: "Girls Like You – Maroon 5",
    url: "https://www.youtube.com/embed/3AtDnEC4zak?autoplay=1",
    img: "https://i.ytimg.com/vi/3AtDnEC4zak/hqdefault.jpg"
  },
  {
    title: "Sorry – Justin Bieber",
    url: "https://www.youtube.com/embed/fRh_vgS2dFE?autoplay=1",
    img: "https://i.ytimg.com/vi/fRh_vgS2dFE/hqdefault.jpg"
  },
  {
    title: "Blinding Lights – The Weeknd",
    url: "https://www.youtube.com/embed/fHI8X4OXluQ?autoplay=1",
    img: "https://i.ytimg.com/vi/fHI8X4OXluQ/hqdefault.jpg"
  },
  {
    title: "Uptown Funk – Bruno Mars",
    url: "https://www.youtube.com/embed/OPf0YbXqDm0?autoplay=1",
    img: "https://i.ytimg.com/vi/OPf0YbXqDm0/hqdefault.jpg"
  },
  {
    title: "Senorita – Shawn Mendes, Camila Cabello",
    url: "https://www.youtube.com/embed/Pkh8UtuejGw?autoplay=1",
    img: "https://i.ytimg.com/vi/Pkh8UtuejGw/hqdefault.jpg"
  }
];

let isPlaying = false;

function renderSongs() {
  const playlist = document.getElementById("playlist");
  playlist.innerHTML = "";
  songs.forEach(song => {
    const card = document.createElement("div");
    card.className = "song-card";
    card.setAttribute("data-title", song.title.toLowerCase());
    card.onclick = () => playSong(song.url);
    card.innerHTML = `
      <img src="${song.img}" alt="${song.title}" />
      <p>${song.title}</p>
    `;
    playlist.appendChild(card);
  });
}

function playSong(url) {
  const player = document.getElementById("player");
  player.src = url;
  isPlaying = true;
  updatePlayButton();
}

function toggleTheme() {
  const root = document.getElementById("theme");
  root.classList.toggle("light-mode");
}

function togglePlay() {
  const playBtn = document.querySelector(".play-btn");
  if (!isPlaying) {
    playBtn.classList.add("playing");
    isPlaying = true;
  } else {
    playBtn.classList.remove("playing");
    isPlaying = false;
    document.getElementById("player").src = "";
  }
  updatePlayButton();
}

function updatePlayButton() {
  const playBtn = document.querySelector(".play-btn");
  playBtn.textContent = isPlaying ? "⏸" : "▶️";
}

function filterSongs() {
  const input = document.getElementById("search").value.toLowerCase();
  const cards = document.querySelectorAll(".song-card");
  cards.forEach(card => {
    const title = card.getAttribute("data-title");
    card.style.display = title.includes(input) ? "block" : "none";
  });
}

renderSongs();
