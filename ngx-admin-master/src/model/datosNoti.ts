export class DatosNoti{
	public get cuerpo(): string {
		return this._cuerpo;
	}
	public set cuerpo(value: string) {
		this._cuerpo = value;
	}
	public get titulo(): string {
		return this._titulo;
	}
	public set titulo(value: string) {
		this._titulo = value;
	}
	public get id(): number {
		return this._id;
	}
	public set id(value: number) {
		this._id = value;
	}
	constructor(
		private _id: number,
		private _titulo: string,
		private _cuerpo: string
		){}
	
		
}