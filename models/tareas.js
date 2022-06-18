const Tarea = require("./tarea");

class Tareas {
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

	borrarTarea(id) {
		if (this._listado[id]) {
			delete this._listado[id];
		}
	}

	crearTarea(desc = "") {
		const tarea = new Tarea(desc);
		this._listado[tarea.id] = tarea;
	}

	cargarTareaFromArray(tareas = []) {
		tareas.forEach((tarea) => {
			this._listado[tarea.id] = tarea;
		});
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

	listarPendientesCompletadas(completadas = true) {
		let idx = 1;
		this.listadoArr.forEach((tarea) => {
			if (completadas) {
				if (tarea.completadaEn) {
					const { desc, completadaEn } = tarea;
					console.log(
						`${(idx + ".").green} ${desc} :: ${"Completada en:"} ${
							`${completadaEn}`.green
						}`
					);
					idx++;
				}
			} else {
				if (!tarea.completadaEn) {
					console.log(
						`${(idx + ".").green} ${tarea.desc} :: ${"Pendiente".red}`
					);
					idx++;
				}
			}
		});
	}

	toggleCompletada(ids) {
		ids.forEach((id) => {
			const tarea = this._listado[id];
			if (!tarea.completadaEn) {
				tarea.completadaEn = new Date().toISOString();
			}
		});

		this.listadoArr.forEach((tarea) => {
			if (!ids.includes(tarea.id)) {
				tarea.completadaEn = null;
			}
		});
	}
}

module.exports = Tareas;
