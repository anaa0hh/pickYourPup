'use strict';

//Array to store the quiz results
var quizResults = [];


var allPups =[];


//Arrays for current and next selections
var currProducts = [0,0,0];

//constructor for dogs
function Dog(breed, sizeOfPup, pupLifestyle, allergies, pupPurpose, noiseTolerance, furLength, filePath) {
  this.breed = breed;
  this.sizeOfPup = sizeOfPup;
  this.pupLifestyle = pupLifestyle;
  this.allergies = allergies;
  this.pupPurpose = pupPurpose;
  this.noiseTolerance = noiseTolerance;
  this.furLength = furLength;
  this.pupScore = 0;
  this.filePath=filePath;

  allPups.push(this);
}

//*********MAINLINE*********

//Retrieve quiz results
(function getLocalStorage() {
  if (localStorage.quizResults) {
    console.log('we want quiz results');
    var strQuizResults = localStorage.getItem('quizResults');
    var quizResults = JSON.parse(strQuizResults);
    console.log(quizResults);
  }
})();

//**********FUNCTIONS START HERE *****************/
//Build Objects
function instantiateDogs() {
  new Dog('Newfoundland', 'large' , 'sedentary', 'no', 'companionship', 'no-barking', 'some-fur', 'newfy.jpg');
  new Dog('Smooth Coat Dachsund', 'small' , 'somewhat-active', 'yes', 'companionship', 'some-barking', 'min-fur', 'doxie.jpg');
  new Dog('Golden Retriever', 'large' , 'active', 'no', 'service', 'some-barking', 'some-fur', 'golden.jpg');

}


function scorePups() {
  for (var i=0; i < allPups.length; i++) {
    //we are starting at one because we don't want to incluse the first question in score
    for (var j=1; j < quizResults.length; j++) {
        
    }
  }
}

