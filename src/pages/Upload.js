import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Upload = () => {
  const [username, setUsername] = useState("");
  const [clgid, setClgid] = useState("");
  const [branch, setBranch] = useState("");
  const [gh, setGh] = useState("");
  const [li, setLi] = useState("");
  const [ig, setIg] = useState("");
  const [mail, setMail] = useState("");
  const [imgf, setImgf] = useState("");
  const [imgb, setImgb] = useState("");
  const history = useNavigate();

  const setData1 = (e) => {
    const { value } = e.target;
    setUsername(value);
  };

  const setData2 = (e) => {
    const { value } = e.target;
    setClgid(value);
  };

  const setData3 = (e) => {
    const { value } = e.target;
    setBranch(value);
  };

  const setData4 = (e) => {
    const { value } = e.target;
    setGh(value);
  };

  const setData5 = (e) => {
    const { value } = e.target;
    setLi(value);
  };

  const setData6 = (e) => {
    const { value } = e.target;
    setIg(value);
  };

  const setData7 = (e) => {
    const { value } = e.target;
    setMail(value);
  };

  const setimg1 = (e) => {
    setImgf(e.target.files[0]);
  };

  const setimg2 = (e) => {
    setImgb(e.target.files[0]);
  };

  const addStudentData = async (e) => {
    e.preventDefault();
    var formData = new FormData();
    formData.append("photo1", imgf);
    formData.append("photo2", imgb);
    formData.append("username", username);
    formData.append("clgid", clgid);
    formData.append("branch", branch);
    formData.append("ig", ig);
    formData.append("li", li);
    formData.append("gh", gh);
    formData.append("mail", mail);

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    try {
      // console.log("Before making POST request");
      const res = await axios.post(
        "https://mlsa-iiit-server.onrender.com/register",
        formData,
        config
      );
      // console.log("After making POST request");

      if (res.data.status === 401 || !res.data) {
        console.log("Error!!");
      } else {
        history("/chapter");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <nav class="navbar sticky-top navbar-expand-lg navbar-dark transparent-navbar">
        <div class="container-fluid">
          <a class="navbar-brand " href="#">
            WELCOME TO UPLOAD PAGE
          </a>
        </div>
      </nav>
      <div className="container my-5">
        <br />
        <br />
        <h1>Upload Products:</h1>

        <Form className="mt-3">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Student Name</Form.Label>
            <Form.Control
              type="text"
              name="username"
              onChange={setData1}
              placeholder="Enter your name"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>College Id</Form.Label>
            <Form.Control
              type="text"
              name="clgid"
              onChange={setData2}
              placeholder="Enter your college id"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Branch</Form.Label>
            <Form.Control
              type="text"
              name="branch"
              onChange={setData3}
              placeholder="Enter your college branch"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Github Link</Form.Label>
            <Form.Control
              type="url"
              name="gh"
              onChange={setData4}
              placeholder="Enter your github"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Linkedin Link</Form.Label>
            <Form.Control
              type="url"
              name="li"
              onChange={setData5}
              placeholder="Enter your linkedin"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Instagram Link</Form.Label>
            <Form.Control
              type="url"
              name="ig"
              onChange={setData6}
              placeholder="Enter your instagram"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Mail ID</Form.Label>
            <Form.Control
              type="email"
              name="mail"
              onChange={setData7}
              placeholder="Enter your mail id"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Upload your image</Form.Label>
            <Form.Control
              type="file"
              name="photo1"
              onChange={setimg1}
              placeholder="Upload only .jpeg or .png files"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Upload your mlsa badge image</Form.Label>
            <Form.Control
              type="file"
              name="photo2"
              onChange={setimg2}
              placeholder="Upload only .jpeg or .png files"
            />
          </Form.Group>
          <Button
            className="mb-5"
            variant="success"
            type="submit"
            onClick={addStudentData}
          >
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
};

export default Upload;
