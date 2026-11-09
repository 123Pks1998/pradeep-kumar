
import Social from '@/components/Social'
import { motion } from 'framer-motion'

const Experience = () => {
    const skills = [
        'VMware vSphere',
        'Nutanix Prism',
        'Backup Operations',
        'RHEL 9',
        'Linux',
        'Server Monitoring',
        'iLO',
        'Storage Operations',
        'Virtualization',
        'Data Center Operations'
    ]

    const responsibilities = [
        'Supporting day-to-day Data Center Operations and backup-related activities.',
        'Performing virtual machine operations using VMware vSphere, including VM creation, decommissioning, snapshots and storage expansion.',
        'Working with Nutanix Prism for virtual machine operations, cluster monitoring, storage containers and alerts.',
        'Performing snapshot verification and supporting maintenance and patching activities.',
        'Monitoring server health, hardware alerts and status indicators, with exposure to server management through iLO.',
        'Performing basic Linux and RHEL operational activities, including service monitoring and troubleshooting.',
        'Working with storage utilization, capacity monitoring and infrastructure-related activities.',
        'Maintaining operational reports, tracking tickets and coordinating with teams for daily data center operations.'
    ]

    return (
        <div className='w-full max-w-full px-4 md:px-8 my-10 md:my-20'>

            <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className='flex flex-col md:flex-row items-start gap-8 md:gap-6'
            >

                {/* Experience Section */}
                <div className='w-full md:flex-1 min-w-0'>

                    <h1 className='text-white text-2xl md:text-3xl font-serif font-semibold underline text-center md:text-left mb-8'>
                        professional experience
                    </h1>

                    {/* 3i Infotech */}
                    <div className='w-full bg-black rounded-md text-white font-serif p-4 md:p-6 shadow-lg shadow-orange-300'>

                        {/* Company Details */}
                        <div className='flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3'>

                            <div>
                                <h2 className='text-2xl font-semibold'>
                                    Data Center Engineer
                                </h2>

                                <h3 className='text-lg text-orange-300 mt-1'>
                                    3i Infotech
                                </h3>

                                <p className='text-sm text-slate-300 mt-1'>
                                    Infrastructure Services
                                </p>

                                <p className='text-sm text-slate-300 mt-1'>
                                    Client Site: HPCL, Mumbai
                                </p>
                            </div>

                            <div className='sm:text-right'>
                                <p className='text-sm text-slate-300'>
                                    September 2026 – Present
                                </p>

                                <p className='text-sm text-green-400 mt-1'>
                                    Full-time
                                </p>
                            </div>

                        </div>

                        {/* Responsibilities */}
                        <div className='mt-6 border-t border-slate-700 pt-5'>

                            <h3 className='text-lg font-semibold mb-3'>
                                Role & Responsibilities
                            </h3>

                            <ul className='list-disc pl-5 space-y-3 text-sm leading-relaxed text-slate-300'>
                                {responsibilities.map((item, index) => (
                                    <li key={index}>
                                        {item}
                                    </li>
                                ))}
                            </ul>

                        </div>

                        {/* Technical Skills */}
                        <div className='mt-6 border-t border-slate-700 pt-5'>

                            <h3 className='text-lg font-semibold mb-3'>
                                Technical Exposure
                            </h3>

                            <div className='flex flex-wrap gap-2 text-sm'>
                                {skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className='px-3 py-1 rounded-sm bg-slate-900 text-slate-200 shadow-sm shadow-orange-300'
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>

                        </div>

                    </div>

                </div>

                {/* Social Links */}
                <div className='w-full md:w-auto flex justify-center md:justify-end md:mt-16'>
                    <Social />
                </div>

            </motion.div>

        </div>
    )
}

export default Experience
