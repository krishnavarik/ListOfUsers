import React from 'react'
import './MultipleUser.css'
function MultipleUser(props) {
    return (
        <div className="users">
            <h1 className='name'>{props.name}</h1>
            <h1 className='age'> {props.age}</h1>
        </div>
    )
}

export default MultipleUser
