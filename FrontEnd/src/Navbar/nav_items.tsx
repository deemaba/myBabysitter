import { AiFillHome } from "react-icons/ai";
import { BsPencil } from "react-icons/bs";
import { MdOutlineBabyChangingStation, MdOutlineBedroomBaby } from "react-icons/md"
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
        Icon: <MdOutlineBabyChangingStation className="sittericon"></MdOutlineBabyChangingStation>,
        title: "Babysitter Chat",
        url: "babysitterchat"
    },
    {
        Icon: <AiFillHome className="homeicon"></AiFillHome>,
        title: "Find BabySitter",
        url: "findBabysitter"
    },
    {
        Icon: <MdOutlineBedroomBaby></MdOutlineBedroomBaby>,
        title: "Activities For Kids",
        url: "activitiesForKids"
    },

    {
        Icon: <BsPencil></BsPencil>,
        title: "Sign Up",
        url: "signup"
    },
    {
        Icon: <BiLogIn></BiLogIn>,
        title: "Sign In",
        url: "signin"
    },


];