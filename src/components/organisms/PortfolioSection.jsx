import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import ProjectCard from '@/components/molecules/ProjectCard'
import Badge from '@/components/atoms/Badge'
import { projectService } from '@/services/api/projectService'
import Loading from '@/components/ui/Loading'
import Error from '@/components/ui/Error'
import Empty from '@/components/ui/Empty'

const PortfolioSection = () => {
  const [projects, setProjects] = useState([])
  const [filteredProjects, setFilteredProjects] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const loadProjects = async () => {
    try {
      setError('')
      setLoading(true)
      const data = await projectService.getAll()
      setProjects(data)
      setFilteredProjects(data)
    } catch (err) {
      setError('Failed to load portfolio. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadProjects()
  }, [])

  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredProjects(projects)
    } else {
      setFilteredProjects(projects.filter(project => project.category === selectedCategory))
    }
  }, [selectedCategory, projects])

  const categories = ['All', ...new Set(projects.map(project => project.category))]

  if (loading) return <Loading />
  if (error) return <Error message={error} onRetry={loadProjects} />
  if (projects.length === 0) return <Empty message="No portfolio items available" />

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            <span className="gradient-text">Our Portfolio</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Discover our latest projects and see how we've helped businesses transform 
            their digital presence.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className="transition-all duration-200"
              >
                <Badge 
                  variant={selectedCategory === category ? 'primary' : 'ghost'}
                  className="cursor-pointer hover:scale-105"
                >
                  {category}
                </Badge>
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard 
              key={project.Id} 
              project={project} 
              delay={index * 0.1} 
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default PortfolioSection