'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-900 to-red-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Image 
              src="/mmc-logo.png" 
              alt="MMC Logo" 
              width={120} 
              height={120} 
              className="mx-auto mb-8"
            />
            <h1 className="text-5xl font-bold mb-6">Mini Mind Creators</h1>
            <p className="text-xl mb-8">Professional Social Media Management & Web Design Services</p>
            <Link href="/contact" className="bg-white text-purple-900 px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all">
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-red-600 text-4xl mb-4">💻</div>
              <h3 className="text-xl font-semibold mb-3">Web Designing</h3>
              <p className="text-gray-600">Professional website development starting at Rs. 80,000</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-red-600 text-4xl mb-4">📱</div>
              <h3 className="text-xl font-semibold mb-3">Social Media Management</h3>
              <p className="text-gray-600">Complete management of Facebook, Instagram, and YouTube accounts</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-red-600 text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-3">Ad Management</h3>
              <p className="text-gray-600">Strategic ad campaigns and monthly performance reports</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-purple-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
          <div className="max-w-2xl mx-auto space-y-4">
            <p className="text-xl">📞 +92 319863546</p>
            <p className="text-xl">✉️ menahilnoor224@gmail.com</p>
            <p className="text-xl">📍 Morgah Rawalpindi</p>
          </div>
          <Link href="/contact" className="inline-block mt-8 bg-white text-purple-900 px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all">
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  )
} 