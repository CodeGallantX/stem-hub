import SignUpForm from '../components/SignUpForm';
import SignUpFormMobile from '../components/SignUpFormMobile';

const App = () => {
  return (
    <>
    <div className="hidden sm:block">
      <SignUpForm />
    </div>
    <div className="block sm:hidden">
      <SignUpFormMobile />
    </div>
    </>
  );
};

export default App;