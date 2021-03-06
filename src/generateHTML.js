// Creates a card with the manager's info each time it's called
const renderManagerCards = managerArr => {
  let cards = "";
  for (const manager of managerArr) {
   
    cards += `
    <div class="col s12 m6 l4">
    <div class="card grey darken-2 hoverable z-depth-2">
      <div class="card-image">
        <img src="https://github.com/Muiasar-Al-Ani/BackEnd-Team-Profile-Generator/blob/main/images/title.jpg" />
        <span class="card-title">
          ${manager.name}
          <br>
          <span class="material-icons"> manage_accounts </span>  
          Manager
      </div>
      <div class="card-content">
        <h6>ID : ${manager.id}</h6>
        <h6>Email : <a href="mailto:${manager.email}">${manager.email}</a></h6>
        <h6>Office Number : ${manager.officeNumber}</h6>
      </div>
    </div>
  </div>
    `;
  }
  return cards;
};

// Creates a card with the engineer's info each time it's called
const renderEngineerCards = engineerArr => {
  let cards = "";
  for (const engineer of engineerArr) {
    
    cards += `
    <div class="col s12 m6 l4">
    <div class="card grey darken-2 hoverable z-depth-2">
      <div class="card-image">
        <img src="https://github.com/Muiasar-Al-Ani/BackEnd-Team-Profile-Generator/blob/main/images/title.jpg" />
        <span class="card-title">
          ${engineer.name}
          <br>
          <span class="material-icons">engineering</span>
          Engineer
      </div>
      <div class="card-content">
        <h6>ID : ${engineer.id}</h6>
        <h6>Email : <a href="mailto:${engineer.email}">${engineer.email}</a></h6>
        <h6>GitHub : <a href="https://github.com/${engineer.gitHubUserName}" target="_blank">${engineer.gitHubUserName}</a></h6>
      </div>
    </div>
  </div>
    `;
  }
  return cards;
};

// // Creates a card with the intern's info each time it's called
const renderInternCards = internArr => {
  let cards = "";
  for (const intern of internArr) {
 
    cards += `
    <div class="col s12 m6 l4">
    <div class="card grey darken-2 hoverable z-depth-2">
      <div class="card-image">
        <img src="https://github.com/Muiasar-Al-Ani/BackEnd-Team-Profile-Generator/blob/main/images/title.jpg" />
        <span class="card-title">
          ${intern.name}
          <br>
          <span class="material-icons">school</span>  
          Intern
      </div>
      <div class="card-content">
        <h6>ID : ${intern.id}</h6>
        <h6>Email : <a href="mailto:${intern.email}">${intern.email}</a></h6>
        <h6>School : ${intern.school}</h6>
      </div>
    </div>
  </div>
    `;
  }
  return cards;
};


// Creates most of the HTML and calls the cards generator functions to finish rendering
const generateHTML = (managerArr, engineerArr, internArr) => {
  return `
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="shortcut icon" href="https://github.com/Muiasar-Al-Ani/BackEnd-Team-Profile-Generator/blob/main/images/team.png" type="image/png">

  <!-- Linking Materialize Icons Library -->
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />

  <!-- Linking Materialize CSS Library -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" />


  <title>My Team</title>
</head>

<body>
  <!-- Header Element -->
  <header class="navbar-fixed ">
    <nav id="navbar ">
      <div class="nav-wrapper valign-wrapper grey darken-3 z-depth-5">
        <a href="" class="brand-logo center">My Team</a>
        
      </div>
    </nav>
  </header>
  <main>
  <div class="parallax-container">
    <div class="parallax">
      <img src="https://github.com/Muiasar-Al-Ani/BackEnd-Team-Profile-Generator/blob/main/images/team1.jpg" />
    </div>
  </div>
  <div class="section grey darken-3 white-text">
    <div class="row container">
        ${renderManagerCards(managerArr)}
        ${renderEngineerCards(engineerArr)}
        ${renderInternCards(internArr)}
      </div>
    </div>
    <div class="parallax-container">
      <div class="parallax">
        <img src="https://github.com/Muiasar-Al-Ani/BackEnd-Team-Profile-Generator/blob/main/images/team2.jpg"/>
      </div>
    </div>
    </main>

  <footer class="page-footer grey darken-3">
    <div class="container">
      <div class="row">
        <div class="col l6 s12">
          <h5 class="white-text">Team Profile Generator</h5>
          <p class="grey-text text-lighten-4">
            BackEnd Team Profile Generator!
          </p>
        </div>
        <div class="col l4 offset-l2 s12">
          <h5 class="white-text">Written by</h5>
          <ul>
            <li>
              <a target="_blank" class="grey-text text-lighten-3" href="https://github.com/Muiasar-Al-Ani">Muiasar-Al-Ani</a>
            </li>
        
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-copyright grey darken-2 z-depth-5">
      <div class="container">?? 2021 My Team</div>
    </div>
  </footer>

  <!-- Materialize initiate parallax script -->
  <script>
    document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems, 0);
  });
  </script>

  <!-- Linking Materialize JS Library -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
</body>

</html>
`;
};

// Exports the generateHTML function
module.exports = generateHTML;
