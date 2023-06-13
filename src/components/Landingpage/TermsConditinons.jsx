import React,{useEffect} from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
const TermsConditinons = () => {
       useEffect(() => {
         AOS.init();
       });
  return (
    <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
      <p
        data-aos="fade-down"
        className="font-normal mt-8 text-sm leading-3 text-indigo-700 hover:text-indigo-800 cursor-pointer pb-2"
      >
        Terms And Conditions
      </p>
      <div
        data-aos="fade-up"
        className="flex lg:flex-row flex-col lg:gap-8 sm:gap-10 gap-12"
      >
        <div className="w-full lg:w-6/12 ">
          <h2 className="w-full font-bold lg:text-3xl text-2xl lg:leading-10 leading-9">
            Please read these Terms and Conditions carefully
          </h2>
          <p className="font-normal text-base text-justify  leading-6 text-gray-600 mt-6">
            You can Cancel your Subscription at any time. Please note that you
            must cancel your Subscription before it renews for a subsequent
            month in order to avoid being charged for the next month′s
            Subscription Fee. If you cancel your Subscription, the Cancellation
            will become effective at the end of the current monthly Subscription
            period. UltraNet is your Subscription Provider, you will need to
            cancle Subscription through UltraNet authorize Chanel.
          </p>
        </div>
        <div data-aos="zoom-in-down" className="w-full lg:w-6/12">
          <img
            className="lg:block hidden w-full"
            src="https://i.ibb.co/RjNH7QB/Rectangle-122-1.png"
            alt="people discussing on board"
          />
          <img
            className="lg:hidden sm:block hidden w-full"
            src="https://i.ibb.co/16fPqrg/Rectangle-122-2.png"
            alt="people discussing on board"
          />
          <img
            className="sm:hidden block w-full"
            src="https://i.ibb.co/Jxhpxh6/Rectangle-122.png"
            alt="people discussing on board"
          />
        </div>
      </div>
      <div className="w-full mt-10 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 lg:gap-12 gap-10">
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="flex p-4 shadow-md"
          >
            <div className="md:mr-6">
              <svg
                className="mr-2 md:mr-6"
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 15C20.4853 15 22.5 12.9853 22.5 10.5C22.5 8.01472 20.4853 6 18 6C15.5147 6 13.5 8.01472 13.5 10.5C13.5 12.9853 15.5147 15 18 15Z"
                  stroke="#1F2937"
                  strokeWidth="2.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M25.5 28.5C27.9853 28.5 30 26.4853 30 24C30 21.5147 27.9853 19.5 25.5 19.5C23.0147 19.5 21 21.5147 21 24C21 26.4853 23.0147 28.5 25.5 28.5Z"
                  stroke="#1F2937"
                  strokeWidth="2.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.5 28.5C12.9853 28.5 15 26.4853 15 24C15 21.5147 12.9853 19.5 10.5 19.5C8.01472 19.5 6 21.5147 6 24C6 26.4853 8.01472 28.5 10.5 28.5Z"
                  stroke="#1F2937"
                  strokeWidth="2.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="md:text-justify md:pr-4">
              <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800">
                What is the permissible minimum Broadband speed limit?
              </p>
              <p className="mt-2 text-justify  font-normal text-base leading-6 text-gray-600">
                As per the regulation on “Quality of Service standards for
                Broadband Services” issued by TRAI on 6th October 2006, a
                subscriber should get a minimum of 80% of the subscribed
                broadband connection speed from ISP Node to user.
              </p>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className="flex p-4 shadow-md"
          >
            <div className="mr-2 md:mr-6">
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.5 10.5C12.1569 10.5 13.5 9.15685 13.5 7.5C13.5 5.84315 12.1569 4.5 10.5 4.5C8.84315 4.5 7.5 5.84315 7.5 7.5C7.5 9.15685 8.84315 10.5 10.5 10.5Z"
                  stroke="#1F2937"
                  strokeWidth="2.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7.5 33V25.5L6 24V18C6 17.6022 6.15804 17.2206 6.43934 16.9393C6.72064 16.658 7.10218 16.5 7.5 16.5H13.5C13.8978 16.5 14.2794 16.658 14.5607 16.9393C14.842 17.2206 15 17.6022 15 18V24L13.5 25.5V33"
                  stroke="#1F2937"
                  strokeWidth="2.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M25.5 10.5C27.1569 10.5 28.5 9.15685 28.5 7.5C28.5 5.84315 27.1569 4.5 25.5 4.5C23.8431 4.5 22.5 5.84315 22.5 7.5C22.5 9.15685 23.8431 10.5 25.5 10.5Z"
                  stroke="#1F2937"
                  strokeWidth="2.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M22.5 33V27H19.5L22.5 18C22.5 17.6022 22.658 17.2206 22.9393 16.9393C23.2206 16.658 23.6022 16.5 24 16.5H27C27.3978 16.5 27.7794 16.658 28.0607 16.9393C28.342 17.2206 28.5 17.6022 28.5 18L31.5 27H28.5V33"
                  stroke="#1F2937"
                  strokeWidth="2.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="md:text-justify md:pr-4">
              <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800">
                REFUNDS WILL NOT BE PROVIDED FOR ANY SUBSCRIPTION.
              </p>
              <p className="mt-2 font-normal text-justify text-base leading-6 text-gray-600">
                WE DO NOT PROVIDE CREDIT, REFUNDS, OR PRORATED BILLING FOR
                SUBSCRIPTION THAT ARE CANCELLED MID_MONTH. in such circumstance,
                you will continue to have access to your Subscription until the
                end of the monthly billing cycle. UltraNet reserves the right to
                offer refunds, discounts or other consideration is select
                circumstance at its sole discretion. Please not that each
                circumstance is unique and election to make such an offering one
                instance does not create the obligation to do so in another.
              </p>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="flex p-4 shadow-md"
          >
            <div className="mr-2 md:mr-6">
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M28.5 7.5H7.5C5.84315 7.5 4.5 8.84315 4.5 10.5V25.5C4.5 27.1569 5.84315 28.5 7.5 28.5H28.5C30.1569 28.5 31.5 27.1569 31.5 25.5V10.5C31.5 8.84315 30.1569 7.5 28.5 7.5Z"
                  stroke="#1F2937"
                  strokeWidth="2.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4.5 10.5L18 19.5L31.5 10.5"
                  stroke="#1F2937"
                  strokeWidth="2.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="md:text-justify md:pr-4">
              <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800">
                What is the permissible minimum Broadband speed limit?
              </p>
              <p className="mt-2 text-justify font-normal text-base leading-6 text-gray-600">
                REFUNDS WILL NOT BE PROVIDED FOR ANY SUBSCRIPTION. WE DO NOT
                PROVIDE CREDIT, REFUNDS, OR PRORATED BILLING FOR SUBSCRIPTION
                THAT ARE CANCELLED MID_MONTH. in such circumstance, you will
                continue to have access to your Subscription until the end of
                the monthly billing cycle. UltraNet reserves the right to offer
                refunds, discounts or other consideration is select circumstance
                at its sole discretion. Please not that each circumstance is
                unique and election to make such an offering one instance does
                not create the obligation to do so in another.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex lg:flex-row flex-col md:gap-14 gap-16 justify-between lg:mt-20 mt-16">
        <div className="w-full ">
          <ul
            data-aos="fade-up"
            className="list-disc flex flex-col gap-2 mt-5 text-justify ml-3 md:ml-5"
          >
            <li data-aos="fade-up">
              We charge a one-time, non-refundable installation cost of Rs.1000.
            </li>
            <li data-aos="fade-up">
              For a Wi-Fi ONT (optical network terminal), we charge Rs.2000 as
              security deposit. In case of a wired ONT, the security deposit
              charge applicable is Rs.1500.
            </li>
            <li data-aos="fade-up">
              The security deposit is a onetime payment, and is refunded at the
              time of cancellation of the connection after all the settlement
              formalities have been completed. This includes returning all the
              hardware accessories back to UltraNet.
            </li>
            <li data-aos="fade-up">
              There is no discount on installation and security deposit charges.
            </li>
            <li data-aos="fade-up">
              Installation of our FTTH broadband services is subject to location
              wise feasibility in accordance with the guidelines put down by
              TRAI.
            </li>
            <li data-aos="fade-up">
              We provide you with a complete refund of any installation charges
              paid to us in case the installation is not feasible in your
              locality. This will be done within 15 working days, and we will
              provide you an SMS to intimate you on your registered mobile
              number to that effect.
            </li>
            <li data-aos="fade-up">
              We do not provide a refund in case of cancellation of the
              installation from the customer’s end. Any usage charges will be
              invoiced in your first bill along with non-refundable installation
              charges.
            </li>
            <li data-aos="fade-up">
              In case you want to cancel your broadband connection with us for
              any reason what so ever, you will be required to provide us with a
              3-day notice for disconnection along with the reason for
              cancellation. This is applicable across all our package and data
              plan options.
            </li>
            <li data-aos="fade-up">
              Any promotional offers and package plans may be changed at our
              whole and sole discretion without prior notice and customers are
              advised to look up our plan offers from time to time in case of
              requesting for a new plan and change to an existing plan .
            </li>
            <li data-aos="fade-up">
              Our residential connection packages are strictly for home use and
              not for renting or leasing out for commercial reasons. Such usage
              of our FTTH broadband services involves breach of our legal terms
              and conditions and will be subject to legal action.
            </li>
            <li data-aos="fade-up">
              Any special promotional offers and discounts shall be applicable
              for the specified time period and cannot be clubbed with any other
              offers.
            </li>
            <li data-aos="fade-up">
              In order to register for our services, you will be required to
              provide relevant KYC documents to us as per legal requirements
            </li>
            <li data-aos="fade-up">
              You will also be required to fill an online registration form with
              us, providing details such as name, mobile number, address as
              needed along with the plan you would like to choose for broadband
              connectivity.
            </li>
            <li data-aos="fade-up">
              When you subscribe with us for a broadband plan, you agree to the
              terms and conditions that will be binding upon the contract. A
              failure to fulfill these terms could involve breach of legal
            </li>
            <li data-aos="fade-up">
              Any terms and conditions agreed upon by you while registering for
              our services will be lkegally binding upon you until the
              cancellation of the plan.
            </li>
            <li data-aos="fade-up">
              We process any request for cancellation within seven working days
            </li>
            <li data-aos="fade-up">
              We reserve all rights to cancel, suspend, modify or make changes
              to any plan or services we provide with or without prior notice to
              our customers for any reason including, but not limited to acts of
              God, technical issues, force majeure or circumstanced beyond our
              control. We do not undertake service disruptions for any of the
              afore said reasons, and are not liable to compensate or refund any
              amount paid by the customers in such circumstances.
            </li>
            <li data-aos="fade-up">
              We are not liable for any damages resulting out of the use of our
              services, directly or indirectly
            </li>
            <li data-aos="fade-up">
              Customers are requested to immediately report any disruptions or
              interruptions in our FTTH broadband services to their service
              representatives for accelerated resolution, and we do not
              undertake liabilities arising out of such issues directly or
              indirectly what so ever.
            </li>
            <li data-aos="fade-up">
              Disruptions to our services, or issues pertaining to the quality
              and availability of our services will be resolved by our technical
              team to the best of our abilities in a reasonable time frame
              failing which we are not to be held liable for damages, if any,
              resulting thereof.
            </li>
            <li data-aos="fade-up">
              All installations, including the hardware components are our
              property, and termination of services would entitle us to the said
              property
            </li>
            <li data-aos="fade-up">
              Customers will be liable for any damage to our hardware components
              provided during installation or repair, if any
            </li>
            <li data-aos="fade-up">
              These terms and conditions may change from time to time, and we
              may or may not intimate the update to our policies, terms and
              conditions from time to time. Customers are advised to read all
              our terms, conditions and policies while signing up for our
              services and thereafter.
            </li>
            <li data-aos="fade-up">
              Any disputes and claims arising out of the use of our services
              will be arbitrated by the Indian judicial system.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default TermsConditinons