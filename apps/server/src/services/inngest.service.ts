import { Inject, Service } from "../helpers/helper.di.ts";
import { UserService } from "../services/user.service.ts";
import { Inngest } from "../lib/inngest.ts";
import { syncUserSchema } from "../validators.ts/userSchema.ts";

@Service()
export class InngestService {
  private inngest;

  public syncUserCreation;
  public syncUserDeletion;
  public syncUserUpdation;

  constructor(
    @Inject("UserService") private service: UserService,
    @Inject("Inngest") private inngestService: Inngest
  ) {
    this.inngest = this.inngestService.getInngest();

    this.syncUserCreation = this.inngest.createFunction(
      { id: "sync-user-from-clerk" },
      { event: "clerk/user.created" },
      async ({ event }) => {
        const parsed = syncUserSchema.parse(event.data);
        const response = await this.service.syncUserCreation(parsed);
        return response;
      }
    );

    this.syncUserDeletion = this.inngest.createFunction(
      { id: "delete-user-from-clerk" },
      { event: "clerk/user.deleted" },
      async ({ event }) => {
        const { id } = event.data;
        const response = await this.service.syncUserDeletion(id);
        return response;
      }
    );

    this.syncUserUpdation = this.inngest.createFunction(
      { id: "update-user-from-clerk" },
      { event: "clerk/user.updated" },
      async ({ event }) => {
        const parsed = syncUserSchema.parse(event.data);
        const response = await this.service.syncUserUpdation({
          ...parsed,
          id: event.data.id,
        });
        return response;
      }
    );
  }

  getInngest() {
    return this.inngest;
  }

  getInngestFunctions() {
    return [
      this.syncUserCreation,
      this.syncUserDeletion,
      this.syncUserUpdation,
    ];
  }
}
