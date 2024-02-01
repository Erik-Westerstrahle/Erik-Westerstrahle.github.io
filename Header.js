// Header.js
function displaymyCVWebsite() {
    document.body.innerHTML = `
        <h1>CV Website</h1>
        <div id="background-square"></div> <!-- Background square -->
        <div id="box1" class="text-box_1"></div>
        <div id="box2" class="text-box"></div>
        <div id="box3" class="text-box"></div>
    `;

    document.getElementById('box1').innerHTML = 'Greetings my name is E. I am an Computer Engineering student and 3D Artist';

    document.getElementById('box2').innerHTML = '<a href="https://www.artstation.com/iberit/albums/1052928" target="_blank">You can view my 3D art here</a>';

   // document.getElementById('box3').innerHTML = 'Link to my code projects';
   document.getElementById('box3').innerHTML = '<a href="code_projects.html" target="_blank">View my code projects</a>';




}

window.onload = displaymyCVWebsite;
