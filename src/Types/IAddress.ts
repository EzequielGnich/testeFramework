import IEntity from "./IEntity";

export interface IAddress extends IEntity {
	street: string;
	suite: string;
	city: string;
	zipcode: string;
	geo: {
		lat: string;
		lng: string;
	};
}
