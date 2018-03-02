'use strict';

//Array to store the quiz results
var quizResults = [];

//*********MAINLINE*********
// Retrieve quiz results (if available)
(function getLocalStorage() {
  if (localStorage.quizResults) {
    var strQuizResults = localStorage.getItem('quizResults');
    quizResults = JSON.parse(strQuizResults);
    console.log('quizResults: '+quizResults);

    //Restore Quiz Values
    var sizeOfPup = document.getElementsByName('sizeOfPup');
    for (var i=0; i<sizeOfPup.length;i++) {
      if (sizeOfPup[i].value === quizResults[0]) {
        sizeOfPup[i].checked = true;
      }
    }
    var pupLifestyle = document.getElementsByName('pupLifestyle');
    for (i=0; i<pupLifestyle.length;i++) {
      if (pupLifestyle[i].value === quizResults[1]) {
        pupLifestyle[i].checked = true;
      }
    }
    var allergies = document.getElementsByName('allergies');
    for (i=0; i<allergies.length;i++) {
      if (allergies[i].value === quizResults[2]) {
        allergies[i].checked = true;
      }
    }
    var pupService = document.getElementsByName('pupService');
    for (i=0; i<pupService.length;i++) {
      if (pupService[i].value === quizResults[3]) {
        pupService[i].checked = true;
      }
    }
    var noiseTolerance = document.getElementsByName('noiseTolerance');
    for (i=0; i<noiseTolerance.length;i++) {
      if (noiseTolerance[i].value === quizResults[4]) {
        noiseTolerance[i].checked = true;
      }
    }
    var furLength = document.getElementsByName('furLength');
    for (i=0; i<furLength.length;i++) {
      if (furLength[i].value === quizResults[5]) {
        furLength[i].checked = true;
      }
    }
  }
})();

// This function handles the submission of quiz answers
function getQuizResults(event) {
  event.preventDefault(); //prevent page reload

  //Retrieve values from form
  var sizeOfPup = event.target.sizeOfPup.value;
  var pupLifestyle = event.target.pupLifestyle.value;
  var allergies = event.target.allergies.value;
  var pupService = event.target.pupService.value;
  var noiseTolerance = event.target.noiseTolerance.value;
  var furLength = event.target.furLength.value;

  quizResults = [sizeOfPup, pupLifestyle, allergies, pupService, noiseTolerance, furLength];
  console.log('quizResults'+quizResults);

  //Save quiz to local storage
  var strQuizResults = JSON.stringify(quizResults);
  localStorage.setItem('quizResults', strQuizResults);

  //Transfer to Results page
  window.location.href='results.html';
}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++
// Event listener for quiz submission form
var quizQuestions = document.getElementById('quiz-questions');
quizQuestions.addEventListener('submit', getQuizResults);