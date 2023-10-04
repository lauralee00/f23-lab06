import { Writer } from "../writing/writer";
import { PNGWriter } from "../writing/pngwriter";
import { JPEGWriter } from "../writing/jpegwriter";
import { Line } from "./line";

/**
 * Refactor Exercise 3: (Mis-)Shaped
 *
 * @author Zishen Wen (F22), Deyuan Chen (S22)
 */
interface Shape {
	
    toLines(): Line[];

    draw(writer: Writer): void;
}

abstract class AbstractShape implements Shape {

	/**
     * Converts shape into lines.
     *
     * @return lines of this shape.
     */
	abstract toLines(): Line[];

	/**
     * Draws lines to file.
     */
	public draw(writer: Writer): void {
		try {
			for (let line of this.toLines()) {
				// TODO: what is the purpose of the code there?
				if (writer instanceof JPEGWriter) {
					writer.write(line.toJPEG());
				}
				else if (writer instanceof PNGWriter) {
					writer.write(line.toPNG());
				}
			}
		} catch (e) {
			console.log(e);
		}
	}
}

export { Shape, AbstractShape }