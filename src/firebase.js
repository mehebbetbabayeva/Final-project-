import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

import toast  from "react-hot-toast";





const firebaseConfig = {
  apiKey: "AIzaSyBN_BtRMziUC_rNa99RqAsKWq5eZczxvbE",
  authDomain: "my-final-project-commerce.firebaseapp.com",
  projectId: "my-final-project-commerce",
  storageBucket:  "my-final-project-commerce.appspot.com",
  messagingSenderId: "254179877253",
  appId: "1:254179877253:web:a3eef5b1feeef2c36fa4ec",
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