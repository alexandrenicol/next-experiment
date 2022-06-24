// __tests__/index.test.jsx

import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'

import Home from '../pages/index'

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home company='Webnicol.fr' />)

    const heading = screen.getByText("Webnicol.fr")

    expect(heading).toBeInTheDocument()
  })
})
