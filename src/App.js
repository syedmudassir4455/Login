import React, {useState} from 'react';
import AdminForm from './component/AdminForm';
import LoginForm from './component/LoginForm';


function App() {

  const adminUser = {
    email:"admin@admin.com",
    passowrd : "pass123"
  }

  const [user,setUser] = useState({name:"", email:""});
  const [error,setError] = useState();


  const Login = details =>{
    console.log(details);

    if(details.email == adminUser.email && details.passowrd ==adminUser.passowrd){
      console.log("Logged In");
      setUser({
        name : details.name,
        email :details.email
      })
    }
    else{
      console.log("Details Did not Match");
      setError("Details did not match ");
    }
  }

  const Logout = ()=>{
    console.log("Logout");

    setUser({
      name : "",email : "",
   
    })
  }
  return (
    <div className="App">
     {(user.email!= "")? (
       <div className="App">
    <h2>Welcome <span>
      {user.name}
    </span></h2>

 <AdminForm />

    <button onClick ={Logout}>Logout</button>
       </div>
     ):(
       <LoginForm Login ={Login} error ={error} />  
     )}
    </div>
  );
}

export default App;
