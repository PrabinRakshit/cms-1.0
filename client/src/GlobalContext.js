import React, { createContext, useMemo, useState, useEffect, useCallback } from 'react'
import AuthApi from './API/AuthApi';
import axios from 'axios';
import { toast } from 'react-toastify';

// context reference
export const DataContext = createContext();

// context provider
function DataProvider(props) {
    const [token, setToken] = useState('')

    const getToken = async () => {
      await axios.get(`/api/v1/auth/refreshToken`)
      .then(res => {
        // console.log('refresh token = ', res)
        setToken(res.data.accessToken)
      }).catch(err => toast.error(err.data.response.msg))
    }

    const initFetch = useCallback(()=>{
      if(localStorage.getItem("loginToken")){
        getToken()
      }
    },[getToken])

    useEffect(()=>{
      initFetch()
    },[initFetch])

    const data = {
        authApi: AuthApi(token)
    }

    const memoValue = useMemo(()=>({
        token,
        data
    }),[token])

  return (
    <DataContext.Provider value={memoValue}>
        {props.children}
    </DataContext.Provider>
  )
}

export default DataProvider