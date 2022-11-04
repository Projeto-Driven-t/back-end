import { AuthenticatedRequest } from '@/middlewares';
import { Response } from 'express';
import httpStatus from 'http-status';

import { activitiesService } from '@/services/activities-service';

export async function getActivities(req: AuthenticatedRequest, res: Response) {
  const activities = await activitiesService.getActivities();
  return res.status(httpStatus.OK).send(activities);
}

export async function getActivityById(req: AuthenticatedRequest, res: Response) {
  const { id } = req.params;
  const activity = await activitiesService.getActivitiesById(Number(id));
  return res.status(httpStatus.OK).send(activity);
}
