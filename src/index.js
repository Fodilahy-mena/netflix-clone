import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyles from './global-styles';
import { App } from './app';
import {FirebaseContext} from './context/firebase';

// import { seedDatabase } from './seed';
const config = {
    apiKey: "AIzaSyBtCecoE5uK5_ulr6LAjap0F-nfe1at5vk",
    authDomain: "netflix-onja-jerome.firebaseapp.com",
    projectId: "netflix-onja-jerome",
    storageBucket: "netflix-onja-jerome.appspot.com",
    messagingSenderId: "862413570524",
    appId: "1:862413570524:web:6193c3b7126998f6bc4f19"

}
//maybe add databaseUrl
const firebase = window.firebase.initializeApp(config);
// seedDatabase(firebase)


ReactDOM.render(
<> 
    <FirebaseContext.Provider value={{ firebase: window.firebase}}>
        <GlobalStyles/>
        <App />
    </FirebaseContext.Provider>
    
</>, document.getElementById('root'));
