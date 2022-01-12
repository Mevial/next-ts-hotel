// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
const STATUS_CODE_200 = 200;
type Data = {
  name: string;
};

export const handler = (req: NextApiRequest, res: NextApiResponse<Data>): any => {
  res.status(STATUS_CODE_200).json({ name: 'John Doe' });
};
