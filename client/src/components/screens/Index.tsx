import { useAuthState } from '~/components/contexts/UserContext';
import { SignInButton } from '~/components/domain/auth/SignInButton';
import { SignOutButton } from '~/components/domain/auth/SignOutButton';
import { Head } from '~/components/shared/Head';
import Filters from '../Filters';
import Navbar from '../Navbar';
import Results from '../Results';
import '~/styles/styles.css';
import Footer from '../Footer';

function Index() {
  // const { state } = useAuthState();

  return (
    <>
      {/* <h1>Helllo From Index Screen</h1> */}
      <Head title="Home | Dev-Resources" />
      <Navbar />
      <div className="flex py-2 mb-auto">
        <Filters />
        <Results />
      </div>
      <Footer />
    </>
  );
}

export default Index;
