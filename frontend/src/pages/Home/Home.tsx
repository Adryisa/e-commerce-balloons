import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { useEffect } from 'react'
import { loadBalloons } from '../../redux/actions/actionCreators'
import Header from '../../components/Header/header'

const Home = () => {

const balloons = useSelector(store => store)
const dispatch = useDispatch()

useEffect(() => {
    dispatch(loadBalloons())
}, [dispatch])

console.log(balloons)

    return (
    <Header /> 
    )
}

export default Home
