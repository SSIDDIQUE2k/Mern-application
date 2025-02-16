import express from 'express';
import { authUser, registerUser, logoutUser, getUserProfile, updateUserProfile } from '../controllers/userController.js';
import { protect } from '../middleware/authmiddleware.js';
const router = express.Router();


router.post('/', registerUser);
router.post('/auth', authUser);
router.post('/logout', logoutUser);
router.route('/profile').get(protect,getUserProfile).put(protect,updateUserProfile);







// Handle 404 errors for undefined routes
router.use((req, res, next) => {
    res.status(404).json({ message: 'Not Found' });
});



export default router;
/**
 * @swagger
 * tags:
 *  name: Users
 * description: User management and authentication
 */

