"use server";

export type InquiryState = {
  status: "idle" | "success" | "error";
  message?: string;
};

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function submitInquiry(
  _previous: InquiryState,
  formData: FormData,
): Promise<InquiryState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || !email || !message) {
    return { status: "error", message: "Please complete the required fields." };
  }

  if (!EMAIL.test(email)) {
    return { status: "error", message: "That email address does not look right." };
  }

  // NOTE: delivery is not connected yet. Wire an email provider (Resend,
  // Postmark) or a CRM webhook here before this goes live.
  console.info("Inquiry received", { name, email });

  return {
    status: "success",
    message: "Thank you. We read every enquiry and will reply within a few days.",
  };
}
