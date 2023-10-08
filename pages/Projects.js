import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'
import { FiExternalLink } from 'react-icons/fi'
import { AiOutlineGithub } from 'react-icons/ai'
import { TbPlayerTrackNext } from 'react-icons/tb'
const Projects = () => {
    return (
        <>
            <div className='overflow-y-hiddenf h-full mb-20'>
                <motion.div initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.4 }} className='my-20 md:mx-10 mx-8'>
                    <h1 className='text-white md:w-auto text-center  font-serif font-semibold text-2xl capitalize underline'>the things i have made.</h1>

                    <div className='md:flex md:justify-start  my-16'>
                        <div className='flex justify-center '>
                            <img src="/pks.png" alt="pp" className='md:w-96 w-80  h-60 rounded-md' />
                        </div>

                        <div className='md:ml-0  md:w-96 h-auto p-2  md:text-right font-serif text-white'>
                            <div>
                                <h1 className='text-2xl md:mt-0 mt-2 h-8 font-medium capitalize'>booksmart</h1>
                                <p className='text-sm capitalize line-clamp-4 rounded-md bg-slate-950 md:-ml-4 md:w-96 w-80 p-2 h-32 md:h-auto mt-4'>Text messaging, or texting, is the act of composing and sending electronic messages, typically consisting of alphabetic and numeric characters, between two or more users of mobile devices, desktops/laptops, </p>
                            </div>

                            <div className='flex mt-4 capitalize md:justify-end gap-2'>
                                <p>javaScript</p>
                                <p>next js</p>
                                <p>node auth</p>
                                <p>tailwind</p>
                                <p>stripe</p>
                            </div>

                            <div className='flex md:justify-end text-2xl gap-8 mt-4'>

                                <a href=""><FiExternalLink /></a>
                                <a href="https://github.com/123Pks1998" target='blank'><AiOutlineGithub /></a>
                            </div>

                        </div>

                    </div>

                    <div className='md:flex md:justify-end mt-14'>
                        <div className='flex justify-center '>
                            <img src="/pks.png" alt="pp" className='md:w-96 w-80  h-60 rounded-md' />
                        </div>

                        <div className='md:ml-0  md:w-96 h-auto p-2   md:text-right font-serif text-white'>
                            <div>
                                <h1 className='text-2xl md:mt-0 mt-2 h-8 font-medium capitalize'>booksmart</h1>
                                <p className='text-sm capitalize line-clamp-4 h-32 md:h-auto rounded-md bg-slate-950 md:-ml-4 md:w-96 w-80 p-2  mt-4'>Text messaging, or texting, is the act of composing and sending electronic messages, typically consisting of alphabetic and numeric characters, between two or more users of mobile devices, desktops/laptops, </p>
                            </div>

                            <div className='flex mt-4 capitalize md:justify-end gap-2'>
                                <p>javaScript</p>
                                <p>next js</p>
                                <p>node auth</p>
                                <p>tailwind</p>
                                <p>stripe</p>
                            </div>

                            <div className='flex md:justify-end text-2xl gap-8 mt-4'>
                                <a href=""><FiExternalLink /></a>
                                <a href="https://github.com/123Pks1998" target='blank'><AiOutlineGithub /></a>
                            </div>

                        </div>

                    </div>
                </motion.div >

                <div className='text-white'>
                    <div className='w-auto '>
                        <h1 className='capitalize font-serif text-xl font-semibold text-center underline'>some other projects</h1>
                    </div>

                    <div className='w-auto  flex justify-center text-center mt-4'>
                        <Link href='/OtherProject' className='flex  p-2'>

                            <TbPlayerTrackNext className='shadow-orange-300 shadow-md rounded-sm text-xl w-10 hover:shadow-orange-400 hover:text-green-600' />
                            <TbPlayerTrackNext className='shadow-orange-300 shadow-md rounded-sm text-xl w-10 hover:shadow-orange-400 hover:text-green-600' />
                        </Link>
                    </div>
                </div>
            </div >
        </>



    )
}

export default Projects
