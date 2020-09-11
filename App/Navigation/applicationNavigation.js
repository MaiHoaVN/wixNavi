/**
 @tnh
 RN0.63
 */
import { LocalImage } from '@Media'
import { ColorApp } from '@Helper'

const options = {
    topBar: {
        noBorder: true,
        title:
        {
            id: 'header',
            component: {
                name: 'Header',
                alignment: 'center'
            },
        },
    },
};
const ApplicationNavigation = {
    bottomTabs: {
        id: 'tabs',
        children: [
            {
                stack: {
                    id: 'stack_home',
                    children: [
                        {
                            component: {
                                name: 'Home',
                                options: {
                                    ...options,
                                    bottomTab: {
                                        fontSize: 12,
                                        textColor: '#c3c3c3',
                                        iconColor: '#c3c3c3',
                                        selectedIconColor: ColorApp.PRIMARY,
                                        selectedTextColor: ColorApp.PRIMARY,
                                        icon: LocalImage.ic_home
                                    }
                                }
                            }
                        }
                    ]
                }
            },
            {
                stack: {
                    id: 'stack_user',
                    children: [
                        {
                            component: {
                                name: 'Home',
                                options: {
                                    bottomTab: {
                                        fontSize: 12,
                                        textColor: '#c3c3c3',
                                        iconColor: '#c3c3c3',
                                        selectedIconColor: ColorApp.PRIMARY,
                                        selectedTextColor: ColorApp.PRIMARY,
                                        icon: LocalImage.ic_grid
                                    }
                                }
                            }
                        }
                    ]
                }
            }
        ]
    }
}


export default ApplicationNavigation