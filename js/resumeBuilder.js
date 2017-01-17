var data = "%data%";

// bio object
var bio = {
    "name": "Rameez Khan",
    "age": 22,
    "role": "Front-End Developer",
    "contacts": {
        "mobile": "07730370982",
        "email": "Rameezkhan.1@hotmail.co.uk",
        "github": "Rxmeez",
        "twitter": "@Ramxxz",
        "location": "London, UK"
    },
    "biopic": "images/Rameez-Portfolio.jpg",
    "welcomeMessage": "Welcome to my Online Resume",
    "skills": ["HTML", "CSS", "JS", "JQuery"]
};

bio.display = function() {
    //formattedName, formattedRole, formattedPic and formattedMsg
    var formattedName = HTMLheaderName.replace(data, bio.name);
    var formattedRole = HTMLheaderRole.replace(data, bio.role);
    var formattedPic = HTMLbioPic.replace(data, bio.biopic);
    var formattedMsg = HTMLwelcomeMsg.replace(data, bio.welcomeMessage);

    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#header").append(formattedPic);
    $("#header").append(formattedMsg);

    //socialcontacts
    socialcontacts = [];
    socialcontacts.push(HTMLmobile.replace(data, bio.contacts.mobile));
    socialcontacts.push(HTMLemail.replace(data, bio.contacts.email));
    socialcontacts.push(HTMLtwitter.replace(data, bio.contacts.twitter));
    socialcontacts.push(HTMLgithub.replace(data, bio.contacts.github));
    socialcontacts.push(HTMLlocation.replace(data, bio.contacts.location));

    for (var contact = 0; contact < socialcontacts.length; contact++) {
        $("#topContacts, #footerContacts").append(socialcontacts[contact]);
    }

    //Check if skills are included.
    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        for (var skill = 0; skill < bio.skills.length; skill++) {
            var formattedSkill = HTMLskills.replace(data, bio.skills[skill]);
            $("#skills").append(formattedSkill);
        }
    }
};

//Work Object and Function
var work = {
    "jobs": [{
        "employer": "Schneider Electric",
        "title": "Industrial Engineer",
        "location": "Leeds,UK",
        "dates": "2015 - Current",
        "description": "Project lead in digitising process within Schneider Electric Leeds Site. Currently qualified in Yellow Belt Lead Six Sigma and Prince2 Project Management Foundation.",
        "url": "http://www.schneider-electric.com/ww/en/"
    }]
};

work.display = function() {
    for (var job = 0; job < work.jobs.length; job++) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace(data, work.jobs[job].employer).replace("#", work.jobs[job].url);
        var formattedTitle = HTMLworkTitle.replace(data, work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;

        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedLocation = HTMLworkLocation.replace(data, work.jobs[job].location);
        var formattedDates = HTMLworkDates.replace(data, work.jobs[job].dates);
        var formattedDescription = HTMLworkDescription.replace(data, work.jobs[job].description);

        $(".work-entry:last").append(formattedDates);
        $(".work-entry:last").append(formattedLocation);
        $(".work-entry:last").append(formattedDescription);
    }
};

//education object
var education = {
    "schools": [{
        "name": "University of Leeds",
        "degree": "BEng Chemical and Nuclear Engineering",
        "dates": "2012 - 2015",
        "location": "Leeds, UK",
        "majors": ["Chemical Engineering"],
        "url": "www.leeds.ac.uk"
    }],
    "onlineCourses": [{
            "title": "Front-End Web Developer Nanodegree",
            "school": "Udacity",
            "dates": "December 2016 - Current",
            "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
        },
        {
            "title": "Front-End Development Certification",
            "school": "FreeCodeCamp",
            "dates": "November 2016 - Current",
            "url": "https://www.freecodecamp.com/rxmeez"
        }
    ]
};

education.display = function() {
    if (education.schools.length > 0 || education.onlineCourses.length > 0) {
        for (var school = 0; school < education.schools.length; school++) {
            $("#education").append(HTMLschoolStart);

            var formattedName = HTMLschoolName.replace(data, education.schools[school].name).replace("#", education.schools[school].url);
            var formattedDegree = HTMLschoolDegree.replace(data, education.schools[school].degree);
            var formattedDates = HTMLschoolDates.replace(data, education.schools[school].dates);
            var formattedLocation = HTMLschoolLocation.replace(data, education.schools[school].location);
            var formattedMajor = HTMLschoolMajor.replace(data, education.schools[school].majors);

            $(".education-entry:last").append(formattedName + formattedDegree);
            $(".education-entry:last").append(formattedDates);
            $(".education-entry:last").append(formattedLocation);
            $(".education-entry:last").append(formattedMajor);
        }

        if (education.onlineCourses.length > 0) {
            $("#education").append(HTMLonlineClasses);
            for (var onlinecourse = 0; onlinecourse < education.onlineCourses.length; onlinecourse++) {
                $("#education").append(HTMLschoolStart);

                var formattedTitle = HTMLonlineTitle.replace(data, education.onlineCourses[onlinecourse].title).replace("#", education.onlineCourses[onlinecourse].url);
                var formattedSchool = HTMLonlineSchool.replace(data, education.onlineCourses[onlinecourse].school);
                var formattedOnlineDates = HTMLonlineDates.replace(data, education.onlineCourses[onlinecourse].dates);
                var formattedURL = HTMLonlineURL.replace(data, education.onlineCourses[onlinecourse].url).replace("#", education.onlineCourses[onlinecourse].url);

                $(".education-entry:last").append(formattedTitle + formattedSchool);
                $(".education-entry:last").append(formattedOnlineDates);
                $(".education-entry:last").append(formattedURL);

            }
        }
    }
};



//projects object and function
var projects = {
    "projects": [{
            "title": "Portfolio",
            "dates": "Jan 2016",
            "description": "My portfolio website where I am constantly improving and showcasing new projects that I have completed",
            "images": [
                "images/197x148.gif"
            ]
        },
        {
            "title": "Online Resume",
            "dates": "Jan 2016",
            "description": "What you are currently viewing is the my Online Resume project, where the initial file was providing by Udacity for the Front-End Web Developer Nanodegree, and I have manupilated the file with the use of Javascript. I have also learned in this project how to use a version control, Github.",
            "images": [
                "images/197x148.gif",
                "images/197x148.gif"
            ]
        }
    ]
};

//All about projects
projects.display = function() {
    for (var project = 0; project < projects.projects.length; project++) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace(data, projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace(data, projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace(data, projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);

        if (projects.projects[project].images.length > 0) {
            for (var image = 0; image < projects.projects[project].images.length; image++) {
                var formattedImages = HTMLprojectImage.replace(data, projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedImages);
            }
        }
    }
};


// Call function to run the site.
bio.display();
work.display();
projects.display();
education.display();


$("#mapDiv").append(googleMap);
