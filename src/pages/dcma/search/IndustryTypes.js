import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import './search.scss'

const IndustryTypes = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState([]);

  useEffect(() => {
    setUsers(userData);
  }, []);
  // here you can see checked data
  // all checked data are there in selectedUser
  console.log(selectedUser);

  const userData = [
    { id: 1,name: "Depository Financial Institution", },
    { id: 2,name: "Purpose Bank", },
    { id: 3,name: "Line Item Two", },
    { id: 4,name: "Mortgage Bank", },
    { id: 5,name: "Savings Bank", },
    { id: 6,name: "Investment Bank", },
    { id: 7,name: "Savings & Loan Association", },
    { id: 8,name: "Development Bank", },
    { id: 9,name: "Credit Union", },
    { id: 10,name: "Universal Bank", },
    { id: 11,name: "Industrial Bank", },
    { id: 12,name: "Agricultural Bank", },
  ];

  const handleChange = (e, data) => {
    const { name, checked } = e.target;
    if (checked) {
      // if cheked and selectall checkbox add all fileds to selectedList
      if (name === "allSelect") {
        setSelectedUser(users);
      } else {
        // if cheked and specific checkbox add specific field to selectedList
        setSelectedUser([...selectedUser, data]);
      }
    } else {
      // if uncheked and selectall checkbox add remove all fileds from selectedList
      if (name === "allSelect") {
        setSelectedUser([]);
      } else {
        // if uncheked and specific checkbox remove specific field from selectedList
        let tempuser = selectedUser.filter((item) => item.id !== data.id);
        setSelectedUser(tempuser);
      }
    }
  };

  return (
    <Table>
      <thead>
        <tr>
          <th className="form-checkbox-input">
            <input
              type="checkbox"
              className="form-check-input larger"
              name="allSelect"
              // allSelect selected when both length equal
              // slecteduser === allUser
              checked={selectedUser?.length === users?.length}
              onChange={(e) => handleChange(e, users)}
            /> Select All
          </th>
          
        </tr>
      </thead>
      <tbody>
        {users &&
          users.map((data, index) => (
            <tr id={index} key={index}>
              <td className="form-checkbox-input select_options">
                <input
                  type="checkbox"
                  className="form-check-input larger"
                  name={data.name}
                  // checked when selectedUser contains checked object/filed/row
                  checked={selectedUser.some((item) => item?.id === data.id)}
                  onChange={(e) => handleChange(e, data)}
                />
                <span>{data.name}</span>
              </td>
             
            </tr>
          ))}
      </tbody>
    </Table>
  );
};

export default IndustryTypes;