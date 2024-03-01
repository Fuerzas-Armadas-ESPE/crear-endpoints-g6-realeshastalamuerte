import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { ComentariosService } from './comentarios.service';

@Controller('comentarios')
export class ComentariosController {
  constructor(private readonly comentariosService: ComentariosService) {}

  @Get()
  async getAllComentarios() {
    return await this.comentariosService.getAllComentarios();
  }

  @Get(':id')
  async getComentario(@Param('id') id: string) {
    return await this.comentariosService.getComentario(id);
  }

  @Post()
  async createComentario(@Body() comentarioData: any) {
    return await this.comentariosService.createComentario(comentarioData);
  }

  @Put(':id')
  async updateComentario(
    @Param('id') id: string,
    @Body() comentarioData: any,
  ): Promise<any> {
    return await this.comentariosService.updateComentario(id, comentarioData);
  }

  @Delete(':id')
  async deleteComentario(@Param('id') id: string) {
    await this.comentariosService.deleteComentario(id);
    return { message: 'Comentario deleted successfully' };
  }
}
