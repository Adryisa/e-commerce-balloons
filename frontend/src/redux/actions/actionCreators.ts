import axios from 'axios'
import balloonsAndCartActionTypes from './actionTypes'
import { AppDispatch } from '../store/store'
import Balloon from '../../interfaces/balloonsInterface'

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
            Authorization: `Bearer ${token.token}`
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

export function addToCart(idCart: any, balloon : Balloon) {
   const token = JSON.parse(localStorage.getItem('user') || '{}');
   
   const { user } = JSON.parse(localStorage.getItem('user') || '{}')
   
   const urlApi = `${urlBase}cart/${user.cart}/balloon/${balloon}`

   return async (dispatch: AppDispatch) => {
      try {
         const { data } = await axios.post(urlApi, {}, {
            headers: {
               Authorization: `Bearer ${token.token}`
            },
         })
         dispatch({
            type: balloonsAndCartActionTypes.ADD_TO_CART,
            addedBalloon: data
         })
      } catch (err) {
         dispatch({
            type: balloonsAndCartActionTypes.FAILED_ADD_CART,
            err
         })
      }
   }
}

export function deleteToCart(idCart: any, balloon: Balloon) {
   const token = JSON.parse(localStorage.getItem('user') || '{}')

   const { user } = JSON.parse(localStorage.getItem('user') || '{}')

   const urlApi = `${urlBase}cart/${user.cart}/balloon/${balloon}`

   console.log(balloon)

   return async (dispatch: AppDispatch) => {
      try {
         const { data } = await axios.delete(urlApi, {
            headers: {
               Authorization: `Bearer ${token.token}`
            },
         })

         dispatch({
            type: balloonsAndCartActionTypes.ADD_TO_CART,
            addedBalloon: data
         })

      } catch (err) {
         dispatch({
            type: balloonsAndCartActionTypes.FAILED_DELETE_CART_BALLOON, 
            err
         })
      }
   }
}