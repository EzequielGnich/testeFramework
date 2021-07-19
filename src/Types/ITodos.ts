import IEntity from "./IEntity";

export interface ITodos extends IEntity {
	userId: number;
	title: string;
	completed: boolean;
}
