import React, { useState, useEffect } from "react";
import { Form, Alert, InputGroup, Button, ButtonGroup, Table } from "react-bootstrap";
import BookDataService from "../services/book.services";
import { collection, addDoc } from "firebase/firestore";
import * as firebase from "../firebase-config";




const AddBook = ({}) => {
  const [data, setData] = useState({
    title: "",
    author: "",
    status: "",
    flag: true,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Hello");
    try {
      const docRef = await addDoc(collection(firebase.db, "books"), {
        title: data.title,
        author: data.author,
        status: "",
        flag: true,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const HandleOnchange = (key, value) => {
    setData({
      ...data,
      [key]: value,
    });

  };
  console.log(data, "data")

  return (
    <>
      <div className="p-4 box">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBookTitle">
            <InputGroup>
              <InputGroup.Text id="formBookTitle">B</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Book Title"
                value={data.title}
                onChange={(e) => HandleOnchange("title", e.target.value)}
              />
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBookAuthor">
            <InputGroup>
              <InputGroup.Text id="formBookAuthor">A</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Book Author"
                value={data.author}
                onChange={(e) => HandleOnchange("author", e.target.value)}
              />
            </InputGroup>
          </Form.Group>
          <ButtonGroup aria-label="Basic example" className="mb-3">
            <Button
              disabled={data.flag}
              variant="success"
              // onClick={(e) => {
              //   setStatus("Available");
              //   setFlag(true);
              // }}
            >
              Available
            </Button>
            <Button
              variant="danger"
              // disabled={!flag}
              // onClick={(e) => {
              //   setStatus("Not Available");
              //   setFlag(false);
              // }}
            >
              Not Available
            </Button>
          </ButtonGroup>
          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit">
              Add/ Update
            </Button>
          </div>
        </Form>



        
      </div>



   
    
  </>
  );
};

export default AddBook;
