
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FiExternalLink } from 'react-icons/fi'
import { AiOutlineGithub } from 'react-icons/ai'
import { TbPlayerTrackNext } from 'react-icons/tb'

const Projects = () => {
    return (
        <>
            <div className='w-full max-w-full mb-20 overflow-x-hidden'>
                <motion.div
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className='my-20 px-4 md:mx-10 md:px-0'
                >
                    <h1 className='text-white text-center font-serif font-semibold text-2xl capitalize underline'>
                        the things i have made.
                    </h1>

                    {/* Darpan */}
                    <div className='md:flex md:justify-start items-start my-16 gap-4'>
                        <div className='flex justify-center shrink-0'>
                            <img src="/darpan.png" alt="Darpan project" className='w-full max-w-80 md:w-96 h-60 object-cover rounded-md' />
                        </div>

                        <div className='w-full min-w-0 md:w-96 md:flex-none h-auto p-2 md:text-right font-serif text-white'>
                            <h1 className='text-2xl mt-2 md:mt-0 font-medium capitalize'>darpan</h1>
                            <p className='text-sm capitalize line-clamp-6 rounded-md bg-slate-950 p-2 h-32 md:h-auto mt-2'>
                                this is frontend of website, that is created by using javaScript, react js library & tailwind css. all the data are dynamic coming from json file. this is fully responsive suitable for laptops,tabs & mobiles. on this website user may read the posts like Poetry & shyari.
                            </p>

                            <div className='flex flex-wrap mt-2 capitalize md:justify-end gap-2'>
                                <p>javaScript</p>
                                <p>react js</p>
                                <p>tailwind css</p>
                                <p>responsive</p>
                            </div>

                            <div className='flex md:justify-end text-2xl gap-8 mt-4'>
                                <Link href="https://darpan-sigma.vercel.app/" className="hover:text-orange-400" target='_blank'><FiExternalLink /></Link>
                                <Link href="https://github.com/123Pks1998/darpan" className="hover:text-orange-400" target='_blank'><AiOutlineGithub /></Link>
                            </div>
                        </div>
                    </div>

                    {/* GoTogether */}
                    <div className='md:flex md:flex-row-reverse md:justify-end items-start mt-14 gap-4'>
                        <div className='flex justify-center shrink-0'>
                            <img src="/gotogether.png" alt="GoTogether project" className='w-full max-w-80 md:w-96 h-60 object-cover rounded-md' />
                        </div>

                        <div className='w-full min-w-0 md:w-96 md:flex-none h-auto p-2 md:text-right font-serif text-white'>
                            <h1 className='text-2xl mt-2 md:mt-0 font-medium capitalize'>gotogether</h1>
                            <p className='text-sm capitalize line-clamp-6 h-32 md:h-auto rounded-md bg-slate-950 p-2 mt-2'>
                                this is next js full stack blogging website, frontend is only visible for demo purpose, database connectivity & apis are already created. this is fully responsive & suitable for desktop,tabs & mobiles. this website also have admin panel for data submission to the database.
                            </p>

                            <div className='flex flex-wrap mt-2 capitalize md:justify-end gap-2'>
                                <p>javaScript</p>
                                <p>next js</p>
                                <p>mongo db</p>
                                <p>api</p>
                                <p>tailwind css</p>
                                <p>responsive</p>
                            </div>

                            <div className='flex md:justify-end text-2xl gap-8 mt-4'>
                                <Link href="https://gotogether-nine.vercel.app/" className="hover:text-orange-400" target='_blank'><FiExternalLink /></Link>
                                <Link href="https://github.com/123Pks1998/gotogether" className="hover:text-orange-400" target='_blank'><AiOutlineGithub /></Link>
                            </div>
                        </div>
                    </div>

                    {/* MVC Architecture */}
                    <div className='md:flex md:justify-start items-start my-12 gap-4'>
                        <div className='flex justify-center shrink-0'>
                            <img src="/mvc.png" alt="MVC Architecture project" className='w-full max-w-80 md:w-96 h-60 object-cover rounded-md' />
                        </div>

                        <div className='w-full min-w-0 md:w-96 md:flex-none h-auto p-2 md:text-right font-serif text-white'>
                            <h1 className='text-2xl mt-2 md:mt-0 font-medium capitalize'>mvc architecture</h1>
                            <p className='text-sm capitalize line-clamp-5 rounded-md bg-slate-950 p-2 h-32 md:h-auto mt-2'>
                                this is based on mvc architecture, that is created by using ejs engine, node js, express framework, mongo db & api. all the codes are going through model, view & controller.
                            </p>

                            <div className='flex flex-wrap mt-2 capitalize md:justify-end gap-2'>
                                <p>node js</p>
                                <p>mongo db</p>
                                <p>rest api</p>
                                <p>express js</p>
                                <p>ejs engine</p>
                            </div>

                            <div className='flex md:justify-end text-2xl gap-8 mt-4'>
                                <Link href="https://github.com/123Pks1998/darpan" className="hover:text-orange-400" target='_blank'><AiOutlineGithub /></Link>
                            </div>
                        </div>
                    </div>

                    {/* BookSmart */}
                    <div className='md:flex md:flex-row-reverse md:justify-end items-start mt-14 gap-4'>
                        <div className='flex justify-center shrink-0'>
                            <img src="/book.png" alt="BookSmart project" className='w-full max-w-80 md:w-96 h-60 object-cover rounded-md' />
                        </div>

                        <div className='w-full min-w-0 md:w-96 md:flex-none h-auto p-2 md:text-right font-serif text-white'>
                            <h1 className='text-2xl mt-2 md:mt-0 font-medium capitalize'>booksmart</h1>
                            <p className='text-sm capitalize line-clamp-6 h-32 md:h-auto rounded-md bg-slate-950 p-2 mt-2'>
                                this is next js full stack e-commercial website, all the data are getting from database through apis. redux library has been used for state management of the whole app & cart functionalities. frontend is fully responsive & suitable for desktop,tabs & mobiles.
                            </p>

                            <div className='flex flex-wrap mt-2 capitalize md:justify-end gap-2'>
                                <p>javaScript</p>
                                <p>next js</p>
                                <p>mongo db</p>
                                <p>api</p>
                                <p>redux</p>
                                <p>tailwind css</p>
                                <p>responsive</p>
                            </div>

                            <div className='flex md:justify-end text-2xl gap-8 mt-4'>
                                <Link href="https://github.com/123Pks1998/booksmart" className="hover:text-orange-400" target='_blank'><AiOutlineGithub /></Link>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Other Projects */}
                <div className='text-white'>
                    <div className='w-full'>
                        <h1 className='capitalize font-serif text-xl font-semibold text-center underline'>
                            some other projects
                        </h1>
                    </div>

                    <div className='w-full flex justify-center text-center mt-4'>
                        <Link href='/OtherProject' className='flex p-2'>
                            <TbPlayerTrackNext className='shadow-orange-300 shadow-md rounded-sm text-xl w-10 hover:shadow-orange-400 hover:text-green-600' />
                            <TbPlayerTrackNext className='shadow-orange-300 shadow-md rounded-sm text-xl w-10 hover:shadow-orange-400 hover:text-green-600' />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects