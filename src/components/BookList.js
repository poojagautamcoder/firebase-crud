import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import BookDataService from "../services/book.services";
import {
  collection,
  query,
  onSnapshot,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../firebase-config";
const BooksList = ({}) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "books"));
    const unsub = onSnapshot(q, (querySnapshot) => {
      setBooks(
        querySnapshot.docs.map((doc) => ({ id: doc.id, book: doc.data() }))
      );
    });
  }, []);
  console.log(books, "hamara data");
  const deleteHandler = (id) => {
    deleteDoc(doc(db, "books", id));
  };
  // useEffect(() => {
  //   console.log("The id here is : ", id);
  //   if (id !== undefined && id !== "") {
  //     editHandler();
  //   }
  // }, [id]);

  // const editHandler = async () => {
  //   try {
  //     const docSnap = await BookDataService.getBook(id);
  //     console.log("the record is :", docSnap.data());
  //     setTitle(docSnap.data().title);
  //     setAuthor(docSnap.data().author);
  //     setStatus(docSnap.data().status);
  //   } catch (err) {}
  // };

  return (
    <>
      <pre>{JSON.stringify(books, undefined, 2)}</pre>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Book Title</th>
            <th>Book Author</th>
          </tr>
        </thead>
        <tbody>
          {books.map((doc, index) => {
            return (
              <tr key={doc.id}>
                <td>{index + 1}</td>
                <td>{doc.book.title}</td>
                <td>{doc.book.author}</td>
                <td>
                  <Button
                    variant="secondary"
                    className="edit"
                    // onClick={(e) => editHandler(doc.id)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    className="delete"
                    onClick={(e) => deleteHandler(doc.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default BooksList;
