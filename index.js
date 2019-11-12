let isPalindrome = function(word){
    word = word.toLowerCase();
    let len = Math.floor(word.length / 2);
    for(let i = 0; i < len; i++){
        if (word[i] !== word[word.length - i - 1]){
            let ul = document.getElementById('not-palindromes');
            let li = document.createElement('li');
            let item = document.getElementById('testword');
            li.appendChild(document.createTextNode(item.value));
            ul.appendChild(li);
            // document.getElementById('not-palindromes').appendChild(li);
            return false;
        }
    }
    let ul = document.getElementById('palindrome-list');
    let li = document.createElement('li');
    let item = document.getElementById('testword');
    li.appendChild(document.createTextNode(item.value));
    ul.appendChild(li);
    return true;
}

// console.log(isPalindrome('racecar'));
// console.log(isPalindrome('doghouse'));
