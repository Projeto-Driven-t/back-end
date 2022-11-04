import { conflictError, notFoundError } from '@/errors';
import { Activities } from '@prisma/client';
import { activitiesRepository } from '@/repositories/activities-repository';

async function getActivities(): Promise<Activities[]> {
  const activities = await activitiesRepository.findActivities();
  if (!activities) throw notFoundError();

  return activities;
}

async function getActivitiesById(id: number): Promise<Activities> {
  const activity = await activitiesRepository.findActivityById(id);
  if (!activity) throw notFoundError();

  return activity;
}

export const activitiesService = {
  getActivities,
  getActivitiesById,
};
