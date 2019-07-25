export class DatosNoti{
	constructor(
		public id: number,
		public fecha: string,
		){}
	
	setId(id){
		this.id = id; 
	}	
}