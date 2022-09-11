import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Book } from './book.model';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql', // dialeto do banco de dados
      host: '0.0.0.0', // endereço do servidor do banco de dados
      port: 3306, // porta do banco de dados. A porta padrão é 3306, mas estou usando 3307 por conflitos na minha máquina
      username: 'root', // usuário do MySQL
      password: 'estudo123', // senha do usuário do MySQL
      database: 'public', // nome do banco de dados
      models: [], // por enquanto vamos deixar em branco
      synchronize: true,
      autoLoadModels: true,
    }),
    SequelizeModule.forFeature([Book]),
  ],
  controllers: [AppController, BooksController],
  providers: [AppService, BooksService],
})
export class AppModule {}
