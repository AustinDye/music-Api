import { AppState } from "../AppState.js"
import { api } from "./AxiosService.js"



const params = {
 q_artist: '',
 apikey: 'a04f67123f05f672e6d6cc86f53e04e5',
}

class ArtistsService {
 async search(query){
  params.q_artist = query
  const res = await api.get('artist.search?=', {params})
  AppState.artists = res.data.results.map(a => new ArtistsService(a))
 }
}

export const artistsService = new ArtistsService()