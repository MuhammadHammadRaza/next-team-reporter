"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { Button, Label, TextInput } from "flowbite-react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

const LoginPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleSubmitForm = (data) => {
    console.log(data);
    setLoading(true);

    axios
      .post(`${process.env.BASE_URL}/auth/login`, data, {
        withCredentials: "include",
      })
      .then(function (response) {
        console.log(response);
        toast.success("Signup successfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setLoading(false);
        router.push("/dashboard");
      })
      .catch(function (error) {
        console.log(error);
        toast.error(error.response?.data.message || error.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setLoading(false);
      });
  };
  return (
    <div className="flex items-center mt-24 justify-center">
      <div className="w-1/2">
        <form onSubmit={handleSubmit(handleSubmitForm)}>
          <div className="mb-6">
            <Label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-emerald-900"
              value="Email address"
            />

            <TextInput
              {...register("email", {
                required: "This field is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Invalid email format",
                },
              })}
              // type="email"
              id="email"
              className="text-emerald-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500"
              placeholder="john.doe@company.com"
              helperText={<>{errors.email?.message}</>}
              color={errors.email && "failure"}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-emerald-900"
            >
              Password
            </label>
            <TextInput
              {...register("password", {
                required: "This field is required",
              })}
              type="password"
              id="password"
              className="text-emerald-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500"
              placeholder="•••••••••"
              helperText={<>{errors.password?.message}</>}
              color={errors.password && "failure"}
            />
          </div>
          <Button
            type="submit"
            // className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            className="text-white bg-blue-700 hover:bg-blue-800 font-medium"
            isProcessing={loading}
            disabled={loading}
          >
            {loading ? "" : "Login"}
          </Button>
          <div className="mt-3 text-center">
            <Link
              className="text-emerald-900 hover:text-blue-800"
              href={"/signup"}
            >
              Not a member?
            </Link>
          </div>
          <ToastContainer />
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
