'use client'
import { useState } from "react"
import { TfiHome } from "react-icons/tfi"
import { AiOutlineUser } from "react-icons/ai"
import { BsHeart } from "react-icons/bs"
import { PiAlarmLight } from "react-icons/pi"
import Image from "next/image"
import Ham from "../../public/Ham.svg"
import Close from "../../public/Close.svg"


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
