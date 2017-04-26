console.log('challenge #2 -- app.js loaded!');

var app = angular.module("appTwo", []);
app.controller("WelcomeController", WelcomeController);
app.controller("ExerciseController", ExerciseController);

function WelcomeController(){
  this.full_name = "Tyler Shockey";
  this.age = 32;
  this.city = "Ardmore";
  this.state = "Oklahoma";
  this.shout = function() {
  	return this.full_name.toUpperCase() + "!";
  };

}

function ExerciseController(){
	console.log("exercise controller working");
	this.class_name = "WDI3";
	this.enrolled_students = 12;
	this.start_date = "03/13/2017";
	this.end_date = "06/03/2017";
	this.daysRemaining = function() {
		this.start_date = new Date("03/13/2017");
		this.end_date = new Date("06/03/2017");
		var timeDiff = Math.abs(this.end_date.getTime() - this.start_date.getTime());
		var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
		return diffDays;
	};
}
