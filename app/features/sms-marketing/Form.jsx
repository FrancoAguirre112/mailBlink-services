const Form = () => {
  return (
    <div className="md:py-10 px-5 bg-white shadow-lg rounded-xl ">
      <form action="">
          <label>
            First name
            <input type="text" placeholder="enter first name" />
          </label>
          <label>
            Last name
            <input type="text" placeholder="enter last name" />
          </label>
        <label>
          Email
          <input type="text" placeholder="enter email address" />
        </label>    
        <div className="w-fit my-5 ">
          <button className=" bg-navyBlue text-white px-8 py-3 border border-navyBlue hover:text-navyBlue hover:bg-white hover:border-navyBlue rounded-full transition duration-150 ease-in-out cursor-pointer">Book my Demo</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
