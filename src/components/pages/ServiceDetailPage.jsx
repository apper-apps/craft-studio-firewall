import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import Header from '@/components/organisms/Header'
import Footer from '@/components/organisms/Footer'
import Button from '@/components/atoms/Button'
import Card from '@/components/atoms/Card'
import Badge from '@/components/atoms/Badge'
import ApperIcon from '@/components/ApperIcon'
import { serviceService } from '@/services/api/serviceService'
import Loading from '@/components/ui/Loading'
import Error from '@/components/ui/Error'

const ServiceDetailPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [service, setService] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const loadService = async () => {
    try {
      setError('')
      setLoading(true)
      const data = await serviceService.getById(parseInt(id))
      setService(data)
    } catch (err) {
      setError('Service not found. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadService()
  }, [id])

  if (loading) return <Loading />
  if (error) return <Error message={error} onRetry={loadService} />
  if (!service) return <Error message="Service not found" onRetry={() => navigate('/')} />

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We analyze your requirements and create a detailed project roadmap.'
    },
    {
      step: '02',
      title: 'Design & Prototype',
      description: 'Our designers create stunning visuals and interactive prototypes.'
    },
    {
      step: '03',
      title: 'Development',
      description: 'Expert developers bring the design to life with clean, scalable code.'
    },
    {
      step: '04',
      title: 'Testing & Launch',
      description: 'Rigorous testing ensures quality before we launch your project.'
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
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-2xl mb-8">
              <ApperIcon name={service.icon} className="w-10 h-10 text-white" />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              <span className="gradient-text">{service.title}</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              {service.description}
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
                onClick={() => navigate('/')}
              >
                View All Services
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-display font-bold mb-6">
              <span className="gradient-text">What's Included</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need for a successful project, delivered with attention to detail.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card>
                  <ApperIcon name="Check" className="w-8 h-8 text-success mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {feature}
                  </h3>
                  <p className="text-gray-300">
                    Professional implementation with attention to detail and best practices.
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
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
              <span className="gradient-text">Our Process</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A proven methodology that ensures your project is delivered on time, 
              on budget, and exceeds expectations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center">
                  <div className="text-4xl font-display font-bold gradient-text mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-300">
                    {step.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Card className="text-center">
              <Badge variant="primary" className="mb-6">
                Starting Price
              </Badge>
              
              <div className="mb-6">
                <span className="text-gray-400">From $</span>
                <span className="text-5xl font-display font-bold gradient-text">
                  {service.startingPrice.toLocaleString()}
                </span>
              </div>
              
              <p className="text-xl text-gray-300 mb-8">
                Final pricing depends on project scope and specific requirements. 
                Get a detailed quote tailored to your needs.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="primary" 
                  size="large"
                  onClick={() => navigate('/contact')}
                >
                  Get Custom Quote
                </Button>
                <Button 
                  variant="secondary" 
                  size="large"
                  onClick={() => navigate('/#pricing')}
                >
                  View All Pricing
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default ServiceDetailPage