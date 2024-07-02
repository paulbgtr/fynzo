import { db } from "../db";
import { developers } from "../schemas/developers";

export class Developer {
  static async getAll() {
    return await db.select().from(developers);
  }
}
