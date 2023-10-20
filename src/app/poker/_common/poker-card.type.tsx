export interface PokerCard {
    suit: Suits;
    rank: string;
}

export enum Suits {
    Spade = '♠',
    Heart = '♥',
    Diamond = '♦',
    Club = '♣'
}
