import axios from 'axios'
import Balloon from '../../interfaces/balloonsInterface'
import balloonsAndCartActionTypes from './actionTypes'
import { AppDispatch } from '../store/store'

const urlBase = process.env.REACT_APP_API


export function loadBalloons() {
  const urlApi = `${urlBase}/balloons`

   return async (dispatch: AppDispatch) => {
      const { data } = await axios.get(urlApi) 
      dispatch({
         type: balloonsAndCartActionTypes.LOAD_BALLOONS,
         payload: data
      })
   }
}
