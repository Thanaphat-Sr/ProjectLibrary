import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function createMembers() {
    const members = [
        { firstName: 'John', lastName: 'Doe', phoneNumber: '123-456-7890' },
        { firstName: 'Jane', lastName: 'Smith', phoneNumber: '098-765-4321' },
        { firstName: 'Alice', lastName: 'Johnson', phoneNumber: '555-555-5555' },
        { firstName: 'Bob', lastName: 'Brown', phoneNumber: '444-444-4444' },
        { firstName: 'Charlie', lastName: 'Davis', phoneNumber: '333-333-3333' }
    ];

    for (const member of members) {
        await prisma.member.create({ data: member });
    }
    console.log("Member success")
}