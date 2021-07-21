import IEntity from "./IEntity";

export interface IComment extends IEntity {
	postId: number;
	name: string;
	email: string;
	body: string;
}
