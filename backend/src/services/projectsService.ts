import { eq } from "drizzle-orm";
import db from "../db/db";
import { projects } from "../db/schemas";

type Project = typeof projects.$inferInsert;

export class ProjectsService {
  async getAllProjects() {
    return await db.select().from(projects);
  }

  async getProjectById(id: number) {
    return await db.select().from(projects).where(eq(projects.id, id));
  }

  async createProject(project: Project) {
    return await db.insert(projects).values(project).returning();
  }

  async updateProject(id: number, project: Project) {
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
