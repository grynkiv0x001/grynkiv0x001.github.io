import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBJeXPO-26nbA0MHtMdp4tNY6w6uEHEcks',
  authDomain: 'grynkiv0x001-3f32d.firebaseapp.com',
  projectId: 'grynkiv0x001-3f32d',
  storageBucket: 'grynkiv0x001-3f32d.appspot.com',
  messagingSenderId: '60346772115',
  appId: '1:60346772115:web:fab5f89c61c1fb98d53b66',
  measurementId: 'G-56D3DW811W'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export { auth, analytics };
