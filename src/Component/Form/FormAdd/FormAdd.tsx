import React, { useEffect, useState } from "react";
import Styles from "./FormAdd.module.css";
import { v4 as uuid } from "uuid";
type Props = {};
interface IUSER {
  name: string;
  age: number;
  avatar: string | undefined;
  description: string;
  email: string;
}
const FormAdd = (props: Props) => {
  const [infoUser, setInfoUser] = useState<IUSER>();
  const [avatarUser, setAvatarUser] = useState("");
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [userPosition, setUserPosition] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const handleAddMoreUser = () => {
    setInfoUser(() => {
      return {
        name: userName,
        age: parseInt(userAge),
        avatar: avatarUser,
        description: userPosition,
        email: userEmail,
      };
    });
  };
  useEffect(() => {
    {
      infoUser != undefined &&
        fetch("https://63e0e52365b57fe6064be4bd.mockapi.io/users", {
          method: "POST", // or 'PUT'
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(infoUser),
        })
          .then((response) => response.json())
          .then((data) => {
            alert("Add more success !!");
          })
          .catch((error) => {
            console.error("Error:", error);
          });
    }
  }, [infoUser]);
  return (
    <div style={{ marginTop: 56 }}>
      <section
        className={`bg-image ${Styles.vh__120}`}
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1597773150796-e5c14ebecbf5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YWJzdHJhY3QlMjBibHVlJTIwYmFja2dyb3VuZHxlbnwwfHwwfHw%3D&w=1000&q=80')",
        }}
      >
        <div className="mask d-flex align-items-center h-100 gradient-custom-3">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div className="card" style={{ borderRadius: 15 }}>
                  <div className="card-body p-5">
                    <h2 className="text-uppercase text-center mb-5">
                      Create an account
                    </h2>
                    <div className="form-outline mb-4">
                      <input
                        type="text"
                        id="form3Example1cg"
                        className="form-control form-control-lg"
                        placeholder="Your Name"
                        onChange={(e) => {
                          setUserName(e.target.value);
                          console.log(e.target.value);
                        }}
                      />
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        type="text"
                        id="form3Example3cg"
                        className="form-control form-control-lg"
                        placeholder="Your Age"
                        onChange={(e) => {
                          setUserAge(e.target.value);
                          console.log(e.target.value);
                        }}
                      />
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        type="text"
                        id="form3Example4cg"
                        className="form-control form-control-lg"
                        placeholder="Your Avatar"
                        onChange={(e) => {
                          setAvatarUser(e.target.value);
                          console.log(e.target.value);
                        }}
                      />
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        type="text"
                        id="form3Example4cdg"
                        className="form-control form-control-lg"
                        placeholder="Your Position"
                        onChange={(e) => {
                          setUserPosition(e.target.value);
                          console.log(e.target.value);
                        }}
                      />
                    </div>
                    <div className="form-outline mb-4">
                      <input
                        type="text"
                        id="form3Example4cdg"
                        className="form-control form-control-lg"
                        placeholder="Your Email"
                        onChange={(e) => {
                          setUserEmail(e.target.value);
                          console.log(e.target.value);
                        }}
                      />
                    </div>

                    <div className="form-check d-flex justify-content-center mb-5">
                      <input
                        className="form-check-input me-2"
                        type="checkbox"
                        value=""
                        id="form2Example3cg"
                      />
                      <label className="form-check-label">
                        I agree all statements in{" "}
                        <a href="#!" className="text-body">
                          <u>Terms of service</u>
                        </a>
                      </label>
                    </div>

                    <div className="d-flex justify-content-center">
                      <button
                        type="button"
                        className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                        onClick={handleAddMoreUser}
                      >
                        Add new
                      </button>
                    </div>

                    <p className="text-center text-muted mt-5 mb-0">
                      Have already an account?{" "}
                      <a href="#!" className="fw-bold text-body">
                        <u>Login here</u>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FormAdd;
