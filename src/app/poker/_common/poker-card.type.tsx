export interface PokerCard {
    suit: Suits;
    rank: string;
    color: Colors;
}

export enum Suits {
    Spade = '♠',
    Heart = '♥',
    Diamond = '♦',
    Club = '♣'
}

export enum Colors {
    Red,
    Black
}