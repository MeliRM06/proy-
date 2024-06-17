import React from 'react';

const Boton = (props) => {
    return (
        <div className="card mb-3" style={{ maxWidth: '540px' }}>
        <div className="row g-0">
            <div className="col-md-4">
            <img src={props.ilust} class="img-fluid rounded-start" alt="..."/>
            </div>
            <div className="col-md-8">
            <div className="card-body">
                <p className="card-text">{props.text}</p>
                
            </div>
            </div>
        </div>
        </div>
    );
};

export default Boton;