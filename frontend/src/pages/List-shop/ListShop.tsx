import React from 'react'
import { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import List from '../../components/listShop/List'
import { loadBalloons } from '../../redux/actions/actionCreators'
import { rootState } from '../../redux/reducers'

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
        <section className='shop-list-container'>
            {balloons.map((balloon: any) => (
                <List balloon={balloon} key={balloon.id} />
            ))}
        </section>
    )
}

export default ListShop
