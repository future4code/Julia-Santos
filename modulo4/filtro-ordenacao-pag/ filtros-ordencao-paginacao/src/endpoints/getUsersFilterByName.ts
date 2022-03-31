import { Request, Response } from 'express';
import selectUsersByName from '../data/selectUsersByName';

export const getUsersFilterByName = async (
   req: Request,
   res: Response
): Promise<void> => {
   try {
      const name: string = req.query.name;

      const users = await selectUsersByName(name);
      
      res.status(200).send(users);

   } catch (error: any) {
      console.log(error);
      res.send(error.message || error.sqlMessage);
   };
};