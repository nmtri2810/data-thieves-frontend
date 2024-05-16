import { Button } from '@/components/ui/button';
import Layout from '@/layout/mainLayout';
import { logoutRequest } from '@/store/actions/auth';
import { useAppDispatch } from '@/store/hooks';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutRequest({ navigate }));
  };

  return (
    <Layout>
      <div>Home</div>
      <Button onClick={handleLogout}>Logout</Button>
    </Layout>
  );
};

export default Home;
