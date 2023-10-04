import { FroggerID } from "./froggerid";

/**
 * Refactor Task 2.
 *
 * @author Zishen Wen (F22), Deyuan Chen (S22)
 */
class Records {
    private records: FroggerID[];

    constructor() {
        this.records = [];
    }

	/**
     * Adds a person's record.
     *
     * @param id    person's unique FroggerID 
     * @return Return false if the record has existed. Else, return true.
     */
    public addRecord(id: FroggerID) {
        for (let row of this.records) {
            if (id.equals(row)) {
                return false;
            }
        }
        this.records.push(id);
        return true;
    }
}

export { Records }