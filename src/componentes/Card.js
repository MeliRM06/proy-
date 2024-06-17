import React from 'react';

const Cards = (props) => {
    return (
        <div className="card" style={{ width: '28rem' }}>
            <img src={props.img} className="card-img-top" alt={props.alt} />
            <div className="card-body">
                <p className="card-text">{props.text}</p>
            </div>
        </div>
    );
};

export default Cards;
