window.cookieConsentSettings={current_lang:"cs",autoclear_cookies:!0,theme_css:"/dist/css/style.css",page_scripts:!0,languages:{cs:{consent_modal:{title:"Tato webová stránka používá cookies",description:'Tyto webové stránky používají k poskytování služeb, personalizaci reklam a analýze návštěvnosti soubory cookies. Některé z nich jsou k fungování stránky nezbytné, ale o některých můžete rozhodnout sami. Více o používání souborů cookies se dozvíte níže. Můžete je povolit všechny, jednotlivě vybrat nebo všechny odmítnout. Více informací získáte kdykoliv na stránce Zásady používání souborů cookies. <button type="button" data-cc="c-settings" class="cc-link">Nastavení cookies</button>',primary_btn:{text:"Přijmout vše",role:"accept_all"},secondary_btn:{text:"Pouze nezbytné",role:"accept_necessary"}},settings_modal:{title:"Nastavení cookies",save_settings_btn:"Uložit moje volby",accept_all_btn:"Přijmout vše",reject_all_btn:"Odmítnout vše",close_btn_label:"Zavřít",cookie_table_headers:[{col1:"Název"},{col2:"Doména"},{col3:"Platnost do"},{col4:"Popis"}],blocks:[{title:"Používaní cookies",description:"Tyto webové stránky používají k poskytování služeb, personalizaci reklam a analýze návštěvnosti soubory cookies. Některé z nich jsou k fungování stránky nezbytné, ale o některých můžete rozhodnout sami."},{title:"Funkční cookies – vždy povoleno",description:"Tyto soubory cookie jsou nutné pro základní funkce stránky, a jsou proto vždy povolené.",toggle:{value:"necessary",enabled:!0,readonly:!0}},{title:"Statistické cookies",description:"Statistické cookies umožňují majitelům webových stránek sledovat návštěvnost webových stránek. Anonymně sbírají a sdělují informace, které pomáhají k vylepšování obsahu stránek.",toggle:{value:"analytics",enabled:!1,readonly:!1}},{title:"Marketingové cookies",description:"Marketingové cookies jsou používány pro sledování návštěvníků na webových stránkách. Záměrem je zobrazit reklamu, která je relevantní a zajímavá pro jednotlivého uživatele a tímto hodnotnější pro vydavatele a inzerenty třetích stran.",toggle:{value:"targeting",enabled:!1,readonly:!1}},{title:"Sociální média",description:"Se souhlasem cookies sociálních médií se můžete připojit k vašim sociálním sítím a prostřednictvím nich sdílet obsah z naší webové stránky. Při vypnutí se nebude zobrazovat obsah ze sociálních sítí (Facebook, Twitter, Youtube a další).",toggle:{value:"social",enabled:!1,readonly:!1}}]}}}},window.addEventListener("message",(function(e){"cc-settings"===e.data&&document.querySelector('[data-cc="c-settings"]').click()}),!1),document.querySelectorAll('[data-src][data-cookiecategory="social"][data-placeholder]').forEach((function(e){e.src="/cookie-consent-frame.html"})),document.querySelectorAll("[data-cookie-placeholder]").forEach((function(e){e.addEventListener("click",(function(){void 0!==e.dataset.cookiePlaceholder&&document.querySelector('[data-cc="c-settings"]').click()}))}));