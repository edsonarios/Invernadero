export class Invernadero{
	constructor(
		public id: string,
		public departamento: string,
		public ubicacion: string,
		public provincia: string,
		public tempMaxima: string,
		public tempMinima: string,
		public tempMedia: string,
		public tiempoIntermitencia:string,
		public usuarioId: string,
		public tiempoFuncionMotor: string,
		public tiempoPausa: string
		
		){}
}