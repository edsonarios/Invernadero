export class Producto{
	constructor(
		public id: string,
		public nombreProducto: string,
		public tiempoProduccion:string,
		public tempMaxRecomendada: string,
		public tempMinRecomendada: string,
		public imagen:string,
		){}
}