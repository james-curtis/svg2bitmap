import { Request, Response } from 'express';

export function index(req: Request, res: Response) {
  res.send('svg2bitmap service');
}
