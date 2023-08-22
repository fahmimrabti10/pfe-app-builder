export const localeCodes = ["en","fr"]

export const localeMessages = {
}

export const additionalMessages = Object({"fr":[() => Promise.resolve({
  "APPS": {
    "image": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Image"])};fn.source="Image";return fn;})(),
    "title": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Title"])};fn.source="Title";return fn;})(),
    "subTitle": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["SubTitle"])};fn.source="SubTitle";return fn;})(),
    "subtitle1": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Subtitle1"])};fn.source="Subtitle1";return fn;})()
  }
}),() => Promise.resolve({
  "PRODUCTS": {
    "TITLE": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Produit"])};fn.source="Produit";return fn;})(),
    "ID": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Identifiant"])};fn.source="Identifiant";return fn;})(),
    "BODY": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Description"])};fn.source="Description";return fn;})(),
    "USERID": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Identifiant Utilisateurs"])};fn.source="Identifiant Utilisateurs";return fn;})(),
    "DESCRIPTION": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec"])};fn.source="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec";return fn;})(),
    "FILTER": {
      "ALL": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Tout"])};fn.source="Tout";return fn;})(),
      "NEWS": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Actualités"])};fn.source="Actualités";return fn;})(),
      "TECH": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["HighTech"])};fn.source="HighTech";return fn;})()
    },
    "SEARCHPRODUCTS": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Rechercher un produit"])};fn.source="Rechercher un produit";return fn;})(),
    "ADDPRODUCTS": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Ajouter un produit"])};fn.source="Ajouter un produit";return fn;})()
  }
}),() => Promise.resolve({
  "CONFIG": {
    "TITLE": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Configuration"])};fn.source="Configuration";return fn;})(),
    "DESCRIPTION": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Insérez et gérez votre contenu de manière simple et rapide"])};fn.source="Insérez et gérez votre contenu de manière simple et rapide";return fn;})(),
    "USERS": {
      "TITLE": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Utilisateurs"])};fn.source="Utilisateurs";return fn;})(),
      "DESCRIPTION": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, "])};fn.source="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, ";return fn;})()
    },
    "PREFERENCES": {
      "TITLE": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Péférences"])};fn.source="Péférences";return fn;})(),
      "DESCRIPTION": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, "])};fn.source="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ";return fn;})()
    },
    "APPS": {
      "TITLE": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Applications"])};fn.source="Applications";return fn;})(),
      "DESCRIPTION": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Lorem ipsum dolor sit amet, consectetur adipiscing elit. "])};fn.source="Lorem ipsum dolor sit amet, consectetur adipiscing elit. ";return fn;})()
    }
  }
}),() => Promise.resolve({
  "HOME": {
    "WELCOME": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Bienvenue "])};fn.source="Bienvenue ";return fn;})(),
    "DESCRIPTION": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Que voulez vous faire aujourd'hui?"])};fn.source="Que voulez vous faire aujourd'hui?";return fn;})(),
    "BACKTOHOME": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Retour accueil"])};fn.source="Retour accueil";return fn;})()
  }
}),],})

