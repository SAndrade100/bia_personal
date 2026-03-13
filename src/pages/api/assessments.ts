import type { NextApiRequest, NextApiResponse } from 'next';
import assessments from '../../mocks/fixtures/assessments.json';

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(assessments);
}
