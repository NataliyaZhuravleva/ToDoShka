# <p style="color:#0ec2b8" align="center">_ToDoShka_</p>

<p align="center">
    <!-- Project Avatar -->
    <br>
    <a href="https://github.com/NataliyaZhuravleva">
        <img src="https://avatars.githubusercontent.com/u/26223609?s=400&u=eba3685b0fa16a0c66c8dec64c2cd7886929b509&v=4">
    </a>
    <!-- GitHub Link -->
   <p align="center">
        <a href="https://github.com/NataliyaZhuravleva" style="color: #0ec2b8;">Nataliya Zhuravleva</a>
    </p>
    <!-- LinkedIn -->
    <p align="center">
        <a href="mailto:natalindria@gmail.com">
            <img src="https://img.shields.io/badge/Email-00AAAB??style=social&logo=gmail&labelColor=00AAAB">
        </a>  
        <a href="https://www.linkedin.com/in/nataliya-zhuravleva/">
            <img src="https://img.shields.io/badge/LinkedIn-00AAAB??style=social&logo=linkedin&labelColor=00AAAB">
        </a>      
    </p>    
</p>
<p align="center">
  <small>Initiated February 26th, 2021</small>
</p>

## <span style="color:#0ec2b8">Table of Contents</span>
* <a href="#about">About the project</a>
  * <a href="#description">Description</a>
  * <a href="#used">Technologies Used</a>
  * <a href="#tree">Component Diagram</a>
  * <a href="#bugs">Known Bugs</a>
* <a href="#scope">Scope</a>
  * <a href="#usecase">Use Case</a>
  * <a href="#mvp">Minimal-Viable Product</a>
  * <a href="#roadmap">Product RoadMap</a>
  * <a href="#specs">Specs</a>
* <a href="#setup">Setup and Use</a>
  * <a href="#cloning">Cloning the project</a>
  * <a href="#API">Creating API Key</a>
  * <a href="#running">Running Application</a> 
* <a href="#contact">Support and contact details</a>
* <a href="#license">License</a>
* <a href="#additional">Additional Info</a>

## <span style="color:#0ec2b8" id="about">About the Project</span>
### <span style="color:#0ec2b8" id="description">Description</span>

`ToDoShka` is an application to create customized Things ToDo List based on the user interests for the user's trip. 

### <span style="color:#0ec2b8" id="used">Technologies Used</span>

* _JavaScript_
* _React/JSX_
* _Redux_
* _jQuery_
* _HTML/CSS_
* _API_
* _VisualStudio Code_
* _Git_
* _GitHub_

### <span style="color:#0ec2b8" id="tree">Component Tree</span>
<br>
<br>

![Preview](src/img/ToDoShka.png)

<br>

### <span style="color:#0ec2b8" id="bugs">Known Bugs</span>

_No known bugs_

## <span style="color:#0ec2b8" id="scope">Scope</span>
### <span style="color:#0ec2b8" id="usecase">Use Case</span>
The main users are the people who are going on their trip. When you are planning your trip, you “google” Things ToDo internet pages about a particular area. However, all people are different with different interests. One person would like to go to Las Vegas for a casino and drinks. Another one would go to Las Vegas Area for rock climbing in the Red Rocks National Park. Families with kids would love to know about kid’s entertainment, like a roller coaster. ToDoSka is supposed to be the app creating customized Things ToDo List considering user’s interests and giving them a list for their personal purposes.

### <span style="color:#0ec2b8" id="mvp">Minimal-Viable Product</span>
* _An application considers trips to Las Vegas only._
* _An application considers the following user's interests: show, drink, extreme entertainment, family-style, but gives them an opportunity to choose just one interest to create their list._
* _An application gives users the opportunity to delete some offered Things ToDo if they don't want to do something, and create their own list such as a guide for that particular trip._
### <span style="color:#0ec2b8" id="roadmap">Product RoadMap</span>
* _To let users the opportunity to choose many interests (e.g. family-style and show) and combine them in the list by interest groups._
* _To expand interest list and add sport(hiking, biking, rock climbing), casino, strip bars._
* _To let the user import (save/print/send by email) their customized list for future trips._
* _To create a user profile and store their lists there._
* _Add an option to mark favorite lists in the user profile._
* _To let users the opportunity to add what transport they are going to use (car, bike, no transport) and expand (or not) the user's list based on their transport preferences. E.g. if they have a car, they could explore Las Vegas Area, not Las Vegas city only._
* _Add another city to explore._
* _To let users the opportunity to transfer their points of interest on the Google Trip Planner._

