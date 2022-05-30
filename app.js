require("colors");
const { mostrarMenu, pausa } = require("./helpers/mensajes");

console.clear();
const main = async () => {
	console.log("Starting app...".green);

	let opt = "";
	do {
		opt = await mostrarMenu();
		if (opt !== "0") {
			await pausa();
		}
	} while (opt != 0);
};

main();
