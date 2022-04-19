import { Router } from '../../Components/router/Router';
import { setupFirebase } from '~/lib/firebase';
import { useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useSignIn, useSignOut } from '../../Components/contexts/UserContext';

function Main() {
  const { signIn } = useSignIn();
  const { signOut } = useSignOut();
  // useEffect(() => {
  //   setupFirebase();

  //   const auth = getAuth();

  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       signIn(user);
  //     } else {
  //       signOut();
  //     }
  //   });
  // }, []);
  return (
    <main className="flex flex-1 flex-col min-h-[100vh] h-full p-[5px] bg-base-200 text-">
      <Router />
    </main>
  );
}

export default Main;
