import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import List from '../../components/listShop/List'
import Balloon from '../../interfaces/balloonsInterface'
import { loadBalloons } from '../../redux/actions/actionCreators'
import { rootState } from '../../redux/reducers'
import './listShop.scss'

const ListShop = () => {

const [input, setInput] = useState('')

const balloons = useSelector((store: rootState) => {
    return store.balloons
})
const [search, setSearch] = useState([])
const dispatch = useDispatch()

    useEffect(() => {
    setSearch(balloons)
    }, [balloons]) 

    useEffect(() => {
    dispatch(loadBalloons())
    }, [dispatch])
    
    useEffect(() => {
        if (input.length) {
            const newSearch = search.filter(
                (item: any) => item.color.toLowerCase().includes(input.trim().toLowerCase())
                );
                setSearch(newSearch)
        } else {
            setSearch(balloons)
        }
    }, [input])


    return (
        <section className='shop'>
       <h2 className='page-title'> Shop </h2> 
        <p className='bar'></p>
        <div className='search-container'>
        <input 
        className='search-container__input'
        type='text'
        value={input}
        placeholder='Find your balloon'
        onChange={(evt) => setInput(evt.target.value)}
        />
        </div>
            <section className='shop-list'>
            {balloons.map((balloon: Balloon) => (
                <List balloon={balloon} key={balloon._id} />
            ))}
        </section>
        </section>

    )
}

export default ListShop
