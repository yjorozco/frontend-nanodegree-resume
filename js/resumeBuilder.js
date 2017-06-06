/*
This is empty on purpose! Your code to build the resume will go here.
 */

/* var awesomeThoughts="I am Yamil and I am AWESOME";

awesomeThoughts=awesomeThoughts.replace("AWESOME","FUN");

 $( "#main" ).append( awesomeThoughts );*/

var formattedName = HTMLheaderName.replace("%data%","Juan Andres");
var formattedRole = HTMLheaderRole.replace("%data%","Web Developer");
$("#header").append(formattedName).append(formattedRole);

var bio = {

	"contacts":{
		"mobile" : "650-555-5555",
		"email" : "john@example.com",
		"twitter" : "@jondoe",
		"github" : "jonhdoe",
		"blog" : "jonhdoe.com",
		"location" : "San Francisco",
		"photo" : "images/fry.jpg"

	},

}

var mobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var email = HTMLemail.replace("%data%", bio.contacts.email);
var twitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var github = HTMLgithub.replace("%data%", bio.contacts.github);
var blog = HTMLblog.replace("%data%", bio.contacts.blog);
var locationPlace = HTMLlocation.replace("%data%", bio.contacts.location);

$("#topContacts").append(mobile);
$("#topContacts").append(email);
$("#topContacts").append(twitter);
$("#topContacts").append(github);
$("#topContacts").append(blog);
$("#topContacts").append(locationPlace);


var bioPic = HTMLbioPic.replace("%data%",bio.contacts.photo);
var message = HTMLwelcomeMsg.replace("%data%","esto es un menssaje");
$("#header").append( bioPic).append(message).append(HTMLskillsStart);


var skills = ["confident", "trusty", "hard worker"];

function displaySkill(){
	for(var i = 0; i < skills.length; i++){
		var skill = HTMLskills.replace("%data%", skills[i]);
		$("#skills").append(skill);
	}
}

displaySkill();

var work = {
  "jobs": [
    {
      "employer": "Udacity",
      "title": "Course Developer",
      "location": "Mountain View, CA",
      "dates": "Feb 2014 - Current",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    },
    {
      "employer": "LearnBIG",
      "title": "Software Engineer",
      "location": "Seattle, WA",
      "dates": "May 2013 - Jan 2014",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    },
    {
      "employer": "LEAD Academy Charter High School",
      "title": "Science Teacher",
      "location": "Nashville, TN",
      "dates": "Jul 2012 - May 2013",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    },
    {
      "employer": "Stratford High School",
      "title": "Science Teacher",
      "location": "Nashville, TN",
      "dates": "Jun 2009 - Jun 2012",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    }
  ]
};

// Your code goes here! Let me help you get started

function locationizer(work_obj) {
	var locations=[];
	for(var i=0;i<work_obj.jobs.length;i++){
		locations.push(work_obj.jobs[i]);
	}
	return locations;
}

// Did locationizer() work? This line will tell you!
console.log(locationizer(work));


function inName(name){
	var fullNameArray = name.split(" ");
	var firstName = fullNameArray[0].substr(0,1).toUpperCase() + fullNameArray[0].substr(1).toLowerCase();
	var lastName = fullNameArray[1].toUpperCase();
	console.log(lastName);
	return firstName + " " + lastName;
}


$("#main").append( internationalizeButton);

//console.log(inName("jhahsnhHH juancCHo"));


var education = {
    
    "educations" : [

	    {
	    	"name" : "Ucv",
	    	"degree" : "Engineer",
	    	"location" : "caracas",
	    	"dates" : "2010",
	     	"major" : "23"
	     }

     ]

}






education.display = function() {

	for(var i=0; i < education.educations.length; i++){
		$("#education").append(HTMLschoolStart);
		var schoolName = HTMLschoolName.replace("%data%", education.educations[i].name);
		var schoolDegree = HTMLschoolDegree.replace("%data%", education.educations[i].degree);
		var schoolDates = HTMLschoolDates.replace("%data%", education.educations[i].dates);
		var schoolLocation = HTMLschoolLocation.replace("%data%", education.educations[i].location);
		var schoolMajor = HTMLschoolMajor.replace("%data%", education.educations[i].major);
		$("#education").append(schoolName).append(schoolDegree).append(schoolDates).append(schoolLocation).append(schoolMajor);

	}


}

education.display();

var project = {

	projects:[
		
		{
			title:"Sample 1",
			dates:"2008",
			description:"it's a proyect well done",
			images:["images/197x148.gif"]
		},
		{
			title:"Sample 2",
			dates:"2010",
			description:"it's a proyectc2 well done",
			images:["images/197x148.gif", "images/197x148.gif" ]
		}
	]

};


project.display = function(){	
	for(var i=0;i<project.projects.length;i++){
		$("#projects").append(HTMLprojectStart);
		var projectUnit = project.projects[i];
		var projectTitle = HTMLprojectTitle.replace("%data%" , projectUnit.title);
		var projectDates = HTMLprojectDates.replace("%data%" , projectUnit.dates);
		var projectDescription = HTMLprojectDescription.replace("%data%" ,  projectUnit.description);
		
		$(".project-entry:last").append(projectTitle);
		$(".project-entry:last").append(projectDates);
		$(".project-entry:last").append(projectDescription);
		for(var y=0; y<project.projects[i].images.length;y++){
			var projectImage = HTMLprojectImage.replace("%data%", project.projects[i].images[y]);
			$(".project-entry:last").append(projectImage);
		}	
	}
}


project.display();

var displayWork = function(){
	for(job in work.jobs){
		$( "#workExperience" ).append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer +  formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);
		var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);	 
	}
}


var classes = {

	classes : [

		{
			"title" : "Physic",
			"school" : "berkey",
			"dates" : "2010",
			"url" : "www.cantv.net"
		}

	],

	display : function(){
		for(var i = 0; i < this.classes.length; i++){
			$("#education").append(HTMLonlineClasses);
			var onlineTitle = HTMLonlineTitle.replace("%data%", this.classes[i].title);
			var onlineSchool =  HTMLonlineSchool.replace("%data%", this.classes[i].school);
			var onlineDates = HTMLonlineDates.replace("%data%", this.classes[i].dates); 
			var onlineURL = HTMLonlineURL.replace("%data%", this.classes[i].url);
			$("#education").append(onlineTitle).append(onlineSchool).append(onlineDates).append(onlineURL);
		}
	}

}

classes.display();

$(document).click(function(loc) {
  // your code goes here
   logClicks(loc.pageX,loc.pageY);
});


displayWork();