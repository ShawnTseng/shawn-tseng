'use client';

enum Suits {
    Spade = '♠',
    Heart = '♥',
    Diamond = '♦',
    Club = '♣'
}

enum Colors {
    Red,
    Black
}

interface PokerCard {
    suit: Suits;
    rank: string;
    color: Colors;
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

const initDeckOfCards = () => {
    return [...Array(13 * 4)].map((_, i) => i).map(n => {
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
}

export default function Poker() {
    const deckOfCards: Array<PokerCard> = initDeckOfCards();

    return <div className="w-full flex justify-center items-center m-8">
        <div className="max-w-7xl w-full grid grid-cols-13 gap-1">
            {deckOfCards.map((card, index) => {
                return <div key={index}
                    className={`border-2 w-10 min-w-[40px] h-16 gap-1 
                    flex justify-center items-center 
                    rounded-md ${card.color === Colors.Red ? 'text-[#f00]' : 'text-[#000]'}`}>
                    <span>{card.suit}</span>
                    <span>{card.rank}</span>
                </div>
            })}
        </div>
    </div>
}