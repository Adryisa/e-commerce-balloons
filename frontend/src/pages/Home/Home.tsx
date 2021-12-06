import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { useEffect } from 'react'
import { loadBalloons } from '../../redux/actions/actionCreators'

const Home = () => {

const balloons = useSelector(store => store)
const dispatch = useDispatch()

useEffect(() => {
    dispatch(loadBalloons())
}, [dispatch])

console.log(balloons)

    return (
        <div>holi</div>
    )
}

export default Home
