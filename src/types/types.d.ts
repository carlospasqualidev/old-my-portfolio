export interface IUser {
  id: string;
  name: string;
  email: string;
  image: string;
  role: string;
  createdAt: string;
  lastAccess: string;
  isBlocked: boolean;
  isDeleted?: boolean;
  Permissions?: [
    {
      Permission: {
        name: string;
      };
    },
  ];
}
