import * as express from 'express';
import * as get from '../handlers/parmer-group/parmer-group-get';
import * as post from '../handlers/parmer-group/parmer-group-post';
import * as put from '../handlers/parmer-group/parmer-group-put';
import * as del from '../handlers/parmer-group/parmer-group-delete';
import { GROUP_ID } from '../config/params';
import responGenerator from '../helpers/helpers-response';

const RouterGroup = express.Router();

RouterGroup.get('/', get.getAllFarmer);
RouterGroup.get(`/:${GROUP_ID}`, get.getFarmer);

RouterGroup.post('/', post.postGroupOfFarmer);

RouterGroup.put(`/:${GROUP_ID}`, put.putGroupOfFarmer);

RouterGroup.delete(`/:${GROUP_ID}`, del.deleteGroupOfFarmer);

export default RouterGroup;