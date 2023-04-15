function check_done(){

    localStorage.removeItem("count");



    
    my_data = JSON.parse(localStorage.getItem("my_data")); // retrieve the stored array from local storage and parse it back into an array

    if(JSON.parse(localStorage.getItem("my_data")) !== null)
    {
       //if my data is filled

    }
    else{
      // alert("empty");
    }


    html2 = `<!DOCTYPE html>
<html>
<head>
<title>My CV</title>
<style>
/* Styling for the table */
table {
border-collapse: collapse;
width: 100%;
}
th, td {
border: 1px solid #ddd;
padding: 8px;
text-align: left;
}
th {
background-color: #eee;
}
/* Styling for the page */
body {
font-family: Arial, sans-serif;
margin: 0;
padding: 0;
}
header {
background-color: #333;
color: white;
padding: 20px;
text-align: center;
}
h1 {
margin: 0;
}
section {
margin: 20px;
}
</style>
</head>
<body>
<header>
<h1>PREVIEW</h1>
</header>
<section>
<h2>Personal Information</h2>
<table>
<tr>
  <th>Name</th>
  <td>` + my_data[0]+ `</td>
</tr>
<tr>
  <th>Email</th>
  <td>`+my_data[1]+`</td>
</tr>
<tr>
  <th>Phone</th>
  <td>`+my_data[2]+`</td>

</table>`;
document.getElementById("preview").innerHTML = html2;





 //checking if education section is done
    myedu_data = JSON.parse(localStorage.getItem("myedu_data")); // retrieve the stored array from local storage and parse it back into an array
   
    if(JSON.parse(localStorage.getItem("myedu_data")) !== null)
    {


       var school_count = parseInt(myedu_data[0]);

       
       html2 = html2 + `</section>
<section>
<h2>Education</h2>
<table>
<tr>
  <th>Degree</th>
  <th>Institution</th>
  <th>Start Date</th>
  <th>Graduation Date</th>
</tr>`;


       for(var i=1 ; i <= school_count; i++)
       {
          var degree_name = myedu_data[i].split("---")[1];
          var school_name = myedu_data[i].split("---")[0];
          var start_year = myedu_data[i].split("---")[2];
          var end_year = myedu_data[i].split("---")[3];
          
          var add_string =`<tr><td>` + degree_name + `</td>
  <td>` + school_name + `</td>
  <td>` + start_year + `</td>
  <td>` + end_year + `</td>
</tr>`;
        html2 = html2 + add_string;  
       }

       html2 = html2 + ` </table>
</section>`;

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
<h2>Experience</h2>
<table>
<tr>
  <th>Position</th>
  <th>Company</th>
  <th>Roles</th>
  <th>Employment Dates</th>
</tr>`;

       for(var n=1 ; n <= parseInt(myexp_data[0]); n++)
       {
          var employer_name = myexp_data[n].split("---")[0];
          var title = myexp_data[n].split("---")[1];
          var role = myexp_data[n].split("---")[2];
          var start_year = myexp_data[n].split("---")[3];
          var end_year = myexp_data[n].split("---")[4];
          
          var add_string =`<tr><td>` + title + `</td><td>`
          + employer_name + `</td><td>` + role + `</td><td>`+
             start_year + " - "+end_year + `</td></tr>`;
             html2 = html2 + add_string;
       }

       html2 = html2 + ` </table>
</section>`;

document.getElementById("preview").innerHTML = html2;



    }
    else{
      
    }



    

    //checking if skills is done
    myskills_data = JSON.parse(localStorage.getItem("myskills_data")); // retrieve the stored array from local storage and parse it back into an array
    if(JSON.parse(localStorage.getItem("myskills_data")) !== null)
    {
      

       html2 = html2 + `<section>
<h2>Skills</h2>
<table>
<tr>
  
<td>`+ myskills_data[0]+`</td></tr></table></section>`;


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
<h2>Referees</h2>
<table>
<tr>
  <th>Name</th>
  <th>Company</th>
  <th>Title</th>
  <th>Contact</th>
</tr>`;

       for(var n=1 ; n <= parseInt(myref_data[0]); n++)
       {
          var name = myref_data[n].split("---")[0];
          var title = myref_data[n].split("---")[1];
          var org = myref_data[n].split("---")[2];
          var email = myref_data[n].split("---")[3];
          var phone = myref_data[n].split("---")[4];
          
          var add_string =`<tr><td>` + name + `</td><td>`
          + org + `</td><td>` + title + `</td><td>`+
             email + " <br> "+phone + `</td></tr>`;
             html2 = html2 + add_string;
       }

       html2 = html2 + ` </table>
</section>`;

document.getElementById("preview").innerHTML = html2;




    }
    else{
      
    }



 
 }
