import React from 'react';
import Profilecomponent from './Profilecomponent ';


const ParentComponent = () => {
    const handleAlert = (FullName) => alert(`Profile user ${FullName}`);
  const myStyle={ background:"peachpuff", textAlign:"center"}
    return (
    <div style={myStyle}>
        <Profilecomponent
        FullName=" Itidel Kouki" 
        Bio= "This is my biographie : I'm a textile engineer , experienced in quality industries  "
        Profession="Quality Manager"
        handleAlert={handleAlert}
        >
        <div>
        <h2 style={{color: "purple", background:"yellow", border: "solid 5px peachpuff", borderRadius:"20%"}}>How beautiful me</h2>
        <img style={{border: "solid 5px yellow", borderRadius:"50%" , height: "200px", width:"250"}} src='/photo1.jpg' alt="myimage"/>
        </div>
        </Profilecomponent>
    </div>
      );
    };
    
export default ParentComponent;


