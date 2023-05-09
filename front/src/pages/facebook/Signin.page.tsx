import React from 'react';
import axios from 'axios'
import FacebookLogin, { ReactFacebookLoginInfo } from 'react-facebook-login';

function FacebookLoginPage() {
    const responseFacebook = (response: ReactFacebookLoginInfo) => {
        // Handle the response after the user logs in.
        if (response.accessToken) {
            // User is logged in and authorized the app.
            // You can make API requests or redirect the user to another page.
            const fbData  = {
                token: response.accessToken
            }
            axios.post('http://localhost:8080/facebook', fbData)
                .then(response => {
                    console.log(response.data)
                })
                .catch(error => {
                    console.log(error);
                })
        } else {
            // User is logged out or did not authorize the app.
            console.log('Not logged in with Facebook.');
        }
    };

    return (
        <div>
            <FacebookLogin
                appId="6141256015959754"
                autoLoad={false}
                fields="name,email,picture"
                callback={responseFacebook}
            />
        </div>
    );
}

export default FacebookLoginPage;
