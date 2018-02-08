const admin = require('firebase-admin');
const settings = {
  "algolia": {
    "apiKey": "10c0596a79389d1e359ea13707208c4a",
    "applicationId": "M90FC3UY18",
    "index": "oMarks2"
  },
  "dashboard": [{
    "_highlightResult": {
      "excerpt": {
        "matchLevel": "none",
        "value": "Google"
      },
      "given_title": {
        "matchLevel": "none",
        "value": "Google"
      },
      "tags": {
        "matchLevel": "none",
        "value": "omarks"
      }
    },
    "dashboard_ranking": 0,
    "excerpt": "Google",
    "favorite": true,
    "given_title": "Google",
    "given_url": "http://google.it",
    "has_image": 1,
    "image": {
      "src": "http://www.google.com.hk/doodle4google/images/splashes/featured.png"
    },
    "image_src": "https://yt3.ggpht.com/-v0soe-ievYE/AAAAAAAAAAI/AAAAAAAAAAA/OixOH_h84Po/s900-c-k-no-mo-rj-c0xffffff/photo.jpg",
    "objectID": "697458581",
    "tags": "omarks",
    "time_read": 133
  }, {
    "_highlightResult": {
      "excerpt": {
        "matchLevel": "none",
        "value": ""
      },
      "given_title": {
        "matchLevel": "none",
        "value": "WhatsApp Web"
      },
      "tags": {
        "matchLevel": "none",
        "value": "app, omarks"
      }
    },
    "added_at": "November 02, 2016 at 05:17PM",
    "dashboard_ranking": 1,
    "excerpt": "",
    "favorite": 1,
    "given_title": "WhatsApp Web",
    "given_url": "https://web.whatsapp.com/",
    "has_image": 1,
    "image": {
      "src": "https://i.kinja-img.com/gawker-media/image/upload/s--HLRs32ei--/c_scale,fl_progressive,q_80,w_800/zregrsplsrpmbocfr3nh.jpg"
    },
    "objectID": "524677340",
    "tags": "app, omarks",
    "time_read": 43
  }, {
    "_highlightResult": {
      "excerpt": {
        "matchLevel": "none",
        "value": "Already on LinkedIn? Sign in"
      },
      "given_title": {
        "matchLevel": "none",
        "value": "Welcome! | LinkedIn"
      },
      "tags": {
        "matchLevel": "none",
        "value": "omarks, social"
      }
    },
    "dashboard_ranking": 2,
    "excerpt": "Already on LinkedIn? Sign in",
    "favorite": 1,
    "given_title": "Welcome! | LinkedIn",
    "given_url": "https://www.linkedin.com/",
    "has_image": 1,
    "image": {
      "src": "http://www.lastampa.it/rf/image_lowres/Pub/p4/2017/08/14/Tecnologia/Foto/RitagliWeb/LINKEDIN-kQZB-U11004028597497lwC-1024x576%40LaStampa.it.jpg"
    },
    "image_src": "http://downloadicons.net/sites/default/files/linkedin-logo-icon-65542.png",
    "objectID": "647853681",
    "tags": "omarks, social",
    "time_read": 33
  }, {
    "_highlightResult": {
      "excerpt": {
        "matchLevel": "none",
        "value": "desktop includes2013/SSI/notification/global.json <span class=\"notification\"></span> /includes2013/SSI/utility/ajax_ssi_loader."
      },
      "given_title": {
        "matchLevel": "none",
        "value": "Corriere della Sera"
      },
      "tags": {
        "matchLevel": "none",
        "value": "news, omarks"
      }
    },
    "dashboard_ranking": 3,
    "excerpt": "desktop includes2013/SSI/notification/global.json <span class=\"notification\"></span> /includes2013/SSI/utility/ajax_ssi_loader.",
    "favorite": 1,
    "given_title": "Corriere della Sera",
    "given_url": "http://www.corriere.it/",
    "has_image": 1,
    "image": {
      "src": "http://www.rcsmediagroup.it/en/wp-content/uploads/sites/2/img/2014-02/Corriere-della-Sera-Compo-472x300.png"
    },
    "objectID": "405574410",
    "tags": "news, omarks",
    "time_read": 27
  }, {
    "_highlightResult": {
      "excerpt": {
        "matchLevel": "none",
        "value": "Is feedly blocked? Feedly is not able to load. It is probably because one of your extensions is blocking it. If you run Adblock, HTTPSEverywhere, Awesome screenshot etc.. please make sure that feedly.com is white listed.Ask a question"
      },
      "given_title": {
        "matchLevel": "none",
        "value": "Feedly"
      },
      "tags": {
        "matchLevel": "none",
        "value": "omarks"
      }
    },
    "added_at": "September 02, 2017 at 08:01PM",
    "dashboard_ranking": 4,
    "excerpt": "Is feedly blocked? Feedly is not able to load. It is probably because one of your extensions is blocking it. If you run Adblock, HTTPSEverywhere, Awesome screenshot etc.. please make sure that feedly.com is white listed.Ask a question",
    "favorite": true,
    "given_title": "Feedly",
    "given_url": "https://feedly.com/i/my",
    "has_image": 1,
    "image": {
      "src": "https://s3.feedly.com/img/oops.png"
    },
    "objectID": "100176141",
    "tags": "omarks",
    "time_read": 26
  }, {
    "_highlightResult": {
      "excerpt": {
        "matchLevel": "none",
        "value": "You've used the Pocket button to save a page from Pocket's website! Now that you know how to save to Pocket, it's time to venture out and build your own personal reading list."
      },
      "given_title": {
        "matchLevel": "none",
        "value": "Pocket: Il mio elenco"
      },
      "tags": {
        "matchLevel": "none",
        "value": "omarks, reading"
      }
    },
    "dashboard_ranking": 5,
    "excerpt": "You've used the Pocket button to save a page from Pocket's website! Now that you know how to save to Pocket, it's time to venture out and build your own personal reading list.",
    "favorite": 1,
    "given_title": "Pocket: Il mio elenco",
    "given_url": "https://getpocket.com/a/queue/",
    "has_image": 1,
    "image": {
      "src": "https://s3.amazonaws.com/pocket-general-images/welcome/Header_Image_ArticleView.jpg"
    },
    "objectID": "288113792",
    "tags": "omarks, reading",
    "time_read": 18
  }, {
    "_highlightResult": {
      "excerpt": {
        "matchLevel": "none",
        "value": "Log in with Google Account  Log in with Google Account  or ..."
      },
      "given_title": {
        "matchLevel": "none",
        "value": "Todoist"
      },
      "tags": {
        "matchLevel": "none",
        "value": "productivity, omarks"
      }
    },
    "dashboard_ranking": 6,
    "excerpt": "Log in with Google Account  Log in with Google Account  or ...",
    "favorite": 1,
    "given_title": "Todoist",
    "given_url": "https://todoist.com/app?v=189#agenda%2Foverdue%2C%207%20days",
    "has_image": 0,
    "objectID": "647853691",
    "tags": "productivity, omarks",
    "time_read": 17
  }, {
    "_highlightResult": {
      "excerpt": {
        "matchLevel": "none",
        "value": "Please enable cookies in your browser preferences before signing in.  Gene Wilder-One of the truly great talents of our time. He blessed every film we did with his magic & he blessed me with his friendship."
      },
      "given_title": {
        "matchLevel": "none",
        "value": "Twitter"
      },
      "tags": {
        "matchLevel": "none",
        "value": "omarks, social, reading"
      }
    },
    "dashboard_ranking": 7,
    "excerpt": "Please enable cookies in your browser preferences before signing in.  Gene Wilder-One of the truly great talents of our time. He blessed every film we did with his magic & he blessed me with his friendship.",
    "favorite": 1,
    "given_title": "Twitter",
    "given_url": "https://twitter.com/",
    "has_image": 1,
    "image": {
      "src": "http://img.freepik.com/free-photo/pile-of-3d-twitter-logos_1379-879.jpg?size=338&ext=jpg"
    },
    "objectID": "288113762",
    "tags": "omarks, social, reading",
    "time_read": 16
  }, {
    "_highlightResult": {
      "excerpt": {
        "matchLevel": "none",
        "value": "Aggiornamenti in tempo reale. Video e foto. Approfondimenti dal tuo quotidiano, sul tuo cellulare  Video Renzi, l'invito al presidente dell'Anpi - Renzi: \"Si vota nel 2018 comunque vada? Sì\""
      },
      "given_title": {
        "matchLevel": "none",
        "value": "La Repubblica.it - News in tempo reale - Le notizie e i video di politica, "
      },
      "tags": {
        "matchLevel": "none",
        "value": "news, omarks"
      }
    },
    "dashboard_ranking": 8,
    "excerpt": "Aggiornamenti in tempo reale. Video e foto. Approfondimenti dal tuo quotidiano, sul tuo cellulare  Video Renzi, l'invito al presidente dell'Anpi - Renzi: \"Si vota nel 2018 comunque vada? Sì\"",
    "favorite": 1,
    "given_title": "La Repubblica.it - News in tempo reale - Le notizie e i video di politica, ",
    "given_url": "http://www.repubblica.it/",
    "has_image": 1,
    "image": {
      "src": "http://odg.roma.it/wp-content/uploads/2014/06/La-Repubblica-478x340.jpg"
    },
    "objectID": "405574400",
    "tags": "news, omarks",
    "time_read": 15
  }, {
    "_highlightResult": {
      "excerpt": {
        "matchLevel": "none",
        "value": "Your browser was unable to load all of Trello's resources. They may have been blocked by your firewall, proxy or browser configuration. Press Ctrl+F5 or Ctrl+Shift+R to have your browser try again and if that doesn't work, check out our troubleshooting guide."
      },
      "given_title": {
        "matchLevel": "none",
        "value": "myMasterBoard | Trello"
      },
      "tags": {
        "matchLevel": "none",
        "value": "productivity, omarks"
      }
    },
    "dashboard_ranking": 9,
    "excerpt": "Your browser was unable to load all of Trello's resources. They may have been blocked by your firewall, proxy or browser configuration. Press Ctrl+F5 or Ctrl+Shift+R to have your browser try again and if that doesn't work, check out our troubleshooting guide.",
    "favorite": 1,
    "given_title": "myMasterBoard | Trello",
    "given_url": "https://trello.com/b/i6fFmGod/mymasterboard",
    "has_image": 1,
    "image": {
      "src": "http://az616578.vo.msecnd.net/files/2016/05/13/63598765169715206349953939_Organizing-your-Photos-into-Themes.jpg"
    },
    "image_src": "http://az616578.vo.msecnd.net/files/2016/05/13/63598765169715206349953939_Organizing-your-Photos-into-Themes.jpg",
    "objectID": "288113782",
    "tags": "productivity, omarks",
    "time_read": 14
  }, {
    "_highlightResult": {
      "excerpt": {
        "matchLevel": "none",
        "value": ""
      },
      "given_title": {
        "matchLevel": "none",
        "value": "Deezer"
      },
      "tags": {
        "matchLevel": "none",
        "value": "multimedia, omarks"
      }
    },
    "dashboard_ranking": 10,
    "excerpt": "",
    "favorite": 1,
    "given_title": "Deezer",
    "given_url": "http://www.deezer.com/",
    "has_image": 1,
    "image": {
      "src": "https://radd.it/img/music.jpg"
    },
    "objectID": "405573660",
    "tags": "multimedia, omarks",
    "time_read": 13
  }, {
    "_highlightResult": {
      "given_title": {
        "matchLevel": "none",
        "value": "YouTube"
      },
      "tags": {
        "matchLevel": "none",
        "value": "google, "
      }
    },
    "dashboard_ranking": 11,
    "favorite": true,
    "given_title": "YouTube",
    "given_url": "https://www.youtube.com/",
    "has_image": 1,
    "image": {
      "src": "http://www.textalibrarian.com/mobileref/wp-content/uploads/2013/08/Video.jpg"
    },
    "objectID": "1062438822",
    "tags": "google, ",
    "time_read": 13
  }, {
    "_highlightResult": {
      "excerpt": {
        "matchLevel": "none",
        "value": ""
      },
      "given_title": {
        "matchLevel": "none",
        "value": "Yahoo Mail"
      },
      "tags": {
        "matchLevel": "none",
        "value": "omarks, productivity"
      }
    },
    "added_at": "November 25, 2017 at 10:05AM",
    "dashboard_ranking": 12,
    "excerpt": "",
    "favorite": true,
    "given_title": "Yahoo Mail",
    "given_url": "https://mail.yahoo.com",
    "has_image": 0,
    "image": {
      "src": "https://i.pinimg.com/736x/ef/2b/9c/ef2b9cde22e5551d2371c84333d26e12--flat-design-snail-mail.jpg"
    },
    "objectID": "620312470",
    "tags": "omarks, productivity",
    "time_read": 11
  }, {
    "_highlightResult": {
      "excerpt": {
        "matchLevel": "none",
        "value": "E' atteso per domani il verdetto definitivo della FIGC in merito alla squalifica di Armando Izzo. Il Genoa, ed i suoi fantallenatori, sapranno quindi entro poche ore se potranno riavere o meno, già dopo la sosta, a disposizione l'ottimo difensore rossoblu."
      },
      "given_title": {
        "matchLevel": "none",
        "value": "Fantagazzetta.com - Notizie, voti, assist, gol, pagelle, statistiche del Campionato Serie A in tempo reale"
      },
      "tags": {
        "matchLevel": "none",
        "value": "fantacalcio, omarks"
      }
    },
    "added_at": "September 21, 2017 at 09:42PM",
    "dashboard_ranking": 13,
    "excerpt": "E' atteso per domani il verdetto definitivo della FIGC in merito alla squalifica di Armando Izzo. Il Genoa, ed i suoi fantallenatori, sapranno quindi entro poche ore se potranno riavere o meno, già dopo la sosta, a disposizione l'ottimo difensore rossoblu.",
    "favorite": 1,
    "given_title": "Fantagazzetta.com - Notizie, voti, assist, gol, pagelle, statistiche del Campionato Serie A in tempo reale",
    "given_url": "https://www.fantagazzetta.com",
    "has_image": 1,
    "image": {
      "src": "https://content.fantagazzetta.com/web/img/strip_alvin.png"
    },
    "objectID": "116518181",
    "tags": "fantacalcio, omarks",
    "time_read": 11
  }, {
    "_highlightResult": {
      "excerpt": {
        "matchLevel": "none",
        "value": ""
      },
      "given_title": {
        "matchLevel": "none",
        "value": "Google Mail"
      },
      "tags": {
        "matchLevel": "none",
        "value": "omarks, productivity"
      }
    },
    "added_at": "November 25, 2017 at 10:03AM",
    "dashboard_ranking": 14,
    "excerpt": "",
    "favorite": true,
    "given_title": "Google Mail",
    "given_url": "https://inbox.google.com/u/0/",
    "has_image": 0,
    "image": {
      "src": "https://i.pinimg.com/736x/ef/2b/9c/ef2b9cde22e5551d2371c84333d26e12--flat-design-snail-mail.jpg"
    },
    "objectID": "1142932032",
    "tags": "omarks, productivity",
    "time_read": 10
  }, {
    "_highlightResult": {
      "excerpt": {
        "matchLevel": "none",
        "value": "Google contacts"
      },
      "given_title": {
        "matchLevel": "none",
        "value": "Contacts"
      },
      "tags": {
        "matchLevel": "none",
        "value": "omarks"
      }
    },
    "dashboard_ranking": 15,
    "excerpt": "Google contacts",
    "favorite": true,
    "given_title": "Contacts",
    "given_url": "https://contacts.google.com/",
    "has_image": 1,
    "image": {
      "src": "https://www.incimages.com/uploaded_files/image/970x450/contacts_1725_810_21176.jpg"
    },
    "image_src": "https://www.incimages.com/uploaded_files/image/970x450/contacts_1725_810_21176.jpg",
    "objectID": "530867720",
    "tags": "omarks",
    "time_read": 9
  }, {
    "_highlightResult": {
      "excerpt": {
        "matchLevel": "none",
        "value": "Google Maps"
      },
      "given_title": {
        "matchLevel": "none",
        "value": "Maps"
      },
      "tags": {
        "matchLevel": "none",
        "value": "omarks"
      }
    },
    "dashboard_ranking": 16,
    "excerpt": "Google Maps",
    "favorite": true,
    "given_title": "Maps",
    "given_url": "https://www.google.it/maps",
    "has_image": 1,
    "image": {
      "src": "http://www.harvard.edu/sites/default/files/content/harvard-map-google.jpg"
    },
    "image_src": "http://www.harvard.edu/sites/default/files/content/harvard-map-google.jpg",
    "objectID": "530867680",
    "tags": "omarks",
    "time_read": 9
  }, {
    "_highlightResult": {
      "excerpt": {
        "matchLevel": "none",
        "value": "Your browser's not quite ready for our site, download one of the compatible browsers below."
      },
      "given_title": {
        "matchLevel": "none",
        "value": "Browser Requirements : Groove"
      },
      "tags": {
        "matchLevel": "none",
        "value": "multimedia, omarks"
      }
    },
    "added_at": "September 16, 2017 at 06:05PM",
    "dashboard_ranking": 17,
    "excerpt": "Your browser's not quite ready for our site, download one of the compatible browsers below.",
    "favorite": 1,
    "given_title": "Browser Requirements : Groove",
    "given_url": "https://music.microsoft.com/collection?target=web",
    "has_image": 0,
    "image": {
      "src": ""
    },
    "objectID": "113743361",
    "tags": "multimedia, omarks",
    "time_read": 8
  }, {
    "_highlightResult": {
      "excerpt": {
        "matchLevel": "none",
        "value": ""
      },
      "given_title": {
        "matchLevel": "none",
        "value": "Flipboard"
      },
      "tags": {
        "matchLevel": "none",
        "value": "news, omarks, social"
      }
    },
    "added_at": "September 30, 2016 at 09:13AM",
    "dashboard_ranking": 18,
    "excerpt": "",
    "favorite": 1,
    "given_title": "Flipboard",
    "given_url": "http://flipboard.com/",
    "has_image": 0,
    "image": {
      "src": ""
    },
    "objectID": "711008941",
    "tags": "news, omarks, social",
    "time_read": 7
  }, {
    "_highlightResult": {
      "given_title": {
        "matchLevel": "none",
        "value": "Outlook Mail"
      },
      "tags": {
        "matchLevel": "none",
        "value": "omarks, productivity"
      }
    },
    "dashboard_ranking": 19,
    "favorite": true,
    "given_title": "Outlook Mail",
    "given_url": "https://outlook.live.com/mail/#/inbox",
    "has_image": 1,
    "image": {
      "src": "https://i.pinimg.com/736x/ef/2b/9c/ef2b9cde22e5551d2371c84333d26e12--flat-design-snail-mail.jpg"
    },
    "objectID": "620314220",
    "tags": "omarks, productivity",
    "time_read": 7
  }, {
    "_highlightResult": {
      "excerpt": {
        "matchLevel": "none",
        "value": "Flickr"
      },
      "given_title": {
        "matchLevel": "none",
        "value": "Flikr"
      },
      "tags": {
        "matchLevel": "none",
        "value": "omarks"
      }
    },
    "dashboard_ranking": 20,
    "excerpt": "Flickr",
    "favorite": true,
    "given_title": "Flikr",
    "given_url": "https://www.flickr.com/cameraroll",
    "has_image": 1,
    "image": {
      "src": "https://nicolemg14.files.wordpress.com/2014/03/facebook-shared-photo-albums1.jpg"
    },
    "image_src": "https://nicolemg14.files.wordpress.com/2014/03/facebook-shared-photo-albums1.jpg",
    "objectID": "530867780",
    "tags": "omarks",
    "time_read": 6
  }, {
    "_highlightResult": {
      "excerpt": {
        "matchLevel": "none",
        "value": ""
      },
      "given_title": {
        "matchLevel": "none",
        "value": "Evernote Web"
      },
      "tags": {
        "matchLevel": "none",
        "value": "productivity, omarks, omarksbanzai"
      }
    },
    "dashboard_ranking": 21,
    "excerpt": "",
    "favorite": 1,
    "given_title": "Evernote Web",
    "given_url": "https://evernote.com",
    "has_image": 1,
    "image": {
      "src": "https://themacpsych.files.wordpress.com/2015/10/evernote-logo.jpeg"
    },
    "objectID": "288113772",
    "tags": "productivity, omarks, omarksbanzai",
    "time_read": 6
  }, {
    "_highlightResult": {
      "excerpt": {
        "matchLevel": "none",
        "value": "Competitions  Climb the world’s most elite machine learning leaderboards Want to host a competition?  Datasets  Explore and analyze a collection of high quality public datasets   Kernels  Run code in the cloud and receive community feedback on your work            Expand your career Creat"
      },
      "given_title": {
        "matchLevel": "none",
        "value": "Your Home for Data Science"
      },
      "tags": {
        "matchLevel": "none",
        "value": "omarks, social"
      }
    },
    "added_at": "November 04, 2016 at 02:21PM",
    "dashboard_ranking": 22,
    "excerpt": "Competitions  Climb the world’s most elite machine learning leaderboards Want to host a competition?  Datasets  Explore and analyze a collection of high quality public datasets   Kernels  Run code in the cloud and receive community feedback on your work            Expand your career Creat",
    "favorite": 1,
    "given_title": "Your Home for Data Science",
    "given_url": "https://www.kaggle.com",
    "has_image": 1,
    "image": {
      "src": "https://www.kaggle.com/static/images/home-learn-scripts.png?v=cfdefaab1561"
    },
    "objectID": "786614561",
    "tags": "omarks, social",
    "time_read": 5
  }, {
    "_highlightResult": {
      "excerpt": {
        "matchLevel": "none",
        "value": ""
      },
      "given_title": {
        "matchLevel": "none",
        "value": "Home - Dropbox"
      },
      "tags": {
        "matchLevel": "none",
        "value": "storage, omarks, cloud"
      }
    },
    "dashboard_ranking": 23,
    "excerpt": "",
    "favorite": true,
    "given_title": "Home - Dropbox",
    "given_url": "https://www.dropbox.com/home",
    "has_image": 1,
    "objectID": "647853661",
    "tags": "storage, omarks, cloud",
    "time_read": 4
  }, {
    "_highlightResult": {
      "excerpt": {
        "matchLevel": "none",
        "value": ""
      },
      "given_title": {
        "matchLevel": "none",
        "value": "Garmin Connect"
      },
      "tags": {
        "matchLevel": "none",
        "value": "lifestyle, omarks"
      }
    },
    "added_at": "October 23, 2016 at 02:27PM",
    "dashboard_ranking": 24,
    "excerpt": "",
    "favorite": 1,
    "given_title": "Garmin Connect",
    "given_url": "https://connect.garmin.com/modern/",
    "has_image": 0,
    "image": {
      "src": "http://i.huffpost.com/gen/1390376/images/o-MORNING-RUN-facebook.jpg"
    },
    "objectID": "387551422",
    "tags": "lifestyle, omarks",
    "time_read": 4
  }, {
    "_highlightResult": {
      "excerpt": {
        "matchLevel": "none",
        "value": ""
      },
      "given_title": {
        "matchLevel": "none",
        "value": "odrive | My odrive"
      },
      "tags": {
        "matchLevel": "none",
        "value": "storage, omarks, cloud"
      }
    },
    "dashboard_ranking": 25,
    "excerpt": "",
    "favorite": true,
    "given_title": "odrive | My odrive",
    "given_url": "https://www.odrive.com/account/myodrive",
    "has_image": 1,
    "image": {
      "src": "http://www.tabletperprofessionisti.com/wp-content/uploads/2015/01/odrive-Logo.png"
    },
    "objectID": "647853671",
    "tags": "storage, omarks, cloud",
    "time_read": 3
  }, {
    "_highlightResult": {
      "excerpt": {
        "matchLevel": "none",
        "value": "Slideshare uses cookies to improve functionality and performance, and to provide you with relevant advertising. If you continue browsing the site, you agree to the use of cookies on this website. See our User Agreement and Privacy Policy."
      },
      "given_title": {
        "matchLevel": "none",
        "value": "Share and Discover Knowledge on LinkedIn SlideShare"
      },
      "tags": {
        "matchLevel": "none",
        "value": "storage, omarks, social"
      }
    },
    "dashboard_ranking": 26,
    "excerpt": "Slideshare uses cookies to improve functionality and performance, and to provide you with relevant advertising. If you continue browsing the site, you agree to the use of cookies on this website. See our User Agreement and Privacy Policy.",
    "favorite": 1,
    "given_title": "Share and Discover Knowledge on LinkedIn SlideShare",
    "given_url": "http://www.slideshare.net/",
    "has_image": 0,
    "objectID": "405573690",
    "tags": "storage, omarks, social",
    "time_read": 2
  }, {
    "_highlightResult": {
      "excerpt": {
        "matchLevel": "none",
        "value": "LastPass remembers your passwords so that you can focus on the more important things in life.  Need your passwords everywhere? Upgrade to Premium now for unlimited sync across all devices at home, at work, and on the go."
      },
      "given_title": {
        "matchLevel": "none",
        "value": "LastPass | Password Manager, Auto Form Filler, Random Password Generator & "
      },
      "tags": {
        "matchLevel": "none",
        "value": "tool, omarks"
      }
    },
    "dashboard_ranking": 27,
    "excerpt": "LastPass remembers your passwords so that you can focus on the more important things in life.  Need your passwords everywhere? Upgrade to Premium now for unlimited sync across all devices at home, at work, and on the go.",
    "favorite": 1,
    "given_title": "LastPass | Password Manager, Auto Form Filler, Random Password Generator & ",
    "given_url": "https://lastpass.com/",
    "has_image": 1,
    "image": {
      "src": "https://lastpass.com/wp-content/uploads/homepage_1-1.png"
    },
    "objectID": "405573670",
    "tags": "tool, omarks",
    "time_read": 1
  }],
  "email": "",
  "menu": [{
    "component": "Home",
    "key": "facets.tag",
    "title": "Readme Later",
    "value": "read-me-later"
  }],
  "phoneNumber": "",
  "profile_picture": "",
  "uid": "co65BW62OfWmejFizihoM5F5lhP2",
  "username": ""
};


exports.handler = (event) => {
  const user = event.data; // The Firebase user.

  settings.email = user.email;
  settings.username = user.displayName;
  settings.profile_picture = user.photoURL;
  const uid = user.uid;

  return admin.database().ref("/users/" + uid).set(settings);
};