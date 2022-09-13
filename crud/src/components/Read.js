import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "semantic-ui-react";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Read = () => {
  //armazena os dados na localStorage para o update
  const setData = (data) => {
    console.log('cheguei no setData read - guardando os dados na localStorage')
    let { id, firstName, lastName, checkbox } = data;
    localStorage.setItem("ID", id);
    localStorage.setItem("First Name", firstName);
    localStorage.setItem("Last Name", lastName);
    localStorage.setItem("Checkbox Value", checkbox);
  };

  const onDelete = (id) => {
    console.log('cheguei no delete read')
    axios
      .delete(`https://62f3dc70b81dba4a013d8e8c.mockapi.io/api/fakeData/${id}`)
      .then(() => {
        getData();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  //carregar os dados atualizados (usado no delete)
  const getData = () => {
    console.log('cheguei no getData usado no delete')
    axios
      .get(`https://62f3dc70b81dba4a013d8e8c.mockapi.io/api/fakeData`)
      .then((getData) => {
        setAPIData(getData.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //Para passar os dados da API para listagem geral
  const [APIData, setAPIData] = useState([]);

  //permite executar efeitos colaterais, por exemplo, obtenção de dados da api
  useEffect(() => {
    console.log('cheguei no use effect read')
    axios
      .get(`https://62f3dc70b81dba4a013d8e8c.mockapi.io/api/fakeData`)
      .then((response) => {
        setAPIData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <div>
        <Link to={"/Create"}>
          <Button>Create another register</Button>
        </Link>
      </div>
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>First Name</Table.HeaderCell>
            <Table.HeaderCell>Last Name</Table.HeaderCell>
            <Table.HeaderCell>Checkbox Value</Table.HeaderCell>
            <Table.HeaderCell>Update</Table.HeaderCell>
            <Table.HeaderCell>Delete</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {APIData.map((data) => {
            return (
              <Table.Row key={data.id}>
                <Table.Cell>{data.firstName}</Table.Cell>
                <Table.Cell>{data.lastName}</Table.Cell>
                <Table.Cell>
                  {data.checkbox ? "Checked" : "Unchecked"}
                </Table.Cell>
                <Table.Cell>
                  <Link to={"/Update"}>
                    <Button onClick={() => setData(data)} basic color="green">
                      Update
                    </Button>
                  </Link>
                </Table.Cell>
                <Table.Cell>
                  <Button onClick={() => onDelete(data.id)} basic color="red">
                    Delete
                  </Button>
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
      <div>
        <Link to={"/"}>
          <Button>Back</Button>
        </Link>
      </div>
    </div>
  );
};
export default Read;
