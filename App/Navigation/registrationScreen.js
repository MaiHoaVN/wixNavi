
import { Navigation } from 'react-native-navigation';
import { NavigationAction } from '@Navigation'

import {
    HomeScreen,
    ExploreScreen,
    DetailItemScreen,
    SplashScreen,
    LoginScreen,
    RegisterScreen,
    ConfirmOTP
} from '@Container'

import { Header } from '@Components'

NavigationAction.registerScreen(`Splash`, SplashScreen);
NavigationAction.registerScreen(`Home`, HomeScreen);
NavigationAction.registerScreen(`Explore`, ExploreScreen);
NavigationAction.registerScreen(`DetailItem`, DetailItemScreen);
NavigationAction.registerScreen(`Login`, LoginScreen);
NavigationAction.registerScreen(`Register`, RegisterScreen);
NavigationAction.registerScreen(`ConfirmOTP`, ConfirmOTP);



Navigation.registerComponent('Header', () => Header);