# Project - CONMIVIAJE: built using MERN STACK (Mongo, Express, React.JS, Node)

## Description

This is a full-stack application that allows users to find a destiny where they want to travel to, and get information for living or move to that country. There are two kind of users, Admin users and external users. The Users can create an account, log in, see all offers and add offers to their favorites. The Admin user can add, edit, and delete offers and others services and information for travelers.

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
PORT=3001
DB_URI=your_mongoDB_URI
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

4. Run the server to develop locally

```bash
npm run dev
```




# Aplication Routes

## **Conmiviaje routes**:

| URL path                    | Description       | Protected                         | 
| :--------------------------:|:-----------------:| :--------------------------------:| 
|            /                | Home Page         |             No                    | 
|        /login               | Login Page        |             No                    | 
|        /SignUp              | SignUp Page       |             No                    | 
|        /profile               | Login Page        |             No                    | 
|        /offers               | Login Page        |             No                    | 
|        /offers/:id               | Login Page        |             No                    | 
|        /offers/create               | Login Page        |             No                    | 


## **User routes**:


## **Auth routes**:




