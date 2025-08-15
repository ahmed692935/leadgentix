import { useState } from "react";
// import Logo from "../../public/Logo.jpeg";
import Logo1 from "../../public/Logo1.png";
import { FiDownload, FiPhone, FiUpload } from "react-icons/fi";
import { FiFileText, FiFile, FiChevronDown, FiChevronUp } from "react-icons/fi";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store/store";
import { uploadStart, uploadSuccess } from "../store/slices/upload";
import { uploads } from "../api/uploads";

const guidelines = [
  {
    text: "The file must be either CSV, XLS or XLSX format",
  },
  {
    text: "Required columns: Name, Phone Number, Email, Tag, Contact ID",
  },
  {
    text: "Maximum 1000 rows per file",
  },
  {
    text: "Phone numbers must be in E.164 format (with + prefix) or will be auto-formatted",
  },
  {
    text: "File will be encrypted and stored securely (HIPAA complaint)",
  },
  {
    text: "Calls will be initaiated immediately with 30-second intervals between contacts",
  },
  {
    text: "Valid tag types:",
    tags: ["cgm", "cap lead", "weightloss", "wheelchair", "cane"],
  },
];

const CallingModule = () => {
  const [isOpen, setIsOpen] = useState(false);

  // const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const file = e.target.files?.[0];
  //   if (file) {
  //     console.log("Uploaded File:", file);
  //   }
  // };

  const dispatch = useDispatch();
  const { loading } = useSelector((state: RootState) => state.upload);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    dispatch(uploadStart());

    try {
      await uploads(file);
      dispatch(uploadSuccess(true));
    } catch (err: unknown) {
      console.log(err);
    }
  };

  return (
    <>
      <div className=" container mx-auto max-w-7xl">
        <div className="w-full bg-white container text-black">
          <div className="max-w-7xl mx-auto flex items-center justify-between px-2 md:px-10 py-3">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <img src={Logo1} alt="Logo" className="w-44 h-14" />
            </div>

            {/* Right Side Buttons */}
          </div>
        </div>
        <hr className="text-gray-300 border-1" />

        <div className="flex flex-col items-center justify-center text-black mt-7">
          {/* <div className="bg-gradient-to-l from-blue-500 to-blue-700 p-2 rounded-lg shadow-lg flex items-center justify-center"> */}
          <div className="bg-gradient-to-l from-[#05A3A9] to-[#6BEE2E] p-2 rounded-lg shadow-lg flex items-center justify-center">
            <FiPhone className="w-8 h-8 text-white" />
          </div>

          <p
            className="mt-4 text-center font-bold text-black"
            // className="mt-4 text-center font-bold text-[#051650]"
            style={{
              fontSize: "clamp(1.25rem, 2vw + 0.5rem, 1.8rem)",
            }}
          >
            Leadgentix Scaling and Automation Plan
          </p>
          <p className="text-base mt-1 text-center text-green-700">
            Upload your contact list and start your automated calling compaign
          </p>
        </div>

        <hr className="text-gray-300 border-1 mt-7" />

        <div className="flex justify-center items-center bg-gray-100 p-2 md:p-0">
          <div className="max-w-[600px] w-full border border-green-200 border-1 bg-green-50 p-4 rounded-lg shadow-md mt-10">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <div className="p-1 bg-green-600 rounded-lg">
                  <FiFileText className="text-white w-5 h-5" />
                </div>
                <FiFile className="text-black w-4 h-4" />
                <span className="font-semibold text-black text-sm sm:text-base">
                  File Upload Guidelines
                </span>
              </div>

              {/* Right: Button + Accordion Toggle */}
              <div className="flex items-center space-x-2">
                <button className="flex items-center space-x-1 bg-white text-green-700 px-3 py-1 rounded-md cursor-pointer border border-green-700">
                  <FiDownload />
                  <span className="text-green-700 text-xs sm:text-base">
                    Sample File
                  </span>
                </button>
                <button onClick={() => setIsOpen(!isOpen)} className="p-1">
                  {isOpen ? (
                    <FiChevronUp className="w-5 h-5 text-green-700 cursor-pointer" />
                  ) : (
                    <FiChevronDown className="w-5 h-5 text-green-700 cursor-pointer" />
                  )}
                </button>
              </div>
            </div>

            {/* Accordion Content */}
            {isOpen && (
              <div className="mt-4 space-y-3">
                {guidelines.map((item, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <div className="w-5 h-5 flex-shrink-0 rounded-full flex items-center justify-center">
                      <IoMdCheckmarkCircleOutline
                        color="green"
                        className="mt-2"
                      />
                    </div>
                    <span className="text-black">
                      {item.text}{" "}
                      {item.tags && (
                        <>
                          {item.tags.map((tag, i) => (
                            <span
                              key={i}
                              className="bg-green-100 text-black px-2 py-0.5 rounded-md text-sm ml-1 leading-8"
                            >
                              {tag}
                            </span>
                          ))}
                        </>
                      )}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="flex justify-center items-center bg-gray-100 p-2 md:p-0">
          <div className="bg-white mt-10 max-w-[600px] w-full rounded-lg shadow-md p-6 mb-10">
            {/* Title */}
            <p
              className="font-bold text-center mb-6"
              style={{
                fontSize: "clamp(1rem, 1vw + 0.5rem, 1.5rem)",
              }}
            >
              Upload Contact File
            </p>

            {/* File Uploader */}
            <label
              htmlFor="fileUpload"
              className="flex flex-col items-center justify-center border-2 border-dashed border-gray-400 rounded-lg p-6 cursor-pointer hover:bg-gray-50 transition"
            >
              <FiUpload className="w-12 h-12 text-green-600" />
              <p className="mt-2 font-semibold">Click or drag file to upload</p>
              <p className="text-sm text-gray-500">
                Only CSV or Excel files are allowed
              </p>
              <span className="mt-4 bg-gradient-to-l from-[#05A3A9] to-[#6BEE2E] hover:bg-green-600 text-white px-4 py-2 rounded-md text-sm">
                Choose File
              </span>
              <input
                type="file"
                id="fileUpload"
                accept=".csv, application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                className="hidden"
                onChange={handleFileChange}
              />
            </label>
            {loading && (
              <p className="text-red-500 mt-5 text-center">Uploading...</p>
            )}
          </div>
        </div>

        {/* <footer className="bg-[#051650] text-white py-10 px-6 md:px-16 overflow-hidden"> */}
        <footer className="bg-gradient-to-l from-[#05A3A9] to-[#6BEE2E] text-white py-10 px-6 md:px-16 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Column 1: Logo & Description */}
            <div>
              <h2 className="text-2xl font-bold mb-3">Leadgentix</h2>
              <p className="text-sm text-gray-200">
                Scaling and automation solutions tailored for your business
                growth.
              </p>
              <div className="flex space-x-4 mt-5">
                <a href="#">
                  <FaEnvelope size={20} />
                </a>
                <a href="#">
                  <FiPhone size={20} />
                </a>
                <a href="#">
                  <FaMapMarkerAlt size={20} />
                </a>
              </div>
            </div>

            {/* Column 2: Dummy Links */}
            <div>
              <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
              <ul className="space-y-2">
                <li className="hover:text-blue-300 transition-colors cursor-pointer">
                  About Us
                </li>
                <li className="hover:text-blue-300 transition-colors cursor-pointer">
                  Services
                </li>
                <li className="hover:text-blue-300 transition-colors cursor-pointer">
                  Pricing
                </li>
                <li className="hover:text-blue-300 transition-colors cursor-pointer">
                  Contact
                </li>
              </ul>
            </div>

            {/* Column 3: Contact Info */}
            <div>
              <h3 className="text-xl font-semibold mb-3">Contact</h3>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <FaEnvelope /> <span>info@leadgentix.com</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FiPhone /> <span>+1 234 567 890</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FaMapMarkerAlt /> <span>123 Main St, City, Country</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white-500 mt-8 pt-4 text-center text-sm text-gray-300">
            © {new Date().getFullYear()} Leadgentix. All rights reserved.
          </div>
        </footer>
      </div>
    </>
  );
};

export default CallingModule;
