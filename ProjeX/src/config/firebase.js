import app from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';

// Firebase'i başlat
if (!app.getApps().length) {
    app.initializeApp();
}

// Firebase servislerini dışa aktar
export { auth, firestore, storage };
