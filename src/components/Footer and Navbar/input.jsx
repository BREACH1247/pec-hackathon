import React from 'react'
import "./input.css"
const Input = () => {
  return (
    <div>
    <div className="input-wrapper">Report Anomalies</div>
    <div className="field-wrapper">
    <input type="text" placeholder="  NAME" className="input-1"/>
    <input type="text" placeholder="  EMAIL" className="input-2"/>
    </div>
    <div className="input-3-w">
    <input type="text" placeholder=" Write your content here..." className="input-3"/>
    </div>
    <div className="post-button">POST</div>
    </div>
  )
}

export default Input