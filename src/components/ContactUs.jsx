import React, {  useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import PrivacyPolicy from "./Landingpage/PrivacyPolicy";
const ContactUs = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [privacyPolicyChecked, setPrivacyPolicyChecked] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [longitude, setLongitude] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [showForm1, setShowForm1] = useState(false);
  const [generalInfoData, setGeneralInfoData] = useState({
    First_Name: "",
    Last_Name: "",
    Mobile_Number: "",
    Alternate_Mobile: "",
    Email_ID: "",
    Alternate_Email: "",
    Company_Name: "",
    Permanent_Address: "",
    Billing_Address1: "",
    Billing_Address2: "",
    City: "",
    State: "",
    Pin_Code: "",
    Country: "",
  });
  const [installAddress, setInstallAddress] = useState({
    User_Type: "",
    Referral_Code: "",
    Requested_Bandwidth_Data: "",
    Requested_Bandwidth: "",
    Latitude: "",
    Comments: "",
    Activation_Comments: "",
  });
  const [billInstallAddress, setBillInstallAddress] = useState({
    User_Type: "",
    Installation_Add2: "",
    Installation_Add1: "",
    City: "",
    State: "",
    Referral_Code: "",
    Pin_Code: "",
    Country: "",
    Requested_Bandwidth_Data: "",
    Requested_Bandwidth: "",
    Latitude: "",
    Comments: "",
    Activation_Comments: "",
  });
  const [pointOFContact, setPointOFContact] = useState({
    Description: "",
    Contact_Name: "",
    Designation: "",
    Phone_Number: "",
    Email_ID: "",
  });
  const handleForm = (e) => {
    setGeneralInfoData({
      ...generalInfoData,
      [e.target.name]: e.target.value,
    });
  };
  const handleFormAddress = (e) => {
    setInstallAddress({
      ...installAddress,
      [e.target.name]: e.target.value,
    });
  };
  const handleFormAddressBill = (e) => {
    setBillInstallAddress({
      ...billInstallAddress,
      [e.target.name]: e.target.value,
    });
  };
  const handleFormPoint = (e) => {
    setPointOFContact({
      ...pointOFContact,
      [e.target.name]: e.target.value,
    });
  };

  const handlePrivacyPolicyChange = () => {
    setPrivacyPolicyChecked(!privacyPolicyChecked);
  };
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleLongitudeChange = (event) => {
    setLongitude(event.target.value);
  };

  const openMapForCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { longitude } = position.coords;
        setLongitude(longitude.toString());
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  };

  const handleCheckboxChange1 = () => {
    setShowForm1(!showForm1);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const dataToSend = {
      longitude,
      generalInfoData,
      installAddress,
      billInstallAddress,
      pointOFContact,
    };
    console.log("dataToSend", dataToSend);
    //   try {
    //     const response = await axios.post("URL", dataToSend);
    //     console.log("Respo", response.data);
    //   } catch (error) {
    //     console.error("Error ", error);
    //   }
  };

  const openPopup = () => {
    setIsOpen(true);
  };
  const closePopup = () => {
    setIsOpen(false);
  };
  const countryList = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo",
    "Costa Rica",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "East Timor",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Korea, North",
    "Korea, South",
    "Kosovo",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "North Macedonia",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Palestinian Territories",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Romania",
    "Russia",
    "Rwanda",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Sweden",
    "Switzerland",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Togo",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Vatican City",
    "Venezuela",
    "Vietnam",
    "Yemen",
    "Zambia",
    "Zimbabwe",
  ];

  return (
    <>
      <div id="contact" className="py-12 px-4">
        <div className="lg:max-w-[1440px] md:max-w-[744px] max-w-[375px] mx-auto">
          <div className="lg:max-w-[1124px] md:max-w-[696px] max-w-[343px] mx-auto bg-white px-6 py-4 rounded shadow">
            <div className="text-center">
              <div className="text-5xl font-bold text-center py-3 mx-1 md:mx-0 bg-gradient-to-r from-teal-500 via-blue-500 to-pink-500 text-transparent bg-clip-text ">
                Enquiry
              </div>
              <div className="text-[#071343] ">Please fill in the details.</div>
            </div>
            <div className="pt-5">
              <p className="text-xl font-medium leading-tight text-gray-800">
                General Information
              </p>
            </div>
            <div>
              <div className="lg:flex md:block block justify-center gap-4 pt-6">
                <div className="w-full">
                  <p className="text-base leading-none text-gray-800 lg:pt-0 md:pt-3 pt-3">
                    First Name *
                  </p>
                  <input
                    type="text"
                    name="First_Name"
                    value={generalInfoData.First_Name}
                    onChange={handleForm}
                    placeholder="Enter your First Name"
                    className="focus:outline-none border border-gray-300 py-3 pl-3 rounded w-full mt-4"
                  />
                </div>
                <div className="w-full">
                  <p className="text-base leading-none text-gray-800 lg:pt-0 md:pt-3 pt-3">
                    Last Name
                  </p>
                  <input
                    type="text"
                    value={generalInfoData.Last_Name}
                    onChange={handleForm}
                    name="Last_Name"
                    placeholder="Enter your  Last Name"
                    className="focus:outline-none border border-gray-300 py-3 pl-3 rounded w-full mt-4"
                  />
                </div>
              </div>
              <div className="pt-6">
                <div className="lg:flex md:block block justify-between gap-4">
                  <div className="w-full">
                    <p className="text-base leading-none text-gray-800 lg:pt-0 md:pt-3 pt-3">
                      Mobile Number
                    </p>
                    <input
                      type="number"
                      value={generalInfoData.Mobile_Number}
                      onChange={handleForm}
                      name="Mobile_Number"
                      placeholder="Enter your Mobile Number "
                      className="focus:outline-none border  border-gray-300 py-3 pl-3 rounded mt-4 w-full"
                    />
                  </div>
                  <div className="w-full">
                    <p className="text-base leading-none text-gray-800 lg:pt-0 md:pt-3 pt-3">
                      Alternate Mobile Number
                    </p>
                    <div className="border border-gray-300 focus:bg-gray-50 rounded  px-4 py-3 mt-4">
                      <input
                        className="leading-none w-full text-gray-600 focus:outline-none"
                        type="number"
                        value={generalInfoData.Alternate_Mobile}
                        onChange={handleForm}
                        name="Alternate_Mobile"
                        placeholder="Enter Your Alternate Mobile Number"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:flex md:block block justify-between gap-5 items-center pt-5">
                <div className="w-full">
                  <p className="text-base leading-none text-gray-800 pt-3">
                    Email ID
                  </p>
                  <div className="border border-gray-300 rounded px-4 py-3 mt-4">
                    <input
                      type="email"
                      name="Email_ID"
                      value={generalInfoData.Email_ID}
                      onChange={handleForm}
                      placeholder="Enter Your Email ID"
                      className="leading-none text-gray-600 focus:outline-none"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <p className="text-base leading-none text-gray-800 pt-3">
                    Alternate Email ID
                  </p>
                  <div className="border border-gray-300 rounded px-4 py-3 mt-4">
                    <input
                      type="email"
                      name="Alternate_Email"
                      value={generalInfoData.Alternate_Email}
                      onChange={handleForm}
                      placeholder="Enter Your Alternate Email ID"
                      className="leading-none w-full text-gray-600 focus:outline-none"
                    />
                  </div>
                </div>
              </div>
              <div className="lg:flex md:block block justify-between gap-5 items-center pt-5">
                <div className="w-full">
                  <div className="w-full">
                    <p className="text-base leading-none text-gray-800">
                      Company Name
                    </p>
                    <input
                      type="text"
                      name="Company_Name"
                      value={generalInfoData.Company_Name}
                      onChange={handleForm}
                      id
                      placeholder="Enter your Company Name"
                      className="focus:outline-none border border-gray-300 py-3 pl-3 rounded w-full mt-4"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <div className="w-full">
                    <p className="text-base leading-none text-gray-800 lg:pt-0 md:pt-3 pt-3">
                      Permanent Address
                    </p>
                    <input
                      type="text"
                      name="Permanent_Address"
                      value={generalInfoData.Permanent_Address}
                      onChange={handleForm}
                      id
                      placeholder="Enter your Permanent Address"
                      className="focus:outline-none border border-gray-300 py-3 pl-3 rounded w-full mt-4"
                    />
                  </div>
                </div>
              </div>
              <div className="lg:flex md:block block justify-between gap-5 items-center pt-5">
                <div className="w-full">
                  <p className="text-base leading-none text-gray-800 pt-3">
                    Billing Address Line 1
                  </p>
                  <div className="border border-gray-300 focus:bg-gray-50 rounded  px-4 py-3 mt-4">
                    <input
                      className="leading-none w-full text-gray-600 focus:outline-none"
                      type="text"
                      value={generalInfoData.Billing_Address1}
                      onChange={handleForm}
                      name="Billing_Address1"
                      placeholder="Enter Your Billing Address Line 1"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <p className="text-base leading-none text-gray-800 pt-3">
                    Billing Address Line 2
                  </p>
                  <div className="border border-gray-300 rounded px-4 py-3 mt-4">
                    <input
                      type="text"
                      value={generalInfoData.Billing_Address2}
                      onChange={handleForm}
                      name="Billing_Address2"
                      placeholder="Enter Your Billing Address Line 2"
                      className="leading-none w-full text-gray-600 focus:outline-none"
                    />
                  </div>
                </div>
              </div>
              <div className="lg:flex md:block block justify-between gap-5 items-center pt-5">
                <div className="w-full">
                  <p className="text-base leading-none text-gray-800 pt-3">
                    City
                  </p>
                  <div className="border border-gray-300 focus:bg-gray-50 rounded w-full px-4 py-3 mt-4">
                    <input
                      className="leading-none text-gray-600 focus:outline-none"
                      type="text"
                      value={generalInfoData.City}
                      onChange={handleForm}
                      name="City"
                      placeholder="Enter Your City"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <p className="text-base leading-none text-gray-800 pt-3">
                    State
                  </p>
                  <div className="border border-gray-300 rounded px-4 py-3 mt-4">
                    <input
                      type="text"
                      name="State"
                      value={generalInfoData.State}
                      onChange={handleForm}
                      placeholder="Enter Your State"
                      className="leading-none text-gray-600 focus:outline-none"
                    />
                  </div>
                </div>
              </div>
              <div className="lg:flex md:block block justify-between gap-5 items-center pt-5">
                <div className="w-full">
                  <p className="text-base leading-none text-gray-800 pt-3">
                    Pin Code
                  </p>
                  <div className="border border-gray-300 focus:bg-gray-50 rounded  px-4 py-3 mt-4">
                    <input
                      className="leading-none w-full text-gray-600 focus:outline-none"
                      type="number"
                      name="Pin_Code"
                      value={generalInfoData.Pin_Code}
                      onChange={handleForm}
                      placeholder="Enter Your Pin Code"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <p className="text-base leading-none text-gray-800 pt-3">
                    Country
                  </p>
                  <div className="border border-gray-300 rounded px-4 py-3 mt-4">
                    <select
                      name="Country"
                      value={generalInfoData.Country}
                      onChange={handleForm}
                      className="leading-none w-full text-gray-600 focus:outline-none"
                    >
                      <option>Select a Country</option>
                      {countryList.map((country) => (
                        <option key={country} value={country}>
                          {country}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-10">
              <div>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                    className="form-checkbox h-5 w-5 text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <span className="ml-2">
                    Use Billing Address As Installation Address{" "}
                  </span>
                </label>

                {!isChecked ? (
                  <div>
                    <div className="lg:flex md:block block justify-between gap-5 items-center pt-5">
                      <div className="w-full">
                        <p className="text-base leading-none text-gray-800 pt-3">
                          User Type
                        </p>
                        <select
                          className="border w-full border-gray-300 rounded px-4 py-3 mt-4"
                          name="User_Type"
                          id=""
                          value={installAddress.User_Type}
                          onChange={handleFormAddress}
                        >
                          <option value="Home">Home</option>
                          <option value="Business">Business</option>
                        </select>
                      </div>
                      <div className="w-full">
                        <p className="text-base leading-none text-gray-800 pt-3">
                          Referral Code
                        </p>
                        <input
                          type="text"
                          value={installAddress.Referral_Code}
                          onChange={handleFormAddress}
                          name="Referral_Code"
                          placeholder="Enter your Referral Code"
                          className="focus:outline-none border border-gray-300 py-3 pl-3 rounded w-full mt-4"
                        />
                      </div>
                    </div>
                    <div className="lg:flex md:block block justify-between gap-5 items-center pt-5">
                      <div className="w-full">
                        <p className="text-base leading-none text-gray-800 pt-3">
                          Requested Bandwidth Data
                        </p>
                        <select
                          className="border w-full border-gray-300 rounded px-4 py-3 mt-4"
                          name="Requested_Bandwidth_Data"
                          id=""
                          value={installAddress.Requested_Bandwidth_Data}
                          onChange={handleFormAddress}
                        >
                          <option value=" Mbps"> Mbps</option>
                          <option value=" Gbps"> Gbps</option>
                        </select>
                      </div>
                      <div className="w-full">
                        <p className="text-base leading-none text-gray-800 pt-3">
                          Requested Bandwidth
                        </p>
                        <input
                          type="text"
                          name="Requested_Bandwidth"
                          id
                          value={installAddress.Requested_Bandwidth}
                          onChange={handleFormAddress}
                          placeholder="Enter your  Requested Bandwidth"
                          className="focus:outline-none border border-gray-300 py-3 pl-3 rounded w-full mt-4"
                        />
                      </div>
                    </div>
                    <div className="lg:flex md:block block justify-between gap-5 items-center pt-5">
                      <div className="w-full">
                        <p className="text-base leading-none text-gray-800 pt-3">
                          Latitude
                        </p>
                        <div className="border border-gray-300 focus:bg-gray-50 rounded w-full px-4 py-3 mt-4">
                          <input
                            value={installAddress.Latitude}
                            onChange={handleFormAddress}
                            className="leading-none text-gray-600 focus:outline-none"
                            type="number"
                            name="Latitude"
                            placeholder="Enter Latitude"
                          />
                        </div>
                      </div>
                      <div className="w-full">
                        <p className="text-base leading-none text-gray-800 pt-3">
                          Longitude
                        </p>
                        <input
                          type="text"
                          id="longitude"
                          name="Longitude"
                          // value={installAddress.Latitude}
                          // onChange={handleFormAddress}
                          value={longitude}
                          onChange={handleLongitudeChange}
                          onClick={openMapForCurrentLocation}
                          className="border  border-gray-300 w-full rounded px-4 py-3 mt-4"
                          placeholder="Click to For Longitude"
                        />
                      </div>
                    </div>
                    <div className="lg:flex md:block block justify-between gap-5 items-center pt-5">
                      <div className="w-full">
                        <p className="text-base leading-none text-gray-800 pt-3">
                          Comments
                        </p>
                        <div className="border border-gray-300 focus:bg-gray-50 rounded w-full px-4 py-3 mt-4">
                          <input
                            className="leading-none text-gray-600 focus:outline-none"
                            type="text"
                            name="Comments"
                            value={installAddress.Comments}
                            onChange={handleFormAddress}
                            placeholder="Enter Your Comments"
                          />
                        </div>
                      </div>
                      <div className="w-full">
                        <p className="text-base leading-none text-gray-800 pt-3">
                          Activation Comments
                        </p>
                        <div className="border border-gray-300 rounded px-4 py-3 mt-4">
                          <input
                            type="text"
                            value={installAddress.Activation_Comments}
                            onChange={handleFormAddress}
                            name="Activation_Comments"
                            placeholder="Enter Your Activation Comments"
                            className="leading-none w-full text-gray-600 focus:outline-none"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="lg:flex md:block block justify-between gap-5 items-center pt-5">
                      <div className="w-full">
                        <p className="text-base leading-none text-gray-800 pt-3">
                          Installation Address Line 1
                        </p>
                        <div className="border border-gray-300 focus:bg-gray-50 rounded  px-4 py-3 mt-4">
                          <input
                            className="leading-none text-gray-600 w-full focus:outline-none"
                            type="text"
                            name="Installation_Add1"
                            value={billInstallAddress.Installation_Add1}
                            onChange={handleFormAddressBill}
                            placeholder="Enter Installation Address Line 1"
                          />
                        </div>
                      </div>
                      <div className="w-full">
                        <p className="text-base leading-none text-gray-800 pt-3">
                          Installation Address Line 2
                        </p>
                        <div className="border border-gray-300 rounded px-4 py-3 mt-4">
                          <input
                            type="text"
                            value={billInstallAddress.Installation_Add2}
                            onChange={handleFormAddressBill}
                            name="Installation_Add2"
                            placeholder="Enter Installation Address Line 2"
                            className="leading-none w-full text-gray-600 focus:outline-none"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="lg:flex md:block block justify-between gap-5 items-center pt-5">
                      <div className="w-full">
                        <p className="text-base leading-none text-gray-800 pt-3">
                          City
                        </p>
                        <div className="border border-gray-300 focus:bg-gray-50 rounded w-full px-4 py-3 mt-4">
                          <input
                            className="leading-none text-gray-600 focus:outline-none"
                            type="text"
                            value={billInstallAddress.City}
                            onChange={handleFormAddressBill}
                            name="City"
                            placeholder="Enter City"
                          />
                        </div>
                      </div>
                      <div className="w-full">
                        <p className="text-base leading-none text-gray-800 pt-3">
                          State
                        </p>
                        <div className="border border-gray-300 rounded px-4 py-3 mt-4">
                          <input
                            type="text"
                            value={billInstallAddress.State}
                            onChange={handleFormAddressBill}
                            name="State"
                            placeholder="Enter State"
                            className="leading-none text-gray-600 focus:outline-none"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="lg:flex md:block block justify-between gap-5 items-center pt-5">
                      <div className="w-full">
                        <p className="text-base leading-none text-gray-800 pt-3">
                          Pin Code
                        </p>
                        <div className="border border-gray-300 focus:bg-gray-50 rounded w-full px-4 py-3 mt-4">
                          <input
                            className="leading-none text-gray-600 focus:outline-none"
                            type="number"
                            value={billInstallAddress.Pin_Code}
                            onChange={handleFormAddressBill}
                            name="Pin_Code"
                            placeholder="Enter Pin Code"
                          />
                        </div>
                      </div>
                      <div className="w-full">
                        <p className="text-base leading-none text-gray-800 pt-3">
                          Country
                        </p>
                        <div className="border border-gray-300 rounded px-4 py-3 mt-4">
                          <select
                            name="Country"
                            value={billInstallAddress.Country}
                            onChange={handleFormAddressBill}
                            className="leading-none  w-full text-gray-600 focus:outline-none"
                          >
                            <option value="">Select a Country</option>
                            {countryList.map((country) => (
                              <option key={country} value={country}>
                                {country}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="lg:flex md:block block justify-between gap-5 items-center pt-5">
                      <div className="w-full">
                        <p className="text-base leading-none text-gray-800 pt-3">
                          User Type
                        </p>
                        <select
                          className="border w-full border-gray-300 rounded px-4 py-3 mt-4"
                          name="User_Type"
                          id=""
                          value={billInstallAddress.User_Type}
                          onChange={handleFormAddressBill}
                        >
                          <option value="Home">Home</option>
                          <option value="Business">Business</option>
                        </select>
                      </div>
                      <div className="w-full">
                        <p className="text-base leading-none text-gray-800 pt-3">
                          Referral Code
                        </p>
                        <input
                          type="text"
                          name="Referral_Code"
                          id
                          value={billInstallAddress.Referral_Code}
                          onChange={handleFormAddressBill}
                          placeholder="Enter your Referral Code"
                          className="focus:outline-none border border-gray-300 py-3 pl-3 rounded w-full mt-4"
                        />
                      </div>
                    </div>
                    <div className="lg:flex md:block block justify-between gap-5 items-center pt-5">
                      <div className="w-full">
                        <p className="text-base leading-none text-gray-800 pt-3">
                          Requested Bandwidth Data
                        </p>
                        <select
                          className="border w-full border-gray-300 rounded px-4 py-3 mt-4"
                          name="Requested_Bandwidth_Data"
                          id=""
                          value={billInstallAddress.Requested_Bandwidth_Data}
                          onChange={handleFormAddressBill}
                        >
                          <option value=" Mbps"> Mbps</option>
                          <option value=" Gbps"> Gbps</option>
                        </select>
                      </div>
                      <div className="w-full">
                        <p className="text-base leading-none text-gray-800 pt-3">
                          Requested Bandwidth
                        </p>
                        <input
                          type="text"
                          name="Requested_Bandwidth"
                          id
                          value={billInstallAddress.Requested_Bandwidth}
                          onChange={handleFormAddressBill}
                          placeholder="Enter your Requested Bandwidth"
                          className="focus:outline-none border border-gray-300 py-3 pl-3 rounded w-full mt-4"
                        />
                      </div>
                    </div>
                    <div className="lg:flex md:block block justify-between gap-5 items-center pt-5">
                      <div className="w-full">
                        <p className="text-base leading-none text-gray-800 pt-3">
                          Latitude
                        </p>
                        <div className="border border-gray-300 focus:bg-gray-50 rounded w-full px-4 py-3 mt-4">
                          <input
                            className="leading-none text-gray-600 focus:outline-none"
                            type="number"
                            value={billInstallAddress.Latitude}
                            onChange={handleFormAddressBill}
                            name="Latitude"
                            placeholder="Enter Latitude"
                          />
                        </div>
                      </div>
                      <div className="w-full">
                        <p className="text-base leading-none text-gray-800 pt-3">
                          Longitude
                        </p>
                        <input
                          type="text"
                          id="longitude"
                          name="Longitude"
                          value={longitude}
                          onChange={handleLongitudeChange}
                          onClick={openMapForCurrentLocation}
                          className="border  border-gray-300 w-full rounded px-4 py-3 mt-4"
                          placeholder="Click to For Longitude"
                        />
                      </div>
                    </div>
                    <div className="lg:flex md:block block justify-between gap-5 items-center pt-5">
                      <div className="w-full">
                        <p className="text-base leading-none text-gray-800 pt-3">
                          Comments
                        </p>
                        <div className="border border-gray-300 focus:bg-gray-50 rounded w-full px-4 py-3 mt-4">
                          <input
                            name="Comments"
                            value={billInstallAddress.Comments}
                            onChange={handleFormAddressBill}
                            className="leading-none text-gray-600 focus:outline-none"
                            type="text"
                            placeholder="Enter Your Comments"
                          />
                        </div>
                      </div>
                      <div className="w-full">
                        <p className="text-base leading-none text-gray-800 pt-3">
                          Activation Comments
                        </p>
                        <div className="border border-gray-300 rounded px-4 py-3 mt-4">
                          <input
                            type="text"
                            value={billInstallAddress.Activation_Comments}
                            onChange={handleFormAddressBill}
                            name="Activation_Comments"
                            placeholder="Enter Your Activation Comments"
                            className="leading-none w-full text-gray-600 focus:outline-none"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            {isOpen && <PrivacyPolicy closePopup={closePopup} />}
            <div className="pt-10">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  checked={showForm1}
                  onChange={handleCheckboxChange1}
                  className="form-checkbox h-5 w-5 text-indigo-600 transition duration-150 ease-in-out"
                />
                <span className="ml-2">Point Of Contact</span>
              </label>

              {showForm1 && (
                <form className="mt-4">
                  <div className="lg:flex md:block block justify-center gap-4 pt-6">
                    <div className="w-full">
                      <p className="text-base leading-none text-gray-800">
                        Contact Name
                      </p>
                      <input
                        type="text"
                        name="Contact_Name"
                        id
                        value={pointOFContact.Contact_Name}
                        onChange={handleFormPoint}
                        placeholder="Enter your Contact Name"
                        className="focus:outline-none border border-gray-300 py-3 pl-3 rounded w-full mt-4"
                      />
                    </div>
                    <div className="w-full">
                      <p className="text-base leading-none text-gray-800 lg:pt-0 md:pt-3 pt-3">
                        Designation
                      </p>
                      <input
                        type="text"
                        value={pointOFContact.Designation}
                        onChange={handleFormPoint}
                        name="Designation"
                        id
                        placeholder="Enter your Designation"
                        className="focus:outline-none border border-gray-300 py-3 pl-3 rounded w-full mt-4"
                      />
                    </div>
                  </div>

                  <div className="lg:flex md:block block justify-center gap-4 pt-6">
                    <div className="w-full">
                      <p className="text-base leading-none text-gray-800">
                        Phone Number
                      </p>
                      <input
                        type="number"
                        name="Phone_Number"
                        value={pointOFContact.Phone_Number}
                        onChange={handleFormPoint}
                        id
                        placeholder="Enter your Phone Number"
                        className="focus:outline-none border border-gray-300 py-3 pl-3 rounded w-full mt-4"
                      />
                    </div>
                    <div className="w-full">
                      <p className="text-base leading-none text-gray-800 lg:pt-0 md:pt-3 pt-3">
                        Email ID
                      </p>
                      <input
                        type="email"
                        name="Email_ID"
                        value={pointOFContact.Email_ID}
                        onChange={handleFormPoint}
                        id
                        placeholder="Enter your Email ID"
                        className="focus:outline-none border border-gray-300 py-3 pl-3 rounded w-full mt-4"
                      />
                    </div>
                  </div>
                  <div className="lg:flex md:block block justify-center gap-4 pt-6">
                    <div className="w-full">
                      <p className="text-base leading-none text-gray-800">
                        Description
                      </p>
                      <input
                        type="text"
                        value={pointOFContact.Description}
                        onChange={handleFormPoint}
                        name="Description"
                        id
                        placeholder="Enter your Description"
                        className="focus:outline-none border border-gray-300 py-3 pl-3 rounded w-full mt-4"
                      />
                    </div>
                    <div className="w-full"></div>
                  </div>
                </form>
              )}
            </div>

            <div className="mt-5">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  checked={privacyPolicyChecked}
                  onChange={handlePrivacyPolicyChange}
                  className="form-checkbox h-5 w-5 text-indigo-600 transition duration-150 ease-in-out"
                />
                <span className="ml-2">
                  I agree to the{" "}
                  <Link
                    onClick={openPopup}
                    className="text-indigo-600 underline"
                  >
                    Privacy Policy
                  </Link>
                  <span className="mx-2">and</span>
                  <Link
                    to="/TermsAndConditions"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 underline"
                  >
                    Terms and Conditions
                  </Link>
                </span>
              </label>
            </div>
            <div>
              <div className="mb-10 mt-5">
                <div className="flex justify-between items-center">
                  <div className="flex gap-5 pt-4">
                    <button
                      onClick={(e) => handleSubmit(e)}
                      className="text-white border border-indigo-700 bg-indigo-700 px-6 py-3 rounded font-medium hover:bg-indigo-600"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
