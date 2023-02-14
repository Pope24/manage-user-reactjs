import { info } from "console";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Styles from "./Detail.module.css";
type Props = {};
interface IUSER {
  name: string | undefined;
  age: number | undefined;
  avatar: string | undefined;
  description: string | undefined;
  id: number | undefined;
  email: string | undefined;
}
const Detail = (props: Props) => {
  const { id } = useParams();
  const [infoUser, setInfoUser] = useState<IUSER>();
  const [statusEdit, setStatusEdit] = useState(true);
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [userPosition, setUserPosition] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [user, setUser] = useState<IUSER | undefined>();
  useEffect(() => {
    renderUser();
  }, []);
  const renderUser = () => {
    fetch(`https://63e0e52365b57fe6064be4bd.mockapi.io/users/${id}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => setInfoUser(data));
  };
  const handleUpdateUSer = () => {
    const user = {
      name: userName || infoUser?.name,
      age: parseInt(userAge) || infoUser?.age,
      avatar: infoUser?.avatar,
      description: userPosition || infoUser?.description,
      email: userEmail || infoUser?.email,
      id: infoUser?.id,
    };
    setUser(user);
  };
  useEffect(() => {
    fetch(`https://63e0e52365b57fe6064be4bd.mockapi.io/users/${id}`, {
      method: "PUT", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => {
        setInfoUser(data);
      });
  }, [statusEdit && true]);
  return (
    <div
      className={`d-flex align-items-center justify-content-center`}
      style={{
        backgroundImage:
          'url("http://getwallpapers.com/wallpaper/full/a/5/d/544750.jpg")',
        height: 740 + "px",
      }}
    >
      <div
        className={`${Styles.card}`}
        style={{
          width: 25 + "rem",
          color: "#fff",
        }}
      >
        <img
          src={infoUser?.avatar}
          className="card-img-top"
          alt="..."
          style={{ width: 50 + "%" }}
        />
        <div className="card-body">
          {statusEdit ? (
            <h5 className="card-title">{infoUser?.name}</h5>
          ) : (
            <input
              type="text"
              className="card-title"
              defaultValue={infoUser?.name}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
          )}
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
        <ul className="list-group list-group-flush">
          {statusEdit ? (
            <li
              className="list-group-item"
              style={{
                color: "#fff",
                background: "transparent",
              }}
            >
              Age: {infoUser?.age}
            </li>
          ) : (
            <li>
              <input
                type="text"
                className="card-title"
                defaultValue={infoUser?.age}
                onChange={(e) => {
                  setUserAge(e.target.value);
                }}
              />
            </li>
          )}
          {statusEdit ? (
            <li
              className="list-group-item"
              style={{
                color: "#fff",
                background: "transparent",
              }}
            >
              Position: {infoUser?.description}
            </li>
          ) : (
            <li>
              <input
                type="text"
                className="card-title"
                defaultValue={infoUser?.description}
                onChange={(e) => {
                  setUserPosition(e.target.value);
                }}
              />
            </li>
          )}
          {statusEdit ? (
            <li
              className="list-group-item"
              style={{
                color: "#fff",
                background: "transparent",
              }}
            >
              Email: {infoUser?.email}
            </li>
          ) : (
            <li>
              <input
                type="text"
                className="card-title"
                defaultValue={infoUser?.email}
                onChange={(e) => {
                  setUserEmail(e.target.value);
                }}
              />
            </li>
          )}
          {statusEdit ? (
            <li
              className="list-group-item"
              style={{
                color: "#fff",
                background: "transparent",
              }}
            >
              <button
                onClick={() => {
                  setStatusEdit(!statusEdit);
                }}
                className={`btn float-right ${Styles.Edit__btn}`}
              >
                Edit
              </button>
            </li>
          ) : (
            <li
              className="list-group-item"
              style={{
                color: "#fff",
                background: "transparent",
              }}
            >
              <button
                onClick={() => {
                  handleUpdateUSer();
                  setStatusEdit(!statusEdit);
                }}
                className={`btn float-right ${Styles.Edit__btn}`}
              >
                Update
              </button>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Detail;
