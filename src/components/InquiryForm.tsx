"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { submitInquiry, type InquiryState } from "@/app/contact/actions";

const initial: InquiryState = { status: "idle" };

const field =
  "w-full border-0 border-b border-bone-edge bg-transparent pb-3 pt-2 text-body text-ink outline-none transition-colors duration-500 placeholder:text-stone focus:border-clay";

function Submit() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="label border border-ink px-8 py-4 text-ink transition-colors duration-500 hover:bg-ink hover:text-bone disabled:opacity-50"
    >
      {pending ? "Sending" : "Send enquiry"}
    </button>
  );
}

export function InquiryForm() {
  const [state, action] = useActionState(submitInquiry, initial);

  return (
    <form action={action} className="space-y-10">
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="label">
            Name
          </label>
          <input id="name" name="name" required className={`${field} mt-3`} placeholder="Your name" />
        </div>

        <div>
          <label htmlFor="email" className="label">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={`${field} mt-3`}
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label htmlFor="location" className="label">
            Site location
          </label>
          <input
            id="location"
            name="location"
            className={`${field} mt-3`}
            placeholder="City or district"
          />
        </div>

        <div>
          <label htmlFor="discipline" className="label">
            Enquiry type
          </label>
          <select id="discipline" name="discipline" className={`${field} mt-3`} defaultValue="Architecture">
            <option>Architecture</option>
            <option>Interiors</option>
            <option>Landscape</option>
            <option>Design-Build</option>
            <option>Consultation</option>
            <option>Other</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="label">
          About the project
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className={`${field} mt-3 resize-none`}
          placeholder="Site, programme, rough timeline"
        />
      </div>

      <div className="flex flex-wrap items-center gap-6">
        <Submit />
        {state.message ? (
          <p
            role="status"
            className={`text-caption ${state.status === "error" ? "text-clay" : "text-graphite"}`}
          >
            {state.message}
          </p>
        ) : null}
      </div>
    </form>
  );
}
