import { Router } from 'express';
import { createUser, login, getAllUsers, updateUser, deleteUser } from '../controllers/userController';

const router: Router = Router();

router.post('/', createUser);

router.post('/login', login);

router.get('/', getAllUsers);

router.put('/:id', updateUser);

router.delete('/:id', deleteUser);

export default router;
