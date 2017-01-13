// bio object
var bio = {
  "name": "Rameez Khan",
  "age": 22,
  "role":"Front-End Developer",
  "contacts":{
    "mobile":"07730370982",
    "email":"Rameezkhan.1@hotmail.co.uk",
    "github":"Rxmeez",
    "twitter":"@Ramxxz",
    "location":"London, UK"
  },
  "bioURL":"images/Rameez-Portfolio.jpg",
  "welcomeMsg":"Welcome to my Resume ",
  "skills":["HTML","CSS","JS","JQuery"]
};

//work object
var work = {
  "jobs":[
    {
      "employer":"Schneider Electric",
      "title":"Industrial Engineer",
      "location":"Leeds,UK",
      "dates":"2015 - Current",
      "description": "Project lead in digitising process within Schneider Electric Leeds Site. Currently qualified in Yellow Belt Lead Six Sigma and Prince2 Project Management Foundation."
    }
  ]
};

//education object
var education = {
  "schools":[
    {
      "name": "University of Leeds",
      "degree":"BEng Chemical and Nuclear Engineering",
      "dates":"2012 - 2015",
      "location":"Leeds, UK"
    }
  ],
  "onlneCourses":[
    {
      "title":"Front-End Web Developer Nanodegree",
      "school":"Udacity",
      "dates":"December 2016 - Current",
      "url":"https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    },
    {
      "title":"Front-End Development Certification",
      "school":"FreeCodeCamp",
      "dates":"November 2016 - Current",
      "url":"https://www.freecodecamp.com/rxmeez"
    }
  ]
};

//projects object
var projects = {
  "projects":[
    {
      "title":"Portfolio",
      "dates":"Jan 2016",
      "description":"My portfolio website where I am constantly improving and showcasing new projects that I have completed",
      "images":[
        "images/197x148.gif"
      ]
    }
  ]
};

//FormattedName and FormattedRole
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var formattedPic = HTMLbioPic.replace("%data%","images/Rameez-Portfolio.jpg");
$("#header").append(formattedPic);

//Check if skills are included.
if(bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);

  for(skill in bio.skills){
    var formattedSkill = HTMLskills.replace("%data%",bio.skills[skill]);
    $("#skills").append(formattedSkill);
  };
};


//Worked on Code

function inName(){
  var arrayName = bio.name.trim().split(" ");
  arrayName[1]= arrayName[1].toUpperCase();
  arrayName[0] = arrayName[0].slice(0,1).toUpperCase() + arrayName[0].slice(1).toLowerCase();
  var inName =  arrayName.join(" ");
  return inName;
}
$("#main").append(internationalizeButton);


//All about Work
function displayWork(){
  for (job in work.jobs){
    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;

    $(".work-entry:last").append(formattedEmployerTitle);

    var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
    var formattedDates= HTMLworkDates.replace("%data%", work.jobs[job].dates)
    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

    $(".work-entry:last").append(formattedDates);
    $(".work-entry:last").append(formattedLocation);
    $(".work-entry:last").append(formattedDescription);
  };
};

displayWork();

//All about projects
projects.display = function(){
  for (project in projects.projects){
    $("#projects").append(HTMLprojectStart);

    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    $(".project-entry:last").append(formattedTitle);

    var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
    $(".project-entry:last").append(formattedDates);

    var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
    $(".project-entry:last").append(formattedDescription);

    if (projects.projects[project].images.length>0){
      for (image in projects.projects[project].images){
        var formattedImages= HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
        $(".project-entry:last").append(formattedImages);
      }
    }
  };
};

projects.display();


$("#mapDiv").append(googleMap);




/*
$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x,y);
});

function locationizer(work_obj){
  var arrayOfLocationWorked = [];
  for(i=0;i<arrayOfLocationWorked; i++){
    var newLocation = work.jobs[i].location;
    arrayOfLocationWorked.push(newLocation);
  }
  return arrayOfLocationWorked;
}
*/
