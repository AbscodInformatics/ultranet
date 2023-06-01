import React,{useState} from 'react'

const Feature = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <>
      <div className="mx-auto bg-white dark:bg-gray-800 shadow rounded w-full">
        <div className="py-6 xl:px-8 lg:px-8 md:px-8 px-4 flex justify-between items-center">
          <p className="font-bold text-sm xl:text-lg lg:text-lg md:text-lg text-gray-800 dark:text-gray-100">
            THIS GIVES YOU THE FOLLOWING CLEAR BENEFITS WHEN YOU ARE CONNECTED
            WITH ULTRANET:
          </p>
        </div>

        <div className="xl:px-8 lg:px-8 md:px-8 px-4 py-6 bg-white dark:bg-gray-800">
          <div className="p-5 flex justify-between rounded mb-6 bg-gray-100 dark:bg-gray-700">
            <div className="w-3/5">
             
              <ul>
                <li className="mb-2 text-xs text-gray-600 dark:text-gray-400">
                  The fastest speeds – this ensures that your upload and
                  download speeds will not suffer no matter how much the load.
                </li>
             
              </ul>
            </div>
         
          </div>
          <div className="p-5 flex justify-between rounded mb-6 bg-gray-100 dark:bg-gray-700">
            <div className="w-3/5">
             
              <ul className="mb-5">
                <li className="mb-2 text-xs text-gray-600 dark:text-gray-400">
                  - Create a competitive analysis report, create personas and
                  also design UX research reports.
                </li>
             
              </ul>
              
            </div>
           
          </div>
          <div className="p-5 flex justify-between rounded mb-6 bg-gray-100 dark:bg-gray-700">
            <div className="w-3/5">
              <p className="mb-4 text-sm font-bold text-gray-800 dark:text-gray-100">
                UX Team Skype Session
              </p>
              <ul className="mb-5">
                <li className="mb-2 text-xs text-gray-600 dark:text-gray-400">
                  - Create a competitive analysis report, create personas and
                  also design UX research reports.
                </li>
                <li className="text-xs text-gray-600 dark:text-gray-400">
                  - Sitemap and information architecture visualizing the
                  organized model of all the components and information
                  contained in product.
                </li>
              </ul>
              <div className="flex flex-wrap items-center">
                <div className="w-6 h-6 bg-cover bg-center rounded-full border border-white relative shadow">
                  <img
                    className="h-full w-full object-cover rounded-full"
                    src="https://dh-ui.s3.amazonaws.com/assets/webapp/layout/grid_cards/grid_card21.jpg"
                    alt
                  />
                </div>
                <div className="w-6 h-6 bg-cover rounded-full -ml-1 border border-white shadow">
                  <img
                    className="h-full w-full object-cover rounded-full"
                    src="https://dh-ui.s3.amazonaws.com/assets/webapp/layout/grid_cards/grid_card22.jpg"
                    alt
                  />
                </div>
                <div className="w-6 h-6 bg-cover rounded-full bg-center -ml-1 border border-white shadow">
                  <img
                    className="h-full w-full object-cover rounded-full"
                    src="https://dh-ui.s3.amazonaws.com/assets/webapp/layout/grid_cards/grid_card23.jpg"
                    alt
                  />
                </div>
                <p className="text-xs ml-1 text-gray-600 dark:text-gray-400">
                  +3 attendees
                </p>
              </div>
            </div>
            <div className="w-3/12 flex flex-col items-end justify-between">
              <p className="text-xs text-gray-600 dark:text-gray-400">
                9am - 10am
              </p>
              <div className="bg-yellow-200 h-6 w-20 mb-4 md:mb-0 rounded-md flex items-center justify-center">
                <span className="text-xs text-yellow-600 font-normal">
                  Personal
                </span>
              </div>
            </div>
          </div>
          <div className="p-5 flex justify-between rounded bg-gray-100 dark:bg-gray-700">
            <div className="w-3/5">
              <p className="mb-4 text-sm font-bold text-gray-800 dark:text-gray-100">
                UX Team Skype Session
              </p>
              <ul className="mb-5">
                <li className="mb-2 text-xs text-gray-600 dark:text-gray-400">
                  - Create a competitive analysis report, create personas and
                  also design UX research reports.
                </li>
                <li className="text-xs text-gray-600 dark:text-gray-400">
                  - Sitemap and information architecture visualizing the
                  organized model of all the components and information
                  contained in product.
                </li>
              </ul>
            </div>
            <div className="w-3/12 flex flex-col items-end justify-between">
              <p className="text-xs text-gray-600 dark:text-gray-400">
                9am - 10am
              </p>
              <div className="bg-gray-200 h-6 w-20 mb-4 md:mb-0 rounded-md flex items-center justify-center">
                <span className="text-xs text-gray-600 dark:text-gray-400 font-normal">
                  Meeting
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Card code block end */}
    </>
  );
}
export default Feature