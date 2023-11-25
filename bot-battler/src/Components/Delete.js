import React from 'react'

function Delete({element}) {
    function handleDelete(){
        fetch(`http://localhost:8000/bots/${element.id}`,{
            method:'DELETE',
        })
        .then((res)=>{
            res.json()
        })
        .then(()=>{
            window.location.reload()
        })
    }
  return (
    <div><button type="button" onClick={handleDelete}>Delete</button></div>
  )
}

export default Delete