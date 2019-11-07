# Update resume on hh.ru

Sometimes programming makes life easier, this is the case.

This is the Google Chrome Extension that's help you update your resume on the hh.ru (raising up your resume in the search).
The Chrome Extention does not use user data and does not require user authorization(without registration and SMS).

## Technologies used

<p> 
  <img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png" alt="JavaScript" title="JavaScript" width="100"/>
  <img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/es6/es6.png" alt="ES6" title="EcmaScript6" width="100"/>
  <img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/eslint/eslint.png" alt="ESLint" title="ESLint" width="100"/>
  <img src="https://avatars2.githubusercontent.com/u/698437?s=200&v=4" alt="Airbnb Syle Guide" title="Airbnb Syle Guide" width="100"/>
<p>

## Built With

* DOM API
* [Chrome Extention API](https://developer.chrome.com/extensions/api_index)
* [Web APIs: MutationObserver](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver)
* [ESlint and Arbnb code style](https://github.com/airbnb/javascript)

## Getting Started

Clone(or download) project files and use the instructions bellow.
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

For install workflow we need [Node.js](https://nodejs.org/en/).

But you can use files whithout Node.js in "/extention" folder:
- manifest.json
- background.js
- content.js
- icon.png

### Installing

Clone(or download) files to /working_directory

If you install Node.js use this commands in terminal: 
```bash
cd /work_directory
npm install
```
or
```bash
cd /work_directory
make install
```

### Coding style tests

It tests your code for arbnb code style guide

If you install Node.js use this commands in terminal:
```bash
make lint
```
or

```bash
npm run eslint
```

## Deployment

You can add the files to Chrome extentions page,
tap in adress bar 'chrome://extensions/',
push the 'Load unpacked' button and load this files from "/extention" folder:
- manifest.json
- background.js
- content.js
- icon.png

## Versioning

We use [SemVer](http://semver.org/) for versioning.

## Authors

* **Oleg Kononov** - *Initial work* - Looking for Job(Moscow)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Thanks to my reasonable laziness
* Inspiration
* etc

