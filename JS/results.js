'use strict';
//Array to store the quiz results
var quizResults = [];
var allPups = [];
var topDogs = [];
//Arrays for current and next selections
//constructor for dogs
function Dog(breed, sizeOfPup, pupLifestyle, allergies, pupService, noiseTolerance, furLength, filePath, linkDesc, pupLink, pupDesc, pupVideo) {
  this.breed = breed;
  this.sizeOfPup = sizeOfPup;
  this.pupLifestyle = pupLifestyle;
  this.allergies = allergies;
  this.pupService = pupService;
  this.noiseTolerance = noiseTolerance;
  this.furLength = furLength;
  this.pupScore = 0;
  this.filePath=filePath;
  this.linkDesc=linkDesc;
  this.pupLink=pupLink;
  this.pupDesc=pupDesc;
  this.pupVideo=pupVideo;
  allPups.push(this);
}
//*********MAINLINE*********
//Retrieve quiz results
(function getLocalStorage() {
  if (localStorage.quizResults) {
    var strQuizResults = localStorage.getItem('quizResults');
    quizResults = JSON.parse(strQuizResults);
  }
})();

instantiateDogs();
scorePups();
sortPups();
console.log('postsort ', allPups);
selectTopDogs();
displayTopDogs();
console.log('topDogs ', topDogs);
//**********FUNCTIONS START HERE *****************/

