import React from 'react'
import { connect } from 'react-redux'

const _Dogs = ({dogs}) => <div>
    <ul>
        {dogs.map(dog =><li key = {dog.id}>{dog.name} {dog.price} {dog.description}</li>)}
    </ul>
</div>

const Dogs = connect(({dogs})=> {
    return{
        dogs
    }
})(_Dogs)

export default Dogs