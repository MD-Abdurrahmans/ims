import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './router/Router';
import AuthProvider from './authProvider/AuthProvider';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 
  <AuthProvider>

 <QueryClientProvider client={queryClient} >
 <RouterProvider router={router} ></RouterProvider>
 </QueryClientProvider>

  </AuthProvider>
  
  </React.StrictMode>,
)