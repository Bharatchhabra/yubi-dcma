import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import './search.scss'

const TransactionDate = () => {
  const [usersgeo, setGeoUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState([]);

  useEffect(() => {
    setGeoUsers(userGeoData);
  }, []);
  // here you can see checked data
  // all checked data are there in selectedUser
  console.log(selectedUser);

  const userGeoData = [
    { id: 1, name: "1 Day or less", },
    { id: 2, name: "1 Week of less", },
    { id: 3, name: "6 Months or less", },
    { id: 4, name: "1 Year of less", },
    { id: 5, name: "3 Years of less", },
    { id: 6, name: "5 Years of less", },
    { id: 7, name: "7 Years or less", },
    { id: 8, name: "1 Month or less", },
    { id: 9, name: "3 Months or less", },
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

export default TransactionDate;