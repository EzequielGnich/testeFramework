import IEntity from "./IEntity";
import { IUser } from "./IUser";

export interface ITodos extends IEntity {
	userId: number;
	title: string;
	completed: boolean;
	user: IUser;
}
