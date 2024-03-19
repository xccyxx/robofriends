import React from 'react';

const Card =({ name, email }) => {
    return (
        <div className='tc dib bg-washed-green br3 pa3 pa4-ns ma3 ba b--black-10 shadow-3 grow'>
            <img alt='robot' src={`https://robohash.org/${name}?200x200`}></img>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;