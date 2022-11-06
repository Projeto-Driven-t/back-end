import { notFoundError } from '@/errors';
import { Activity, DayActivities } from '@prisma/client';
import { activitiesRepository } from '@/repositories/activities-repository';

async function getActivities(): Promise<DayActivities[]> {
  const activities = await activitiesRepository.findActivities();
  if (!activities) throw notFoundError();

  return activities;
}

async function getActivitiesById(id: number): Promise<Activity> {
  const activity = await activitiesRepository.findActivityById(id);
  if (!activity) throw notFoundError();

  return activity;
}

export const activitiesService = {
  getActivities,
  getActivitiesById,
};
