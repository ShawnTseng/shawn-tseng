export interface PokerCard {
    suit: Suits;
    rank: string;
    value?: number; // each game can set their own rules
}

export enum Suits {
    Spade = '♠',
    Heart = '♥',
    Diamond = '♦',
    Club = '♣'
}

export enum ComparisonResult {
    Win,
    Loss,
    Tie
}