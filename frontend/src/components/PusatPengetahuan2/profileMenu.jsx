// import React from "react";
// import {
//   Typography,
//   Button,
//   Menu,
//   MenuHandler,
//   MenuList,
//   MenuItem,
//   Avatar,
// } from "@material-tailwind/react";
// import {
//   // UserCircleIcon,
//   ChevronDownIcon,
//   // Cog6ToothIcon,
//   // InboxArrowDownIcon,
//   // RocketLaunchIcon,
//   // PowerIcon,
// } from "@heroicons/react/24/outline";
// import { Link } from "react-router-dom";

// const ProfileMenu = () => {
//   const [isMenuOpen, setIsMenuOpen] = React.useState(false);
//   const closeMenu = () => setIsMenuOpen(false);
//   const profileMenuItems = [
//     {
//       label: "My Profile",
//       // icon: UserCircleIcon,
//       path: "/profile",
//     },
//     {
//       label: "Settings",
//       // icon: Cog6ToothIcon,
//       path: "/about",
//     },
//     {
//       label: "Sign Out",
//       // icon: PowerIcon,
//       path: "",
//     },
//     {
//       label: "Sign Out",
//       // icon: PowerIcon,
//       path: "",
//     },
//     {
//       label: "Sign Out",
//       // icon: PowerIcon,
//       path: "",
//     },
//     {
//       label: "Sign Out",
//       path: "",
//     },
//   ];

//   return (
//     <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
//       <MenuHandler>
//         <Button
//           variant="text"
//           color="blue-gray"
//           className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
//         >
//           <Avatar
//             variant="circular"
//             size="sm"
//             alt="candice wu"
//             className="border-none"
//             src="./assets/profileUser.png"
//           />
//           <ChevronDownIcon
//             strokeWidth={2.5}
//             className={`h-3 w-3 transition-transform ${
//               isMenuOpen ? "rotate-180" : ""
//             }`}
//           />
//         </Button>
//       </MenuHandler>
//       <MenuList className="p-1">
//         {profileMenuItems.map(({ label, icon, path }, key) => {
//           const isLastItem = key === profileMenuItems.length - 1;
//           return (
//             <Link to={path}>
//               <MenuItem
//                 key={label}
//                 onClick={closeMenu}
//                 className={`flex items-center gap-2 rounded ${
//                   isLastItem
//                     ? "hover:bg-red-500 focus:bg-red-500/10 active:bg-red-500/10"
//                     : ""
//                 }`}
//               >
//                 {React.createElement(icon, {
//                   className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
//                   strokeWidth: 2,
//                 })}
//                 <Typography
//                   as="span"
//                   variant="small"
//                   className="font-normal"
//                   color={isLastItem ? "red" : "inherit"}
//                 >
//                   {label}
//                 </Typography>
//               </MenuItem>
//             </Link>
//           );
//         })}
//       </MenuList>
//     </Menu>
//   );
// };

// export default ProfileMenu;



import React from "react";
import {
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const ProfileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const closeMenu = () => setIsMenuOpen(false);
  const profileMenuItems = [
    {
      label: "Sort",
      path: "/#",
    },
    {
      label: "Newest",
      path: "/#",
    },
    {
      label: "Oldtest",
      path: "/#",
    },
    {
      label: "Most Watched",
      path: "/#",
    },
    {
      label: "Highest Rate",
      path: "/#",
    },
  ];

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
        >
          <Avatar
            variant="circular"
            size="sm"
            alt="candice wu"
            className="border-none"
            src="./assets/profileUser.png"
          />
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 text-white transition-transform ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-1">
        {profileMenuItems.map(({ label, path }, key) => {
          const isLastItem = key === profileMenuItems.length - 1;
          return (
            <Link to={path} key={key}>
              <MenuItem
                onClick={closeMenu}
                className={`flex items-center gap-2 rounded ${
                  isLastItem
                    ? "hover-bg: "
                    : ""
                }`}
              >
              {/* <MenuList className="p-1">
  {profileMenuItems.map(({ label, path }, key) => {
    const isLastItem = key === profileMenuItems.length - 7;
    return (
      <Link to={path} key={key}>
        <MenuItem
          onClick={closeMenu}
          className={`flex items-center gap-2 rounded ${
            isLastItem
              ? "hover:bg-red-500 focus:bg-red-500/10 active:bg-red-500/10"
              : ""
          } ${label === "My Profile" ? "hover:bg-gray-200" : ""}`}
        > */}


                <Typography
                  as="span"
                  variant="small"
                  className="font-normal hover:bg-[#EC2028] text-left hover:text-white  hover:block w-full 
                  hover:font-bold"
                  // color={isLastItem ? "red" : "inherit"}
                >
                  {label}
                </Typography>
              </MenuItem>
            </Link>
          );
        })}
      </MenuList>
    </Menu>
  );
};

export default ProfileMenu;
