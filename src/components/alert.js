import React from 'react'
import "./alert.css";

export default function alert(props) {
  return (
    props.a1 && <div className='d1'>
            <div class="alert alert-success alert-dismissible fade show" role="alert">
            <strong>{props.a1.ty}</strong> : {props.a1.msg}
        </div>
    </div>
  )
}
