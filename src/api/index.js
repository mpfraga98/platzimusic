import config from './config'

const API_KEY = config.apikey;
const URL = `https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=:pais&api_key=${API_KEY}&format=json`;

export default function getArtists(pais){
    const url = URL.replace(':pais',pais)
    return fetch(url)
            .then(res => res.json())
            .then(json => json.topartists.artist)
}