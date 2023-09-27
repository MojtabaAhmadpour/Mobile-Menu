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
        <div classNames="navigation">
          <div className={`menuToggle ${isRotate ? "active" : ""}`}
          onClick={Change}

          ></div>
          <div className="menu"></div>
        </div>
      </div>


    </>
  )
}
