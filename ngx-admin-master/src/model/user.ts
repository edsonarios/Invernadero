export class User{
	constructor(
		public id: string,
		public nombre: string,
		public ap_paterno: string,
		public ap_materno: string,
		public tipo: string,
		public direccion: string,
		public telefono: string,
		public correo: string,
		public password: string,
		public conectado: string,
		public change: string
		){}
}