// imported the both libs from playwright module

// require is the Node.js function to load modules into the projects,
// require is not the javascript function

// test for create to the tests and the structure of the tests
// expect for the assertions or to add any checks 

// we are using const, we don't want any script to change this

// const {test, expect} = require("@playwright/test")

// const {hello, helloWorld} = require("./demo/methods.js")


// import {hello, helloWorld} from "./demo/methods"
// calling the methods that are imported / required from the demo/methods file


import {test, expect} from '@playwright/test'

test('first test', async ({page}) => {
    await page.goto('https://www.google.com/')
    await expect(page).toHaveTitle("Google")
})















