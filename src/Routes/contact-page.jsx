import { useState } from "react"
import { motion } from "framer-motion"
import emailjs from '@emailjs/browser';
import { Send, CheckCircle, Mail, Instagram, Twitter } from "lucide-react"
import Footer from "../Components/Footer"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  })
  const [formStatus, setFormStatus] = useState("idle") // idle, submitting, success
  const [focusedField, setFocusedField] = useState(null)


  const handleChange = (e) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   setFormStatus("submitting")

  //   // Simulate form submission
  //   setTimeout(() => {
  //     setFormStatus("success")
  //     // Reset form after 3 seconds
  //     setTimeout(() => {
  //       setFormStatus("idle")
  //       setFormState({
  //         firstName: "",
  //         lastName: "",
  //         email: "",
  //         message: "",
  //       })
  //     }, 3000)
  //   }, 1500)
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.init({publicKey:'Xz_OhX-aqHDPIsx-9', blockHeadless: true});
    emailjs.send('service_tow07qb', 'template_2lncth4', {name: formState.firstName + " " + formState.lastName, email: formState.email, message: formState.message})
      .then(
        (response) => {
          console.log('SUCCESS! ' + response.text);
          setFormStatus("success")
        },
        (error) => {
          alert("Unable to send: " + error.text);
          console.log('FAILED...', error.text);
        },
      );
    
  };

  return (
    <div className="flex flex-col min-h-[90vh] bg-gradient-to-br from-indigo-50">
      <div className="flex flex-col flex-grow md:flex-row ">
        {/* Animated Illustration Side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 flex items-center justify-center p-8 relative overflow-hidden"
        >
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 mb-6"
            >
              Let's Connect
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-slate-600 max-w-md"
            >
              <p className="mb-4">I'm always open to new opportunities, collaborations, or just a friendly chat.</p>
              <p className="mb-6">Fill out the form, and I'll get back to you as soon as possible!</p>

              <div className="flex items-center space-x-4 mb-3">
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                  <Mail className="h-5 w-5 text-purple-600" />
                </div>
                <span>aminharsh317@gmail.com</span>
              </div>

              <div className="flex items-center space-x-4 mb-3">
                <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center">
                  <Instagram className="h-5 w-5 text-pink-600" />
                </div>
                <span>@aminharsh317</span>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center">
                  <Twitter className="h-5 w-5 text-pink-600" />
                </div>
                <span>@aminharsh3171</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Form Side */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 flex items-center justify-center p-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="w-full max-w-md"
          >
            {formStatus === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-2xl shadow-xl p-8 text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                  className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
                >
                  <CheckCircle className="h-10 w-10 text-green-600" />
                </motion.div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Message Sent!</h2>
                <p className="text-gray-600">Thank you for reaching out. I'll get back to you soon.</p>
              </motion.div>
            ) : (
              <motion.form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Send a Message</h2>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="relative">
                    <label htmlFor="firstName" className="text-sm font-medium text-gray-700">
                      First Name
                    </label>
                    <div className="mt-1 relative">
                      <motion.div
                        animate={focusedField === "firstName" ? { scale: 1.03 } : { scale: 1 }}
                        className="absolute inset-0 bg-purple-100 rounded-md -z-10"
                        style={{ opacity: focusedField === "firstName" ? 0.5 : 0 }}
                      />
                      <input
                        id="firstName"
                        name="firstName"
                        value={formState.firstName}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("firstName")}
                        onBlur={() => setFocusedField(null)}
                        className="w-full border border-gray-400 p-2 rounded-md"
                        required
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <label htmlFor="lastName" className="text-sm font-medium text-gray-700">
                      Last Name
                    </label>
                    <div className="mt-1 relative">
                      <motion.div
                        animate={focusedField === "lastName" ? { scale: 1.03 } : { scale: 1 }}
                        className="absolute inset-0 bg-purple-100 rounded-md -z-10"
                        style={{ opacity: focusedField === "lastName" ? 0.5 : 0 }}
                      />
                      <input
                        id="lastName"
                        name="lastName"
                        value={formState.lastName}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("lastName")}
                        onBlur={() => setFocusedField(null)}
                        className="w-full border border-gray-400 p-2 rounded-md"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <div className="mt-1 relative">
                    <motion.div
                      animate={focusedField === "email" ? { scale: 1.03 } : { scale: 1 }}
                      className="absolute inset-0 bg-purple-100 rounded-md -z-10"
                      style={{ opacity: focusedField === "email" ? 0.5 : 0 }}
                    />
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("email")}
                      onBlur={() => setFocusedField(null)}
                      className="w-full border border-gray-400 p-2 rounded-md"
                      required
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <div className="mt-1 relative">
                    <motion.div
                      animate={focusedField === "message" ? { scale: 1.03 } : { scale: 1 }}
                      className="absolute inset-0 bg-purple-100 rounded-md -z-10"
                      style={{ opacity: focusedField === "message" ? 0.5 : 0 }}
                    />
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formState.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("message")}
                      onBlur={() => setFocusedField(null)}
                      className="w-full border border-gray-400 p-2 rounded-md"
                      required
                    />
                  </div>
                </div>

                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <button
                    type="submit"
                    disabled={formStatus === "submitting"}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-300"
                  >
                    {formStatus === "submitting" ? (
                      <div className="flex items-center justify-center">
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </div>
                    ) : (
                      <div className="flex items-center justify-center">
                        <Send className="mr-2 h-5 w-5" />
                        Send Message
                      </div>
                    )}
                  </button>
                </motion.div>
              </motion.form>
            )}
          </motion.div>
        </motion.div>
        
      </div>
      <Footer />
    </div>
  )
}

