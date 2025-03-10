function loadNavbar() {

    fetch('navbar.html')
      .then(response => response.text())  // Read the file as text
      .then(data => {
        // Inject the loaded navbar content into the div with id "navbar-container"
        document.getElementById('navbar-container').innerHTML = data;
      })
      .catch(error => {
        // If there's an error (e.g., file not found), log the error
        console.error('Error loading the navbar:', error);
      });
  }
  