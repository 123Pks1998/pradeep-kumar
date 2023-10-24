import React from 'react'
import { FiExternalLink } from 'react-icons/fi'
import { AiOutlineGithub } from 'react-icons/ai'
import { motion } from 'framer-motion'
import Link from 'next/link'


const OtherProject = () => {
    return (
        <motion.div initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }} className=' my-20'>
            <h1 className=' text-white  text-center font-serif font-semibold text-2xl capitalize underline '>the things i have made.</h1>

            <div className='container mx-28 '>
                <div className=' flex  flex-wrap my-8'>

                    <div className='w-2/4 my-14'>

                        <div className='w-96 border p-1 rounded-md'>
                            <div className=' '>
                                <img src="/portfolio.png" alt="pp" className='md:w-96 w-80 h-60 rounded-md' />
                            </div>

                            <h1 className='text-2xl md:mt-0 h-8 font-medium capitalize text-white'>Portfolio</h1>

                            <div className='md:ml-0 ml-8 md:w-4/4 h-auto md:text-left font-serif text-white'>
                                <div>

                                    <p className='text-sm capitalize line-clamp-5 rounded-md bg-gray-950  md:w-auto w-96 p-1 mt-2'>portfolio that is made by using next js javaScript framework. this is responsive for all gadgets. </p>
                                </div>

                                <div className='flex-wrap flex  mt-4 capitalize md:justify-start  gap-4'>
                                    <p>javaScript</p>
                                    <p>next js</p>
                                    <p>tailwind</p>
                                    <p>react icons</p>
                                    <p>framer motion</p>
                                </div>


                                <div className='flex md:justify-start text-2xl  gap-8 mt-4'>
                                    <Link href="https://pradeep-kumar.vercel.app/" target='blank'><FiExternalLink /></Link>
                                    <Link href="https://github.com/123Pks1998/pradeep-kumar" target='blank'><AiOutlineGithub /></Link>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className='w-2/4 my-14'>

                        <div className='w-96 border p-1 rounded-md'>
                            <div className=' '>
                                <img src="/gotogether.png" alt="pp" className='md:w-96 w-80 h-60 rounded-md' />
                            </div>

                            <h1 className='text-2xl md:mt-0 h-8 font-medium capitalize text-white'>gotogether</h1>

                            <div className='md:ml-0 ml-8 md:w-4/4 h-auto md:text-left font-serif text-white'>
                                <div>

                                    <p className='text-sm capitalize line-clamp-5 rounded-md bg-gray-950  md:w-auto w-96 p-1 mt-2'>This one is responsive frontend of blogging web app.that is created using react js library. suitable of tablets, pcs & mobile phones.</p>
                                </div>

                                <div className='flex flex-wrap mt-4 capitalize md:justify-start  gap-4'>
                                    <p>javaScript</p>
                                    <p>react js</p>
                                    <p>react icons</p>
                                    <p>tailwind css</p>
                                    <p>responsive</p>

                                </div>

                                <div className='flex md:justify-start text-2xl  gap-8 mt-4'>

                                    <Link href="https://together-rosy.vercel.app/" target='blank'><FiExternalLink /></Link>
                                    <Link href="https://github.com/123Pks1998/together" target='blank'><AiOutlineGithub /></Link>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default OtherProject
