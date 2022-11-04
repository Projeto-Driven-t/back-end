import { prisma } from '@/config';
import { Activities } from '@prisma/client';

async function findActivities() {
  // group activities by date
  const activities = await prisma.activities.findMany();

  return activities;
}

async function findActivityById(id: number) {
  return await prisma.activities.findUnique({ where: { id } });
}

async function findActivityByName(name: string) {
  return await prisma.activities.findUnique({ where: { name } });
}

export const activitiesRepository = {
  findActivities,
  findActivityById,
  findActivityByName,
};
