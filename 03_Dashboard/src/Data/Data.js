// Sidebar icons 
import { 
    UilEstate, 
    UilClipboardAlt, 
    UilUser, 
    UilPackage, 
    UilChart, 
    UilSignOutAlt ,
    UilMoneyWithdrawal,
    UilUsdSquare,
} from "@iconscout/react-unicons";

import img1 from '../imgs/testi 1.jpg';
import img2 from '../imgs/testi 2.jpg';
import img3 from '../imgs/testi 3.jpg';

export const SidebarData = [
    {
        icon: UilEstate,
        heading: "Dashboard",
    },

  
    {
        icon: UilUser,
        heading: "Customers",
    },


    {
        icon: UilPackage,
        heading: "Products",
    },

    {
        icon: UilClipboardAlt,
        heading: "Orders",
    },



    {
        icon: UilChart,
        heading: "Analytics",
    },

    {
        icon: UilSignOutAlt,
        heading: "Logout",
    },

];

export const CardsData = [
    {
        title: "sales",
        color: {
            backGround:"Linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
            boxShadow: "0px 10px 20px 0px #e0c6f5",

        },
        barValue: 70,
        value: "25,970",
        png: UilUsdSquare,
        series:[
            {
                name: "Sales",
                data: [31, 40, 28, 51, 42, 109, 100],
            },
        ],
    },

    {
        title: "Revenue",
        color: {
            backGround:"Linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
            boxShadow: "0px 10px 20px 0px #e0c6f5",

        },
        barValue: 80,
        value: "14,200",
        png: UilMoneyWithdrawal,
        series:[
            {
                name: "Revenue",
                data: [10, 20, 28, 51, 42, 109, 80],
            },
        ],
    },

    {
        title: "Expenses",
        color: {
            backGround:"Linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
            boxShadow: "0px 10px 20px 0px #e0c6f5",

        },
        barValue: 50,
        value: "4,970",
        png: UilClipboardAlt,
        series:[
            {
                name: "Expenses",
                data: [31, 40, 28, 51, 42, 109, 100],
            },
        ],
    },
];


export const UpdatesData = [
    {
        img: img1,
        name: "John Dio",
        noti: "received ordered Apple smart Watch",
        time: "25 second ago"
    },

    {
        img: img2,
        name: "Andrew",
        noti: "has received the expected product",
        time: "40 second ago"
    },
    

    {
        img: img3,
        name: "Thomas",
        noti: "received ordered smart TV ",
        time: "30 second ago"
    },
    
]