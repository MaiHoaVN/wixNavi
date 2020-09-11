const option = {
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
const AuthenticationNavigation = {
    stack: {
        children: [
            {
                component: {
                    name: 'Login',
                    options: {
                        topBar:
                        {
                            visible: false
                        }

                    }
                },
            },
            {
                id: 'register',
                component: {
                    name: 'Register',
                    options: option
                }
            },
            {
                id: 'confirmOTP',
                component: {
                    name: 'ConfirmOTP',
                    options: option
                }
            },
        ]
    }
}
export default AuthenticationNavigation