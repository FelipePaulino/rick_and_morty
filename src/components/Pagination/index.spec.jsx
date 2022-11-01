import { render, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom'
import Pagination from '.'

describe('component Pagination', () => {
   const fn = jest.fn();
   const mock = {
      prev: "https://rickandmortyapi.com/api/character/?page=1",
      next: "https://rickandmortyapi.com/api/character/?page=3",
   }

   test('should render Pagination', () => {
      const { getByTestId } = render(<Pagination info={mock} actionNext={fn}  actionPrev={fn}/>)
      expect(getByTestId('pagination')).toBeInTheDocument();
   })

   test('should call function without click buttom prev', () => {
      const { getByTestId } = render(<Pagination info={mock} actionNext={fn}  actionPrev={fn}/>)
      const prev = getByTestId('prev')
      fireEvent.click(prev);
      expect(fn).toHaveBeenCalled()
   })

   test('should call function without click buttom next', () => {
      const { getByTestId } = render(<Pagination info={mock} actionNext={fn}  actionPrev={fn}/>)
      const next = getByTestId('next')
      fireEvent.click(next);
      expect(fn).toHaveBeenCalled()
   })
})