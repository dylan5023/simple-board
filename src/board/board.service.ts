import { Injectable } from '@nestjs/common';

@Injectable()
export class BoardService {
  private boards = [
    {
      id: 1,
      name: 'hello world',
      content: 'Content 1',
    },
    {
      id: 2,
      name: 'hello world2',
      content: 'Content 2',
    },
    {
      id: 3,
      name: 'hello world3',
      content: 'Content 3',
    },
    {
      id: 4,
      name: 'hello world4',
      content: 'Content 4',
    },
    {
      id: 5,
      name: 'hello world5',
      content: 'Content 5',
    },
    {
      id: 6,
      name: 'hello world6',
      content: 'Content 6',
    },
    {
      id: 7,
      name: 'hello world7',
      content: 'Content 7',
    },
    {
      id: 8,
      name: 'hello world8',
      content: 'Content 8',
    },
    {
      id: 9,
      name: 'hello world9',
      content: 'Content 9',
    },
    {
      id: 10,
      name: 'hello world10',
      content: 'Content 10',
    },
  ];
  findAll() {
    return this.boards;
  }

  find(id: number) {
    const index = this.getBoardId(id);
    return this.boards[index];
  }

  create(data) {
    const newBoard = { id: this.getNextId(), ...data };
    this.boards.push(newBoard);
    return newBoard;
  }

  update(id: number, data) {
    const index = this.getBoardId(id);

    if (index > -1) {
      this.boards[index] = {
        ...this.boards[index],
        ...data,
      };
      return this.boards[index];
    }
    return null;
  }

  delete(id: number) {
    const index = this.getBoardId(id);
    if (index > -1) {
      const deleteBoard = this.boards[index];
      this.boards.splice(index, 1);
      return deleteBoard;
    }
    return null;
  }

  getBoardId(id: number) {
    return this.boards.findIndex((board) => board.id === id);
  }
  getNextId() {
    return this.boards.sort((a, b) => b.id - a.id)[0].id + 1;
  }
}
