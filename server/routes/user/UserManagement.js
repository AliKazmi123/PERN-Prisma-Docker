import express from "express";
const userManagementRouter = express.Router();
import {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from "../../controllers/User/UserManagement.js";


userManagementRouter.get('/', getUsers);
userManagementRouter.get('/:id', getUserById);
userManagementRouter.post('/', createUser);
userManagementRouter.put('/:id', updateUser);
userManagementRouter.delete('/:id', deleteUser);

export default userManagementRouter;
