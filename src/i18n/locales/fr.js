export default {
  genericErrorMessage: 'Une erreur est survenue. Contactez nous.',
  ok: 'OK',
  cancel: 'Annuler',
  noEventsNear: {
    zero: 'Pas d\'evénement dans votre zone',
    one: 'Evénement proche à été trouvé mais il ne correspond pas a cette categorie',
    other: 'Il existe {{count}} Evénement proche à été trouvé mais il ne correspond pas a cette categorie',
  },
  placeTypes: {
    'house': 'Maison',
    'outdoors': 'Exterieur',
    'rooftop': 'Rooftop',
    'shop': 'Shop',
    'castle': 'Chateau',
    'club': 'Club',
    'bar': 'Bar',
    'city': 'Ville',
    'museum': 'Musée',
    'boat': 'Boat',
    'gallery': 'Galerie',
  },
  categories: {
    party: 'Soirée',
    culture: 'Culture',
    work: 'Work &\n Business',
    sport: 'Sport',
    food: 'Food & Drink',
    wellness: 'Bien être',
    excursion: 'Excursion',
    fashion: 'Mode',
    gaming: 'Game',
    happyHour: 'Happy Hours',
  },
  event: {
    free: 'Gratuit',
    from: {
      zero: 'Gratuit',
      other: 'Jusqu\'à {{count}}',
    },
    live: 'Live',
  },
  eventsMapScreen: {
    title: 'Evénement proches de vous',
    viewEvent: 'Voir Evénement',
    cannotLocate: 'Oups! Il semble que ta localization soit inactivée.',
  },
  loginScreen: {
    email: 'E-mail',
    password: 'Mot de Passe',
    login: 'Se connecter',
    showPass: 'Montrer mot de passe',
    recover: 'Recuperer mot de passe',
    fbLogin: 'Se connecter avec Facebook',
    googleLogin: 'Se connecter avec Google',
    signUp: 'S\'enregistrer',
    error: 'Erreur',
    invalidPassword: 'E-mail ou Mot de Passe invalide',
    contactSupport: 'Essaie de nouveau ou contacte nous',
    disabledAccount: 'Compte inactif',
    disabledAccountMsg: 'Ton compte à été désactivé. contacte nous pour plus d\'informations',
  },
  recoverPassScreen: {
    headerTitle: 'Mot de passe oublié',
    mainLabel: 'Tu as oublié ton mot de passe?',
    hint: 'Un nouveau mot de passe à été envoyé à:',
    placeholder: 'Rentre ton E-mail',
    button: 'Envoyer',
    modalTitle: 'Informations envoyées',
    modalMessage1: 'Nous avons envoyé les informations pour changer ton mot de passe à',
    modalMessage2: ', Regarde dans tes spams et ta corbeille au cas où',
    modalButton: 'Okay',
  },
  signUpScreen: {
    headerTitle: 'S\'enregistrer',
    title: 'S\'ENREGISTRER',
    pro: 'Professionel',
    personal: 'Personel',
    taxId: 'SIRET',
    organization: 'Nom de l\'entreprise',
    first_name: 'Prénom',
    last_name: 'Nom',
    email: 'E-mail',
    password: 'Mot de Passe',
    passwordHint: 'Mot de Passe (6 caract. min)',
    city: 'Ville',
    username: 'Pseudo',
    birthYear: 'Année de naissance', //@todo Delete
    birthDate: 'Jour de naissance',
    modalTitle: 'Q\'elle année es tu né?',
    modalButton: 'C\'est bon',
    submit: 'Enregistrer',
    modalErrorTitle: 'Champs manquants',
    modalErrorMsg: 'Remplie tous les champs',
    modalErrorButton: 'Okay',
    weakPassword: 'Le mot de passe doit être d\'au moins 6 caracteres',
    existingAccount: 'Il existe déjà un compte associé à \'{{email}}\'',
  },
  mainScreen: {
    permissionTitle: 'Nous avons besoin d\'aide pour te trouver',
    permissionMessage: 'Autorise la localization pour Wattz dans les paramêtre de ton téléphone',
    permissionButton: 'Vas dans configuration',
    buttonFilter: 'Filtrer',
  },
  filterScreen: {
    headerTitle: 'Filtres',
    maxDist: 'Distance Maximum',
    priceRange: 'Rang de prix',
    placeType: 'Type de lieux',
    all: 'Tous',
    date: 'Date',
    filter: 'Appliquer Filtres',
    clear: 'Réinitier les Filters',
    free: 'Gratuit',
  },
  eventScreen: {
    headerTitle: 'Evénément',
    edit: 'Modifier',
    suspend: 'Suspendre',
    organizes: 'Organisateur',
    attendees: 'Ils y vont',
    contribution: 'Contribution',
    prices: 'Prix',
    buyTicket: 'Acheter un ticket',
    request: 'Demander',
    attend: 'En attente',
    description: 'Description',
    free: 'Gratuit',
    price: '{{price}}',
    soldOut: 'Complet',
    going: 'Ticket Validé',
    ticketTitle: 'Entrée',
    ticketDate: 'Acheté le {{date}}',
    freeTicketDate: 'Réservé le {{date}}',
    freePass: 'Entrée Gratuite',
    cancel: 'Annuler',
    canceled: 'Annulé',
    warning: 'Attention',
    suspend1: 'Tu es sur le point d\'annuler un evenement et de rembourser tous les tickets vendu',
    suspend2: 'Cette action n\'est pas reversible',
  },
  mapScreen: {
    getDirections: 'Obtenir l\'adresse',
    getDirectionsWith: 'Obtenir l\'adresse avec',
    cancel: 'Annuler',
  },
  profileScreen: {
    title: 'Mon Profil',
    title2: 'Profil d\'utilisateur',
    tab: 'Profil',
    edit: 'Modifier',
    earth: 'Planète Terre',
    tabActivity: 'Activités',
    tabGallery: 'Photos',
    tabEvents: 'Evénements',
    going: 'Ticket Validé',
    eventEmptyState: 'tu n\'as pas encore créé d\'événements.',
    galleryEmptyState: 'tu n\'as pas encore ajouté de photos',
    shareStatus: 'A quoi penses tu ?',
    event: {
      zero: 'Evénement',
      one: 'Evénement',
      other: 'Evénements',
    },
    followers: {
      zero: 'Followers',
      one: 'Follower',
      other: 'Followers',
    },
    following: {
      zero: 'Following',
      one: 'Following',
      other: 'Following',
    },
    myEvents: 'Mes Evénements',
  },
  profileEditScreen: {
    title: 'Modifier mon Profil',
    changeImage: 'Changer l\'Image',
    changeProfilePic: 'Changer la Photo de Profil',
    changeCover: 'Changer la Photo de Couverture',
    cancel: 'Annuler',
    save: 'Okay',
    taxId: 'SIRET',
    organization: 'Nom de l\'entreprise',
    first_name: 'Prénom',
    last_name: 'Nom',
    email: 'E-mail',
    password: 'Mot de Passe',
    passwordHint: 'Mot de Passe (6 caract. min)',
    currentCity: 'Ville',
    occupation: 'Profession',
    username: 'Pseudo',
    birthDate: 'Date de Naissance',
    modalTitle: 'Quelle est ton année de naissance?',
    modalButton: 'Okay',
    fromTemplate: 'Images Préchargé',
    address: 'Adresse',
    postal: 'Code Postale',
    fromCamera: 'Depuis l\'Appareil Photo',
    fromGallery: 'Depuis la Galerie',
  },
  shareStatusScreen: {
    title: 'Publier un Statut',
    publish: 'Publier',
    shareStatus: 'A quoi penses tu ?',
    addImage: 'Ajouter une Image',
    fromCamera: 'Depuis l\'Appareil Photo',
    fromGallery: 'Depuis la Galerie',
    cancel: 'Annuler',
  },
  chatScreen: {
    tab: 'Chat',
    title: 'Chat',
    search: 'Rechercher',
    startConversation: 'Commencer une Conversation',
    defaultMsg: 'Il n\'y a pas de Messages',
    loading: 'Chargement',
  },
  newMessageScreen: {
    title: 'Nouveau Message',
    next: 'Suivant',
    search: 'Rechercher',
    emptyState: 'Vous devez ajouter des followers avant de commencer une conversation',
  },
  configScreen: {
    title: 'Configuration',
    editProfile: 'Modifier le Profil',
    editSettings: 'Modifier les Paramètres',
    payment: 'Payment',
    help: 'Aide',
    terms: 'Conditions Générales',
    logout: 'Se Déconnecter',
    confirmLogout: 'Êtes-vous certain de vouloir vous déconnecter?'
  },
  notificationScreen: {
    title: 'Notifications',
    tab: 'Notifications',
  },
  createEventScreen: {
    title: 'Créer un Evénement',
    title1: 'Nouvel Evénement',
    editTitle: 'Modifier Evévement',
    public: 'Public',
    private: 'Privé',
    secret: 'Secret',
    changeImage: 'Modifier l\' Image',
    eventImage: 'Image de l\'Evénement',
    eventInfo: 'Information de l\'Evénement',
    name: 'Nom',
    description: 'Description',
    address: 'Adresse',
    postal: 'Code Postal',
    placeType: 'Type de Lieux',
    selectCats: 'Choisis jusqu\'à deux categories',
    startDate: 'Date de début',
    endDate: 'Date de Fin',
    contribution: 'Contribution : ({{qty}})',
    addContrib: 'Ajouter une Contribution',
    spots: 'Nombre d\'Entrées',
    prices: 'Tarifs (max. 5)',
    free: 'Gratuit',
    create: 'Créer un Evénement',
    save: 'Sauvegarder',
    coverImageTitle: 'Image de l\'Evénement',
    fromCamera: 'Depuis l\'Appareil Photo',
    fromGallery: 'Depuis la Galerie',
    cancel: 'Annuler',
    publicHint: 'Tous le monde peut participer',
    privateHint: 'Tous le monde peut postuler mais il faaut attendre la reponse de l\'organisateur',
    secretHint: 'Seulement les personnes invitées pourront participer',
    requirements: 'Pour pouvoir créer des événements payant il faut',
    uploadId: 'Charge une photo de ta carte d\'identité',
    completeProfile: 'Complète ton profil',
    idVerification: 'Merci de nous avoir envoyé ta carte d\'identité. La vérification peut prendre jusqu\'à deux jours. Après ça tu pourras créer des Evénements payants.',
    stripeVerification: 'Ton identité à été validé mais tu n\'as pas l\'autorization de créer des événements payants. Contacte nous pour plus de details.',
    ok: 'OK',
    endDateError: 'La date de fin doit être ultérieure à la date de début',
    delete: 'Supprimer',
    offer: 'Nom de l\'entrée',
    priceHint: 'Tu receveras {{net}}€',
    minPrice: 'Le prix de doit être au minimum de 2€',
    qty: 'Quantité',
  },
  editEventScreen: {
    title: 'Modifié Evénement',
    save: 'Sauvegarder',
  },
  idUploadScreen: {
    title: 'Créer un Evénement',
    title1: 'Nouvel Evénement',
    idValidation: 'Nous avons besoin de validé ton identité.',
    why: 'Afin de pouvoir te payer, nous avons besoin d\'une photo de ta carte d\'identité.',
    message: 'Peux tu nous envoyer une photo de ta carte d\'identié.',
    btnTakePic: 'Charger Photo',
    btnSend: 'Envoyer',
    idPhoto: 'Photo de la carte d\'identité',
    fromCamera: 'Depuis l\'Appareil Photo',
    fromGallery: 'Depuis la Galerie',
    cancel: 'Annuler',
  },
  contributionScreen: {
    title: 'Ajouter une Contribution',
    title1: 'Nouvel Evénement',
    placeholder: 'exemple. 1 Bouteille de Rhum',
    qty: 'Quantité',
    btnAdd: 'Ajouter Contribution',
    btnSave: 'Sauvergarder',
    delete: 'Supprimer',
  },
  settingsScreen: {
    title: 'Changer les Paramètres',
    currentPass: 'Mot de Passe Actuel',
    newPass: 'Nouveau Mot de Passe',
    passwordHint: 'Nouveau Mot de Passe (6 caract. min)',
    notifications: 'Notifications',
    notifAttend: 'Ces personnes participent',
    notifFollower: 'Nouveau follower',
    notifMessage: 'Nouveau message',
    activity: 'Updates from people I follow',
    updatePass: 'Update Password',
    errorTitle: 'Il existe une Erreur',
    passError: 'Ton Mot de Passe Actuel ne correspond pas à celui écrit',
    ok: 'OK',
  },
  paymentScreen: {
    title: 'Paiement',
    methods: 'Methode de Paiement',
    payouts: 'Paiements',
    add: 'Ajouter une Methode de Paiement',
    addBank: 'Ajouter un compte bancaire',
    cardNumber: 'Numero de Carte',
    expDate: 'Date d\'expiration',
    confirmDeletion: 'Confirme la suppression de la carte',
    confirm: 'Confirmer',
    cancel: 'Annuler',
  },
  checkoutScreen: {
    title: 'Paiement',
    confirm: 'Confirmer',
    change: 'Changer',
    addCard: 'Ajouter une Methode de Paiement',
  },
  checkout: {
    noTicketsLeft: 'Malheureusement tous les tickets ont été vendu. Essaie d\'acheter un autre type de ticket.',
  },
  requestsScreen: {
    title: 'En attente d\'approbation',
    subTitle: '{{count}} En attente d\'approbation',
    confirm: 'Confirmer',
  },
  addCardScreen: {
    title: 'Ajouter un Carte de Crédit',
    cardNumber: 'Numéro de Carte',
    expDate: 'Date d\'expiration',
    cvc: 'CVC',
  },
  addBankScreen: {
    title: 'Add Bank',
    accountNumber: 'Numéro de compte',
    country: 'Pays',
  },
  notificationsScreen: {
    empty: 'Pas de nouvelles notifications',
  },
  conversationScreen: {
    title: 'Nouvelle Conversation',
    groupName: 'Donne un nom a ce nouveau groupe',
  },
  searchScreen: {
    nearby: 'Proche',
    search: 'Rechercher',
  },
  userFollowersScreen: {
    title: 'Followers',
  },
  userFollowingScreen: {
    title: 'Following',
  },
  eventRatingScreen:{
    title: 'Evaluation de l\'Evénement',
    attended: {
      zero: 'Aujourd\'hui',
      one: 'Hier',
      seven: 'La semaine dernière',
      other: 'Il y a quelques jours',
    },
    fromUser: 'L\'Evénement de {{name}}.',
    how: 'Combien tu notes cet Evénement?',
    save: 'Sauvegarder'
  }
}
