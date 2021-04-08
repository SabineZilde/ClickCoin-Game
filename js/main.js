let totalCoins = 0;
let availCoins = 0;

let nrOfSmallUpgrades = 0;
let priceFor1x = 10;

let nrOfBigUpgrades = 0;
let priceFor10x = 90;

setInterval(function () {
    // unblocks/blocks "Buy 1x upgrade" button
    if (availCoins >= priceFor1x) {
        document.querySelector('#buy-1x-upgrade').disabled = false;
    } else {
        document.querySelector('#buy-1x-upgrade').disabled = true;
    };

    // unblocks/blocks "Buy 10x upgrade" button
    if (availCoins >= priceFor10x) {
        document.querySelector('#buy-10x-upgrade').disabled = false;
    } else {
        document.querySelector('#buy-10x-upgrade').disabled = true;
    };

    // adds 1 coin per second
    totalCoins += nrOfSmallUpgrades / 100;
    availCoins += nrOfSmallUpgrades / 100;

    // passes rounded values into innerHTML
    document.querySelector('#total-count').innerHTML = Math.round(totalCoins);
    document.querySelector('#available-count').innerHTML = Math.round(availCoins);
    document.querySelector('#upgrades-1x').innerHTML = nrOfSmallUpgrades;
    document.querySelector('#price-1x').innerHTML = Math.round(priceFor1x);
    document.querySelector('#upgrades-10x').innerHTML = nrOfBigUpgrades;
    document.querySelector('#price-10x').innerHTML = Math.round(priceFor10x);
}, 10);

// button "Click me!"
document.querySelector('#increase-count').addEventListener('click', function () {
    // adds +1 to "Total Coins" on each click
    totalCoins++;
    // adds +1 to "Available for spending" on each click
    availCoins++;
});

// buttton "Buy 1x upgrade"
document.querySelector('#buy-1x-upgrade').addEventListener('click', function () {
    // adds +1 to "1x upgrades" on each click
    nrOfSmallUpgrades++;
    // extracts coins spent for purchase from "Available coins"
    availCoins -= priceFor1x;
    // adds 10% to "current price" after each purchase
    priceFor1x += (priceFor1x / 10);
    
});

// buttton "Buy 10x upgrade"
document.querySelector('#buy-10x-upgrade').addEventListener('click', function () {
    // adds +1 to "10x upgrades" on each click
    nrOfBigUpgrades++;
    // extracts coins spent for purchase from "Available coins"
    availCoins -= priceFor10x;
    // adds 10% to "current price" after each purchase
    priceFor10x += (priceFor10x / 10);
    
});

    // // counts the number of button clicks
    // const countClicks = parseInt(nrOfSmallUpgrades.innerHTML);
    // // console.log(countClicks);

    // let priceFor1x = parseInt(document.querySelector('#price-1x').innerHTML);
    // // console.log(priceFor1x);
    // let availCoins = parseInt(document.querySelector('#available-count').innerHTML);

    // // calculates how much is spent for purchase
    // const payForCoins = availCoins - priceFor1x;
    // // console.log(payForCoins);

    // // pases in "Available for spending" new value
    // document.querySelector('#available-count').innerHTML = payForCoins;

    // // calculates new price
    // const newPrice = priceFor1x + Math.round(priceFor1x / 10);

    // // passes new price in "current price"
    // document.querySelector('#price-1x').innerHTML = newPrice;
    // // console.log(newPrice);


    // // 1x upgrade in progress
    // // adds 1 coin per second to total cost
    // let totalTimer = parseInt(document.querySelector('#total-count').innerHTML);
    // setInterval(function () {
    //     totalTimer = totalTimer + (1 * countClicks);
    //     document.querySelector('#total-count').innerHTML = totalTimer;
    // }, 1000);

    // // adds 1 coin per second to avaolable coins
    // let availableTimer = parseInt(document.querySelector('#available-count').innerHTML);
    // setInterval(function () {
    //     availableTimer = availableTimer + (1 * countClicks);
    //     document.querySelector('#available-count').innerHTML = availableTimer;
    // }, 1000);




// function click1x() {
//     add +1 in the text for 1x;
//     add 10% to price;
//      extracts 10 coins from available
// disables button 
//     setInterval add +1 coin per second;
// }

// function click10x() {
//     add +1 in the text for 10x;
//     add 10% to price;
//     extracts 90 coins from available
//      disable button
//     setInterval add +10 coins per second;
// }