function instantiateDogs() {

  new Dog('Polish Lowland Sheepdog', 'medium' , 'somewhat-active', 'no', 'no', 'some-barking', 'some-fur', 'polishsheepdog.jpg', 'PLS Rescue', 'http://www.aponc.org/rescue%20&%20adoption.html','Originally bred for herding and guarding, the Polish Lowland Sheepdog is still an excellent working dog breed. He is obedient and fearless, good natured with people and other dogs, but highly protective of his flock. He is intelligent, active, strong, and handsome with his characteristic multicolored shaggy coat. In recent years, he has gained popularity as a companion dog.','https://www.youtube.com/embed/LsCqGvY5Il0');
  new Dog('Australian Shepard', 'medium' , 'active', 'yes', 'yes', 'some-barking', 'some-fur', 'australianshepard.jpg', 'Aussie Rescue', 'http://www.aussierescue.org/','Australian Shepherds are smart, protective, and very responsive medium sized dogs. This loyal and obedient breed is a bit reserved with strangers but is very protective and an excellent watchdog. Aussies make great companions for singles, families, ranchers, and those who enjoy the outdoors. As herding dogs, they may try to herd children and other animals when playing. Daily exercise will help them remain calm and content.','https://www.youtube.com/embed/sJgPYtHbM58');
  new Dog('Border Collie', 'medium' , 'active', 'yes', 'yes', 'some-barking', 'some-fur', 'bordercollie.jpg', 'Border Collie Rescue', 'http://www.bcrnd.org/', 'Border Collies are curious, busy, and intelligent, medium sized dogs. This loyal and obedient breed is a bit reserved with strangers, but is protective and an excellent watchdog. Border Collies make great companions for ranchers and families that can give plenty of attention to them. As herding dogs, they may chase cars or try to herd children and other animals. Their abundance of mental and physical energy must be put toward a challenging task every day or they will become bored or destructive, an owner who can give them plenty of attention, exercise, and tasks to perform is essential.','https://www.youtube.com/embed/igy3zMfilFs');
  new Dog('Bullmastiff', 'large' , 'sedentary', 'yes', 'no', 'some-barking', 'some-fur', 'mastiff.jpg', 'Mastiff Rescue', 'http://bullmastiff.us/rescue/', 'Bullmastiffs are confident, steady, and fearless, giant dogs. This bold breed loves children but can be suspicious of strangers and other dogs. They have a tendency of being territorial if not socialized properly at an early age. These dogs can be gentle but are difficult to train and need a strong leader. They are prone to boredom and don’t do well when left alone for long periods of time. Bullmastiffs are not suited to live in hot climates and make great companions for singles and active individuals. They require minimal exercise such as a moderate daily walk or play session.','https://www.youtube.com/embed/bRiAFBuOf2E');
  new Dog('Golden Retriever', 'large' , 'active', 'yes', 'yes', 'some-barking', 'some-fur', 'golden.jpg', 'Golden Rescue', 'https://www.grca.org/find-a-golden/where-to-find-a-golden/rescue/', 'Golden Retrievers are eager to please, intelligent, and good natured large dogs. Goldens are great with children and other pets, but have a tendency to bark or howl when excited or faced with the unfamiliar. Because Goldens are playful dogs that learn quickly, they make great family pets. They are ideal companions for suburban families and those who enjoy sports, hunting, and the outdoors. Daily exercise is important for these energetic retrievers to stay happy and healthy, so they should play fetch or go for a run every day.','https://www.youtube.com/embed/kI4EbABtJQ0');
  new Dog('Newfoundland', 'large' , 'sedentary', 'yes', 'yes', 'no-barking', 'some-fur', 'newfy.jpg', 'Newfy Rescue', 'http://www.ncarescue.org/','Newfoundlands are a vibrant breed who adore being around people, and want to be included in all aspects of family life. Newfoundlands are best served by active people who love being outdoors, as these dogs are at their happiest when engaged in activity with a purpose. They get along fabulously with children, remaining patient when kids want to climb all over them, whether at play, or simply to snuggle up to relax in the evening. Perhaps the most famous Newfoundland was Nana, the dog from Peter Pan, who watched over the Darling children. Most owners agree that the characterization the Newfoundland as a natural babysitter who looks out for the well-being of her charges was right on the money.','https://www.youtube.com/embed/6Bg9XTPsz4Y');
  new Dog('Bloodhound', 'large' , 'somewhat-active', 'yes', 'no', 'some-barking', 'some-fur', 'bloodhound.jpg', 'Bloodhound Rescue', 'http://bloodhound.rescueme.org/','Bloodhounds are highly active, busy, and lovable, large dogs. These hounds are good with children and other pets, but have a tendency to escape,wander, and roam. Bloodhounds can be rambunctious puppies so obedience training and socialization is recommended at an early age. This devoted breed makes a great family companion. Daily exercise such as a long walk helps keep them calm and content.','https://www.youtube.com/embed/dQfzGABD_5k');
  new Dog('Great Dane', 'large' , 'somewhat-active', 'yes', 'yes', 'some-barking', 'some-fur', 'greatdane.jpg', 'Dane Rescue', 'http://www.greatdanerescueinc.com/','Great Danes are fearless, companionate, and courageous giant dogs. Nicknamed the Gentle Giant, Danes are great with children, and friendly with other dogs and pets. However, like all big dogs, they should be supervised while with children and other animals. They are natural watchdogs and can be aggressive toward strangers who they perceive as a threat. They enjoy dividing their time between the indoors and outdoors, but are best suited as indoor dogs. Ideal human companions for Danes are singles, active individuals, strong individuals, and families with older children. These strong dogs require daily, yet moderate, exercise such as a long walk at a relaxed pace.','https://www.youtube.com/embed/XXzZwEauNng');
  new Dog('Rottweiler', 'large' , 'active', 'yes', 'yes', 'some-barking', 'some-fur', 'rottweiler.jpg', 'Rottie Rescue', 'http://www.rottieaid.org/', 'Rottweilers have a reputation for being viscous attack dogs, but despite what television and movies may say, this is not their true nature. Rotties are incredibly loyal, which makes them superb watchdogs, and they will protect their family fearlessly, but to be viscous, they must be trained that way. When properly trained, socialized and exercised from puppyhood, Rotties are even tempered and dignified companions. They do not buddy up to just any newcomer, but rather take their time to decide who is worthy of their time and affection. With their families they are affectionate and playful, and most Rottweiler owners note that their dogs seem to not know how large they are, wanting to cuddle up on the couch or the bed. For experienced dog owners who have the time to commit to a large breed, the Rottweiler is a true blue friend.','https://www.youtube.com/embed/A1KuNfSCcW8');
  new Dog('Labrador Retriever', 'large' , 'active', 'yes', 'yes', 'some-barking', 'some-fur', 'labretriever.jpeg', 'Lab Rescue', 'http://americanlabrescue.com/', 'Labrador Retrievers are easygoing, happy, and obedient, large dogs. Labs love people and are quick learners. Because they are patient and gentle with children and other pets, they make a great addition to the family. They are also good pets for outdoorsy people,hunters, and fishermen. These athletic dogs love to retrieve and play in the water, both of which are great ways to give these dogs the vigorous mental and physical exercise they need every day. ','https://www.youtube.com/embed/0cj81wHmfXc');
  new Dog('German Shepherd', 'large' , 'active', 'yes', 'yes', 'some-barking', 'some-fur', 'shep.jpg', 'Shepherd Rescue', 'http://www.allshepherdrescue.com/', 'German Shepherds are athletic, trusting, and versatile large dogs. These alert and protective dogs are one of the preferred breeds for law enforcement dogs. Most German Shepherds are suspicious of strangers, but generally do well with other pets if they’re introduced as puppies. These dogs make great companions for active families, energetic individuals, and experienced dog handlers. This breed loves strenuous physical and mental challenges. These shepherds should play fetch and go for a long walk or jog every day.','https://www.youtube.com/embed/M-uDiky1EKU');
  new Dog('Bernese Mountain Dog', 'large' , 'active', 'yes', 'yes', 'some-barking', 'some-fur', 'bernese.jpg', 'Bernese Rescue', 'http://www.bmdca.org/rescue/', 'Bernese Mountain Dogs are sensitive, lovable, and loyal, large dogs. Berners are a bit reserved around strangers but they get along with dogs and other animals. These dogs are prone to boredom and should not be left alone for long periods of time. They do well in cold climates, and have a hard time in the heat. Berners make great companions for families and those who love the outdoors. This breed requires moderate everyday exercise such as a walk or hike.','https://www.youtube.com/embed/X4mupT2AIsM');
  new Dog('Smooth Coat Dachsund', 'small' , 'somewhat-active', 'no', 'no', 'some-barking', 'min-fur', 'doxie.jpg', 'Dachsund Rescue', 'http://www.drna.org/', 'Dachshunds are fearless, loving, and upbeat dogs that can be miniature or standard sized. These short legged dogs are protective, but thrive on close human companionship. Doxies make great companions for city dwellers, families with older children, singles, and those who enjoy the outdoors. Moderate daily exercise will help them stay healthy and happy.', 'https://www.youtube.com/embed/1SaXch9bpXw' );
  new Dog('Bichon Frise', 'small' , 'somewhat-active', 'no', 'no', 'some-barking', 'some-fur', 'bichon.jpg', 'Bichon Rescue', 'https://bichonrescue.org/', 'Bichon Frises are alert, lively, and quirky, small dogs. These lap dogs love to show off and receive attention which makes them great with children, strangers, and other dogs. These divas are adaptable to live in most climates, but may show signs of separation anxiety if left alone. Bichons make great companions for families, apartment dwellers, and those with allergies. A short daily walk or play session is enough exercise for Bichons.', 'https://www.youtube.com/embed/J8NZx6ob36c');
  new Dog('Shih-Tzu', 'small' , 'somewhat-active', 'no', 'no', 'some-barking', 'some-fur', 'shih.png', 'Shih Tzu Rescue', 'http://www.shihtzurescue.org/', 'Shih Tzus are lively, playful, and sometimes stubborn small dogs. The Chinese Lion Dog (nickname) is affectionate toward their family, and good with children, other dogs, and strangers. These furry companions are indoor dogs that do not do well with hot weather, but they make great pets for seniors, families with older children, and people with allergies because they do not shed. Despite their high energy, they only need a short walk or play session every day.', 'https://www.youtube.com/embed/XwWoYElh4lI' );
  new Dog('Toy Poodle', 'small' , 'somewhat-active', 'no', 'no', 'some-barking', 'some-fur', 'toypoo.jpg', 'Poodle Rescue', 'http://www.poodleclubofamericarescuefoundationinc.org/', 'Toy Poodles are extraordinary pets. While it is interesting to learn about the breeding purpose of Toy Poodles, their genetics actually influence health, outward appearance and behavior. Some behaviors make the Toy Poodle and some can be quite irritating! Understanding her unique needs will help you keep her healthy and will create a stronger bond between the two of you. Explore this page to learn more about where she came, which health conditions are a risk to her and how to keep her feeling her best.', 'https://www.youtube.com/embed/h5V01RPjL_0');
  new Dog('Pug', 'small' , 'sedentary', 'yes', 'no', 'no-barking', 'min-fur', 'pug.jpg', 'Pug Rescue', 'http://pugrescuenetwork.com/pugrescuenetwork/graypage.html', 'Pugs often are described as a lot of dog in a small space. These sturdy, compact dogs are a part of the American Kennel Club Toy group, and are known as the clowns of the canine world because they have a great sense of humor and like to show off. Originally bred to be a lap dog, the Pug thrives on human companionship.', 'https://www.youtube.com/embed/MsCPxRcLeLs' );
  new Dog('Beagle', 'small' , 'somewhat-active', 'no', 'no', 'some-barking', 'min-fur', 'beagle.jpg', 'Beagle Rescue', 'http://www.beaglerescueleague.org/','Beagles are ready for adventure, affectionate, and brave, medium sized dogs. They are gentle with children and enjoy both human and canine companionship. This breed has a high food drive and loves to explore the outdoors. Beagles make great companions for suburban families, senior citizens, apartment dwellers, and those who enjoy the outdoors. These dogs need much more exercise than many owners think, long walks and a big yard to run around are crucial to their health and temperament. They should be either on a leash or in a fenced yard because they will follow their nose wherever an intriguing scent leads them.', 'https://www.youtube.com/embed/SSoV5gDGeN4' );
  new Dog('Cavalier King Charles Spaniel', 'small' , 'sedentary', 'no', 'no', 'no-barking', 'some-fur', 'cav.jpg', 'Cavalier Rescue', 'https://www.cavalierrescueusa.org/', 'Cavalier King Charles Spaniels are eager to please, gentle, and intelligent, small dogs. These lap dogs are extremely friendly toward strangers, children, and other pets as long as they are socialized at an early age. Cavaliers dont do well in the heat and are best kept as indoor dogs with plenty of attention from their family. They make great companions for singles, families, senior citizens, and those who enjoy the outdoors. These easily adapted dogs are happy running outside or lounging around, which ever best suits their owners lifestyle. They require a fair amount of exercise daily, and enjoy exploring, sniffing, and chasing.', 'https://www.youtube.com/embed/Zaz_DtgQLZw' );
  new Dog('Smooth Coat Chihuahua', 'small' , 'somewhat-active', 'no', 'no', 'some-barking', 'min-fur', 'chi.jpg', 'Chihuahua Rescue', 'http://www.chihuahua-rescue.com/', 'Chihuahuas are spunky, animated, and vocal, small dogs. These confident dogs are known for their bark, and most are wary of strangers and other dogs if not properly socialized and trained. Some are timid and temperamental, and might not be good with young children. They do best indoors with plenty of attention, and struggle to stay warm in cold climates. This breed is small and adapts well, which makes them great travelers. Sometimes known as Chis, they make great companions for senior citizens, singles, and apartment dwellers. As such lively dogs, they need plenty of time every day to run around inside or explore their fenced yard.', 'https://www.youtube.com/embed/mWIeCk4DFw0');
  new Dog('French Bulldog', 'small' , 'somewhat-active', 'no', 'no', 'no-barking', 'min-fur', 'french.jpg', 'Frenchie Rescue', 'http://www.frenchbulldogrescue.org/', 'French Bulldogs are comical, friendly, and entertaining, small dogs. This small but sturdy, short nosed breed is typically reserved around strangers, but gets along great with other pets. Frenchies don’t do well in the heat, are incapable of swimming, and require little exercise. Because of this, they make great companions for just about anyone living in a cool climate, especially those living in an apartment or small home.', 'https://www.youtube.com/embed/QZOfAih0Uak' );
  new Dog('Pomeranian', 'small' , 'somewhat-active', 'yes', 'no', 'some-barking', 'some-fur', 'pom.jpg', 'Pom Rescue', 'http://pawsitivelypom.rescuegroups.org/', 'Pomeranians are eager to learn, playful, and adventurous, toy dogs. Poms are bold and curious, they tend to be reserved around or bark at strangers and others dogs, so they need sufficient socialization from puppyhood. These bouncy and confident dogs make great family pets, but can be snappy with small children. Although they are energetic, they are too family oriented to live outdoors. Ideal owners for Poms are singles, seniors, apartment dwellers, and those who live in the city. Daily walks and play sessions are ideal to keep these fun and fluffy dogs calmer while indoors.', 'https://www.youtube.com/embed/7ZYJGBw0Z5Y');
  new Dog('Basset Hound', 'medium' , 'sedentary', 'yes', 'no', 'some-barking', 'min-fur', 'basset.jpg', 'Basset Rescue' , 'http://www.bhrescue.com/?page_id=83', 'Basset Hounds are good natured, mellow, and affectionate, medium sized dogs. This short legged canine gets along well with children and other pets. They do best living indoors but still need access to the outdoors. Bassets make great companions for singles, active individuals, families, and people living in the city. This slow-moving breed is content living a lazy life, but still really needs moderate daily exercise.', 'https://www.youtube.com/embed/8foJxXtF-z4' );
  new Dog('Corgi', 'medium' , 'somewhat-active', 'yes', 'yes', 'some-barking', 'some-fur', 'corgi.jpg', 'Corgi Rescue', 'http://pwcca.org/about-pembrokes/pwc-rescue-network', 'This is an active, outgoing, alert dog who loves people. Just because he’s small doesn’t mean he doesn’t need exercise. Be prepared to keep the Pembroke busy. He excels in dog sports, especially agility, herding, flyball, obedience, rally, and tracking. He also enjoys going for moderate to long walks or hikes.Because of his herding background, he has a watchful nature and will bark to ward off critters or alert you to the presence of someone approaching the house. That’s a plus, but he can become a nuisance barker if you don’t teach him when to turn the sound on and off.','https://www.youtube.com/embed/sjydlB7bFQE' );
  new Dog('English Bull Dog', 'medium' , 'sedentary', 'yes', 'no', 'some-barking', 'min-fur', 'bulldog.jpg', 'Bulldog Rescue', 'http://www.rescuebulldogs.org/', 'English Bulldogs are affectionate, lovable, and courageous, medium sized dogs. This gentle breed does great with children and generally gets along with other pets. Early socialization and constant leadership is recommended. Bulldogs often wheeze, snore, and drool and most cannot swim. They overheat easily and do best in moderate temperatures. Just a short walk every day (in cool weather) is great for Bulldogs, so they do well living in an apartment or small home.', 'https://www.youtube.com/embed/yYwAJrAdUbY');
  new Dog('Bull Terrier', 'medium' , 'somewhat-active', 'no', 'no', 'some-barking', 'min-fur', 'miniterrier.jpg', 'Bull Terrier Rescue', 'http://www.bullterrierrescue.org/', 'Bull Terriers are entertaining, lively, and loyal, large dogs. This comedic breed is a bit reserved with other animals, but affectionate and devoted to children and their family. Bull Terriers are active dogs, but can live in apartments and small homes as long as they aren’t left alone for long periods of time. These sturdy dogs make great companions for families, active individuals, and those who enjoy the outdoors. Sometimes known as Bullys, they make good hiking and jogging buddies to fulfill their daily exercise needs.', 'https://www.youtube.com/embed/onquT6s3X-s');
  new Dog('Whippet', 'medium' , 'somewhat-active', 'yes', 'no', 'some-barking', 'min-fur', 'whippet.jpg', 'Whippet Rescue', 'http://whippet-rescue.org/', 'Whippets are extraordinary pets. While it is interesting to learn about the breeding purpose of Whippets, their genetics actually influence health, outward appearance and behavior. Some behaviors make the Whippet and some can be quite irritating! Understanding her unique needs will help you keep her healthy and will create a stronger bond between the two of you. Explore this page to learn more about where she came, which health conditions are a risk to her and how to keep her feeling her best.', 'https://www.youtube.com/embed/T6kdzcDRCmo' );
  new Dog('Dalmatian', 'medium' , 'active', 'yes', 'yes', 'some-barking', 'min-fur', 'dalmatian.jpg', 'Dalmatian Rescue', 'http://adoptaspotdalrescue.com/', 'Dalmatians are intelligent, easy to train, and protective large dogs. This breed has an extroverted personality and craves human companionship, but may be reserved toward unfamiliar dogs. Dalmatians make great companions for families with older children, active individuals, and fire fighters, of course. These energetic dogs need a lot of exercise and mental stimulation every day.', 'https://www.youtube.com/embed/rZ8t4QAUfRI' );
  new Dog('Clumber Spaniel', 'medium' , 'sedentary', 'yes', 'no', 'some-barking', 'some-fur', 'clumberspaniel.jpg', 'Clumber Rescue', 'http://www.clumbers.org/index.php/looking-for-a-clumber/rescue-placement','Clumber Spaniels are eager to please, lively, and responsive large dogs. These devoted dogs are typically suspicious of strangers, but won’t make great protectors. Clumbers make great companions for families, active singles, city dwellers, and those who love the outdoors. They are hunters at heart and enjoy running outside. These dogs need daily exercise, especially if they are living in the city.', 'https://www.youtube.com/embed/R3J5JLy-Unw' );
  new Dog('Standard Schnauzer', 'medium' , 'somewhat-active', 'no', 'no', 'some-barking', 'some-fur', 'standardschnauzer.jpg', 'Schnauzer Rescue', 'http://www.max-the-schnauzer.com/USA-schnauzer-rescue.html', 'The personality of the Standard Schnauzer can vary from dog to dog. Some are high strung, some are laid back and easy going, some dont like new people, others love anybody and everybody. The key to raising a happy and well adjusted Standard Schnauzer lies in commitment to exercise and training from an early age. Properly trained Schnauzers make excellent family pets, reliable with children, properly mannered with strangers, respectful of boundaries. Improperly trained and exercised Schnauzers can be much more challenging. Experienced dog owners describe Standard Schnauzers as loyal, loving companions who bring them nothing but laughter and joy. They can be quite clownish and if silly behavior gets them a laugh and some attention, they will pick up on that and become show boaters. With Schnauzers, more so than other breeds, you get out of them what you put into them.', 'https://www.youtube.com/embed/0yJyPSC8UnQ' );
  new Dog('Standard Poodle', 'large' , 'somewhat-active', 'no', 'yes', 'some-barking', 'some-fur', 'poodle.jpg', 'Poodle Rescue', 'http://www.poodleclubofamericarescuefoundationinc.org/', 'Poodles have a reputation for being “sissies.” They way their hair is cut for shows probably doesnt help that image, but Poodles are by no means fragile, shrinking violets. They are outgoing, friendly dogs who love to run and romp, and interestingly, they were originally used to assist hunters of water fowl. They are true family dogs who can play hard with children all afternoon, then curl up in the living room for an evening of relaxation. Poodles make excellent watchdogs, they are alert and curious and will sound the alarm that a person or animal is approaching. They make an excellent choice for families of all sizes and ages, and are great for first time dog owners.', 'https://www.youtube.com/embed/h5V01RPjL_0');
}

