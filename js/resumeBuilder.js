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

//internationalizeButton on Code
function inName(){
  var arrayName = bio.name.trim().split(" ");
  arrayName[1]= arrayName[1].toUpperCase();
  arrayName[0] = arrayName[0].slice(0,1).toUpperCase() + arrayName[0].slice(1).toLowerCase();
  var inName =  arrayName.join(" ");
  return inName;
}
$("#main").append(internationalizeButton);


//Work Object and Function
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

work.display = function(){
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

//education object
var education = {
  "schools":[
    {
      "name": "University of Leeds",
      "degree":"BEng Chemical and Nuclear Engineering",
      "dates":"2012 - 2015",
      "location":"Leeds, UK",
      "major":"Chemical Engineering"
    }
  ],
  "onlineCourses":[
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

education.display = function(){
  if (education.schools.length > 0 || education.onlineCourses.length > 0) {
    for (school in education.schools){
      $("#education").append(HTMLschoolStart);

      var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
      var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
      var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
      var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
      var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);

      $(".education-entry:last").append(formattedName);
      $(".education-entry:last").append(formattedDegree);
      $(".education-entry:last").append(formattedDates);
      $(".education-entry:last").append(formattedLocation);
      $(".education-entry:last").append(formattedMajor);
    };

    if (education.onlineCourses.length > 0) {
      $("#education").append(HTMLonlineClasses);
      for (onlinecourse in education.onlineCourses){
        $("#education").append(HTMLschoolStart);

        var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlinecourse].title);
        var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlinecourse].school);
        var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlinecourse].dates);
        var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[onlinecourse].url);

        $(".education-entry:last").append(formattedTitle);
        $(".education-entry:last").append(formattedSchool);
        $(".education-entry:last").append(formattedDates);
        $(".education-entry:last").append(formattedURL);

      };
    };
  };
};



//projects object and function
var projects = {
  "projects":[
    {
      "title":"Portfolio",
      "dates":"Jan 2016",
      "description":"My portfolio website where I am constantly improving and showcasing new projects that I have completed",
      "images":[
        "images/197x148.gif"
      ]
    },
    {
      "title":"Online Resume",
      "dates":"Jan 2016",
      "description": "What you are currently viewing is the my Online Resume project, where the initial file was providing by Udacity for the Front-End Web Developer Nanodegree, and I have manupilated the file with the use of Javascript. I have also learned in this project how to use a version control, Github.",
      "images":[
        "images/197x148.gif",
        "images/197x148.gif"
      ]
    }
  ]
};

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


// Call function to run the site.
work.display();
projects.display();
education.display();


$("#mapDiv").append(googleMap);
