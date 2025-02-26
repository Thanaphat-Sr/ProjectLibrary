import { getAllMembers, getMemberById, getMemberByName, addMember } from '../repository/memberRepositoryPrisma';
import type { Member } from '../models/member';

export async function fetchAllMembers(): Promise<Member[]> {
    return await getAllMembers();
}

export async function fetchMemberById(id: number): Promise<Member | null> {
    return await getMemberById(id);
}

export async function fetchMemberByName(name: string): Promise<Member[]> {
    return await getMemberByName(name);
}

export async function createMember(newMember: Member): Promise<Member> {
    return await addMember(newMember);
}