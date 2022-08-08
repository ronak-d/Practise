import React from 'react'


// this is function to call images as dynamically;


const REimgs = ({image,title,title2}) => {
    console.log(image)
    
  return (
    <div className="dynamicImgCall">
        <img src={image} />
        <p>{title}</p>
        <p>{title2}</p>
    </div>
  )
}

export default REimgs;


