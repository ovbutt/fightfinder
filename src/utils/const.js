export const path = {
  profile: '/profile',

  confirmEmail: '/confirm-email',
  dashboard: '/dashboard',
};

export const authPaths = {
  login: '/login',
  signup: '/signup',
  resetPassword: '/reset-password',
  adminLogin: '/admin',
};

export const userPaths = {};

export const adminPaths = {
  adminHome: '/admin/home',
};

export const regex = {
  email:
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
};
