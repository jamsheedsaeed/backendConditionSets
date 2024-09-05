import { Router } from 'express';
import {
  getUsers,
  createUser,
  getUserById,
  updateUserById,
  deleteUserById,
  loginUser
} from '../controllers/userController';

const router = Router();

router.get('/', getUsers);
router.post('/', createUser);
router.get('/:id', getUserById);
router.put('/:id', updateUserById);
router.delete('/:id', deleteUserById);
router.post('/login', loginUser);

export { router as userRouter };
