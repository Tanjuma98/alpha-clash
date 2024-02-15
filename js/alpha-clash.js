function continueGame(){
    const alphabet = getRandomAlphabet();
    const currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerText = alphabet;
    setAlphabetBgColor(alphabet);
}
document.addEventListener('keyup', function(event){
    const pressedKeyByPlayer = event.key;
    if(pressedKeyByPlayer === 'Escape'){
        gameOver()
    }
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const currentAlphabetLower = currentAlphabet.toLowerCase();
    if(pressedKeyByPlayer === currentAlphabetLower){
        const currentScore = getTextElementValueById('current-score');
        const newScore = currentScore + 1;
        setTextElementValueById('current-score', newScore);
        removeAlphabetBgColor(currentAlphabetLower);
        continueGame();
    }
    else{
        const currentLife = getTextElementValueById('current-life');
        const newLife = currentLife - 1;
        setTextElementValueById('current-life', newLife);
        if(newLife === 0){
            gameOver();
        }
    }
})
function play(){
    hideElementById('home-screen')
    hideElementById('score-screen')
    showElementById('playground-screen');
    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0);
    continueGame();
}
function gameOver(){
    hideElementById('playground-screen');
    showElementById('score-screen');
    const finalScore = getTextElementValueById('current-score');
    setTextElementValueById('final-points', finalScore);
    const lastAlphabet = document.getElementById('current-alphabet');
    const alphabet = lastAlphabet.innerText;
    removeAlphabetBgColor(alphabet);
}