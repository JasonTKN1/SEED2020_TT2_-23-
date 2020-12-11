export class Customer {
    custId: number;
    phoneNumber : string;
    firstName: string;
    lastName: string;
    address: string;
    email: string;
    nric: string;
    gender: string;
    age: number;

    constructor(custId?: number, phoneNumber?: string, firstName?: string, lastName?: string, address?: string, email?: string, nric?: string, gender?: string, age?: number){
        this.custId = custId;		
		this.lastName = lastName;
		this.phoneNumber = phoneNumber;
		this.firstName = firstName;
        this.address = address;
        this.email = email;
		this.nric = nric;
		this.gender = gender;
		this.age = age;
    }
}
