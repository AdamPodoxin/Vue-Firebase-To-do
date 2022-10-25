import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyDzCINltM3YSou4QI5eHn-6rXZaK49ZDyk",
	authDomain: "vue-firebase-tutorial-ccf54.firebaseapp.com",
	projectId: "vue-firebase-tutorial-ccf54",
	storageBucket: "vue-firebase-tutorial-ccf54.appspot.com",
	messagingSenderId: "714213036093",
	appId: "1:714213036093:web:c718b6272749418056da54",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
