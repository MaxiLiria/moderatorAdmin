import {useEffect, useState} from 'react';
import {getChallenges} from '../api/challenge';
import './index.css'
import DataTable from 'react-data-table-component';
import { useNavigate } from 'react-router-dom';



const Home = () => {
const [challenges, setChallenges] = useState([])
const navigate = useNavigate()

  const refetch = () => {
    getChallenges().then(data => {
      setChallenges(data)
    })
}

useEffect(() => {
    refetch()
}, [])

const handleSee = async (id) => {
  navigate(`/challenge/${id}`)
}

const columns = [
  {
    name: "Id",
    selector: (row) => row.id,
    sortable: true,
  },
  {
    name: "Description",
    selector: (row) => row.description,
    sortable: true,
    style: {
      width: '500px',
    },
  },
  {
    name: "Username",
    selector: (row) => row.watcher.username ? row.watcher.username : row.watcher,
    sortable: true,
  },
  {
    name: "Actions",
    selector: (row) => <button onClick={() => handleSee(row.id)}>Ver</button>,
    sortable: false,
  }
];


  return (
    <div className='container'>
     <h3>Challenges</h3>
     <DataTable columns={columns} data={challenges} />
    </div>
  )
}

export default Home