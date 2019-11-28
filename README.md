# Personal Notes

This app was built to demonstrate how I would structure a react.js app with the intention of scaling.
With the dataset and number of components that use it currently present, I opted out of using Redux,
this can however be very easily added into the app

## Directory Structure

I will highlight here the directory structure choices I made to clarify the layout of the project

```
└── src
    ├── api              # classes used to make API requests
    ├── components       # global components usable by any other scene/component
    ├── scenes           # scenes, generally an entire page of the application
    ├── styles           # global styles for the application
    └── utils            # various utilities, provide minor isolated functionality
```

The general layout rules are as follows when building scenes

```
└── scenes
    └── SceneName                         # parent folder for a scene
        ├── components                    # components that are intended only for this scene
        ├   └── ComponentName             # folder for a component
        ├       ├── index.js              # the component file for easy importing
        ├       └── ComponentName.test.js # unit test for an individual component
        ├── index.js                      # the scene component for easy importing
        └── SceneName.test.js             # the unit, or e2e test for the scene
```

# IWD frontend challenge

## Setup

To avoid losing time, you will use a simple create-react-app bootstrap.

```bash
cd frontend
yarn global add create-react-app
cd ..
create-react-app frontend
cp -r api frontend/public/
cd frontend
yarn start
#This will open your browser to http://localhost:3000
```

## Guidelines

We want to see your skills to design business code to produce **efficient** and **maintainable** code over time.

DO
* Do use good design
* Follow reactjs best practices
* Do maintainable design
* Do use unit tests
* Do use dependency management
* Do use consistent code styles
* Do use others dependencies if you want/need

> Some candidates had some issues with momentjs and create-react-app, avoid it

DON'T DO
* Do not loose time with build process, just use create-react-app `yarn start`
* Do not use Docker, Vagrant... we must be able to run the app only with `yarn start`
* Do not loose time with amazing CSS, be basic

## Domain

The app is supposed to display a list of surveys and the aggregated answers to
those. A survey is composed of a name and a code. For a given survey, aggregated
answers are available. There are 3 types of questions:

* QCM (multiple choice question)
* Numeric
* Date

For each type of question, the aggregated answers have a different format:

* QCM: the aggregated answers give the number of response for each available
  QCM answer.
* Numeric: the aggregated answers give the average of all answers
* Date: the aggregated answers give the list of dates of all answers

## Fake API

To simulate a REST like API, you copied the `api` folder into the
`frontend/public/` directory so that the following resources should be
available:

* `http://localhost:3000/api/list.json` replies with the list of available
  surveys
* `http://localhost:3000/api/{code}.json` replies with the aggregated data
  for the survey with the given code. For instance, `http://localhost:3000/api/XX2.json`
  gives the aggregated answers for the survey with the code `XX2`.

## The Test

### Stage 1

Show a list of the surveys coming from the list endpoint.

Result will be a simple list:

| Name  	|  Code	     |
|---        |---	     |
| Paris  	| XX1        |
| Chartres  | XX2        |
| Melun  	| XX3        |

### Stage 2

The user can now click on a survey item. It will show the aggregate data of this survey.

You can display the data the way you want, be creative (data visualization).

### Stage 3 (bonus)

> This is not mandatory, add this feature if you feel like it.

Add a search input on the survey list to filter surveys by names and/or code.
