import { render } from '@testing-library/react'
import ParentComponent from '../ParentComponent'
import ChildComponent from '../ChildComponent'

jest.mock('../ChildComponent')

test('Child returns foo', () => {
  ChildComponent.mockReturnValue('Foo')
  render(<ParentComponent message="Hello" />)
  expect(ChildComponent).toHaveReturnedWith('Foo')
})

test('Child returns nothing', () => {
  jest.resetAllMocks()
  expect(ChildComponent.mock.results).toHaveLength(0)
})