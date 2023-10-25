'use client';

import { Suits } from "./_common/poker-card.type";
import { usePoker } from "../_hooks/usePoker";

export default function Poker() {
    const { deckOfCards } = usePoker();

    return <div className="w-full flex flex-col justify-center items-center p-8">
        <h1 className="m-8">All cards</h1>
        <div className="max-w-7xl w-full grid grid-cols-13 poker-card-hand">
            {deckOfCards.map((card, index) => {
                return <div key={index} className={`poker-card ${(card.suit === Suits.Diamond || card.suit === Suits.Heart) ? 'poker-card-red' : 'poker-card-black'}`}>
                    <span>{card.suit}</span>
                    <span>{card.rank}</span>
                </div>
            })}
        </div>
    </div>
}