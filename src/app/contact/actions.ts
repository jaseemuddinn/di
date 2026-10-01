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
  const location = String(formData.get("location") ?? "").trim();
  const discipline = String(formData.get("discipline") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || !email || !message) {
    return { status: "error", message: "Please complete the required fields." };
  }

  if (!EMAIL.test(email)) {
    return { status: "error", message: "That email address does not look right." };
  }

  const endpoint = process.env.GOOGLE_SCRIPT_URL;
  if (!endpoint) {
    console.error("GOOGLE_SCRIPT_URL is not set");
    return {
      status: "error",
      message: "The enquiry form is not connected yet. Please email us directly.",
    };
  }

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        location,
        discipline,
        message,
        submittedAt: new Date().toISOString(),
      }),
      // Apps Script redirects after POST; follow so we still see the final response.
      redirect: "follow",
      cache: "no-store",
    });

    if (!response.ok) {
      console.error("Google Script intake failed", response.status, await response.text());
      return {
        status: "error",
        message: "Something went wrong sending the enquiry. Please try again or email us.",
      };
    }

    // Apps Script may return text/plain or JSON depending on deploy settings.
    const raw = await response.text();
    try {
      const data = JSON.parse(raw) as { ok?: boolean; error?: string };
      if (data.ok === false) {
        console.error("Google Script reported error", data.error);
        return {
          status: "error",
          message: "Something went wrong sending the enquiry. Please try again or email us.",
        };
      }
    } catch {
      // Non-JSON success responses from Apps Script are still treated as OK.
    }

    return {
      status: "success",
      message: "Thank you. We read every enquiry and will reply within a few days.",
    };
  } catch (error) {
    console.error("Enquiry submission failed", error);
    return {
      status: "error",
      message: "Something went wrong sending the enquiry. Please try again or email us.",
    };
  }
}
