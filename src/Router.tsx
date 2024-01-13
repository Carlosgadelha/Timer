import { Routes, Route} from 'react-router-dom'

import { Home } from './components/Home'

export const Router = () => {
    return(
        <Routes>
            <Route path="/" component={<Home/>}/>
        </Routes>
    )

}