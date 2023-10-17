'use client';

import { useState } from "react"

const openHandTableDefaultValue = [
    { rank: 1, openHand: 'AA', winRate: 0.31, tieRate: 0.005 },
    { rank: 2, openHand: 'KK', winRate: 0.26, tieRate: 0.006 },
    { rank: 3, openHand: 'QQ', winRate: 0.22, tieRate: 0.008 },
    { rank: 4, openHand: 'AKs', winRate: 0.202, tieRate: 0.019 },
    { rank: 5, openHand: 'JJ', winRate: 0.191, tieRate: 0.009 },
    { rank: 6, openHand: 'AQs', winRate: 0.187, tieRate: 0.022 },
    { rank: 7, openHand: 'KQs', winRate: 0.181, tieRate: 0.021 },
    { rank: 8, openHand: 'AJs', winRate: 0.175, tieRate: 0.025 },
    { rank: 9, openHand: 'KJs', winRate: 0.171, tieRate: 0.024 },
    { rank: 10, openHand: 'TT', winRate: 0.168, tieRate: 0.011 },
    { rank: 11, openHand: 'AKo', winRate: 0.167, tieRate: 0.020 },
    { rank: 12, openHand: 'ATs', winRate: 0.167, tieRate: 0.027 },
    { rank: 13, openHand: 'QJs', winRate: 0.166, tieRate: 0.024 },
    { rank: 14, openHand: 'KTs', winRate: 0.161, tieRate: 0.026 },
    { rank: 15, openHand: 'QTs', winRate: 0.158, tieRate: 0.026 },
    { rank: 16, openHand: 'JTs', winRate: 0.158, tieRate: 0.028 },
    { rank: 17, openHand: '99', winRate: 0.153, tieRate: 0.009 },
    { rank: 18, openHand: 'AQo', winRate: 0.149, tieRate: 0.023 },
    { rank: 19, openHand: 'A9s', winRate: 0.146, tieRate: 0.027 },
    { rank: 20, openHand: 'KQo', winRate: 0.144, tieRate: 0.022 },
    { rank: 21, openHand: '88', winRate: 0.142, tieRate: 0.009 },
    { rank: 22, openHand: 'K9s', winRate: 0.142, tieRate: 0.025 },
    { rank: 23, openHand: 'T9s', winRate: 0.141, tieRate: 0.027 },
    { rank: 24, openHand: 'A8s', winRate: 0.139, tieRate: 0.029 },
    { rank: 25, openHand: 'Q9s', winRate: 0.138, tieRate: 0.024 },
    { rank: 26, openHand: 'J9s', winRate: 0.138, tieRate: 0.025 },
    { rank: 27, openHand: 'AJo', winRate: 0.135, tieRate: 0.026 },
    { rank: 28, openHand: 'A5s', winRate: 0.134, tieRate: 0.033 },
    { rank: 29, openHand: '77', winRate: 0.134, tieRate: 0.009 },
    { rank: 30, openHand: 'A7s', winRate: 0.134, tieRate: 0.03 },
    { rank: 31, openHand: 'KJo', winRate: 0.132, tieRate: 0.025 },
    { rank: 32, openHand: 'A4s', winRate: 0.132, tieRate: 0.031 },
    { rank: 33, openHand: 'A3s', winRate: 0.131, tieRate: 0.029 },
    { rank: 34, openHand: 'A6s', winRate: 0.13, tieRate: 0.031 },
    { rank: 35, openHand: 'QJo', winRate: 0.129, tieRate: 0.025 },
    { rank: 36, openHand: '66', winRate: 0.128, tieRate: 0.009 },
    { rank: 37, openHand: 'K8s', winRate: 0.128, tieRate: 0.026 },
    { rank: 38, openHand: 'T8s', winRate: 0.127, tieRate: 0.027 },
    { rank: 39, openHand: 'A2s', winRate: 0.127, tieRate: 0.026 },
    { rank: 40, openHand: '98s', winRate: 0.126, tieRate: 0.024 },
    { rank: 41, openHand: 'J8s', winRate: 0.125, tieRate: 0.025 },
    { rank: 42, openHand: 'ATo', winRate: 0.124, tieRate: 0.028 },
    { rank: 43, openHand: 'Q8s', winRate: 0.124, tieRate: 0.025 },
    { rank: 44, openHand: 'K7s', winRate: 0.122, tieRate: 0.027 },
    { rank: 45, openHand: 'KTo', winRate: 0.122, tieRate: 0.028 },
    { rank: 46, openHand: '55', winRate: 0.122, tieRate: 0.009 },
    { rank: 47, openHand: 'JTo', winRate: 0.121, tieRate: 0.028 },
    { rank: 48, openHand: '87s', winRate: 0.12, tieRate: 0.023 },
    { rank: 49, openHand: 'QTo', winRate: 0.12, tieRate: 0.028 },
    { rank: 50, openHand: '44', winRate: 0.119, tieRate: 0.007 },
    { rank: 51, openHand: '22', winRate: 0.119, tieRate: 0.003 },
    { rank: 52, openHand: '33', winRate: 0.119, tieRate: 0.005 },
    { rank: 53, openHand: 'K6s', winRate: 0.118, tieRate: 0.028 },
    { rank: 54, openHand: '97s', winRate: 0.117, tieRate: 0.024 },
    { rank: 55, openHand: 'K5s', winRate: 0.116, tieRate: 0.029 },
    { rank: 56, openHand: '76s', winRate: 0.115, tieRate: 0.023 },
    { rank: 57, openHand: 'T7s', winRate: 0.115, tieRate: 0.027 },
    { rank: 58, openHand: 'K4s', winRate: 0.114, tieRate: 0.027 },
    { rank: 59, openHand: 'K2s', winRate: 0.113, tieRate: 0.023 },
    { rank: 60, openHand: 'K3s', winRate: 0.113, tieRate: 0.025 },
    { rank: 61, openHand: 'Q7s', winRate: 0.112, tieRate: 0.026 },
    { rank: 62, openHand: '86s', winRate: 0.112, tieRate: 0.023 },
    { rank: 63, openHand: '65s', winRate: 0.111, tieRate: 0.022 },
    { rank: 64, openHand: 'J7s', winRate: 0.111, tieRate: 0.026 },
    { rank: 65, openHand: '54s', winRate: 0.109, tieRate: 0.022 },
    { rank: 66, openHand: 'Q6s', winRate: 0.109, tieRate: 0.027 },
    { rank: 67, openHand: '75s', winRate: 0.107, tieRate: 0.023 },
    { rank: 68, openHand: '96s', winRate: 0.107, tieRate: 0.024 },
    { rank: 69, openHand: 'Q5s', winRate: 0.106, tieRate: 0.028 },

    // { rank: 0, openHand: '', winRate: 0, tieRate: 0 },
];

