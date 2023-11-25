import Bot from './Components/Bot';
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [data, setData]=useState([])
  useEffect(()=>{
    fetch("https://json-bot-server-3sd4.onrender.com/bots")
    .then((res)=>res.json())
    .then((bots)=>{
      setData(bots)
    })
  }, [])
  return (
    <div className="App">
      
        <Routes>
          <Route exact path='/' element={data && <Bot bots={data}/>}/>
          
        </Routes>
    
    </div>
  );
}

export default App;