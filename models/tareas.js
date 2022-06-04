const Tarea = require("./tarea");

class Tareas {
	_listado = {
		abc: 123,
	};

	get listadoArr() {
		const listado = [];
		Object.keys(this._listado).forEach((key) => {
			listado.push(this._listado[key]);
		});

		return listado;
	}

	constructor() {
		this._listado = {};
	}

	cargarTareaFromArray(tareas = []) {
		tareas.forEach((tarea) => {
			this._listado[tarea.id] = tarea;
		});
	}

	crearTarea(desc = "") {
		const tarea = new Tarea(desc);
		this._listado[tarea.id] = tarea;
	}

	listadoCompleto() {
		this.listadoArr.forEach((tarea, i) => {
			console.log(
				`${(i + 1 + ".").green} ${tarea.desc} :: ${
					tarea.completadaEn ? "Completada".green : "Pendiente".red
				}`
			);
		});
	}
}

module.exports = Tareas;
