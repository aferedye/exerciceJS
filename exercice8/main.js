let word = prompt("Saisissez un mot pour savoir si il est un palindrome");

let reverseWord = word.split('').reverse().join('');

if (word != reverseWord) {
    alert("Ce mot n'est pas un palindrome")
} else {
    alert("Ce mot est un palindrome")
};