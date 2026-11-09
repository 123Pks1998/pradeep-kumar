
import React from 'react'
import {
    AiOutlineLinkedin,
    AiOutlineGithub,
    AiOutlineInstagram,
    AiOutlineFacebook
} from 'react-icons/ai'
import { motion } from 'framer-motion'

const Social = () => {
    return (
        <div className='flex flex-row md:flex-col items-center justify-center gap-8 md:gap-0 mr-4 text-2xl text-white'>

            <motion.a
                initial={{ x: 10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                href="https://www.linkedin.com/in/pradeep-kumar-29bb911b9/"
                target='_blank'
                rel='noopener noreferrer'
            >
                <AiOutlineLinkedin className='shadow-orange-300 hover:bg-orange-500 shadow-sm rounded-sm' />
            </motion.a>

            <motion.a
                initial={{ x: 10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                href="https://github.com/123Pks1998?tab=repositories"
                target='_blank'
                rel='noopener noreferrer'
            >
                <AiOutlineGithub className='md:mt-8 shadow-orange-300 hover:bg-orange-500 shadow-sm rounded-sm' />
            </motion.a>

            <motion.a
                initial={{ x: 10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
                href="https://www.instagram.com/pks108064/"
                target='_blank'
                rel='noopener noreferrer'
            >
                <AiOutlineInstagram className='md:mt-8 shadow-orange-300 hover:bg-orange-500 shadow-sm rounded-sm' />
            </motion.a>

            <motion.a
                initial={{ x: 10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                href="https://www.facebook.com/profile.php?id=100005427280380"
                target='_blank'
                rel='noopener noreferrer'
            >
                <AiOutlineFacebook className='md:mt-8 shadow-orange-300 hover:bg-orange-500 shadow-sm rounded-sm' />
            </motion.a>

        </div>
    )
}

export default Social
