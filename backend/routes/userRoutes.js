import express from 'express';
import { authUser, registerUser, logoutUser, getUserProfile, updateUserProfile } from '../controllers/userController.js';

const router = express.Router();


router.post('/auth', authUser);
router.post('/register', registerUser);
router.post('/logout', logoutUser);
router.get('/profile', getUserProfile);

router.put('/update', updateUserProfile);







export default router;

