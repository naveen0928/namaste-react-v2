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

# Why React? - makes developer experience very easy - less code and more on web page
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
# props - Just normal arguments to a function
# Config driven UI - Website is driven by configs or data --> Controlling UI using data
# Use of key in loops = If we dont have key given to elements in an array, then React does bnot know which one to re-render and it will end up in re-rendering all the elements which is not a good optimisation technique. So we give key to say React that all the old elements were already there previously(not needed for re-rendering) and the newly added elements will be re-rendered which is the best optimisation technique
# React itself says using index as key is not recommended
# In MAP - not using key (not acceptable) <<< index as key <<<<<< id as key (best practice)
# There are 2 types of Exports and Imports -
    1. Named
    2. Default
# *** React is fast in DOM manipulation - UI and data layers in sync
# React Hooks - Normal JS utility functions by Facebook developers
    1. UseState()- gives state variables.
        1. Dont use useState in if/else, for loops, functions
        2. Dont write useState() outside functional component
    2. UseEffect()
# *** Whenever state variable changes, react will rerender my component
# Actual DOM is basically HTML tags , Virtual DOM is representation of actual DOM
# Virtaul DOM is normal JS object
# when we re-render, it finds the diff between two virtual DOMS and then updates the actual DOM
# If we need to toogle a button using JS variables, it will not render in UI but it will render in console because React does not know if that JS variable is getting update or not.. But if we use useState, React will trigger render procees once again.. Ex in <Header /> Login toggle
# useEffect() is called after 
    1. If no dependency array, it is called everytime when component renders
    2. If empty dependency array  [], it is called only after initial render and just once
    3. If something in dependency array [something], useEffect will be called everytime dependency is updated
# useRouteError() - By react-router-dom - It will have all the errors all will show it in browser
# Single Page Applications - Only one page and even if i route to the diff component it will change the components but not reloads the entire page
# There are 2 types of routing in web apps
    1. Client side routing - No network calls needed, even if we need to display something in UI because when we load the page everything is loaded in the background. We are implementing this
    2. Server side routing - network call is made for About.js and then server fetches the About.html and then content is displayed on UI
# Link from react-router-dom will not reload the entire page when we route. Instead, it will interchange the components. 
# <a> will reload the entire page which leads to performance issue
# Functional component - Normal JS function
# Class based component - Normal JS class which has render method and that returns JSX
# Whenever the instance of class component is created, constructor is called and then render() is called

# - Below example is when child is called in parent and grandchild is called in child
# Parent Constructor
# Parent render
#   Child Constructor
#   Child render
#       Grand child constructor
#       Grand child render
#       Grand Child component Did mount
#   Child component Did mount
# Parent component Did mount

# Below example is when child & Grand child is called in parent (when child components are called two diff instances are called)
# when we call same child class two times with different props, then Parent constructor then render will be called, then because we are calling the same child class react will batch the two instances of the child components and then render phase will be called and then commit phase. Please refer (https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/) link.

# Parent Constructor
# Parent render

#  <RENDER PHASE BEGINS AS BATCH>
#   First Child Constructor
#   First Child render
#       Second Child Constructor
#       Second Child render
#  <RENDER PHASE BEGINS AS BATCH>

#  <COMMIT PHASE BEGINS AS BATCH>
#   First Child component Did mount
#       Second Child component Did mount
#  <COMMIT PHASE ENDS AS BATCH>
#   
#  <UPDATING PHASE BEGINS>
#   First child render
#   First child component did update
#       Second child render
#       Second child component did update
#  <UPDATING PHASE ENDS>

# Parent component Did mount
# The above scenario will work like that because as DOM manipulation in react is most expensive, React will take render as a vatch of two components, implememts out the diff algorithm and then it goes to commit phase as commit phase takes some time

# React lifecycle diagram - https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
# HOC - Function which takes a commponent and returns a component



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
17. Optional chaining?
18. Can you do Named export along with default export?
19. What is Diff algorithm?
20. What is reconciliation algorithm or React filber? - React fiber is in React 16
21. What is monolith and microservice architecture?
22. What is seperation of concern and single responsibility principle?
23. What is optional chaining?
24. What is conditional rendering?
25. Why do we need super(props)?
26. Why cannot we write async in useEffect()?
27. What is Single Responsibility principle? - We will display logic for UI and rest everything in custom hooks
28. Chunking, code splitting, Dynamic bundling, Lazy loading, On Demand loading
29. Styled components, sass, scss, material UI, bootstrap, chakra UI, ant design?
30. Tailwind css is very light. It loads the css which is required
31. What is HOC?