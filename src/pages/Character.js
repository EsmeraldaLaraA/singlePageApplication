import getData from "../utils/getData";
import getHash from "../utils/getHash";

const Character = async () => {
    const id = getHash();
    const character = await getData(id);

    const view = `
        <div class="Characters-inner">
            <article class="Character-card">
                <img src="${character.image}" alt="${character.name}">
                <h2>${character.name}</h2>
            </article>

            <article class="Characters-card">
                <h3>Episodes: <span>${character.episode.length}</span></h3>
                <h3>Status: <span>${character.status}</span></h3>
                <h3>Species: <span>${character.species}</span></h3>
                <h3>Gender: <span>${character.gender}</span></h3>
                <h3>Origin: ${character.name}</h3>
                <h3>Last Location: <span>${character.name}</span></h3>
            </article>
        </div>
    `;
    return view;
}

export default Character;