import Notice from '../models/noticeModel.js';
import User from '../models/userModel.js';

// POST a new notice
export const postNotice = async (req, res) => {
    try {
        const { title, description, postedBy } = req.body;

        // Find the user by ID to get the username
        const user = await User.findById(postedBy);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Create a new notice object
        const newNotice = new Notice({
            title,
            description,
            postedBy: {
                id: user._id,
                username: user.name // Assuming 'name' is the field containing the username
            }
        });

        // Save the notice to the database
        await newNotice.save();

        res.status(201).json({ message: 'Notice posted successfully', notice: newNotice });
    } catch (err) {
        res.status(500).json({ message: 'Failed to post notice', error: err.message });
    }
};
// GET all notices
export  const getAllNotices = async (req, res) => {
    try {
        // Find all notices in the database
        const notices = await Notice.find();

        res.status(200).json({ notices });
    } catch (err) {
        res.status(500).json({ message: 'Failed to get notices', error: err.message });
    }
};



