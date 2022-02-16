import React from "react";
import Profile from "./Profile/Profile";
import profilephoto from "./Profile/ProfilePhoto.PNG";

function App() {
  const handleName = (name) => alert(name);
  const bio =
    "I was a student in Iset'Com and had the opportunity to learn many languages such as C, C++, C#, and Java. Now, I'm a FullStack JS student in GoMyCode and focusing on ReactJS and NodeJS.";
  const styleApp = {
    maxWidth: "40rem",
    margin: "5rem auto",
    padding: "1rem",
    backgroundColor: "rgb(227, 242, 255)",
    borderRadius: "5px",
    boxShadow: "0px 0px 10px 2px rgb(0 0 0 / 20%)"
  }
  const styleImg = { width: "200px" }
  
    return (
    <div style={styleApp}>
      <Profile fullName="Wael Beldi" bio={bio} profession="Student" handleName={handleName}>
        <img src={profilephoto} alt="" style={styleImg}/>
      </Profile>
    </div>
  );
}

export default App;
