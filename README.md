# Farmscape Assigment (luduvigo) 🚀

- [INDEX](#index)
- [Project Specs](#project-specs)
- [Technologies used](#technologies-used)
- [How to run this project](#how-to-run-this-project)
- [package.json file](#package.json-file)
- [Project Structure](#project-structure)


Project done by Paolo Antonio Rossi (luduvigo) as an assignment for Farmscape.

## Project Specs

All the specs for this project can be found [here](ASSIGNMENT.md).

Mainly the objective is to create a program that can take as input a list of items and calculate price and taxes for all the list of items.

## Technologies used

- The project has been implemented in Node.js.
- All the dependencies were installed with npm.
- Unit testing has been implemented using Jest.
- The project has been done with the objective of reducing as much as possible all the external dependencies. The only dependency in the package.json file is the dev dependency to install Jest.

## How to run this project

To install the project you need to run the following command

- ### `npm install`

To run the project from your terminal you can run the following command

- ### `npm start`

To execute the unit tests from your terminal you can run the following command

- ### `npm run test` 

## package.json file

```json
{
  "name": "farmscape-assignment",
  "version": "1.0.0",
  "description": "Farmscape Assigment",
  "main": "app.js",
  "scripts": {
    "start": "node src/app.js",
    "test": "jest"
  },
  "keywords": ["test", "farmscape"],
  "author": "luduvigo (Paolo Antonio Rossi)",
  "license": "ISC",
  "devDependencies": {
    "jest": "^26.6.3"
  }
}
```

## Project Structure

| Folder                     | Description                                                                                          |
| -------------------------- | ---------------------------------------------------------------------------------------------------- |
| [src](src)                 | Folder containing the main application files                                                         |
| [src/utils](src/utils)     | Folder containing utility libraries - at the moment we have only one simple library that tells us we |
| [static](static)           | Folder containing different input files that contain the lists used to generate the basket and compute the output                                          |
| [\_\_tests\_\_](__tests__) | Folder with the Jest unit tests developed building the project using TDD                                           |
