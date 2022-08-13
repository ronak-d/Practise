import React, { useEffect } from 'react'

const Use = () => {

    console.log("Before")

    useEffect(() => {
        console.log("one")
    })

    useEffect(() => {
        console.log("two")
    })

    console.log("after useEffect")

  return (
    <div>
        <h1>hello HR</h1>
    </div>
  )
}

export default Use;