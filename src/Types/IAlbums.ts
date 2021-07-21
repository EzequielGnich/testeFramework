import IEntity from "./IEntity";
import { IUser } from "./IUser";

export interface IAlbums extends IEntity {
	userId: number;
	title: string;
	user: IUser;
}
