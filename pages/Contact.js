
import Social from '@/components/Social'
import Link from 'next/link'
import { motion } from 'framer-motion'

const Contact = () => {
    return (
        <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className='w-full max-w-full flex flex-col md:flex-row items-start gap-8 md:gap-6 px-4 md:px-8 my-10 md:my-20'
        >

            {/* Contact Content */}
            <div className='w-full md:flex-1 min-w-0 font-serif text-white'>

                <div className='w-full md:w-3/4'>

                    <h1 className='text-3xl font-semibold text-center'>
                        Get In Touch
                    </h1>

                    <p className='text-center mt-4 leading-relaxed text-slate-300'>
                        I'm always open to connecting with people, discussing
                        technology, sharing ideas, or exploring opportunities.
                        Whether you have a question, a project idea, or just
                        want to say hello, feel free to reach out.
                    </p>

                </div>

                {/* Contact Details */}
                <div className='w-full md:w-3/4 mt-8 flex flex-col sm:flex-row justify-between gap-6 text-center'>

                    <div>
                        <p className='text-lg font-semibold'>
                            Call & WhatsApp
                        </p>

                        <Link
                            href='tel:+919817530061'
                            className='text-slate-300 hover:text-orange-400'
                        >
                            +91 98175 30061
                        </Link>
                    </div>

                    <div>
                        <p className='text-lg font-semibold'>
                            Email
                        </p>

                        <Link
                            href='mailto:pks28697@gmail.com'
                            className='text-slate-300 hover:text-orange-400 break-all'
                        >
                            pks28697@gmail.com
                        </Link>
                    </div>

                </div>

                {/* Say Hello Button */}
                <div className='w-full md:w-3/4 my-8 text-center'>
                    <Link
                        href='mailto:pks28697@gmail.com'
                        className='inline-block px-4 py-2 rounded-sm shadow-md shadow-orange-300 hover:shadow-orange-400 hover:text-orange-300 transition-all'
                    >
                        Say Hello
                    </Link>
                </div>

            </div>

            {/* Social Links */}
            <div className='w-full md:w-auto flex justify-center md:justify-end md:mt-16'>
                <Social />
            </div>

        </motion.div>
    )
}

export default Contact
