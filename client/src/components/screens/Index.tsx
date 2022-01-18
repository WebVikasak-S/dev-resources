import { useAuthState } from '~/components/contexts/UserContext';
import { SignInButton } from '~/components/domain/auth/SignInButton';
import { SignOutButton } from '~/components/domain/auth/SignOutButton';
import { Head } from '~/components/shared/Head';
import Filters from '../Filters';
import Navbar from '../Navbar';
import Results from '../Results';
import '~/styles/styles.css';
import Footer from '../Footer';
import ScreenWrapper from '../hoc/ScreenWrapper';

function Index() {
  // const { state } = useAuthState();

  return (
    <ScreenWrapper title="Home | Dev-Resources">
      <div className="flex flex-1 flex-col md:flex-row py-2 mb-auto">
        <Filters />
        <Results />
      </div>
    </ScreenWrapper>
  );
}

export default Index;
