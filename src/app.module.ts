import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PostsModule } from './posts/posts.module';
import { ComentariosModule } from './comentarios/comentarios.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://root:example@localhost:27017', {dbName: 'mydatabase'}),
    PostsModule,
    ComentariosModule,
  ],
})
export class AppModule {}
