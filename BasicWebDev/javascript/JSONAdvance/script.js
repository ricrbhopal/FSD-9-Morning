const data = {
  name: "Anuj",
  gender: "male",
  friendsName: {
    friend1: {
      name: "abc",
      gender: "male",
      address: {
        houseno: "2",
        city: "bhopal",
        state: "MP",
      },
    },
    friend2: {
      name: "def",
      gender: "female",
    },
    friend3: {
      name: "ghi",
      gender: "male",
    },
    friend4: {
      name: "jkl",
      gender: "female",
    },
  },
};

console.log(data.friendsName.friend3.gender);

console.log(data.friendsName.friend1.address?.city);
console.log(data.friendsName.friend3.address?.city);

const OnlyKeys = Object.keys(data);
console.log(OnlyKeys);

const OnlyValues = Object.values(data);
console.log(OnlyValues);

const entites = Object.entries(data);
console.log(entites);

const emp = {
  name: "Rahul",
  age: 28,
  gender: "male",
  salary: 30000,
};

const { name, salary } = emp;

console.log(name);
console.log(salary);

const { gender, friendsName } = data;

console.log(friendsName);

const ar = ["rahul", 28, "male", 30000];
const [nm, sal] = ar;

console.log(nm, sal);

const products = [
  {
    name: "1asdfghjk",
    description:
      "asdjansdkjcnadc kjadnfcjk asjdnca kajsd ckas cijkanc kjsdc sdikcj adocjs ncojasncfghjk",
  },
  {
    name: "2asdfghjk",
    description:
      "asdjansdkjcnadc kjadnfcjk asjdnca kajsd ckas cijkanc kjsdc sdikcj adocjs ncojasncfghjk",
  },
  {
    name: "3asdfghjk",
    description:
      "asdjansdkjcnadc kjadnfcjk asjdnca kajsd ckas cijkanc kjsdc sdikcj adocjs ncojasncfghjk",
  },
  {
    name: "4asdfghjk",
    description:
      "asdjansdkjcnadc kjadnfcjk asjdnca kajsd ckas cijkanc kjsdc sdikcj adocjs ncojasncfghjk",
  },
  {
    name: "5asdfghjk",
    description:
      "asdjansdkjcnadc kjadnfcjk asjdnca kajsd ckas cijkanc kjsdc sdikcj adocjs ncojasncfghjk",
  },
  {
    name: "6asdfghjk",
    description:
      "asdjansdkjcnadc kjadnfcjk asjdnca kajsd ckas cijkanc kjsdc sdikcj adocjs ncojasncfghjk",
  },
  {
    name: "7asdfghjk",
    description:
      "asdjansdkjcnadc kjadnfcjk asjdnca kajsd ckas cijkanc kjsdc sdikcj adocjs ncojasncfghjk",
  },
  {
    name: "8asdfghjk",
    description:
      "asdjansdkjcnadc kjadnfcjk asjdnca kajsd ckas cijkanc kjsdc sdikcj adocjs ncojasncfghjk",
  },
];

console.log(...products);

const ar2 = [10, 20, 30, 40, 50, 60];
console.log(ar2);

ar2.forEach((element) => console.log(element));
console.log(...ar2);

function sum(...numberarray) {
  return numberarray.reduce((total = 0, num) => (total += num));
}

console.log(sum(2, 3, 4, 5, 6));

const JSONString = JSON.stringify(data);

console.log(JSONString);

const dataRetrive = JSON.parse(JSONString);

console.log(dataRetrive);
