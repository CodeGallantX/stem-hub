import Sidebar from '../components/Sidebar';
import ProfileSection from '../components/ProfileSection';
import ProfileTabs from '../components/ProfileTabs';
import BadgesSection from '../components/BadgesSection';

const App = () => {
  return (
    <div>
      <div className="bg-gray-100 hidden md:block min-h-screen">
        <div className="mt-6 md:mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6 px-4 md:px-6 lg:px-10 xl:px-24">
          <Sidebar />
          <div className="flex flex-col items-start justify-start space-y-4">
            <ProfileSection />
            <ProfileTabs />
          </div>
          <div className="hidden lg:block">
            <BadgesSection />
          </div>
        </div>
      </div>
      <div className="bg-gray-800 block md:hidden">
        <div className="flex flex-col items-start justify-start space-y-4 px-4 md:px-6 mt-6">
          <ProfileSection />
        </div>
      </div>
    </div>
  );
};

export default App;