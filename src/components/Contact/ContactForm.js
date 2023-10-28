'use client'
import React from "react";
import {useForm} from "react-hook-form";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm();
  const onSubmit = async (data) => {
    try {
      //console.log(data)
      const response = await fetch("../api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      const responseData = await response.json();
      console.log(responseData);
    } catch (error) {
      console.error(
        "There has been a problem with your fetch operation:",
        errors
      );
    }
  };


  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="my-12 text-base xs:text-lg sm:text-xl font-medium leading-relaxed font-in">
      Hello My name is
      <input
        type="text"
        className="outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-solid border-gray focus:border-gray bg-transparent"
        placeholder="name"
        {...register("name", {required: true})}
      />
      and I want to discuss a potential project. You can email me at
      <input
        type="your@email"
        placeholder="email"
        className="outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-solid border-gray focus:border-gray bg-transparent"
        {...register("email", {required: true})}
      />
      or reach out to me on my phone at
      <input
        type="tel"
        placeholder="your phone"
        className="outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-solid border-gray focus:border-gray bg-transparent"
        {...register("phone", {required: false})}
      />
      Here are some details about my project: <br />
      <textarea
        placeholder="My project is about..."
        rows={3}
        className="w-full outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-lg border-b border-solid border-gray focus:border-gray bg-transparent"
        {...register("project details", {required: true})}
      />
      <input type="submit" value="send request" className="dark:border-light mt-8 font-medium inline-block capitalize text-lg sm:text-xl py-2 sm:py-3 px-6 sm:px-8 border-2 border-solid border-dark rounded cursor-pointer" />
    </form>
  );
}
