<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <!-- Bootstrap CSS -->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
      crossorigin="anonymous"
    />
    <link href="styles.css" rel="stylesheet" />
    <!-- fontawesome setup -->
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
      integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
    <!-- Bootstrap scripts -->
    <script
      src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
      integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"
      integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js"
      integrity="sha384-w1Q4orYjBQndcko6MimVbzY0tgp4pWB4lZ7lr30WKz0vr/aWKhXdBNmNb5D92v7s"
      crossorigin="anonymous"
    ></script>
    <title>Curtis Bowser - Software Developer</title>
    <link rel="icon" type="image/x-icon" href="favicon.ico" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&family=Playfair+Display:wght@400;700&display=swap"
      rel="stylesheet"
    />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
    />
  </head>
  <body>
    <div class="header container-fluid">
      <div
        class="row d-flex flex-wrap py-3 align-items-center justify-content-between"
      >
        <a
          href="index.html"
          class="text-dark text-decoration-none col-md-7 col-sm-12"
        >
          <h1 class="header-name">Curtis Bowser</h1>
        </a>
        <div class="col-md-5 col-sm-12">
          <ul class="nav nav-pills header-buttons float-end">
            <li class="nav-item">
              <a href="index.html" class="nav-link active" aria-current="page"
                >Home</a
              >
            </li>
            <li class="nav-item">
              <a href="projects.html" class="nav-link">Projects</a>
            </li>
            <li class="nav-item">
              <a href="contact.html" class="nav-link">Get in Touch</a>
            </li>
            <li class="nav-item">
              <a href="Bowser Curtis Resume.pdf" class="nav-link">Resume</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="home-container about-container">
      <div class="container-fluid">
        <div class="row align-items-center">
          <div class="col-md-5 col-sm-12 about-me">
            
            <p class="about-me-desc">
              I'm a junior developer located in Maryland. I have a strong passion for Development. 
              I have taken several courses to expand my skillset through the building of projects. After 
              finishing my degree in Economics, like many others, I realized my passions laid outside of my field of study.
              I started searching for a field I could both excel and find personal enjoyment in. While looking into the field of Data Science,
              one of my courses had a section on Python.<br><br><br>That's when it clicked. I needed to become a developer.<br><br>
              Two things made this clear:<br>
              • Being able to build something out 
              and have instant feedback on your work is incredibly fulfilling<br>
              • There are infinite things to learn. You will never know everything. I can always continue learning<br><br><br>
              Since beginning, I have focused on Python, Flask, Django for the backend, and Bootstrap, HTML, and CSS for the frontend. 
              This site is an example of the advancement of my frontend skills. Now, with a catalog of projects behind me, I am ready to offer my services.
            </p>
          </div>
          <div class="col-md-7 col-sm-12">
            <img class="img-about float-end" src="About Me.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid icon-container">
      <h2 class="icon-heading">Tools/Languages</h2>
      <div class="row icons">
        <div class="col">
          <i class="devicon-python-plain-wordmark tools"></i>
          <i class="devicon-django-plain-wordmark tools"></i>
          <i class="devicon-flask-original-wordmark tools"></i>
          <i class="devicon-selenium-original tools"></i>
          <i class="devicon-mysql-plain-wordmark tools"></i>
        </div>
      </div>
      <div class="row icons">
        <div class="col">
          <i class="devicon-github-original-wordmark tools"></i>
          <i class="devicon-html5-plain-wordmark tools"></i>
          <i class="devicon-bootstrap-plain-wordmark tools"></i>
          <i class="devicon-css3-plain-wordmark tools"></i>
        </div>
      </div>
    </div>
    <div class="bottom-container">
      <a class="footer-link" href="https://www.linkedin.com/in/bwsrcurtis/"
        ><i class="fa-brands fa-linkedin"></i
      ></a>
      <a class="footer-link" href="https://github.com/bwsrcurtis"
        ><i class="fa-brands fa-github"></i
      ></a>
      <a class="footer-link" href="https://www.kaggle.com/curtisbowser"
        ><i class="fa-brands fa-kaggle"></i
      ></a>
      <p class="copyright">© 2022 Curtis Bowser</p>
    </div>
    <script
      src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"
      integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js"
      integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF"
      crossorigin="anonymous"
    ></script>
  </body>
</html>
