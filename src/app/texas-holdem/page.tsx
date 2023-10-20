'use client';

import { useState } from "react";
import { Colors, PokerCard } from "../poker/_common/poker-card.type";
import { initDeckOfCards } from "../poker/_common/poker-utility";

// TODO:建立手牌比較的規則
const cardSizeRules = () => {
    const highCard = (hand1: any, hand2: any) => {

    }
}

export default function TexasHoldem() {
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
            <button className="btn-sky" onClick={dealHandToMe}>Deal Hand</button>
        </div>
        <h1 className="m-8">Hand</h1>
        <div className="max-w-7xl w-full flex justify-center poker-card-hand">
            {hand.map((card, index) => {
                return <div key={index} className={`poker-card ${card.color === Colors.Red ? 'poker-card-red' : 'poker-card-black'}`}>
                    <span>{card.suit}</span>
                    <span>{card.rank}</span>
                </div>
            })}
        </div>
        <h1 className="m-8">Possible Pre-Flop Hand Combinations({handCombinations.length})</h1>
        <div className="max-w-7xl w-full grid grid-cols-12 gap-2">
            {handCombinations.map((handCombination, index) => {
                return <div key={index} className="flex poker-card-hand"> {
                    handCombination.map((card, index) => {
                        return <div key={index} className={`poker-card ${card.color === Colors.Red ? 'poker-card-red' : 'poker-card-black'}`}>
                            <span>{card.suit}</span>
                            <span>{card.rank}</span>
                        </div>
                    })}
                </div>
            })}
        </div>
    </div>
}