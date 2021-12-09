import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decreaseBalloon, deleteOnCart, increaseBalloon, loadCart } from '../../redux/actions/actionCreators'
import { useParams } from 'react-router'
import { rootState } from '../../redux/reducers'
import plus from '../../assets/plus.svg'
import minus from '../../assets/minus.svg'
import trash from '../../assets/trash.svg'
import Balloon from '../../interfaces/balloonsInterface'

const Cart = () => {

    const { id } = useParams()

    const cart = useSelector((store: rootState) => {
        console.log('HOLA', store.cart)
        return store.cart
    })

    const { user } = JSON.parse(localStorage.getItem('user') || '{}')
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadCart(user.cart))
    }, [dispatch])

    function handleDelete(balloon: Balloon) {
        dispatch(deleteOnCart(id, balloon))
    }

    function handleIncrease(balloon: Balloon) {
        dispatch(increaseBalloon(id, balloon))

        console.log('here here here')
    }

    function handleDecrease(balloon: Balloon) {
        dispatch(decreaseBalloon(id, balloon))

        console.log('im clicked decrease')
    }

    return (
        <section>
        <p className=''>CART</p>
        <div className='bar'></div>

            {cart.balloons ? cart.balloons.map((balloon: any, key: number) => (
                <div key={key}>
                {/* <img src={balloon.balloonId.img_url} alt=balloon {balloon.balloonId.color} /> */}
                <div>barrita verde</div>
               <p>Type: {''} {balloon.balloonId.type}</p>
               <p>Color: {''} {balloon.balloonId.color }</p>
               <p>Price: {''} {balloon.balloonId.price}</p>
               <img src={minus} alt="minus icon" onClick={() => handleDecrease(balloon.balloonId._id)}/>
               <p>{''} {balloon.amount}</p>
               <img src={plus} alt="plus icon"  onClick={() => handleIncrease(balloon.balloonId._id)}/>

               <p>SEPARARRRRRRRRR</p>
               <img src={trash} alt="trash icon" onClick={() => handleDelete(balloon.balloonId._id)}/>
                </div>
            )) : <h2>Your cart is empty</h2> }
                  <p>
                Total price:
                {cart?.totalPrice}
                  </p>
                <button>PAY</button>
        </section>
    )
}

export default Cart
