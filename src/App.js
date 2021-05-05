import React from 'react';
import './App.css';
import Start from './profile/Navbar';
import myImage from './profile/image.jpg';
import Profile from './profile/Profile';
import Adress from './profile/Adress';
import End from './profile/Footer';



function App() {
  const handleName=name=>alert(`This user is ${name}`);
  return (
    <div className='Menu'>
       
   <Start />
   
   <Profile 
  fullName="Takwa MELKI" 
  bio="An International Commerce Specialist graduated from The University of Economics and Management of Tunis in 2018. Recently, I made a decision to jumpstart my professional career into web development. So, since 22 March 2021, I have started a training in the desired field within Go My Code.
  My goal is to acquire new skills in order to give a new direction to my professional career by entering to the world of computer science as a fullstack web developer. Learn and invest my knowledge in a company to contribute to its evolution by sharing my skills and know-how." 
  profession="International Commerce Specialist" 
   handleName={handleName}
   >
     <div style={{display:'flex'}}>
     
  
  <img src={myImage} alt="myPhoto" style={{border: '1px solid rgb(158, 145, 194)',
    borderRadius: '50%',
    boxshadow:'-3px 3px 5px rgb(120, 98, 150), -7px 7px 5px rgb(223, 207, 243)',
    marginLeft:'10%', marginBottom:'3%', width:'25%',height:'40%'}} />
    <Adress />
    </div>

  </Profile>
  <End/>
      
    </div>
  );
}

export default App;
