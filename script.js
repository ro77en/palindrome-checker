var isPalindrome = (text) => {
    text = text.toLowerCase();
    text = text.replace(/ /g, '');
    text = text.replace(/[^a-z0-9]/ig, '');
    
    var start = 0;
    var end = text.length - 1;

    while (start < end) {
        if (text[start] !== text[end]) {
            return false;
        }
        start++;
        end--;
    }
    return true;
}

function isInputValid(text) {
    if (text === '') {
        return false;
    }
    return true;
}
    

var btnCheck = document.getElementById('check-btn');
var outResult = document.getElementById('result');
btnCheck.addEventListener('click', () => {
    var inText = document.getElementById('text-input').value;
    
    if (isInputValid(inText)) {
            if (isPalindrome(inText)) {
                outResult.innerHTML = `<b>${inText}</b> is a palindrome!`;
            } else {
                outResult.innerHTML = `<b>${inText}</b> is a <b>NOT</b> palindrome.`;
            }
    } else {
        alert('Please input a value');        
    }
});