function scorePups() {
  for (var i=0; i < allPups.length; i++) {
    //we are starting at one because we don't want to incluse the first question in score
    //checking for lifestyle
    if(quizResults[1] === allPups[i].pupLifestyle) {
      allPups[i].pupScore++;
    }
    //checking for pet allergies
    if(quizResults[2] !== allPups[i].allergies) {
      allPups[i].pupScore++;
    }
    //checking for service dog
    if(quizResults[3] === allPups[i].pupService) {
      allPups[i].pupScore++;
    }
    //checking for noise tolerance
    if(quizResults[4] === allPups[i].noiseTolerance || quizResults[4] === 'dont-care' || (quizResults[4] === 'some-barking' && allPups[i].noiseTolerance === 'no-barking')) {
      allPups[i].pupScore++;
    }
    //checking for fur length
    if(quizResults[5] === allPups[i].furLength || quizResults[5] === 'fur-dont-care' || (quizResults[5] === 'some-fur' && allPups[i].furLength === 'min-fur')) {
      allPups[i].pupScore++;
    }
  }
}
// This function is going to sort the pups in the allPups array by pupScore
function sortPups() {
  allPups.sort(function (b, a) {
    return +a.pupScore - +b.pupScore;
  });
}
// In order for a dog to be considered for the topDog array, the size must match
function selectTopDogs() {
  var i = 0;
  var endOfScoringDogs = false;
  while(topDogs.length < 3 && endOfScoringDogs === false && i < allPups.length) {
    if(allPups[i].pupScore > 0 && quizResults[0] === allPups[i].sizeOfPup) {
      topDogs.push(allPups[i]);
    } else {
      if (allPups[i].pupScore === 0) {
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
  breedDesc.textContent = topDogs[selection].breed;


  var liEl = document.createElement('li');
  liEl.textContent = topDogs[selection].pupDesc;
  breedDesc.appendChild(liEl);

  liEl = document.createElement('li');
  var aEl = document.createElement('a');
  var linkText = document.createTextNode(topDogs[selection].linkDesc);
  aEl.appendChild(linkText);
  aEl.title = topDogs[selection].linkDesc;
  aEl.href = topDogs[selection].pupLink;
  aEl.setAttribute('target', '_blank');
  breedDesc.appendChild(liEl);
  liEl.appendChild(aEl);


  //Imbed YouTube Video if Available
  if (topDogs[selection].pupVideo) {
    var iframe = document.createElement('iframe');
    iframe.setAttribute('width', 560);
    iframe.setAttribute('height', 315);
    iframe.setAttribute('src', topDogs[selection].pupVideo);
    breedDesc.appendChild(iframe);
  }
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
  window.location.href='quiz.html';

});

