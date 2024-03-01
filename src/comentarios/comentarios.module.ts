import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ComentariosController } from './comentarios.controller';
import { ComentariosService } from './comentarios.service';
import { ComentarioSchema } from './comentario.model';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Comentario', schema: ComentarioSchema }])],
  controllers: [ComentariosController],
  providers: [ComentariosService],
})
export class ComentariosModule {}
