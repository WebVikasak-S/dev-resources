import Filters from '../Filters';
import Results from '../Results';
import '~/styles/styles.css';
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
