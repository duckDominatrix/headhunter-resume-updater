# HeadHunter resumes updater

This is the Google Chrome Extension for automatically update your resume (raising up your resume in the search).

## Built With

* JavaScript
* [Chrome Extention API](https://developer.chrome.com/extensions/api_index)

## Getting Started

Clone(or download) project files and use the instructions bellow.
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

For install workflow we need [Node.js](https://nodejs.org/en/).

But you can use files whithout Node.js:
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
push the 'Load unpacked' button and load this files:
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

