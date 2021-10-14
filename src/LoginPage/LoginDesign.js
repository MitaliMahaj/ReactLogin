import { useState} from 'react';
import peraa from './PERAA.PNG';
import { useHistory } from 'react-router-dom';

function LoginDesign() {

    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    var [requiredText, setrequiredText] = useState("");
    const [Text, setText] = useState([]);
    const history = useHistory();

    const submitForm = async (e) => {
        e.preventDefault();
        if (email) {
            if (password) {
                if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {
                    if (password.length > 4) {
                        console.log(password);
                        const Auth = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjM0Mjk2OTIyLCJpYXQiOjE2MzQyMTA1MjIsImp0aSI6IjE1MjQ2NjM0ZDAwNTRiMmI5Y2QyNTU4YTg5MWNhNTIyIiwidXNlcl9pZCI6Mn0.IhBn-NQoZDLbGiLlflgvFMzXFk0NgV_5t8Eq-bJRNTk';
                        const newText = { id: new Date().getTime().toString, email, password };
                        setText([newText]);
                        console.log(newText);
                       
                        setemail("");
                        setpassword("");
                        setrequiredText("");

                        let result = 
                        await fetch("http://2745-2401-4900-5196-a097-64e4-e817-ea3f-9d05.ngrok.io/api/login" ,{
                          method : 'POST',
                          headers:{
                            'Content-Type': 'application/json',
                            'Authorization': 'Bearer ' + Auth
                          },
                          body: JSON.stringify({
                            "username": email,
                            "password": password
                        }),                     
                       
                    }).then((response) => {
                        if(!response.ok) {
                            console.log("something went wrong");
                        }
                        else{
                           // history.push('/welcome');  
                           console.log("Welcome");
                        } 
                      });
                    } else {
                        document.getElementById("RequiredField").classList.add("RequiredMessage");
                        requiredText =  "Password Length should be greater than 4";
                        setrequiredText(requiredText);
                    }
                } else {
                    document.getElementById("RequiredField").classList.add("RequiredMessage");
                    requiredText = "Email is not in correct format";
                    setrequiredText(requiredText);
                }
            } else {
                document.getElementById("RequiredField").classList.add("RequiredMessage");
                requiredText = "Password should not be empty";
                setrequiredText(requiredText);
            }
        } else {
            document.getElementById("RequiredField").classList.add("RequiredMessage");
            requiredText = "Email should not be empty";
            setrequiredText(requiredText);
        }
    }

    return (
        <div className="main">
            <div className="MiddleDiv mt-5 mb-5">
                <div className="col-4 DivCol4">
                    <div className="HeaderRow">
                        <img src={peraa} alt="PERAA"></img>
                    </div>
                    <div className="LoginDiv">
                        <form acion="" className="LoginForm" onSubmit={submitForm}>
                            <div className="InnerLoginDiv">
                                <label className="labelStyle" htmlFor="email">Email</label>
                                <input type="text" className="InputField" name="email" id="email" value={email} onChange={(e) => setemail(e.target.value)} autoComplete="off" />
                            </div>
                            <div className="InnerLoginDiv">
                                <label className="labelStyle" htmlFor="password">Password</label>
                                <input type="password" className="InputField" name="password" value={password} onChange={(e) => setpassword(e.target.value)} id="password" autoComplete="off" />
                            </div>
                            <div>
                                <span className="" value={requiredText} style={{display: "none"}} id="RequiredField">{requiredText}</span>
                                <button className="ButtonStyle" type="submit">Login</button>
                            </div>
                        </form>
                        {/* <div>
                            {
                                Text.map((curRlem) => {
                                    return (
                                        <div >
                                            <p>{curRlem.email}</p>
                                            <p>{curRlem.password}</p>
                                        </div>
                                    )
                                })
                            }
                        </div> */}
                    </div>
                    <div className="FooterMessage">
                        <div className="WarningMessage">
                            Warning!!
                        </div>
                        <div className="WarningMessage">
                            Please dont Use wrong password this website is highly secured
                        </div>
                    </div>
                </div>
                <div className="col-8 DivCol8">
                    <div className="WelcomeDiv">
                        <div className="WelcomeText">
                           <span className="WelcomeInitial">Welcome To</span> PERAA
                           <div className="WelcomeTextLogin">Log in to Access your Account</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
   
  
   );   
}

export default LoginDesign;
