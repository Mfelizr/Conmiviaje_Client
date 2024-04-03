# Project - CONMIVIAJE: built using MERN STACK (Mongo, Express, React.JS, Node)

## Description

This is the frontend for a full-stack application (V.0.1) that allows users to find a destiny where they want to travel to, and get information about entry requirement for travel, living or move to that country. There are two kind of users. Admin users and external users. The Users can create an account, log in, view offers, find, buy and add offers to their favorites. The Admin user can create, edit, and delete offers.


## Installation

1. Clone the repository

```bash
git clone
```

2. Install the dependencies

```bash
npm install
```

3. Create a .env file in the root folder and add the following environment variables:

```bash
REACT_APP_STTORG=Organization FOR SITATA
REACT_APP_STTAUT=AUT FOR SITATA

```

4. Run the server to develop locally

```bash
npm run dev
```


# Aplication Routes

## **Conmiviaje routes**:

| URL path                    | Description             | Protected                         | 
| :--------------------------:|:---------------------:  | :--------------------------------:| 
|            /                | Home Page               |             No                    | 
|        /login               | Login Page              |             No                    | 
|        /SignUp              | SignUp Page             |             No                    | 
|        /profile             | Profile Page            |             Yes                   | 
|        /offers              | Offers Page             |             No                    | 
|        /offers/:id          | Offer Detail Page       |             No                    | 
|        /offers/create       | Offer Create Page       |             Yes                   | 
