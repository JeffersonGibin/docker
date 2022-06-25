import { addPeople } from "../database/add-people.js";
import { getPeople } from "../database/get-people.js";

export const routes = async (app) => {
	const buildPage = (peoples) => {
		const names = peoples
			.map((people) => {
				return `<li>${people.name}</li>`;
			})
			.join(" ");

		return `
        <h1>Full Cycle Rocks!</h1>
        <ul>
            ${names}
        </ul>
        `;
	};

	app.post("/people", async (req, res) => {
		await addPeople(req.body.name);
		res.json({
			message: "People created successfull",
		});
	});

	app.get("/people", async (req, res) => {
		const peoples = await getPeople();
		res.json({
			data: peoples,
		});
	});

	app.get("/", async (req, res) => {

        const param = req.query.name || 'Jeff Bezos'
		const peoples = await getPeople();
        const peopleExist = peoples.find((people) => people.name === param);

        if(!peopleExist){
            await addPeople(param);
        }

        const peoplesAfterCreated = await getPeople();
		const page = buildPage(peoplesAfterCreated);
		res.end(page);
	});
};
