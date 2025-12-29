import React from 'react';
import { motion } from 'framer-motion';
import {
    CheckCircle2,
    Clock,
    AlertCircle,
    ClipboardList,
    DoorOpen,
    User,
    LogOut
} from 'lucide-react';
import Section from '../components/ui/Section';

const StaffDashboard = () => {
    const tasks = [
        { id: 1, type: 'Cleaning', room: '302', time: '09:00 AM', status: 'Completed', priority: 'Normal' },
        { id: 2, type: 'Maintenance', room: '105', time: '10:30 AM', status: 'In Progress', priority: 'High' },
        { id: 3, type: 'Laundry', room: '204', time: '11:00 AM', status: 'Pending', priority: 'Low' },
        { id: 4, type: 'Cleaning', room: '401', time: '01:30 PM', status: 'Pending', priority: 'Normal' },
    ];

    const roomStatus = [
        {
            floor: '1st Floor', rooms: [
                { id: '101', status: 'occupied' }, { id: '102', status: 'dirty' }, { id: '103', status: 'available' }, { id: '104', status: 'occupied' }
            ]
        },
        {
            floor: '2nd Floor', rooms: [
                { id: '201', status: 'available' }, { id: '202', status: 'available' }, { id: '203', status: 'dirty' }, { id: '204', status: 'occupied' }
            ]
        }
    ];

    return (
        <main className="bg-gray-50 min-h-screen pt-24 pb-12">
            <Section>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                    <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center text-primary-900 border-2 border-white shadow-sm overflow-hidden">
                            <User size={32} />
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900">Staff Portal</h1>
                            <p className="text-gray-500">Alex Johnson • Housekeeping Team</p>
                        </div>
                    </div>
                    <button className="flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors font-medium">
                        <LogOut size={18} />
                        Sign Out
                    </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Tasks List */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                            <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                                <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                                    <ClipboardList className="text-blue-500" />
                                    Assigned Tasks
                                </h2>
                                <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-bold">4 Tasks Today</span>
                            </div>
                            <div className="divide-y divide-gray-50">
                                {tasks.map((task) => (
                                    <div key={task.id} className="p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 hover:bg-gray-50 transition-colors">
                                        <div className="flex gap-4 items-center">
                                            <div className={`p-2 rounded-lg ${task.status === 'Completed' ? 'bg-green-50 text-green-500' :
                                                    task.status === 'In Progress' ? 'bg-blue-50 text-blue-500' : 'bg-gray-50 text-gray-400'
                                                }`}>
                                                {task.status === 'Completed' ? <CheckCircle2 /> : task.status === 'In Progress' ? <Clock /> : <AlertCircle />}
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-gray-900">{task.type} - Room {task.room}</h4>
                                                <p className="text-sm text-gray-500">Scheduled for {task.time}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3 w-full sm:w-auto justify-between">
                                            <span className={`px-2 py-1 rounded text-xs font-bold ${task.priority === 'High' ? 'bg-red-50 text-red-600' :
                                                    task.priority === 'Normal' ? 'bg-blue-50 text-blue-600' : 'bg-gray-100 text-gray-600'
                                                }`}>
                                                {task.priority} Priority
                                            </span>
                                            <button className="text-primary-600 font-bold text-sm hover:underline">Update</button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Room Status Overview */}
                    <div className="space-y-6">
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                <DoorOpen className="text-amber-500" />
                                Room Status
                            </h2>
                            <div className="space-y-6">
                                {roomStatus.map((floor, i) => (
                                    <div key={i}>
                                        <h4 className="text-xs font-bold text-gray-400 uppercase mb-3">{floor.floor}</h4>
                                        <div className="grid grid-cols-4 gap-2">
                                            {floor.rooms.map((room) => (
                                                <div
                                                    key={room.id}
                                                    title={`Room ${room.id} - ${room.status}`}
                                                    className={`aspect-square rounded-lg flex items-center justify-center text-xs font-bold transition-all hover:scale-105 cursor-pointer
                                                        ${room.status === 'occupied' ? 'bg-red-100 text-red-600 border border-red-200' :
                                                            room.status === 'dirty' ? 'bg-amber-100 text-amber-600 border border-amber-200' :
                                                                'bg-green-100 text-green-600 border border-green-200'}`}
                                                >
                                                    {room.id}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-8 pt-6 border-t border-gray-100 grid grid-cols-3 gap-2 text-[10px] font-bold uppercase text-gray-400">
                                <div className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-green-500"></span> Available</div>
                                <div className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-red-500"></span> Occupied</div>
                                <div className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-amber-500"></span> Dirty</div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </main>
    );
};

export default StaffDashboard;
