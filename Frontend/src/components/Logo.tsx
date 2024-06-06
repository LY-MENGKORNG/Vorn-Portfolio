import React from 'react'
import { flower } from '../assets'
import { Link } from 'react-router-dom'

const Logo: React.FC = () => {
  return (
    <Link className="flex items-center" to={'/'}>
        <img className='w-14' src={flower} alt="" />
        <h1 className="text-xl font-semibold text-pink-400">Savorn</h1>
    </Link>
  )
}

export default Logo
