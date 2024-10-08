function screenRemove(){
    //******* */ home sreen remove********
    const homeScreen = document.getElementById('home-screen');
    homeScreen.classList.add('hidden');
}

function screenAdd(){
     //******* */ playground screen add********
     const playgroundScreen = document.getElementById('playground-screen');
     playgroundScreen.classList.remove('hidden');
}


// alphabet container
function continueGame(){
     //********/set random alphabets element*************
     const alphabetStrings = 'abcdefghijklmnopqrstuvwxyz';
     const alphabets = alphabetStrings.split('');
 
     // ***** */ get random alphabet***********
     const randomAlphabets = Math.random()*25;
     const index = Math.round(randomAlphabets);
     const alphabet = alphabets[index];
     
     // ********* get screen alphabet***********
     const currentAlphabet = document.getElementById('current-alphabet');
     currentAlphabet.innerText = alphabet;
    //  ********** alphabet bg color***********
     setBackgroundColor(alphabet);
}


// *******set background color in alphabet*******************
function setBackgroundColor(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-600');
}
// *******remove background color in alphabet****************
function removeBackgroundColor(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-600');
}

// ****************key press listener********************
document.addEventListener('keyup', handleKeyboradButtonPress);

// ***********keyboard button press*****************
function handleKeyboradButtonPress(event){
    const playerPress = event.key;
    console.log('player pressed', playerPress);

    // **************get or set expected alphabet*************
    const getExpectedAlphabetElement = document.getElementById('current-alphabet');
    const expectedCureentAlphabet  = getExpectedAlphabetElement.innerText;
    const expectedAlphabet = expectedCureentAlphabet.toLowerCase();
    console.log(playerPress, expectedAlphabet);

    // **********check expected and press alphabet matched or not***************
    if(playerPress === expectedAlphabet){
        console.log('you got a point');
       
    //     // *********updated score:****************
    //     // 1. get the score id and  current change the score to a number
       const currentScoreElement = document.getElementById('current-score');
       const currentScoreText = currentScoreElement.innerText;
       const currentScore = parseInt(currentScoreText);
    //    // 2. increase score value 
       const finalScore = currentScore + 1;
    //     // 3. set the score in score button
       currentScoreElement.innerText = finalScore;

        // *************update or continue play with new alphabet 
        removeBackgroundColor(expectedAlphabet);
        continueGame();
    } else{
        console.log('you miss a life time');
        
        // // **************update life time:**************
        // // 1. get the life time id and change the current score to a number
        const currentLifetimeElement = document.getElementById('life-time');
        const currentLifeTime = currentLifetimeElement.innerText;
        const lifeTime = parseInt(currentLifeTime);

        // // 2. decrease by the current life time
        const totalLifeTime = lifeTime - 1;

        // // 3. set the total life time in the current life time
        currentLifetimeElement.innerText = totalLifeTime;

        

         // ***********game over:*****************
        if ( totalLifeTime === 0){
        
        gameOver()
        const finalScoreElement = document.getElementById('score-result');
        const currentScoreElement = document.getElementById('current-score');
        const currentScoreText = currentScoreElement.innerText;
        const currentScore = parseInt(currentScoreText);
        finalScoreElement.innerText = currentScore;
        }
    }
}


// ************game over elements:************
function gameOver(){

    // add hidden class in playground screen
    const playgroundScreen = document.getElementById('playground-screen');
    playgroundScreen.classList.add('hidden');
    // remove hidden class in score screen 
    const scoreScreen = document.getElementById('score-screen');
    scoreScreen.classList.remove('hidden');

}


//*********** */ play again button to play screen:************
function playAgain(){
    // remove hidden class in score screen 
    const scoreScreen = document.getElementById('score-screen');
    scoreScreen.classList.add('hidden');

   // add hidden class in playground screen
   const playgroundScreen = document.getElementById('playground-screen');
   playgroundScreen.classList.remove('hidden');


    const currentLifetimeElement = document.getElementById('life-time');
    currentLifetimeElement.innerText = 5;

    const currentScoreElement = document.getElementById('current-score');
    currentScoreElement.innerText = 0;
    
   removeBackgroundColor(expectedAlphabet);
   continueGame()
}

