import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import './search.scss'

const GeoSelect = () => {
  const [usersgeo, setGeoUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState([]);

  useEffect(() => {
    setGeoUsers(userGeoData);
  }, []);
  // here you can see checked data
  // all checked data are there in selectedUser
  console.log(selectedUser);

  const userGeoData = [
    { id: 1, name: "North Carolina", },
    { id: 2, name: "South Carolina", },
    { id: 3, name: "California", },
    { id: 4, name: "New York", },
    { id: 5, name: "Florida", },
    { id: 6, name: "Georgia", },
    { id: 7, name: "Tennessee", },
    { id: 8, name: "Maine", },
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
                  sx={{
                    "& .MuiSvgIcon-root": { fontSize: 40 },
                    color: "#6A6A6A",
                    "&.Mui-checked": { color: "#07D4FA" },
                  }}
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

export default GeoSelect;