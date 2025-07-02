import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import Header from '@/components/organisms/Header'
import Footer from '@/components/organisms/Footer'
import ContactForm from '@/components/molecules/ContactForm'
import Card from '@/components/atoms/Card'
import Button from '@/components/atoms/Button'
import ApperIcon from '@/components/ApperIcon'

const ContactPage = () => {
  const navigate = useNavigate()

  const contactInfo = [
    {
      icon: 'Mail',
      title: 'Email Us',
      value: 'hello@craftstudio.com',
      description: 'Drop us a line anytime'
    },
    {
      icon: 'Phone',
      title: 'Call Us',
      value: '+1 (555) 123-4567',
      description: 'Mon-Fri from 9am to 6pm'
    },
    {
      icon: 'MapPin',
      title: 'Visit Us',
      value: '123 Creative Street, Design City, DC 12345',
      description: 'Come say hello at our office'
    }
  ]

  const faqs = [
    {
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary based on scope and complexity. Simple websites typically take 2-4 weeks, while complex web applications can take 8-16 weeks.'
    },
    {
      question: 'Do you provide ongoing support?',
      answer: 'Yes! We offer comprehensive support and maintenance packages to keep your project running smoothly after launch.'
    },
    {
      question: 'Can you work with our existing team?',
      answer: 'Absolutely! We love collaborating with in-house teams and can integrate seamlessly into your existing workflow.'
    },
    {
      question: 'What technologies do you use?',
      answer: 'We use modern, proven technologies including React, Node.js, Python, and various cloud platforms to ensure scalability and performance.'
    }
  ]

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-background to-surface/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              <span className="gradient-text">Let's Create</span>
              <br />
              <span className="text-white">Something Amazing</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your digital presence? We'd love to hear about your project 
              and discuss how we can help bring your vision to life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card>
                  <h2 className="text-3xl font-display font-bold text-white mb-6">
                    Tell Us About Your Project
                  </h2>
                  <p className="text-gray-300 mb-8">
                    Fill out the form below and we'll get back to you within 24 hours 
                    with a detailed proposal.
                  </p>
                  <ContactForm />
                </Card>
              </motion.div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-2xl font-display font-bold text-white mb-6">
                  Get In Touch
                </h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <Card key={index} hover={false}>
                      <div className="flex items-start">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                          <ApperIcon name={info.icon} className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="text-white font-semibold mb-1">
                            {info.title}
                          </h4>
                          <p className="text-primary mb-1">
                            {info.value}
                          </p>
                          <p className="text-gray-400 text-sm">
                            {info.description}
                          </p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Card>
                  <h4 className="text-xl font-semibold text-white mb-4">
                    Quick Response Time
                  </h4>
                  <p className="text-gray-300 mb-4">
                    We typically respond to inquiries within 2-4 hours during business hours.
                  </p>
                  <div className="flex items-center text-success">
                    <ApperIcon name="Clock" className="w-4 h-4 mr-2" />
                    <span className="text-sm">Usually replies in 2 hours</span>
                  </div>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <Card>
                  <h4 className="text-xl font-semibold text-white mb-4">
                    Prefer to Talk?
                  </h4>
                  <p className="text-gray-300 mb-4">
                    Schedule a free consultation call to discuss your project in detail.
                  </p>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    icon="Calendar"
                  >
                    Schedule Call
                  </Button>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-surface/30 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-display font-bold mb-6">
              <span className="gradient-text">Frequently Asked Questions</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Got questions? We've got answers. Here are some common questions 
              we receive from our clients.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-gray-400 mb-4">
              Don't see your question here?
            </p>
            <Button 
              variant="outline"
              onClick={() => {
                const element = document.querySelector('form')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                }
              }}
            >
              Ask Us Anything
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default ContactPage