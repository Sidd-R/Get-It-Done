import React from 'react'
import Button from './Button'
import { useLocation } from 'react-router-dom'

const Header = ({title, onAdd, showAddTask}) => {
  const location = useLocation()

  return (
    <header className='header'>
        <h1>{title}</h1>
        {location.pathname === '/' ?
          <Button text={showAddTask? 'close':'add'} onClick={onAdd} color = {showAddTask? 'darkRed':'darkSlateGrey'}/>:null
        }
        
    </header>
  )
}

Header.defaultProps = {
    title: 'Title'
}

export default Header