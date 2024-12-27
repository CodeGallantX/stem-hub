import ProfilePic from './ProfilePic';
import BadgesSectionMobile from './BadgesSectionMobile';
import ProfileTabs from './ProfileTabs';
import { PiPencilSimple } from 'react-icons/pi';

const Profile = () => {
    return (
        <div className="p-4">
            <div className="flex flex-col space-y-10 mx-auto sm:flex-row items-center justify-center sm:space-x-10 sm:space-y-0">
                <div className="flex flex-col space-y-4 mx-auto sm:flex-row items-center justify-center">
                    <div className="relative">
                        <ProfilePic className="w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-[160px] lg:h-[160px] xl:w-[250px] xl:h-[250px] rounded-full object-cover" />
                        <button className="absolute bottom-2 right-2 bg-gray-700 text-gray-200 border border-gray-500 rounded-full p-2 text-xl">
                            <PiPencilSimple />
                        </button>
                    </div>
                    <div className="text-center sm:text-left space-y-1">
                        <h1 className="text-white text-4xl font-semibold">Christabel Orji</h1>
                        <button className="text-base text-gray-400">Edit your profile</button>
                    </div>
                </div>
                <div className='w-full'>
                    <BadgesSectionMobile />
                </div>
                <div className='w-full'>
                <ProfileTabs />
                </div>
            </div>
        </div>
    );
};

export default Profile;
