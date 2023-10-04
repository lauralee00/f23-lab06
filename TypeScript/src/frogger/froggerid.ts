/**
 * Refactor Task 2. Can we use this somewhere?
 *
 * @author Zishen Wen (F22), Deyuan Chen (S22), Duan Liang (F23)
 */
class FroggerID {
	firstName: string;
	lastName: string;
	phoneNumber: string;
	zipCode: string;
	state: string;
	gender: string

	constructor(firstName: string, lastName: string, phoneNumber: string, zipCode: string, state: string, gender: string) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.phoneNumber = phoneNumber;
		this.zipCode = zipCode;
		this.state = state;
		this.gender = gender;
	}

	public equals(other: FroggerID): boolean {
		return this.firstName === other.firstName && this.lastName === other.lastName && this.phoneNumber === other.phoneNumber
			&& this.zipCode === other.zipCode && this.state === other.state && this.gender === other.gender;
	}
}
export {FroggerID}