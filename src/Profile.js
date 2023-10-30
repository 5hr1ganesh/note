import "./css/Profile.css";
import {useRef} from 'react';
import { useEffect } from "react";
import { register } from "@teamhanko/hanko-elements";
import { Hanko } from "@teamhanko/hanko-frontend-sdk";
import { useNavigate } from "react-router-dom";
import { supabase } from "./client";
const hankoApi = process.env.REACT_APP_HANKO_API_URL;


  const Profile = () => {
  
    const inputRef = useRef(null);
    const  hanko = new Hanko(hankoApi);
    const navigate = useNavigate();
    
  async function Submit() {
      // 👇️ access input value
      // const hankoUser = await hankoApi.getCurrentUser();
      console.log(inputRef.current.value);
     
      const hankoUser = await hanko.user.getCurrent();
     
const { data, error } = await supabase
  .from('users')
  .upsert({ email:hankoUser.email , user_name: inputRef.current.value })
  .select()

 console.log(`SMG - ${error} | ${data}`);

      navigate("/Notes")
      }

  const Logout = () => {
    hanko.user.logout().then(() => {
      navigate("/login")
    })
  }

  const navigateToNotes = () => {
      navigate("/Notes")
  }


  useEffect(() => {
    register(hankoApi).catch((error) => {
      // handle error
    });
  }, []);


  return (
<>
<header className="header">
      <h1 className="title">Profile</h1>
      {/* <DarkModeToggle /> */}
      </header>


    <div className="Profile">
        <hanko-profile api={hankoApi} />
        <nav className="nav">
      <button onClick={Logout} className="button">
        Logout
      </button>
    </nav>
    </div>

          <div className="User-detail">
      <label>
        Click the Button to start making notes

      <button className= "butt" onClick={navigateToNotes}>Proceed</button>
      </label>
      </div>
    
    </>

  )
}

export default Profile;