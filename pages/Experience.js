import Social from '@/components/Social'
import React from 'react'

const Experience = () => {
    return (
        <div className='flex md:my-20 my-8'>
            <div className='md:w-3/4 md:mx-28 mx-4 bg-black rounded-md text-white  font-serif'>
                <div className='p-2'>
                    <p></p>
                    <div className='p-2'>
                        <h1>react js :-</h1>
                        <p>i have working with react since 1 year.</p>
                    </div>

                    <div className='flex p-2'>
                        <h1>next js :-</h1>
                        <p>i have working with react since 1 year.</p>
                    </div>

                    <div className='flex p-2'>
                        <h1>node js :-</h1>
                        <p>i have working with react since 1 year.</p>
                    </div>

                    <div className='flex p-2'>
                        <h1>react js :-</h1>
                        <p>i have working with react since 1 year.</p>
                    </div>
                </div>

            </div>


            <div className='md:w-2/4 md:mt-0 mt-2 flex justify-end mr-4'>
                <Social />
            </div>

        </div>
    )
}

export default Experience
