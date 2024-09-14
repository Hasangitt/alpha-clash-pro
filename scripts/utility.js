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


// set background color in alphabet
function setBackgroundColor(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-600');
}
// remove background color in alphabet
function removeBackgroundColor(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-600');
}

// keyboard button press
function handleKeyboradButtonPress(event){
    const playerPress = event.key;
    console.log('player press', playerPress);

    // get or set expected alphabet
    const getExpectedAlphabetElement = document.getElementById('current-alphabet');
    const expectedCureentAlphabet  = getExpectedAlphabetElement.innerText;
    const expectedAlphabet = expectedCureentAlphabet.toLowerCase();
    console.log(playerPress, expectedAlphabet);

    // check matched or not
    if(playerPress === expectedAlphabet){
        console.log('you got a point');
        removeBackgroundColor(expectedAlphabet);
        continueGame();
    }
   
    else{
        console.log('you miss a life time');
    }

}
// key press listener
document.addEventListener('keyup', handleKeyboradButtonPress);