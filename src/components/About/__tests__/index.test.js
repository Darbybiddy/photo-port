import React from "react";
import{render,cleanup} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import About from "..";

//Configure the Testing Environment
afterEach(cleanup)

//Create a Baseline Test
describe("About component", ()=>{
    //first test
    it('renders',()=>{
        render(<About />)
    })
    //Create a Test to Compare Snapshots of the DOM
    it('matches snapshot DOM node structure', ()=> {
    const {asFragment} = render(<About />)

    expect(asFragment()).toMatchSnapshot()
    })

})