### <span style="color:#0ec2b8" id="specs">Specs</span>
 <details>
  <summary>User stories and specifications</summary>
  <table>
    <tr>
      <th><span style="color:#c4f4ef">Story 01</span> 
 </th><th></th>
    </tr>
    <tr>
      <td> <span style="color:#c4f4ef">User Story</span> </td>
      <td><span style="color:#c4f4ef">As a user, I want to be able to choose Las Vegas as a city to travel, and see what kind of activity I can do there.</span></td>
    </tr>
    <tr>
      <td><b>Behavior 01-A </b></td>
      <td><b>User is able to get a list of activities possible in Las Vegas.</b></td>
    </tr>
    <tr>
      <td> Input </td>
      <td>Open a website</td>
    </tr>
    <tr>
      <td> Output </td>
      <td>Show, Drink, Extreme Entartainment, Family-style</td>
    </tr>
    <tr>
      <td> Notes </td>
      <td></td>
    </tr>
    <tr>
      <td> Completion </td>
      <td>True</td>
    </tr>
  </table>

  <hr><hr>

  <table>
    <tr>
      <th> <span style="color:#c4f4ef">Story 02</span> </th><th></th>
    </tr>
    <tr>
      <td> <span style="color:#c4f4ef">User Story</span> </td>
      <td><span style="color:#c4f4ef">As a user, I want to be able to choose from a list of activities one activity I am interested in.</span></td>
    </tr>
    <tr>
      <td> <b>Behavior 02-A </b></td>
      <td><b>User is able to choose Show and get a list of show in Las Vegas.</b></td>
    </tr>
    <tr>
      <td> Input </td>
      <td>Show</td>
    </tr>
    <tr>
      <td> Output </td>
      <td>List of Show in LasVegas</td>
    </tr>
    <tr>
      <td> Notes </td>
      <td>Research APIs for show</td>
    </tr>
    <tr>
      <td> Completion </td>
      <td>True</td>
    </tr>
    <tr>
      <td> <b>Behavior 02-B</b> </td>
      <td><b>User is able to choose Drink and get a list of bars in Las Vegas.</b></td>
    </tr>
    <tr>
      <td> Input </td>
      <td>Drink</td>
    </tr>
    <tr>
      <td> Output </td>
      <td>List of bars in Las Vegas</td>
    </tr>
    <tr>
      <td> Notes </td>
      <td>Research APIs for restaurants in Las Vegas.</td>
    </tr>
    <tr>
      <td> Completion </td>
      <td>True</td>
    </tr>
    <tr>
      <td> <b>Behavior 02-C </b></td>
      <td><b>User is able to choose Extreme Entertainment and get a list of extreme attractions in Las Vegas.</b></td>
    </tr>
    <tr>
      <td> Input </td>
      <td>Extreme Entertainment</td>
    </tr>
    <tr>
      <td> Output </td>
      <td>List of extreme attractions in Las Vegas.</td>
    </tr>
    <tr>
      <td> Notes </td>
      <td>Research APIs for extreme attractions in Las Vegas.</td>
    </tr>
    <tr>
      <td> Completion </td>
      <td>True</td>
    </tr>
    <tr>
      <td> <b>Behavior 02-D </b></td>
      <td><b>User is able to choose Family-style and get a list of kid's attractions in Las Vegas.</b></td>
    </tr>
    <tr>
      <td> Input </td>
      <td>Family-style</td>
    </tr>
    <tr>
      <td> Output </td>
      <td>List of kid's attractions in Las Vegas.</td>
    </tr>
    <tr>
      <td> Notes </td>
      <td>Research APIs for kid's attractions in Las Vegas.</td>
    </tr>
    <tr>
      <td> Completion </td>
      <td>True</td>
    </tr>
  </table>
  
  <hr><hr>

  <table>
    <tr>
      <th> <span style="color:#c4f4ef">Story 03</span> </th><th></th>
    </tr>
    <tr>
      <td> <span style="color:#c4f4ef">User Story</span> </td>
      <td><span style="color:#c4f4ef">As a user, I want to be able to delete some offered Thins ToDo if I don't want to do that, so I am able to get my own list as a guide for my trip to Las Vegas.</span></td>
    </tr>
    <tr>
      <td> <b>Behavior 03-A</b> </td>
      <td><b>User is able to delete particular Thing ToDo from their list.</b></td>
    </tr>
    <tr>
      <td> Input </td>
      <td>delete item from list</td>
    </tr>
    <tr>
      <td> Output </td>
      <td>Item deleted from the user list</td>
    </tr>
    <tr>
      <td> Notes </td>
      <td></td>
    </tr>
    <tr>
      <td> Completion </td>
      <td>True</td>
    </tr>
  </table>

</details>

## <span style="color:#0ec2b8" id="setup">Setup and Use</span>
### <span style="color:#0ec2b8" id="cloning">Cloning the project</span>
1. _Navigate to my [ToDoShka repo](https://github.com/NataliyaZhuravleva/ToDoShka) at https://github.com/NataliyaZhuravleva/ToDoShka_ to view the project files and commits.
2. _Click on the green button labeled `Code`_ to copy repository URL.
3. _Clone the repository to your local machine_ by opening your machine terminal and using the command `git clone https://github.com/NataliyaZhuravleva/ToDoShka`.
4. _Create API Key (see instruction below)_
5. _Place your token in an .env file at the top level of your directory. Name your API key variable REACT_APP_API_KEY in .env. Keep spelling and capitalization identical.(e.g. REACT_APP_API_KEY=[your API Key])_
6. Include .env in .gitignore file. 

### <span style="color:#0ec2b8" id="API">Creating API Key</span>

1. _To use this application, you will need to make an account and get an API key. The "Free Plan" allows for 5000 API calls per day, 10 requests per second. Note, you can use that API for Non-commercial goals only!_ 
2. _Visit the [OpenTripMap site](https://opentripmap.io/register) to register and get your API Key._

### <span style="color:#0ec2b8" id="running">Running Application</span> 

1. _Navigate to the project folder in the command line._
2. _Run the following command: $ `npm install`_
3. _Run the following command: $ `npm start`_

## <span style="color:#0ec2b8" id="contact">Support and contact details</span>

_If you have any questions, ideas or concerns, please, contact me at [natalindria@gmail.com](mailto:natalindria@gmail.com)_

## <span style="color:#0ec2b8" id="license">License</span> 

*This software is licensed under the [MIT](https://choosealicense.com/licenses/mit/) license*

Copyright (c) 2020 **_Nataliya Zhuravleva_**


## <span style="color:#0ec2b8" id="additional">Additional Info</span>
## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.