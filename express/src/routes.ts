import express, { Request, Response } from 'express';

const router = express.Router();
router.get('/', (req:Request, res:Response) => {
  res.json({ message: 'Rooms 150' });
});
router.get('/:id', (req:Request, res:Response) => {
  res.send(req.params.id);
});
export default router;
