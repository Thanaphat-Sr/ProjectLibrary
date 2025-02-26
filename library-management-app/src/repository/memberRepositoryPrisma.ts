import { PrismaClient } from '@prisma/client';
import type { Member } from '../models/member';

const prisma = new PrismaClient();

export function getAllMembers(): Promise<Member[]> {
    return prisma.member.findMany();
}

export function getMemberById(id: number): Promise<Member | null> {
    return prisma.member.findUnique({
        where: { id },
    });
}

export function getMemberByName(name: string): Promise<Member[]> {
    return prisma.member.findMany({
        where: {
            OR: [
                { firstName: { contains: name } },
                { lastName: { contains: name } }
            ]
        }
    });
}

export function addMember(newMember: Member): Promise<Member> {
    return prisma.member.create({
        data: {
            firstName: newMember.firstName,
            lastName: newMember.lastName,
            phoneNumber: newMember.phoneNumber,
        },
    });
}