import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
    Users,
    Calendar,
    DollarSign,
    TrendingUp,
    Bell,
    ArrowUpRight,
    ArrowDownRight,
    Settings,
    LogOut
} from 'lucide-react';
import Section from '../components/ui/Section';

const AdminDashboard = () => {
    const stats = [
        { label: 'Total Revenue', value: '$124,500', icon: DollarSign, trend: '+12%', color: 'blue' },
        { label: 'Total Bookings', value: '1,482', icon: Calendar, trend: '+8%', color: 'green' },
        { label: 'Active Users', value: '890', icon: Users, trend: '+5%', color: 'purple' },
        { label: 'Occupancy Rate', value: '94%', icon: TrendingUp, trend: '+2%', color: 'amber' },
    ];

    const recentBookings = [
        { id: '#BK-1024', customer: 'John Doe', room: '302 - Deluxe', status: 'Confirmed', amount: '$450' },
        { id: '#BK-1025', customer: 'Sarah Smith', room: '105 - Standard', status: 'Pending', amount: '$280' },
        { id: '#BK-1026', customer: 'Michael Ross', room: '501 - Penthouse', status: 'Confirmed', amount: '$1,200' },
        { id: '#BK-1027', customer: 'Emma Wilson', room: '204 - Deluxe', status: 'Cancelled', amount: '$450' },
        { id: '#BK-1028', customer: 'Robert Brown', room: '108 - Standard', status: 'Confirmed', amount: '$280' },
    ];

    return (
        <main className="bg-gray-50 min-h-screen pt-24 pb-12">
            <Section>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                    <div>
                        <h1 className="text-3xl font-serif font-bold text-gray-900">Admin Dashboard</h1>
                        <p className="text-gray-500">Welcome back! Here's what's happening today.</p>
                    </div>
                    <div className="flex gap-3">
                        <button className="p-2 bg-white border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors">
                            <Bell size={20} />
                        </button>
                        <button className="px-4 py-2 bg-primary-900 text-white rounded-lg font-medium hover:bg-primary-800 transition-colors flex items-center gap-2">
                            <Settings size={18} />
                            Manage System
                        </button>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <div className={`p-3 rounded-xl bg-${stat.color}-50 text-${stat.color}-600`}>
                                    <stat.icon size={24} />
                                </div>
                                <span className={`flex items-center text-xs font-bold ${stat.trend.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                                    {stat.trend}
                                    {stat.trend.startsWith('+') ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                                </span>
                            </div>
                            <h3 className="text-gray-500 text-sm font-medium">{stat.label}</h3>
                            <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                        </motion.div>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Recent Bookings Table */}
                    <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                        <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                            <h2 className="text-xl font-bold text-gray-900">Recent Bookings</h2>
                            <button className="text-sm font-medium text-primary-600 hover:underline">View All</button>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead className="bg-gray-50 text-gray-400 text-xs uppercase font-semibold">
                                    <tr>
                                        <th className="px-6 py-4">ID</th>
                                        <th className="px-6 py-4">Customer</th>
                                        <th className="px-6 py-4">Room</th>
                                        <th className="px-6 py-4">Status</th>
                                        <th className="px-6 py-4">Amount</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-50">
                                    {recentBookings.map((booking, i) => (
                                        <tr key={i} className="hover:bg-gray-50 transition-colors">
                                            <td className="px-6 py-4 font-medium text-gray-900">{booking.id}</td>
                                            <td className="px-6 py-4 text-gray-600">{booking.customer}</td>
                                            <td className="px-6 py-4 text-gray-600">{booking.room}</td>
                                            <td className="px-6 py-4">
                                                <span className={`px-2 py-1 rounded-full text-xs font-medium 
                                                    ${booking.status === 'Confirmed' ? 'bg-green-50 text-green-600' :
                                                        booking.status === 'Pending' ? 'bg-amber-50 text-amber-600' :
                                                            'bg-red-50 text-red-600'}`}>
                                                    {booking.status}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 font-bold text-gray-900">{booking.amount}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Quick Activity / Notifications */}
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                        <h2 className="text-xl font-bold text-gray-900 mb-6">Quick Activity</h2>
                        <div className="space-y-6">
                            {[
                                { title: 'Room 302 Cleaned', time: '12 mins ago', icon: '✨' },
                                { title: 'New Event Request', time: '45 mins ago', icon: '📅' },
                                { title: 'Payment Received', time: '2 hours ago', icon: '💰' },
                                { title: 'Maintenance Alert', time: '3 hours ago', icon: '⚠️' },
                                { title: 'New User Registered', time: '5 hours ago', icon: '👤' },
                            ].map((activity, i) => (
                                <div key={i} className="flex gap-4 items-start">
                                    <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-xl">
                                        {activity.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold text-gray-900">{activity.title}</h4>
                                        <p className="text-xs text-gray-500">{activity.time}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button className="w-full mt-8 py-3 border-2 border-dashed border-gray-200 rounded-xl text-gray-400 hover:text-gray-600 hover:border-gray-400 transition-all font-medium">
                            + Add Note
                        </button>
                    </div>
                </div>
            </Section>
        </main>
    );
};

export default AdminDashboard;
