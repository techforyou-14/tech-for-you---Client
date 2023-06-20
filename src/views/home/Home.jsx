import React from 'react'
import Navbar from '../../components/ui/navbar/Navbar'
import WaterUse from '../../components/home/WaterUse'
import InfoTree from '../../components/home/InfoTree'
import History from '../../components/home/History'
function Home() {

    return (
        <div className='w-full px-[5%] md:px-[10%]  min-h-screen'>
            <Navbar />
            <div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
                <InfoTree/>
                <div className=''>
                    <img className='rounded-md' src="/alcina-2.jpg" alt="" />
                </div>

                <div className='flex flex-col gap-y-4'>
                    <WaterUse/>
                    <History/>
                </div>
            </div>


        </div>
    )
}

export default Home