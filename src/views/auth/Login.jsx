import React from 'react'
import FormLogin from '../../components/forms/auth/FormLogin'
import ToggleDarkMode from '../../components/toggleDarkMode/ToggleDarkMode'


function Login() {
    return (
        <div className='w-full px-[5%] md:px-[10%] grid md:grid-cols-2 py-[10vh] min-h-screen '>
            <FormLogin className='rounded-l justify-center lg:px-16' />
            <div className=" bg-base-200 rounded-r shadow-lg hidden justify-center relative md:flex md:flex-col">
            <ToggleDarkMode className='absolute top-0 right-0 m-4 z-10' />
            <img src="/public/BCN4Water_transpa.png" alt="logo" className="w-full" />
                
            </div>
        </div>
    )
}

export default Login