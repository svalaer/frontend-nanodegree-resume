var bio = {
  "name": "Sullivan Valaer",
  "role": "Front-end Web Developer",
  "contacts": {
    "mobile": "360-980-0859",
    "email": "sullivanvalaer@gmail.com",
    "twitter": "@svalaer",
    "github": "svalaer",
    "blog": "My Blog",
    "location": "Washougal, Wa"
  },
  "welcomeMessage": "Welcome to My Resume",
  "skills": [
    "Meteor JS", "Jade", "Stylus", "Bootstrap", "Material Design","HTML5", "CSS3", "Coffescript", "JavaScript", "JSON", "jQuery"
  ],
   "bioPic": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAb3AAAAJGIwOTE0NTU4LTExMTMtNGM1My1iZTAwLTMzODM1YjVhMWUyZg.jpg"
}

bio.display = function(){
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedBlog = HTMLblog.replace("%data%", bio.contacts.blog);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#topContacts").append(formattedMobile);
    $("#topContacts").append(formattedEmail);
    $("#topContacts").append(formattedTwitter);
    $("#topContacts").append(formattedGithub);
    $("#topContacts").append(formattedBlog);

    $("#footerContacts").append(formattedEmail);
    $("#footerContacts").append(formattedTwitter);
    $("#footerContacts").append(formattedGithub);
    $("#footerContacts").append(formattedBlog);
    $("#footerContacts").append(formattedLocation);

    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedWelcomeMsg);

    var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
    $("#header").append(formattedBioPic);

    if(bio.skills.length > 0) {

    $("#header").append(HTMLskillsStart);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
    for (var i = 0; i < bio.skills.length; i++) {
    console.log(bio.skills[i]);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
    $("#skills").append(formattedSkill);
  }
 }
};
bio.display();
