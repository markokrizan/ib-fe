import { intersectionWith } from 'lodash-es';

export const getUserFullName = (user) => `${user?.firstName} ${user?.lastName}`;

export const userHasRoles = (user, roles) => {
  if (!user?.roles?.length || !roles.length) {
    return false;
  }

  return !!intersectionWith(
    user?.roles,
    roles,
    (userRole, role) => userRole.name === role
  ).length;
};

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
