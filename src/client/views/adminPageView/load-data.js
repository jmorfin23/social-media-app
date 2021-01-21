import { fetchAdminsList } from '../../actions'; 

export const loadAdminData = ({ dispatch }) => dispatch(fetchAdminsList())