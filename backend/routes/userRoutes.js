import express from 'express';
import { authUser, registerUser, logoutUser, getUserProfile, updateUserProfile } from '../controllers/userController.js';

const router = express.Router();


router.post('/', registerUser);
router.post('/auth', authUser);
router.post('/logout', logoutUser);
<<<<<<< HEAD
router.route('/profile').get(getUserProfile).put(updateUserProfile);
=======
router.get('/profile', getUserProfile);

router.put('/update', updateUserProfile);
>>>>>>> 7c6bc1c6bd9a7dd8f890fcd2b9febab6275be016





// Handle 404 errors for undefined routes
router.use((req, res, next) => {
    res.status(404).json({ message: 'Not Found' });
});



export default router;

