import React from 'react';
import { Link } from 'react-router-dom';
import { withNamespaces } from 'react-i18next';
import logo from '../../shared/icons/logo.svg'
import './NavigationBar.css';

function NavigationBar(props) {
    const { t } = props;
    return( 
        <div className="Navigation">
            <Link to="/">
                <div className="Navigation-logo">
                    <img src={logo}></img>
                </div>
                <h1 className="Navigation-title">{t('general.title')}</h1>
            </Link>
            <ul className="Navigation-list">
                <li>
                    <Link to="/characters">
                        <h2>{t('general.characters')}</h2>
                    </Link>
                </li>
                <li>
                    <Link to="/episodes">
                        <h2>{t('general.episodes')}</h2>
                    </Link>
                </li>
                <li>
                    <Link to="/planets">
                        <h2>{t('general.planets')}</h2>
                    </Link>
                </li>
            </ul>
        </div>
    )
}
export default withNamespaces('translations')(NavigationBar);