export class Message{
  user!: User;
  message!: string;
  attachment: Attachment[] = [] ;
  sentTime!: Date;
}
export class User{
  id!: number;
  userName!: string;
  avatar!: string;
}
export class Attachment{
  name!: string;
  type!: string;
  source!: string;
  // reaction!: string;
}
