import { PokerCard } from "../../poker/_common/poker-card.type";
import { initDeckOfCards } from "../../poker/_common/poker-utility";

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

// TODO:建立手牌比較的規則
const cardSizeRules = () => {
    const highCard = (hand1: any, hand2: any) => {

    }
}

export { initHandCombinations };