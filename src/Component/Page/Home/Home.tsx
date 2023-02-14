import React, { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import FormEdit from "../../Form/FormEdit/FormEdit";
import Detail from "../Detail/Detail";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Styles from "./Home.module.css";
type Props = {
  setIsLogin: Function;
};
interface IUSER {
  name: string;
  age: number;
  avatar: string;
  description: string;
  id: number;
  email: string;
}
const Home = (props: Props) => {
  const { setIsLogin } = props;
  const [listUsers, setListUsers] = useState<Array<IUSER>>([]);
  const [statusDelete, setStatusDelete] = useState(false);
  useEffect(() => {
    renderListUsers();
  }, [statusDelete && true]);
  const renderListUsers = () => {
    fetch("https://63e0e52365b57fe6064be4bd.mockapi.io/users", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => setListUsers(data));
  };
  const handleDeleteUser = (id: number) => {
    fetch(`https://63e0e52365b57fe6064be4bd.mockapi.io/users/${id}`, {
      method: "DELETE", // Method itself
      headers: {
        "Content-type": "application/json; charset=UTF-8", // Indicates the content
      },
    })
      .then((response) => response.json())
      .then((data) => setStatusDelete(true)) // Manipulate the data retrieved back, if we want to do something with it
      .catch((err) => console.log(err));
  };
  return (
    <div style={{ marginTop: 57 }}>
      <table className="table align-middle mb-0 bg-white">
        <thead className="bg-light">
          <tr>
            <th>Name</th>
            <th>Title</th>
            <th>Position</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {listUsers.map((user, index) => {
            return (
              <tr key={index}>
                <td>
                  <div className="d-flex align-items-center">
                    <img
                      src={user.avatar}
                      alt=""
                      style={{ width: 45, height: 45 }}
                      className="rounded-circle"
                    />
                    <div className="ms-3">
                      <p
                        className="fw-bold mb-1"
                        style={{ textAlign: "start" }}
                      >
                        {user.name}
                      </p>
                      <p
                        className="text-muted mb-0"
                        style={{ textAlign: "start" }}
                      >
                        {user.age}
                      </p>
                    </div>
                  </div>
                </td>
                <td>
                  <p className="fw-normal mb-1">{user.email}</p>
                  <p className="text-muted mb-0"></p>
                </td>
                <td>{user.description}</td>
                <td>
                  <Link
                    className="btn btn-link btn-sm btn-rounded"
                    to={`/detail/${user.id}`}
                  >
                    Detail
                  </Link>
                  <button
                    onClick={() => {
                      setStatusDelete(false);
                      handleDeleteUser(user.id);
                    }}
                    type="button"
                    className="btn btn-link btn-sm btn-rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
