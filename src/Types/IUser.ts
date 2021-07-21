import IEntity from "./IEntity";
import { IAddress } from "./IAddress";
import { ICompany } from "./ICompany";

export interface IUser extends IEntity {
	name: string;
	username: string;
	email: string;
	address: IAddress;
	phone: string;
	website: string;
	company: ICompany;
}
