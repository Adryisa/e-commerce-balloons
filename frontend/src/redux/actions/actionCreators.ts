import axios from 'axios'
import Balloon from '../../interfaces/balloonsInterface'
import balloonsAndCartActionTypes from './actionTypes'

const urlBase = 'http://localhost:3200/api/'


export function loadBalloons() {
  const urlApi = `${urlBase}/balloons`

   return async (dispatch: any) => {
      const { data } = await axios.get(urlApi) 
      dispatch({
         type: balloonsAndCartActionTypes.LOAD_BALLOONS,
         payload: data
      })
   }
}