/**
 * @format
 */
import { Navigation } from 'react-native-navigation';
import { StartAppNavigation } from './App/Navigation/startAppNavigation'
import { ApplicationNavigation } from './App/Navigation/applicationNavigation'
import './App/Navigation/registrationScreen'
console.disableYellowBox = true

Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
        root: {
            component: {
                id: 'splash',
                name: 'Splash'
            }
        }
    });
});
