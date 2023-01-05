import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

//add cleanup statement
afterEach(cleanup)

//add describe function to declare what this test suite is testing
describe('Nav component',()=>{
    //baseline test
    it('renders', ()=>{
        render(<Nav />)
    })
    //snapshot test
    it('matches snapshot',()=>{
        const{asFragment} = render(<Nav />)
        //assert value comparison
        expect(asFragment()).toMatchSnapshot()
    })
})

//Create a Test for Emoji Visibility
describe('emoji is visible', ()=>{
    it('inserts emoji into the h2', ()=>{
        //Arrage
        const {getByLabelText} = render(<Nav />)
        //Assert
        expect(getByLabelText('camera')).toHaveTextContent('📸')
    })
})

//Create a Test for Link Visibility
describe('links are visible', () => {
    it('inserts text into the links', () => {
      const { getByTestId } = render(<Nav />);
      expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
      expect(getByTestId('about')).toHaveTextContent('About me');
    });
  })