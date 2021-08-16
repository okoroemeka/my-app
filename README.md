# Choco Web Test

We at Choco love Frontend apps and like to demonstrate our skills and ask you to do the same!

Therefore, we've created this boilerplate for you to get started as fast as possible with your code challenge. Before getting started, please read our guidelines on how to solve the challenge!

**🗒️ Note:**
_If you have any issues, feedback or improvement ideas for this Boilerplate, feel free to share them with us! We may have put some stuff in there deliberately that could use some improvements ;)_

## 📖Table of contents

- [🦄 Choco Web Test](#%f0%9f%a6%84-choco-web-test)
  - [📖Table of contents](#%f0%9f%93%96table-of-contents)
  - [Guidelines](#guidelines)
  - [1️⃣ Context](#1%ef%b8%8f%e2%83%a3-context)
  - [2️⃣ Your Challenge](#2%ef%b8%8f%e2%83%a3-your-challenge)
    - [Non-Functional Requirements](#non-functional-requirements)
    - [Functional Requirements](#functional-requirements)
      - [Login](#login)
      - [Listing and creating products](#listing-and-creating-products)
      - [List orders](#list-orders)
      - [Order details](#order-details)
    - [Limitations](#limitations)
    - [Bonus](#bonus)
    - [Other goals](#other-goals)
  - [3️⃣ Resources for the code reviewer](#3%ef%b8%8f%e2%83%a3-resources-for-the-code-reviewer)
    - [Getting Started](#getting-started)
    - [Commands:](#commands)
    - [Technologies involved / approach](#technologies-involved--approach)
    - [Further improvements](#further-improvements)
    
    
## Guidelines
As you can see, the platform we are using for take home tests is git. To get started, create a branch from this repo, where you can commit your solution. Try to organize your solution to be as structured as it can be and use git as you would use it in a production environment.

When you are finished with your solution, open a PR and also notify your Choco contact. Shortly after, we are going to provide our feedback in the PR you opened and our recruiter will get in touch with you.

Please, measure your time that you are spending on each task. This is not taken into account in your evaluation, it's just a feedback for us about the test.

Please, don't publish this test in any platform!

Good Luck!

## 1️⃣ Context

Our Choco boilerplate is a `simple webpack project` that provides you some pre-defined commands `(see package.json)` out of the box.

## 2️⃣ Your Challenge

Create a Typescript React client based application that utilizes the purpose of our API [​https://qo7vrra66k.execute-api.eu-west-1.amazonaws.com/choco](https://qo7vrra66k.execute-api.eu-west-1.amazonaws.com/choco).

### Non-Functional Requirements

- Create and manage the application in a git repository (may be a local repo).
- When committing, please provide a proper description; We want to catch your train of thought 😎.

### Functional Requirements

#### Login

1. The user should be able to log in with email and password.
2. After logging in, the app should keep a login session until the user explicitly logs out.
3. When logging out the app should clean all user data and redirect the user to the login screen.

For the login feature, the following API should be used:

**Credentials:**

```
Email: ​user@choco.com
Password:​ chocorian
```

**Endpoint:**

`[POST] /login`

Request body:

```json
{
  "email": "​email@email.com​",
  "password": "password"
}
```

Response body:

```json
{
  "token": "1234567890"
}
```

#### Listing and creating products

1. The user should be able to see a list of products where multiple products can be selected to create an order.
2. After selecting the products the user should be able to click on a button to create an order.

For listing products, the following API should be used:

**Endpoint:**
`[GET] ​/products?token={LOGIN_TOKEN}`

Response body:

```json
[
  {
    "guid": "13085ace-fd17-4560-9614-426fd45823cd",
    "name": "Biolive",
    "price": 8555,
    "picture": "http://placehold.it/32x32",
    "description": "Cillum consectetur ullamco non veniam id aute culpa Lorem exercitation qui ut do. Sunt ullamco reprehenderit fugiat nostrud officia incididunt excepteur labore irure non est. Excepteur nulla non elit eiusmod ad fugiat id reprehenderit do eu voluptate ea cupidatat. Do et irure ex in occaecat commodo reprehenderit duis. Occaecat non ex ullamco veniam consectetur culpa cillum labore ut proident aliqua ullamco elit esse.\r\n"
  },
  {...}
]
```

ℹ️ **IMPORTANT:** The created orders should be persisted locally using the persistence strategy of your choice.

#### List orders

1. The user should be able to see the list/history of orders in a different tab or screen.
2. The orders should be fetched from the local storage.

#### Order details

1. After clicking on an order in the order list, the app should show a different screen with the order details containing the list of products and the total price of the order.

### Limitations

- You've got to use Typescript.
- You may use any package you feel comfortable with.
- Don't use code generators like CRA or Next.

### Bonus

- You may choose the way you want to style your application, however, we want to evaluate your CSS skills as well 😉.
- CSS-in-JS
- Design System
- Mobile First
- Your app is ready to be deployed

### Other goals

You are expected to apply industry best practices and techniques such as:

1. Unit testing
2. Inversion of control and dependency injection
3. Source code documentation

## 3️⃣ Resources for the code reviewer

### Getting Started

_Tell us how to spin up your project_

### Commands:

_Example:_

- `yarn start` spins up the project and watch for changes
- `yarn test` run unit tests
- `yarn build` build the `/dist` folder

### Technologies involved / approach

_List here the technologies you've chosen and why_

### Further improvements

_Any further improvement you think you could've done with more time (be honest)_
