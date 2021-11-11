import Navbar from "./NavBar";

const Main = () => {
  return (
    <div className='border-b-8 border-gray-600'>
      {/* <Navbar /> */} 
      <div
        id="main"
        className="flex flex-col justify-center items-center h-screen"
      >
        <div className="max-w-xl text-center  ">
          <h1 className="text-5xl font-bold pb-4 text-white">
            Unlimited movies, TV shows, and more.
          </h1>
          <h4 className="text-2xl font-semibold pb-6 text-white">
            Watch anywhere. Cancel anytime.
          </h4>
          <p className="pb-4 font-semibold text-lg text-white">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
         <div className='pt-3 max-w-lg'>
         <input type="text" placeholder='Email address ' className='py-3 px-2 w-9/12 focus:outline-none ' />
          <input
            type="button"
            className="capitalize bg-red-700 text-white    py-3 px-2  "
            value="get started"
          />
         </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
