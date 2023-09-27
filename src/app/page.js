'use client'

import { useState } from "react"

export default function Home() {

  const [isRotate, setIsRotate] = useState(false)
  const Change = () => {
    setIsRotate(!isRotate)
  }


  return (
    <>

      <div className="container">
          <div className="menu"></div>
          <div className={`menuToggle ${isRotate ? "active" : ""}`}
          onClick={Change}>
            <span></span>
          </div>
      </div>


    </>
  )
}
