require("colors");
const {
	inquirerMenu,
	pausa,
	leerInput,
	listadoTareasBorrar,
	confirmar,
} = require("./helpers/inquirer");
const { guardarDB, leerDB } = require("./helpers/guardarArchivo");
const Tareas = require("./models/tareas");
console.clear();

const main = async () => {
	let opt = "";
	const tareas = new Tareas();
	const tareasDB = leerDB();

	if (tareasDB) {
		tareas.cargarTareaFromArray(tareasDB);
	}

	do {
		//imprimir menu
		opt = await inquirerMenu();
		switch (opt) {
			case "1":
				const desc = await leerInput("Ingrese la descripción de la tarea: ");
				tareas.crearTarea(desc);
				break;

			case "2":
				tareas.listadoCompleto();
				break;

			case "3":
				tareas.listarPendientesCompletadas();
				break;

			case "4":
				tareas.listarPendientesCompletadas(false);
				break;

			case "5":
				break;

			case "6": //borrar tarea
				const id = await listadoTareasBorrar(tareas.listadoArr);

				if (id !== "0") {
					const ok = await confirmar("Esta seguro?");
					if (ok) {
						tareas.borrarTarea(id);
						console.log("tarea borrada");
					}
				}
				break;
		}

		guardarDB(tareas.listadoArr);
		await pausa();
	} while (opt !== "0");
};

main();
