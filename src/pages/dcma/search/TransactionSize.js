import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import './search.scss'

const TransactionSize = () => {
  const [usersgeo, setGeoUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState([]);

  useEffect(() => {
    setGeoUsers(userGeoData);
  }, []);
  // here you can see checked data
  // all checked data are there in selectedUser
  console.log(selectedUser);

  const userGeoData = [
    { id: 1, name: "Up to 	$1,000 USD", },
    { id: 2, name: "$10,000	or more", },
    { id: 3, name: "$1,000,000	or more", },
    { id: 4, name: "$5,000,000	or more", },
    { id: 5, name: "$10,000,000	or more", },
    { id: 6, name: "$50,000,000	or more", },
    { id: 7, name: "$100,000,000 or more", },
    { id: 8, name: "$1,000,000,000	or more", },
  ];

  const handleChange = (e, data) => {
    const { name, checked } = e.target;
    if (checked) {
      // if cheked and selectall checkbox add all fileds to selectedList
      if (name === "allSelect") {
        setSelectedUser(usersgeo);
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
              checked={selectedUser?.length === usersgeo?.length}
              onChange={(e) => handleChange(e, usersgeo)}
            /> Select All
          </th>
          
        </tr>
      </thead>
      <tbody>
        {usersgeo &&
          usersgeo.map((data, index) => (
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

export default TransactionSize;