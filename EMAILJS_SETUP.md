# Configuration EmailJS pour le formulaire de contact

## Étapes pour configurer EmailJS

### 1. Créer un compte EmailJS
1. Allez sur [https://www.emailjs.com/](https://www.emailjs.com/)
2. Créez un compte gratuit
3. Confirmez votre email

### 2. Configurer un service email
1. Dans le dashboard EmailJS, allez dans "Email Services"
2. Cliquez sur "Add New Service"
3. Choisissez votre fournisseur d'email (Gmail recommandé)
4. Suivez les instructions pour connecter votre compte Gmail
5. Notez le **Service ID** généré

### 3. Créer un template d'email
1. Allez dans "Email Templates"
2. Cliquez sur "Create New Template"
3. Utilisez ce template :

**Sujet :**
```
Nouveau message de {{from_name}} - {{subject}}
```

**Contenu :**
```
Nom : {{from_name}}
Email : {{from_email}}
Sujet : {{subject}}

Message :
{{message}}

---
Ce message a été envoyé depuis votre portfolio.
```

4. Notez le **Template ID** généré

### 4. Obtenir la clé publique
1. Allez dans "Account" > "General"
2. Copiez votre **Public Key**

### 5. Configurer l'application
1. Ouvrez le fichier `src/config/emailConfig.js`
2. Remplacez les valeurs par vos vraies clés :

```javascript
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_xxxxxxxxx', // Votre Service ID
  TEMPLATE_ID: 'template_xxxxxxxxx', // Votre Template ID
  PUBLIC_KEY: 'xxxxxxxxxxxxxxxx' // Votre Public Key
};
```

### 6. Tester le formulaire
1. Redémarrez votre application : `npm start`
2. Allez sur la section Contact
3. Remplissez et envoyez le formulaire
4. Vérifiez que l'email arrive dans votre boîte mail

## Fonctionnalités du formulaire

- ✅ Validation en temps réel
- ✅ Messages d'erreur personnalisés
- ✅ Indicateur de chargement
- ✅ Messages de succès/erreur
- ✅ Réinitialisation automatique après envoi
- ✅ Protection contre le spam

## Limites du plan gratuit EmailJS

- 200 emails/mois
- 2 services email
- 2 templates
- Support par email

Pour plus d'emails, vous pouvez passer au plan payant.
