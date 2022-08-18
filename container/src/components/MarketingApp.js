import React, { useEffect, useRef } from 'react';
import { mount } from 'marketing/MarketingApp';
import { useHistory } from '../App';

export default () => {
  const ref = useRef(null);

  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, { onNavigate });

    history.listen(onParentNavigate);
  }, []);

  const onNavigate = ({ location: { pathname } }) => {
    if (pathname !== history.location.pathname) history.push(pathname);
  };

  return <div ref={ref} />;
};