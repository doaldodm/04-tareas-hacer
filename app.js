require("colors");
const { inquirerMenu, pausa, leerInput } = require("./helpers/inquirer");

const Tareas = require("./models/tareas");
console.clear();

const main = async () => {
	console.log("Starting app...".green);

	let opt = "";
	const tareas = new Tareas();

	do {
		opt = await inquirerMenu();

		switch (opt) {
			case "1":
				const desc = await leerInput("Ingrese la descripción de la tarea: ");
				tareas.crearTarea(desc);
				break;

			case "2":
				console.log(tareas._listado);
				break;
		}

		console.log({ opt });

		await pausa();
	} while (opt !== "0");
};

main();