export const resolveNuxtI18nOptions = async (context) => {
  const nuxtI18nOptions = Object({})
  const vueI18nOptionsLoader = async (context) => Object({"fallbackLocale":"en","messages": Object({"en":{
  "MENU": {
    "HOME": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Home"])};fn.source="Home";return fn;})(),
    "CLIENTS": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Cliens"])};fn.source="Cliens";return fn;})(),
    "PRODUCTS": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Products"])};fn.source="Products";return fn;})(),
    "SERVICES": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Services"])};fn.source="Services";return fn;})(),
    "OPTIONS": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Options"])};fn.source="Options";return fn;})(),
    "CONFIGURATION": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Configuration"])};fn.source="Configuration";return fn;})()
  },
  "PAGER": {
    "PAGE": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Pages"])};fn.source="Pages";return fn;})(),
    "RANGE": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Line per page"])};fn.source="Line per page";return fn;})()
  },
  "EDIT": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Modify"])};fn.source="Modify";return fn;})(),
  "ADD": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Add"])};fn.source="Add";return fn;})(),
  "DELETE": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Delete"])};fn.source="Delete";return fn;})(),
  "CANCEL": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Cancel"])};fn.source="Cancel";return fn;})(),
  "SUREDELETE": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Are you sure  you want to delete?"])};fn.source="Are you sure  you want to delete?";return fn;})(),
  "SUREPUBLISH": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Are you sure  you want to publish?"])};fn.source="Are you sure  you want to publish?";return fn;})(),
  "OK": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Ok"])};fn.source="Ok";return fn;})(),
  "NODATA": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["No data found"])};fn.source="No data found";return fn;})(),
  "BACK": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Back"])};fn.source="Back";return fn;})(),
  "REQUIRED": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["This field is required"])};fn.source="This field is required";return fn;})(),
  "EXTRAFIELDS": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Extra fields "])};fn.source="Extra fields ";return fn;})(),
  "CLOSE": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Close"])};fn.source="Close";return fn;})(),
  "SUCCESS": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Successfull operation"])};fn.source="Successfull operation";return fn;})(),
  "LANGUAGESELECT": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Select a Language"])};fn.source="Select a Language";return fn;})(),
  "ERROR_OCCURED": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Error occured"])};fn.source="Error occured";return fn;})(),
  "ERROR_404": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Page not found"])};fn.source="Page not found";return fn;})(),
  "PRODUCTS": {
    "TITLE": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["PRODUCTS"])};fn.source="PRODUCTS";return fn;})(),
    "ID": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Id"])};fn.source="Id";return fn;})(),
    "BODY": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Description"])};fn.source="Description";return fn;})(),
    "USERID": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["User Id"])};fn.source="User Id";return fn;})(),
    "DESCRIPTION": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec"])};fn.source="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec";return fn;})(),
    "FILTER": {
      "ALL": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["All"])};fn.source="All";return fn;})(),
      "NEWS": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["News"])};fn.source="News";return fn;})(),
      "TECH": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["HighTech"])};fn.source="HighTech";return fn;})()
    },
    "SEARCHPRODUCTS": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Search in products"])};fn.source="Search in products";return fn;})(),
    "ADDPRODUCTS": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Add a post"])};fn.source="Add a post";return fn;})()
  },
  "CONFIG": {
    "TITLE": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Configuration"])};fn.source="Configuration";return fn;})(),
    "DESCRIPTION": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Insert and manage your content easly and fastly !"])};fn.source="Insert and manage your content easly and fastly !";return fn;})(),
    "USERS": {
      "TITLE": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Users"])};fn.source="Users";return fn;})(),
      "DESCRIPTION": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, "])};fn.source="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, ";return fn;})()
    },
    "PREFERENCES": {
      "TITLE": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Preferences"])};fn.source="Preferences";return fn;})(),
      "DESCRIPTION": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, "])};fn.source="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ";return fn;})()
    },
    "APPS": {
      "TITLE": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Applications"])};fn.source="Applications";return fn;})(),
      "DESCRIPTION": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Lorem ipsum dolor sit amet, consectetur adipiscing elit. "])};fn.source="Lorem ipsum dolor sit amet, consectetur adipiscing elit. ";return fn;})()
    }
  },
  "HOME": {
    "WELCOME": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Welcome "])};fn.source="Welcome ";return fn;})(),
    "DESCRIPTION": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["What do you want to do today?"])};fn.source="What do you want to do today?";return fn;})(),
    "BACKTOHOME": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Back to home"])};fn.source="Back to home";return fn;})()
  }
},"fr":{
  "MENU": {
    "HOME": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Accueil"])};fn.source="Accueil";return fn;})(),
    "CLIENTS": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Clients"])};fn.source="Clients";return fn;})(),
    "PRODUCTS": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Products"])};fn.source="Products";return fn;})(),
    "SERVICES": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Services"])};fn.source="Services";return fn;})(),
    "OPTIONS": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Options"])};fn.source="Options";return fn;})(),
    "CONFIGURATION": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Configuration"])};fn.source="Configuration";return fn;})()
  },
  "PAGER": {
    "PAGE": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Pages"])};fn.source="Pages";return fn;})(),
    "RANGE": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Ligne par page"])};fn.source="Ligne par page";return fn;})()
  },
  "EDIT": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Modifier"])};fn.source="Modifier";return fn;})(),
  "ADD": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Ajouter"])};fn.source="Ajouter";return fn;})(),
  "DELETE": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Supprimer"])};fn.source="Supprimer";return fn;})(),
  "CANCEL": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Annuler"])};fn.source="Annuler";return fn;})(),
  "SUREDELETE": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Vous êtes sure?"])};fn.source="Vous êtes sure?";return fn;})(),
  "SUREPUBLISH": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Vous confirmer la publication?"])};fn.source="Vous confirmer la publication?";return fn;})(),
  "OK": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Oui"])};fn.source="Oui";return fn;})(),
  "NODATA": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Aucune donnée trouvée"])};fn.source="Aucune donnée trouvée";return fn;})(),
  "BACK": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Retour"])};fn.source="Retour";return fn;})(),
  "REQUIRED": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Ce champs est obligatoire"])};fn.source="Ce champs est obligatoire";return fn;})(),
  "EXTRAFIELDS": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Champs extra"])};fn.source="Champs extra";return fn;})(),
  "CLOSE": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Fermer"])};fn.source="Fermer";return fn;})(),
  "SUCCESS": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Opération effectuée avec succés"])};fn.source="Opération effectuée avec succés";return fn;})(),
  "LANGUAGESELECT": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Selectionez une langue"])};fn.source="Selectionez une langue";return fn;})(),
  "ERROR_OCCURED": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Une erreur est survenue"])};fn.source="Une erreur est survenue";return fn;})(),
  "ERROR_404": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Page introuvable"])};fn.source="Page introuvable";return fn;})()
},}),})
  nuxtI18nOptions.vueI18n = await vueI18nOptionsLoader(context)
  nuxtI18nOptions.locales = ["en","fr"]
  nuxtI18nOptions.defaultLocale = ""
  nuxtI18nOptions.defaultDirection = "ltr"
  nuxtI18nOptions.routesNameSeparator = "___"
  nuxtI18nOptions.trailingSlash = false
  nuxtI18nOptions.defaultLocaleRouteNameSuffix = "default"
  nuxtI18nOptions.strategy = "prefix"
  nuxtI18nOptions.lazy = false
  nuxtI18nOptions.langDir = null
  nuxtI18nOptions.rootRedirect = null
  nuxtI18nOptions.detectBrowserLanguage = Object({"alwaysRedirect":false,"cookieCrossOrigin":false,"cookieDomain":null,"cookieKey":"i18n_redirected","cookieSecure":false,"fallbackLocale":"","redirectOn":"root","useCookie":true})
  nuxtI18nOptions.differentDomains = false
  nuxtI18nOptions.baseUrl = "en"
  nuxtI18nOptions.dynamicRouteParams = true
  nuxtI18nOptions.customRoutes = "page"
  nuxtI18nOptions.pages = Object({})
  nuxtI18nOptions.skipSettingLocaleOnNavigate = false
  nuxtI18nOptions.onBeforeLanguageSwitch = (() => "")
  nuxtI18nOptions.onLanguageSwitched = (() => null)
  nuxtI18nOptions.types = undefined
  nuxtI18nOptions.debug = false
  return nuxtI18nOptions
}

export const nuxtI18nOptionsDefault = Object({vueI18n: undefined,locales: [],defaultLocale: "",defaultDirection: "ltr",routesNameSeparator: "___",trailingSlash: false,defaultLocaleRouteNameSuffix: "default",strategy: "prefix_except_default",lazy: false,langDir: null,rootRedirect: null,detectBrowserLanguage: Object({"alwaysRedirect":false,"cookieCrossOrigin":false,"cookieDomain":null,"cookieKey":"i18n_redirected","cookieSecure":false,"fallbackLocale":"","redirectOn":"root","useCookie":true}),differentDomains: false,baseUrl: "",dynamicRouteParams: false,customRoutes: "page",pages: Object({}),skipSettingLocaleOnNavigate: false,onBeforeLanguageSwitch: (() => ""),onLanguageSwitched: (() => null),types: undefined,debug: false})

export const nuxtI18nInternalOptions = Object({__normalizedLocales: [Object({"code":"en","iso":"en"}),Object({"code":"fr","iso":"fr"})]})
export const NUXT_I18N_MODULE_ID = "@nuxtjs/i18n"
export const isSSG = false
export const isSSR = false
