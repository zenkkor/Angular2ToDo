/**
 * Base ToDo class
 */

export class ToDo {
  id: number; // The unique ID
  title: string = ''; // Title of item
  state: boolean = false; // State of the item

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
