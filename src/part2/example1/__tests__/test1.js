import { screen, render } from '@testing-library/react'
import ParentComponent from '../ParentComponent'

test('ParentComponent renders', () => {
  render(<ParentComponent />)
  expect(screen.getByText(/Parent Component/i)).toBeInTheDocument()
})

test('ParentComponent and ChildComponent render', () => {
  render(<ParentComponent />)
  // screen.debug()
  expect(screen.getByText(/Parent Component/i)).toBeInTheDocument()
  expect(screen.getByText(/Child Component/i)).toBeInTheDocument()
})