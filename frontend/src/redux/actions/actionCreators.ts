import axios from 'axios'
import balloonsAndCartActionTypes from './actionTypes'
import { AppDispatch } from '../store/store'
import Balloon from '../../interfaces/balloonsInterface'
import userServices from '../../services/userServices/userServices'
import User from '../../interfaces/userInterface'
import userLogin from '../../interfaces/userLoginInterface'

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

export function loadCart(id: string) {
   const urlApi = `${urlBase}cart/${id}`
   const token = JSON.parse(localStorage.getItem('user') || '{}');

   return async (dispatch: AppDispatch) => {
         try {
      const { data } = await axios.get(urlApi, {
         headers: {
            Authorization: `Bearer ${token}`
         }
      })
      dispatch({
         type: balloonsAndCartActionTypes.LOAD_CART,
         carts: data
      })

   } catch (err) {
      dispatch({
         type: balloonsAndCartActionTypes.FAILED_LOAD_CART, 
         err
      })
      }
   }    
}  

export function addToCart(idCart: string, balloon : Balloon) {
   const token = JSON.parse(localStorage.getItem('user') || '{}');
   
   const urlApi = `${urlBase}cart/${idCart}/balloon/${balloon}`

   return async (dispatch: AppDispatch) => {
      try {
         const { data } = await axios.post(urlApi, {}, {
            headers: {
               Authorization: `Bearer ${token}`
            },
         })
         dispatch({
            type: balloonsAndCartActionTypes.ADD_TO_CART,
            payload: data
         })
      } catch (err) {
         dispatch({
            type: balloonsAndCartActionTypes.FAILED_ADD_CART,
            err
         })
      }
   }
}

export function deleteOnCart(idCart: string, balloon: Balloon) {
   const token = JSON.parse(localStorage.getItem('user') || '{}')
  
   const urlApi = `${urlBase}cart/${idCart}/balloon/${balloon}`

   return async (dispatch: AppDispatch) => {
      try {
         let data;
         await axios.delete(urlApi,  { 
            headers: {
               Authorization: `Bearer ${token}`
            },
         }).then(() => {
            data = balloon
         })

      
         dispatch({
            type: balloonsAndCartActionTypes.DELETE_CART_BALLOON,
            payload: data
         })

      } catch (err) {
         dispatch({
            type: balloonsAndCartActionTypes.FAILED_DELETE_CART_BALLOON, 
            err
         })
      }
   }
}

export function increaseBalloon(idCart: string, balloon: Balloon) {
   const token = JSON.parse(localStorage.getItem('user') || '{}')

  
   const urlApi = `${urlBase}cart/${idCart}/balloon/${balloon}`

   return async (dispatch: AppDispatch) => {
      try {
         const { data } = await axios.patch(urlApi, {
            diff: +1
         }, {
            headers: {
               Authorization: `Bearer ${token}`
            },
         })
         dispatch({
            type: balloonsAndCartActionTypes.INCREASE_AMOUNT_BALLOON,
            payload: data
         })
      } catch(err) {
         dispatch({
            type: balloonsAndCartActionTypes.FAILED_INCREASE_AMOUNT_BALLOON,
            err
         })
      }
   }
}


export function decreaseBalloon(idCart: string, balloon: Balloon) {
   const token = JSON.parse(localStorage.getItem('user') || '{}')

   const urlApi = `${urlBase}cart/${idCart}/balloon/${balloon}`
   
   return async (dispatch: AppDispatch) => {
      try {
         const { data } = await axios.patch(urlApi, {
            diff: -1
         }, {
            headers: {
               Authorization: `Bearer ${token}`
            },
         })
         dispatch({
            type: balloonsAndCartActionTypes.DECREASE_AMOUNT_BALLOON,
            payload: data
         })
      } catch(err) {
         dispatch({
            type: balloonsAndCartActionTypes.FAILED_DECREASE_AMOUNT_BALLOON,
            err
         })
      }
   }
}

export function loadUser(user: userLogin) {
      return (dispatch: AppDispatch) => {
         dispatch({
         type: balloonsAndCartActionTypes.LOAD_USER,
         payload: user
         })
      }
}

export function addUser(user: User) {
   return (dispatch: AppDispatch) => {
      try {
         dispatch({
         type: balloonsAndCartActionTypes.ADD_USER,
         payload: user
      })
      } catch(err) {
         dispatch ({
            type: balloonsAndCartActionTypes.FAILED_ADD_USER,
            err
         })
      }

   }
}

export function buy(idCart: string) {
   const token = JSON.parse(localStorage.getItem('user') || '{}')
  
   const urlApi = `${urlBase}cart/${idCart}`
   console.log(urlApi)
   return async (dispatch: AppDispatch) => {
      try {
         const data  = await axios.patch(urlApi, {}, {
            headers: {
               Authorization: `Bearer ${token}`
            }
         })
         console.log('estoy en el action creator', data)
         dispatch({
            type: balloonsAndCartActionTypes.BUY,
            payload: data
         })
      } catch (err) {
         dispatch({
            type: balloonsAndCartActionTypes.FAILED_BUY,
            err
         })
      }
   }
}