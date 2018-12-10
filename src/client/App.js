import React from 'react';
import { renderRoutes } from 'react-router-config';
import NavigationBar from './components/Navigation/NavigationBar';
import './shared/App.css';

const App = ({route}) => {
    return <div className="root">
        <NavigationBar></NavigationBar>
        <div id="page-content">
            {renderRoutes(route.routes)}
        </div>
    </div>
};

export default {
    component: App
}