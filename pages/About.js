import Social from '@/components/Social'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
// import { AiOutlineLinkedin, AiOutlineGithub, AiOutlineInstagram, AiOutlineFacebook } from 'react-icons/ai'


const About = () => {
    return (

        <motion.div initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }} >
            <div className='md:flex  md:ml-14 lg:ml-14 ml-10 md:my-20  my-8 '>
                <div className='md:w-3/5 text-white '>
                    <div>
                        <h1 className='font-serif font-semibold text-xl mb-4'>About Me</h1>
                        <p className='font-sans  md:w-3/4 w-72 capitalize '>i am pradeep kumar a <u>( B.Tech )</u> computer science engineer.<br />Degree i have completed from <span className='font-sans italic ml-1'>   guru jambheshwar university of science & technology</span>, Hisar ( HARYANA ) india in 2021. </p>

                        <p className='mt-4 mr-2 font-sans'>since 2022, i'm working in this field, i get some up & down experiences & i get that sometimes it  gives more responsibility & sometimes it's like a fun, specially when you take the challenges. i think playing with code is an incredible satisfaction for any developers.</p>
                    </div>
                    <div className='hover:scale-105 hover:duration-500 w-fit'>
                        <h1 className='font-sans font-medium text-md mt-12 capitalize'>technology that, i have been working with recently.</h1>
                        <div className='w-56 flex justify-between font-serif capitalize text-md j mt-4'>
                            <div>
                                <p>html5</p>
                                <p>next js</p>
                                <p>react js</p>
                                <p>javaScript</p>
                            </div>

                            <div>
                                <p>node js</p>
                                <p>mongo DB</p>
                                <p>express js</p>
                                <p>tailwindcss</p>
                            </div>

                        </div>
                    </div>
                </div>


                <div className='md:w-2/5 w-auto flex justify-between text-white mt-6 md:mt-0 md:mx-4'>
                    <div className=' w-48 h-48  rounded-md p-0.5 bg-orange-300'>
                        <Image src='/pks.png' width={200} height={100} alt='pic' />
                    </div>
                    <div>
                        <Social />
                    </div>
                </div>
            </div>

            <div className='md:ml-14 lg:ml-14 ml-10 md:my-20 capitalize font-serif text-white'>
                <h1 className='text-lg font-semibold mb-4'>languages known :-</h1>

                <div className='w-64 '>
                    <div className='gap-6 flex font-semibold mb-2'>
                        <div>hindi</div>
                        <div>english</div>
                        <div>nepali</div>
                    </div>
                    <hr className='w-52' />
                    <div className='gap-10 flex'>
                        <td>read</td>
                        <td>read</td>
                        <td>read</td>
                    </div>
                    <div className='gap-9 flex'>
                        <td>write</td>
                        <td>write</td>
                        <td>no</td>
                    </div>
                    <div className='gap-8 flex'>
                        <td>speak</td>
                        <td>speak</td>
                        <td>speak</td>
                    </div>


                </div>
            </div>
            <hr />
            <div className='md:ml-14 lg:ml-14 ml-10 md:my-20 capitalize font-serif text-white '>
                <h1 className='text-lg font-semibold mb-2'>hobbies :-</h1>
                <p>1. poetry writing</p>
                <p>2. playing chess</p>
            </div>

        </motion.div >

    )
}

export default About
