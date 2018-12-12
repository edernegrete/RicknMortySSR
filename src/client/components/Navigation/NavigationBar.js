import React from 'react';
import { Link } from 'react-router-dom';
import { withNamespaces } from 'react-i18next';
import PropTypes from 'prop-types';
import './NavigationBar.css';

const NavigationBar = (props) => {
    const { t } = props;
    function renderNavList() {
        return props.navigation.map((item, index) => {
            return (
                <li key={index}>
                    <Link to={item.route}>
                        <h2>{item.text}</h2>
                    </Link>
                </li>
            )
        })
    }
    return( 
        <div className="Navigation">
            <Link to="/">
                <div className="Navigation-logo">
                    <img src={props.logo}></img>
                </div>
                <h1 className="Navigation-title">{props.title}</h1>
            </Link>
            <ul className="Navigation-list">
                {renderNavList()}
            </ul>
        </div>
    )
}
NavigationBar.propTypes = {
    navigation: PropTypes.array,
    logo: PropTypes.string,
    title: PropTypes.string
};
export default withNamespaces('translations')(NavigationBar);