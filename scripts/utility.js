// set background color in alphabet
function setBackgroundColor(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-600');
}

// keyboard button press
function handleKeyboradButtonPress(event){
    const playerPress = event.key;
    console.log('player press', playerPress);

    // get expected alphabet
    const getExpectedAlphabetElement = document.getElementById('current-alphabet');
    const expectedCureentAlphabet  = getExpectedAlphabetElement.innerText;
    const expectedAlphabet = expectedCureentAlphabet.toLowerCase();
    console.log(playerPress, expectedAlphabet);

    // check matched or not
    if(playerPress === expectedAlphabet){
        console.log('you got a point');
    }
   
    else{
        console.log('you miss a life time');
    }

}

document.addEventListener('keyup', handleKeyboradButtonPress);