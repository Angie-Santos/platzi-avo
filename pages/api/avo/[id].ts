import DB from '@database'
import { NextApiRequest, NextApiResponse } from 'next';


const oneAvo =  async(req:NextApiRequest, res:NextApiResponse) => {
  const db = new DB();
  const id = req.query.id
  const avo = await db.getById(id as string)
  res.status(200).json(avo)
}

export default oneAvo;