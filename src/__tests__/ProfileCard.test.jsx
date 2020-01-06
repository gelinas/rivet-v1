import React from 'react'

// Testing libraries
import { render } from '../utils/testUtils.js'
import '@testing-library/jest-dom/extend-expect'

// Components to test
import ProfileCard from '../components/profile/ProfileCard'

const data = {
  id: 10,
  created_at: "2020-01-03 21:13:44",
  updated_at: "2020-01-03 21:13:44",
  first_name: "Louis",
  last_name: "Gelinas",
  phone: "313-920-1944",
  email: "jlgelinas@gmail.com",
  address: "645 E Bethune",
  city: "Detroit",
  state: "MI",
  zip: "48202",
  photo: "https:\/\/www.louisgelinas.com\/static\/media\/louis-headshot.d09504cd.jpg",
  notes: null
}

describe('Tests for ProfileCard', () => {

  test('should match snapshot', () => {
    const tree = render(
      <ProfileCard profile={data} />
    )
    expect(tree).toMatchSnapshot()
  })

  test('Should display correct data', () => {
    const {getByText} = render(
      <ProfileCard profile={data} />
    )

    expect(getByText(data.email)).toBeInTheDocument()
    expect(getByText(/645 E Bethune/i)).toBeInTheDocument()
  })
})