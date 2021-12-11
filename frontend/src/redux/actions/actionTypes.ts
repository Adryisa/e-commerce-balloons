export interface actionTypesInterface {
    LOAD_BALLOONS: string,
    FAILED_LOAD_BALLOONS: string,
    LOAD_CART: string
    FAILED_LOAD_CART: string,
    ADD_TO_CART: string,
    FAILED_ADD_CART: string,
    DELETE_CART_BALLOON: string,
    FAILED_DELETE_CART_BALLOON: string,
    INCREASE_AMOUNT_BALLOON: string,
    FAILED_INCREASE_AMOUNT_BALLOON: string,
    DECREASE_AMOUNT_BALLOON: string,
    FAILED_DECREASE_AMOUNT_BALLOON: string,
    LOAD_USER: string, 
    FAILED_LOAD_USER: string,
    ADD_USER: string, 
    FAILED_ADD_USER: string

}

const balloonsAndCartActionTypes: actionTypesInterface = {
    LOAD_BALLOONS: 'LOAD_BALLOONS',
    FAILED_LOAD_BALLOONS: 'FAILED_LOAD_BALLOONS',
    LOAD_CART: 'LOAD_CART',
    FAILED_LOAD_CART: 'FAILED_LOAD_CART',
    ADD_TO_CART: ' ADD_TO_CART',
    FAILED_ADD_CART: 'FAILED_ADD_CART',
    DELETE_CART_BALLOON: 'DELETE_CART_BALLOON',
    FAILED_DELETE_CART_BALLOON: 'FAILED_DELETE_CART_BALLOON',
    INCREASE_AMOUNT_BALLOON: 'INCREASE_AMOUNT_BALLOON',
    FAILED_INCREASE_AMOUNT_BALLOON: 'FAILED_INCREASE_AMOUNT_BALLOON',
    DECREASE_AMOUNT_BALLOON: ' DECREASE_AMOUNT_BALLOON',
    FAILED_DECREASE_AMOUNT_BALLOON: 'FAILED_DECREASE_AMOUNT_BALLOON',
    LOAD_USER: 'LOAD_USER',
    FAILED_LOAD_USER: 'FAILED_LOAD_USER',
    ADD_USER: 'ADD_USER',
    FAILED_ADD_USER: 'FAILED_ADD_USER'
}


export default balloonsAndCartActionTypes