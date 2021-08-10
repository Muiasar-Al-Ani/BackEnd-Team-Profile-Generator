const renderManagerCards = managerArr => {};
const renderEngineerCards = engineerArr => {};
const renderInternCards = internArr => {};

const renderTeamCards = teamArr => {
  const managerArr = teamArr.filter(teamMember => teamMember === "Manager");
  const engineerArr = teamArr.filter(teamMember => teamMember === "Engineer");
  const internArr = teamArr.filter(teamMember => teamMember === "Intern");

  return `
  ${renderManagerCards(managerArr)}
  ${renderEngineerCards(engineerArr)}
  ${renderInternCards(internArr)}
  `;
};

const generateHTML = teamMembers => {
  return `
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="shortcut icon" href="../images/team.png" type="image/png">

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
      <div class="nav-wrapper valign-wrapper grey darken-3">
        <a href="" class="brand-logo center">My Team</a>
        
      </div>
    </nav>
  </header>
  <main>
  <div class="parallax-container">
    <div class="parallax">
      <img src="../images/team1.jpg" />
    </div>
  </div>
  <div class="section grey darken-3 white-text">
    <div class="row container">
      <div class="col s12 m10 l3">
        ${renderTeamCards(teamMembers)}
      </div>
      </div>
    </div>
    <div class="parallax-container">
      <div class="parallax">
        <img src="../images/team2.jpg"/>
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
    <div class="footer-copyright grey darken-2">
      <div class="container">© 2021 My Team</div>
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

module.exports = generateHTML;
