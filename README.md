# Electron Application with React and Typescript :heart_eyes:

:computer: This is a quick boilerplate for create an electron application with react and typescript.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

This project needed NodeJS installed.

NodeJS - https://nodejs.org/en

### Installing

Install all dependencies with

```
$ npm install or yarn
```

## Devlopment Environment

Open a console window and enter the command:

```
$ npm run start
```

and in another console window:

```
$ npm run start electron-dev (Linux and MacOS) / electron-dev-windows (Windows)
```

## Deployment

Create packager for Windows, Linux and MacOS

```
$ npm run build:electron:all
```

or for separately OS

```
$ npm run build:electron:windows
```

```
$ npm run build:electron:linux
```

```
$ npm run build:electron:osx
```

:speech_balloon: The final version can be located in the dist directory
