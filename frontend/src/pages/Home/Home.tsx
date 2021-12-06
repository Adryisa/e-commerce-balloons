import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { useEffect } from 'react'
import { loadBalloons } from '../../redux/actions/actionCreators'

const Home = () => {

const balloons = useSelector(store => store)
const dispatch = useDispatch()

// useEffect(() => {
//     dispatch(loadBalloons())
// }, [dispatch])

// console.log(balloons)

    return (
        <nav className='navigation'>
            <p className='navigation__text'>
                Find your products: 
            </p>
            <div className='navigation__bar' />
            <ul className='navigation__list'>
            <li className='navigation__list-item'>
                Balloons
            </li>
            <li className='navigation__list-item'>
                Accesories
            </li>
            </ul>
        </nav>
    )
}

export default Home
