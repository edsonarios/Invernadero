export interface InvernaderoInterf {
   createdAt: string;
   departamento: string;
   id: number;
   logo: string;
   provincia: string;
   tempMaxima: string;
   tempMedia: string;
   tempMinima: string;
   tiempoFuncionMotor: string;
   tiempoIntermitencia: string;
   tiempoPausa: string;
   ubicacion: string;
   updatedAt: string;
   usuarioId: number;
}
export interface agenteMessage {
   agent: Agent;
   metrics: Message[];
   timestamp: number;
}

interface Agent {
   hostname: string;
   uuid: string;
}
interface Message {
   type: string;
   value: number;
}

export interface UsuarioI {
   id?: string;
   nombre: string;
   ap_paterno: string;
   ap_materno: string;
   tipo: string;
   direccion: string;
   telefono: string;
   correo: string;
   password: string;
   conectado: string;
   change: string;
}

export interface InvernaderoI {
   createdAt?: string;
   departamento: string;
   id?: string;
   logo: string;
   provincia: string;
   tempMaxima: string;
   tempMedia: string;
   tempMinima: string;
   tiempoFuncionMotor: string;
   tiempoIntermitencia: string;
   tiempoPausa: string;
   ubicacion: string;
   updatedAt?: string;
   usuarioId?: string;
}
