import React from 'react'
import dayjs from 'dayjs';
import { navIcons, navLinks } from '#constants'

const Navbar = () => {
  return (
    <nav>
        <div>
            <img src="/images/logo.svg" style={{ width:20, height:20}}/>
            <p className='font-bold'>Inzamam Portfolio</p>
            <ul>
            {navLinks.map(({id, name}) => (
                <li key={id}>
                    <p>{name}</p>
                </li>
            ))}
            </ul>
        </div>
        <div>
            <ul>
            {navIcons.map(({id, icon}) => (
                <li key={id}>
                <img src={icon} className='icon-hover' alt={`icon-${id}`}/>
                </li>
            ))}
            </ul>
            <time>{dayjs().format('ddd MMM D h:mm A')}</time>
        </div>
    </nav>
  )
}

export default Navbar
