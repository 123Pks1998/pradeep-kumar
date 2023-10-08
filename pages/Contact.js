import Social from '@/components/Social'
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'
const Contact = () => {
    return (

        <motion.div initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }} className='flex md:my-20 my-8'>
            <div className=' md:w-3/4 w-96 font-serif text-white '>
                <div>
                    <div className='md:w-3/4 text-center'>
                        <h1 className=' text-3xl font-semibold'>Get In Touch</h1>
                    </div>
                    <div className='md:w-3/4  text-center ml-4 md:mt-4 mt-2'>
                        <p>Although, I'm not currently looking for any new opportunities, my inbox is always open.whether you have ant question or just want to say hi, I'll try to get back to you as soon as possible.</p>
                    </div>
                    <div className='ml-4 md:w-3/4 md:mt-4 mt-6 flex justify-between text-center'>
                        <div>
                            <p>Whats'up:-</p>
                            <p>9817530061</p>
                        </div>
                        <div>
                            <p>Email:-</p>
                            <p>pks28697@gmail.com</p>
                        </div>
                    </div>
                </div>

                <div className='md:w-3/4 my-6 text-center'>
                    <Link href='mailto:pks28697@gmail.com' className='px-2 py-1 rounded-sm shadow-sm shadow-orange-300 hover:shadow-orange-400' >
                        Say hello
                    </Link>
                </div>

            </div>
            <div className='w-1/4 md:mt-0 mt-1 flex justify-end mr-4'>
                <Social />
            </div>
        </motion.div>
    )
}

export default Contact
