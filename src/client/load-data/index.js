import { fetchUsers, fetchAdminsList, fetchUser } from '../actions'; 


// ___ About View data call ___ // 
export const loadAboutData = ({ dispatch }) => dispatch(fetchUsers()); 


// ___ Admin View data call ___ // 
export const loadAdminData = ({ dispatch }) => dispatch(fetchAdminsList())

export const loadProfileData = ({ dispatch }, { params }) => dispatch(fetchUser(params.user));
 
