[![structor compatible](https://img.shields.io/badge/structor%20compatible-v1.0.7-0077dd.svg?style=flat)](http://helmetrex.com)

This repo is a [Structor](https://github.com/ipselon/structor/) prepack for a Material Design/Flexbox Grid/React/Redux/Webpack webapp. Structor is a GUI for starting React/Redux projects. It is flexible enough to generate some quick boilerplate, or the majority of the app. 

Please go to [Structor's main repo](https://github.com/ipselon/structor/) for a more detailed explanation.

### Getting Started
#### Installation

We recommend starting at the main Structor repository. However, to jump right in, you must first install Structor globally ( ```npm install structor -g``` ).

##### Prefered

The prefered method of using this boilerplate is:

```
mkdir project-name && cd project-name

structor
```
Then use the GUI at localhost:2222/structor to pick this template.

##### Other Methods

* Download the package from [StructorMarket](http://www.helmetrex.com), unzip, and then run ```npm install``` in the project's directory.
* Fork and clone this repo, and ```npm install```.

#### Using Structor
No matter how you get this prepack, getting started is just one more step! Just run the command ```structor``` from the root directory (or ```structor -d path/to/root/directory``` from somewhere else), then navigate to [http://localhost:2222/structor](http://localhost:2222/structor). If you need to use a different port, it can be set with the ```-p PORT_NUM``` flag.

### Learn

#### By Doing

This project has one sample page: ```home```. You can make changes to it and export the project code with the "Export project" option from the main menu. You then have a ready-to-go React/Redux app, just:

* Run command: ```npm run build```
* Run command: ```node ./server.js```
* Go to ```http://localhost:3000```

#### Articles

* [Structor's component model representation](https://github.com/ipselon/structor/wiki/Structor's-component-model-representation)
* [Generators metadata overview](https://github.com/ipselon/structor/wiki/Generators-metadata-overview)
* [Structor shortcuts](https://github.com/ipselon/structor/wiki/Structor-shortcuts)

### What's Inside?
The following libraries and technlogies are used:
* ```react```,
* ```react-router```,
* ```redux```, ```react-redux```,
* ```redux-saga```,
* ```material-ui```,
* ```Flexbox Grid```,
* ```express```,
* ```webpack```
 
```react-router``` is used as a routing mechanizm between pages in Structor. 
Equal router is used in the final application after exporting.

If you don't know it, ```redux``` is a great implementation of the Flux architechture and helps dramatically to build advanced Web apps. A good place to start with Redux is [Dan Abramov's talk](https://www.youtube.com/watch?v=xsSnOQynTHs) introducing it.

```express``` used as back-end HTTP server for the constructed Web application.
<br/>
<br/>
