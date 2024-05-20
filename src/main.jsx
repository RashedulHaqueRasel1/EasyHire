import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {

  RouterProvider,
} from "react-router-dom";
import router from './component/Router/Router';
import AuthProvider from './component/Provider/AuthProvider';
 



ReactDOM.createRoot(document.getElementById('root')).render(


  <div className='mx-auto container'>
    <React.StrictMode>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </React.StrictMode>
  </div>
)
