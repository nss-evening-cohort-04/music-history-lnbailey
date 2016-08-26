var songs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

// add one song to the beginning and the end of the array

songs.unshift("Space Oddity > by David Bowie on the album David Bowie");
songs.push("Radioactive > by Imagine Dragons on the album Night Visions");

// Loop over the array and remove any words or characters that obviously don't belong
// "*@(!"
// Replace the > character in each item with a - character.

var songString = document.getElementById("songList");

for (var i = 0; i < songs.length; i++) {
  songs[i] = songs[i].replace(/\*/g, "");
  songs[i] = songs[i].replace(/\(/g, "");
  songs[i] = songs[i].replace(/@/g,"");
  songs[i] = songs[i].replace(/!/g,"");
  songs[i] = songs[i].replace(/>/g," - ");

// Must add each string to the DOM in index.html in the main content area.
// {Song name} by {Artist} on the album {Album}

  songString.innerHTML += "<p>" + songs[i] + "</p>";
};
