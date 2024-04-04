import React from 'react'

function TaskTiles({cardImage, cardTitle, cardDesc}) {
  return (
    
    <div class="cardTile"  
    style={{minWidth:'80px', maxWidth:'300px' , borderRadius:'12px' ,  border:'1px solid'}}>
      <img src={cardImage} alt="CompletedTaks" 
      style={{ width:'100%',  objectFit:'cover', borderTopLeftRadius:'12px' ,borderTopRightRadius:'12px' , backgroundRepeat:'no-repeat' }}/>
      <div class="cardBody">
        <span class="card-title">{cardTitle}</span>
        <p class="card-text">  {cardDesc}</p>

      </div>
    </div>
    
  )
}

export default TaskTiles
