const API = 'https://rickandmortyapi.com/api/character/';

const getData = async (id) => {
    const apiUrl = id ? `${API}${id}` : `${API}`;
    try { 
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('API ERROR ', error);
    }
}

export default getData;