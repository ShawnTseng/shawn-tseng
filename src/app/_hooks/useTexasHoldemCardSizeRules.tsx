import { useEffect, useState } from "react";
import { ComparisonResult, PokerCard } from "../poker/_common/poker-card.type";

export const useTexasHoldemCardSizeRules = (deckOfCards: Array<PokerCard> = [],
    handCombinations: Array<Array<PokerCard>> = [],
    hand: Array<PokerCard | undefined> = []) => {
    const [winRate, setWinRate] = useState<string>('100%');

    useEffect(() => {
        console.log('Initialize card value for texas holdem', deckOfCards);
        deckOfCards.map(card => {
            card.value = getValue(card.rank);
        });

    }, [deckOfCards]);

    useEffect(() => {
        console.log('Recalculate win rate for hand', hand, handCombinations);
        const total = handCombinations.length;
        let winCount = 0;
        let lossCount = 0;
        let tieCount = 0;
        for (const hand2 of handCombinations) {
            // TODO:加入 pair 的計算
            const result = compareHighCard(hand, hand2);
            switch (result) {
                case ComparisonResult.Win:
                    winCount++;
                    break;
                case ComparisonResult.Loss:
                    lossCount++;
                    break;
                case ComparisonResult.Tie:
                    tieCount++;
                    break;
            }
        }
        console.log(winCount, lossCount, tieCount);
        const winRate = `${(winCount / total * 100).toFixed(2)}%`;
        setWinRate(winRate);
        // TODO:建立手牌比較的規則
        // const cardSizeRules = () => {
        //     const highCard = (hand1: any, hand2: any) => {

        //     }
        //     const isOnePair = (hand: Array<PokerCard | undefined>) => {

        //     }
        // }

    }, [JSON.stringify(handCombinations)])

    return { winRate };
}

const getValue = (n: string): any => {
    switch (n) {
        case '2':
            return 2;
        case '3':
            return 3;
        case '4':
            return 4;
        case '5':
            return 5;
        case '6':
            return 6;
        case '7':
            return 7;
        case '8':
            return 8;
        case '9':
            return 9;
        case '10':
            return 10;
        case 'J':
            return 11;
        case 'Q':
            return 12;
        case 'K':
            return 13;
        case 'A':
            return 14;
    }
}

// TODO:確認公式是否正確
const compareHighCard = (hand1: Array<PokerCard | undefined>, hand2: Array<PokerCard | undefined>) => {
    for (let i = hand1.length - 1; i >= 0; i--) {
        const cardValue1 = hand1[i]?.value;
        const cardValue2 = hand2[i]?.value;

        if (cardValue1 && cardValue2) {
            if (cardValue1 > cardValue2) {
                return ComparisonResult.Win;
            } else if (cardValue1 < cardValue2) {
                return ComparisonResult.Loss;
            } else {
                return ComparisonResult.Tie;
            }
        }
    }
}