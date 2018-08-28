# Omarks3

## Introduction

## Inspiration

## Ecosystem

| System | Documentation | |
| ------ | ------ | ------ |
| Ionic |[Ionic](https://ionicframework.com/docs/) | [link](https://ionicframework.com/) |
| Firebase|[Hosting](https://firebase.google.com/docs/hosting/) | [link](https://firebase.google.com/) |
| Firebase|[Database](https://firebase.google.com/docs/database/) | [link](https://firebase.google.com/) |
| Firebase|[Functions](https://firebase.google.com/docs/functions/) | [link](https://firebase.google.com/) |
| Firebase|[Authentication](https://firebase.google.com/docs/auth/) | [link](https://firebase.google.com/) |
| Algolia |[Algolia](https://www.algolia.com/doc/) | [link](https://www.algolia.com/) |
| Pocket |[Pocket](https://help.getpocket.com/category/857-category) | [link](https://getpocket.com/a/queue/) |
| IFTTT |[IFTTT](https://ifttt.com)|  |
| scriptr.io |[script.io](https://www.scriptr.io/documentation) | [link](https://www.scriptr.io/) |


## Architecture

## Coding
### Prerequisites
- Git
- Node js
- Ionic (```npm install -g ionic```)
- Firebase (```npm install -g firebase-tools```)

### Prepare

```shell
$ git clone https://github.com/samuele-cozzi/Omarks3.git
$ code .\Omarks3\
$ npm install
$ cd functions
$ npm install
$ cd ..
```

### Execute

```shell
$ ionic build
$ ionic serve
```

### Delivery

```shell
$ ionic build
$ firebase deploy
$ firebase deploy --only functions,hosting,database
```

##References

## License
- [MIT License](/LICENSE)
