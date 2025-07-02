import React from 'react'
import { motion } from 'framer-motion'
import Card from '@/components/atoms/Card'
import ApperIcon from '@/components/ApperIcon'

const AboutSection = () => {
  const stats = [
    { label: 'Projects Completed', value: '150+', icon: 'Trophy' },
    { label: 'Happy Clients', value: '100+', icon: 'Users' },
    { label: 'Years Experience', value: '8+', icon: 'Calendar' },
    { label: 'Success Rate', value: '98%', icon: 'Target' },
  ]

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'Creative Director',
      expertise: 'UI/UX Design, Brand Strategy',
      icon: 'Palette'
    },
    {
      name: 'Mike Chen',
      role: 'Lead Developer',
      expertise: 'Full-Stack Development, DevOps',
      icon: 'Code'
    },
    {
      name: 'Emma Davis',
      role: 'Project Manager',
      expertise: 'Client Relations, Quality Assurance',
      icon: 'Users'
    }
  ]

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            <span className="gradient-text">About Craft Studio</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We're a passionate team of designers, developers, and strategists who believe 
            in the power of exceptional digital experiences. With over 8 years of combined 
            experience, we've helped businesses of all sizes achieve their digital goals.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full mb-4">
                  <ApperIcon name={stat.icon} className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-display font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-300 text-sm">
                  {stat.label}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Team Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-display font-bold text-white mb-6">
              Meet Our Team
            </h3>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Our diverse team brings together creativity, technical expertise, and business 
              acumen to deliver solutions that not only look great but perform exceptionally. 
              We're committed to staying at the forefront of technology and design trends.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <ApperIcon name="CheckCircle" className="w-6 h-6 text-success mr-4 flex-shrink-0" />
                <span className="text-gray-300">Agile development methodology</span>
              </div>
              <div className="flex items-center">
                <ApperIcon name="CheckCircle" className="w-6 h-6 text-success mr-4 flex-shrink-0" />
                <span className="text-gray-300">24/7 support and maintenance</span>
              </div>
              <div className="flex items-center">
                <ApperIcon name="CheckCircle" className="w-6 h-6 text-success mr-4 flex-shrink-0" />
                <span className="text-gray-300">Transparent communication</span>
              </div>
            </div>
          </motion.div>

          <div className="space-y-6">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card>
                  <div className="flex items-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mr-4">
                      <ApperIcon name={member.icon} className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-1">
                        {member.name}
                      </h4>
                      <p className="text-primary font-medium mb-2">
                        {member.role}
                      </p>
                      <p className="text-gray-400 text-sm">
                        {member.expertise}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection