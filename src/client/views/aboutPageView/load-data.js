import { fetchUsers } from '../../actions'; 

export const loadAboutData = ({ dispatch }) => dispatch(fetchUsers()); 
