//CONSTRUCTORS

const Library = function (name, creator) {
    this.name = name;
    this.creator = creator;
    this.playists = [];
}
Library.prototype.printInfo = function () {
    let playlistString = '';
    this.playists.map(playlist => {
        playlistString += ` ${playlist.name} ,`
    })
    console.log(`This library is called ${this.name}. It was created by ${this.creator}. The playlist(s) is/are named${playlistString}`)
}


const Playlist = function (name) {
    this.name = name;
    this.tracks = []
}
//calculate the average of the total ratings.
Playlist.prototype.rating = function () {
    let totalRatings = 0;
    let ratingsSum = 0;
    this.tracks.map(track => {
        if (track.rating < 0 || track.rating > 5) {
            return console.log("rating must be between 0 and 5")
        }
        totalRatings++;
        ratingsSum += track.rating
    })
    console.log(`The average rating for tracks in ${this.name} is ${ratingsSum / totalRatings}`);

}
//get the average length of total tracks in the playlist
Playlist.prototype.duration = function () {
    let totalTracks = 0;
    let totalDuration = 0;
    this.tracks.map(track => {
        totalTracks++;
        totalDuration += track.length
    })
    console.log(`Average track length of ${this.name} is ${totalDuration / totalTracks} seconds long`);
}
//add playlist to library
Playlist.prototype.addToLibrary = function (library) {
    library.playists.push(this);
}



const Track = function (title, rating, length) {
    this.title = title;
    this.rating = rating;
    this.length = length;
}
//add track to playlist
Track.prototype.addToPlaylist = function (playlist) {
    playlist.tracks.push(this);
}



//DRIVER CODE

//create lib
const mattLib = new Library('Ipod Nano', 'Matt');

//create playlists
const mattPlay = new Playlist('Jammers');
const clairePlay = new Playlist('Jammers 2: The Jammening');

//create tracks
const song1 = new Track('firestarter', 5, 120);
const song2 = new Track('breathe', 5, 180);
const song3 = new Track('born to be wild', 1, 230);
const song4 = new Track('dancing queen', 2, 156);
const song5 = new Track('S.O.S.', 5, 198);
const chanson1 = new Track('frere jacques', 1, 30);
const chanson2 = new Track('abcs', 2, 45);

//init
song1.addToPlaylist(mattPlay);
song2.addToPlaylist(mattPlay);
song3.addToPlaylist(mattPlay);
song4.addToPlaylist(mattPlay);
song5.addToPlaylist(mattPlay);

chanson1.addToPlaylist(clairePlay);
chanson2.addToPlaylist(clairePlay);

mattPlay.duration();
mattPlay.rating();

mattPlay.addToLibrary(mattLib);
clairePlay.addToLibrary(mattLib)
mattLib.printInfo();