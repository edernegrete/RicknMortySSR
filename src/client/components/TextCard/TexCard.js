import React from 'react';
import './TextCard.css';

export default (props) => {
    return (
        <div key={props.id}  className="SimpleCard">
            <div>
                <h3 className="SimpleCard-title">{props.name}</h3>
            </div>
            <div>
                {
                    props.list.map((item, index) => {
                       return <p key={index}>
                            {item.key}: {item.value}
                        </p>
                    })
                } 
            </div>
        </div>
    )
};
