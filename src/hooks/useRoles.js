import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllRoles } from 'store/auth/actions';
import { makeSelectRoles, makeSelectRolesLoading } from 'store/auth/selectors';

const useRoles = (options = { shoudFetch: true }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (options.shoudFetch) {
      dispatch(getAllRoles());
    }
  }, []);

  const roles = useSelector(makeSelectRoles());
  const rolesLoading = useSelector(makeSelectRolesLoading());

  return { roles, rolesLoading };
};

export default useRoles;
