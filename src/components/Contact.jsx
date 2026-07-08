import {useState } from 'react'
import { MdOutlineMailOutline } from "react-icons/md"
import { LuPhone } from "react-icons/lu"
import { GoLocation } from "react-icons/go"
import emailjs from "@emailjs/browser"

const Contact = () => {
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // EmailJS integration here later
    console.log(formData)
    setSent(true)
    setTimeout(() => setSent(false), 3000)
  }

  const contactInfo = [
    {
      icon: <MdOutlineMailOutline size={28} />,
      title: "Email Address",
      value: "rejoreji98@gmail.com",
    },
    {
      icon: <LuPhone size={28} />,
      title: "Phone",
      value: "+91 79077 37472",
    },
    {
      icon: <GoLocation size={28} />,
      title: "Location",
      value: "Bangalore, India",
    },
  ]

  return (
    <section className="min-h-screen bg-white py-30" id="contact">
        <p className='font-thin md:text-9xl text-[80px] px-10 text-center md:flex'>Contact</p>
        <div className="max-w-6xl mx-auto py-15">


        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

    
          <div className="md:col-span-2 border border-gray-200 p-8">
            <h3 className="text-2xl font-normal text-gray-900 mb-6">
              Send a message
            </h3>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">


              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-semibold text-gray-700">
                    First Name<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="border border-gray-300  px-4 py-3 text-sm focus:outline-none focus:border-black transition"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-semibold text-gray-700">
                    Last Name<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="border border-gray-300  px-4 py-3 text-sm focus:outline-none focus:border-black transition"
                  />
                </div>
              </div>


              <div className="flex flex-col gap-1">
                <label className="text-sm font-semibold text-gray-700">
                  Email<span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="yourmail@whichevermail.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="border border-gray-300  px-4 py-3 text-sm focus:outline-none focus:border-black transition"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-sm font-semibold text-gray-700">
                  Subject<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Write your subject here.."
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="border border-gray-300  px-4 py-3 text-sm focus:outline-none focus:border-black transition"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-sm font-semibold text-gray-700">
                  Message<span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  placeholder="Write your message here.."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="border border-gray-300  px-4 py-3 text-sm focus:outline-none focus:border-black transition resize-none"
                />
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-black hover:bg-[#F9452E] hover:text-white text-white font-light px-10 py-3 transition-all duration-400 cursor-pointer"
                >
                  {sent ? "Message Sent!" : "Submit Now"}
                </button>
              </div>

            </form>
          </div>

          <div className="flex flex-col gap-4">
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="border border-gray-200 p-6 flex flex-col items-center justify-center gap-3 flex-1"
              >
                <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center text-gray-700">
                  {item.icon}
                </div>
                <h4 className="font-normal text-gray-900 text-lg">
                  {item.title}
                </h4>
                <p className="text-gray-500 text-sm text-center">
                  {item.value}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact
