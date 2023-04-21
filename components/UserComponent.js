import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useAuth } from '../utils/context/authContext';
import { signOut } from '../utils/auth';

export default function UserData() {
  const { user } = useAuth();

  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={user.photoURL} alt={user.displayName} style={{ height: '400px' }} />
      <Card.Body>
        <Card.Title>{user.displayName}</Card.Title>
        <p>{user.email}</p>
        <p>{user.metadata.lastSignInTime}</p>
        <Button type="button" onClick={signOut}>Sign Out</Button>
      </Card.Body>
    </Card>
  );
}
