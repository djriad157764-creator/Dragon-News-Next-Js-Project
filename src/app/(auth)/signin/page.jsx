"use client";
import Link from "next/link";
import { useForm } from "react-hook-form";

const SigninPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = (data) => {
    console.log(data);
  };

  return (
    <div className="bg-base-200 h-screen px-5 sm:px-0 w-full">
      <div className=" w-full max-w-150 bg-base-100  rounded-2xl mx-auto py-10 lg:py-15 lg:px-15">
        <div className="card ">
          <h3 className="text-4xl text-[#403F3F] text-center font-semibold">
            Login your account
          </h3>

          <div className="card-body">
            <div className="divider "></div>
            <form onSubmit={handleSubmit(handleLogin)} className="fieldset">
              <div className="">
                <label className="label font-semibold text-base mb-2">
                  Email <span className="text-error">*</span>
                </label>
                <input
                  type="email"
                  defaultValue=""
                  className={` w-full h-12 border p-5 rounded-md focus:outline-1 border-neutral/10 text-base ${
                    errors.email ? "input-error" : ""
                  }`}
                  placeholder="Enter your email"
                  {...register("email", { required: "Email is required" })}
                />
                {errors.email && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <label className="label font-semibold text-base mb-2">
                Password <span className="text-error">*</span>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                className=" w-full h-12 border p-5 rounded-md focus:outline-1 border-neutral/10 text-base"
                {...register("password", { required: "Password is required" })}
              />
              {errors.password && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
              <div>
                <a className="link font-semibold text-base link-hover">
                  Forgot password?
                </a>
              </div>
              <button className="btn  font-semibold  bg-[#403F3F] text-white  mt-4">
                Login
              </button>
            </form>
            <div className="flex justify-center font-semibold text-[#706F6F]">
              <p> Dont’t Have An Account ?</p>
              <Link
                href="/signup"
                className="bg-linear-to-r from-[#FF8C47] to-[#F75B5F] bg-clip-text text-transparent  link-hover"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SigninPage;
