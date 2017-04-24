
interface ICocheBase {
	getModelo ():string;
	getVelocidad():number;
}

class Coche implements ICocheBase{
	public color: string;
	public modelo: string;
	public velocidad: number;


	//Constructor
	constructor(modelo = null) {
		this.velocidad = 0;
		this.color = "Blanco";
		if(modelo == null){
			this.modelo = "BMV Generico"
		}else{
			this.modelo = modelo;
		}
	}

	//Metodos get y set
	public getColor() {
		return this.color;
	}

	public setColor(color:string) {
		this.color = color;
	}

	public getModelo():string {
		return this.modelo;
	}

	public setModelo(modelo:string) {
		this.modelo = modelo;
	}

	public getVelocidad():number {
		return this.velocidad;
	}


	//Otros metodos
	public acelerar() {
		this.velocidad++;
	}

	public frenar() {
		this.velocidad--;
	}
}

var coche = new Coche("Renault Clio");
coche.setColor("ROJO");
coche.acelerar();
coche.acelerar();
coche.frenar();

console.log("Color de coche 1 es: " + coche.getColor());
console.log("Velocidad de coche 1 es: " + coche.getVelocidad());
console.log("El modelo de coche 1 es: " + coche.getModelo());

/*
var coche2 = new Coche();
coche2.setColor("AZUL");

console.log("Color de coche 2 es: " + coche2.getColor());

var coche3 = new Coche();
coche3.setColor("VERDE");

console.log("Color de coche 3 es: " + coche3.getColor());
*/