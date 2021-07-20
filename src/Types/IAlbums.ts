import IEntity from "./IEntity";

export interface IAlbums extends IEntity {
	userId: number;
	title: string;
}
