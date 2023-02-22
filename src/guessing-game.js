class GuessingGame {
    constructor() {
        let min1;
        let max1;
        let guess;
        let guessBefore;
    }

    setRange(min, max) {
        GuessingGame.min1=min;
        GuessingGame.max1=max;
        GuessingGame.guessBefore=0;
    }

    guess() {
        GuessingGame.guess = Math.ceil((GuessingGame.min1 + GuessingGame.max1)/2);
        return GuessingGame.guess;
    }

    lower() {
        GuessingGame.max1 = GuessingGame.guess;
        return;
    }

    greater() {
        GuessingGame.min1 = GuessingGame.guess;
        return;
    }
}

module.exports = GuessingGame;
