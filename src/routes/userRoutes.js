 
import express from 'express';
import {
  registerUser,
  getUserById,
  updateUser,
  deleteUser,
  listUsers,
  login
} from '../controllers/userController.js';
import { validateRegister, validateJWT, authorizeRoles } from '../middlewares/validationMiddleware.js';

const router = express.Router();

router.post('/register', validateRegister, registerUser);
router.get('/:id', validateJWT, authorizeRoles('admin'), getUserById);
router.put('/:id', validateJWT,authorizeRoles('admin'), updateUser);
router.delete('/:id', validateJWT, authorizeRoles('admin'),deleteUser);
router.get('/', validateJWT,authorizeRoles('admin'), listUsers);
router.post('/login', login);

export default router;
