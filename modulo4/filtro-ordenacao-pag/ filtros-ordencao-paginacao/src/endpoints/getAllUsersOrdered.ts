import { Request, Response } from 'express';
import selectAllUsersOrdered from '../data/selectAllUsersOrdered';

export const getAllUsersOrdered = async(
   req: Request,
   res: Response
): Promise<void> =>{
   try {
      let sort: string = req.query.sort;
      let order: string = req.query.order;

      sort = sort.toLocaleLowerCase() === "name"? "name" : sort.toLocaleLowerCase() === "type"? "type" : "email";   
      order = order.toLocaleUpperCase() === "DESC"? "DESC" : "ASC";  

      const users = await selectAllUsersOrdered(sort, order);

      res.status(200).send(users);
      
   } catch (error: any) {
      console.log(error);
      res.send(error.message || error.sqlMessage);
   };
};