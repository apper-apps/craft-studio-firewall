import { testimonials } from '@/services/mockData/testimonials.json'

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

export const testimonialService = {
  async getAll() {
    await delay(280)
    return [...testimonials]
  },

  async getById(id) {
    await delay(200)
    const testimonial = testimonials.find(t => t.Id === id)
    if (!testimonial) {
      throw new Error('Testimonial not found')
    }
    return { ...testimonial }
  },

  async create(testimonialData) {
    await delay(400)
    const newId = Math.max(...testimonials.map(t => t.Id)) + 1
    const newTestimonial = { Id: newId, ...testimonialData }
    testimonials.push(newTestimonial)
    return { ...newTestimonial }
  },

  async update(id, testimonialData) {
    await delay(300)
    const index = testimonials.findIndex(t => t.Id === id)
    if (index === -1) {
      throw new Error('Testimonial not found')
    }
    testimonials[index] = { ...testimonials[index], ...testimonialData }
    return { ...testimonials[index] }
  },

  async delete(id) {
    await delay(250)
    const index = testimonials.findIndex(t => t.Id === id)
    if (index === -1) {
      throw new Error('Testimonial not found')
    }
    testimonials.splice(index, 1)
    return true
  }
}