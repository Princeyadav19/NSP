import React, { useState } from 'react'

const Login = () => {
  const [data, setData] = useState({
    username: "", password: ""
  });

  const collectdata = (e) => {
    let name = e.target.name;
    let value = e.target.value
    setData({ ...data, [name]: value })
  }

  // const fetch = require('node-fetch');
  const handlelogin = async (e) => {
    e.preventDefault();
    const { username, password } = data;

    try {
      const res = await fetch('/api/login', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username, password
        })
      });
      const message = await res.json();

      if (res.status === 422 || res.status === 522 || !message) {
        console.log("error")
      } else {
        console.log("done frontend")
        console.log(message)
      }
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <div>
      <form>
        <input type='text' name="username" onChange={collectdata} />
        <input type='text' name="password" onChange={collectdata} />
        <button onClick={handlelogin}>click</button>
      </form>
    </div>
  )

}

export default Login