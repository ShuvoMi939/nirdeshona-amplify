'use client';

import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import '../amplify-config';

function LoginPage({ signOut, user }: any) {
  return (
    <div>
      <h1>Welcome, {user?.username}</h1>
      <button onClick={signOut}>Sign out</button>
    </div>
  );
}

export default withAuthenticator(LoginPage);
