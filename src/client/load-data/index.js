import { fetchUserData } from '../actions'; 


// // ___ About View data call ___ // 
// export const loadAboutData = ({ dispatch }) => dispatch(fetchUsers()); 


// // ___ Admin View data call ___ // 
// export const loadAdminData = ({ dispatch }) => dispatch(fetchAdminsList())


// __ Loading Profile call __ // 
export const loadProfileData = ({ dispatch }, { params }) => dispatch(fetchUserData(params.user));
 
