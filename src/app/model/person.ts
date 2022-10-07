export class Person {
    firstName?: string;
    lastName?: string;
    phoneNo?: number;
    email?: string;
    address?: string;
    city?: string;
    state?: string;
    zip?: number;

    constructor(firstName: string, lastName: string, phoneNo: number, email: string, address: string, city: string, state: string, zip: number){
        this.firstName = firstName
        this.lastName = lastName
        this.phoneNo = phoneNo
        this.email = email
        this.address = address
        this.city = city
        this.state = state
        this.zip = zip
    }
}
