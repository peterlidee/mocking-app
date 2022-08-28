import { render } from '@testing-library/react'
import ParentComponent from '../ParentComponent'
import ChildComponent from '../ChildComponent'

jest.mock('../ChildComponent')

test('ChildComponent mock can be tested', () => {
  render(<ParentComponent />)
  // using .mock property
  expect(ChildComponent.mock.calls).toHaveLength(1)
  // using  jest helpers
  expect(ChildComponent).toHaveBeenCalled()
})