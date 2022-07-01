import { useState } from 'react'
import { useQuery } from 'react-query'
import Character, { CharacterInterface } from '../Character'
import './characters.css'

const urlApi = 'https://rickandmortyapi.com/api/character?page='

export interface ApiResponseInterface {
  info: {
    count: number
    pages: number
    next: string
    prev: string
  }
  results: CharacterInterface[]
}

const Characters = () => {
  const [page, setPage] = useState(1)

  const fetchCharacters = (
    pNumber: number
  ): Promise<ApiResponseInterface> => {
    return fetch(`${urlApi}${pNumber}`).then((response) => response.json())
  }

  const { data, status } = useQuery(
    ['characters', page],
    () => fetchCharacters(page),
    {
      keepPreviousData: true
    }
  )

  if (status === 'loading') {
    return <div>Loading...</div>
  }

  if (status === 'error') {
    return <div>Error!</div>
  }

  const handlePrevPage = () => {
    setPage((old) => old - 1)
  }

  const handleNextPage = () => {
    setPage((old) => old + 1)
  }

  return (
		<div className='characters'>
      <h1>{'Rick and Morty characters'}</h1>
			<div className='container'>
				{data?.results.map((character) => (
					<Character key={character.id} character={character} />
				))}
			</div>
			<div className='navigation'>
				<button disabled={page === 1} onClick={handlePrevPage}>
          <span>{'<'}</span> Prev
				</button>
        <h4>Page: {page}</h4>
				<button disabled={page >= (data?.info.pages || 0)} onClick={handleNextPage}>
          Next <span>{'>'}</span>
        </button>
			</div>
		</div>
  )
}

export default Characters
