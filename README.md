# Golf Journal

## Motivation 

The goal of this application is to replace the traditional pencil and paper based golf score card. This application allows the user to easily write down and keep track of their golf score as they play. 

 #### TODO:

 1. Add Auth0 Authentication & finish congratulations and finish-game pages
 2. Integrate MongoDB/Mongoose & Local Storage (to build the game data as you are playing, then the finish button will send it to MongoDB)
 3. Add page transitions: Follow this tutorial for page transitions https://reacttricks.com/animating-next-page-transitions-with-framer-motion/
 4. And other animations for dropdowns and button toggle: https://www.youtube.com/watch?v=2V1WK-3HQNk&list=PL4cUxeGkcC9iHDnQfTHEVVceOEBsOf07i
 5. Optimizate for offline use & make a progressive web application

## Build status

![Lint passing](https://camo.githubusercontent.com/df0f65b2d0e7a0448dd50abbc3b4364dc971533f/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f776f726b666c6f772f7374617475732f70726574746965722f70726574746965722f4c696e743f6c6162656c3d4c696e74267374796c653d666c61742d737175617265)
![Coverage](https://camo.githubusercontent.com/facfcb6afd684d2c9701c7d6add65f391fdf86fc/68747470733a2f2f696d672e736869656c64732e696f2f636f6465636f762f632f6769746875622f6477796c2f686170692d617574682d6a7774322e7376673f6d61784167653d32353932303030)
![Speed blazing](https://camo.githubusercontent.com/c0d653f4e211ffff68800215f80fb458e25ae6f0/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f73706565642d626c617a696e672532302546302539462539342541352d627269676874677265656e2e7376673f7374796c653d666c61742d737175617265)

## Code style

**App**

![Code Style Prettier](https://camo.githubusercontent.com/687a8ae8d15f9409617d2cc5a30292a884f6813a/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f636f64655f7374796c652d70726574746965722d6666363962342e7376673f7374796c653d666c61742d737175617265)

**Marketing landing page**

## Technology

**App built with**
 * [Auth0](https://auth0.com/) 
 * [Framer Motion](https://www.framer.com/motion/) 
 * [Jest](https://jestjs.io/)
 * [Next.js](https://nextjs.org/)
 * [MongoDB](https://www.mongodb.com/)
 * [Mongoose](https://mongoosejs.com/)
 * [React Font Awesome](https://github.com/FortAwesome/react-fontawesome)
 * [React Testing Library](https://testing-library.com/)
 * [Storybook](https://storybook.js.org/)
 * [SWR](https://github.com/vercel/swr)
 * [Typescript](https://www.typescriptlang.org/)

 **Site (Marketing landing page) built with**
 * [Eleventy](https://www.11ty.dev)
 * [Kwes Form Build](https://kwes.io/)
 * [Stripe](https://auth0.com/)
 * [Tailwind CSS](https://tailwindcss.com/)

 ## Install

 **App** 

 ``` 
  git clone https://github.com/ptums/golf-journal.git
  cd golf-journal/app
  yarn install
 ```

 **Site (Marketing landing page)**

  ``` 
  git clone https://github.com/ptums/golf-journal.git
  cd golf-journal/site
  yarn install
 ```
 
 **App**

 ## Development

 **App**

 Run the [install process](#install) under the section **App**, open this project in you favorite code editor, create a new branch, and run ```yarn dev```.

 To develop a new feature for this application the developer must follow the contribution guidelines. These guidelines include create a story for the component as well as a test.

 To create a test navigate to ```app/tests``` and there you'll find three directories ```components, layouts, and pages```. If your feature is a component then your test file should go under components directory etc.

 To add a story navigate to the ```app/stories``` and add name your story after your component for example. If you component is ```Example.tsx``` then your story is ```Example.stories.tsx```. Also required for your stories is a css file, which should also be named after your component. All class names in your stories css file should be your class name plus ```stories-``` to differentiate which class will be used for production and which should be used to develop the component in storybook.

 Once you've written your test and story run ```yarn lint``` and ```yarn format``` to lint and format your code. Then you can push it to your branch for review.

 **Site (Marketing landing page)**

 ## Production

 **App**

 To create a production copy of this application run ```yarn build```, then ```yarn run```, and open ```http://localhost:3000``` in the browser.


 **Site (Marketing landing page)**

  ## Deployment

 **App**

 The branch ```production``` is hooked to vercel hosting and will run build deployment tests and then copy the repository to cloud hosting. So commit any changes you want to deploy to production to the ```production``` branch.

 **Site (Marketing landing page)**

 ## Screenshots

 **App**

 **Site (Marketing landing page)**

 ## Contribute

Add a Contribution Guidlines document link