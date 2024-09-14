function play(){
    //******* */ home sreen remove********
    const homeScreen = document.getElementById('home-screen');
    homeScreen.classList.add('hidden');
    //******* */ playground sreen add********
    const playgroundScreen = document.getElementById('playground-screen');
    playgroundScreen.classList.remove('hidden');

    //********/ alphabets*************
    const alphabetStrings = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetStrings.split('');
    // ***** */ get alphabet***********
    const randomAlphabets = Math.random()*25;
    const index = Math.round(randomAlphabets);
    const alphabet = alphabets[index];
    
    // ********* set alphabet***********
    const currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerText = alphabet;

    // **********set keyboard bg color *************
    setBackgroundColor(alphabet);

}

