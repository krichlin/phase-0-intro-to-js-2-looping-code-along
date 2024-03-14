// Code your solutions in this file
//for (let age = 30; age < 40; age++) {
//    console.log(`I'm ${age} years old.  Happy birthday to me!`);
//    debugger;
// }
// wrapGifts(gifts);


function writeCards(namesArray, event){

    let thankYouCards = [];
    for (let i = 0; i < namesArray.length; i++) {
        thankYouCards.push(`Thank you, ${namesArray[i]}, for the wonderful ${event} gift!`);
    }
    return thankYouCards;
}


outputfile = writeCards(["Charlie, Samip", "Ali"], "birthday");
console.log(`${outputfile}`);

function countDown(startingNumber) {
    while (startingNumber > 0) {
        console.log(startingNumber);
        startingNumber -= 1;
    }
    console.log( startingNumber );
  }