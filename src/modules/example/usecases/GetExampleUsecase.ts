interface IGetExample {
  message: string;
}

export class GetExampleUsecase {
  execute({ message }: IGetExample) {
    return { text: "This message was parsed!", message };
  }
}
