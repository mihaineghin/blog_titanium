import React from 'react'

import Cart from './Cart'
import data from '../../data/data'

let Carts = () => {
    const cartCollection = data.map((el, index) => {
        return <Cart {...el} key={index}/>
    })
    return(
        <div>
            {cartCollection}
        </div>
    )
}

export default Carts