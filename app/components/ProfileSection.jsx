import ProfilePic from './ProfilePic';
import { PiPencilSimple } from 'react-icons/pi';

const Profile = () => {
    return (
        <div>
            <div className="flex flex-col space-y-4 sm:flex-row items-center justify-center sm:space-x-10">
                <div className="relative">
                    <ProfilePic className="w-32 h-32 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-[160px] lg:h-[160px] xl:w-[250px] xl:h-[250px] rounded-full object-cover" />
                    <button className="absolute bottom-5 right-5">
                        <PiPencilSimple className="text-gray-200 bg-gray-700 border border-gray-500 rounded-full p-2 text-4xl"/>
                    </button>
                </div>
                <div className="space-y-2">
                    <h1 className="text-white text-4xl font-semibold">Christabel Orji</h1>
                    <button className="text-base text-gray-400">Edit your profile</button>
                </div>
            </div>
        </div>
    );
};

export default Profile;
