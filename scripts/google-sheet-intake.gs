/**
 * Google Apps Script - enquiry intake for D Innovations.
 *
 * Setup:
 * 1. Create a Google Sheet with a tab named "Enquiries".
 * 2. Put these headers in row 1:
 *    Timestamp | Name | Email | Location | Discipline | Message
 * 3. Extensions → Apps Script. Paste this file. Save.
 * 4. Deploy → New deployment → Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 5. Copy the web app URL into `.env.local` as:
 *    GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/.../exec
 * 6. Redeploy after any script edit (Manage deployments → Edit → New version).
 *
 * Each submission appends a row and emails mjnaseem@gmail.com.
 */

const SHEET_NAME = "Enquiries";
const NOTIFY_EMAIL = "mjnaseem@gmail.com";

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const sheet =
      SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME) ||
      SpreadsheetApp.getActiveSpreadsheet().insertSheet(SHEET_NAME);

    if (sheet.getLastRow() === 0) {
      sheet.appendRow(["Timestamp", "Name", "Email", "Location", "Discipline", "Message"]);
    }

    const timestamp = data.submittedAt || new Date().toISOString();
    const name = String(data.name || "");
    const email = String(data.email || "");
    const location = String(data.location || "");
    const discipline = String(data.discipline || "");
    const message = String(data.message || "");

    sheet.appendRow([timestamp, name, email, location, discipline, message]);

    MailApp.sendEmail({
      to: NOTIFY_EMAIL,
      replyTo: email || NOTIFY_EMAIL,
      subject: `New enquiry - ${name || "Untitled"} (${discipline || "General"})`,
      body: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Location: ${location}`,
        `Enquiry type: ${discipline}`,
        "",
        "Message:",
        message,
        "",
        `Submitted: ${timestamp}`,
      ].join("\n"),
    });

    return ContentService.createTextOutput(JSON.stringify({ ok: true })).setMimeType(
      ContentService.MimeType.JSON,
    );
  } catch (error) {
    return ContentService.createTextOutput(
      JSON.stringify({ ok: false, error: String(error) }),
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService.createTextOutput(
    JSON.stringify({ ok: true, service: "D Innovations enquiry intake" }),
  ).setMimeType(ContentService.MimeType.JSON);
}
