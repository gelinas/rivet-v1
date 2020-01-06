import React, { useRef } from 'react'

// Testing libraries
import { render, fireEvent } from '../utils/testUtils.js'
import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event'

// Components to test
import Navbar from '../components/navbar/Navbar'
import { act } from 'react-dom/test-utils'

describe('Tests for Navbar', () => {

  beforeEach(() => {
    // reset mock functions before each test
    jest.clearAllMocks()
  })

  test('should match snapshot', () => {
    const tree = render(
      <Navbar />
    );
    expect(tree).toMatchSnapshot();
  })

  test('should add class is-active to reveal mobile menu when user clicks on burger', () => {
    
    const { getByTestId } = render(<Navbar />);

    // get menu burger icon and navigation menu nodes
    const burgerIcon = getByTestId(/^burger-icon$/i);
    let navMenu = getByTestId(/^nav-menu$/i);

    // test for hidden navigation menu on mobile
    expect(burgerIcon).toBeInTheDocument();
    expect(navMenu).toBeInTheDocument();
    expect(navMenu).not.toHaveClass("is-active");

    // test for navigation menu to be revealed on burgerIcon click
    userEvent.click(burgerIcon);
    navMenu = getByTestId(/^nav-menu$/i);
    expect(navMenu).toHaveClass("is-active");
  })

  test('should remove class is-active to hide mobile menu when user clicks on burger second time', () => {
    
    const { getByTestId } = render(<Navbar />);

    // get menu burger icon and navigation menu nodes
    const burgerIcon = getByTestId(/^burger-icon$/i);
    let navMenu = getByTestId(/^nav-menu$/i);

    // test for hidden navigation menu on mobile
    expect(burgerIcon).toBeInTheDocument();
    expect(navMenu).toBeInTheDocument();
    expect(navMenu).not.toHaveClass("is-active");

    // test for navigation menu to be hidden after two clicks on burgerIcon
    // menu reveal
    userEvent.click(burgerIcon);
    navMenu = getByTestId(/^nav-menu$/i);
    expect(navMenu).toHaveClass("is-active");
    // menu hidden on second click
    userEvent.click(burgerIcon);
    navMenu = getByTestId(/^nav-menu$/i);
    expect(navMenu).not.toHaveClass("is-active");
  })

  test('should remove class is-active to hide mobile menu when user clicks on burger second time', () => {
    
    const { getByTestId } = render(<Navbar />);

    // get menu burger icon and navigation menu nodes
    const burgerIcon = getByTestId(/^burger-icon$/i);
    let navMenu = getByTestId(/^nav-menu$/i);
    let navBrand = getByTestId(/^nav-brand$/i);

    // test for hidden navigation menu on mobile
    expect(burgerIcon).toBeInTheDocument();
    expect(navMenu).toBeInTheDocument();
    expect(navMenu).not.toHaveClass("is-active");

    // test for navigation menu to be hidden after two clicks on burgerIcon
    // menu reveal
    userEvent.click(burgerIcon);
    navMenu = getByTestId(/^nav-menu$/i);
    expect(navMenu).toHaveClass("is-active");
    // menu hidden on outside click
    act(() => userEvent.click(navBrand));
    navMenu = getByTestId(/^nav-menu$/i);
    expect(navMenu).not.toHaveClass("is-active");
  })
})