import React from 'react';
import { renderRoutes } from 'react-router-config';
import NavigationBar from './components/Navigation/NavigationBar';
import { withNamespaces } from 'react-i18next';
import logo from './shared/icons/logo.svg'
import './shared/App.css';

const App = ({t, route}) => {
    const navigation = [
        {
            route: '/characters',
            text: t('general.characters')
        },
        {
            route: '/episodes',
            text: t('general.episodes')
        },
        {
            route: '/planets',
            text: t('general.planets')
        }
    ]
    return <div className="root">
        <NavigationBar 
            navigation={navigation}
            title={t('general.title')}
            logo={logo}></NavigationBar>
        <div id="page-content">
            {renderRoutes(route.routes)}
        </div>
    </div>
};

export default {
    component: withNamespaces('translations')(App)
}