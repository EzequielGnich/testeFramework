import IEntity from "./IEntity";

export interface IPhotos extends IEntity {
	albumId: number;
	title: string;
	url: string;
	thumbnailUrl: string;
}
