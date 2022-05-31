const inquirer = require("inquirer");
require("colors");

const preguntas = [
	{
		type: "list",
		name: "opcion",
		message: "Que desea hacer?",
		choices: [
			{ name: "1. Crear una nueva tarea", value: 1 },
			{ name: "2. Listar tareas", value: 2 },
			{ name: "3. Listar tareas completadas", value: 3 },
			{ name: "4. Listar tareas pendientes", value: 4 },
			{ name: "5. Completar tareas", value: 5 },
			{ name: "6. Borrar tarea", value: 6 },
			{ name: "7. Salir", value: 0 },
		],
	},
];

const inquirerMenu = async () => {
	console.clear();
	console.log("===============================".green);
	console.log("Seleccione una opción:".yellow);
	console.log("===============================\n".green);

	const { opcion } = await inquirer.prompt(preguntas);

	return opcion;
};

const pausa = async () => {
	const question = [
		{
			type: "input",
			name: "enter",
			message: `Presione ${"Enter".green} para continuar`,
		},
	];
	console.log("\n");
	await inquirer.prompt(question);
};

module.exports = { inquirerMenu, pausa };
