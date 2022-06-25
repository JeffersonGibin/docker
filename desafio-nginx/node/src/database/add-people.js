import { connect } from "./connect.js";

export const addPeople = async (name) => {
	const conn = await connect();
	const sql = `INSERT INTO people(name) values('${name}')`;
	await conn.query(sql);
	conn.end();
};
