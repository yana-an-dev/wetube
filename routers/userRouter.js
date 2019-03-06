import express from "express";
import routes from "../routes";
import { 
    users, 
    userDetail, 
    editProfile, 
    changePassword, 
    
} from "../controllers/userController";

const userRouter = express.Router();

userRouter.get(routes.users, users);
//니콜라스는 왜 users를 없앴지?
userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.changePassword, changePassword);
userRouter.get(routes.userDetail(), userDetail);

export default userRouter;