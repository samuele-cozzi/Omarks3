const functions = require('firebase-functions');
const admin = require('firebase-admin');
const authModule = require('./app/auth.index')

admin.initializeApp(functions.config().firebase);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

exports.addDefaultUserSettings =  functions.auth.user().onCreate(authModule.handler); 
