'use client';

import { useState } from "react";

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

// TODO:建立手牌比較的規則
const cardSizeRules = () => {
    const highCard = (hand1, hand2) => {

    }
}

export default function Poker() {
    const { deckOfCards, dealHands } = initDeckOfCards();
    const [hand, sethand] = useState<Array<PokerCard>>([]);
    let handCombinations: Array<Array<PokerCard>> = [];

    const dealHandToMe = () => {
        const myHand = dealHands();
        sethand(myHand);
    }

    const initHandCombinations = () => {
        const { deckOfCards } = initDeckOfCards();
        const handCombinations: Array<Array<PokerCard>> = [];

        for (let i = 0; i < 52; i++) {
            for (let j = i + 1; j < 52; j++) {
                handCombinations.push([deckOfCards[i], deckOfCards[j]]);
            }
        }

        return handCombinations;
    }

    if (handCombinations.length === 0) {
        handCombinations = initHandCombinations();
    }

    return <div className="w-full flex flex-col justify-center items-center p-8">
        <div className="max-w-7xl w-full text-right">
            <button className=" p-4 rounded-md bg-sky-500 shadow-md" onClick={dealHandToMe}>Deal Hand</button>
        </div>
        <h1 className="m-8">Hand</h1>
        <div className="max-w-7xl w-full flex justify-center gap-2">
            {hand.map((card, index) => {
                return <div key={index}
                    className={`border-2 w-10 min-w-[40px] h-16 gap-1 
            flex justify-center items-center 
            rounded-md ${card.color === Colors.Red ? 'text-[#f00]' : 'text-[#000]'}`}>
                    <span>{card.suit}</span>
                    <span>{card.rank}</span>
                </div>
            })}
        </div>
        <h1 className="m-8">Possible Pre-Flop Hand Combinations({handCombinations.length})</h1>
        <div className="max-w-7xl w-full grid grid-cols-12 gap-2">
            {handCombinations.map((handCombination) => {
                return <div className="flex"> {
                    handCombination.map((card, index) => {
                        return <div key={index}
                            className={`border-2 w-10 min-w-[40px] h-16 gap-1 
                                        flex justify-center items-center 
                                        rounded-md ${card.color === Colors.Red ? 'text-[#f00]' : 'text-[#000]'}`}>
                            <span>{card.suit}</span>
                            <span>{card.rank}</span>
                        </div>
                    })}
                </div>
            })}
        </div>

        <h1 className="m-8">All cards</h1>
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