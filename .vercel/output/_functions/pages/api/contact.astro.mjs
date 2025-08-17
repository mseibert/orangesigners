export { renderers } from '../../renderers.mjs';

const POST = async ({ request }) => {
  try {
    const body = await request.json();
    const {
      email,
      message,
      referrerURL,
      fromMailAddress = "musik@oranienschule.de",
      replyToAddress = "musik@oranienschule.de",
      formMailSubject = "Kontaktformular von Orange Singers Website",
      emailBodyText = "Dieses Formular wurde hier ausgefüllt: {ReferrerURL}\n\nVon: {SubmitterMailAddress}\nNachricht: {Message}",
      customerEmailBodyText = "Jemand hat ein Kontaktformular auf der Orange Singers Website hier ausgefüllt: {ReferrerURL}\n\nE-Mail-Adresse: {SubmitterMailAddress}\nNachricht: {Message}\n\nDies ist eine automatische Nachricht von der Orange Singers Website. Falls du das Formular nicht ausgefüllt hast, kannst du diese E-Mail ignorieren. Bei Fragen kontaktiere uns bitte unter musik@oranienschule.de."
    } = body;
    if (!email || !message) {
      return new Response(JSON.stringify({
        success: false,
        message: "E-Mail-Adresse und Nachricht sind erforderlich"
      }), {
        status: 400,
        headers: {
          "Content-Type": "application/json"
        }
      });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(JSON.stringify({
        success: false,
        message: "Bitte gib eine gültige E-Mail-Adresse ein"
      }), {
        status: 400,
        headers: {
          "Content-Type": "application/json"
        }
      });
    }
    const n8nWebhookUrl = "https://n8n.apps.seibert-media.net/webhook/3bd24b0f-9d84-4393-ae31-c1588595c99c";
    const processedEmailBody = emailBodyText.replace("{ReferrerURL}", referrerURL || "Unbekannt").replace("{SubmitterMailAddress}", email).replace("{Message}", message);
    const processedCustomerEmailBody = customerEmailBodyText.replace("{ReferrerURL}", referrerURL || "Unbekannt").replace("{SubmitterMailAddress}", email).replace("{Message}", message);
    const response = await fetch(n8nWebhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,
        message,
        referrerURL,
        fromMailAddress,
        replyToAddress,
        formMailSubject,
        emailBodyText: processedEmailBody,
        customerEmailBodyText: processedCustomerEmailBody,
        timestamp: (/* @__PURE__ */ new Date()).toISOString(),
        source: "Orange Singers Website"
      })
    });
    if (!response.ok) {
      throw new Error(`n8n Webhook fehlgeschlagen: ${response.status}`);
    }
    return new Response(JSON.stringify({
      success: true,
      message: "Deine Nachricht wurde erfolgreich gesendet!"
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    });
  } catch (error) {
    console.error("Fehler beim Senden der Nachricht:", error);
    return new Response(JSON.stringify({
      success: false,
      message: "Es gab einen Fehler beim Senden deiner Nachricht. Bitte versuche es später erneut."
    }), {
      status: 500,
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
