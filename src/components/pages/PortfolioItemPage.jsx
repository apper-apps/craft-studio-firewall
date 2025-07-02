import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import Header from '@/components/organisms/Header'
import Footer from '@/components/organisms/Footer'
import Button from '@/components/atoms/Button'
import Card from '@/components/atoms/Card'
import Badge from '@/components/atoms/Badge'
import ApperIcon from '@/components/ApperIcon'
import { projectService } from '@/services/api/projectService'
import Loading from '@/components/ui/Loading'
import Error from '@/components/ui/Error'

const PortfolioItemPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [project, setProject] = useState(null)
  const [selectedImage, setSelectedImage] = useState(0)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const loadProject = async () => {
    try {
      setError('')
      setLoading(true)
      const data = await projectService.getById(parseInt(id))
      setProject(data)
    } catch (err) {
      setError('Project not found. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadProject()
  }, [id])

  if (loading) return <Loading />
  if (error) return <Error message={error} onRetry={loadProject} />
  if (!project) return <Error message="Project not found" onRetry={() => navigate('/')} />

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
            className="max-w-6xl mx-auto"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge variant="primary" className="mb-4">
                  {project.category}
                </Badge>
                
                <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
                  <span className="gradient-text">{project.title}</span>
                </h1>
                
                <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex items-center mb-8">
                  <ApperIcon name="Building" className="w-5 h-5 text-primary mr-2" />
                  <span className="text-gray-300">Client: {project.client}</span>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologies.map((tech, index) => (
                    <Badge key={index} variant="ghost">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <Button 
                  variant="primary" 
                  size="large"
                  onClick={() => navigate('/contact')}
                >
                  Start Similar Project
                </Button>
              </div>
              
              <div>
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl overflow-hidden">
                  <img 
                    src={project.images[selectedImage]} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="flex gap-4 mt-6 overflow-x-auto pb-2">
                  {project.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden border-2 transition-colors ${
                        selectedImage === index ? 'border-primary' : 'border-transparent'
                      }`}
                    >
                      <img 
                        src={image} 
                        alt={`${project.title} ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-4xl font-display font-bold mb-6">
                <span className="gradient-text">Project Overview</span>
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                This project showcases our expertise in creating modern, scalable solutions 
                that deliver exceptional user experiences. We worked closely with the client 
                to understand their unique requirements and delivered a solution that exceeded 
                their expectations.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Card>
                  <ApperIcon name="Target" className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Challenge</h3>
                  <p className="text-gray-300">
                    Create a modern, user-friendly platform that would streamline operations 
                    and improve customer engagement.
                  </p>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card>
                  <ApperIcon name="Lightbulb" className="w-8 h-8 text-secondary mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Solution</h3>
                  <p className="text-gray-300">
                    Developed a comprehensive solution using modern technologies and 
                    best practices for optimal performance.
                  </p>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Card>
                  <ApperIcon name="TrendingUp" className="w-8 h-8 text-accent mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Results</h3>
                  <p className="text-gray-300">
                    Achieved significant improvements in user engagement, conversion rates, 
                    and overall business metrics.
                  </p>
                </Card>
              </motion.div>
            </div>

            {/* Client Testimonial */}
            {project.testimonial && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="text-center">
                  <ApperIcon name="Quote" className="w-12 h-12 text-primary mx-auto mb-6" />
                  <blockquote className="text-xl text-gray-300 mb-6 italic leading-relaxed">
                    "{project.testimonial}"
                  </blockquote>
                  <div className="text-white font-semibold">
                    — {project.client}
                  </div>
                </Card>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-surface/30 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-display font-bold mb-6">
              <span className="gradient-text">Ready to Start Your Project?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's create something amazing together. Get in touch to discuss your project 
              and discover how we can help bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="primary" 
                size="large"
                onClick={() => navigate('/contact')}
              >
                Start Your Project
              </Button>
              <Button 
                variant="secondary" 
                size="large"
                onClick={() => navigate('/#portfolio')}
              >
                View More Projects
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default PortfolioItemPage