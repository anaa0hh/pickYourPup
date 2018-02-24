'use strict';

//Array to store the quiz results
var quizResults = [];


var allPups =[];


//Arrays for current and next selections

//constructor for dogs
function Dog(breed, sizeOfPup, pupLifestyle, allergies, pupService, noiseTolerance, furLength, filePath) {
  this.breed = breed;
  this.sizeOfPup = sizeOfPup;
  this.pupLifestyle = pupLifestyle;
  this.allergies = allergies;
  this.pupService = pupService;
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
    // console.log('we want quiz results');
    var strQuizResults = localStorage.getItem('quizResults');
    quizResults = JSON.parse(strQuizResults);
    // console.log(quizResults);
  }
})();
instantiateDogs();

scorePups();
console.log(allPups);
//**********FUNCTIONS START HERE *****************/
//Build Objects
function instantiateDogs() {
  new Dog('Newfoundland', 'large' , 'sedentary', 'yes', 'yes', 'no-barking', 'some-fur', 'newfy.jpg');
  new Dog('Smooth Coat Dachsund', 'small' , 'somewhat-active', 'no', 'no', 'some-barking', 'min-fur', 'doxie.jpg');
  new Dog('Golden Retriever', 'large' , 'active', 'yes', 'yes', 'some-barking', 'some-fur', 'golden.jpg');

}


function scorePups() {
  for (var i=0; i < allPups.length; i++) {
    //we are starting at one because we don't want to incluse the first question in score
    // console.log('allpups' + allPups[i].pupLifestyle);
    //checking for lifestyle
    if(quizResults[1] === allPups[i].pupLifestyle) {
      allPups[i].pupScore++;
    }
    // console.log('allpups' + allPups[i].allergies);
    //checking for pet allergies
    if(quizResults[2] !== allPups[i].allergies) {
      allPups[i].pupScore++;
    }
    // console.log('allpups' + allPups[i].pupService);
    //checking for service dog
    if(quizResults[3] === allPups[i].pupService) {
      allPups[i].pupScore++;
    }
    // console.log('allpups' + allPups[i].noiseTolerance);
    //checking for noise tolerance
    if(quizResults[4] === allPups[i].noiseTolerance || quizResults[4] === 'dont-care' || (quizResults[4] === 'some-barking' && allPups[i].noiseTolerance === 'no-barking')) {
      allPups[i].pupScore++;
    }
    // console.log('allpups' + allPups[i].furLength);
    //checking for fur length
    if(quizResults[5] === allPups[i].furLength || quizResults[5] === 'fur-dont-care' || (quizResults[5] === 'some-fur' && allPups[i].furLength === 'min-fur')) {
      allPups[i].pupScore++;
    }





  }
}

