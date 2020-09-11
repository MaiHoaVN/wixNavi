import React from 'react'
import { Navigation } from 'react-native-navigation'
import { Provider } from 'react-redux'
import store from '../Redux/store'

function WrappedComponent(Component) {
    return function inject(props) {
        const EnhancedComponent = () => (
            <Provider store={store}>
                <Component {...props} />
            </Provider>
        )
        return <EnhancedComponent />
    }
}
export default function registerScreen(name, component) {
    Navigation.registerComponent(name, () => WrappedComponent(component))
}