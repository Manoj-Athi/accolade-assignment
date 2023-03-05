import { useState } from 'react'
import Search from './components/Search'
import DisplayFood from './components/DisplayFood'
import { Container, Row } from 'react-bootstrap';
import './stylesheet.scss'

function App() {

  const [data, setData] = useState([])
  const [searchKey, setSearchKey] = useState('')

  const handleSearch = async (e) => {
    e.preventDefault();
    if(searchKey!=='' || searchKey.length>=3){
      setData('')
      setSearchKey('')
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '8c639eb391msh9824167424ea17fp10942cjsn96bc96ada81e',
          'X-RapidAPI-Host': 'edamam-food-and-grocery-database.p.rapidapi.com'
        }
      };
      const data = await fetch(`https://edamam-food-and-grocery-database.p.rapidapi.com/parser?ingr=${searchKey}`, options)
      const jsonData = await data.json()
      setData(jsonData.hints)
    }
  }
  

  return (
    <Container className='p-4'>
      <Search earchKey={searchKey} setSearchKey={setSearchKey} handleSearch={handleSearch}/>
      <Row>
          <DisplayFood data={data}/>
      </Row>
    </Container>
  );
}

export default App;
