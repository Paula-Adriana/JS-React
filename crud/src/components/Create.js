import React, { useState } from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [checkbox, setCheckBox] = useState("");

  const postData = () => {
    axios
      .post(`https://62f3dc70b81dba4a013d8e8c.mockapi.io/api/fakeData`, {
        firstName,
        lastName,
        checkbox,
      })
      .then(() => {
        navigate("/Read");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Form className="create-form">
        <Form.Field>
          <label>First Name</label>
          <input
            placeholder="First Name"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input
            placeholder="Last Name"
            onChange={(e) => setLastName(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            label="I agree to the Terms and Conditions"
            onChange={() => setCheckBox(!checkbox)}
          />
        </Form.Field>
        <Link to={"/"}>
          <Button>Back</Button>
        </Link>
        <Button onClick={postData} type="submit" color="grey">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Create;
