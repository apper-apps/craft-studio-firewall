import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import Card from '@/components/atoms/Card'
import Badge from '@/components/atoms/Badge'

const ProjectCard = ({ project, delay = 0 }) => {
  const navigate = useNavigate()

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      onClick={() => navigate(`/portfolio/${project.Id}`)}
      className="cursor-pointer"
    >
      <Card>
        <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl mb-4 overflow-hidden">
          <img 
            src={project.thumbnail} 
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="flex items-center justify-between mb-2">
          <Badge variant="primary">{project.category}</Badge>
          <span className="text-sm text-gray-400">{project.client}</span>
        </div>
        
        <h3 className="text-xl font-display font-semibold text-white mb-2">
          {project.title}
        </h3>
        
        <p className="text-gray-300 text-sm mb-4 line-clamp-2">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <Badge key={index} variant="ghost" size="small">
              {tech}
            </Badge>
          ))}
        </div>
      </Card>
    </motion.div>
  )
}

export default ProjectCard