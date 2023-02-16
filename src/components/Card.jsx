const Card = ({ profile }) => {
  return (
    <div className="github-profile flex items-center pt-[50px] m-[1rem]">
      <img
        src={profile.avatar_url}
        alt="image"
        className="mr-[30px] w-[100px] "
      />

      <div className="info ml-[12px] ">
        <div className="name text-2xl text-start font-bold">{profile.name}</div>
        <div className="company text-2xl">{profile.company}</div>
      </div>
    </div>
  );
};

export default Card;
