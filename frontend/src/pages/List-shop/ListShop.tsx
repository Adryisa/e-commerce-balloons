import React from 'react'
import { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import List from '../../components/listShop/List'
import Balloon from '../../interfaces/balloonsInterface'
import { loadBalloons } from '../../redux/actions/actionCreators'
import { rootState } from '../../redux/reducers'
import './listShop.scss'

const ListShop = () => {

const balloons = useSelector((store: rootState) => {
    return store.balloons
})

const dispatch = useDispatch()

    useEffect(() => {
    dispatch(loadBalloons())
}, [dispatch])


    return (
        <section className='shop'>
       <h2 className='page-title'> Shop </h2> 
        <p className='bar'></p>
            <section className='shop-list'>
            {balloons.map((balloon: Balloon) => (
                <List balloon={balloon} key={balloon._id} />
            ))}
        </section>
        </section>

    )
}

export default ListShop
