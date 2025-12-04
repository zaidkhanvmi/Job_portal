// import Sidebar from "./Sidebar"

// const Layout = ({ children }) => {

//     return (
//         <div className="flex">
//             {/* Sidebar (fixed on left) */}
//             <div className="hidden lg:block">
//                 <Sidebar variant="permanent" />
//             </div>
//             {/* Main Content */}
//             <div className="flex-1 min-h-screen overflow-y-auto bg-red-500 dark:bg-gray-900 p-6 lg:ml-[290px]" >
//                 {children}
//             </div>
//         </div>
//     )
// }

// export default Layout

import { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "../Components/common/Navbar";

const Layout = ({ children }) => {
    const [open, setOpen] = useState(false);

    const toggleDrawer = () => setOpen(!open);

    return (
        <div className="flex">

            {/* Navbar always on top */}
            <Navbar toggleDrawer={toggleDrawer} />

            {/* Sidebar (permanent on desktop, drawer on mobile) */}
            <Sidebar open={open} toggleDrawer={toggleDrawer} />

            {/* Main Content */}
            <div className="flex-1 min-h-screen overflow-y-auto p-6 mt-[64px] lg:ml-[290px]">
                {children}
            </div>

        </div>
    );
};

export default Layout;
