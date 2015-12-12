# id.net API testing suite

This contains a Nodejs app for testing Oauth APIs and a html file for testing session based APIs. 
All tests are manual for troubleshooting or verifying work. Automatic tests should be implemented elsewhere.

The nodejs part of the test suite is meant to replace 'idnet-example-rails-3' because it is easier to use.

### Oauth2 testing

- install Node, and Python 2.7 if on Windows
- cd to the idnet-api-testing directory
- run 'npm install'
- edit index.js with a clientid, secret, and change the site ip to your local server.
- run 'node index.js' or use the Windows bat file

## Session auth testing

- Open session-auth-tests.html in a browser.
- Copy one of the possible values into the host text field
