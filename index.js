// Array of song objects
const songs = [
  { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
  { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
  { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
  { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
  { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
  {
    title: "Escape (The Piña Colada Song)",
    artist: "Rupert Holmes",
    genre: "Pop",
  },
  { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
  {
    title: "Ain't No Mountain High Enough",
    artist: "Marvin Gaye & Tammi Terrell",
    genre: "R&B",
  },
  { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
  { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
  {
    title: "Fooled Around and Fell in Love",
    artist: "Elvin Bishop",
    genre: "Rock",
  },
];

// Object containing each Guardian's preferred genre
const guardians = {
  "Star-Lord": "Rock",
  Gamora: "Pop",
  Drax: "Rock",
  Rocket: "R&B",
  Groot: "Pop",
};

// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {
  const playlistsContainer = document.getElementById("playlists");

  Object.keys(guardians).map((guardian) => {
    const preferredGenre = guardians[guardian];
    const guardianPlaylist = songs.filter(
      (song) => song.genre === preferredGenre
    );

    // Create playlist elements
    const playlistDiv = document.createElement("div");
    playlistDiv.className = "playlist";

    const playlistTitle = document.createElement("h2");
    playlistTitle.textContent = `${guardian}'s Playlist`;
    playlistDiv.appendChild(playlistTitle);

    guardianPlaylist.map((song) => {
      const songDiv = document.createElement("div");
      songDiv.className = "song";

      const songTitle = document.createElement("div");
      songTitle.className = "song-title";
      songTitle.textContent = `${song.title} - ${song.artist}`;
      songDiv.appendChild(songTitle);

      playlistDiv.appendChild(songDiv);
    });

    playlistsContainer.appendChild(playlistDiv);
  });
}

// Call generatePlaylist and display the playlists for each Guardian
generatePlaylist(guardians, songs);
