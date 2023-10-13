import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
const Navbar = () => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className=' flex justify-between rounded-none h-12  bg-zinc-800 shadow-orange-300 shadow-lg sticky top-0' >
            <div className='md:mx-6 '>
                <Link href='/'>
                    <p className='md:ml-0 ml-2 text-white hover:shadow-orange-400  font-semibold rounded-xl text-center h-8 w-8 md:mt-2 lg:mt-2 mt-2 hover:text-green-50   shadow-white shadow-inner text-2xl'>PK</p>
                </Link>
            </div>

            <div className='md:mx-6 mx-2 md:w-96 w-64 py-3 text-slate-300 text-lg font-serif  justify-between flex'>
                <motion.div initial={{ x: 10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.1 }}>

                    <Link href='/Projects' className='px-1 focus:text-green-400 focus:shadow-md focus:shadow-green-400 hover:shadow-md hover:shadow-orange-300 rounded-sm '>Projects</Link></motion.div>


                {/* <motion.div initial={{ x: 10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}>
                    <Link href='/Experience' className='px-1 focus:text-green-400 focus:shadow-md focus:shadow-green-400 hover:shadow-md  hover:shadow-orange-300 rounded-sm '>Experience</Link> </motion.div> */}

                <motion.div initial={{ x: 10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}>
                    <Link href='/Contact' className='px-1 focus:text-green-400 focus:shadow-md focus:shadow-green-400 hover:shadow-md  hover:shadow-orange-300 rounded-sm '>Contact</Link>   </motion.div>

                <motion.div initial={{ x: 10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.7 }}>
                    <Link href='/About' className='px-1 focus:text-green-400 focus:shadow-md focus:shadow-green-400 hover:shadow-md  hover:shadow-orange-300 rounded-sm
                 '>About</Link> </motion.div>

            </div>
        </motion.div>
    )
}

export default Navbar
