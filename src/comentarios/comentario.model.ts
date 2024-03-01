// post.model.ts
import { Schema, Document } from 'mongoose';

export interface Comentario extends Document {
  id:number | undefined;
  comentario:string | undefined;    
  idpost:string | undefined;
  autor:string | undefined;
}

export const ComentarioSchema = new Schema<Comentario>(
  {
    _id: { type: Schema.Types.ObjectId, auto: true }, // Definir explícitamente _id como ObjectId
    comentario: { type: String, required: true },
    idpost: { type: String, required: true },
    autor: { type: String, required: true },
  },
  { timestamps: true },
); // Añadir timestamps para createdAt y updatedAt
