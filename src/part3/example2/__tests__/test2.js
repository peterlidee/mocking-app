import { screen, render } from '@testing-library/react'
import ParentComponent from '../ParentComponent'
import WrapperComponent, { ExtraComponent } from '../WrapperComponent'

jest.mock('../WrapperComponent')

test('Auto mock worked', () => {
  render(<ParentComponent />)
  expect(screen.getByText(/Parent Component/i)).toBeInTheDocument()
  // mocking default export works
  expect(WrapperComponent).toHaveBeenCalledTimes(1)
  // mocking named export works
  expect(ExtraComponent).toHaveBeenCalledTimes(1)
})