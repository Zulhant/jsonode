import * as express from 'express';
import * as post from '../handlers/users/users-post';
import * as get from '../handlers/users/users-get';
import * as put from '../handlers/users/users-put';
import * as del from '../handlers/users/users-delete';
import { USER_ID } from '../config/params';
import { Router } from 'express';

export const RouterUser = express.Router();

console.log(`==== POST : user/sipUp ===`)
RouterUser.post('/sigUp', post.sigUp);

console.log(`==== GET : user/getUser ===`)
RouterUser.get(`/:${USER_ID}`, get.getUser);

console.log(`=== PUT : user/<idUser> ===`);
RouterUser.put(`/:${USER_ID}`, put.updateUser);

console.log(`=== DELETE : user/<idUser>`)
RouterUser.delete(`/:${USER_ID}`, del.removeUser);

export default RouterUser
