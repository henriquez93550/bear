var app_fireBase = {};

// Code is wrapped within a function to make it private
(function(){
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyA2exAsVRIa8t9HFrFVm_LVKztvu9MUmkM",
    authDomain: "bear-b2626.firebaseapp.com",
    databaseURL: "https://bear-b2626.firebaseio.com",
    projectId: "bear-b2626",
    storageBucket: "bear-b2626.appspot.com",
    messagingSenderId: "99164554336"
  };
  firebase.initializeApp(config);

  app_fireBase = firebase;

})()