import React from 'react'
import Card from '../card/card'
import './items.css'

const items = ({items}) => {

  console.log("items",items)

  return (
    

    <div className="itemsList">
       {items.map((p) => (
        <Card item={p} />
      ))}
    </div>
   
  )
}

export default items