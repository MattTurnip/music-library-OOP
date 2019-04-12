var library = {

    tracks: {
        t01: {
            id: "t01",
            name: "Code Monkey",
            artist: "Jonathan Coulton",
            album: "Thing a Week Three"
        },
        t02: {
            id: "t02",
            name: "Model View Controller",
            artist: "James Dempsey",
            album: "WWDC 2003"
        },
        t03: {
            id: "t03",
            name: "Four Thirty-Three",
            artist: "John Cage",
            album: "Woodstock 1952"
        }
    },

    playlists: {
        p01: {
            id: "p01",
            name: "Coding Music",
            tracks: ["t01", "t02"]
        },
        p02: {
            id: "p02",
            name: "Other Playlist",
            tracks: ["t03"]
        }
    },

    printPlaylists: function () {
        for (var id in this.playlists) {
            var idOfTrack = this.playlists[id];
            console.log(idOfTrack.id + ": " + idOfTrack.name + " - " + idOfTrack.tracks.length + " tracks");
        }
    },

    printTracks: function () {
        for (var i in this.tracks) {
            var shortcut = this.tracks[i];
            console.log(shortcut.id + ": " + shortcut.name + "by " + shortcut.artist + " (" + shortcut.album + ")");
        }
    },

    printPlaylist: function (playlistId) {
        var content = this.playlists[playlistId]
        console.log(content.id + ": " + content.name + " - " + content.tracks.length + " tracks");
        var songSelect = this.tracks;

        for (var songs in content.tracks) {
            var songId = content.tracks[songs];
            console.log(songSelect[songId].id + ": " + songSelect[songId].name + " by " + songSelect[songId].artist + " (" + songSelect[songId].album + ")")
        }
    },

    addTrackToPlaylist: function (trackId, playlistId) {
        var playlistSelector = this.playlists[playlistId];
        var trackSelector = this.tracks[trackId];

        playlistSelector.tracks.push(trackSelector.id);
        console.log(playlistSelector.tracks)
    },

    uid: function () {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    },

    addTrack: function (name, artist, album) {
        var id = this.uid();
        this.tracks[id] = {
            id: id,
            name: name,
            artist: artist,
            album: album
        };
    },

    addPlaylist: function (name) {
        var id = this.uid();
        this.playlists[id] = {
            id: id,
            name: name,
        };

    }

}
