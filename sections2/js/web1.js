function check_done3(){

    sessionStorage.removeItem("count");



    
    my_data = JSON.parse(sessionStorage.getItem("my_data")); // retrieve the stored array from session storage and parse it back into an array

    if(JSON.parse(sessionStorage.getItem("my_data")) !== null)
    {
       //if my data is filled

    }
    else{
       //alert("empty");
    }


    html2 = `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Resume</title>
      <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet">
      <link rel="stylesheet" href="styles.css">
    
    
    
      <style>
    
    
    
    
        body {
            margin: 0;
            padding: 0;
            font-family: 'Montserrat', sans-serif;
            font-size: 16px;
            color: #555;
            background-color: #fff;
          }
          
          header {
            background-color: #ed1c24;
            color: #fff;
            text-align: center;
            padding: 60px 0;
          }
          
          header h1 {
            margin: 0;
            font-size: 48px;
            font-weight: bold;
          }
          
          header h2 {
            margin: 10px 0 0;
            font-size: 24px;
            font-weight: normal;
          }
          
          .contact-info {
            list-style: none;
            margin: 30px 0 0;
            padding: 0;
          }
          
          .contact-info li {
            display: inline-block;
            margin: 0 10px;
            font-size: 18px;
          }
          
          .contact-info a {
            color: #fff;
            text-decoration: none;
          }
          
          .contact-info a:hover {
            text-decoration: underline;
          }
          
          i {
            margin-right: 5px;
          }
          
          main {
            max-width: 800px;
            margin: 0 auto;
            padding: 30px;
          }
          
          section {
            margin-bottom: 40px;
          }
          
          h2 {
            font-size: 24px;
            font-weight: bold;
            margin: 0 0 20px;
          }
          
          p {
            margin: 0 0 20px;
          }
          
          ul.experience {
            list-style: none;
            padding: 0;
            margin: 0;
          }
          
          ul.experience li {
            margin: 0 0 40px;
            position: relative;
          }
          
          ul.experience li:before {
            content: "";
            display: block;
            width: 15px;
            height: 15px;
            border-radius: 50%;
            background-color: #ef5350;
            position: absolute;
            top: 5px;
            left: -30px;
          }
          
          ul.experience li .position {
            font-size: 20px;
            font-weight: bold;
            margin: 0 0 10px;
          }
          
          ul.experience li .company {
            font-size: 16px;
            font-weight: bold;
            margin: 0 0 10px;
          }
          
          ul.experience li .dates {
            font-size: 16px;
            font-weight: normal;
            margin: 0 0 10px;
          }
          
          ul.experience li ul.responsibilities {
            margin: 0 0 0 40px;
            padding: 0;
          }
          
          
        ul.experience li ul.responsibilities li {
            font-size: 16px;
            margin: 0 0 10px;
          }
          
          ul.education {
            list-style: none;
            padding: 0;
            margin: 0;
          }
          
          ul.education li {
            margin: 0 0 40px;
            position: relative;
          }
          
          ul.education li:before {
            content: "";
            display: block;
            width: 15px;
            height: 15px;
            border-radius: 50%;
            background-color: #ef5350;
            position: absolute;
            top: 5px;
            left: -30px;
          }
          
          ul.education li .degree {
            font-size: 20px;
            font-weight: bold;
            margin: 0 0 10px;
          }
          
          ul.education li .institution {
            font-size: 16px;
            font-weight: bold;
            margin: 0 0 10px;
          }
          
          ul.education li .dates {
            font-size: 16px;
            font-weight: normal;
            margin: 0 0 10px;
          }
          
          ul.skills {
            list-style: none;
            margin: 0;
            padding: 0;
            display: flex;
            flex-wrap: wrap;
          }
          
          ul.skills li {
            background-color: #ef5350;
            color: #fff;
            font-size: 16px;
            font-weight: bold;
            padding: 8px 12px;
            margin: 0 10px 10px 0;
            border-radius: 20px;
          }
          
          @media screen and (max-width: 768px) {
            header {
              padding: 40px 0;
            }
            
            header h1 {
              font-size: 36px;
            }
            
            header h2 {
              font-size: 20px;
            }
            
            .contact-info li {
              font-size: 16px;
            }
            
            main {
              padding: 20px;
            }
            
            h2 {
              font-size: 20px;
            }
            
            p {
              font-size: 16px;
            }
            
            ul.experience li .position {
              font-size: 18px;
            }
            
            ul.experience li .company {
              font-size: 14px;
            }
            
            ul.experience li .dates {
              font-size: 14px;
            }
            
            ul.experience li ul.responsibilities li {
              font-size: 14px;
            }
            
            ul.education li .degree {
              font-size: 18px;
            }
            
            ul.education li .institution {
              font-size: 14px;
            }
            
            ul.education li .dates {
              font-size: 14px;
            }
            
            ul.skills li {
              font-size: 14px;
              padding: 6px 10px;
              margin: 0 8px 8px 0;
              border-radius: 15px;
            }
          }
      </style>
    
    
    
    
    </head>
    <body>
      <header>
        <h1><font color="white"> ` + my_data[0]+ `</font></h1>
        <ul class="contact-info">
          <li><a href="tel:`+my_data[2]+`"><i class="fas fa-phone"></i> `+my_data[2]+`</a></li>
          <li><a href="mailto:`+my_data[1] +`"><i class="fas fa-envelope"></i> `+my_data[1]+`</a></li> </ul>
          </header>`
          
          
          
document.getElementById("preview").innerHTML = html2;





 //checking if education section is done
    myedu_data = JSON.parse(sessionStorage.getItem("myedu_data")); // retrieve the stored array from session storage and parse it back into an array
   
    if(JSON.parse(sessionStorage.getItem("myedu_data")) !== null)
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
    myexp_data = JSON.parse(sessionStorage.getItem("myexp_data")); // retrieve the stored array from session storage and parse it back into an array
    if(JSON.parse(sessionStorage.getItem("myexp_data")) !== null)
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
    myskills_data = JSON.parse(sessionStorage.getItem("myskills_data")); // retrieve the stored array from session storage and parse it back into an array
    if(JSON.parse(sessionStorage.getItem("myskills_data")) !== null)
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
    myref_data = JSON.parse(sessionStorage.getItem("myref_data")); // retrieve the stored array from session storage and parse it back into an array
    if(JSON.parse(sessionStorage.getItem("myref_data")) !== null)
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
