[![structor compatible](https://img.shields.io/badge/structor%20compatible-v0.2.0-0077dd.svg?style=flat)](http://helmetrex.com)

### Description
This project is a boilerplate for Web application which uses Material UI components for building UI.
In this project you will find many variants of components from Matarial UI, also many of them are adopted to use in compositions with each other.  
To read more details about Material UI library you can here: <a href="http://material-ui.com" target="blank">http://material-ui.com</a>

Flexbox Gird was taken as grid system. Read more about Flexbox Grid: <a href="http://flexboxgrid.com" target="blank">http://flexboxgrid.com</a>

This project includes a starter file structure for Redux, prepared Webpack configuration for building, and simple ExpressJS server.

<img style="width: 100%;" src="https://github.com/ipselon/material-ui-prepack/blob/master/screenshot.png"></img>
<br/>
<br/>
### Technologies and libraries
The following libs and technlogies were used:
* ```react```
* ```react-router```
* ```redux```, ```react-redux```
* ```material-ui```
* ```Flexbox Grid```
* ```express```
* ```webpack```
 
```react-router``` is used as routing mechanizm between pages in Structor. 
Equal router is used in final application after exporting pages. 
This will be discussed below in chapter "Export pages".

```redux``` is a great implementation of Flux architechture and helps dramatically to build advanced Web apps.

```express``` used as back-end HTTP server for Web application.
<br/>
<br/>
### Starting Structor 
If you download package from StructorMarket manually please execute the following commands in the project's directory:
* Run command: ```npm install```

Now you can start Structor from command line. To recognise the path of current project's folder Structor has 
to be started in the root directory of current project or started with command argument ```-d``` pointing to project's folder. 
* in project root dir: ```structor```
* in any other dir: ```structor -d <path to project directory>```

Once you have started Structor you will see the project's workspace. Now you can try to combine components with each other, 
or generate new React components from the combination, or add new pages, or whatever you want.

This project has only three sample pages: ```/set1```, ```/set2```, and ```/progress```
<br/>
<br/>
### Exporting pages with routes
In any moment of work with Structor you can export existing pages into real pages with routes.
This can be done by selecting option "Export project" from main menu in Structor's workspace.  

After that you will get a list of generated files of pages' components. And one more additional file for router configuration.
In current project these files will be generated into ```src/routes/``` folder. But, you can change this path in ```.structor/config.json``` file. 

Also you may edit templates for output React components in ```.structor/templates/``` or add your own new with ".tpl" extension.
<br/>
<br/>
### Building Web app
* open main menu in Structor's workspace and select option ```Export project```
* Run command: ```npm run build```
* Run command: ```node ./server.js```
* Go to ```http://localhost:3000```
<br/>
<br/>






