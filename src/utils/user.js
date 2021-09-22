export const getUserFullName = (user) => `${user?.firstName} ${user?.lastName}`;

export const userHasRole = (user, roleName) =>
  !!user?.roles.find((role) => role.name === roleName);

export const formatRoles = (user) => {
  if (!user?.roles?.length) {
    return '';
  }

  return user.roles.reduce(
    (acc, role, index) =>
      `${acc}${index < user.roles.length - 1 ? ', ' : ''}${role.name.replace(
        'ROLE_',
        ''
      )}`,
    ''
  );
};
