import type { NextApiRequest, NextApiResponse } from 'next';
import nutrition from '../../mocks/fixtures/nutrition.json';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { section } = req.query;
  if (section === 'plan')   return res.status(200).json(nutrition.plan);
  if (section === 'diary')  return res.status(200).json(nutrition.diary);
  return res.status(200).json(nutrition);
}
