import express from 'express';
import { authUser, registerUser, logoutUser, getUserProfile, updateUserProfile } from '../controllers/userController.js';

const router = express.Router();


router.post('/', registerUser);
router.post('/auth', authUser);
router.post('/logout', logoutUser);
router.route('/profile').get(getUserProfile).put(updateUserProfile);





// Handle 404 errors for undefined routes
router.use((req, res, next) => {
    res.status(404).json({ message: 'Not Found' });
});


export default router;

