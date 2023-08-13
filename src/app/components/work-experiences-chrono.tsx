import { Chrono } from "react-chrono";

export default function WorkExperiencesChrono() {
    const items = [
        {
            title: "Vertiv",
            cardTitle: "ADX",
            url: "http://www.google.com",
            cardSubtitle: "Nimbus and ADX",
            cardDetailedText: "Nimbus contains ACI, IPSL, IPUHD and INC..",
            media: {
                type: "IMAGE",
                source: {
                    url: "http://someurl/image.jpg"
                }
            }
        },
        {
            title: "ATGames",
            cardTitle: "ATGames",
            url: "http://www.google.com",
            cardSubtitle: "Nimbus and ADX",
            cardDetailedText: "Nimbus contains ACI, IPSL, IPUHD and INC..",
            media: {
                type: "IMAGE",
                source: {
                    url: "http://someurl/image.jpg"
                }
            }
        }
    ];

    return (
        <div>
            <Chrono items={items} mode="VERTICAL" />
        </div>
    )
}