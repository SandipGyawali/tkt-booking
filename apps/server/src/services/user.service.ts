import { Inject, Service } from "../helpers/helper.di.ts";
import { NodePgDatabase } from "drizzle-orm/node-postgres";
import * as schema from "../models/index.ts";
import { type ISyncUserCreation } from "../interfaces/IUser.ts";
import { eq } from "drizzle-orm";

@Service()
export class UserService {
  constructor(
    @Inject("Database") private readonly db: NodePgDatabase<typeof schema>
  ) {}

  /**
   * @param inputData
   * @returns Object
   * add the user created in the clerk to the database.
   */
  async syncUserCreation(inputData: ISyncUserCreation) {
    const userData = {
      ...inputData,
    };

    const newUser = (
      await this.db.insert(schema.usersTable).values(userData).returning()
    ).at(0);

    return {
      ...newUser,
    };
  }

  async syncUserDeletion(id: number) {
    const userExists = (
      await this.db
        .select()
        .from(schema.usersTable)
        .where(eq(schema.usersTable.id, id))
    ).at(0);

    if (!userExists) {
      throw new Error("User Does not exists with provided id");
    }

    await this.db.delete(schema.usersTable).where(eq(schema.usersTable.id, id));

    return {
      message: `User with id: ${id} deleted successfully`,
    };
  }

  async syncUserUpdation(inputData: ISyncUserCreation & { id: number }) {
    const userExists = (
      await this.db
        .select()
        .from(schema.usersTable)
        .where(eq(schema.usersTable.id, inputData.id))
    ).at(0);

    if (!userExists) {
      throw new Error("User Does not exists with provided id");
    }

    const updateUser = (
      await this.db
        .update(schema.usersTable)
        .set({
          ...inputData,
        })
        .returning()
    ).at(0);

    return updateUser;
  }
}
