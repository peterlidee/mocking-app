import { screen, render } from '@testing-library/react'
import ParentComponent from '../ParentComponent'

jest.mock('../ChildComponent')

test('ParentComponent renders and ChildComponent does not', () => {
  render(<ParentComponent />)
  expect(screen.getByText(/Parent Component/i)).toBeInTheDocument()
  expect(screen.queryByText(/Child Component/i)).not.toBeInTheDocument()
})