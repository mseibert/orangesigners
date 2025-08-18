// Authentifizierungskonfiguration
export const AUTH_CONFIG = {
  // Das Passwort aus der SINGERTOKEN Umgebungsvariable
  // Fallback für Entwicklungsumgebung (sollte in Produktion entfernt werden)
  PASSWORD: process.env.SINGERTOKEN
};

// Debug-Log für Entwicklung (kann später entfernt werden)
if (!process.env.SINGERTOKEN) {
  console.warn('⚠️  SINGERTOKEN Umgebungsvariable nicht gesetzt. Verwende Fallback-Passwort.');
} else {
  console.log('✅ SINGERTOKEN Umgebungsvariable gefunden.');
  console.log('🔍 SINGERTOKEN Wert:', process.env.SINGERTOKEN);
  console.log('🔍 SINGERTOKEN Länge:', process.env.SINGERTOKEN.length);
}
