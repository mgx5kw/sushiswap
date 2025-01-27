import { Transition } from '@headlessui/react'
import Link from 'next/link'
import React from 'react'

const MobileMenu = ({ setIsOpen, isOpen }) => {
  return (
    <>
      <Transition
        show={isOpen}
        enter="ease-out duration-150"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="ease-in duration-100"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div className="absolute inset-x-0 top-0 z-50 p-2 transition origin-top-right transform md:hidden ">
          <div className="rounded-lg shadow-md">
            <div
              className="overflow-hidden rounded-lg shadow-xs opacity-1 bg-[#0c0e20] z-10"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="main-menu"
            >
              <div className="flex items-center justify-between px-5 pt-4 ">
                <Link href="/" passHref aria-label="Home">
                  <svg width="123" height="32" viewBox="0 0 123 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M50.6342 27.9689C48.8729 27.9689 47.1062 27.6433 45.3343 26.9922C43.5623 26.341 42.0625 25.4817 40.835 24.4143L43.7171 20.1231C44.6885 20.9664 45.7933 21.6496 47.0315 22.1726C48.2804 22.685 49.4706 22.9412 50.6021 22.9412C51.5415 22.9412 52.3314 22.7704 52.9719 22.4288C53.623 22.0872 53.9486 21.6336 53.9486 21.0678C53.9486 20.865 53.9059 20.6835 53.8205 20.5234C53.7351 20.3633 53.591 20.2139 53.3882 20.0751C53.1854 19.9363 52.9826 19.8189 52.7797 19.7228C52.5769 19.6161 52.2834 19.504 51.8991 19.3866C51.5255 19.2692 51.1999 19.1784 50.9224 19.1144C50.6555 19.0397 50.2659 18.9382 49.7535 18.8102C44.4163 17.5079 41.7476 15.0474 41.7476 11.4287C41.7476 9.3472 42.5642 7.68197 44.1974 6.43306C45.8306 5.17346 47.9869 4.54367 50.6662 4.54367C52.3421 4.54367 53.8899 4.79985 55.3096 5.31223C56.74 5.82461 57.9035 6.4971 58.8002 7.32971L56.2063 11.6369C55.5231 11.0178 54.6745 10.5214 53.6604 10.1478C52.6463 9.7635 51.6269 9.57136 50.6021 9.57136C49.7055 9.57136 48.9743 9.72614 48.4085 10.0357C47.8428 10.3453 47.5599 10.7456 47.5599 11.2366C47.5599 11.7596 47.8908 12.192 48.5526 12.5335C49.2251 12.8751 50.1485 13.1847 51.3227 13.4622C51.7176 13.5476 52.0806 13.6384 52.4115 13.7344C52.7531 13.8198 53.2227 13.9693 53.8205 14.1828C54.429 14.3856 54.9734 14.6097 55.4537 14.8552C55.9447 15.1008 56.4678 15.421 57.0229 15.816C57.5779 16.2109 58.0369 16.6379 58.3999 17.0969C58.7735 17.5559 59.083 18.111 59.3286 18.7621C59.5847 19.4133 59.7128 20.1071 59.7128 20.8436C59.7128 22.2313 59.3125 23.4749 58.512 24.5744C57.7114 25.6632 56.6226 26.5011 55.2456 27.0882C53.8685 27.6753 52.3314 27.9689 50.6342 27.9689Z"
                      fill="white"
                    />
                    <path
                      d="M75.5165 26.0315C74.054 27.3231 72.1166 27.9689 69.7042 27.9689C67.2917 27.9689 65.3543 27.3231 63.8919 26.0315C62.4295 24.7292 61.6983 23.0106 61.6983 20.8757V10.8523H67.0142V20.1231C67.0142 20.9344 67.2597 21.5855 67.7507 22.0766C68.2524 22.5676 68.9036 22.8131 69.7042 22.8131C70.5048 22.8131 71.1506 22.5676 71.6416 22.0766C72.1433 21.5855 72.3942 20.9344 72.3942 20.1231V10.8523H77.7101V20.8757C77.7101 23.0106 76.9789 24.7292 75.5165 26.0315Z"
                      fill="white"
                    />
                    <path
                      d="M86.9168 27.9689C84.2375 27.9689 81.8144 27.1363 79.6475 25.471L82.0012 22.1246C83.549 23.2881 85.1342 23.8699 86.7567 23.8699C87.4612 23.8699 88.027 23.7738 88.454 23.5817C88.8809 23.3788 89.0944 23.1013 89.0944 22.749C89.0944 22.3861 88.8703 22.1086 88.4219 21.9164C87.9843 21.7243 87.3011 21.5322 86.3724 21.34C85.8814 21.2333 85.4864 21.1479 85.1876 21.0838C84.8993 21.0091 84.5097 20.8917 84.0187 20.7316C83.5277 20.5714 83.1274 20.4113 82.8178 20.2512C82.5189 20.0804 82.1773 19.8563 81.7931 19.5787C81.4195 19.3012 81.1259 19.0023 80.9124 18.6821C80.7096 18.3511 80.5335 17.9562 80.384 17.4972C80.2346 17.0275 80.1599 16.5151 80.1599 15.9601C80.1599 14.7645 80.4854 13.7451 81.1366 12.9018C81.7877 12.0585 82.6417 11.4394 83.6985 11.0444C84.7552 10.6495 85.9508 10.452 87.2851 10.452C89.7509 10.452 92.0139 11.1725 94.0741 12.6136L91.7043 15.9601C90.1992 15.0207 88.7902 14.551 87.4772 14.551C86.8795 14.551 86.3884 14.6311 86.0042 14.7912C85.6306 14.9513 85.4437 15.1968 85.4437 15.5277C85.4437 15.88 85.6572 16.1522 86.0842 16.3443C86.5112 16.5258 87.1944 16.7126 88.1337 16.9048C88.5927 16.9901 88.9823 17.0702 89.3026 17.1449C89.6228 17.2197 90.0178 17.3317 90.4875 17.4812C90.9571 17.6306 91.3521 17.7907 91.6723 17.9615C92.0032 18.1323 92.3502 18.3565 92.7131 18.634C93.076 18.9009 93.3696 19.1998 93.5937 19.5307C93.8179 19.8616 93.9994 20.2619 94.1381 20.7316C94.2876 21.1906 94.3623 21.6976 94.3623 22.2527C94.3623 24.0567 93.6631 25.4604 92.2648 26.4638C90.8771 27.4672 89.0944 27.9689 86.9168 27.9689Z"
                      fill="white"
                    />
                    <path
                      d="M106.835 10.452C108.725 10.452 110.246 11.0231 111.399 12.1653C112.562 13.3074 113.144 14.8232 113.144 16.7126V27.5686H107.828V18.4899C107.828 17.6146 107.577 16.9154 107.076 16.3924C106.574 15.8586 105.907 15.5918 105.074 15.5918C104.156 15.5918 103.414 15.864 102.849 16.4084C102.293 16.9528 102.016 17.668 102.016 18.554V27.5686H96.716V3.95123H102.016V12.4215C103.297 11.1085 104.903 10.452 106.835 10.452Z"
                      fill="white"
                    />
                    <path
                      d="M119.02 9.04297C118.102 9.04297 117.334 8.73875 116.715 8.1303C116.096 7.51118 115.786 6.74262 115.786 5.82461C115.786 4.88525 116.096 4.11135 116.715 3.5029C117.334 2.88378 118.102 2.57422 119.02 2.57422C119.96 2.57422 120.734 2.88378 121.342 3.5029C121.961 4.11135 122.271 4.88525 122.271 5.82461C122.271 6.74262 121.961 7.51118 121.342 8.1303C120.734 8.73875 119.96 9.04297 119.02 9.04297ZM116.378 27.5686V10.8523H121.678V27.5686H116.378Z"
                      fill="white"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M34.0978 20.7423L27.3047 30.1783C26.3155 31.5543 24.3864 32.1603 21.9296 31.9639C18.5163 31.6689 13.982 29.8669 9.64566 26.7711C8.23163 25.7737 6.89575 24.6713 5.64951 23.4732C3.35173 21.2561 1.66286 18.9494 0.758451 16.8926C-0.230737 14.6321 -0.263452 12.6337 0.725736 11.2577L7.53502 1.82169C8.52456 0.445726 10.4372 -0.160298 12.9105 0.0361179C16.3237 0.314665 20.8416 2.13309 25.1941 5.21284C29.5307 8.30902 32.7132 11.9948 34.0651 15.1074C34.1819 15.3744 34.2853 15.6376 34.3754 15.8969C35.0476 17.8314 34.9702 19.5289 34.0978 20.7423Z"
                      fill="url(#paint0_linear_855_1041)"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M33.0096 15.5664C31.707 12.6013 28.6564 9.11196 24.5016 6.16327C20.363 3.21459 16.0598 1.46187 12.8115 1.19975C10.8328 1.03584 9.2663 1.39651 8.47516 2.49393L8.44174 2.55928C7.69985 3.65705 7.86484 5.21335 8.63979 6.98249C9.94241 9.96403 12.9926 13.453 17.1316 16.4017C21.2699 19.3504 25.5735 21.1035 28.8214 21.3656C30.7671 21.5127 32.3008 21.1688 33.1085 20.1368L33.1581 20.055C33.9496 18.9737 33.7846 17.3684 33.0096 15.5664ZM26.9253 15.6321C26.5627 16.1396 25.8208 16.2874 24.9139 16.2053C23.2813 16.0742 21.138 15.1897 19.0604 13.7155C16.9828 12.241 15.4494 10.5043 14.8064 9.01375C14.4437 8.17846 14.3449 7.44137 14.7075 6.93321C15.0706 6.42539 15.8125 6.27791 16.7355 6.34361C18.3512 6.4911 20.5115 7.35924 22.5725 8.83376C24.6501 10.3079 26.1834 12.0606 26.8265 13.5516C27.2057 14.3869 27.3046 15.124 26.9253 15.6321V15.6321Z"
                      fill="white"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_855_1041"
                        x1="11.8223"
                        y1="-0.386793"
                        x2="22.8726"
                        y2="32.4336"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#27B0E6" />
                        <stop offset="0.044" stopColor="#49A1DB" />
                        <stop offset="0.11841" stopColor="#7D8ACA" />
                        <stop offset="0.21562" stopColor="#A279BD" />
                        <stop offset="0.29605" stopColor="#BA6FB6" />
                        <stop offset="0.37529" stopColor="#C26BB3" />
                        <stop offset="0.46788" stopColor="#D563AD" />
                        <stop offset="0.57967" stopColor="#E65BA7" />
                        <stop offset="0.70861" stopColor="#F156A3" />
                        <stop offset="0.82293" stopColor="#F853A1" />
                        <stop offset="1" stopColor="#FA52A0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </Link>
                <div className="-mr-2">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center p-2 text-white transition duration-150 ease-in-out rounded-md focus:outline-none"
                    aria-label="Close menu"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    <svg className="w-6 h-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a
                  href="https://forum.sushi.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-3 py-2 text-base font-medium text-white transition duration-150 ease-in-out rounded-md focus:outline-none"
                  role="menuitem"
                >
                  Forum
                </a>
                <a
                  href="https://snapshot.org/#/sushi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-3 py-2 text-base font-medium text-white transition duration-150 ease-in-out rounded-md focus:outline-none"
                  role="menuitem"
                >
                  Snapshot
                </a>
                <a
                  href="https://docs.sushi.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-3 py-2 text-base font-medium text-white transition duration-150 ease-in-out rounded-md focus:outline-none"
                  role="menuitem"
                >
                  Docs
                </a>
                <Link href="https://sushi.com/swap">
                  <a
                    className="block px-3 py-2 text-base font-medium text-white transition duration-150 ease-in-out rounded-md focus:outline-none"
                    role="menuitem"
                  >
                    Enter App
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </>
  )
}

export default MobileMenu
