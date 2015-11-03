var bio = {
  "name": "Sullivan Valaer",
  "role": "Front-end Web Developer",
  "contacts": {
    "mobile": "360-980-0859",
    "email": "sullivanvalaer@gmail.com",
    "twitter": "svalaer",
    "github": "svalaer",
    "location": "Washougal, Wa",
    "onlineCourses": "Bloc.io, Udacity"
  },
  "skills": [
    "Meteor JS", "Jade", "Stylus", "Bootstrap", "Material Design","HTML5", "CSS3", "Coffescript", "JavaScript", "JSON", "jQuery"
  ],
  "welcomeMessage": "Welcome to My Resume",
  "bioPic": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAb3AAAAJGIwOTE0NTU4LTExMTMtNGM1My1iZTAwLTMzODM1YjVhMWUyZg.jpg",
  "display": function(){
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedonlineCourses = HTMLonlineCourses.replace("%data%", bio.contacts.onlineCourses);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);

    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#header").append(formattedWelcomeMsg);
    $("#header").append(formattedBioPic);
    $("#topContacts").append(formattedMobile);
    $("#topContacts").append(formattedEmail);
    $("#topContacts").append(formattedTwitter);
    $("#topContacts").append(formattedGithub);
    $("#topContacts").append(formattedonlineCourses);

    $("#footerContacts").append(formattedEmail);
    $("#footerContacts").append(formattedTwitter);
    $("#footerContacts").append(formattedGithub);
    $("#footerContacts").append(formattedonlineCourses);
    $("#footerContacts").append(formattedLocation);

    if(bio.skills.length > 0) {
      $("#header").append(HTMLskillsStart);
      var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);

      for (var i = 0; i < bio.skills.length; i++) {
        console.log(bio.skills[i]);
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
        $("#skills").append(formattedSkill);
      }
    }
  }
};

var education = {
  "schools": [
    {
      "name": "University of Washington",
      "location": "Seattle, Wa",
      "degree": "BA",
      "majors": ["English"],
      "dates": "2009-2013",
      "url": "http://www.washington.edu/"
    },
    {
      "name": "University of Washington",
      "location": "Seattle, Wa",
      "degree": "BA",
      "majors": ["Business Administration"],
      "dates": "2009-2013",
      "url": "http://www.washington.edu/"
    }
  ],

  "onlineCourses": [
    {
      "title": "Front End Web Developer Certification",
      "school": "Bloc IO",
      "date": 2015,
      "url": "http://www.bloc.io/"
    }
  ],

  "display": function() {
    for(school in education.schools) {
      $("#education").append(HTMLschoolStart);

      var schName = HTMLschoolName.replace("%data%",education.schools[school].name);
      var formattedName = schName.replace("#",education.schools[school].url);
      var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
      var formattedDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
      var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
      var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[school].majors);

      $(".education-entry:last").append(formattedName + formattedDegree);
      $(".education-entry:last").append(formattedDates);
      $(".education-entry:last").append(formattedLocation);
      $(".education-entry:last").append(formattedMajor);
    }
    $('#education').append(HTMLonlineCertifications);
    for (onlineCourse in education.onlineCourses) {
      $("#education").append(HTMLschoolStart);

      // var onlSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
      var onlSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
      var formattedOnlineSchool = onlSchool.replace("#", education.onlineCourses[onlineCourse].url);
      var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
      var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].date);
      // var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url);

      $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
      $(".education-entry:last").append(formattedOnlineDates);

    }
  }
};

var work = {
  "jobs" : [
    {
      "employer": "Immersive Media",
      "title": "Web Developer",
      "dates": "7/2015 - present",
      "location": "Washougal, WA",
      "description": "Built developer portal (built with meteor) and forum (built with ruby on rails) for our SDK users. Meteor app works as central user database and the forum authenticates against it with SSO.Ui/ux design and front end web programming for custom builds of im360 camera interface.Testing and QA for current and future builds of client side im360 camera interface."
    },
    {
      "employer": "Clear Mountain Software",
      "title": "Front End Web Developer",
      "dates": "11/2014 - 7/2015",
      "location": "Washougal, WA",
      "description": "Programmed data scrapers that would go out and collect information from designated websites.Responsible for taking designs from UI designer and getting them deployment ready for our back end web developer."
    },
    {
      "employer": "TFG Card Solutions, Inc",
      "title": "IT Specialist",
      "dates": "11/2013 - 1/2014",
      "location": "Portland, OR",
      "description": "As their IT Specialist, I oversaw the performance and security of TFG's network infrastructure. This includes the identification, diagnoses, and resolution of hardware and software issues across their mainframes, networking devices, and workstations. Salesforce management and optimization was also a critical part of my role."
    },
    {
      "employer": "Pavelcomm",
      "title": "Help Desk Technician",
      "dates": "3/2013 - 10/2013",
      "location": "Portland, OR",
      "description": "Primary level one help desk technician for 1300 desktops, severs across 30 enterprise clients. Resolved issues on Apple workstations and iOS devices. Set up desktops, laptops, and mobile devices according to corporate and end user guidelines. Identified, diagnosed, and resolved hardware and software problems that would occur on mainframes, Windows domain networks, desktops, laptops, and mobile devices. Followed up with end-users regarding solutions."
    }
  ],
  "display": function() {
    for(job in work.jobs) {
      $("#workExperience").append(HTMLworkStart);
      var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
      var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
      var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
      var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);

      $(".work-entry:last").append(formattedEmployer + formattedTitle,formattedDates,formattedDescription);
    }
  }
};

var projects = {
  "projects": [
    {
      "title": "Bloc-Jams",
      "dates": "2015",
      "description": "Music player",
      "images": ["images/music-icon.jpg"]
    },
    {
      "title": "Portfolio",
      "dates": "2015",
      "description": "Portfolio website for my personal and professional projects",
      "images": ["images/portfolio-icon.jpg"]
    }
  ],
  "display": function(){
    for(proj in projects.projects){
      $("#projects").append(HTMLprojectStart);
      var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[proj].title);
      var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[proj].dates);
      var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[proj].description);

      $(".project-entry:last").append(formattedTitle);
      $(".project-entry:last").append(formattedDates);
      $(".project-entry:last").append(formattedDescription);

      for (image in projects.projects[proj].images) {
        var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[proj].images[image]);
        $(".project-entry:last").append(formattedImage);
      }
    }
  }
};

education.display();
bio.display();
work.display();
projects.display();

$("#mapDiv").append(googleMap);
