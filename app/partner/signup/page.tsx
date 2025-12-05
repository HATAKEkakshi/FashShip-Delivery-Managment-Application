'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { partnerAPI } from '@/lib/api'

export default function PartnerSignup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    serviceable_zip_codes: '',
    max_handling_capacity: ''
  })
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const data = {
        ...formData,
        serviceable_zip_codes: formData.serviceable_zip_codes.split(',').map(code => parseInt(code.trim())),
        max_handling_capacity: parseInt(formData.max_handling_capacity)
      }
      await partnerAPI.signup(data)
      setMessage('Signup successful! Please check your email to verify your account.')
    } catch (error) {
      setMessage('Signup failed. Please try again.')
    }
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-slate-100 opacity-20 -z-10" />
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 blur-3xl opacity-70">
        <div className="w-72 h-72 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full" />
      </div>
      
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12">
        <div className="absolute top-8 left-8">
          <Button variant="ghost" asChild className="text-gray-600 hover:text-gray-900">
            <Link href="/" className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Home
            </Link>
          </Button>
        </div>
        
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Join Our Network</h1>
            <p className="text-gray-600">Become a delivery partner and start earning</p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl p-8 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="Enter your full name" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                  <input 
                    type="password" 
                    placeholder="Create a strong password" 
                    value={formData.password}
                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                    className="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Serviceable ZIP Codes</label>
                  <input 
                    type="text" 
                    placeholder="e.g., 11001, 11002, 11003" 
                    value={formData.serviceable_zip_codes}
                    onChange={(e) => setFormData({...formData, serviceable_zip_codes: e.target.value})}
                    className="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    required
                  />
                  <p className="text-xs text-gray-500 mt-1">Enter ZIP codes separated by commas</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Max Handling Capacity</label>
                  <input 
                    type="number" 
                    min="1"
                    max="100"
                    placeholder="Maximum packages per day" 
                    value={formData.max_handling_capacity}
                    onChange={(e) => setFormData({...formData, max_handling_capacity: e.target.value})}
                    className="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    required
                  />
                  <p className="text-xs text-gray-500 mt-1">How many packages can you handle daily?</p>
                </div>
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white py-3 rounded-xl font-medium transition-all duration-200" 
                disabled={loading}
              >
                {loading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Creating account...
                  </div>
                ) : 'Join Network'}
              </Button>
              
              {message && (
                <div className={`text-center text-sm p-3 rounded-lg ${
                  message.includes('successful') ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
                }`}>
                  {message}
                </div>
              )}
            </form>
            
            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-center text-sm text-gray-600 mb-4">
                Already a partner?
              </p>
              <Button variant="outline" asChild className="w-full border-gray-300 hover:bg-gray-50">
                <Link href="/partner/login">Sign In Instead</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}