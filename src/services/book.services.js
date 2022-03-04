import { db } from "../firebase-config";

import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

// const bookCollectionRef = collection(db, "books");
class BookDataService {
//   addBooks = (newBook) => {
//     return addDoc(bookCollectionRef, newBook);
//   };

//   updateBook = (id, updatedBook) => {
//     const bookDoc = doc(db, "books", id);
//     return updateDoc(bookDoc, updatedBook);
//   };

//   deleteBook = (id) => {
//     const bookDoc = doc(db, "books", id);
//     return deleteDoc(bookDoc);
//   };

//   getAllBooks = () => {
//     return getDocs(bookCollectionRef);
//   };

//   getBook = (id) => {
//     const bookDoc = doc(db, "books", id);
//     return getDoc(bookDoc);
//   };
 }

export default new BookDataService();//   await setDoc(doc(db, "books", ""), {
    //     title: "",
    //     author: "",
    //     status: "Available",
    //     flag : true,
    //    message : {
    //      error : false,
    //      msg : "",
    //    }
    //   });
    // Add a new document in collection "cities"
    //  await setDoc(doc(db, "cities", "LA"), {
    //   name: "Los Angeles",
    //   state: "CA",
    //   country: "USA"
    // });
    //  }
    
    // const docData = {
    //   title: "",
    //   author: "",
    //   status: "Available",
    //   flag : true,
    //  message : {
    //    error : false,
    //    msg : "",
    //  }
    // };
    // await setDoc(doc(db, "data", "one"), docData);
    
    
      // const handleSubmit = async (e) => {
      //   e.preventDefault();
      //   setMessage("");
      //   if (title === "" || author === "") {
      //     setMessage({ error: true, msg: "All fields are mandatory!" });
      //     return;
      //   }
      //   const newBook = {
      //     title,
      //     author,
      //     status,
      //   };
      //   console.log(newBook);
    
      //   try {
      //     if (id !== undefined && id !== "") {
      //       await BookDataService.updateBook(id, newBook);
      //       setBookId("");
      //       setMessage({ error: false, msg: "Updated successfully!" });
      //     } else {
      //       await BookDataService.addBooks(newBook);
      //       setMessage({ error: false, msg: "New Book added successfully!" });
      //     }
      //   } catch (err) {
      //     setMessage({ error: true, msg: err.message });
      //   }
    
      //   setTitle("");
      //   setAuthor("");
      // };
    
     
    
     