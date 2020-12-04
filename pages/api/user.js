import { NextApiRequest, NextApiResponse} from 'next';
import connect from '../../utils/database';

export default async (req, res) => {    
    if(req.method === "POST") {
        const { name, email, cellphone } = req.body;
        if(!name || !email || !cellphone){
            res.status(400).json({ error: 'Missing body parameter' });
            return;  
        }
        const { db } = await connect();
        const response = await db.collection('users').insertOne({
            name,
            email,
            cellphone,            
        });
        res.status(200).json(response.ops[0]);
    }else{
        res.status(400).json({ error: 'Wrong request method' })
    }   
    
  }