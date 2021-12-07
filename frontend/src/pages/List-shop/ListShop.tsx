import React from 'react'
import { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import List from '../../components/listShop/List'
import SecondaryTitle from '../../components/second-title/SecondaryTitle'
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

console.log(balloons)
    return (
        <div>
            <SecondaryTitle />
            <section className='shop-list-container'>
            {balloons.map((balloon: any) => (
                <List balloon={balloon} key={balloon._id} />
            ))}
        </section>
        </div>

    )
}

export default ListShop
