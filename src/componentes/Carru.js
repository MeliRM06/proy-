import React from 'react';

const Car = (props) => {
    const carouselId = `carousel-${props.id}`;
    return (
        <div id={carouselId} className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={props.img0} className="d-block w-80" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={props.img1} className="d-block w-80" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={props.img2} className="d-block w-80" alt="..." />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target={`#${carouselId}`} data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target={`#${carouselId}`} data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default Car;
