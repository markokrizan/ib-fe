export const getUserFullName = (user) => `${user?.firstName} ${user?.lastName}`;

export const userHasRole = (user, roleName) =>
  !!user?.roles.find((role) => role.name === roleName);
