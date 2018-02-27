'use strict';
//Array to store the quiz results
var quizResults = [];
var allPups = [];
var topDogs = [];
//Arrays for current and next selections
//constructor for dogs
function Dog(breed, sizeOfPup, pupLifestyle, allergies, pupService, noiseTolerance, furLength, filePath, pupDesc) {
  this.breed = breed;
  this.sizeOfPup = sizeOfPup;
  this.pupLifestyle = pupLifestyle;
  this.allergies = allergies;
  this.pupService = pupService;
  this.noiseTolerance = noiseTolerance;
  this.furLength = furLength;
  this.pupScore = 0;
  this.filePath=filePath;
  this.pupDesc=pupDesc;
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
// sort by value
//**********FUNCTIONS START HERE *****************/
//Build Objects
function instantiateDogs() {
  
  new Dog('Smooth Coat Dachsund', 'small' , 'somewhat-active', 'no', 'no', 'some-barking', 'min-fur', 'doxie.jpg', 'Dach Description');
  new Dog('Bichon Frise', 'small' , 'somewhat-active', 'no', 'no', 'some-barking', 'some-fur', 'bichon.jpg', 'BF Description');
  new Dog('Shih-Tzu', 'small' , 'somewhat-active', 'no', 'no', 'some-barking', 'some-fur', 'shih.png', 'Shih Description');
  new Dog('Toy Poodle', 'small' , 'somewhat-active', 'no', 'no', 'some-barking', 'some-fur', 'toypoo.jpg', 'TP Description');
  new Dog('Pug', 'small' , 'sedentary', 'yes', 'no', 'no-barking', 'min-fur', 'pug.jpg', 'Pug Description');
  new Dog('Beagle', 'small' , 'sedentary', 'no', 'no', 'some-barking', 'min-fur', 'beagle.jpg', 'Beagle Description');
  new Dog('Cavalier King Charles Spaniel', 'small' , 'sedentary', 'no', 'no', 'no-barking', 'some-fur', 'cav.jpg', 'Cav Description');
  new Dog('Smooth Coat Chihuahua', 'small' , 'somewhat-active', 'no', 'no', 'some-barking', 'min-fur', 'chi.jpg', 'Chi Description');
  new Dog('French Bulldog', 'small' , 'somewhat-active', 'no', 'no', 'no-barking', 'min-fur', 'french.jpg', 'Frenchie Description');
  new Dog('Pomeranian', 'small' , 'somewhat-active', 'yes', 'no', 'some-barking', 'some-fur', 'pom.jpg', 'Pom Description');
  

  new Dog('Basset Hound', 'medium' , 'sedentary', 'yes', 'no', 'some-barking', 'min-fur', 'basset.jpg', 'BF Description');
  new Dog('Corgi', 'medium' , 'somewhat-active', 'yes', 'yes', 'some-barking', 'some-fur', 'corgi.jpg', 'Corgi Description');
  new Dog('Bull Dog', 'medium' , 'sedentary', 'yes', 'no', 'some-barking', 'min-fur', 'bulldog.jpg', 'BF Description');
  new Dog('Miniature Terrier', 'medium' , 'somewhat-active', 'no', 'no', 'some-barking', 'min-fur', 'miniterrier.jpg', 'BF Description');
  new Dog('Whippet', 'medium' , 'somewhat-active', 'yes', 'no', 'some-barking', 'min-fur', 'whippet.jpg', 'BF Description');
  new Dog('Dalmatian', 'medium' , 'active', 'yes', 'yes', 'some-barking', 'min-fur', 'dalmatian.jpg', 'BF Description');
  new Dog('Clumber Spaniel', 'medium' , 'sedentary', 'yes', 'no', 'some-barking', 'some-fur', 'clumberspaniel.jpg', 'BF Description');
  new Dog('Standard Schnauzer', 'medium' , 'somewhat-active', 'no', 'no', 'some-barking', 'some-fur', 'standardschnauzer.jpg', 'BF Description');
  new Dog('Polish Lowland Sheepdog', 'medium' , 'somewhat-active', 'no', 'no', 'some-barking', 'some-fur', 'polishsheepdog.jpg', 'BF Description');
  new Dog('Australian Shepard', 'medium' , 'active', 'yes', 'yes', 'some-barking', 'some-fur', 'australianshepard.jpg', 'BF Description');
  new Dog('Border Collie', 'medium' , 'active', 'yes', 'yes', 'some-barking', 'some-fur', 'bordercollie.jpg', 'BF Description');

  new Dog('Mastiff', 'large' , 'sedentary', 'yes', 'no', 'some-barking', 'some-fur', 'mastiff.jpg', 'BF Description');
  new Dog('Golden Retriever', 'large' , 'active', 'yes', 'yes', 'some-barking', 'some-fur', 'golden.jpg', 'GR Description');
  new Dog('Standard Poodle', 'large' , 'somewhat-active', 'no', 'yes', 'some-barking', 'some-fur', 'poodle.jpg', 'SP Description');
  new Dog('Newfoundland', 'large' , 'sedentary', 'yes', 'yes', 'no-barking', 'some-fur', 'newfy.jpg', 'NF Description');
  new Dog('Bloodhound', 'large' , 'sedentary', 'yes', 'no', 'some-barking', 'some-fur', 'bloodhound.jpg', 'BF Description');
  new Dog('Great Dane', 'large' , 'somewhat-active', 'yes', 'yes', 'some-barking', 'some-fur', 'greatdane.jpg', 'BF Description');
  new Dog('Rottweiler', 'large' , 'active', 'yes', 'yes', 'some-barking', 'some-fur', 'rottweiler.jpg', 'BF Description');
  new Dog('Labrador Retriever', 'large' , 'active', 'yes', 'yes', 'some-barking', 'some-fur', 'labretriever.jpg', 'BF Description');
  new Dog('German Shepherd', 'large' , 'active', 'yes', 'yes', 'some-barking', 'some-fur', 'shep.jpg', 'Shep Description');
  new Dog('Bernese Mountain Dog', 'large' , 'active', 'yes', 'yes', 'some-barking', 'some-fur', 'bernese.jpg', 'Bernese Description');

}
instantiateDogs();
scorePups();
sortPups();
console.log('postsort ', allPups);
selectTopDogs();
displayTopDogs();
console.log('topDogs ', topDogs);
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
// This function is going to sort the pups in the allPups array by pupScore
function sortPups() {
  allPups.sort(function (b, a) {
    // console.log('a.pupScore ' + a.pupScore);
    // console.log('b pupScore ' + b.pupScore);
    return +a.pupScore - +b.pupScore;
  });
}
// In order for a dog to be considered for the topDog array, the size must match
function selectTopDogs() {
  var i = 0;
  var endOfScoringDogs = false;
  while(topDogs.length < 3 && endOfScoringDogs === false && i < allPups.length) {
    // console.log('allPups[i].pupScore' , allPups[i].pupScore);
    // console.log('allPups index', i);
    if(allPups[i].pupScore > 0 && quizResults[0] === allPups[i].sizeOfPup) {
      topDogs.push(allPups[i]);
    } else {
      if (allPups[i] === 0) {
        endOfScoringDogs = true;
      }
    }
    i++;
  }
}
function displayTopDogs() {
  var resultPic = document.getElementById('result-pic');
  var resultPic2 = document.getElementById('result-pic2');
  var resultPic3 = document.getElementById('result-pic3');
  resultPic.src = 'img/' +topDogs[0].filePath;
  resultPic2.src = 'img/' +topDogs[1].filePath;
  resultPic3.src = 'img/' +topDogs[2].filePath;
  resultPic.addEventListener('click', SelectedZero);
  resultPic2.addEventListener('click', SelectedOne);
  resultPic3.addEventListener('click', SelectedTwo);
}
//Handle/Determine Different Selections
function SelectedZero() {
  userSelection(0);
}
function SelectedOne() {
  userSelection(1);
}
function SelectedTwo() {
  userSelection(2);
}
//Handle Selection
function userSelection(selection) {
  console.log('User selected ' + topDogs[selection].breed);
  //Output Totals
  var breedDesc = document.getElementById('breedDesc');
  breedDesc.textContent = 'Breed Description';
  //Append each list line
  //Append each list line
  var liEl = document.createElement('li');
  liEl.textContent = topDogs[selection].breed;
  breedDesc.appendChild(liEl);
  liEl = document.createElement('li');
  liEl.textContent = topDogs[selection].pupDesc;
  breedDesc.appendChild(liEl);
}
//Create listener to clear local storage on command.
var clearLS = document.getElementById('clearStorage');
clearLS.addEventListener('click', function() {
  console.log('Clearing Local Storage');
  localStorage.clear();
});

var returnToQuiz = document.getElementById('returnQuiz');

returnToQuiz.addEventListener('click', function() {
  console.log('returnToQuiz');
  window.location.href="quiz.html";
 
});

