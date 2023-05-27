import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

import toast  from "react-hot-toast";





const firebaseConfig = {
  apiKey:process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_ID
};

 const app = firebase.initializeApp(firebaseConfig);
 const db = firebase.firestore();
const auth = firebase.auth();


export { firebase, auth,db  };
export const register =async(email,password)=>{
 try{
    const {user}=  await auth.createUserWithEmailAndPassword(auth,email,password)
 return user
 }catch(error){
    toast.error(error.message)
 }
}

export const login = async (email,password)=>{
    try{
     const {user}   =await auth.signInWithEmailAndPassword(auth,email,password)
     return user
    }catch(error){
        toast.error(error.message)
    }
}




export default app