const ProfilePic = ({ src, alt, className }) => {
  return (
    <img
      // src={
      //   src ||
      //   "https://media.istockphoto.com/id/1332291403/photo/i-got-this.jpg?s=612x612&w=0&k=20&c=1HA22-3V6l7mhwFGr_t0hyuumn5OIKKWH3CoIu8GWhE="
      // }
      src={
        src ||
        "/wallpaper.png"
      }
      alt={alt || "Profile"}
      className={`w-10 h-10 rounded-full object-cover ${className}`}
    />
  );
};

export default ProfilePic;