import { render } from '@testing-library/react'
import ParentComponent from '../ParentComponent'
import ChildComponent from '../ChildComponent'

jest.mock('../ChildComponent')

test('ChildComponent mock was called', () => {
  render(<ParentComponent />)
  expect(ChildComponent).toHaveBeenCalled()
})