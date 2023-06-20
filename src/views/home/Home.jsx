import React from 'react'
import Navbar from '../../components/ui/navbar/Navbar'
import WaterUse from '../../components/home/WaterUse'
import InfoTree from '../../components/home/InfoTree'
import History from '../../components/home/History'
import Card from '../../components/ui/commons/Card'
import { Link } from 'react-router-dom'
function Home() {

    return (
        <div className='w-full px-[5%] md:px-[10%]  min-h-screen'>
            <Navbar />
            <div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
                <InfoTree />
                <div className='flex flex-col gap-4'>
                    <img className='rounded-md shadow-lg' src="/alcina-2.jpg" alt="arbol" />
                    <Card className="h-full opacity-75 border flex justify-center items-center">
                        {/* <Link to="/chose"> */}
                        <span className='flex flex-col gap-4 text-center'>
                            Proximamente...
                            <button className='btn btn-outline disabled:bg-transparent opacity-60 hover:bg-transparent hover:scale-100 hover:active:scale-100 hover:text-black hover:cursor-default' > Añadir arbol nuevo</button>
                        </span>
                        {/* </Link> */}
                    </Card>
                </div>

                <div className='flex flex-col gap-y-4'>
                    <WaterUse />
                    <History />
                </div>
            </div>


        </div>
    )
}

export default Home