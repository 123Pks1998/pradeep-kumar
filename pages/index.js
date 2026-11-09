import Link from "next/link"
import { motion } from "framer-motion"
import Social from "@/components/Social"

export default function Home() {
  return (
    <>
      <motion.div
  initial={{ y: 10, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.7, delay: 0.2 }}
  className="w-full max-w-full box-border flex flex-col md:flex-row items-start justify-between gap-6 px-4 md:px-6 mt-28"
>
  {/* Left Content */}
  <div className="w-full min-w-0 md:flex-1">
          <div className="w-fit max-w-full">
            <div className="md:pl-4 py-2 text-white">
              <h4 className="font-serif">
                Hi, I'm Pradeep Kumar.
              </h4>

              <h1 className="font-serif font-semibold text-2xl md:text-3xl lg:text-4xl mt-2">
                Data Center Engineer
              </h1>

              <br />

              <p className="font-serif md:w-96 mt-2 text-base leading-relaxed">
                B.Tech Computer Science Engineer working in Data Center
                Operations, with hands-on exposure to VMware vSphere,
                Nutanix, Linux (RHEL), and IT Infrastructure.
              </p>
            </div>

            <div className="mt-4 md:w-64 font-mono text-sm">
              <div className="ml-4 md:mr-1 md:justify-center">
                <Link
                  href="/About"
                  className="text-white mr-8 shadow-md shadow-orange-300 hover:shadow-orange-400 rounded-sm p-1"
                >
                  About Me
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        {/* Social Links */}
<div className="w-full md:w-auto shrink-0 mt-2 flex justify-center md:justify-end">
  <Social />
</div>
      </motion.div>
    </>
  )
}