import { NextFunction, Request, Response } from 'express';
// Not work, need to do
function getRoomHandler (req: Request, res: Response, next: NextFunction) {
  res.send(res.locals.name);
}
export default getRoomHandler;
