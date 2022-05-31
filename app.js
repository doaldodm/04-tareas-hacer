require("colors");
const { inquirerMenu, pausa, leerInput } = require("./helpers/inquirer");

const Tareas = require("./models/tareas");
console.clear();

const main = async () => {
	let opt = "";
	const tareas = new Tareas();

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

		await pausa();
	} while (opt !== "0");
};

main();
