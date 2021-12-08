import axios from 'axios'
import balloonsAndCartActionTypes from './actionTypes'
import { AppDispatch } from '../store/store'

const urlBase = 'http://localhost:3200/api/'


export function loadBalloons() {
   const urlApi = `${urlBase}balloons`

   return async (dispatch: AppDispatch) => {
      try {
         const { data } = await axios.get(urlApi) 

         dispatch({
            type: balloonsAndCartActionTypes.LOAD_BALLOONS,
            balloons: data
         })
         
      } catch (err) {
         dispatch({
            type: balloonsAndCartActionTypes.FAILED_LOAD_BALLOONS,
            payload: err
         })
      }
   }
}