import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../components/ui/navbar/Navbar'
import CardTree from '../../components/home/CardTree'

function Home() {
    
    return (
        <div className='w-full px-[5%] md:px-[10%]  min-h-screen'>
            <Navbar/>
            <div className='grid grid-cols-3'>
                <CardTree/>
            </div>
        </div>
    )
}

export default Home