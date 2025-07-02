import React, { useState } from 'react'
import { toast } from 'react-toastify'
import Button from '@/components/atoms/Button'
import Input from '@/components/atoms/Input'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    budget: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Thank you! We'll be in touch within 24 hours.")
      setFormData({
        name: '',
        email: '',
        company: '',
        service: '',
        budget: '',
        message: ''
      })
      setIsSubmitting(false)
    }, 1500)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Full Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="John Doe"
          required
        />
        <Input
          label="Email Address"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="john@example.com"
          required
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          placeholder="Acme Corp"
        />
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-300">
            Service Needed
          </label>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="block w-full px-4 py-3 glass-card text-white border border-white/20 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200"
            required
          >
            <option value="">Select a service</option>
            <option value="website">Website Development</option>
            <option value="webapp">Web Application</option>
            <option value="ecommerce">E-commerce Platform</option>
            <option value="mobile">Mobile App</option>
            <option value="consulting">Consulting</option>
          </select>
        </div>
      </div>
      
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-300">
          Project Budget
        </label>
        <select
          name="budget"
          value={formData.budget}
          onChange={handleChange}
          className="block w-full px-4 py-3 glass-card text-white border border-white/20 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200"
          required
        >
          <option value="">Select budget range</option>
          <option value="5k-10k">$5,000 - $10,000</option>
          <option value="10k-25k">$10,000 - $25,000</option>
          <option value="25k-50k">$25,000 - $50,000</option>
          <option value="50k+">$50,000+</option>
        </select>
      </div>
      
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-300">
          Project Details
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          placeholder="Tell us about your project goals, timeline, and any specific requirements..."
          className="block w-full px-4 py-3 glass-card text-white placeholder-gray-400 border border-white/20 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200 resize-none"
          required
        />
      </div>
      
      <Button
        type="submit"
        variant="primary"
        size="large"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  )
}

export default ContactForm