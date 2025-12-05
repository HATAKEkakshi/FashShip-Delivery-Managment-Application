'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { shipmentAPI, partnerAPI } from '@/lib/api'

export default function PartnerDashboard() {
  const [shipments, setShipments] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedShipment, setSelectedShipment] = useState(null)
  const [showUpdateModal, setShowUpdateModal] = useState(false)
  const [newStatus, setNewStatus] = useState('')

  useEffect(() => {
    // Check if user is logged in
    const token = localStorage.getItem('token')
    if (!token) {
      window.location.href = '/partner/login'
      return
    }
    loadShipments()
  }, [])

  const loadShipments = async () => {
    try {
      // Try to fetch assigned shipments from API
      try {
        const response = await shipmentAPI.getAssigned()
        setShipments(response.data || [])
      } catch (apiError) {
        // Fallback: Show shipments from localStorage that need delivery
        console.log('API not available, using localStorage for partner')
        const allShipments = JSON.parse(localStorage.getItem('recentShipments') || '[]')
        // Filter shipments that are not delivered (simulate assignment)
        const assignedShipments = allShipments.filter(s => 
          s.status !== 'delivered' && s.status !== 'cancelled'
        )
        setShipments(assignedShipments)
      }
    } catch (error) {
      console.error('Failed to load shipments:', error)
      setShipments([])
    }
    setLoading(false)
  }

  const handleUpdateStatus = async (e) => {
    e.preventDefault()
    if (!selectedShipment || !newStatus) return
    
    try {
      try {
        await shipmentAPI.update(selectedShipment.id, { status: newStatus })
      } catch (apiError) {
        console.log('API update failed, updating localStorage')
      }
      
      // Update localStorage regardless of API success
      const allShipments = JSON.parse(localStorage.getItem('recentShipments') || '[]')
      const updatedShipments = allShipments.map(s => 
        s.id === selectedShipment.id ? { ...s, status: newStatus } : s
      )
      localStorage.setItem('recentShipments', JSON.stringify(updatedShipments))
      
      setShowUpdateModal(false)
      setSelectedShipment(null)
      setNewStatus('')
      loadShipments()
      alert('Shipment status updated successfully!')
    } catch (error) {
      console.error('Failed to update shipment:', error)
      alert('Failed to update shipment status')
    }
  }

  const handleLogout = async () => {
    try {
      await partnerAPI.logout()
    } catch (error) {
      console.error('Logout failed')
    }
    localStorage.removeItem('token')
    localStorage.removeItem('userType')
    window.location.href = '/'
  }

  const statusOptions = [
    { value: 'placed', label: 'Placed', color: 'bg-blue-100 text-blue-800' },
    { value: 'in_transit', label: 'In Transit', color: 'bg-orange-100 text-orange-800' },
    { value: 'out_for_delivery', label: 'Out for Delivery', color: 'bg-yellow-100 text-yellow-800' },
    { value: 'delivered', label: 'Delivered', color: 'bg-green-100 text-green-800' }
  ]

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-purple-600/30 border-t-purple-600 rounded-full animate-spin" />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-white/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h1 className="text-xl font-bold text-gray-900">Partner Dashboard</h1>
            </div>
            <Button onClick={handleLogout} variant="ghost" className="text-gray-600 hover:text-gray-900">
              Sign Out
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/90 transition-all">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Assigned</p>
                <p className="text-3xl font-bold text-gray-900">{shipments.length}</p>
                <p className="text-xs text-purple-600 mt-1">Active assignments</p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
            </div>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/90 transition-all">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">In Progress</p>
                <p className="text-3xl font-bold text-gray-900">{shipments.filter(s => s.status === 'in_transit' || s.status === 'out_for_delivery').length}</p>
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
                <p className="text-sm font-medium text-gray-600">Completed</p>
                <p className="text-3xl font-bold text-gray-900">24</p>
                <p className="text-xs text-green-600 mt-1">This month</p>
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
                <p className="text-sm font-medium text-gray-600">Earnings</p>
                <p className="text-3xl font-bold text-gray-900">$1,280</p>
                <p className="text-xs text-blue-600 mt-1">This month</p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Shipments List */}
          <div className="lg:col-span-2">
            <div className="bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-900">Assigned Shipments</h2>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                    </svg>
                    Filter
                  </Button>
                  <Button variant="outline" size="sm">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    Refresh
                  </Button>
                </div>
              </div>
              
              {shipments.length === 0 ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No shipments assigned</h3>
                  <p className="text-gray-600">New shipments will appear here when assigned to you</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {shipments.map((shipment) => (
                    <div key={shipment.id} className="border border-gray-200 rounded-xl p-4 hover:bg-gray-50 transition-colors">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h4 className="font-medium text-gray-900">#{shipment.id.slice(-8)}</h4>
                          <p className="text-sm text-gray-600">{shipment.content}</p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          statusOptions.find(s => s.value === shipment.status)?.color || 'bg-gray-100 text-gray-800'
                        }`}>
                          {statusOptions.find(s => s.value === shipment.status)?.label || shipment.status}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="text-sm text-gray-600">
                          Weight: {shipment.weight}kg • Destination: {shipment.destination}
                        </div>
                        <Button 
                          size="sm"
                          onClick={() => {
                            setSelectedShipment(shipment)
                            setNewStatus(shipment.status)
                            setShowUpdateModal(true)
                          }}
                          className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800"
                        >
                          Update Status
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Quick Actions & Info */}
          <div className="space-y-6">
            <div className="bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Button className="w-full justify-start bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  View Reports
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Update Location
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Settings
                </Button>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Performance</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Delivery Rate</span>
                  <span className="text-sm font-medium text-gray-900">100%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full w-full"></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">On-time Rate</span>
                  <span className="text-sm font-medium text-gray-900">95%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full w-[95%]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Update Status Modal */}
      {showUpdateModal && selectedShipment && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-gray-900">Update Shipment Status</h3>
              <Button 
                variant="ghost" 
                onClick={() => setShowUpdateModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </Button>
            </div>
            
            <div className="mb-4 p-4 bg-gray-50 rounded-xl">
              <p className="text-sm text-gray-600">Shipment ID</p>
              <p className="font-medium">#{selectedShipment.id.slice(-8)}</p>
              <p className="text-sm text-gray-600 mt-2">{selectedShipment.content}</p>
            </div>
            
            <form onSubmit={handleUpdateStatus} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">New Status</label>
                <select
                  value={newStatus}
                  onChange={(e) => setNewStatus(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                >
                  {statusOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              
              <div className="flex gap-3 pt-4">
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={() => setShowUpdateModal(false)}
                  className="flex-1"
                >
                  Cancel
                </Button>
                <Button 
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800"
                >
                  Update Status
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}