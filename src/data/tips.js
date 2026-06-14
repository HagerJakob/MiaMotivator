export const tipCategories = {
  fachlicherHinweis: "Fachlicher Hinweis",
  pruefungsstrategie: "Prüfungsstrategie",
  beruhigung: "Beruhigung",
  motivation: "Motivation",
  lastMinute: "Last-Minute-Erinnerung"
};

export const tips = [
  {
    id: "klassische-konditionierung",
    category: tipCategories.fachlicherHinweis,
    source: "Pool 1: Lernpsychologie",
    title: "Klassische Konditionierung klar trennen",
    text: "Ein neutraler Reiz wird durch Kopplung mit einem unkonditionierten Reiz zum konditionierten Reiz. Beispiel: Glocke plus Futter fuehrt dazu, dass spaeter die Glocke allein Speichel ausloest.",
    remember: "Neutral + unkonditioniert = gelernt verknuepft."
  },
  {
    id: "extinktion-generalisierung",
    category: tipCategories.lastMinute,
    source: "Pool 1: Lernpsychologie",
    title: "Zwei Begriffe, die gerne verwechselt werden",
    text: "Extinktion bedeutet Loeschung: Die gelernte Reaktion nimmt ab, wenn der konditionierte Reiz ohne den unkonditionierten Reiz auftritt. Reizgeneralisierung bedeutet: Die Reaktion wird auf aehnliche Reize uebertragen.",
    remember: "Extinktion loescht, Generalisierung uebertraegt."
  },
  {
    id: "operant",
    category: tipCategories.fachlicherHinweis,
    source: "Pool 1: Lernpsychologie",
    title: "Operante Konditionierung",
    text: "Verhalten wird durch seine Folgen beeinflusst. Verstaerkung macht Verhalten wahrscheinlicher, Bestrafung macht es unwahrscheinlicher. Positiv heisst: etwas kommt dazu. Negativ heisst: etwas faellt weg.",
    remember: "Verstaerkung steigert Verhalten, Bestrafung senkt Verhalten."
  },
  {
    id: "thorndike-skinner",
    category: tipCategories.fachlicherHinweis,
    source: "Pool 1: Lernpsychologie",
    title: "Thorndike und Skinner unterscheiden",
    text: "Thorndike betont Versuch und Irrtum sowie das Effektgesetz: Erfolgreiches Verhalten wird wiederholt. Skinner untersucht gezielt, wie Belohnung und Bestrafung Verhalten in der Skinner-Box formen.",
    remember: "Thorndike: Effektgesetz. Skinner: Konsequenzen formen Verhalten."
  },
  {
    id: "modelllernen",
    category: tipCategories.fachlicherHinweis,
    source: "Pool 1: Lernpsychologie",
    title: "Bandura: Lernen durch Beobachtung",
    text: "Beim Modelllernen beobachten Menschen ein Modell und ahmen Verhalten eher nach, wenn es erfolgreich ist, belohnt wird oder von einer wichtigen, beliebten oder aehnlichen Person gezeigt wird.",
    remember: "Nicht nur eigenes Ausprobieren, auch Beobachten wirkt."
  },
  {
    id: "anlage-umwelt",
    category: tipCategories.fachlicherHinweis,
    source: "Pool 1: Entwicklungspsychologie",
    title: "Anlage und Umwelt zusammen denken",
    text: "Entwicklung ist kein Entweder-oder. Gene geben Moeglichkeiten vor, Umwelt, Erziehung, Schule, Freundschaften und Erfahrungen beeinflussen, wie diese Moeglichkeiten sichtbar werden.",
    remember: "Gene sind Moeglichkeit, Umwelt ist Entfaltung."
  },
  {
    id: "typologien-kritik",
    category: tipCategories.fachlicherHinweis,
    source: "Pool 3: Persoenlichkeitspsychologie",
    title: "Typologien kritisch sehen",
    text: "Typologien wie die Temperamentstypen vereinfachen stark. Kein Mensch passt nur in einen Typus, und Verhalten laesst sich nicht allein aus koerperlichen Merkmalen oder Genetik vorhersagen.",
    remember: "Typen beschreiben grob, aber erklaeren nicht den ganzen Menschen."
  },
  {
    id: "trait-theorie",
    category: tipCategories.fachlicherHinweis,
    source: "Pool 3: Persoenlichkeitspsychologie",
    title: "Trait-Theorie knapp",
    text: "Trait-Theorien gehen von relativ stabilen Persoenlichkeitseigenschaften aus. Aehnliche Eigenschaften werden mit Faktorenanalyse zu Grunddimensionen zusammengefasst, damit Persoenlichkeit besser beschrieben werden kann.",
    remember: "Traits sind stabile Tendenzen, keine starren Schubladen."
  },
  {
    id: "big-five",
    category: tipCategories.lastMinute,
    source: "Pool 3: Persoenlichkeitspsychologie",
    title: "Big Five merken",
    text: "Die Big Five sind Neurotizismus, Extraversion, Vertraeglichkeit, Gewissenhaftigkeit und Offenheit. Sie sind gut erforscht, reduzieren Persoenlichkeit aber trotzdem auf fuenf grosse Faktoren.",
    remember: "N-E-V-G-O: fuenf Dimensionen, nicht fuenf Typen."
  },
  {
    id: "rogers-selbstkonzept",
    category: tipCategories.fachlicherHinweis,
    source: "Pool 3: Persoenlichkeitspsychologie",
    title: "Rogers und Selbstkonzept",
    text: "Das Selbstkonzept ist das Bild, das ein Mensch von sich hat: Faehigkeiten, Werte, Motive, Erfahrungen und Rueckmeldungen anderer. Echtheit, Empathie und Wertschaetzung foerdern ein positives Selbstkonzept.",
    remember: "Selbstbild und Selbstwert beeinflussen Denken, Fuehlen und Handeln."
  },
  {
    id: "sokrates",
    category: tipCategories.fachlicherHinweis,
    source: "Pool 6: Erkenntnistheorie",
    title: "Sokrates: Fragen statt Belehren",
    text: "Sokrates sucht Wahrheit im Gespraech. Mit Maeutik, sokratischer Ironie und Aporie fuehrt er Menschen dazu, Widersprueche zu erkennen und eigenes Wissen hervorzubringen.",
    remember: "Maeutik heisst: Wissen durch Fragen zur Welt bringen."
  },
  {
    id: "platon",
    category: tipCategories.fachlicherHinweis,
    source: "Pool 6: Erkenntnistheorie",
    title: "Platon: Ideenwelt",
    text: "Platon unterscheidet die vergaengliche Sinnenwelt von der ewigen Ideenwelt. Was wir sehen, sind Abbilder; wahre Erkenntnis entsteht durch Vernunft und Rueckerinnerung an Urbilder.",
    remember: "Sinnenwelt = Schatten, Ideenwelt = Urbilder."
  },
  {
    id: "aristoteles",
    category: tipCategories.fachlicherHinweis,
    source: "Pool 6: Erkenntnistheorie",
    title: "Aristoteles: Erfahrung zaehlt",
    text: "Aristoteles gilt als Empirist: Wissen entsteht durch Sinneserfahrung, Beobachtung und Ordnung durch die Vernunft. Es gibt fuer ihn keine angeborenen Ideen wie bei Platon.",
    remember: "Erst wahrnehmen, dann ordnen."
  },
  {
    id: "rationalismus-empirismus",
    category: tipCategories.lastMinute,
    source: "Pool 6: Erkenntnistheorie",
    title: "Rationalismus vs. Empirismus",
    text: "Rationalismus betont Vernunft, Denken und logische Einsicht. Empirismus betont Erfahrung, Beobachtung und Sinneswahrnehmung. Kant verbindet spaeter beide Perspektiven.",
    remember: "Ratio denkt, Empirie erfahrt."
  },
  {
    id: "descartes",
    category: tipCategories.fachlicherHinweis,
    source: "Pool 6: Erkenntnistheorie",
    title: "Descartes: radikaler Zweifel",
    text: "Descartes sucht ein sicheres Fundament des Wissens. Sinne koennen taeuschen, die Welt koennte Traum sein. Sicher bleibt: Wer zweifelt und denkt, existiert.",
    remember: "Cogito ergo sum: Ich denke, also bin ich."
  },
  {
    id: "kant",
    category: tipCategories.fachlicherHinweis,
    source: "Pool 6: Erkenntnistheorie",
    title: "Kant: Erkenntnis braucht zwei Seiten",
    text: "Kant verbindet Sinnlichkeit und Verstand. Ohne Sinne gibt es keine Inhalte, ohne Verstand keine Ordnung. Raum und Zeit sind Anschauungsformen a priori.",
    remember: "Sinne liefern Stoff, Verstand gibt Form."
  },
  {
    id: "ding-an-sich",
    category: tipCategories.fachlicherHinweis,
    source: "Pool 6: Erkenntnistheorie",
    title: "Erscheinung und Ding an sich",
    text: "Bei Kant erkennen wir Dinge nur so, wie sie uns erscheinen. Das Ding an sich, also wie etwas unabhaengig von unserem Wahrnehmungsapparat wirklich ist, bleibt uns nie vollstaendig zugaenglich.",
    remember: "Wir sehen durch unsere menschliche Brille."
  },
  {
    id: "antwort-struktur",
    category: tipCategories.pruefungsstrategie,
    source: "Pruefungsstrategie aus den Unterlagen abgeleitet",
    title: "Wenn du unsicher bist: strukturiere laut",
    text: "Beginne mit einer Definition, nenne ein Beispiel und grenze danach ab. Bei Psychologie und Philosophie wirkt eine klare Unterscheidung oft staerker als ein perfekt formulierter Satz.",
    remember: "Definition, Beispiel, Abgrenzung."
  },
  {
    id: "vergleichsfragen",
    category: tipCategories.pruefungsstrategie,
    source: "Pruefungsstrategie aus den Unterlagen abgeleitet",
    title: "Vergleichsfragen sind Chancen",
    text: "Bei Gegensaetzen wie Rationalismus und Empirismus, Platon und Aristoteles oder Klassisch und Operant erst die Grundidee jeder Seite nennen, dann den Unterschied in einem Satz festhalten.",
    remember: "Erst beide Seiten, dann der klare Unterschied."
  },
  {
    id: "blackout",
    category: tipCategories.beruhigung,
    source: "Matura-Strategie",
    title: "Bei Blackout: zurueck zur ersten Definition",
    text: "Wenn kurz nichts kommt, atme aus und beginne mit dem einfachsten sicheren Begriff. Oft reicht ein Einstiegssatz, damit dein Wissen wieder nachkommt.",
    remember: "Ein sicherer Anfang oeffnet den Rest."
  },
  {
    id: "nicht-perfekt",
    category: tipCategories.beruhigung,
    source: "Beruhigung",
    title: "Du musst nicht perfekt sein",
    text: "Du musst morgen nicht alles makellos aufsagen. Du darfst nachdenken, korrigieren und trotzdem zeigen, dass du den Stoff verstanden hast.",
    remember: "Verstehen zaehlt mehr als perfekte Saetze."
  },
  {
    id: "du-kannst-das",
    category: tipCategories.motivation,
    source: "Motivation",
    title: "Warum du das kannst",
    text: "Du hast dich durch viele Begriffe, Modelle und Theorien gearbeitet. Das ist nicht nichts. Dein Kopf hat mehr gespeichert, als Nervositaet dir gerade glauben laesst.",
    remember: "Nervositaet ist kein Beweis gegen dein Koennen."
  },
  {
    id: "liebevoller-impuls",
    category: tipCategories.motivation,
    source: "Motivation",
    title: "Kleiner Mutmoment",
    text: "Morgen musst du nicht jemand anderes werden. Du gehst als du selbst hinein: vorbereitet, aufmerksam, klug und mit genug Ruhe fuer den naechsten Schritt.",
    remember: "Ein Schritt nach dem anderen."
  }
];

