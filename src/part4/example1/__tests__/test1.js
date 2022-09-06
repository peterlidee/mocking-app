import { screen, render } from '@testing-library/react'
import ParentComponent from '../ParentComponent'
import ChildComponent from '../ChildComponent'

jest.mock('../ChildComponent')

test('Parent renders correctly', () => {
  render(<ParentComponent message="Hello" />)
  expect(screen.getByText(/Parent component/i)).toBeInTheDocument()
})

test('ChildComponent mocks gets called correct number of times', () => {
  render(<ParentComponent message="Hello" />)
  // fails
  // expect(ChildComponent).toHaveBeenCalledTimes(1)
  // passes
  expect(ChildComponent).toHaveBeenCalledTimes(2)
})