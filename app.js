require("colors");
const { inquirerMenu, pausa } = require("./helpers/inquirer");

console.clear();

const main = async () => {
	console.log("Starting app...".green);

	let opt = "";
	do {
		opt = await inquirerMenu();
		console.log({ opt });

		await pausa();
	} while (opt !== "0");
};

main();
