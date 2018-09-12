# Freight Farms Code Challenge

#### Requirements To Run
`node v6+ OR yarn` - both are not needed

[node installation](https://nodejs.org/en/download/)

[yarn installation](https://yarnpkg.com/en/docs/install)

Fork repository to your own github account and clone
```
git clone https://github.com/YOUR_GITHUB_ACCOUNT/code-challenge.git
```
then
```
cd code-challenge
```
and
```
npm install
```
or
```
yarn install
```

Once this has completed, run app with `npm start` or `yarn start`.

#### Challenge Background

We designed this to test your ability to understand a current code base that is outside of your comfort zone. Our goal with this challenge is to assess how well you can use your resources to solve a small task within an app environment.

The code here is 90% reused from our app. If you can pick up how things are functioning we have faith you will be able to quickly get up to speed working with us.

#### Challenge

While there are quite a few files working together here, the _only_ file you should be editing is `src/components/App.js`

There are 2  things we are looking for:

1) Update the `handleSubmit` function

-   It should only update the state when text has been entered in __both__ inputs (first name and last name)
-   This should be setting the state of the `cards` array to _add_ a new card to the screen when submitted. Make sure not to overwrite the current array.
-   It should clear the inputs after a successful entry using `DEFAULT_STATE`
-   It should set the input focus back to the `First Name` input after successful entry

2) Study the code and edit `App.js` so that the number of columns that the cards appear in is set to a maximum of __two__ on large screens

If you find this easy and want to show off, as a bonus, you can update the `handleClose` function to remove a single card at a time from the screen. Again, only using `App.js`.

#### Submitting

Please open a pull request from your repository to ours once you have completed the challenge.

Please feel free to reach out to us if you have questions or if you get stuck on anything. We would always rather help you thorugh a problem than for you to silently struggle. Submitting poor code without asking for help will remove you from candidacy.
