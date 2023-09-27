'use client'
import { useState } from "react"
import { TfiHome } from "react-icons/tfi"
import { AiOutlineUser } from "react-icons/ai"
import { BsHeart } from "react-icons/bs"
import { PiAlarmLight } from "react-icons/pi"


export default function Home() {

  const [isRotate, setIsRotate] = useState(false)
  const Change = () => {
    setIsRotate(!isRotate)
  }

  return (
    <>

      <div className="container">
        <div className="menu">
          <ul>
            <li><a href="#">
              <TfiHome />
            </a></li>
            <li><a href="#">
              <AiOutlineUser />
            </a></li>
            <li></li>
            <li><a href="#">
              <BsHeart />
            </a></li>
            <li><a href="#">
              <PiAlarmLight />
            </a></li>
          </ul>
        </div>
        <div className={`menuToggle ${isRotate ? "active" : ""}`}
          onClick={Change}>
          <span></span>
        </div>
      </div>


    </>
  )
}
