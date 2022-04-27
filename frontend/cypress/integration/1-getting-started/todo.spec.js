describe("renders the home page", () => {


  it("click login ", () => {
    cy.visit("http://localhost:3000/")
    cy.get('#login').should('contain.text', 'Login');

  });


  it("renders correctly", () => {


    cy.wait(5000);
    cy.get('#floatingInput').type("a@a");
    cy.get('#floatingPassword').type("a");
    cy.get('#login').click();

  });

});

describe('api testing using cypress for event ', () => {

  it('fetches Todo items - GET', () => {
    cy.visit("http://localhost:3000/")
    cy.get('#floatingInput').type("a@a");
    cy.get('#floatingPassword').type("a");
    cy.get('#login').click();

    cy.request({
      method: 'GET',
      form: true,
      url: "http://localhost:8000/api/products",
      headers: {
        "Content-Type": "application/json",
      },
      Credential: true,
      // body: {
      //   "email": "a@a",
      //   //"username": "your username", depends upon your system login you could use email or username
      //   "password": "a",
      // }
    }).then(response => {
      console.log(response.body)
    })
  });
});

describe('api testing using cypress for event ', () => {

  it('fetches Todo items - GET', () => {
    cy.visit("http://localhost:3000/")
    cy.get('#floatingInput').type("a@a");
    cy.get('#floatingPassword').type("a");
    cy.get('#login').click();

    cy.request({
      method: 'GET',
      form: true,
      url: "http://localhost:8000/api/products",
      headers: {
        "Content-Type": "application/json",
      },
      Credential: true,
      // body: {
      //   "email": "a@a",
      //   //"username": "your username", depends upon your system login you could use email or username
      //   "password": "a",
      // }
    }).then(response => {
      console.log(response.body)
    })
  });
});