require("colors");

const mostrarMenu = () => {
	return new Promise((resolve) => {
		console.log("===============================".green);
		console.log("Seleccione una opción:".yellow);
		console.log("===============================\n".green);

		console.log(`${"1.".green} Crear una nueva tarea.`);
		console.log(`${"2.".green} Listar tareas.`);
		console.log(`${"3.".green} Listar tareas compleatdas.`);
		console.log(`${"4.".green} Listar tareas pendientes.`);
		console.log(`${"5.".green} Completar tareas.`);
		console.log(`${"6.".green} Borrar tarea.`);
		console.log(`${"0.".green} Salir.\n`);

		const readline = require("readline").createInterface({
			input: process.stdin,
			output: process.stdout,
		});

		readline.question("Seleccione una opción: ", (opcion) => {
			console.log(opcion);
			readline.close();
			resolve(opcion);
		});
	});
};

const pausa = () => {
	return new Promise((resolve) => {
		const readline = require("readline").createInterface({
			input: process.stdin,
			output: process.stdout,
		});

		readline.question(
			`\n Presione ${"Enter".green} para continuar`,
			(opcion) => {
				readline.close();
				resolve();
			}
		);
	});
};

module.exports = { mostrarMenu, pausa };
