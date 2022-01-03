import React, { useState } from "react";
import "./User.css";
import Card from "./Card";
import Button from "./Button";
import ErrorModal from "./ErrorModal";

function User(props) {
  const [user, setUser] = useState("");

  const [age, setAge] = useState("");

  const [clgName, setClgName] = useState('')

  const [error, setError] = useState();

  function userHandler(event) {
    setUser(event.target.value);
  }

  function ageHandler(event) {
    setAge(event.target.value);
  }

  function clgHandler(event){
    setClgName(event.target.value)
  }

  function addUserHandler(e) {
    e.preventDefault();
    if (user.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "invalid input",
        message: "please enter valid name and age (non-empty values)",
      });
      return;
    }
    if (+age < 1) {
      setError({
        title: "invalid age",
        message: "please enter a valid age (> 0).",
      });
      return;
    }
    const users = {
      name: user,
      age: age,
      clgName:clgName
    };

    props.getData(users);
    // console.log(users)
    setUser("");
    setAge("");
    setClgName('')
  }

  function returnHandler() {
    setError(null);
  }

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onClick={returnHandler}
        />
      )}

      <Card className="input">
        <form onSubmit={addUserHandler}>
          <label htmlFor="name">Username</label>
          <input type="text" id="name" value={user} onChange={userHandler} />
          <label htmlFor="age">Age(Years)</label>
          <input type="number" id="age" value={age} onChange={ageHandler} />
          <label htmlFor="collagename">collage Name</label>
          <input type="text" id="collageName" value={clgName} onChange={clgHandler} />

          <Button type="submit">add Users</Button>
        </form>
      </Card>
    </div>
  );
}

export default User;