export default function Experiment() {
    const [openHand, setOpenHand] = useState('');

    return (
        <>
            <div className='max-w-7xl w-full h-20 sm:px-28 sm:py-4 flex flex-col items-center'>
                <div>
                    <span className="mr-2">Open Hand:</span>
                    <input className="border-2" value={openHand} onChange={(event) => { setOpenHand(event.target.value.toUpperCase()) }} />
                </div>
                <div className="relative">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">Rank</th>
                                <th scope="col" className="px-6 py-3">Open Hand</th>
                                <th scope="col" className="px-6 py-3">Win Rate</th>
                                <th scope="col" className="px-6 py-3">Tie Rate</th>
                            </tr>
                        </thead>
                        <tbody>
                            {openHandTableDefaultValue
                                .filter(oh => {
                                    const tryMatch = openHand.length === 2;
                                    let isMatch = false;
                                    if (tryMatch) {
                                        let i = 0;
                                        let currentOpenHand = oh.openHand.slice(0, 2);
                                        const alpha1 = openHand[0];
                                        const alpha2 = openHand[1];
                                        const map = new Map();

                                        while (i < 2) {
                                            if (alpha1 === currentOpenHand[i]) {
                                                if (!map.has(alpha1)) { map.set(alpha1, alpha1) };
                                            }
                                            if (alpha2 === currentOpenHand[i]) {
                                                if (!map.has(alpha2)) { map.set(alpha2, alpha2) };
                                            }
                                            i++;
                                        }

                                        isMatch = map.size === 2;
                                    }
                                    return tryMatch ? isMatch : true;
                                })
                                .map(oh => {
                                    return (
                                        <tr key={oh.rank} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                            <td className="px-6 py-4">{oh.rank}</td>
                                            <td className="px-6 py-4">{oh.openHand}</td>
                                            <td className="px-6 py-4">{(oh.winRate * 100).toFixed(1)}%</td>
                                            <td className="px-6 py-4">{(oh.tieRate * 100).toFixed(2)}%</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}