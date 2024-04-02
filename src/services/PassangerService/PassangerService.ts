import db from "../../connection";
import util from "util";
import { IPassengerService } from "./types";
const query: any = util.promisify(db.query).bind(db)

export const findPassangersQuery = async({Name, Survived, Pclass}: IPassengerService) => {
    if(Name) return await query('SELECT * FROM passenger WHERE Name LIKE ?', [`%${Name}%`])
    if(Survived && Pclass) return await query('SELECT * FROM passenger WHERE Survived = ? AND Pclass = ?', [Survived, Pclass])
}

export const findPassangersSurvivedQuery = async() => {
    return await query('SELECT COUNT(*) as Total_Selamat, Pclass FROM passenger WHERE Survived = 1 GROUP BY Pclass HAVING Total_Selamat')
}

export const findPassangerTotalQuery = async() => {
    return await query('SELECT COUNT(*) As total_selamat, Sex FROM passenger WHERE Survived = 1 GROUP BY Sex HAVING total_selamat')
}
