import React from 'react'

function rating() {
  return (
      <>
         <h1>How did we do?</h1>
         <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve  our offering!</p> 
         <p className='numberSelector'>1</p> <p className='numberSelector'>2</p> <p className='numberSelector'>3</p> <p className='numberSelector'>4</p> <p className='numberSelector'>5</p>
         <button>Submit</button>
      </>
  )
}

export default rating