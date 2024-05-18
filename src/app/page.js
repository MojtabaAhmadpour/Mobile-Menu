'use client'
import { useState } from "react"
import Image from "next/image"
import Ham from "../app/assets/icons/ham.svg"
import Close from "../app/assets/icons/Close.svg"


export default function Home() {

  const [isRotate, setIsRotate] = useState(false)

  const Change = () => {
    setIsRotate(!isRotate)
  }
  return (
    <>

      <div className="container">
        <div className={`menuToggle ${isRotate ? "active" : null}`}
          onClick={Change}>

          <div className="box">
            {!isRotate ?
              <Image src={Ham} alt="ham" />
              :
              <Image src={Close} alt="Close" />
            }
          </div>
          <span></span>
        </div>
        <div className="menu">
          <ul>
            <li style={{ "--i": "0.1s" }}><a href="#" title="">
              <TfiHome />
            </a></li>
            <li style={{ "--i": "0.2s" }}><a href="#">
              <AiOutlineUser />
            </a></li>
            <li></li>
            <li style={{ "--i": "0.2s" }}><a href="#">
              <BsHeart />
            </a></li>
            <li style={{ "--i": "0.1s" }}><a href="#">
              <PiAlarmLight />
            </a></li>
          </ul>
        </div>
      </div>


    </>
  )
}
