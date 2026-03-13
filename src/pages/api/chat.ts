import type { NextApiRequest, NextApiResponse } from 'next';
import chat from '../../mocks/fixtures/chat.json';

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(chat);
}
