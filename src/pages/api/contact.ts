import type { APIRoute } from 'astro';
import { Buffer } from 'node:buffer';

export const POST: APIRoute = async ({ request }) => {
  try {
    const contentType = request.headers.get('content-type') || '';

    let email: string = '';
    let message: string = '';
    let referrerURL: string | undefined = undefined;
    let fromMailAddress: string = 'musik@oranienschule.de';
    let replyToAddress: string = 'musik@oranienschule.de';
    let formMailSubject: string = 'Kontaktformular von Orange Singers Website';
    let emailBodyText: string = 'Dieses Formular wurde hier ausgefüllt: {ReferrerURL}\n\nVon: {SubmitterMailAddress}\nNachricht: {Message}';
    let customerEmailBodyText: string = 'Jemand hat ein Kontaktformular auf der Orange Singers Website hier ausgefüllt: {ReferrerURL}\n\nE-Mail-Adresse: {SubmitterMailAddress}\nNachricht: {Message}\n\nDies ist eine automatische Nachricht von der Orange Singers Website. Falls du das Formular nicht ausgefüllt hast, kannst du diese E-Mail ignorieren. Bei Fragen kontaktiere uns bitte unter musik@oranienschule.de.';

    let attachments: Array<{ filename: string; mimeType: string; base64: string; size: number }> = [];

    if (contentType.includes('multipart/form-data')) {
      const formData = await request.formData();
      email = String(formData.get('email') || '');
      message = String(formData.get('message') || '');
      referrerURL = String(formData.get('referrerURL') || '');
      fromMailAddress = String(formData.get('fromMailAddress') || fromMailAddress);
      replyToAddress = String(formData.get('replyToAddress') || replyToAddress);
      formMailSubject = String(formData.get('formMailSubject') || formMailSubject);
      emailBodyText = String(formData.get('emailBodyText') || emailBodyText);
      customerEmailBodyText = String(formData.get('customerEmailBodyText') || customerEmailBodyText);

      const files = formData.getAll('attachments') as unknown as File[];
      const maxFiles = 1;
      const maxTotalSize = 10 * 1024 * 1024;
      const allowedMimeTypes = new Set([
        'application/pdf',
        'image/jpeg',
        'image/png',
        'image/heic',
        'image/heif',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'application/msword'
      ]);

      if (files && files.length > 0) {
        if (files.length > maxFiles) {
          return new Response(JSON.stringify({
            success: false,
            message: 'Bitte nur eine Datei hochladen'
          }), { status: 400, headers: { 'Content-Type': 'application/json' } });
        }
        const totalSize = files.reduce((sum, f: any) => sum + (f?.size || 0), 0);
        if (totalSize > maxTotalSize) {
          return new Response(JSON.stringify({
            success: false,
            message: 'Die Gesamtdatenmenge der Anhänge überschreitet 10 MB.'
          }), { status: 400, headers: { 'Content-Type': 'application/json' } });
        }

        for (const f of files) {
          const mimeType = (f as any).type || 'application/octet-stream';
          if (!allowedMimeTypes.has(mimeType)) {
            return new Response(JSON.stringify({
              success: false,
              message: 'Ein oder mehrere Dateitypen sind nicht erlaubt.'
            }), { status: 400, headers: { 'Content-Type': 'application/json' } });
          }
          const buf = Buffer.from(new Uint8Array(await (f as any).arrayBuffer()));
          attachments.push({ filename: (f as any).name || 'attachment', mimeType, base64: buf.toString('base64'), size: (f as any).size || 0 });
        }
      }
    } else {
      const body = await request.json();
      email = body?.email;
      message = body?.message;
      referrerURL = body?.referrerURL;
      fromMailAddress = body?.fromMailAddress || fromMailAddress;
      replyToAddress = body?.replyToAddress || replyToAddress;
      formMailSubject = body?.formMailSubject || formMailSubject;
      emailBodyText = body?.emailBodyText || emailBodyText;
      customerEmailBodyText = body?.customerEmailBodyText || customerEmailBodyText;
      attachments = Array.isArray(body?.attachments) ? body.attachments : [];
    }

    // Validierung
    if (!email || !message) {
      return new Response(JSON.stringify({
        success: false,
        message: 'E-Mail-Adresse und Nachricht sind erforderlich'
      }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }

    // E-Mail-Validierung
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return new Response(JSON.stringify({
      success: false,
      message: 'Bitte gib eine gültige E-Mail-Adresse ein'
    }), {
      status: 400,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  // Anhang-Validierung (serverseitig)
  if (attachments && Array.isArray(attachments)) {
    const maxFiles = 1;
    const maxTotalSize = 10 * 1024 * 1024;
    const allowedMimeTypes = new Set([
      'application/pdf',
      'image/jpeg',
      'image/png',
      'image/heic',
      'image/heif',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'application/msword'
    ]);

    if (attachments.length > maxFiles) {
      return new Response(JSON.stringify({
        success: false,
        message: 'Bitte nur eine Datei hochladen'
      }), { status: 400, headers: { 'Content-Type': 'application/json' } });
    }

    const totalSize = attachments.reduce((sum: number, a: any) => sum + (a?.size || 0), 0);
    if (totalSize > maxTotalSize) {
      return new Response(JSON.stringify({
        success: false,
        message: 'Die Gesamtdatenmenge der Anhänge überschreitet 10 MB.'
      }), { status: 400, headers: { 'Content-Type': 'application/json' } });
    }

    for (const a of attachments) {
      if (a?.mimeType && !allowedMimeTypes.has(a.mimeType)) {
        return new Response(JSON.stringify({
          success: false,
          message: 'Ein oder mehrere Dateitypen sind nicht erlaubt.'
        }), { status: 400, headers: { 'Content-Type': 'application/json' } });
      }
    }
  }

    // n8n Webhook URL
    const n8nWebhookUrl = 'https://n8n.apps.seibert-media.net/webhook/3bd24b0f-9d84-4393-ae31-c1588595c99c';

    // E-Mail-Body mit Platzhaltern ersetzen
    const processedEmailBody = emailBodyText
      .replace('{ReferrerURL}', referrerURL || 'Unbekannt')
      .replace('{SubmitterMailAddress}', email)
      .replace('{Message}', message);

    // Customer E-Mail-Body mit Platzhaltern ersetzen
    const processedCustomerEmailBody = customerEmailBodyText
      .replace('{ReferrerURL}', referrerURL || 'Unbekannt')
      .replace('{SubmitterMailAddress}', email)
      .replace('{Message}', message);

    // Daten an n8n senden
    const response = await fetch(n8nWebhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
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
          attachments,
          timestamp: new Date().toISOString(),
          source: 'Orange Singers Website'
        })
    });

    if (!response.ok) {
      throw new Error(`n8n Webhook fehlgeschlagen: ${response.status}`);
    }

    return new Response(JSON.stringify({
      success: true,
      message: 'Deine Nachricht wurde erfolgreich gesendet!'
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });

  } catch (error) {
    console.error('Fehler beim Senden der Nachricht:', error);
    
    return new Response(JSON.stringify({
      success: false,
      message: 'Es gab einen Fehler beim Senden deiner Nachricht. Bitte versuche es später erneut.'
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
};
