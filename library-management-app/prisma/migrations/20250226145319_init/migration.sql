/*
  Warnings:

  - You are about to drop the `Author` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Borrowing` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Member` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Book` DROP FOREIGN KEY `Book_authorId_fkey`;

-- DropForeignKey
ALTER TABLE `Borrowing` DROP FOREIGN KEY `Borrowing_bookId_fkey`;

-- DropForeignKey
ALTER TABLE `Borrowing` DROP FOREIGN KEY `Borrowing_memberId_fkey`;

-- DropIndex
DROP INDEX `Book_authorId_fkey` ON `Book`;

-- DropTable
DROP TABLE `Author`;

-- DropTable
DROP TABLE `Borrowing`;

-- DropTable
DROP TABLE `Member`;
