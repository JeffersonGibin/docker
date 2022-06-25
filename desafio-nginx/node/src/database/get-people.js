import { connect } from "./connect.js";

export const getPeople = async () => {
	const conn = await connect();
	const [data] = await conn.query("SELECT name FROM people");
	conn.end();

	return data;
};
