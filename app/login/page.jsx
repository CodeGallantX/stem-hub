import LoginForm from '../components/LoginForm';
import LoginFormMobile from '../components/LoginFormMobile';

const App = () => {
  return (
    <>
    <div className="hidden sm:block">
      <LoginForm />
    </div>
    <div className="block sm:hidden">
      <LoginFormMobile />
    </div>
    </>
  );
};

export default App;