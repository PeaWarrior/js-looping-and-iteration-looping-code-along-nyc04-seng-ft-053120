function writeCards(names, eventName) {
    let answer = [];
    for (let i = 0; i < names.length; i++) {
        answer.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
    }
    return answer;
}

function countDown(number) {
    let countup = 0
    while (countup <= number) {
        console.log(countup)
        countup++
    }
}