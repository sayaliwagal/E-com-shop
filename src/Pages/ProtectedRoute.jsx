import { useContext } from 'react'
import CartContext from '../Utils/Context/CartContext'
import { Navigate } from 'react-router';

const ProtectedRoute = ({children}) => {
    const {auth} = useContext(CartContext);
    if(auth){
        return children
    }else{
       return <Navigate to='/login' />
    }
}

export default ProtectedRoute
