export class Message{
  user!: User;
  message!: string;
  attachment: Attachment[] = [] ;
  sentTime!: Date;
}
export class User{
  id!: string;
  userName!: string;
  avatar!: string;
  email: string = "";
}
export class Attachment{
  name!: string;
  type!: string;
  source!: string;
  // reaction!: string;
}
