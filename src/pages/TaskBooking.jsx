import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Textarea from '../components/ui/Textarea';
import Section from '../components/ui/Section';

const TaskBooking = () => {
    const [formData, setFormData] = useState({
        taskType: 'cleaning',
        priority: 'normal',
        description: '',
        preferredTime: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Task Booking Submitted:', formData);
        setSubmitted(true);
        // Simulate API call
        setTimeout(() => {
            setSubmitted(false);
            setFormData({
                taskType: 'cleaning',
                priority: 'normal',
                description: '',
                preferredTime: ''
            });
            alert('Your task request has been submitted successfully!');
        }, 1500);
    };

    return (
        <main className="bg-background min-h-screen pt-24 pb-12">
            <Section>
                <div className="max-w-2xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-white rounded-2xl shadow-xl overflow-hidden"
                    >
                        <div className="bg-primary-900 p-8 text-white">
                            <h1 className="text-3xl font-serif font-bold">Book a Task / Service</h1>
                            <p className="text-primary-100 mt-2">Need something special? Tell us how we can help make your stay perfect.</p>
                        </div>

                        <form onSubmit={handleSubmit} className="p-8 space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Service Type</label>
                                    <select
                                        name="taskType"
                                        value={formData.taskType}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none"
                                    >
                                        <option value="cleaning">Room Cleaning</option>
                                        <option value="maintenance">Maintenance / Repair</option>
                                        <option value="laundry">Laundry Service</option>
                                        <option value="concierge">Concierge Assistance</option>
                                        <option value="room-service">Room Service (Extra)</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Priority</label>
                                    <select
                                        name="priority"
                                        value={formData.priority}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none"
                                    >
                                        <option value="low">Low - Whenever possible</option>
                                        <option value="normal">Normal - Within today</option>
                                        <option value="high">High - As soon as possible</option>
                                        <option value="urgent">Urgent - Immediate attention required</option>
                                    </select>
                                </div>
                            </div>

                            <Input
                                label="Preferred Time"
                                type="datetime-local"
                                name="preferredTime"
                                value={formData.preferredTime}
                                onChange={handleChange}
                                required
                            />

                            <Textarea
                                label="Description / Special Instructions"
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                placeholder="Please provide details about your request..."
                                rows={4}
                                required
                            />

                            <div className="pt-4">
                                <Button
                                    type="submit"
                                    variant="primary"
                                    className="w-full text-white bg-blue-900 py-3 rounded-xl font-bold shadow-lg shadow-blue-900/20"
                                    disabled={submitted}
                                >
                                    {submitted ? 'Submitting...' : 'Request Service'}
                                </Button>
                            </div>
                        </form>
                    </motion.div>

                    <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                        {[
                            { icon: '✨', title: 'Quality', text: 'Premium service standards' },
                            { icon: '🕒', title: 'Timely', text: 'Fast response times' },
                            { icon: '🛡️', title: 'Secure', text: 'Verified hotel staff only' }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.1 * i }}
                                className="bg-white/50 backdrop-blur-sm p-4 rounded-xl text-center border border-white/20"
                            >
                                <span className="text-2xl mb-2 block">{item.icon}</span>
                                <h3 className="font-bold text-gray-800">{item.title}</h3>
                                <p className="text-xs text-gray-500">{item.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Section>
        </main>
    );
};

export default TaskBooking;
