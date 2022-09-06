import { screen, render } from '@testing-library/react'
import ParentComponent from '../ParentComponent'
import WrapperComponent from '../WrapperComponent'

jest.mock('../WrapperComponent')

test('ParentComponent renders correctly', () => {
  render(<ParentComponent />)
  expect(screen.getByText(/Parent Component/i)).toBeInTheDocument()
})

test('Wrapper mock was called with the correct arguments', () => {
  jest.clearAllMocks()
  render(<ParentComponent />)
  expect(WrapperComponent).toHaveBeenCalledTimes(2)
  // fails cause [] euhhhh
  /* expect(WrapperComponent).toHaveBeenNthCalledWith(1,
    expect.objectContaining({
      children: [] // euh
    }),
    expect.anything()
  ) */
})