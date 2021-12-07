import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { useEffect } from 'react'
import { loadBalloons } from '../../redux/actions/actionCreators'
import './home.scss'
import SecondaryTitle from '../../components/second-title/SecondaryTitle'

const Home = () => {

const balloons = useSelector(store => store)
const dispatch = useDispatch()

// useEffect(() => {
//     dispatch(loadBalloons())
// }, [dispatch])

// console.log(balloons)

// put an oncliclk on the image to go to shop list

    return (
        <nav className='navigation'>
                    <SecondaryTitle />
            <ul className='navigation__list'>
            <li className='navigation__list-item' >
                <img src="" alt="balloons image" className='navigation__list-img'/>
               <p className='navigation__list-text'> Balloons</p>
            </li>
            <li className='navigation__list-item'>
                <p className='navigation__list-text' >Accesories</p> 
                <img src="" alt="accesories image" className='navigation__list-img'/>
            </li>
            </ul>
        </nav>
    )
}

export default Home
