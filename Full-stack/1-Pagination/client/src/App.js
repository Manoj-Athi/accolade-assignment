import { useState, useEffect } from 'react';
import ModalFormContainer from "./components/ModalFormContainer";
import DisplayPatients from './components/DisplayPatients';
import { fetchAllDetails, createPatientDetails, updatePatientDetails, deletePatientDetails } from './api';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Paginationp from './components/Paginationp';

function App() {

  const [patientRecords, setPatientRecords] = useState([])
  const [show, setShow] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const indexOfLastPost = currentPage * 5;
  const indexOfFirstPost = indexOfLastPost - 5;
  const currentPatients = patientRecords.slice(indexOfFirstPost, indexOfLastPost);


  useEffect(() => {
    const func = async () => {
      const data = await fetchAllDetails();
      if(data?.status === "SUCCESS"){
        setPatientRecords(data.data)
      }
    }
    func()
  }, [])

  const handleShow = () => {
    setShow(state => !state)
  }

  const handleCreatePatient = async (values) => {
    const data = await createPatientDetails(values);
    if(data.status === "SUCCESS"){
      setPatientRecords(state => [...state, data.data])
    }
    setShow(state => !state)
  }

  const handleEditPatient = async (_id, values) => {
    const data = await updatePatientDetails(_id, values);
    if(data.status === "SUCCESS"){
      const data = await fetchAllDetails();
      if(data?.status === "SUCCESS"){
        setPatientRecords(data.data)
      }
    }
  }

  const handleDeletePatient = async (id) => {
    const data = await deletePatientDetails(id);
    if(data.status === "SUCCESS"){
      setPatientRecords(state => state.filter(s => s._id !== id))
    }
  }

  const paginate = pageNum => setCurrentPage(pageNum);

  const total = Math.ceil(patientRecords.length / 5)
  const nextPage = () => setCurrentPage(state => state>=total ? total : state + 1 );

  const prevPage = () => setCurrentPage(state => state<=1 ? 1 : state - 1 );

  return (
    <Container className="p-2">
      <Row className="align-items-center">
        <Col><h1>Patient Details</h1></Col>
        <Col className='d-flex flex-row-reverse'>
          <Button variant="success"  onClick={handleShow}>Add</Button>
        </Col>
      </Row>
      <ModalFormContainer show={show} handleClose={handleShow} handleFormSubmit={handleCreatePatient}/>
      { 
        patientRecords && patientRecords.length !==0 ? (
          <>
            <DisplayPatients currentPatients={currentPatients} patientRecords={patientRecords} handleEditPatient={handleEditPatient} handleDeletePatient={handleDeletePatient} idxNumber={indexOfFirstPost}/>
            <Paginationp totalPatients={patientRecords.length} currentPage={currentPage} paginate={paginate} nextPage={nextPage} prevPage={prevPage}/>
          </>
        ) : (
          <p>No patient records found</p>
        )
      }
    </Container>
  );
}

export default App;
