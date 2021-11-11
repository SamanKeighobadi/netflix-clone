
const Main = () => {
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <div className="max-w-lg text-center  ">
        <h1 className="text-5xl font-bold pb-4">
          Unlimited movies, TV shows, and more.
        </h1>
        <h4 className="text-xl font-semibold pb-6">
          Watch anywhere. Cancel anytime.
        </h4>
        <p className="pb-4 font-semibold text-sm">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <input type="text"  />
        <input type="button" className='capitalize bg-red-600 text-white' value="get started" />
      </div>
    </div>
  );
};

export default Main;
