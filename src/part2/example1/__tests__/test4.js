import { screen, render } from '@testing-library/react'
import ParentComponent from '../ParentComponent'
import ChildComponent from '../ChildComponent'

jest.mock('../ChildComponent')

test('ParentComponent rendered', () => {
  render(<ParentComponent />)
  expect(screen.getByText(/Parent Component/i)).toBeInTheDocument()
})

test('ChildComponent mock was called', () => {
  render(<ParentComponent />)
  expect(ChildComponent).toHaveBeenCalled()
})