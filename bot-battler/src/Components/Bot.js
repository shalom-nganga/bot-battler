import React, { useState } from 'react';
import BotArmy from './BotArmy';
import Delete from './Delete';

function Bot({ bots }) {
  const [arr, setArr] = useState([]);
  const [category, setCategory]=useState([])
  function handleClick(element) {
    if(!category.includes(element.bot_class)){ // if bot class does not exist in the array then set the array with the new object
      setCategory([...category, element.bot_class])
      setArr([...arr,element])//the array is populated with data now
    }
  }

  function Update(updatedBotArmy){
    setArr(updatedBotArmy)
  }

  return (
    <div>
      <BotArmy arr={arr} Update={Update}/>
      <div className='box-container'>
        {bots.map((element) => (
          <div key={element.id} className='box' onClick={() => handleClick(element)}>
            <img src={element.avatar_url} alt={element.name} />
            <h3>{element.name}</h3>
            <h4>{element.bot_class}</h4>

            <div>
              <div className="details">
                <p>Health {element.health}</p>
                <br/>
                <p>Damage {element.damage}</p>
                <br/>
                <p>Armor {element.armor}</p>
              </div>
              <br />
             
            </div>

            <Delete element={element} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Bot;
