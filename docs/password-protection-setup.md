# Basic Auth Schutz Setup

Die Orange Singers Website ist jetzt mit einem einfachen HTTP Basic Auth Schutz versehen. Hier erfährst du, wie du ihn einrichtest:

## Umgebungsvariable setzen

1. Erstelle eine `.env` Datei im Root-Verzeichnis des Projekts
2. Füge folgende Zeile hinzu:

```env
SINGERTOKEN=dein-gewünschtes-passwort-hier
```

**Beispiel:**
```env
SINGERTOKEN=orangesingers-2024
```

## Für lokale Entwicklung

Bei der lokalen Entwicklung wird die `.env` Datei automatisch geladen.

## Für Produktion (Vercel)

1. Gehe zu deinem Vercel Dashboard
2. Wähle das Orange Singers Projekt aus
3. Gehe zu "Settings" → "Environment Variables"
4. Füge eine neue Variable hinzu:
   - **Name:** `SINGERTOKEN`
   - **Value:** Dein gewünschtes Passwort
5. Klicke "Save"

## Funktionsweise

- Alle Seiten der Website sind mit HTTP Basic Auth geschützt
- Der Browser zeigt automatisch ein Login-Dialog an
- **Benutzername:** beliebig (kann leer gelassen werden)
- **Passwort:** Der Wert der `SINGERTOKEN` Umgebungsvariable
- Nach erfolgreicher Eingabe wird die Anmeldung für die gesamte Browser-Session gespeichert

## Zugriff teilen

Um anderen Zugriff zu gewähren, teile einfach:
1. Die Website-URL
2. Das Passwort (SINGERTOKEN Wert)

Der Browser wird automatisch nach den Anmeldedaten fragen.

## Sicherheitshinweise

- Wähle ein sicheres Passwort
- HTTP Basic Auth sendet die Anmeldedaten bei jeder Anfrage mit
- Verwende HTTPS in der Produktion
- Die Anmeldung ist nur für die aktuelle Browser-Session gültig

## Temporärer Schutz

Dieser Basic Auth Schutz ist perfekt für temporäre Zugriffskontrolle. Um ihn zu entfernen:
1. Lösche die `src/middleware.ts` Datei
2. Entferne die `SINGERTOKEN` Umgebungsvariable
