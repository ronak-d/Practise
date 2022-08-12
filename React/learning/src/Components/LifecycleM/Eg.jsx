import React, { useState } from 'react'

const eg = () => {

  const [show, setShow] = useState(false);

  return (
    <div>
        <helloeg/>
    </div>
  )
}

export default eg

// ques -> can you show the hello eg on screen without using css;

const helloeg = () => {
    return (
      <div>
        <h1>hello eg</h1>
      </div>
    )
}
  