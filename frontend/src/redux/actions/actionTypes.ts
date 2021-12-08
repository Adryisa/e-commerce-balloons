export interface actionTypesInterface {
    LOAD_BALLOONS: string,
    FAILED_LOAD_BALLOONS: string,
    LOAD_CART: string
    FAILED_LOAD_CART: string,
    ADD_TO_CART: string,
    FAILED_ADD_CART: string


}

const balloonsAndCartActionTypes: actionTypesInterface = {
    LOAD_BALLOONS: 'LOAD_BALLOONS',
    FAILED_LOAD_BALLOONS: 'FAILED_LOAD_BALLOONS',
    LOAD_CART: 'LOAD_CART',
    FAILED_LOAD_CART: 'FAILED_LOAD_CART',
    ADD_TO_CART: ' ADD_TO_CART',
    FAILED_ADD_CART: 'FAILED_ADD_CART'
}


export default balloonsAndCartActionTypes