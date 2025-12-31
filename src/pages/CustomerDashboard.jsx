import React from 'react';
import { motion } from 'framer-motion';
import {
    Calendar,
    CreditCard,
    Gift,
    Clock,
    MapPin,
    Star,
    ChevronRight,
    Search
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';

const CustomerDashboard = () => {
    const user = { name: 'Aman', email: 'aman@example.com', memberStatus: 'Gold Member' };

    const bookings = [
        { id: '#BK-8821', hotel: 'Aman Hotel - Deluxe Suite', dates: 'Dec 24 - Dec 29, 2025', status: 'Completed', price: '$850' },
        { id: '#BK-9902', hotel: 'Aman Hotel - Executive Room', dates: 'Jan 15 - Jan 18, 2026', status: 'Upcoming', price: '$420' },
    ];

    return (
        <main className="bg-gray-50 min-h-screen pt-24 pb-12">
            <Section>
                <div className="bg-primary-900 rounded-3xl p-8 md:p-12 text-white mb-8 relative overflow-hidden">
                    <div className="relative z-10">
                        <span className="bg-white/20 px-4 py-1 rounded-full text-xs font-bold backdrop-blur-md mb-4 inline-block">
                            {user.memberStatus}
                        </span>
                        <h1 className="text-3xl md:text-5xl font-serif font-bold mb-2">Hello, {user.name}!</h1>
                        <p className="text-primary-100 max-w-lg mb-8">Your next escape is just a few clicks away. We've missed having you with us.</p>

                        <div className="flex flex-wrap gap-4">
                            <Link to="/rooms">
                                <Button className="bg-white text-primary-900 font-bold px-8">Book a Room</Button>
                            </Link>
                            <Link to="/task-booking">
                                <Button className="bg-primary-800 text-white font-bold px-8 border border-primary-700">Request Service</Button>
                            </Link>
                        </div>
                    </div>
                    {/* Decorative element */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Recent Bookings */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="flex justify-between items-center px-2">
                            <h2 className="text-2xl font-serif font-bold text-gray-900">My Bookings</h2>
                            <Link to="/my-bookings" className="text-primary-600 font-bold hover:underline flex items-center gap-1">
                                View All <ChevronRight size={16} />
                            </Link>
                        </div>

                        {bookings.map((booking, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6"
                            >
                                <div className="flex gap-4 items-center w-full">
                                    <div className="w-20 h-20 bg-gray-100 rounded-xl overflow-hidden flex-shrink-0">
                                        <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=200&q=80" alt="Room" className="w-full h-full object-cover" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900">{booking.hotel}</h3>
                                        <p className="text-sm text-gray-500 flex items-center gap-1"><Calendar size={14} /> {booking.dates}</p>
                                        <span className={`mt-2 inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded ${booking.status === 'Upcoming' ? 'bg-blue-50 text-blue-600' : 'bg-gray-100 text-gray-500'
                                            }`}>
                                            {booking.status}
                                        </span>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between w-full md:w-auto md:flex-col md:items-end gap-2">
                                    <p className="text-xl font-bold text-gray-900">{booking.price}</p>
                                    <Button variant="outline" className="text-xs py-1 px-4">Details</Button>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Sidebar Actions */}
                    <div className="space-y-6">
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                            <h3 className="font-bold text-gray-900 mb-4">Quick Links</h3>
                            <div className="grid grid-cols-1 gap-3">
                                <Link to="/event-request" className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors group">
                                    <div className="w-10 h-10 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center">
                                        <Gift size={20} />
                                    </div>
                                    <span className="font-medium text-gray-700 group-hover:text-primary-600">Plan an Event</span>
                                </Link>
                                <Link to="/contact" className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors group">
                                    <div className="w-10 h-10 rounded-lg bg-green-50 text-green-600 flex items-center justify-center">
                                        <Search size={20} />
                                    </div>
                                    <span className="font-medium text-gray-700 group-hover:text-primary-600">Help Center</span>
                                </Link>
                                <Link to="/payment" className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors group">
                                    <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                                        <CreditCard size={20} />
                                    </div>
                                    <span className="font-medium text-gray-700 group-hover:text-primary-600">Payment Methods</span>
                                </Link>
                            </div>
                        </div>

                        <div className="bg-amber-50 rounded-2xl p-6 border border-amber-100">
                            <div className="flex items-center gap-2 text-amber-600 mb-2">
                                <Star size={18} fill="currentColor" />
                                <span className="text-xs font-bold uppercase tracking-wider">Limited Offer</span>
                            </div>
                            <h4 className="font-bold text-amber-900 mb-1">20% Off Spa Services</h4>
                            <p className="text-xs text-amber-700 mb-4">Exclusively for Gold members this weekend.</p>
                            <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white border-none py-2 text-xs">Claim Reward</Button>
                        </div>
                    </div>
                </div>
            </Section>
        </main>
    );
};

export default CustomerDashboard;
