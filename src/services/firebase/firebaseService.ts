import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

const firebaseConfig = {
	apiKey: 'AIzaSyDc4B0azw8shb4OgMYKyDwC6uQMADQGoik',
	authDomain: 'ecommerce-68035.firebaseapp.com',
	databaseURL: 'https://ecommerce-68035-default-rtdb.europe-west1.firebasedatabase.app',
	projectId: 'ecommerce-68035',
	storageBucket: 'ecommerce-68035.appspot.com',
	messagingSenderId: '275984725347',
	appId: '1:275984725347:web:329028173c775464460f56'
}

if (!firebase.apps.length) {
	firebase.initializeApp(firebaseConfig)
} else {
	firebase.app()
}

export const database = firebase.database()
export const auth = firebase.auth()
export const PERSISTENCE_LOCAL = firebase.auth.Auth.Persistence.LOCAL
