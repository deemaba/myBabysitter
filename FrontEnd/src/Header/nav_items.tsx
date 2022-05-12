import { AiFillHome } from "react-icons/ai";
import { BsPencil, BsPersonCircle, BsSearch } from "react-icons/bs";
import { MdOutlineBabyChangingStation, MdOutlineBedroomBaby, MdOutlineMarkChatUnread } from "react-icons/md"
import { FaBaby } from "react-icons/fa"
import { BiLogIn } from "react-icons/bi"

export let navArr = [
    {
        Icon: <FaBaby></FaBaby>,
        title: "About",
        url: "about"
    },

    {
        Icon: <MdOutlineBabyChangingStation className="sittericon"></MdOutlineBabyChangingStation>,
        title: "Our BabySitters",
        url: "babysitter"
    },

    {
        Icon: <BsSearch className="homeicon"></BsSearch>,
        title: "Find BabySitter",
        url: "findBabysitter"
    },

    {
        Icon: <BsPencil></BsPencil>,
        title: "Sign Up",
        url: "signup"
    },
    {
        Icon: <BsPersonCircle className="sittericon"></BsPersonCircle>,
        title: "",
        url: "babysitterchat"
    },

    {
        Icon: <MdOutlineMarkChatUnread className="sittericon"></MdOutlineMarkChatUnread>,
        title: "",
        url: "babysitterchat"
    },
    {
        Icon: <BiLogIn></BiLogIn>,
        title: "Sign In",
        url: "signin"
    },


];