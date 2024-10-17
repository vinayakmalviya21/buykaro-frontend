// Utility function to set the user in localStorage
export const setUser = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
  };
  
  // Utility function to get the user from localStorage
  export const getUser = () => {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
  };
  
  // Utility function to remove the user from localStorage
  export const removeUser = () => {
    localStorage.removeItem("user");
  };
  
  // Utility function to set userName in localStorage
  export const setUserName = (userName) => {
    localStorage.setItem("userName", userName);
  };
  
  // Utility function to get userName from localStorage
  export const getUserName = () => {
    return localStorage.getItem("userName");
  };
  
  // Utility function to remove userName from localStorage
  export const removeUserName = () => {
    localStorage.removeItem("userName");
  };
  