function check_done2(){

    localStorage.removeItem("count");



    
    my_data = JSON.parse(localStorage.getItem("my_data")); // retrieve the stored array from local storage and parse it back into an array

    if(JSON.parse(localStorage.getItem("my_data")) !== null)
    {
       //if my data is filled

    }
    else{
       //alert("empty");
    }


    html2 = `<!DOCTYPE html>
    <html>
      <head>
        <title>My Resume</title>
        <style>
          /* Styling for the page */
          body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f9f9f9;
            color: #333;
          }
          header {
            background-color: #333;
            color: white;
            padding: 20px;
            text-align: center;
          }
          h1 {
            margin: 0;
            font-size: 36px;
            letter-spacing: 2px;
          }
          section {
            margin: 20px;
            padding: 20px;
            background-color: white;
            border-radius: 5px;
            box-shadow: 0px 0px 10px #ccc;
          }
          h2 {
            margin-top: 0;
            font-size: 24px;
            letter-spacing: 1px;
            color: #333;
          }
          ul {
            margin: 0;
            padding: 0;
            list-style: none;
          }
          li {
            margin-bottom: 5px;
          }
          /* Styling for the headings */
          .heading {
            font-size: 18px;
            font-weight: bold;
            color: #333;
            margin-bottom: 5px;
          }
          /* Styling for the skills */
          .skills {
            display: flex;
            flex-wrap: wrap;
            margin-top: 10px;
          }
          .skill {
            background-color: #333;
            color: white;
            padding: 5px 10px;
            border-radius: 5px;
            margin-right: 10px;
            margin-bottom: 10px;
          }
        </style>
      </head>
      <body>
        <header>
          <h1>Preview</h1>
        </header>
        <section>
          <h2>Personal Information</h2>
          <ul>
            <li><span class="heading">Name:</span> ` + my_data[0]+ `</li>
            <li><span class="heading">Email:</span> `+my_data[1]+`</li>
            <li><span class="heading">Phone:</span>`+my_data[2]+`</li>
            </ul>
          </section>`;
document.getElementById("preview").innerHTML = html2;





 //checking if education section is done
    myedu_data = JSON.parse(localStorage.getItem("myedu_data")); // retrieve the stored array from local storage and parse it back into an array
   
    if(JSON.parse(localStorage.getItem("myedu_data")) !== null)
    {


       var school_count = parseInt(myedu_data[0]);

       
       html2 = html2 + `<section>
       <h2>Education</h2>
       `;


       for(var i=1 ; i <= school_count; i++)
       {
          var degree_name = myedu_data[i].split("---")[1];
          var school_name = myedu_data[i].split("---")[0];
          var start_year = myedu_data[i].split("---")[2];
          var end_year = myedu_data[i].split("---")[3];
          
          var add_string =`<ul><li><span class="heading">Degree:</span> ` + degree_name + `</li>
          <li><span class="heading">Institution:</span>` + school_name + `</li>
          <li><span class="heading">Start Year:</span> ` + start_year + `</li>
          <li><span class="heading">` + end_year + `</span> May 20XX</li>
          </ul>`;
        html2 = html2 + add_string;  
       }

       html2 = html2 + ` </section>`;

document.getElementById("preview").innerHTML = html2;


    }
    else{
      
    }

    //checking if experience is done
    myexp_data = JSON.parse(localStorage.getItem("myexp_data")); // retrieve the stored array from local storage and parse it back into an array
    if(JSON.parse(localStorage.getItem("myexp_data")) !== null)
    {
      // document.getElementById("experience_done").style.backgroundColor = "green";
      // document.getElementById("experience_done").innerHTML = "COMPLETED"
 

       html2 = html2 + `<section>
       <h2>Experience</h2> <ul>`;

       for(var n=1 ; n <= parseInt(myexp_data[0]); n++)
       {
          var employer_name = myexp_data[n].split("---")[0];
          var title = myexp_data[n].split("---")[1];
          var role = myexp_data[n].split("---")[2];
          var start_year = myexp_data[n].split("---")[3];
          var end_year = myexp_data[n].split("---")[4];
          
          var add_string =`
          <li>
            <span class="heading">Position:</span> ` + title + `<ul>
            <li><span class="heading">Company:</span> `
          + employer_name + `</li>
          <li><span class="heading">Employment Dates:</span> `+start_year + " - "+end_year+ `</li>
          <li><span class="heading">Responsibilities:</span></li>
          <ul>`+ role  + `</ul>
          </ul></li>`;
             html2 = html2 + add_string;
       }

       html2 = html2 + ` </ul>
       </section>`;

document.getElementById("preview").innerHTML = html2;



    }
    else{
      
    }



    

    //checking if skills is done
    myskills_data = JSON.parse(localStorage.getItem("myskills_data")); // retrieve the stored array from local storage and parse it back into an array
    if(JSON.parse(localStorage.getItem("myskills_data")) !== null)
    {
      
      var skills = myskills_data[0].split(",");

      html2 = html2 + `<section>
                <h2>Skills</h2>
                <ul class="skills">`;

      for(var a = 0; a < skills.length; a++ )
      {
         var skills_string =  `<li class="skill">` +skills[a]+ `</li>`;
         html2 = html2 + skills_string; 

      }

      html2 = html2 + `
      </ul>
      </section>`;




document.getElementById("preview").innerHTML = html2;



    }
    else{
       //  alert("referees data empty");
    }





    //checking if referees is done
    myref_data = JSON.parse(localStorage.getItem("myref_data")); // retrieve the stored array from local storage and parse it back into an array
    if(JSON.parse(localStorage.getItem("myref_data")) !== null)
    {
       
       html2 = html2 + `<section>
       <h2>Referees</h2>`;

       for(var n=1 ; n <= parseInt(myref_data[0]); n++)
       {
          var name = myref_data[n].split("---")[0];
          var title = myref_data[n].split("---")[1];
          var org = myref_data[n].split("---")[2];
          var email = myref_data[n].split("---")[3];
          var phone = myref_data[n].split("---")[4];
          
          var add_string =`<ul>
          <li><span class="heading">Name:</span>` + name + `</li>
          <li><span class="heading">Company:</span> `
          + org + `</li>
          <li><span class="heading">Title:</span> ` + title + `</li>
          <li><span class="heading">Contacts:</span>`+
             email + " <br> "+phone + `</li>
             </ul>`;
             html2 = html2 + add_string;
       }

       html2 = html2 + ` </section>
       </body>`;

document.getElementById("preview").innerHTML = html2;




    }
    else{
      
    }



 
 }
