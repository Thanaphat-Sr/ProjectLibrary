export interface Book {
    title: string;
    isbn: string;
    category: string;
    authorId: number;
}

export interface Author {
    id: number;
    firstName: string;
    lastName: string;
    affiliation: string;
}

export interface Member {
    memberId: number;
    firstName: string;
    lastName: string;
    phoneNumber: string;
}

export interface Borrow {
    borrowerId: number;
    bookId: number;
    numberOfBooks: number;
    dueDate: Date;
    returnTime?: Date;
}