import { PrismaClient } from '@prisma/client';
import dayjs from 'dayjs';
const prisma = new PrismaClient();

async function main() {
  let event = await prisma.event.findFirst();
  if (!event) {
    event = await prisma.event.create({
      data: {
        title: 'Driven.t',
        logoImageUrl: 'https://files.driveneducation.com.br/images/logo-rounded.png',
        backgroundImageUrl: 'linear-gradient(to right, #FA4098, #FFD77F)',
        startsAt: dayjs().toDate(),
        endsAt: dayjs().add(21, 'days').toDate(),
      },
    });
  }

  let modality = await prisma.modality.findMany();

  if (!modality) {
    await prisma.modality.create({
      data: { modality: 'Online', price: 100 },
    });

    await prisma.modality.create({
      data: { modality: 'Presencial', price: 350 },
    });
  }

  let accommodation = await prisma.accommodation.findMany();

  if (!accommodation) {
    await prisma.accommodation.create({
      data: { accommodation: 'Com Hotel', price: 500 },
    });

    await prisma.accommodation.create({
      data: { accommodation: 'Sem Hotel', price: 0 },
    });
  }

  let hotels = await prisma.hotel.findMany();

  if (!hotels) {
    await prisma.hotel.create({
      data: {
        id: 1,
        name: 'Driven Resort',
        roomTypes: 'Single e Double',
        imageUrl: 'https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg',
      },
    });
    await prisma.hotel.create({
      data: {
        id: 2,
        name: 'Driven Palace',
        roomTypes: 'Single, Double e Triple',
        imageUrl: 'https://www.ahstatic.com/photos/5451_ho_00_p_1024x768.jpg',
      },
    });
    await prisma.hotel.create({
      data: {
        id: 3,
        name: 'Driven World',
        roomTypes: 'Single, Double e Triple',
        imageUrl:
          'https://imgcy.trivago.com/c_fill,d_dummy.jpeg,e_sharpen:60,f_auto,h_627,q_auto,w_1200/itemimages/96/95/96959_v6.jpeg',
      },
    });
  }

  console.log({ event });
  console.log({ modality });
  console.log({ accommodation });
  console.log({ hotels });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
