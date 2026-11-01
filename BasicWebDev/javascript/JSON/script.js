const data = {
  name: "Rahul",
  age: 28,
  gender: "male",
  salary: 30000,
};

data["age"] = 30; //bracket Notation

data.salary = 45000; // dot notation

console.log(data);

const employees = [
  {
    name: "Rahul",
    age: 28,
    gender: "male",
    salary: 30000,
    projects: [{ projectName: "abcd", timeline: 2, role: "xyz" }],
  },
  {
    name: "manisha",
    age: 28,
    gender: "female",
    salary: 30000,
    projects: [
      { projectName: "abcd", timeline: 2, role: "xyz" },
      { projectName: "def", timeline: 4, role: "prq" },
    ],
  },
  {
    name: "rohit",
    age: 28,
    gender: "male",
    salary: 30000,
    projects: [{ projectName: "abcd", timeline: 2, role: "xyz" }],
    presonalDetails: {
      F_Name: "sdfghjk",
      M_Name: "sdfghjk",
    },
  },
];

console.log(employees);

employees[1].salary = 45000;

employees[0].projects[0].timeline = 3;

employees[2].presonalDetails.M_Name = "lkjhgfds";

employees[1].managerName = "Rohit";

delete employees[1].managerName;

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

const cardsDiv = document.getElementById("cards");

products.forEach((product) => {
  const cardDiv = document.createElement("div");

  cardDiv.classList.add("card");
  cardDiv.innerHTML = ` 
        <h4>${product.name}</h4>
        <p>
          ${product.description}
        </p>
        <button class="btn btn-primary">BuyNow</button>
      `;

  cardsDiv.appendChild(cardDiv);
});
