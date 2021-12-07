import React from 'react'
import { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { loadBalloons } from '../../redux/actions/actionCreators'

const ListShopt = () => {

const balloons = useSelector(store => store)
const dispatch = useDispatch()

    useEffect(() => {
    dispatch(loadBalloons())
}, [dispatch])

console.log(balloons)
    return (
        <div>
            
        </div>
    )
}

export default ListShopt
