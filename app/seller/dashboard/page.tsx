'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { shipmentAPI, sellerAPI } from '@/lib/api'

export default function SellerDashboard() {
  const [shipments, setShipments] = useState([])
  const [loading, setLoading] = useState(true)
  const [showCreateForm, setShowCreateForm] = useState(false)
  const [newShipment, setNewShipment] = useState({
    content: '',
    weight: '',
    destination: '',
    client_email: '',
    client_phone: ''
  })

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) {
      window.location.href = '/seller/login'
      return
    }
    loadShipments()
  }, [])

  const loadShipments = async () => {
    try {
      // Try to fetch from API first
      try {
        const response = await shipmentAPI.getByUser()
        setShipments(response.data || [])
      } catch (apiError) {
        // Fallback to localStorage if API fails
        console.log('API not available, using localStorage')
        const recentShipments = JSON.parse(localStorage.getItem('recentShipments') || '[]')
        setShipments(recentShipments)
      }
    } catch (error) {
      console.error('Failed to load shipments:', error)
      setShipments([])
    }
    setLoading(false)
  }

  const handleCreateShipment = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const data = {
        content: newShipment.content,
        weight: parseFloat(newShipment.weight),
        destination: newShipment.destination ? parseInt(newShipment.destination) : 11001,
        client_email_id: newShipment.client_email || 'customer@example.com',
        client_contact_phone: newShipment.client_phone || null
      }
      const response = await shipmentAPI.create(data)
      console.log('Shipment created:', response.data)
      
      // Store the created shipment locally
      const createdShipment = {
        id: response.data.id || `ship_${Date.now()}`,
        content: data.content,
        weight: data.weight,
        destination: data.destination,
        status: 'placed',
        estimated_delivery_date: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString(),
        created_at: new Date().toISOString(),
        client_email_id: data.client_email_id
      }
      
      const existingShipments = JSON.parse(localStorage.getItem('recentShipments') || '[]')
      const updatedShipments = [createdShipment, ...existingShipments]
      localStorage.setItem('recentShipments', JSON.stringify(updatedShipments))
      
      setNewShipment({ content: '', weight: '', destination: '', client_email: '', client_phone: '' })
      setShowCreateForm(false)
      loadShipments()
      alert('Shipment created successfully!')
    } catch (error) {
      console.error('Failed to create shipment:', error)
      const errorMsg = error.response?.data?.detail || 'Failed to create shipment. Please try again.'
      alert(errorMsg)
    }
    setLoading(false)
  }

  const handleLogout = async () => {
    try {
      await sellerAPI.logout()
    } catch (error) {
      console.error('Logout failed')
    }
    localStorage.removeItem('token')
    localStorage.removeItem('userType')
    window.location.href = '/'
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-blue-600/30 border-t-blue-600 rounded-full animate-spin" />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <header className="bg-white/80 backdrop-blur-sm border-b border-white/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h1 className="text-xl font-bold text-gray-900">Seller Dashboard</h1>
            </div>
            <Button onClick={handleLogout} variant="ghost" className="text-gray-600 hover:text-gray-900">
              Sign Out
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/90 transition-all">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Shipments</p>
                <p className="text-3xl font-bold text-gray-900">{shipments.length}</p>
                <p className="text-xs text-green-600 mt-1">+12% from last month</p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
            </div>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/90 transition-all">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">In Transit</p>
                <p className="text-3xl font-bold text-gray-900">{shipments.filter(s => s.status === 'in_transit').length}</p>
                <p className="text-xs text-orange-600 mt-1">Active deliveries</p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/90 transition-all">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Delivered</p>
                <p className="text-3xl font-bold text-gray-900">{shipments.filter(s => s.status === 'delivered').length}</p>
                <p className="text-xs text-green-600 mt-1">98% success rate</p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/90 transition-all">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">This Month</p>
                <p className="text-3xl font-bold text-gray-900">$2,450</p>
                <p className="text-xs text-purple-600 mt-1">+8% revenue growth</p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-900">Recent Shipments</h2>
                <Button 
                  onClick={() => setShowCreateForm(true)}
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
                >
                  Create Shipment
                </Button>
              </div>
              
              <div className="space-y-4">
                {shipments.map((shipment) => (
                  <div key={shipment.id} className="border border-gray-200 rounded-xl p-6 hover:bg-gray-50 transition-all hover:shadow-md">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h4 className="font-semibold text-gray-900">#{shipment.id.slice(-8)}</h4>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            shipment.status === 'delivered' ? 'bg-green-100 text-green-800' :
                            shipment.status === 'in_transit' ? 'bg-orange-100 text-orange-800' :
                            shipment.status === 'out_for_delivery' ? 'bg-blue-100 text-blue-800' :
                            'bg-gray-100 text-gray-800'
                          }`}>
                            {shipment.status.replace('_', ' ').toUpperCase()}
                          </span>
                        </div>
                        <p className="text-gray-700 mb-2">{shipment.content}</p>
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <span>Weight: {shipment.weight}kg</span>
                          <span>•</span>
                          <span>Destination: {shipment.destination}</span>
                          <span>•</span>
                          <span>Created: {new Date(shipment.created_at).toLocaleDateString()}</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          Track
                        </Button>
                        {shipment.status !== 'delivered' && shipment.status !== 'cancelled' && (
                          <Button size="sm" variant="outline" className="text-red-600 hover:text-red-700">
                            Cancel
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Button 
                  onClick={() => setShowCreateForm(true)}
                  className="w-full justify-start bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
                >
                  New Shipment
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  View Reports
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  Settings
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showCreateForm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-gray-900">Create New Shipment</h3>
              <Button 
                variant="ghost" 
                onClick={() => setShowCreateForm(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                ×
              </Button>
            </div>
            
            <form onSubmit={handleCreateShipment} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Content</label>
                <input
                  type="text"
                  placeholder="What are you shipping?"
                  value={newShipment.content}
                  onChange={(e) => setNewShipment({...newShipment, content: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Weight (kg)</label>
                <input
                  type="number"
                  step="0.1"
                  min="0.1"
                  max="25"
                  placeholder="Package weight"
                  value={newShipment.weight}
                  onChange={(e) => setNewShipment({...newShipment, weight: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Destination ZIP (Optional)</label>
                <input
                  type="text"
                  placeholder="Destination ZIP code"
                  value={newShipment.destination}
                  onChange={(e) => setNewShipment({...newShipment, destination: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Client Email</label>
                <input
                  type="email"
                  placeholder="Customer email address"
                  value={newShipment.client_email}
                  onChange={(e) => setNewShipment({...newShipment, client_email: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Client Phone (Optional)</label>
                <input
                  type="tel"
                  placeholder="Customer phone number"
                  value={newShipment.client_phone}
                  onChange={(e) => setNewShipment({...newShipment, client_phone: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex gap-3 pt-4">
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={() => setShowCreateForm(false)}
                  className="flex-1"
                >
                  Cancel
                </Button>
                <Button 
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
                >
                  Create Shipment
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}