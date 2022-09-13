import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Update = () => {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [checkbox, setCheckBox] = useState("");
  const [id, setID] = useState(null);

  const updateAPIData = () => {
    console.log('updateAPI data - put para API')
    axios
      .put(`https://62f3dc70b81dba4a013d8e8c.mockapi.io/api/fakeData/${id}`, {
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

    useEffect(() => {
    console.log('cheguei no use effect update - pegando os dados da localStorage')
    setID(localStorage.getItem("ID"));
    setFirstName(localStorage.getItem("First Name"));
    setLastName(localStorage.getItem("Last Name"));
    setCheckBox(localStorage.getItem("Checkbox Value"));
    console.log('use effect')
  }, []);  

  return (
    <Form className="create-form">
      <Form.Field>
        <label>First Name</label>
        <input
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </Form.Field>
      <Form.Field>
        <label>Last Name</label>
        <input
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </Form.Field>
      <Form.Field>
        <Checkbox
          label="I agree to the Terms and Conditions"
          checked={checkbox}
          onChange={() => setCheckBox(!checkbox)}
        />
      </Form.Field>
      <Link to={"/Read"}>
        <Button>Back</Button>
      </Link>
      <Button onClick={updateAPIData} type="submit" color="green">
        Submit
      </Button>
    </Form>
  );
};

export default Update;
