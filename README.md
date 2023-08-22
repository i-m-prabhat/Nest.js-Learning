# Nest.js

Nest.js is a powerful, scalable, and extensible Node.js framework for building server-side applications. It is built with TypeScript and follows the architectural principles of Angular, making it familiar to developers who have experience with Angular or other modern JavaScript frameworks. Nest.js combines elements of object-oriented programming (OOP), functional programming (FP), and reactive programming.

### Folder Structure

When it comes to the folder structure of a Nest.js application, it follows a modular design pattern that encourages a well-organized codebase. Although the folder structure can vary based on personal preferences and project requirements, there are some common conventions that are widely followed. Here's a detailed description of the typical folder structure in a Nest.js application:

1. **src**: This is the main directory where most of your code resides. It contains the following subdirectories:
   - **main.ts**: The entry point of your application where the Nest.js platform is bootstrapped.
   - **app.module.ts**: The root module of your application that acts as the central hub for managing dependencies and configuring various components.
   - **app.controller.ts**: The main controller that handles incoming requests and defines the application's routes.
   - **app.service.ts**: A service class that contains the business logic of your application. Services are typically injected into controllers.
   - **app.exception.ts**: Custom exception filters or error handlers for your application.
   - **app.middleware.ts**: Custom middleware functions that intercept requests and modify them before reaching the route handlers.
   - **app.guard.ts**: Custom guards that provide authorization and access control to certain routes.
   - **app.pipe.ts**: Custom pipes for request validation and transformation.
   - **app.decorator.ts**: Custom decorators to extend the functionality of classes or methods.
   - **modules/**: This directory contains modules that represent different features or sections of your application. Each module typically has its own set of controllers, services, and other related files.
   - **shared/**: Common utilities, helpers, or components that are shared across multiple modules.
   - **config/**: Configuration files for your application, such as environment-specific settings or database configuration.
   - **interfaces/**: Interfaces or DTOs (Data Transfer Objects) that define the shape of data objects exchanged between different parts of your application.
   - **constants/**: Constants or enumerations used throughout your application.
   - **utils/**: Utility functions or classes that provide common functionality.
   - **exceptions/**: Custom exception classes that represent specific error conditions.
   - **filters/**: Custom exception filters that handle specific types of exceptions raised during request processing.
   - **pipes/**: Custom pipes for request validation, transformation, or data filtering.
   - **guards/**: Custom guards for route protection and authorization.
   - **interceptors/**: Custom interceptors that modify the request or response objects globally or for specific routes.
   - **middlewares/**: Custom middleware functions that process incoming requests or modify the response before it is sent back.

2. **test**: This directory contains the unit tests and integration tests for your application.

3. **dist**: This directory is created when you compile your Nest.js application using a build tool like TypeScript or webpack. It contains the transpiled JavaScript code that can be executed.

4. **node_modules**: This directory contains the installed dependencies of your application.

5. **other configuration files**: Additional configuration files related to your build process, deployment, or tooling can also be present in the root directory of your application.

## NestJS Code Generation Commands

Before using below commands first install nest js CLI globally ▶ `npm i -g @nestjs/cli`

Here are the various code generation commands available in NestJS using the Nest CLI:

1. **Generate a new application workspace:**
   Command: `nest new <name>`
   Alias: `nest application <name>`
   Description: Generates a new NestJS application workspace. This is used to create a new project from scratch.

2. **Generate a new class:**
   Command: `nest generate class <name>`
   Alias: `nest g cl <name>`
   Description: Generates a new TypeScript class.

3. **Generate a CLI configuration file:**
   Command: `nest generate configuration`
   Alias: `nest g config`
   Description: Generates a CLI configuration file for NestJS.

4. **Generate a controller declaration:**
   Command: `nest generate controller <name>`
   Alias: `nest g co <name>`
   Description: Generates a new controller file along with a corresponding spec file for testing.

5. **Generate a custom decorator:**
   Command: `nest generate decorator <name>`
   Alias: `nest g d <name>`
   Description: Generates a custom decorator.

6. **Generate a filter declaration:**
   Command: `nest generate filter <name>`
   Alias: `nest g f <name>`
   Description: Generates a new filter declaration.

7. **Generate a gateway declaration:**
   Command: `nest generate gateway <name>`
   Alias: `nest g ga <name>`
   Description: Generates a new gateway declaration.

8. **Generate a guard declaration:**
   Command: `nest generate guard <name>`
   Alias: `nest g gu <name>`
   Description: Generates a new guard declaration.

9. **Generate an interceptor declaration:**
   Command: `nest generate interceptor <name>`
   Alias: `nest g itc <name>`
   Description: Generates a new interceptor declaration.

10. **Generate an interface:**
    Command: `nest generate interface <name>`
    Alias: `nest g itf <name>`
    Description: Generates a new TypeScript interface.

11. **Generate a new library within a monorepo:**
    Command: `nest generate library <name>`
    Alias: `nest g lib <name>`
    Description: Generates a new library within a monorepo.

12. **Generate a middleware declaration:**
    Command: `nest generate middleware <name>`
    Alias: `nest g mi <name>`
    Description: Generates a new middleware declaration.

13. **Generate a module declaration:**
    Command: `nest generate module <name>`
    Alias: `nest g mo <name>`
    Description: Generates a new module declaration.

14. **Generate a pipe declaration:**
    Command: `nest generate pipe <name>`
    Alias: `nest g pi <name>`
    Description: Generates a new pipe declaration.

15. **Generate a provider declaration:**
    Command: `nest generate provider <name>`
    Alias: `nest g pr <name>`
    Description: Generates a new provider declaration.

16. **Generate a GraphQL resolver declaration:**
    Command: `nest generate resolver <name>`
    Alias: `nest g r <name>`
    Description: Generates a new GraphQL resolver declaration.

17. **Generate a new CRUD resource:**
    Command: `nest generate resource <name>`
    Alias: `nest g res <name>`
    Description: Generates a new CRUD resource.

18. **Generate a service declaration:**
    Command: `nest generate service <name>`
    Alias: `nest g s <name>`
    Description: Generates a new service declaration.

19. **Generate a new application within a monorepo:**
    Command: `nest generate sub-app <name>`
    Alias: `nest g app <name>`
    Description: Generates a new application within a monorepo.
