//Define o tipo genérico TransformType
type TransformType<T, From, To> = {
  [K in keyof T]: T[K] extends From ? To : T[K];
};

type User = {
  id: number;
  name: string;
  isActive: boolean;
  age: number;
  isVerified: boolean;
};

type TransformedUser = TransformType<User, boolean, string>;

const user: TransformedUser = {
  id: 4,
  name: "Yumi",
  isActive: "true",
  age: 26,
  isVerified: "false",
};

console.log(TransformedUser);
