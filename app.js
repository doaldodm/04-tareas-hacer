require("colors");
const { inquirerMenu, pausa, leerInput } = require("./helpers/inquirer");
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
				console.log(tareas.listadoArr);
				break;
		}

		guardarDB(tareas.listadoArr);
		await pausa();
	} while (opt !== "0");
};

main();
