import {BrowserRouter, Routes, Link, createBrowserRouter, createRoutesFromElements, RouterProvider, Route} from 'react-router-dom'
import './App.css'
import VanMain from  './pages/VanMain'
import About from './pages/About'
import Vans from './pages/Vans'
import {loader as vansLoader, vanDetailsLoader} from './utils/loader'
import PageNotFound from './pages/PageNotFound'
import VanDetails from './pages/VanDetails'
import Layout from './components/Layout'
import Dashboard from './pages/host/Dashboard'
import Income from './pages/host/Income'
import Reviews from './pages/host/Reviews'
import HostLayout from './components/HostLayout'
import HostVans from './pages/host/HostVans'
import {hostLoader as hostVanLoader} from './utils/loader'
import HostVanInnerDetails from './pages/host/HostVanInnerDetails'
import HostVanDetailsLayout from './components/HostVanDetailsLayout'
import HostVanDetailsPricing from './pages/host/HostVanDetailsPricing'
import HostVanDetailsPhotos from './pages/host/HostVanDetailsPhotos'
import Login from './pages/Login'
import { showLoginMsg } from './utils/loader'
import { action } from './utils/action'
import { checkAuth } from './utils/auth'
import ErrorHandler from './components/Error'
import Profile from './components/Profile'
import "../server"

function App() {

  const route = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='login' element={<Login/>} loader={showLoginMsg} action={action}/>
      <Route path='*' element={<PageNotFound/>} />
      <Route index element={<VanMain/>}/>
      <Route path='about' element={<About/>} />
      <Route path='vans'>
        <Route index element = {<Vans/>} loader={vansLoader} errorElement={<ErrorHandler/>}/>
        <Route path=':id' element = {<VanDetails/>} loader={vanDetailsLoader} errorElement={<ErrorHandler />}/>
      </Route>
      <Route path='/profile' element = {<Profile/>} />
      <Route path='host' element={<HostLayout/>} loader={async ({request}) => {
        const pathname = new URL(request.url).pathname
        await checkAuth(pathname)
        return null
        }
      }>

        <Route index element={<Dashboard/>} />
        <Route path='income' element={<Income/>}/>
        <Route path='vans' element={<HostVans/>} loader = { hostVanLoader} errorElement={<ErrorHandler/>}/>
        <Route path='vans/:id' element={<HostVanDetailsLayout/>} loader = {vanDetailsLoader} errorElement={<ErrorHandler/>}>

          <Route index element={<HostVanInnerDetails/>}/>
          <Route path='pricing' element={<HostVanDetailsPricing />}/>
          <Route path='photos' element={<HostVanDetailsPhotos />}/>
        
        </Route>
        <Route path='reviews' element={<Reviews/>}/>

      </Route>
    </Route>
  ))

  return (
    <>
      
      {/* <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='*' element={<PageNotFound/>} />
            <Route index element={<VanMain/>}/>
            <Route path='about' element={<About/>} />
            <Route path='vans'>
              <Route index element = {<Vans/>}/>
              <Route path=':id' element = {<VanDetails/>}/>
            </Route>

            <Route path='host' element={<HostLayout/>}>
              <Route index element={<Dashboard/>}/>
              <Route path='income' element={<Income/>}/>
              <Route path='vans' element={<HostVans/>}/>
              <Route path='vans/:id' element={<HostVanDetailsLayout/>}>
                <Route index element={<HostVanInnerDetails/>}/>
                <Route path='pricing' element={<HostVanDetailsPricing />}/>
                <Route path='photos' element={<HostVanDetailsPhotos />}/>
              </Route>
              <Route path='reviews' element={<Reviews/>}/>
            </Route>
          </Route>
        </Routes>
    </BrowserRouter> */}

    <RouterProvider router={route}/>

    </>
    
  )
}

export default App
