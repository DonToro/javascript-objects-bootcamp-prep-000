let artist1="myBloodyValentine"
let artist2=
let artist3="philOchs"
let song1="Sometimes"
let song2=
let song3="Here\'sToTheStateOfMissisippi"

var playlist = {
  artist1: "song1",
  artist2: "song2",
  artist3: "song3"
};

function updatePlaylist(thePlaylist, artistName, songTitle) {
  return Object.assign({}, thePlaylist, { [artistName]: songTitle});
}

updatePlaylist(playlist, "artist4", "song4");

function removeFromPlaylist(thePlaylist, artistName) {
  delete thePlaylist[artistName];
  return thePlaylist;
}

removeFromPlaylist(playlist, "artist2");