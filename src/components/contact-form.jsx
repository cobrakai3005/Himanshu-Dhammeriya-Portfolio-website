import React from "react";

export default function ContacForm() {
  return (
    <form className="flex flex-col gap-10">
      <div className="flex-1 flex flex-col gap-4 sm:flex-row">
        <label className="text-md font-bold " htmlFor="name">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="bg-zinc-200/20 w-full px-5 py-3"
        />
      </div>
      <div className="flex-1 flex flex-col gap-4 sm:flex-row">
        <label className="text-md font-bold" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="bg-zinc-200/20 w-full px-5 py-3"
        />
      </div>
      <div className="flex-1 flex flex-col gap-4 sm:flex-row">
        <label className="text-md font-bold" htmlFor="name">
          Subject
        </label>
        <input
          type="text"
          name="subject"
          id="subject"
          className="bg-zinc-200/20 w-full px-5 py-3"
        />
      </div>
      <div className="flex-1 flex flex-col gap-4 sm:flex-row">
        <label className="text-md font-bold" htmlFor="name">
          Message
        </label>
        <textarea
          name="message"
          id="message"
          cols={2}
          rows={10}
          className="bg-zinc-200/20 w-full px-5 py-3"
        ></textarea>
      </div>
      <div>
        <button
          className="px-12 py-5  font-bold cursor-pointer hover:bg-zinc-300 hover:text-black rounded bg-black text-white text-lg  transition-all duration-200"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
