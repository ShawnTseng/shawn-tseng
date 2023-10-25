import { useEffect, useState } from "react";
import { ComparisonResult, PokerCard } from "../poker/_common/poker-card.type";

export const useTexasHoldemCardSizeRules = (deckOfCards: Array<PokerCard> = [],
    handCombinations: Array<Array<PokerCard>> = [],
    hand: Array<PokerCard | undefined> = []) => {
    const [winRate, setWinRate] = useState<string>('100%');
    const [lossRate, setLossRate] = useState<string>('0%');
    const [tieRate, setTieRate] = useState<string>('0%');

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
        const lossRate = `${(lossCount / total * 100).toFixed(2)}%`;
        setLossRate(lossRate);
        const tieRate = `${(tieCount / total * 100).toFixed(2)}%`;
        setTieRate(tieRate);
        // TODO:建立手牌比較的規則
        // const cardSizeRules = () => {
        //     const highCard = (hand1: any, hand2: any) => {

        //     }
        //     const isOnePair = (hand: Array<PokerCard | undefined>) => {

        //     }
        // }

    }, [JSON.stringify(handCombinations)])

    return { winRate, lossRate, tieRate };
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
    const hand01 = [...hand1].sort((a, b) => {
        if (a && a.value && b && b.value) {
            return b.value - a.value;
        }
        return 0;
    });

    const hand02 = [...hand2].sort((a, b) => {
        if (a && a.value && b && b.value) {
            return b.value - a.value;
        }
        return 0;
    });

    const cardValue1 = hand01[0]?.value;
    const cardValue2 = hand02[0]?.value;

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