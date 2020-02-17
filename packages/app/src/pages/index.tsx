import React from 'react';
import { withApollo } from '../lib/apollo';
import { useGetUsers } from '../__generated__';

const Home = () => {
  const { data, loading, error } = useGetUsers();

  if (loading || error || data === undefined) {
    return null;
  }

  return <div style={{ width: '400px', margin: 'auto' }}>home</div>;
};

export default withApollo(Home);
