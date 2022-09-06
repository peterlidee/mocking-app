import { render } from '@testing-library/react'
import ParentComponent from '../ParentComponent'
import ChildComponent from '../ChildComponent'

jest.mock('../ChildComponent')

// fails
// test('The mocked ChildComponent gets called with the { message: "Hello" }', () => {
//   render(<ParentComponent />)
//   expect(ChildComponent).toHaveBeenCalledWith(
//     {message: 'Hello'}
//   )
// })

test('The mocked ChildComponent gets called with the { message: "Hello" } and {}', () => {
  render(<ParentComponent />)
  expect(ChildComponent).toHaveBeenCalledWith(
    { message: 'Hello' },
    {}
  )
})

// final test
test('The mocked ChildComponent gets called with the correct props', () => {
  render(<ParentComponent />)
  expect(ChildComponent).toHaveBeenCalledWith(
    expect.objectContaining({
      message: 'Hello',
    }),
    expect.anything()
  )
})