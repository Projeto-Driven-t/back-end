import { prisma } from '@/config';

async function findActivities() {
  const activities = await prisma.dayActivities.findMany({
    include: {
      Activity: true,
    },
  });

  return activities;
}

async function findActivityById(id: number) {
  return await prisma.activity.findUnique({ where: { id } });
}

async function findActivityByName(name: string) {
  return await prisma.activity.findUnique({ where: { name } });
}

export const activitiesRepository = {
  findActivities,
  findActivityById,
  findActivityByName,
};
