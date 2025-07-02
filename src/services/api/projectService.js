import { projects } from '@/services/mockData/projects.json'

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

export const projectService = {
  async getAll() {
    await delay(350)
    return [...projects]
  },

  async getById(id) {
    await delay(250)
    const project = projects.find(p => p.Id === id)
    if (!project) {
      throw new Error('Project not found')
    }
    return { ...project }
  },

  async create(projectData) {
    await delay(450)
    const newId = Math.max(...projects.map(p => p.Id)) + 1
    const newProject = { Id: newId, ...projectData }
    projects.push(newProject)
    return { ...newProject }
  },

  async update(id, projectData) {
    await delay(350)
    const index = projects.findIndex(p => p.Id === id)
    if (index === -1) {
      throw new Error('Project not found')
    }
    projects[index] = { ...projects[index], ...projectData }
    return { ...projects[index] }
  },

  async delete(id) {
    await delay(300)
    const index = projects.findIndex(p => p.Id === id)
    if (index === -1) {
      throw new Error('Project not found')
    }
    projects.splice(index, 1)
    return true
  }
}