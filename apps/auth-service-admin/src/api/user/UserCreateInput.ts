import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  profileId?: string | null;
  roles: InputJsonValue;
  username: string;
};
