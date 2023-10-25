export interface PokerCard {
    suit: Suits;
    rank: string;
    score?: number; // each game can set their own rules
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