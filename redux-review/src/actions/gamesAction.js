import axios from 'axios'
import {popularGamesUrl,upcomingGames,newgamesurl} from '../api'

export const loadGames = () => async (dispatch) =>  {
    const popularData = await axios.get(popularGamesUrl())
    const newGamesData = await axios.get(newgamesurl())
    const upcomingData = await axios.get(upcomingGames())

     dispatch({
         type: "FETCH_GAMES",
         payload: {
             popular: popularData.data.results,
             newGames: newGamesData.data.results,
             upcoming: upcomingData.data.results
           
         }
     })
    
}

