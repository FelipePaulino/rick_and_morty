import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Card from '.'

describe('component Card', () => {
   const mock = {
      image: "https://rickandmortyapi.com/api/character/avatar/20.jpeg",
      status: "unknown",
      gender: "Male",
      species: "Human",
   }

   test('should render Card', () => {
      const { getByText } = render(<Card data={mock} />)
      expect(getByText('STATUS: unknown')).toBeInTheDocument();
   })

})