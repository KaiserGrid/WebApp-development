function initGoogleSignIn() {
    gapi.load('auth2', function() {
        gapi.auth2.init({
            client_id: '282800103988-rhdmjdl5jks67sp6f4c4l5g4h5kgg8iq.apps.googleusercontent.com',
            scope: 'profile email'
        }).then(function(auth2) {
            attachSignin(document.getElementById('login-button'), auth2);
        });
    });
}

function attachSignin(element, auth2) {
    auth2.attachClickHandler(element, {},
        function(googleUser) {
            var profile = googleUser.getBasicProfile();
            console.log('ID: ' + profile.getId());
            console.log('Name: ' + profile.getName());
            console.log('Image URL: ' + profile.getImageUrl());
            console.log('Email: ' + profile.getEmail());
        }, function(error) {
            console.log(JSON.stringify(error, undefined, 2));
        });
}

initGoogleSignIn();
