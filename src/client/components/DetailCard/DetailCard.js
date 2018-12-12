import React from 'react';
import PropTypes from 'prop-types';
import './DetailCard.css'
const DetailCard = (props) => {
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

DetailCard.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string
};

export default DetailCard;