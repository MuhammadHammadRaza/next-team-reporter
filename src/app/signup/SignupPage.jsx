"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { Button, TextInput } from "flowbite-react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";

const SignupPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const handleSubmitForm = (data) => {
    console.log(data);
    setLoading(true);
    axios
      .post(`${process.env.BASE_URL}/auth/signup`, data)
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
        toast.error(error.response.data.message, {
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
      <form className="w-1/2" onSubmit={handleSubmit(handleSubmitForm)}>
        <div className="mb-6">
          <label
            htmlFor="fullname"
            className="block mb-2 text-sm font-medium text-emerald-900"
          >
            Full name
          </label>
          <TextInput
            {...register("fullName", {
              required: "This field is required",
              minLength: {
                value: 2,
                message: "Name must be atleast 2 characters long",
              },
              maxLength: {
                value: 64,
                message: "Maximum 64 characters allowed",
              },
            })}
            id="fullname"
            className="text-emerald-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500"
            placeholder="John Doe"
            helperText={<>{errors.fullName?.message}</>}
            color={errors.fullName && "failure"}
          />
        </div>
        {/*  */}
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-emerald-900"
          >
            Email address
          </label>
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
              minLength: {
                value: 6,
                message: "Password must be atleast 6 characters long",
              },
              maxLength: {
                value: 16,
                message: "Maximum 16 characters allowed",
              },
            })}
            type="password"
            id="password"
            className="text-emerald-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500"
            placeholder="•••••••••"
            helperText={<>{errors.password?.message}</>}
            color={errors.password && "failure"}
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="confirm_password"
            className="block mb-2 text-sm font-medium text-emerald-900"
          >
            Confirm password
          </label>
          <TextInput
            {...register("confirmPassword", {
              required: "This field is required",
              validate: (val) => {
                if (watch("password") != val) {
                  return "Passwords doesn't match";
                }
              },
            })}
            type="password"
            id="confirm_password"
            className="text-emerald-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500"
            placeholder="•••••••••"
            helperText={<>{errors.confirmPassword?.message}</>}
            color={errors.confirmPassword && "failure"}
          />
        </div>
        <Button
          type="submit"
          // className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          className="text-white bg-blue-700 hover:bg-blue-800 font-medium"
          isProcessing={loading}
          disabled={loading}
        >
          {loading ? "" : "Signup"}
        </Button>
        <div className="mt-3 text-center">
          <Link
            className="text-emerald-900 hover:text-blue-800"
            href={"/login"}
          >
            Already a member?
          </Link>
        </div>
        <ToastContainer />
      </form>
    </div>
    // </div>
  );
};

export default SignupPage;
