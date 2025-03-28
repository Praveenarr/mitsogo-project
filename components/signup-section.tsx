import Link from "next/link"
import { ChevronRight } from "lucide-react"

export default function SignupSection() {
  return (
    <section className="w-full py-16 bg-[#0a0e1a] text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Sign up and start the journey</h2>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto">
          <input type="email" placeholder="Your Work Email" className="w-full px-4 py-3 rounded text-black" />
          <button className="w-full sm:w-auto bg-red-600 hover:bg-red-700 px-6 py-3 rounded font-medium signup">
            GET STARTED
          </button>
        </div>

        <div className="mt-4 text-sm">
          <span className="text-gray-400">No credit cards required.</span>{" "}
          <Link href="#" className="text-red-500 hover:text-red-400 inline-flex items-center">
            Request a demo <ChevronRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}

