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