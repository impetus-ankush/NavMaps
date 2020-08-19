import React, { Component } from 'react';
import { App, AuthStack } from './AppNavigation';
import { NavigationContainer } from '@react-navigation/native';

export default class BaseContainer extends Component {

    constructor(props) {
        super(props)
        this.navigationRef = undefined
        this.routeRef = undefined;
    }
    render() {
        return (
            <NavigationContainer
                ref={navigationRef => this.navigationRef = navigationRef}
            >
                
                <AuthStack />
            </NavigationContainer>


        )
    }
}
