import { Road } from "./road";
import { FroggerID } from "./froggerid";
import { Records } from "./record";
/**
 * Refactor Task 1, 2: Frogger
 *
 * @author Zishen Wen (F22), Deyuan Chen (S22), Duan Liang (F23)
 */
class Frogger {

  // Field for Task 1.
	private road: Road;
  private position: number;

  // Field for Task 2. Anything to add?
  private id: FroggerID;
  private records: Records;
  
  constructor(road: Road, position: number, records: Records, firstName: string, 
    lastName: string, phoneNumber: string, zipCode: string, state: string, gender: string) {
      this.id = new FroggerID(
                  firstName,
                  lastName,
                  phoneNumber, 
                  zipCode,
                  state,
                  gender);
      this.road = road;
      this.position = position;
      this.records = records;
  }

	/**
   * Moves Frogger.
   * @param forward true is move forward, else false.
   * @return true if move successful, else false.
   */
  public move(forward: boolean): boolean {
      let nextPosition: number = this.position + (forward ? 1 : -1);
      if (!this.isValid(nextPosition) || this.isOccupied(nextPosition)) {
          return false;
      }
      this.position = nextPosition;
      return true;
  }

	// TODO: Do you notice any issues here?
  
  
  // Frogger is a god class and Road class is a middle man, since it delegates checking for occupied for any given position to the frogger class.
  public isOccupied(position: number): boolean {
      return this.road.getOccupied(position);
  }

  public isValid(position: number): boolean {
      if (position < 0) return false;
      return position < this.road.getLength();
  }

  /**
   * Records Frogger to the list of records.
   * 
   * @returns true if record successful, else false.
   */
  public recordMyself(): boolean {
    // This is an annoying call...
    let success: boolean = this.records.addRecord(this.id)
    return success
  }

  // long parameter list 
}