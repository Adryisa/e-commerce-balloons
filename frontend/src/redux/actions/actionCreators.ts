import axios from 'axios'
import Balloon from '../../interfaces/balloonsInterface'
import balloonsAndCartActionTypes from './actionTypes'
import { AppDispatch } from '../store/store'

const urlBase = 'http://localhost:3200/api/'


export function loadBalloons() {
  const urlApi = `${urlBase}balloons`

   return async (dispatch: AppDispatch) => {
      const { data: balloons } = await axios.get(urlApi) 
      dispatch({
         type: balloonsAndCartActionTypes.LOAD_BALLOONS,
         balloons
      })
   }
}
