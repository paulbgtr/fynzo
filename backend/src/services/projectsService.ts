import { eq } from "drizzle-orm";
import db from "../db/db";
import { projects } from "../db/schemas";

export class ProjectsService {
  async getAllProjects() {
    return await db.select().from(projects);
  }

  async getProjectById(id: number) {
    return await db.select().from(projects).where(eq(projects.id, id));
  }

  async createProject(project: any) {
    return await db.insert(projects).values(project).returning();
  }

  async updateProject(id: number, project: any) {
    return await db
      .update(projects)
      .set(project)
      .where(eq(projects.id, id))
      .returning();
  }

  async deleteProject(id: number) {
    return await db.delete(projects).where(eq(projects.id, id)).returning();
  }
}
