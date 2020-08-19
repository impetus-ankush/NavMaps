import React, { Component } from 'react';
import LottieView from 'lottie-react-native';

const TAG_SPLASH_CONTAINER = 'SplashContainer';

export default class SplashContainer extends Component {
    constructor (props) {
        super (props);
    }

    render() {
        return(
            <View>
                 <LottieView source={require('../assets/hexagon_preloader.json')} autoPlay loop />;
            </View>
        )
    }

    navigateToAuth() {
        this.navigator &&
        this.navigator.dispatch(
          NavigationActions.navigate({ routeName: NavigationConstants.SURVEY, params: { shouldResumeSurvey: !startOverSurvey } })
        );
  
    }
}