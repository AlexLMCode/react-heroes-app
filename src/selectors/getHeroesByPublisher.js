import { heroes } from "../data/heroes";

export const getHeroesByPublisher = (publisher) => {
    const validPublishers = ['DC Comics', 'Marvel Comics']

    if (validPublishers.includes(publisher)) {

        return heroes.filter(hero => hero.publisher === publisher)

    } else {
        throw new Error(`Publisher ${publisher} not found`)
    }
}