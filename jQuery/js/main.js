let totalCoins = 0;
let availCoins = 0;

let nrOfSmallUpgrades = 0;
let priceFor1x = 10;

let nrOfBigUpgrades = 0;
let priceFor10x = 90;

// button "Click me!"
$('#increase-count').on('click', function () {
    $('#total-count').html(totalCoins += 1); // adds +1 to "Total Coins" on each click
    $('#available-count').html(availCoins += 1); // adds +1 to "Available for spending" on each click
});

// buttton "Buy 1x upgrade"
$('#buy-1x-upgrade').on('click', function () {
    $('#upgrades-1x').html(nrOfSmallUpgrades += 1); // adds +1 to "1x upgrades" on each click
    $('#available-count').html(availCoins -= priceFor1x); // extracts coins spent for purchase from "Available coins"
    $('#price-1x').html(Math.round(priceFor1x += priceFor1x / 10)); // adds 10% to "current price" after each purchase
    setInterval(function () {
        $('#total-count').html(Math.round(totalCoins += nrOfSmallUpgrades / 100)); // adds 1 coin per second
        $('#available-count').html(Math.round(availCoins += nrOfSmallUpgrades / 100)); // adds 1 coin per second
    }, 10);
});

// buttton "Buy 10x upgrade"
$('#buy-10x-upgrade').on('click', function () {
    $('#upgrades-10x').html(nrOfBigUpgrades += 1); // adds +1 to "10x upgrades" on each click
    $('#available-count').html(availCoins -= priceFor10x); // extracts coins spent for purchase from "Available coins"
    $('#price-10x').html(Math.round(priceFor10x += priceFor10x / 10)); // adds 10% to "current price" after each purchase
    setInterval(function () {
        $('#total-count').html(Math.round(totalCoins += nrOfBigUpgrades / 100)); // adds 1 coin per second
        $('#available-count').html(Math.round(availCoins += nrOfBigUpgrades / 100)); // adds 1 coin per second
    }, 10);
});

setInterval(function () {
    // unblocks/blocks "Buy 1x upgrade" button
    if (availCoins >= priceFor1x) {
        $('#buy-1x-upgrade').prop('disabled', false);
    } else {
        $('#buy-1x-upgrade').prop('disabled', true);
    };

    // unblocks/blocks "Buy 10x upgrade" button
    if (availCoins >= priceFor10x) {
        $('#buy-10x-upgrade').prop('disabled', false);
    } else {
        $('#buy-10x-upgrade').prop('disabled', true);
    };
}, 10);
