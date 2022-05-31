const inquirer = require("inquirer");
require("colors");

const preguntas = [
	{
		type: "list",
		name: "opcion",
		message: "Que desea hacer?",
		choices: [
			{ name: `${"1.".green} Crear una nueva tarea`, value: 1 },
			{ name: `${"2.".green} Listar tareas`, value: 2 },
			{ name: `${"3.".green} Listar tareas completadas`, value: 3 },
			{ name: `${"4.".green} Listar tareas pendientes`, value: 4 },
			{ name: `${"5.".green} Completar tareas`, value: 5 },
			{ name: `${"6.".green} Borrar tarea`, value: 6 },
			{ name: `${"7.".green} Salir`, value: "0" },
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
