
import Social from '@/components/Social'
import Image from 'next/image'
import { motion } from 'framer-motion'

const About = () => {
    const infrastructureSkills = [
        'VMware vSphere',
        'Nutanix Prism',
        'Linux / RHEL',
        'Backup Operations',
        'Storage',
        'Data Center Operations'
    ]

    const developmentSkills = [
        'HTML5',
        'JavaScript',
        'React.js',
        'Next.js',
        'Node.js',
        'Express.js',
        'MongoDB',
        'Tailwind CSS'
    ]

    return (
        <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="w-full min-h-screen max-w-full box-border flex flex-col px-4 md:px-6 mt-10 md:mt-16"
        >

            {/* About & Profile */}
            <div className='w-full flex flex-col md:flex-row gap-8 md:gap-6 px-1 md:px-4 my-6 md:my-10'>

                {/* About Content */}
                <div className='w-full md:w-3/5 min-w-0 text-white'>

                    <h1 className='font-serif font-semibold text-2xl mb-5'>
                        About Me
                    </h1>

                    <p className='font-sans leading-relaxed text-justify'>
                        I am Pradeep Kumar, a B.Tech Computer Science and
                        Engineering graduate from Guru Jambheshwar University
                        of Science & Technology, Hisar, Haryana. I completed
                        my degree in 2021.
                    </p>

                    <p className='mt-4 font-sans leading-relaxed text-justify'>
                        Currently, I am working as a Data Center Engineer
                        at 3i Infotech, in Infrastructure Services, deployed
                        at the HPCL client site in Mumbai. My work involves
                        Data Center Operations, Virtualization, Backup
                        Operations, Storage and Infrastructure Monitoring.
                    </p>

                    <p className='mt-4 font-sans leading-relaxed text-justify'>
                        I also have a background in web development and
                        enjoy building projects using modern JavaScript
                        technologies. I believe in continuous learning,
                        exploring new technologies and taking on challenges
                        that help me grow professionally.
                    </p>

                    {/* Infrastructure Skills */}
                    <div className='mt-10'>
                        <h2 className='font-sans font-medium text-lg mb-4'>
                            Infrastructure Technologies
                        </h2>

                        <div className='flex flex-wrap gap-3'>
                            {infrastructureSkills.map((skill) => (
                                <span
                                    key={skill}
                                    className='px-3 py-2 bg-black rounded-sm shadow-sm shadow-orange-300 text-sm'
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Development Skills */}
                    <div className='mt-8'>
                        <h2 className='font-sans font-medium text-lg mb-4'>
                            Web Development Technologies
                        </h2>

                        <div className='flex flex-wrap gap-3'>
                            {developmentSkills.map((skill) => (
                                <span
                                    key={skill}
                                    className='px-3 py-2 bg-black rounded-sm shadow-sm shadow-orange-300 text-sm'
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                </div>

                {/* Profile Image & Social Links */}
                <div className='w-full md:w-2/5 flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-between gap-6 mt-4 md:mt-14'>

                    <div className='w-48 h-48 shrink-0 rounded-md p-1 bg-orange-300'>
                        <Image
                            src='/pks.png'
                            width={200}
                            height={200}
                            alt='Pradeep Kumar'
                            className='w-full h-full object-cover rounded-sm'
                        />
                    </div>

                    <div className='shrink-0'>
                        <Social />
                    </div>

                </div>

            </div>

            {/* Languages */}
            <div className='w-full px-1 md:px-4 my-8 capitalize font-serif text-white'>

                <h2 className='text-xl font-semibold mb-5'>
                    Languages Known
                </h2>

                <div className='max-w-xl overflow-x-auto'>
                    <table className='w-full text-sm text-center'>
                        <thead>
                            <tr className='border-b border-slate-500'>
                                <th className='py-3 text-left'>Language</th>
                                <th className='py-3'>Read</th>
                                <th className='py-3'>Write</th>
                                <th className='py-3'>Speak</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr className='border-b border-slate-800'>
                                <td className='py-3 text-left'>Hindi</td>
                                <td>✓</td>
                                <td>✓</td>
                                <td>✓</td>
                            </tr>

                            <tr className='border-b border-slate-800'>
                                <td className='py-3 text-left'>English</td>
                                <td>✓</td>
                                <td>✓</td>
                                <td>✓</td>
                            </tr>

                            <tr>
                                <td className='py-3 text-left'>Nepali</td>
                                <td>✓</td>
                                <td>—</td>
                                <td>✓</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>

            <hr className='my-6 border-slate-700' />

            {/* Hobbies */}
            <div className='w-full px-1 md:px-4 my-8 mb-12 capitalize font-serif text-white'>

                <h2 className='text-xl font-semibold mb-4'>
                    Hobbies & Interests
                </h2>

                <div className='flex flex-wrap gap-4'>
                    <p className='bg-black px-4 py-2 rounded-sm shadow-sm shadow-orange-300'>
                        Poetry Writing
                    </p>

                    <p className='bg-black px-4 py-2 rounded-sm shadow-sm shadow-orange-300'>
                        Playing Chess
                    </p>
                </div>

            </div>

        </motion.div>
    )
}

export default About
