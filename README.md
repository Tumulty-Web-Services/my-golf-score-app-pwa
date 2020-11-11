# Golf Journal

## Motivation

The goal of this application is to replace the traditional pencil and paper based golf score card. This application allows the user to easily write down and keep track of their golf score as they play.

#### TODO:

1. Incoporate custom login, sign up, and edit (no email field ask them to reach to support) forms using Auth0 API
2. Review the game play experience
3. Integrate offline capabilities (when offline stor everything in local storage, when online push everything to db)
4. Refine to get high lighthouse scores
5. Integrate Kwes Forms (support, feedback, contact)
6. Push to production
7. Test on the golf course
8. Point domain to app
9. Integrate with marketing landing page

## Build status

![Lint passing](https://camo.githubusercontent.com/df0f65b2d0e7a0448dd50abbc3b4364dc971533f/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f776f726b666c6f772f7374617475732f70726574746965722f70726574746965722f4c696e743f6c6162656c3d4c696e74267374796c653d666c61742d737175617265)
![Coverage](https://camo.githubusercontent.com/facfcb6afd684d2c9701c7d6add65f391fdf86fc/68747470733a2f2f696d672e736869656c64732e696f2f636f6465636f762f632f6769746875622f6477796c2f686170692d617574682d6a7774322e7376673f6d61784167653d32353932303030)
![Speed blazing](https://camo.githubusercontent.com/c0d653f4e211ffff68800215f80fb458e25ae6f0/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f73706565642d626c617a696e672532302546302539462539342541352d627269676874677265656e2e7376673f7374796c653d666c61742d737175617265)

## Code style

![Code Style Prettier](https://camo.githubusercontent.com/687a8ae8d15f9409617d2cc5a30292a884f6813a/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f636f64655f7374796c652d70726574746965722d6666363962342e7376673f7374796c653d666c61742d737175617265)

## Technology

- [Auth0](https://auth0.com/)
- [Jest](https://jestjs.io/)
- [Next.js](https://nextjs.org/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [React Bootstrap](https://react-bootstrap.netlify.app)
- [React Font Awesome](https://github.com/FortAwesome/react-fontawesome)
- [React Testing Library](https://testing-library.com/)
- [Storybook](https://storybook.js.org/)
- [SWR](https://github.com/vercel/swr)
- [Typescript](https://www.typescriptlang.org/)

## Install

```
 git clone https://github.com/ptums/golf-journal.git
 cd golf-journal
 yarn install
```

## Development

Run the [install process](#install), open this project in you favorite code editor, create a new branch, and run `yarn dev`. Oh, and create a `.env` file and add mongodb and auth0 credentials, you can get them from me.

To develop a new feature for this application the developer must follow the contribution guidelines. These guidelines include create a story for the component as well as a test.

To create a test navigate to `app/tests` and there you'll find three directories `components, layouts, and pages`. If your feature is a component then your test file should go under components directory etc.

To add a story navigate to the `app/stories` and add name your story after your component for example. If you component is `Example.tsx` then your story is `Example.stories.tsx`. Also required for your stories is a css file, which should also be named after your component. All class names in your stories css file should be your class name plus `stories-` to differentiate which class will be used for production and which should be used to develop the component in storybook.

Once you've written your test and story run `yarn lint` and `yarn format` to lint and format your code. Then you can push it to your branch for review.

Also, the app runs on ```http://localhost:3400```

## Production

To create a production copy of this application run `yarn build`, then `yarn run`, and open `http://localhost:3500` in the browser.

## Deployment

The branch `production` is hooked to vercel hosting and will run build deployment tests and then copy the repository to cloud hosting. So commit any changes you want to deploy to production to the `production` branch.

## Contribute

Add a Contribution Guidlines document link
