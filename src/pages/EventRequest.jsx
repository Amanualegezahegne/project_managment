import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Textarea from '../components/ui/Textarea';
import Section from '../components/ui/Section';

const EventRequest = () => {
    const [formData, setFormData] = useState({
        eventType: 'wedding',
        guestCount: '',
        eventDate: '',
        requirements: '',
        contactPhone: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Event Request Submitted:', formData);
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            setFormData({
                eventType: 'wedding',
                guestCount: '',
                eventDate: '',
                requirements: '',
                contactPhone: ''
            });
            alert('Your event request has been sent! Our event planners will contact you shortly.');
        }, 1500);
    };

    return (
        <main className="bg-background min-h-screen pt-24 pb-12">
            <div className="relative h-[300px] mb-12 overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1600&q=80"
                    alt="Event background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-center p-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Plan Your Perfect Event</h1>
                        <p className="text-gray-200 max-w-2xl mx-auto">From intimate gatherings to grand celebrations, we provide the perfect venue and service.</p>
                    </motion.div>
                </div>
            </div>

            <Section>
                <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="bg-white rounded-2xl shadow-xl p-8"
                        >
                            <h2 className="text-2xl font-serif font-bold text-primary-900 mb-6">Event Details</h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Event Type</label>
                                        <select
                                            name="eventType"
                                            value={formData.eventType}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none"
                                        >
                                            <option value="wedding">Wedding / Engagement</option>
                                            <option value="conference">Corporate Conference</option>
                                            <option value="birthday">Birthday Party</option>
                                            <option value="seminar">Workshop / Seminar</option>
                                            <option value="other">Other Special Occasion</option>
                                        </select>
                                    </div>
                                    <Input
                                        label="Estimated Guests"
                                        type="number"
                                        name="guestCount"
                                        value={formData.guestCount}
                                        onChange={handleChange}
                                        placeholder="e.g. 150"
                                        required
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <Input
                                        label="Preferred Date"
                                        type="date"
                                        name="eventDate"
                                        value={formData.eventDate}
                                        onChange={handleChange}
                                        required
                                    />
                                    <Input
                                        label="Contact Phone"
                                        type="tel"
                                        name="contactPhone"
                                        value={formData.contactPhone}
                                        onChange={handleChange}
                                        placeholder="+1 (555) 000-0000"
                                        required
                                    />
                                </div>

                                <Textarea
                                    label="Special Requirements & Vision"
                                    name="requirements"
                                    value={formData.requirements}
                                    onChange={handleChange}
                                    placeholder="Tell us about your catering needs, decoration preferences, etc."
                                    rows={5}
                                    required
                                />

                                <Button
                                    type="submit"
                                    variant="primary"
                                    className="w-full text-white bg-blue-900 py-4 text-lg font-bold"
                                    disabled={submitted}
                                >
                                    {submitted ? 'Sending Request...' : 'Submit Inquiry'}
                                </Button>
                            </form>
                        </motion.div>
                    </div>

                    <div className="space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="bg-primary-900 text-white p-8 rounded-2xl shadow-lg"
                        >
                            <h3 className="text-xl font-bold mb-4">Why Choose Aman?</h3>
                            <ul className="space-y-4">
                                <li className="flex gap-3">
                                    <span className="text-secondary-500">✓</span>
                                    <span>Award-winning catering services</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-secondary-500">✓</span>
                                    <span>Versatile venue layouts</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-secondary-500">✓</span>
                                    <span>Dedicated event coordinator</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-secondary-500">✓</span>
                                    <span>State-of-the-art A/V equipment</span>
                                </li>
                            </ul>
                        </motion.div>

                        <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                            <img
                                src="https://images.unsplash.com/photo-1505373633579-9d18841029ba?auto=format&fit=crop&w=800&q=80"
                                alt="Conference room"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4 bg-white">
                                <h4 className="font-bold">Grand Ballroom</h4>
                                <p className="text-sm text-gray-500">Capacity: Up to 500 guests</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </main>
    );
};

export default EventRequest;
