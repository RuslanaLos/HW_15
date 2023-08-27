function getKeysLength(text) {
    let keysLength = parseInt(prompt(text));
    while (isNaN(keysLength) || keysLength <= 0 || keysLength % 1 !== 0){
        keysLength = parseInt(prompt("Ви ввели невірне значення. Введіть ціле число, яке більше нуля : "));
    }
    return keysLength;
}

function generateKey(length, characters) {
    let resultArr = [];
    const keyLength = characters.length;
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * keyLength);
        resultArr.push(characters[randomIndex]);
    }
    return resultArr;
}
const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
const charactersArr = characters.split('');

const lengthByUser = getKeysLength(" Введіть довжину пароля: ");

const key = generateKey(lengthByUser, charactersArr);
console.log(key.join(''));