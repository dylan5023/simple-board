import { Injectable } from '@nestjs/common';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';

@Injectable()
export class BoardService {
  private boards = [
    {
      id: 1,
      name: 'hello world',
      contents: 'contents 1',
    },
    {
      id: 2,
      name: 'hello world2',
      contents: 'contents 2',
    },
    {
      id: 3,
      name: 'hello world3',
      contents: 'contents 3',
    },
    {
      id: 4,
      name: 'hello world4',
      contents: 'contents 4',
    },
    {
      id: 5,
      name: 'hello world5',
      contents: 'contents 5',
    },
    {
      id: 6,
      name: 'hello world6',
      contents: 'contents 6',
    },
    {
      id: 7,
      name: 'hello world7',
      contents: 'contents 7',
    },
    {
      id: 8,
      name: 'hello world8',
      contents: 'contents 8',
    },
    {
      id: 9,
      name: 'hello world9',
      contents: 'contents 9',
    },
    {
      id: 10,
      name: 'hello world10',
      contents: 'contents 10',
    },
  ];
  findAll() {
    return this.boards;
  }

  find(id: number) {
    const index = this.getBoardId(id);
    return this.boards[index];
  }

  create(data: CreateBoardDto) {
    const newBoard = { id: this.getNextId(), ...data };
    this.boards.push(newBoard);
    return newBoard;
  }

  update(id: number, data: UpdateBoardDto) {
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
