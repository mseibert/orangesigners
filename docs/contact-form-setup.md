# Kontaktformular Setup

Das Kontaktformular sendet Nachrichten über eine Vercel-Backend-Funktion an n8n.

## Konfiguration

### 1. n8n Webhook erstellen

1. Öffne deine n8n-Instanz
2. Erstelle einen neuen Workflow
3. Füge einen "Webhook" Node hinzu
4. Konfiguriere den Webhook für POST-Requests
5. Kopiere die Webhook-URL

### 2. n8n Webhook URL

Die n8n Webhook-URL ist bereits konfiguriert:

```
https://n8n.apps.seibert-media.net/webhook/3bd24b0f-9d84-4393-ae31-c1588595c99c
```

### 3. n8n Workflow konfigurieren

Der Webhook empfängt folgende Daten:

```json
{
  "email": "user@example.com",
  "message": "Nachricht des Benutzers",
  "timestamp": "2024-01-01T12:00:00.000Z",
  "source": "Orange Singers Website"
}
```

### 4. Beispiel n8n Workflow

1. **Webhook Node**: Empfängt die Daten
2. **Email Node**: Sendet E-Mail an gewünschte Adresse
3. **Optional**: Speichern in Datenbank oder CRM

## Lokale Entwicklung

Die n8n Webhook-URL ist bereits im Code konfiguriert und funktioniert sowohl lokal als auch in der Produktion.

## Sicherheit

- Das Formular validiert E-Mail-Adressen
- CSRF-Schutz ist durch Astro's eingebaute Sicherheit gewährleistet
- Rate Limiting sollte in n8n konfiguriert werden
