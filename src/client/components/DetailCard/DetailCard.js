import React from 'react';
import './DetailCard.css'
export default (props) => {
    return (
        <div className="DetailCard">
            <div className="Card-image">
                <img src={props.image}></img>
            </div>
            <div className="Card-header">
                <p className="Card-title">{props.title}</p>
                <p className="Card-subtitle">{props.subtitle}</p>
            </div>
        </div>
    )
};
