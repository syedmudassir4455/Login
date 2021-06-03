import React,{useState} from "react";
import "./Login.css"

function LoginForm({Login,error}) {

    const [details,setDetails] = useState({name :"", email : "",passowrd : ""});

    const submitHandler = e =>{
        e.preventDefault();
        Login(details)
    }

  return (
    <div>
      <form onSubmit = {submitHandler}>
        <div className="form-inner">
          <h2>Signin</h2>
          {(error = "")? (<div className = "error">{error}</div>) : ""}
          <div className="form-group">
            <label htmlFor="name">Name :</label>
            <input type="text" name="name" id="name" onChange ={e =>setDetails({...details, name :e.target.value})} value ={details.name}/>
          </div>
          <div className="form-group">
            <label htmlFor = "email">Email :</label>
            <input type = "email" name = "email" id = "email" onChange ={e =>setDetails({...details, email :e.target.value})} value ={details.email} />
          </div>
          <div className="form-group">
            <label htmlFor = "password">passowrd :</label>
            <input type = "password" name = "password" id = "password" onChange ={e =>setDetails({...details,passowrd:e.target.value})} value ={details.passowrd} />
          </div>

          <input type = "submit" value = "Login"/>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
