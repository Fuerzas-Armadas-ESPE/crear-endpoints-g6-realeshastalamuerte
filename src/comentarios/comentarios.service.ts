import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Comentario } from './comentario.model';

@Injectable()
export class ComentariosService {
  constructor(@InjectModel('Comentario') private readonly comentarioModel: Model<Comentario>) {}

  async getAllComentarios(): Promise<Comentario[]> {
    return await this.comentarioModel.find().exec();
  }

  async getComentario(id: string): Promise<Comentario | null> {
    try {
      const comentario = await this.comentarioModel.findById(id).exec();
      if (!comentario) {
        throw new NotFoundException('Publicación no encontrada');
      }
      return comentario;
    } catch (error: any) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async createComentario(comentarioData: any): Promise<Comentario> {
    try {
      const createdComentario = new this.comentarioModel(comentarioData); // No es necesario asignar _id manualmente
      return await createdComentario.save();
    } catch (error: any) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async updateComentario(id: string, comentarioData: any): Promise<Comentario | null> {
    try {
      const existingComentario = await this.comentarioModel.findById(id).exec();
      if (!existingComentario) {
        throw new NotFoundException('Publicación no encontrada');
      }

      // Actualizar los campos de la publicación existente
      existingComentario.comentario = comentarioData.comentario;
      existingComentario.autor = comentarioData.autor;

      // Guardar los cambios en la base de datos
      return await existingComentario.save();
    } catch (error: any) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async deleteComentario(id: string): Promise<void> {
    try {
      await this.comentarioModel.findByIdAndDelete(id).exec();
    } catch (error: any) {
      throw new InternalServerErrorException(error.message);
    }
  }
}
