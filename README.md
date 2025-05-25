<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Harkrit Portfolio</title>
  <link rel="stylesheet" href="style.css">
  <link rel="stylesheet" href="script.js">
</head>

<body>
  <header>
    <!-- Navbar -->
    <div class="navbar">
      <div class="name">Harkrit</div>
      <div class="navbar-head">
        <a href="#About">About</a>
        <a href="#Education">Education</a>
        <a href="#Skills">Skills</a>
        <a href="#Projects">Projects</a>
        <a href="#Experience">Experience</a>
        <a href="#Contact">Contact</a>
      </div>
    </div>

    <!-- Hero Section -->
    <div class="hero" id="Home">
      <div class="hero-image">
        <img src="Harkrit.jpeg" alt="No Image Found" class="profile-image">
      </div>
      <div class="hero-content">
        <h1>
          Hii, I'm
          <span class="hero-text">Harkrit</span>
        </h1>
        <p>
          Python Developer | AI Developer
        </p>
        <button class="btn">
          <a href="#Projects">Explore my Work</a>
        </button>
      </div>
    </div>
  </header>

  <!-- About Section-->
  <div class="body-section" id="About">
    <table class="aboutme">
      <p class="me">About Me</p>
      <tbody class="tbody">
        <tr>
          <td class="aboutmetdone">Name</td>
          <td class="aboutmetdtwo">Harkrit</td>
        </tr>
        <tr>
          <td class="aboutmetdone">Age</td>
          <td class="aboutmetdtwo">20</td>
        </tr>
        <tr>
          <td class="aboutmetdone">Education</td>
          <td class="aboutmetdtwo">B.Tech in CSE</td>
        </tr>
        <tr>
          <td class="aboutmetdone">College</td>
          <td class="aboutmetdtwo">JMIETI, Radaur</td>
        </tr>
        <tr>
          <td class="aboutmetdone">Skills</td>
          <td class="aboutmetdtwo">Python, Flask, ML, DL, MySQL, HTML, CSS, JS</td>
        </tr>
        <tr>
          <td class="aboutmetdone">Languages</td>
          <td class="aboutmetdtwo">English, Hindi, Punjabi</td>
        </tr>
        <tr>
          <td class="aboutmetdone">Resume</td>
          <td class="aboutmetdtwo">
            <button class="download-btn" onclick="downloadResume()">
              <svg class="download-icon" viewBox="4 12 14 14" style="width: 14px; height: 64px; ">
                <path d="M12 15.577l-3.538-3.539-1.415 1.414L12 18.405l4.953-4.953-1.414-1.414L12 15.577z" />
                <path d="M11 3h2v9h-2V3z" />
                <path d="M4 19h16v2H4v-2z" />
              </svg>
            </button>
            <script>
              function downloadResume() {
                // Create a link to download the original resume file
                const link = document.createElement('a');
                link.href = 'Harkrit Resume.pdf';  // Your original file
                link.download = 'Harkrit Resume.pdf';
                link.click();
              }
            </script>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</body>

</html>
