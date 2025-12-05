import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:8000',
  headers: {
    'Content-Type': 'application/json',
  },
})

// Add token to requests if available
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// Response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token')
      localStorage.removeItem('userType')
      window.location.href = '/'
    }
    return Promise.reject(error)
  }
)

// Types based on FastAPI schemas
export interface Seller {
  name: string
  email: string
}

export interface SellerCreate extends Seller {
  password: string
}

export interface DeliveryPartner {
  name: string
  email: string
  serviceable_zip_codes: number[]
  max_handling_capacity: number
}

export interface DeliveryPartnerCreate extends DeliveryPartner {
  password: string
}

export interface ShipmentCreate {
  content: string
  weight: number
  destination: number
  client_email_id: string
  client_contact_phone?: string
}

export interface Shipment {
  id: string
  content: string
  weight: number
  destination: number
  status: string
  estimated_delivery_date: string
  timeline: ShipmentEvent[]
  seller: Seller
  delivery_partner?: DeliveryPartner
}

export interface ShipmentEvent {
  id: string
  status: string
  description?: string
  created_at: string
  location: number
}

export interface ShipmentUpdate {
  status?: string
  estimated_delivery_date?: string
}

// API functions
export const sellerAPI = {
  signup: (data: SellerCreate) => api.post('/seller/signup', data),
  login: (username: string, password: string) => 
    api.post('/seller/token', new URLSearchParams({ username, password }), {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    }),
  verify: (token: string) => api.get(`/seller/verify?token=${token}`),
  forgotPassword: (email: string) => api.get(`/seller/forgot_password?email=${email}`),
  logout: () => api.get('/seller/logout'),
}

export const partnerAPI = {
  signup: (data: DeliveryPartnerCreate) => api.post('/partner/signup', data),
  login: (username: string, password: string) => 
    api.post('/partner/token', new URLSearchParams({ username, password }), {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    }),
  verify: (token: string) => api.get(`/partner/verify?token=${token}`),
  update: (data: Partial<DeliveryPartner>) => api.post('/partner/', data),
  logout: () => api.get('/partner/logout'),
}

export const shipmentAPI = {
  create: (data: ShipmentCreate) => api.post('/shipment/', data),
  get: (id: string) => api.get(`/shipment/?id=${id}`),
  track: (id: string) => api.get(`/shipment/track?id=${id}`),
  update: (id: string, data: ShipmentUpdate) => api.patch(`/shipment/?id=${id}`, data),
  cancel: (id: string) => api.get(`/shipment/cancel?id=${id}`),
  addTag: (id: string, tagName: string) => api.get(`/shipment/tag?id=${id}&tag_name=${tagName}`),
  removeTag: (id: string, tagName: string) => api.delete(`/shipment/tag?id=${id}&tag_name=${tagName}`),
  getTagged: (tagName: string) => api.get(`/shipment/tagged?tag_name=${tagName}`),
  getByUser: () => api.get('/shipment/my-shipments'), // For sellers to get their shipments
  getAssigned: () => api.get('/shipment/assigned'), // For partners to get assigned shipments
  submitReview: (token: string, rating: number, comment?: string) => {
    const formData = new FormData()
    formData.append('rating', rating.toString())
    if (comment) formData.append('comment', comment)
    return api.post(`/shipment/review?token=${token}`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    })
  }
}

export default api