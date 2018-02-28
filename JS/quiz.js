'use strict';

//Array to store the quiz results
var quizResults = [];

//*********MAINLINE*********
//Retrieve quiz results
// (function getLocalStorage() {
//   if (localStorage.quizResults) {
//     var strQuizResults = localStorage.getItem('quizResults');
//     quizResults = JSON.parse(strQuizResults);
//     //Restore Quiz Values
//     var sizeOfPup = document.getElementById('sizeOfPup');
//     sizeOfPup.val(quizResults[0]);
//     // var sizeOfPup = quizResults[0];
//     // var pupLifestyle = quizResults[1];
//     // var allergies = quizResults[2];
//     // var pupService = quizResults[3];
//     // var noiseTolerance = quizResults[4];
//     // var furLength = quizResults[5];

//   }
// })();

// This function handles the addition of a new location
function getQuizResults(event) {
  event.preventDefault(); //prevents page reload

  //Retrieve values from form
  var sizeOfPup = event.target.sizeOfPup.value;
  var pupLifestyle = event.target.pupLifestyle.value;
  var allergies = event.target.allergies.value;
  var pupService = event.target.pupService.value;
  var noiseTolerance = event.target.noiseTolerance.value;
  var furLength = event.target.furLength.value;

  console.log('getQuizResults'+getQuizResults);
  quizResults = [sizeOfPup, pupLifestyle, allergies, pupService, noiseTolerance, furLength];
  console.log('quizResults'+quizResults);

  //Take Checkpoint:  Save results to local storage
  var strQuizResults = JSON.stringify(quizResults);
  localStorage.setItem('quizResults', strQuizResults);
  window.location.href='results.html';

}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++
// Event listener for comment submission form
var quizQuestions = document.getElementById('quiz-questions');
quizQuestions.addEventListener('submit', getQuizResults);

