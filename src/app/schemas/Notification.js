import mongoose from 'mongoose';

const NotificationSchema = new mongoose.Schema();

export default mongoose.model('Notification', NotificationSchema);
