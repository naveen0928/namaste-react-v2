# index.html, App.js, index.css

# How to integrate GIT?
    1. Create a repo in GIT
    2. git init
    3. git branch -M main -> To create a new default branch
    4. git add . -> Add all changed files
    5. git commit -m "message"
    6. git remote add origin https://github.com/naveen0928/namaste-react-v2.git
    7. git push -u origin main

# To run our app in development(local) - npx parcel index.html  -- Parcel will host our app onto server
# To run our app in production - npx parcel build index.html
# Most expesive thing in loading webpage is loading images

# From GIT - Git commands
    <!-- echo "# namaste-react-v2" >> README.md
    git init
    git add README.md
    git commit -m "first commit"
    git branch -M main
    git remote add origin https://github.com/naveen0928/namaste-react-v2.git
    git push -u origin main -->

# Order of files in index.html matters a lot
# Props are the children and attributes attached to it
# Library can be applied to a small portion of page itself like Header only
# Framework comes with loads of things
# NPM - standard repo for all the packages which will install in our system
# To configure NPM 
    1. npm init - It will ask few questions
# There are two types of dependencies we usually install
    1. Dev dependencies - Generally required for development
    2. Normal dependencies - Used in production also
# Package.json - Keeps track of what version of package is there in the system
# Package-lock.json - Keeps track of exact version of that package being used
# node-modules - Database of the the packages. Fetches all the code for our dependencies
# NPM - 
# NPX - executing a package
# CDN links are not a preferred way to bring React and React DOM into our application
    1. If we use CDN links, We need to make an external call to use that link every time
    2. Suppose if new version of react comes in, we need to update that version number in CDN links everytime
# JSX - JavaScript syntax or HTML like syntax
# JSX when runs will convert to React.createElement => JS object => HTML element
# JS engine understands ECMA script
# Babel - Transpiles the code which JS engine or browser understands
# React Components
    1. Class Based components
    2. Functional Components - Normal JS function which returns JSX
# component composition - calling one component into another component




# Home work
1. What is CDN? --> Place where react library is hosted
2. CrossOrigin?
3. What is library and framework?
4. What is package.json - Configuration for our NPM
5. What is a bundler? - Webpack, parcel  --> Bundles our app to be able to push to production
6. What is Parcel? Learn about parcel
7. What is Tilde(~) and Caret(^) in package.json?
    1. Tilde - It will install the major version automatically (From 2.8.3 to 3.0.0)
    2. Caret - It will install the minor version automatically (From 2.8.3 to 2.8.4)
8. Diff between package.json and package-lock.json?
9. What are Transitive dependencies?
10. Diff between NPM and NPX?
11. What is HMR?
12. Diff between HTML and JSX?
13. What is Babel?
14. What is React component?
15. What is component composition?
16. What is cross site scripting? - JSX takes care of injection attacks - Prevents attacks