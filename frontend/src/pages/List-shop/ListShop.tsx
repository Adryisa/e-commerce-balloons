import React from 'react'
import { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { loadBalloons } from '../../redux/actions/actionCreators'

const ListShop = () => {

const balloons = useSelector(store => store)
const dispatch = useDispatch()

    useEffect(() => {
    dispatch(loadBalloons())
}, [dispatch])

console.log(balloons)
    return (
        <div>
            Holiii im a list of products
        </div>
    )
}

export default ListShop
