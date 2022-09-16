import React from 'react'

const Button = ({text,onClick,color}) => {
  return (
    <button className='btn' onClick={onClick} style={{backgroundColor:color}}>{text}</button>
  )
}

export default Button

// {
//   "tasks": [
//     {
//       "id":1,
//       "text": "Go to the gym",
//       "reminder":true,
//       "day": "3rd june 2021"
//   },
//   {
//       "id":2,
//       "text": "Go shopping",
//       "reminder":true  ,
//       "day": "4th july 2020" 
//   },
//   {
//       "id":3,
//       "text": "study for ise",
//       "reminder":false,
//       "day": "26 august 2022"   
//   }
//   ]
// }