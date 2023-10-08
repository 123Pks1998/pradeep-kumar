import Link from "next/link"
import { motion } from "framer-motion"
import Social from "@/components/Social"
export default function Home() {
  return (
    <>
      <motion.div initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }} className="flex mt-28  ">
        <div className="w-3/4  md:ml-10 ml-8">
          <div className="pl-4 py-2 text-white">
            <h4 className="font-serif ">Hi, my name is</h4>
            <h1 className="font-serif font-semibold text-5xl mt-2">Pradeep Kumar</h1>
            <h1 className="font-serif md:w-96 mt-2">I am web developer with 1.5 year of experience in react & next js. i have strong knowledge in front-end & back-end development with user-friendly and responsive web application.</h1>
          </div>
          <div className="mt-4 md:w-64  font-mono text-sm">
            <div className="ml-4 md:mr-1 md:justify-center">
              <Link href='/About' className="text-white mr-8 shadow-md shadow-orange-300
             hover:shadow-orange-400 rounded-sm p-1 ">
                More About Me
              </Link>
            </div>

          </div>
        </div>

        <div className="w-1/4 md:mr-4 mt-2 flex justify-end">
          <Social />
        </div>
      </motion.div>
    </>
  )
}
