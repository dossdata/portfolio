// Configuration EmailJS
// Pour configurer EmailJS :
// 1. Allez sur https://www.emailjs.com/
// 2. Créez un compte gratuit
// 3. Créez un service email (Gmail, Outlook, etc.)
// 4. Créez un template d'email
// 5. Remplacez les valeurs ci-dessous par vos vraies clés

export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_smuxk07', // ✅ Correct
  TEMPLATE_ID: 'template_q1h40nq', // ✅ Correct
  PUBLIC_KEY: 'mGVL3uZ1DaV6qCBFE' // ✅ Correct
};

// Template d'email recommandé pour EmailJS :
/*
Sujet : Nouveau message de {{from_name}} - {{subject}}

Contenu :
Nom : {{from_name}}
Email : {{from_email}}
Sujet : {{subject}}

Message :
{{message}}

---
Ce message a été envoyé depuis votre portfolio.
*/
