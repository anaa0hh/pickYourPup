'use strict';

//Array to store the quiz results
var quizResults = [];





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
  // var strNumSelections = JSON.stringify(numSelections);
  // localStorage.setItem('numselections', strNumSelections);

  // var minCust = parseInt(event.target.minCust.value);


  //Verify that we have valid values, Exit if error
  //Required field validation now handled by HTML5
  //if (!locName || !minCust || !maxCust || !avgSale) {
  //  return alert('Must enter a value in each field!');
  //}
//   if (minCust > maxCust) {
//     return alert('Minimum Customers must be less than or equal to Maximum.');
  // }


}
// +++++++++++++++++++++++++++++++++++++++++++++++++++++
// Event listener for comment submission form
var quizQuestions = document.getElementById('quiz-questions');
quizQuestions.addEventListener('submit', getQuizResults);