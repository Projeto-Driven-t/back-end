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

  if (modality.length === 0) {
    modality = [
      await prisma.modality.create({
        data: {
          id: 1,
          modality: 'Presencial',
          price: 350,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      }),
      await prisma.modality.create({
        data: {
          id: 2,
          modality: 'Online',
          price: 100,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      }),
    ];
  }

  let accommodation = await prisma.accommodation.findMany();

  if (accommodation.length === 0) {
    accommodation = [
      await prisma.accommodation.create({
        data: {
          id: 1,
          accommodation: 'Sem Hotel',
          price: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      }),
      await prisma.accommodation.create({
        data: {
          id: 2,
          accommodation: 'Com Hotel',
          price: 500,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      }),
    ];
  }

  let hotels = await prisma.hotel.findMany();

  if (hotels.length === 0) {
    hotels = [
      await prisma.hotel.create({
        data: {
          id: 1,
          name: 'Driven Resort',
          roomTypes: 'Single e Double',
          imageUrl: 'https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      }),
      await prisma.hotel.create({
        data: {
          id: 2,
          name: 'Driven Palace',
          roomTypes: 'Single, Double e Triple',
          imageUrl: 'https://www.ahstatic.com/photos/5451_ho_00_p_1024x768.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      }),
      await prisma.hotel.create({
        data: {
          id: 3,
          name: 'Driven World',
          roomTypes: 'Single, Double e Triple',
          imageUrl:
            'https://imgcy.trivago.com/c_fill,d_dummy.jpeg,e_sharpen:60,f_auto,h_627,q_auto,w_1200/itemimages/96/95/96959_v6.jpeg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      }),
    ];
  }

  let rooms = await prisma.room.findMany();

  if (rooms.length === 0) {
    rooms = [
      await prisma.room.create({
        data: {
          id: 1,
          hotelId: 1,
          type: 'Single',
          number: '1',
          maxVacancies: 1,
          availableVacancies: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      }),
      await prisma.room.create({
        data: {
          id: 2,
          hotelId: 1,
          type: 'Double',
          number: '2',
          maxVacancies: 2,
          availableVacancies: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      }),
      await prisma.room.create({
        data: {
          id: 3,
          hotelId: 1,
          type: 'Double',
          number: '3',
          maxVacancies: 2,
          availableVacancies: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      }),
      await prisma.room.create({
        data: {
          id: 4,
          hotelId: 1,
          number: '4',
          type: 'Single',
          maxVacancies: 1,
          availableVacancies: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      }),
      await prisma.room.create({
        data: {
          id: 5,
          hotelId: 1,
          type: 'Double',
          number: '5',
          maxVacancies: 2,
          availableVacancies: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      }),
      await prisma.room.create({
        data: {
          id: 6,
          hotelId: 1,
          type: 'Triple',
          number: '6',
          maxVacancies: 2,
          availableVacancies: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      }),
      await prisma.room.create({
        data: {
          id: 7,
          hotelId: 1,
          number: '7',
          type: 'Single',
          maxVacancies: 1,
          availableVacancies: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      }),
      await prisma.room.create({
        data: {
          id: 8,
          hotelId: 1,
          type: 'Double',
          number: '8',
          maxVacancies: 2,
          availableVacancies: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      }),
      await prisma.room.create({
        data: {
          id: 9,
          hotelId: 1,
          type: 'Single',
          number: '9',
          maxVacancies: 1,
          availableVacancies: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      }),
      await prisma.room.create({
        data: {
          id: 10,
          hotelId: 1,
          type: 'Double',
          number: '10',
          maxVacancies: 2,
          availableVacancies: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      }),
      await prisma.room.create({
        data: {
          id: 11,
          hotelId: 1,
          type: 'Double',
          number: '11',
          maxVacancies: 2,
          availableVacancies: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      }),
      await prisma.room.create({
        data: {
          id: 12,
          hotelId: 1,
          number: '12',
          type: 'Single',
          maxVacancies: 1,
          availableVacancies: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      }),
      await prisma.room.create({
        data: {
          id: 13,
          hotelId: 2,
          type: 'Single',
          number: '1',
          maxVacancies: 1,
          availableVacancies: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      }),
      await prisma.room.create({
        data: {
          id: 14,
          hotelId: 2,
          type: 'Double',
          number: '2',
          maxVacancies: 2,
          availableVacancies: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      }),
      await prisma.room.create({
        data: {
          id: 15,
          hotelId: 2,
          type: 'Triple',
          number: '3',
          maxVacancies: 3,
          availableVacancies: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      }),
      await prisma.room.create({
        data: {
          id: 16,
          hotelId: 2,
          number: '4',
          type: 'Single',
          maxVacancies: 1,
          availableVacancies: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      }),
      await prisma.room.create({
        data: {
          id: 17,
          hotelId: 2,
          type: 'Double',
          number: '5',
          maxVacancies: 2,
          availableVacancies: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      }),
      await prisma.room.create({
        data: {
          id: 18,
          hotelId: 2,
          type: 'Triple',
          number: '6',
          maxVacancies: 3,
          availableVacancies: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      }),
      await prisma.room.create({
        data: {
          id: 19,
          hotelId: 2,
          number: '7',
          type: 'Single',
          maxVacancies: 1,
          availableVacancies: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      }),
      await prisma.room.create({
        data: {
          id: 20,
          hotelId: 2,
          type: 'Double',
          number: '8',
          maxVacancies: 2,
          availableVacancies: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      }),
      await prisma.room.create({
        data: {
          id: 21,
          hotelId: 2,
          type: 'Single',
          number: '9',
          maxVacancies: 1,
          availableVacancies: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      }),
      await prisma.room.create({
        data: {
          id: 22,
          hotelId: 2,
          type: 'Double',
          number: '10',
          maxVacancies: 2,
          availableVacancies: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      }),
      await prisma.room.create({
        data: {
          id: 23,
          hotelId: 2,
          type: 'Triple',
          number: '11',
          maxVacancies: 3,
          availableVacancies: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      }),
      await prisma.room.create({
        data: {
          id: 24,
          hotelId: 2,
          number: '12',
          type: 'Single',
          maxVacancies: 1,
          availableVacancies: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      }),
      await prisma.room.create({
        data: {
          id: 25,
          hotelId: 3,
          type: 'Single',
          number: '1',
          maxVacancies: 1,
          availableVacancies: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      }),
      await prisma.room.create({
        data: {
          id: 26,
          hotelId: 3,
          type: 'Double',
          number: '2',
          maxVacancies: 2,
          availableVacancies: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      }),
      await prisma.room.create({
        data: {
          id: 27,
          hotelId: 3,
          type: 'Triple',
          number: '3',
          maxVacancies: 3,
          availableVacancies: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      }),
      await prisma.room.create({
        data: {
          id: 28,
          hotelId: 3,
          number: '4',
          type: 'Single',
          maxVacancies: 1,
          availableVacancies: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      }),
      await prisma.room.create({
        data: {
          id: 29,
          hotelId: 3,
          type: 'Double',
          number: '5',
          maxVacancies: 2,
          availableVacancies: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      }),
      await prisma.room.create({
        data: {
          id: 30,
          hotelId: 3,
          type: 'Triple',
          number: '6',
          maxVacancies: 3,
          availableVacancies: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      }),
      await prisma.room.create({
        data: {
          id: 31,
          hotelId: 3,
          number: '7',
          type: 'Single',
          maxVacancies: 1,
          availableVacancies: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      }),
      await prisma.room.create({
        data: {
          id: 32,
          hotelId: 3,
          type: 'Double',
          number: '8',
          maxVacancies: 2,
          availableVacancies: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      }),
      await prisma.room.create({
        data: {
          id: 33,
          hotelId: 3,
          type: 'Single',
          number: '9',
          maxVacancies: 1,
          availableVacancies: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      }),
      await prisma.room.create({
        data: {
          id: 34,
          hotelId: 3,
          type: 'Double',
          number: '10',
          maxVacancies: 2,
          availableVacancies: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      }),
      await prisma.room.create({
        data: {
          id: 35,
          hotelId: 3,
          type: 'Triple',
          number: '11',
          maxVacancies: 3,
          availableVacancies: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      }),
      await prisma.room.create({
        data: {
          id: 36,
          hotelId: 3,
          number: '12',
          type: 'Single',
          maxVacancies: 1,
          availableVacancies: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      }),
    ];
  }

  console.log({ event });
  console.log(modality);
  console.log(accommodation);
  console.log(hotels);
  console.log(rooms);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
