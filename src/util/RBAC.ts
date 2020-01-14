/**
 * Role-based access control.
 *
 * This module is used for checking permissions against roles.
 */

const roles: Role = {
  admin: {
    can: ['c', 'r', 'u', 'd'],
  },
  user: {
    can: ['r'],
  },
};
