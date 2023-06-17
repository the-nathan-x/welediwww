function check_done9() {
  sessionStorage.removeItem("count");

  let my_data = JSON.parse(sessionStorage.getItem("my_data")); // retrieve the stored array from session storage and parse it back into an array

  let html2 = `<div class="cv-container">
    <div class="header">
      <h1>My CV</h1>
    </div>
    <div class="section personal-info">
      <h2>Personal Information</h2>
      <div class="info-container">
        <div class="info-item">
          <span class="label">Name:</span>
          <span class="value">${my_data[0]}</span>
        </div>
        <div class="info-item">
          <span class="label">Email:</span>
          <span class="value">${my_data[1]}</span>
        </div>
        <div class="info-item">
          <span class="label">Phone:</span>
          <span class="value">${my_data[2]}</span>
        </div>
      </div>
    </div>`;

  // Checking if education section is done
  let myedu_data = JSON.parse(sessionStorage.getItem("myedu_data")); // retrieve the stored array from session storage and parse it back into an array
  if (JSON.parse(sessionStorage.getItem("myedu_data")) !== null) {
    let school_count = parseInt(myedu_data[0]);

    html2 += `<div class="section education">
      <h2>Education</h2>`;

    for (let i = 1; i <= school_count; i++) {
      let degree_name = myedu_data[i].split("---")[1];
      let school_name = myedu_data[i].split("---")[0];
      let start_year = myedu_data[i].split("---")[2];
      let end_year = myedu_data[i].split("---")[3];

      html2 += `<div class="education-item">
        <span class="degree">${degree_name}</span>
        <span class="institution">${school_name}</span>
        <span class="dates">${start_year} - ${end_year}</span>
      </div>`;
    }

    html2 += `</div>`;
  }

  // Checking if experience section is done
  let myexp_data = JSON.parse(sessionStorage.getItem("myexp_data")); // retrieve the stored array from session storage and parse it back into an array
  if (JSON.parse(sessionStorage.getItem("myexp_data")) !== null) {
    html2 += `<div class="section experience">
      <h2>Experience</h2>`;

    for (let n = 1; n <= parseInt(myexp_data[0]); n++) {
      let employer_name = myexp_data[n].split("---")[0];
      let title = myexp_data[n].split("---")[1];
      let role = myexp_data[n].split("---")[2];
      let start_year = myexp_data[n].split("---")[3];
      let end_year = myexp_data[n].split("---")[4];

      html2 += `<div class="experience-item">
        <span class="title">${title}</span>
        <span class="employer">${employer_name}</span>
        <span class="role">${role}</span>
        <span class="dates">${start_year} - ${end_year}</span>
      </div>`;
    }

    html2 += `</div>`;
  }

  // Checking if skills section is done
  let myskills_data = JSON.parse(sessionStorage.getItem("myskills_data")); // retrieve the stored array from session storage and parse it back into an array
  if (JSON.parse(sessionStorage.getItem("myskills_data")) !== null) {
    html2 += `<div class="section skills">
      <h2>Skills</h2>
      <ul class="skills-list">`;

    for (let skill of myskills_data) {
      html2 += `<li>${skill}</li>`;
    }

    html2 += `</ul>
    </div>`;
  }

  // Checking if referees section is done
  let myref_data = JSON.parse(sessionStorage.getItem("myref_data")); // retrieve the stored array from session storage and parse it back into an array
  if (JSON.parse(sessionStorage.getItem("myref_data")) !== null) {
    html2 += `<div class="section referees">
      <h2>Referees</h2>`;

    for (let n = 1; n <= parseInt(myref_data[0]); n++) {
      let name = myref_data[n].split("---")[0];
      let title = myref_data[n].split("---")[1];
      let org = myref_data[n].split("---")[2];
      let email = myref_data[n].split("---")[3];
      let phone = myref_data[n].split("---")[4];

      html2 += `<div class="referee-item">
        <span class="name">${name}</span>
        <span class="title">${title}</span>
        <span class="org">${org}</span>
        <span class="contact">${email}<br>${phone}</span>
      </div>`;
    }

    html2 += `</div>`;
  }

  html2 += `</div>`;
  document.getElementById("preview").innerHTML = html2;
}
