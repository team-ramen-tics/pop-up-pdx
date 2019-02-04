const roles = { 
  CHEF: 'chef',
  VISITOR: 'visitor'
};

const getAllRoles = () => Object.values(roles);

module.exports = { roles, getAllRoles };
