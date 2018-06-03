export const environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyBDvwBNlTFUM-OYkZFxwX-vMwXPOhx91YU',
        authDomain: 'saveaz-5010f.firebaseapp.com',
        databaseURL: 'https://saveaz-5010f.firebaseio.com',
        projectId: 'saveaz-5010f',
        storageBucket: 'saveaz-5010f.appspot.com',
        messagingSenderId: '478674102567'
    },
    auth: {
        clientId: 'vm9VqvH2eWhvJNCFE0gMlqegdJVk0vTY',
        clientDomain: 'saveaz.auth0.com', // e.g., you.auth0.com
        audience: 'https://saveaz.auth0.com/api/v2/', // e.g., http://localhost:1337/
        redirect: 'https://saveaz-5010f.firebaseapp.com/items-liked',
        scope: 'openid profile email'
    },
    apiRoot: 'https://saveaz.auth0.com/api/v2/'
};
