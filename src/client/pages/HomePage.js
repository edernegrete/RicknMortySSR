import React from 'react';
import { withNamespaces } from 'react-i18next';

import homeImage from '../shared/images/rm.jpg'
const Home = (props) => {
    const { t } = props
    return <div className="Home">
        <h1>{t('home.title')}</h1>
        <h2>{t('home.subtitle')}</h2>
        <p>{t('home.action')}</p>
        <img src={homeImage}></img>
    </div>;
};

export default {
    component: withNamespaces('translations')(Home)
}
