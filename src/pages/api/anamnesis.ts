import type { NextApiRequest, NextApiResponse } from 'next';
import anamnesis from '../../mocks/fixtures/anamnesis.json';

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(anamnesis);
}
