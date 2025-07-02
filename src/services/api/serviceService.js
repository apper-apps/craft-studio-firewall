import { services } from '@/services/mockData/services.json'

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

export const serviceService = {
  async getAll() {
    await delay(300)
    return [...services]
  },

  async getById(id) {
    await delay(200)
    const service = services.find(s => s.Id === id)
    if (!service) {
      throw new Error('Service not found')
    }
    return { ...service }
  },

  async create(serviceData) {
    await delay(400)
    const newId = Math.max(...services.map(s => s.Id)) + 1
    const newService = { Id: newId, ...serviceData }
    services.push(newService)
    return { ...newService }
  },

  async update(id, serviceData) {
    await delay(300)
    const index = services.findIndex(s => s.Id === id)
    if (index === -1) {
      throw new Error('Service not found')
    }
    services[index] = { ...services[index], ...serviceData }
    return { ...services[index] }
  },

  async delete(id) {
    await delay(250)
    const index = services.findIndex(s => s.Id === id)
    if (index === -1) {
      throw new Error('Service not found')
    }
    services.splice(index, 1)
    return true
  }
}