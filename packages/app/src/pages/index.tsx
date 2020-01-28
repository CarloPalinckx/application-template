import React from 'react';
import Card from '../components/Card';

const Home = () => {
  return (
    <div style={{ width: '400px', margin: 'auto' }}>
      <div>
        <br />
        <Card>Knippen</Card>
        <br />
        <Card>Verven</Card>
        <br />
        <Card>Fohnen</Card>
        <br />
        <Card>Baard</Card>
      </div>
    </div>
  );
};

export default Home;
