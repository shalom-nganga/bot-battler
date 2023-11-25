import React, { useState, useEffect } from 'react';

function BotArmy({ arr, Update }) {
 
  const [botArmy, setBotArmy] = useState([]);

  useEffect(() => { 
    setBotArmy(arr); 
  }, [arr]);

  
  function handleClick(bot) {
   
    const updatedBotArmy = botArmy.filter((army) => army.id !== bot.id); //if the id of the button in the card cliked is not equal to the id in the bot army then it should let it remain there otherwise the if the id is found to be equal then the object should be removed
    //setBotArmy(updatedBotArmy);
    Update(updatedBotArmy)
  }

  return (
    <div className='container'>
      {botArmy.map((bot) => (  
        <div className="box" key={bot.id}>
          <img src={bot.avatar_url} alt={bot.name} />
          <br />
          <h3>{bot.name}</h3>
          <h4>{bot.bot_class}</h4>
          <button type="button" onClick={() => handleClick(bot)}>
            Release
          </button>
        </div>
      ))}
    </div>
  );
}

export default BotArmy;
