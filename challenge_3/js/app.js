console.log('challenge #3 -- app.js loaded!');

var app = angular.module("appThree", []);
app.controller("infoController", infoController)
app.controller("loanController", loanController)

function infoController(){
  this.name = "Jon Doe"; // default name
  this.height = 5.6; // default height in feet
}

function loanController(){
	this.amount = 1000;
	this.apr = 9;

	//this.total_balance = interest + this.amount;
	//this.accrued_interest = interest;

	this.month = function(n) {
		var year = this.amount * (this.apr / 100);
		var month = (year / 12);
		var round = Math.round(month * 100) / 100;
		//var round = month.toFixed(2);
		var interest = n * round;
		return {
			accrued_interest: interest,
			total_balance: this.amount + interest
		};

	};



	// this.month = function(n) {
	// 	if (n == 1) {
	// 		console.log("month 1");
	// 		this.total_balance = function() {
	// 		var interest = this.amount * this.apr;
	// 		console.log(this.amount + interest);
	// 		return this.amount + interest;
	// 		};
	// 		this.accrued_interest = function() {
	// 		var accrue = this.amount * this.apr;
	// 		return accrue;
	// 		};
	// 	}
	// 	if (n == 2) {
	// 		this.total_balance = function() {
	// 		var interest = this.amount * this.apr;
	// 		return (this.amount + interest) * 2;
	// 		};
	// 		this.accrued_interest = function() {
	// 		var accrue = this.amount * this.apr;
	// 		return accrue * 2;
	// 		};
	// 	}
	// 	if (n == 12) {
	// 		this.total_balance = function() {
	// 		var interest = this.amount * this.apr;
	// 		return (this.amount + interest) * 12;
	// 		};
	// 		this.accrued_interest = function() {
	// 		var accrue = this.amount * this.apr;
	// 		return accrue * 12;
	// 		};
	// 	}
	// };
	
}