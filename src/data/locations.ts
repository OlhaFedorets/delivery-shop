import { Locations } from "@/types/shops";

export const locations: Locations = {
    saintPetersburg: {
        name: "Санкт-Петербург",
        center: [59.93, 30.34],
        shops: [
            { id: 1, coordinates: [59.93, 30.34], name: "shop on Nevsky" },
            { id: 2, coordinates: [59.89, 30.30], name: "shop on Mitrofanevsky" },
            { id: 3, coordinates: [59.98, 30.35], name: "shop on Kantimirovskaya" },
        ],
    },
    kolpino: {
        name: "Колпино",
        center: [59.74, 30.58],
        shops: [
            { id: 4, coordinates: [59.74, 30.58], name: "Shop on Lenin Street" },
            { id: 5, coordinates: [59.76, 30.62], name: "Shop on Voznesenskoye" },
        ],
    },
    pushkin: {
        name: "Пушкин",
        center: [59.72, 30.41],
        shops: [{ id: 6, coordinates: [59.72, 30.41], name: "Shop on Oktyabrsky" }],
    },
    pavlovsk: {
        name: "Павловск",
        center: [59.68, 30.43],
        shops: [
            { id: 7, coordinates: [59.68, 30.43], name: "Shop on Michurina" },
        ],
    },
    zelenogorsk: {
        name: "Зеленогорск",
        center: [60.18, 29.73],
        shops: [
            { id: 8, coordinates: [60.18, 29.73], name: "Shop on Primorsky" },
        ],
    },
};