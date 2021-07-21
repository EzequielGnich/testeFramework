import IEntity from "./IEntity";
import { IComment } from "./IComment";
import { IUser } from "./IUser";

export interface IPosts extends IEntity {
	userId: number;
	title: string;
	body: string;
	user: IUser;
	comments: IComment[];
}
