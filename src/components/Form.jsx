import React, { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReCAPTCHA from "react-google-recaptcha";
import { RotatingLines } from "react-loader-spinner";

function FormHeroSection() {
  const captcha = useRef(null);
  const [captchaResponse, setCaptchaResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    user_name: "",
    user_phone: "",
    user_email: "",
  });
  const form = useRef();
  const handleForm = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (captchaResponse === "") {
      setLoading(false);
      toast.error("Please complete the captcha!", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      setLoading(true);

      try {
        const response = await fetch("http://localhost:4040/mail", {
          method: "POST",
          body: JSON.stringify({
            reciepents: [formData.user_email],
            subject: formData.user_name,
            phone: formData.user_phone,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        console.log(data);

        toast.success("Successfully submitted your request!", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setLoading(false);
        setCaptchaResponse(captcha.current.reset());
      } catch (error) {
        console.error(error);
        setLoading(false);
        toast.error("Error submitting your request. Please try again later.", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
      setFormData({
        user_name: "",
        user_phone: "",
        user_email: "",
      });
    }
  };

  const handleCaptchaChange = (value) => {
    setCaptchaResponse(value);
  };

  return (
    <div
      style={{
        boxShadow: "4px 4px 5px rgba(0, 0, 0, 0.2)",
      }}
      className="hidden sm:hidden md:hidden lg:block  "
    >
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
      <div className=" border-b-0 border-t-4 border-r-0 border-l-0 border-[#004281] max-w-2xl mx-auto p-5 z-40 absolute top-14 lg:top-20 mt-3 lg:mt-10 right-10 bg-[#ffffff]">
        <h1 className="text-2xl text-center font-[700] mb-1">
          Want to discuss your idea?
        </h1>

        <form ref={form} onSubmit={handleSubmit} className="w-fll md:w-[300px]">
          <div className="mb-3">
            <label
              className="block text-gray-700 font-[500] mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="bg-gray-50  border-[2px] rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              name="user_name"
              required
              type="text"
              value={formData.user_name}
              onChange={handleForm}
              placeholder="Your name"
            />
          </div>
          <div className="mb-3">
            <label
              className="block text-gray-700 font-[500] mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="bg-gray-50 border-[2px] rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              required
              value={formData.user_email}
              onChange={handleForm}
              name="user_email"
              title="please enter valid your email"
              placeholder="Email address"
              pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
            />
          </div>
          <div className="mb-3">
            <label
              className="block text-gray-700 font-[500] mb-2"
              htmlFor="phone"
            >
              Phone Number
            </label>
            <input
              className="bg-gray-50 border-[2px] rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="phone"
              type="tel"
              name="user_phone"
              value={formData.user_phone}
              onChange={handleForm}
              pattern="[0-9]{10}"
              required
              title="Please enter a valid 10-digit phone number (no spaces or dashes)"
              placeholder=" Phone Number"
            />
          </div>
          <div className="space-y-5">
            <ReCAPTCHA
              // sitekey="6LdVeLclAAAAALk1Y-TlSuDmLj3gUZYJNeMBVNbv"
              sitekey="6LcFx7glAAAAAM4S0LKLyUBzZlofxF429g9yrzZ-"
              onChange={handleCaptchaChange}
              ref={captcha}
            />
            <button
              className="hover:bg-gradient-to-r from-[#DE466C] to-[#004281] bg-[#004281] px-5 text-lg py-2  text-white font-medium rounded-full transition duration-300"
              type="submit"
              disabled={loading}
            >
              {" "}
              SUBMIT
            </button>
            {loading ? (
              <RotatingLines
                strokeColor="grey"
                strokeWidth="5"
                animationDuration="0.75"
                width="30"
                visible={true}
              />
            ) : (
              ""
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormHeroSection;
