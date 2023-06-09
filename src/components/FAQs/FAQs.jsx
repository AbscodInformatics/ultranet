import React,{useState,useEffect} from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

const FAQs = () => {
    useEffect(() => {
      AOS.init();
 });
     const [question, setquestion] = useState(0);
  return (
    <div className="">
      <div
        data-aos="zoom-in-up"
        data-aos-once="false"
      >
        <img
          src="/faq.jpg"
          alt=""
          className="object-fill h-[30vh] md:h-[80vh] w-full"
        />
      </div>
      <div
        data-aos="zoom-in-down"
        data-aos-duration="3000"
        data-aos-once="false"
      >
        <div className="pt-[8%] mx-[7%]">
          <div className=" container pb-[3%] pt-16 rounded-3xl bg-[#071343]">
            <div className="text-center text-white  p-7  bg-gradient-to-tb from-[#071343] via-[#cc3737] to-[#6c0505] pb-3 md:pb-10 xl:pb-20">
              <p className="text-white py-3 text-lg lg:text-2xl font-bold uppercase leading-tight mb-4">
                FAQs
              </p>
              <h6 className="px-2 xl:px-0 xl:text-3xl md:text-3xl text-xl font-extrabold text-white">
                Problem Resolution Help And Advice
              </h6>
              <p
                data-aos="fade-up"
                data-aos-once="false"
                data-aos-duration="3000"
                className="text-lg py-5"
              >
                We care about how our customers experience our services. This is
                the reason why we are a responsive team who would like to listen
                to your feedback and get back to you. Our “Code of Complaints”
                will help you get in touch with us for all your needs on
                Internet and phone services. You come to us with a problem and
                we will ensure that you always get an appropriate solution in a
                reasonable time frame. Do contact us and we will make sure that
                there would be no reason for your dissatisfaction.
              </p>
            </div>
            <div className="w-10/12 mx-auto">
              <ul className="">
                <li
                  data-aos="fade-up"
                  data-aos-once="false"
                  data-aos-duration="3000"
                  className="group py-6 border-gray-200 border-solid border-b"
                >
                  <div
                    onClick={() =>
                      question === 0 ? setquestion(null) : setquestion(0)
                    }
                    className="flex  px-4 py-2  group-hover:bg-gradient-to-l bg-[#071343] text-lg  group-hover:from-pink-500 group-hover:via-red-500 group-hover:to-yellow-500 text-white font-medium rounded transition duration-300   justify-between items-center"
                  >
                    <h3 className="text-white  text-base  md:text-xl  xl:text-2xl w-10/12">
                      Can I have more than one IP address ?
                    </h3>
                    <div
                      className="cursor-pointer"
                      onClick={() =>
                        question === 0 ? setquestion(null) : setquestion(0)
                      }
                    >
                      {question === 0 ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={36}
                          height={36}
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="#A0AEC0"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-label="Close"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" />
                          <circle cx={12} cy={12} r={9} />
                          <line x1={9} y1={12} x2={15} y2={12} />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={36}
                          height={36}
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="#A0AEC0"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-label="Open"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" />
                          <circle cx={12} cy={12} r={9} />
                          <line x1={9} y1={12} x2={15} y2={12} />
                          <line x1={12} y1={9} x2={12} y2={15} />
                        </svg>
                      )}
                    </div>
                  </div>
                  {question === 0 && (
                    <p className="pt-2 md:pt-3  lg:pt-5 text-white  p-4 group-hover:bg-gradient-to-t bg-[#071343] px-8  py-3 group-hover:from-pink-500 group-hover:via-red-500 group-hover:to-yellow-500 font-medium rounded transition duration-300   text-sm md:text-base  xl:text-lg rounded-b-lg">
                      Due to the current shortage in IPv4 addresses, the company
                      that supply them are limiting the number of IP addresses
                      that can be allocated, to manage those remaining. That’s
                      why we are not offering more than one IP address per
                      customer at this moment in time. If you do have a specific
                      need for multiple fixed IP addresses please contact
                      customer service.
                    </p>
                  )}
                </li>
                <li
                  data-aos="fade-up"
                  data-aos-once="false"
                  data-aos-duration="3000"
                  className="group py-6 border-gray-200 border-solid border-b"
                >
                  <div
                    onClick={() =>
                      question === 1 ? setquestion(null) : setquestion(1)
                    }
                    className="flex group-hover:bg-gradient-to-l bg-[#071343]  text-lg  group-hover:from-pink-500 group-hover:via-red-500 group-hover:to-yellow-500 text-white font-medium rounded transition duration-300   px-4 py-2  justify-between items-center"
                  >
                    <h3 className="text-white text-base  md:text-xl  xl:text-2xl w-10/12">
                      Do you Provide consistent speed ?
                    </h3>
                    <div
                      className="cursor-pointer"
                      onClick={() =>
                        question === 1 ? setquestion(null) : setquestion(1)
                      }
                    >
                      {question === 1 ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={36}
                          height={36}
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="#A0AEC0"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-label="Close"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" />
                          <circle cx={12} cy={12} r={9} />
                          <line x1={9} y1={12} x2={15} y2={12} />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={36}
                          height={36}
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="#A0AEC0"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-label="Open"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" />
                          <circle cx={12} cy={12} r={9} />
                          <line x1={9} y1={12} x2={15} y2={12} />
                          <line x1={12} y1={9} x2={12} y2={15} />
                        </svg>
                      )}
                    </div>
                  </div>
                  {question === 1 && (
                    <p className="pt-2 md:pt-3  p-4 group-hover:bg-gradient-to-t bg-[#071343]  text-lg  group-hover:from-pink-500 group-hover:via-red-500 group-hover:to-yellow-500 text-white font-medium rounded transition duration-300   lg:pt-5  md:text-base  xl:text-lg rounded-b-lg">
                      We provide consistent and fast speeds to you irrespective
                      of bandwidth requirements in your building. We strive to
                      constantly upgrade our speeds based on the consumption
                      needs of the connections in your building to keep giving
                      you the best possible speeds.
                    </p>
                  )}
                </li>
                <li
                  data-aos="fade-up"
                  data-aos-once="false"
                  data-aos-duration="3000"
                  className="group py-6 border-gray-200 border-solid border-b"
                >
                  <div
                    onClick={() =>
                      question === 2 ? setquestion(null) : setquestion(2)
                    }
                    className="flex group-hover:bg-gradient-to-l bg-[#071343]  text-lg  group-hover:from-pink-500 group-hover:via-red-500 group-hover:to-yellow-500 text-white font-medium rounded transition duration-300   px-4 py-2  justify-between items-center"
                  >
                    <h3 className="text-white text-base  md:text-xl  xl:text-2xl w-10/12">
                      Do you Provide more than one IP address for me ?
                    </h3>
                    <div
                      className="cursor-pointer"
                      onClick={() =>
                        question === 2 ? setquestion(null) : setquestion(2)
                      }
                    >
                      {question === 2 ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={36}
                          height={36}
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="#A0AEC0"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-label="Close"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" />
                          <circle cx={12} cy={12} r={9} />
                          <line x1={9} y1={12} x2={15} y2={12} />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={36}
                          height={36}
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="#A0AEC0"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-label="Open"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" />
                          <circle cx={12} cy={12} r={9} />
                          <line x1={9} y1={12} x2={15} y2={12} />
                          <line x1={12} y1={9} x2={12} y2={15} />
                        </svg>
                      )}
                    </div>
                  </div>
                  {question === 2 && (
                    <p className="group-hover:bg-gradient-to-t bg-[#071343] px-8 text-lg py-3 group-hover:from-pink-500 group-hover:via-red-500 group-hover:to-yellow-500 text-white font-medium rounded transition duration-300   pt-2 md:pt-3 bg-gradient-to-br p-4 from-[#e81414] via-[#cc3737] to-[#6c0505] lg:pt-5  md:text-base  xl:text-lg rounded-b-lg">
                      IPV4 addresses are running short, hence there is a limit
                      to how many can be assigned per customer. If you have
                      specific needs or further queries, do contact our customer
                      support helpline.
                    </p>
                  )}
                </li>
                <li
                  data-aos="fade-up"
                  data-aos-once="false"
                  data-aos-duration="3000"
                  className="group py-6 border-gray-200 border-solid border-b"
                >
                  <div
                    onClick={() =>
                      question === 3 ? setquestion(null) : setquestion(3)
                    }
                    className="flex group-hover:bg-gradient-to-l bg-[#071343]  text-lg  group-hover:from-pink-500 group-hover:via-red-500 group-hover:to-yellow-500 text-white font-medium rounded transition duration-300   px-4 py-2  justify-between items-center"
                  >
                    <h3 className="text-white text-base  md:text-xl  xl:text-2xl w-10/12">
                      How do I cancel my connection ?
                    </h3>
                    <div
                      className="cursor-pointer"
                      onClick={() =>
                        question === 3 ? setquestion(null) : setquestion(3)
                      }
                    >
                      {question === 3 ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={36}
                          height={36}
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="#A0AEC0"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-label="Close"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" />
                          <circle cx={12} cy={12} r={9} />
                          <line x1={9} y1={12} x2={15} y2={12} />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={36}
                          height={36}
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="#A0AEC0"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-label="Open"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" />
                          <circle cx={12} cy={12} r={9} />
                          <line x1={9} y1={12} x2={15} y2={12} />
                          <line x1={12} y1={9} x2={12} y2={15} />
                        </svg>
                      )}
                    </div>
                  </div>
                  {question === 3 && (
                    <div className="group-hover:bg-gradient-to-t bg-[#071343] px-8  py-3 group-hover:from-pink-500 group-hover:via-red-500 group-hover:to-yellow-500 text-white font-medium rounded transition duration-300   pt-2 md:pt-3 bg-gradient-to-br p-4 from-[#e81414] via-[#cc3737] to-[#6c0505] lg:pt-5  md:text-base  xl:text-lg rounded-b-lg">
                      <p>
                        {" "}
                        In case you decide to cancel your broadband connection
                        with us for any reason, we would make it as simple for
                        you as possible. You may contact us on the support
                        helpline on 02262581800 or on our email at
                        support@praction.in. to initiate the process.
                      </p>
                      <p>
                        You will have to provide us with a 3-day notice for
                        disconnection with the reason for cancellation. This is
                        applicable on all our package and data plan options.
                      </p>
                      <p>
                        If you are on a 12-month contract with us that is yet to
                        expire, you will be charged an amount of Rs. 5000
                        towards cancellation and processing charges along with
                        outstanding amount due, if any. For more details, please
                        refer to our full terms and conditions.
                      </p>
                    </div>
                  )}
                </li>
                <li
                  data-aos="fade-up"
                  data-aos-once="false"
                  data-aos-duration="3000"
                  className="group py-6 border-gray-200 border-solid border-b"
                >
                  <div
                    onClick={() =>
                      question === 4 ? setquestion(null) : setquestion(4)
                    }
                    className="group-hover:bg-gradient-to-l bg-[#071343]  text-lg  group-hover:from-pink-500 group-hover:via-red-500 group-hover:to-yellow-500 text-white font-medium rounded transition duration-300   flex  px-4 py-2  justify-between items-center"
                  >
                    <h3 className="text-white text-base  md:text-xl  xl:text-2xl w-10/12">
                      How speedily is my new connection installed ?
                    </h3>
                    <div
                      className="cursor-pointer"
                      onClick={() =>
                        question === 4 ? setquestion(null) : setquestion(4)
                      }
                    >
                      {question === 4 ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={36}
                          height={36}
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="#A0AEC0"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-label="Close"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" />
                          <circle cx={12} cy={12} r={9} />
                          <line x1={9} y1={12} x2={15} y2={12} />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={36}
                          height={36}
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="#A0AEC0"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-label="Open"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" />
                          <circle cx={12} cy={12} r={9} />
                          <line x1={9} y1={12} x2={15} y2={12} />
                          <line x1={12} y1={9} x2={12} y2={15} />
                        </svg>
                      )}
                    </div>
                  </div>
                  {question === 4 && (
                    <p className="group-hover:bg-gradient-to-t bg-[#071343] px-8 text-lg py-3 group-hover:from-pink-500 group-hover:via-red-500 group-hover:to-yellow-500 text-white font-medium rounded transition duration-300   pt-2 md:pt-3 bg-gradient-to-br p-4 from-[#e81414] via-[#cc3737] to-[#6c0505] lg:pt-5  md:text-base  xl:text-lg rounded-b-lg">
                      If you are an individual homeowner and are looking forward
                      to a single connection, all it takes is an hour to get you
                      connected to our broadband network. If you are looking to
                      get a whole building connected, the exact time depends
                      upon the age of the building, its size, and the complexity
                      involved. It could take 4 to 6 weeks of time on an average
                      to get your building connected. For further details and
                      estimate, you could contact our customer care.
                    </p>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQs