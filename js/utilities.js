function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}
function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}
function getRandomAlphabet(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabet = alphabetString.split('');
    const randomNumber = Math.random()*25;
    const alphabetIndexNumber = Math.round(randomNumber);
    const randomAlphabet = alphabet[alphabetIndexNumber];
    return randomAlphabet;
}
function setAlphabetBgColor(alphabetId){
    document.getElementById(alphabetId).classList.add('bg-orange-400');
}
function removeAlphabetBgColor(alphabetId){
    document.getElementById(alphabetId).classList.remove('bg-orange-400');
}
function getTextElementValueById(elementId){
    const elementField = document.getElementById(elementId);
    const elementText = elementField.innerText;
    const element = parseInt(elementText);
    return element;
}
function setTextElementValueById(elementId, value){
    const elementField = document.getElementById(elementId);
    elementField.innerText = value;
}