export const lastMinuteTips = [
  "Aufgabenstellung genau lesen und Schluesselwoerter markieren.",
  "Zuerst sichere Punkte holen, dann die schwierigen Details.",
  "Bei Blackout langsam ausatmen, Definition starten, Beispiel nachlegen.",
  "Bei Vergleichen immer beide Seiten nennen und danach sauber abgrenzen.",
  "Nicht raten wie in einem Quiz: lieber logisch argumentieren und begruenden.",
  "Bei Namen den Kerngedanken dazusagen: Bandura = Modelllernen, Kant = Sinne plus Verstand.",
  "Wenn ein Begriff kommt, denke an: Definition, Beispiel, typischer Fehler.",
  "Zeit einteilen: lieber jede Frage solide beginnen als an einer perfekten Antwort kleben."
];

export const affirmations = [
  "Ich darf nervoes sein und trotzdem klar denken.",
  "Ich habe gelernt, geuebt und verstanden.",
  "Ich beginne mit dem, was sicher ist.",
  "Ich muss nicht perfekt sein, ich darf Schritt fuer Schritt antworten.",
  "Mein Wissen ist da, auch wenn es kurz leise wirkt.",
  "Ich kann ruhig bleiben, atmen und weitermachen."
];

export const lovingMessages = [
  "Du bist nicht allein in diesem Morgen. Ich glaube an dich, ganz ruhig und ganz fest.",
  "Du hast so viel geschafft. Morgen zeigst du nicht Perfektion, sondern deinen Weg bis hierher.",
  "Wenn dein Herz schneller schlägt, ist das nur Energie. Du darfst sie langsam machen.",
  "Ich bin stolz auf dich, bevor irgendwer eine Note sagt."
];
