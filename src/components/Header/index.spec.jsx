import {  render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Header from '.'

describe('component Header', () => {
   test('should render Header', () => {
      const { getByTestId } = render(<Header />)
      expect(getByTestId('header')).toBeInTheDocument();
   })

})