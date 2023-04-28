import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Head from "next/head";

const Hod = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const toastoptions = {
    position: "top-right",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  }

  const handleClick = async (event) => {
    event.preventDefault();

    setLoading(true);

    if ( !email || !password) {
      toast.warning("Please fill all the field !!", toastoptions);
      setTimeout(() => {
        setLoading(false);
      }, 3000);
      return;
    }

    try {
      const data = await fetch("/api/hodlogin", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          email,
          password
        }),
      });
      let response = await data.json();

      if (response.success === true) {
        toast.success("Login Successfull !!", toastoptions);
        setTimeout(() => {
          setLoading(false);
          router.push("/Hodhome")
        }, 1000);
        localStorage.setItem("hod-token",JSON.stringify(response.token));
      } 
       else {
        toast.error("Login Unsuccessfull  !!", toastoptions);
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      }
    } catch (error) {
      toast.error("Error Occured !!", toastoptions);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  };

  return (
    <>
    <Head>
           <title>SPEAK-UP : HOD </title>
           <meta
             name="description"
             content="Generated by developer for the who needs to be thier doubts and want to learn from the expert"
           />
           <link rel="icon" href="/neev.png" />
         </Head>
    <div className="flex items-center justify-center flex-col w-full h-full from-slate-600 bg-gradient-to-t">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover
        theme="light"
      />
      <div className="bg-green-900 rounded p-2 px-5 absolute top-[5rem] z-10">
        <h1 className="text-white text-3xl uppercase">H.o.d</h1>
      </div>
      <div className="border-4 border-white p-5 relative rounded bg-white/30 w-[30rem] shadow-3xl mb-[10rem]">
        <div className="flex items-center justify-center mt-9">
          <img src="/images/logo2.png " className="w-[12rem]" />
        </div>
        <form className="flex items-center justify-center flex-col ">
          <div className="relative">
            <div className="relative mb-6 ">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <i className="fa-solid fa-envelope  text-green-900 text-3xl"></i>
              </div>
              <div className="absolute w-[2px] h-[36px] bg-green-700 top-[10px] bottom-[2rem] left-[52px]"></div>
              <input
                type="email"
                id="email"
                name="email"
                className="text-green-800  rounded-lg block w-[24rem] text-2xl pl-[4rem] p-3 dark:placeholder:text-green-900 bg-white dark:text-green-900 outline-none"
                placeholder="Your Email"
                autoComplete="off"
                required
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="relative">
            <div className="relative mb-5 ">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <i className=" fa-solid fa-lock  text-green-900 text-3xl"></i>
              </div>
              <div className="absolute w-[2px] h-[36px] bg-green-700 top-[10px] bottom-[2rem] left-[52px]"></div>
              <input
                type="password"
                id="password"
                name="password"
                className="text-green-800  rounded-lg block w-[24rem] text-2xl pl-[4rem] p-3 dark:placeholder:text-green-900 bg-white dark:text-green-900 outline-none"
                placeholder="Your Password"
                autoComplete="off"
                required
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
          </div>
          <button
            type="submit"
            className="bg-green-900 mt-2 w-[15rem] hover:bg-green-800 shadow-4xl  transition-all duration-300 text-white h-[3.8rem] cursor-pointer rounded text-3xl  flex items-center justify-center"
            onClick={handleClick}
          >
            {loading ? (
              <img
                className="w-[3rem] h-[3rem]" 
                src="/loader/loaderstudent.gif"
              />
            ) : (
              "Register"
            )}
          </button>
        </form>
      </div>
    </div>
    </>
  );
};

export default Hod;