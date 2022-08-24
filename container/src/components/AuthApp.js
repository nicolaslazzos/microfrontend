import React, { useEffect, useRef } from 'react';
import { mount } from 'auth/AuthApp';
import { useHistory } from '../App';

export default ({ onSignIn }) => {
  const ref = useRef(null);

  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, { onNavigate, onSignIn, initialPath: history.location.pathname });

    history.listen(onParentNavigate);
  }, []);

  const onNavigate = ({ location: { pathname } }) => {
    if (pathname !== history.location.pathname) history.push(pathname);
  };

  return <div ref={ref} />;
};