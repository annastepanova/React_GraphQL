import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import User from '../components/User'
import Spinner from '../components/Spinner'
import '../components/User.css'


// creating GraphQL query

const FETCH_USERS_QUERY = gql`
  {
    getUsers{
    id
    name 
    username
    email 
    }
  }
`

const Users = () => {

  const { loading, data, refetch } = useQuery(FETCH_USERS_QUERY)

  return (
    <>
    {loading && (
      <div className="center">
        <Spinner />
      </div>
    )}
    <div className="container">
    {!loading && data && data.getUsers.map((user) => (
      <User key={user.id} user={user}/>
    ))    
    }
    </div>
    <button onClick={() => refetch()} className="list-button">UPDATE</button>
    </>
  )
}


export default Users
