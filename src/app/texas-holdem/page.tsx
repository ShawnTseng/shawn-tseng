'use client';

import { useEffect, useState } from "react";
import { PokerCard, Suits } from "../poker/_common/poker-card.type";
import { initDeckOfCards } from "../poker/_common/poker-utility";
import { initHandCombinations } from "./_common/texas-holdem-utility";

export default function TexasHoldem() {
    // TODO: 將這個函式移到全域
    const { deckOfCards, dealHands } = initDeckOfCards();
    const [hand, sethand] = useState<Array<PokerCard>>([]);
    const [handCombinations, sethandCombinations] = useState<Array<Array<PokerCard>>>([]);

    const dealHandToMe = () => {
        const myHand = dealHands() || [];
        sethand(myHand);
    }

    useEffect(() => {
        const handCombinations = initHandCombinations();
        sethandCombinations(handCombinations);
    }, []);

    return <div className="w-full flex flex-col justify-center items-center p-8">
        <div className="max-w-7xl w-full text-right">
            <button className="btn-sky" onClick={dealHandToMe}>Deal Hand</button>
        </div>
        <h1 className="m-8">Hand</h1>
        <div className="max-w-7xl w-full flex justify-center poker-card-hand">
            {hand.map((card, index) => {
                return <div key={index} className={`poker-card ${(card.suit === Suits.Diamond || card.suit === Suits.Heart) ? 'poker-card-red' : 'poker-card-black'}`}>
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
                        return <div key={index} className={`poker-card ${(card.suit === Suits.Diamond || card.suit === Suits.Heart) ? 'poker-card-red' : 'poker-card-black'}`}>
                            <span>{card.suit}</span>
                            <span>{card.rank}</span>
                        </div>
                    })}
                </div>
            })}
        </div>
    </div>
}