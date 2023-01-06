# Iris

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.4.

This code challenge is a Todo List application built with Angular, with unit tests and responsive design.

## Code Challenge: Todo List

In this code challenge, you will be building a Todo List application using Angular. The application should allow users to create and manage a list of tasks, and should have the following features:

- Add new tasks
- Mark tasks as complete
- Delete tasks
- Filter tasks by status (all, complete, incomplete)

As an additional development, you should also implement the ability to edit task descriptions. This should allow users to change the description of an existing task.

The application should be fully unit tested, and should be responsive so that it can be used on desktop and mobile devices.

To complete this challenge, you should submit a GitHub repository containing the source code for the Todo List application, as well as any instructions necessary to build and run the application.

![challenge](src/assets/instrucciones.png)
![example](src/assets/ventana.png)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Continuous Delivery

This project is set up for continuous delivery using GitHub Actions. Whenever code changes are pushed to the `main` branch, the following steps are executed:

1. The code is checked out.
2. Dependencies are installed.
3. The Angular application is built.
4. The `root` folder is published to GitHub Pages.

The current status of the CD workflow can be viewed in the [Actions](https://github.com/johanjaguardev/iris/actions) tab.

## Branching Strategy

We use trunk-based development for this project, with the trunk branch being named `main`. To add a new feature, follow these steps:

1. Create a new feature branch from `main`.
2. Commit your changes to the feature branch and push them to the remote repository.
3. Open a pull request from the feature branch to `main`.
4. Use GitHub Actions to run automated tests on the code in the pull request.
5. If the tests pass, merge the pull request into `main`.

GitHub Actions and Pages are configured to automatically build and deploy updates to the `gh-pages` branch when changes are merged into `main`.

## Changelog

### v1.0.0 (2023-01-05)

- Initial release
- Added Angular installation instructions
- Added CI/CD configuration using GitHub Actions and Github Pages

### v1.1.0 (2023-01-06)

- Mockups for components
- Creation of first components unit tests for [header, filter, list, stacker, item]
- Creation of first components [header, filter, list, stacker, item]
