'use client';

import { useEffect, useState } from "react";
import { PokerCard, Suits } from "../poker/_common/poker-card.type";
import { usePoker } from "../_hooks/usePoker";
import { useTexasHoldemCardSizeRules } from "../_hooks/useTexasHoldemCardSizeRules";

export default function TexasHoldem() {
    const { deckOfCards, handCombinations, dealHands } = usePoker();
    const [hand, sethand] = useState<Array<PokerCard | undefined>>([]);
    const { winRate } = useTexasHoldemCardSizeRules(deckOfCards, handCombinations, hand);

    const dealHandToMe = () => {
        const myHand = dealHands();
        sethand(myHand);
    }

    return <div className="w-full flex flex-col justify-center items-center p-8">
        <div className="max-w-7xl w-full text-right">
            <button className="btn-sky" onClick={dealHandToMe}>Deal Hand</button>
        </div>
        <h1 className="m-8">Hand</h1>
        <div className="max-w-7xl w-full flex flex-col justify-center items-center poker-card-hand">
            <div className="flex gap-2">
                {hand.map((card, index) => {
                    return card ?
                        <div key={index} className={`poker-card ${(card.suit === Suits.Diamond || card.suit === Suits.Heart) ? 'poker-card-red' : 'poker-card-black'}`}>
                            <span>{card.suit}</span>
                            <span>{card.rank}</span>
                        </div> :
                        <div key={index}></div>
                })}
            </div>
            {hand && hand.length > 0 ?
                <div>Win Rate:{winRate}</div> :
                <></>}
        </div>
        <h1 className="m-8">Remaining cards({deckOfCards.length})</h1>
        <div className="max-w-7xl w-full grid grid-cols-13 poker-card-hand">
            {deckOfCards.map((card, index) => {
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