import { screen, render } from '@testing-library/react'
import ParentComponent from '../ParentComponent'
import ChildComponent from '../ChildComponent'

jest.mock('../ChildComponent')

test('Parent renders correctly', () => {
  render(<ParentComponent message="Hello" />)
  expect(screen.getByText(/Parent component/i)).toBeInTheDocument()
})

test('ChildComponent mocks gets called correctly', () => {
  // clear
  jest.clearAllMocks()
  render(<ParentComponent message="Hello" />)
  expect(ChildComponent).toHaveBeenCalledTimes(1)
  expect(ChildComponent).toHaveBeenCalledWith(
    expect.objectContaining({
      message: 'Hello'
    }),
    expect.anything()
  )
})

test('ChildComponent mock got reset', () => {
  // clear
  jest.clearAllMocks()
  expect(ChildComponent).toHaveBeenCalledTimes(0)
  expect(ChildComponent.mock.results).toHaveLength(0)
})