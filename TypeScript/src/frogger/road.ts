/**
 * Refactor Task 1.
 *
 * @author Zishen Wen (F22), Deyuan Chen (S22)
 */
class Road {
	private occupied: boolean[]

	constructor(occupied: boolean[]) {
		this.occupied = occupied;
	}

	public getOccupied(position: number): boolean {
		return this.occupied[position];
	}
	public getLength(): number {
		return this.occupied.length
	}
}

export { Road }