import { Test, TestingModule } from '@nestjs/testing';
import { BoardService } from './board.service';
import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Board } from 'src/entity/board.entity';

describe('BoardService', () => {
  let boardService: BoardService;
  let boardRepository: Repository<Board>;
  const boardRepositoryToken = getRepositoryToken(Board);

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BoardService,
        {
          provide: boardRepositoryToken,
          useValue: {
            create: jest.fn(),
            save: jest.fn(),
            update: jest.fn(),
            delete: jest.fn(),
            findOne: jest.fn(),
            findOneBy: jest.fn(),
          },
        },
      ],
    }).compile();

    boardService = module.get<BoardService>(BoardService);
    boardRepository = module.get<Repository<Board>>(boardRepositoryToken);
  });

  it('boardService should be defined', () => {
    expect(boardService).toBeDefined();
  });
  it('boardService should be defined', () => {
    expect(boardRepository).toBeDefined();
  });

  describe('view post', () => {
    it('The author of post number 2 is dylan.', async () => {
      jest.spyOn(boardRepository, 'findOneBy').mockResolvedValue({
        id: 1,
        userId: 2,
        contents: 'posting',
        user: {
          id: 2,
          username: 'dylan',
          name: 'dylan',
        },
      } as Board);
      const board = await boardService.getBoardById(2);
      expect(board.user.name).toBe('dylan');
    });
  });
});
