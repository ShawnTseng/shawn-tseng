import { Colors, PokerCard, Suits } from "./poker-card.type";

const initDeckOfCards = () => {
    let deckOfCards: Array<PokerCard> = [];
    deckOfCards = [...Array(13 * 4)].map((_, i) => i).map(n => {
        const rank = getRank((n % 13) + 1);
        const suitIndex = Math.floor(n / 13);
        let suit = Suits.Spade;
        let color = Colors.Black;
        switch (suitIndex) {
            case 0:
                suit = Suits.Spade;
                color = Colors.Black;
                break;
            case 1:
                suit = Suits.Heart;
                color = Colors.Red;
                break;
            case 2:
                suit = Suits.Diamond;
                color = Colors.Red;
                break;
            case 3:
                suit = Suits.Club;
                color = Colors.Black;
                break;
            default:
                suit = Suits.Spade;
                color = Colors.Black;
                break;
        }
        return { suit, rank, color }
    });

    // default: random deal, set index: getting assigned card
    const dealAHand = (index = -1): PokerCard => {
        if (index === -1) {
            index = Math.floor(Math.random() * 52);
        }
        const card = deckOfCards.splice(index, 1)[0];
        return card;
    }

    const dealHands = (): Array<PokerCard> => {
        const cardSet = [];
        while (cardSet.length < 2) {
            const index = Math.floor(Math.random() * 52);
            const card = dealAHand(index);
            cardSet.push(card);
        }
        return cardSet;
    }

    return { deckOfCards, dealAHand, dealHands };
}

const getRank = (n: number): any => {
    switch (n) {
        case 1:
            return 'A';
        case 2:
            return '2';
        case 3:
            return '3';
        case 4:
            return '4';
        case 5:
            return '5';
        case 6:
            return '6';
        case 7:
            return '7';
        case 8:
            return '8';
        case 9:
            return '9';
        case 10:
            return '10';
        case 11:
            return 'J';
        case 12:
            return 'Q';
        case 13:
            return 'K';
    }
}

export { initDeckOfCards };