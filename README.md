# Team Profile Generator

![badge](https://img.shields.io/badge/license-Apache-brightgreen)<br>

## Description 

This is a Node.js command-line application that allows a user to input information for multiple employees of different types. Once the user is done entering information for the employees, an HTML webpage is generated and displays summaries for each employee.

![myteam](https://user-images.githubusercontent.com/74524186/110888107-bd7af280-82a8-11eb-9750-6dc73d37bfc5.PNG)

## Table of Contents

* [Instructions](#instructions)
* [Usage](#usage)
* [Contributing](#contributing)
* [License](#license)
    
## Installation
    
*Here are the steps to install the necessary components to run the program*
    
To install this application, A `.gitignore` file containing `node_modules/` and `.DS_Store/` directory is needed to prevent issues with GitHub. The file should be created before npm dependencies are installed. The repo will need to include a `package.json` by running `npm init` in the initial project setup. The folder structure will need to include a src directory with the HTMLtemplate js file in order for the formatting of the website to generate properly.
    
## Usage 
    
*Instructions on how to run and use the program*
    
First run node index.js in the terminal. Select the type of employee to be entered and follow the prompts to enter the applicable information. Any profile photos will need to be saved in the images folder under assets. If additional employees should be entered, select 'Y' when asked and continue following the prompts until no further employees need to be entered. Select 'N' and the application will generate the html document automatically and place it in the dist file in your directory.
    
![nodeteam](https://user-images.githubusercontent.com/74524186/110887761-15fdc000-82a8-11eb-80ea-c1a404e51e65.gif)

## Contributing
    
*To make contributions to the app, please reach out to the following admin(s) for approval:*
Jonathan Baldree

## Tests

Tests can be run using Jest. There are 4 test files in the tests folder for employee and then each employee type: Manager, Engineer, and Intern.

![Tests](https://user-images.githubusercontent.com/74524186/110887839-434a6e00-82a8-11eb-8cae-7b6cb55d972e.gif)

## License
    
Licensed under the ![Apache](assets/licenses/Apache.txt) License.

---
    
## Questions?
    
If you have any questions, you can reach out to me through the below GitHub site or send an email to me at: jon.baldree@gmail.com
   
GitHub: https://github.com/jlbaldree
