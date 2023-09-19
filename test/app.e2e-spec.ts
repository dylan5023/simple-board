import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('e2e test', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  describe('AppController', () => {
    it('/ (GET)', () => {
      return request(app.getHttpServer())
        .get('/')
        .expect(200)
        .expect('Hello World!');
    });

    it('/name?name=dylan (GET)', () => {
      return request(app.getHttpServer())
        .get('/name?name=dylan')
        .expect(200)
        .expect('dylan hello');
    });

    it('[Login]', () => {
      return request(app.getHttpServer())
        .post('/login')
        .send({
          username: 'dylan',
          password: 'dylan',
        })
        .expect(201);
    });
  });

  describe('BoardController', () => {
    it('Get board', () => {
      return request(app.getHttpServer()).get('/board').expect(200);
    });
  });

  describe('UserController', () => {});
});
