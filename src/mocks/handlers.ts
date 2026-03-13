import { rest } from 'msw';
import user from './fixtures/user.json';
import trainings from './fixtures/trainings.json';
import schedule from './fixtures/schedule.json';
import progress from './fixtures/progress.json';
import nutrition from './fixtures/nutrition.json';
import assessments from './fixtures/assessments.json';
import chat from './fixtures/chat.json';
import anamnesis from './fixtures/anamnesis.json';

export const handlers = [
  rest.get('/api/user', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(user));
  }),

  rest.get('/api/trainings', (req, res, ctx) => {
    const q = req.url.searchParams.get('q') || '';
    const filtered = trainings.filter((t) =>
      t.title.toLowerCase().includes(q.toLowerCase())
    );
    return res(ctx.status(200), ctx.json(filtered));
  }),

  rest.get('/api/trainings/:id', (req, res, ctx) => {
    const { id } = req.params;
    const t = trainings.find((x) => x.id === id);
    if (!t) return res(ctx.status(404));
    return res(ctx.status(200), ctx.json(t));
  }),

  rest.get('/api/schedule', (req, res, ctx) => {
    const month = req.url.searchParams.get('month'); // e.g. "2026-03"
    const filtered = month
      ? schedule.filter((s) => s.date.startsWith(month))
      : schedule;
    return res(ctx.status(200), ctx.json(filtered));
  }),

  rest.get('/api/progress', (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(progress));
  }),

  rest.get('/api/nutrition', (req, res, ctx) => {
    const section = req.url.searchParams.get('section');
    if (section === 'plan')  return res(ctx.status(200), ctx.json(nutrition.plan));
    if (section === 'diary') return res(ctx.status(200), ctx.json(nutrition.diary));
    return res(ctx.status(200), ctx.json(nutrition));
  }),

  rest.get('/api/assessments', (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(assessments));
  }),

  rest.get('/api/chat', (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(chat));
  }),

  rest.get('/api/anamnesis', (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(anamnesis));
  }),
];
