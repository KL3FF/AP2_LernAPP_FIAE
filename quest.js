const cardSets = {
  "IT-Tec s1": [


    // Verschlüsselungsstandards
    {
      question: "Was ist der Advanced Encryption Standard (AES)?",
      answer: "AES ist ein weit verbreitetes symmetrisches Verschlüsselungsverfahren, das für die Verschlüsselung von Daten in vielen Sicherheitsprotokollen verwendet wird. Es unterstützt Schlüssellängen von 128, 192 und 256 Bit."
    },
    {
      question: "Was ist RSA-Verschlüsselung?",
      answer: "RSA ist ein asymmetrisches Verschlüsselungsverfahren, das auf den Prinzipien der Primfaktorzerlegung basiert. Es verwendet ein Schlüsselpaar (öffentlichen und privaten Schlüssel) für die Verschlüsselung und digitale Signaturen."
    },
    {
      question: "Was ist SHA?",
      answer: "SHA (Secure Hash Algorithm) ist eine Familie kryptografischer Hash-Funktionen, die verwendet wird, um Daten auf eine feste Länge zu 'hashen', wodurch die Integrität der Daten überprüft werden kann."
    },

    // Sicherheitsmaßnahmen und Prinzipien
    {
      question: "Was versteht man unter infrastrukturellen Sicherheitsmaßnahmen?",
      answer: "Infrastrukturelle Sicherheitsmaßnahmen sind physische und technische Schutzmaßnahmen, die dazu dienen, IT-Systeme und Netzwerke zu sichern, wie z.B. Firewalls, Antivirenprogramme und Zugangskontrollen."
    },
    {
      question: "Was bedeutet 'Security by Design'?",
      answer: "Security by Design bedeutet, dass Sicherheitsaspekte von Anfang an in die Entwicklung von Systemen und Software integriert werden, anstatt sie später hinzuzufügen."
    },
    {
      question: "Was bedeutet 'Security by Default'?",
      answer: "Security by Default bedeutet, dass Systeme von Anfang an so konzipiert sind, dass sie standardmäßig sicher sind, und unsichere Funktionen oder Konfigurationen sind deaktiviert."
    },

    {
      question: "Was sind RAID-Systeme?",
      answer: "RAID-Systeme (Redundant Array of Independent Disks) kombinieren mehrere Festplatten zu einem logischen Laufwerk, um die Leistung zu steigern oder die Datensicherheit zu erhöhen."
    },

    // Zugriffskontrollen
    {
      question: "Was ist Zugriffskontrolle?",
      answer: "Zugriffskontrolle regelt, wer auf bestimmte Ressourcen und Informationen in einem System zugreifen darf. Sie umfasst Authentifizierung und Autorisierung von Benutzern."
    },
    {
      question: "Was ist Multi-Faktor-Authentifizierung (MFA)?",
      answer: "MFA ist eine Sicherheitsmaßnahme, bei der mehrere Identifikationsmethoden (z.B. Passwort und Fingerabdruck) verwendet werden, um den Zugriff auf ein System zu sichern."
    },
    {
      question: "Was ist ein Virus?",
      answer: "Viren schleusen sich in Computerprogramme ein, indem sie Dateien als 'Wirt' verwenden und verbreiten sich, um das System zu schädigen."
    },
    {
      question: "Was ist ein Wurm?",
      answer: "Würmer sind eigenständige Programme, die sich automatisch vervielfältigen und ohne Benutzerintervention, typischerweise über Netzwerke, verbreiten."
    },
    {
      question: "Was ist ein Trojaner?",
      answer: "Ein Trojaner gibt sich als nützliche Software aus, um Benutzer zu täuschen, und führt schädliche Aktivitäten aus, wie Datenklau oder die Installation weiterer Malware."
    },
    {
      question: "Was ist eine Backdoor?",
      answer: "Eine Backdoor ist ein geheimer Zugang zu einem Computer oder Netzwerk, der es Angreifern ermöglicht, das System zu kontrollieren, ohne dass der Benutzer davon erfährt."
    },
    {
      question: "Was macht Spyware?",
      answer: "Spyware läuft im Hintergrund und spioniert das Benutzerverhalten, persönliche Daten oder Passwörter aus und leitet sie an Dritte weiter."
    },
    {
      question: "Was ist Scareware?",
      answer: "Scareware verwendet gefälschte Warnmeldungen, um den Benutzer zu verunsichern und ihn zur Installation von Schadsoftware zu verleiten."
    },
    {
      question: "Was ist Ransomware?",
      answer: "Ransomware blockiert den Zugriff auf das System oder verschlüsselt Daten und fordert den Benutzer zur Zahlung von Lösegeld auf, um den Zugriff wiederherzustellen."
    },
    {
      question: "Was ist ein Rootkit?",
      answer: "Ein Rootkit ist eine Software, die tief im Betriebssystem versteckt ist und Angreifern ermöglicht, unerwünschte Vorgänge zu verschleiern."
    },
    {
      question: "Wie verbreitet sich Malware über E-Mail?",
      answer: "Malware wird häufig über E-Mail-Anhänge verbreitet, die als vermeintlich wichtige Dokumente getarnt sind. Sobald der Benutzer den Anhang öffnet, wird die Malware aktiviert."
    },
    {
      question: "Wie kann Malware durch Software-Schwachstellen verbreitet werden?",
      answer: "Schwachstellen in Software wie Webbrowser oder Betriebssysteme können ausgenutzt werden, um Malware zu installieren."
    },
    {
      question: "Wie verbreitet sich Malware über Wechselmedien?",
      answer: "Malware kann über externe Speichermedien wie USB-Sticks, CDs und DVDs verbreitet werden. Wird ein infiziertes USB-Laufwerk an ein System angeschlossen, kann die Malware das System infizieren."
    },
    {
      question: "Was ist ein Denial-of-Service (DoS) Angriff?",
      answer: "Ein DoS-Angriff zielt darauf ab, einen Netzwerkdienst oder ein System durch Überlastung mit Anfragen lahmzulegen."
    },
    {
      question: "Was ist ein Distributed Denial-of-Service (DDoS) Angriff?",
      answer: "DDoS-Angriffe sind eine erweiterte Form von DoS-Angriffen, bei denen viele Angreifern gleichzeitig Anfragen an das Ziel senden, um es zu überlasten."
    },
    {
      question: "Was ist das Ziel eines DoS-Angriffs?",
      answer: "Das Ziel eines DoS-Angriffs ist es, einen Dienst oder ein System lahmzulegen, durch Überlastung mit Anfragen oder durch Ausnutzen von Schwachstellen."
    },
    {
      question: "Was ist das Ziel eines DDoS-Angriffs?",
      answer: "Das Ziel eines DDoS-Angriffs ist es, ein System oder Netzwerk durch die gleichzeitige Überlastung mit Anfragen von mehreren Angreifern lahmzulegen."
    },
    {
      question: "Was ist ein Domain Controller?",
      answer: "Ein Domain Controller verwaltet Benutzer, Computer und Sicherheitsrichtlinien in einem Netzwerk und ist für Authentifizierung und Autorisierung verantwortlich."
    },
    {
      question: "Was ist die Funktion eines Virtualisierungsservers?",
      answer: "Ein Virtualisierungsserver nutzt Virtualisierung, um mehrere virtuelle Maschinen auf einer physischen Hardware laufen zu lassen und Ressourcen effizient zu nutzen."
    },
    {
      question: "Was macht ein Druckserver?",
      answer: "Ein Druckserver verwaltet und leitet Druckaufträge von Clients an den richtigen Drucker weiter und zentralisiert das Druckmanagement."
    },
    {
      question: "Was ist die Funktion einer Firewall?",
      answer: "Eine Firewall überwacht und filtert Netzwerkverkehr, um unbefugten Zugriff zu verhindern und schützt Netzwerke durch Regeln und Protokolle."
    },
    {
      question: "Was sind die drei Aspekte der Datensicherheit?",
      answer: "Die drei Aspekte der Datensicherheit sind: Vertraulichkeit, Integrität und Verfügbarkeit."
    },
    {
      question: "Was bedeutet Vertraulichkeit in der Datensicherheit?",
      answer: "Vertraulichkeit bedeutet, dass nur autorisierte Personen Zugang zu den Daten haben."
    },
    {
      question: "Was bedeutet Integrität in der Datensicherheit?",
      answer: "Integrität stellt sicher, dass die Daten korrekt und unverändert sind."
    },
    {
      question: "Was bedeutet Verfügbarkeit in der Datensicherheit?",
      answer: "Verfügbarkeit bedeutet, dass die Daten für berechtigte Nutzer jederzeit zugänglich sind."
    },
    {
      question: "Was ist der vierte Aspekt der Datensicherheit, der zu den klassischen drei Aspekten hinzukommt?",
      answer: "Der vierte Aspekt ist die Authentizität, die sicherstellt, dass die Quelle der Daten vertrauenswürdig ist."
    },
    // RAID 0
    {
      question: "Wie ist RAID 0 aufgebaut?",
      answer: "RAID 0 verwendet Striping, bei dem Daten in Blöcke aufgeteilt und über mehrere Festplatten verteilt werden, um die Lese- und Schreibgeschwindigkeit zu erhöhen. Es bietet jedoch keine Redundanz oder Fehlerkorrektur."
    },

    // RAID 1
    {
      question: "Wie ist RAID 1 aufgebaut?",
      answer: "RAID 1 verwendet Mirroring, bei dem die gleichen Daten auf zwei oder mehr Festplatten gleichzeitig gespeichert werden, um eine vollständige Datenspiegelung zu gewährleisten. Dies sorgt für hohe Datensicherheit, reduziert jedoch den verfügbaren Speicherplatz."
    },

    // RAID 5
    {
      question: "Wie ist RAID 5 aufgebaut?",
      answer: "RAID 5 verwendet Striping mit Parität. Die Daten werden auf mindestens drei Festplatten verteilt, wobei eine Paritätsinformation für Fehlerkorrektur auf einer der Festplatten gespeichert wird. Dies bietet sowohl hohe Leistung als auch Datensicherheit."
    },

    // RAID 6
    {
      question: "Wie ist RAID 6 aufgebaut?",
      answer: "RAID 6 verwendet Striping mit doppelter Parität. Es ähnelt RAID 5, speichert jedoch Paritätsinformationen auf zwei Festplatten, was eine höhere Fehlertoleranz bietet. Es erfordert mindestens vier Festplatten."
    },

    { "question": "ICMP: Wofür steht ICMP?", "answer": "Internet Control Message Protocol" },
    { "question": "ICMP: Wofür wird ICMP verwendet?", "answer": "Zur Fehlerbehandlung und Diagnose in IP-Netzwerken" },
    { "question": "ICMP: Welche Geräte nutzen ICMP?", "answer": "Router und Hosts" },
    { "question": "ICMP: Wofür werden Echo Request und Echo Reply verwendet?", "answer": "Zur Überprüfung der Erreichbarkeit eines Hosts (z.B. mit Ping)" },
    { "question": "ICMP: Wann wird eine Destination Unreachable Nachricht gesendet?", "answer": "Wenn ein Paket sein Ziel nicht erreichen kann" },
    { "question": "ICMP: Wann wird eine Time Exceeded Nachricht gesendet?", "answer": "Wenn die Time to Live (TTL) eines Pakets abgelaufen ist" },
    { "question": "ICMP Flood: Was ist ein ICMP Flood?", "answer": "Ein Angriff mit vielen ICMP Echo Requests zur Überlastung eines Ziels" },
    { "question": "ICMP Flood: Was ist das Ziel eines ICMP Flood?", "answer": "Überlastung und Störung des Dienstes" },
    { "question": "Ping of Death: Was passiert beim Ping of Death Angriff?", "answer": "Übergroße ICMP-Pakete bringen ältere Systeme zum Absturz" },
    { "question": "Ping of Death: Warum sind moderne Systeme sicherer gegen den Ping of Death?", "answer": "Weil sie übergroße Pakete richtig verarbeiten können" },
    { "question": "ICMP Redirect: Was passiert bei einem ICMP Redirect-Angriff?", "answer": "Gefälschte ICMP-Redirect-Nachrichten leiten Datenverkehr über einen vom Angreifer kontrollierten Router" },
    { "question": "ICMP Redirect: Was ermöglicht ein ICMP Redirect-Angriff dem Angreifer?", "answer": "Abhören oder Umlenken des Datenverkehrs (Man-in-the-Middle)" }
    ,
    {
      "question": "Oracle-DB: Was ist Oracle?",
      "answer": "Oracle ist ein relationales Datenbanksystem."
    },
    {
      "question": "NAT: Was passiert beim NAT-Prozess in Routern?",
      "answer": "Ein Gerät tauscht seine private IP-Adresse gegen die öffentliche IP-Adresse des Routers."
    },
    {
      "question": "NAT: Warum wurde NAT entwickelt?",
      "answer": "NAT wurde aufgrund der Adressknappheit bei IPv4 entwickelt."
    },
    {
      "question": "NAT: Was wird in einer NAT-Tabelle festgehalten?",
      "answer": "In der NAT-Tabelle werden private IPs, öffentliche IPs, Ports, Ziel-IP, Ziel-Port, Protokolle und Zeitstempel festgehalten."
    },
    {
      "question": "DNAT: Was ist der Unterschied zwischen SNAT und DNAT?",
      "answer": "Bei DNAT geht eine Verbindung von außen (Internet) zu einem Gerät im LAN, bei SNAT ist es umgekehrt."
    },
    {
      "question": "Spanning Tree: Was ist das Ziel von Spanning Tree?",
      "answer": "Spanning Tree soll Schleifen im LAN vermeiden."
    },
    {
      "question": "Spanning Tree: Wie wird die Root Bridge im Spanning Tree bestimmt?",
      "answer": "Die Root Bridge wird durch den Switch mit der niedrigsten Bridge-ID bestimmt."
    },
    {
      "question": "Spanning Tree: Was passiert mit doppelten Ports zur Root Bridge?",
      "answer": "Doppelte Ports zur Root Bridge werden geschlossen."
    },
    {
      "question": "VLAN: Was ermöglicht ein VLAN?",
      "answer": "Ein VLAN ermöglicht die logische Aufteilung eines Netzwerks in separate, voneinander isolierte Bereiche, auch bei physischen Geräten im gleichen Netzwerk."
    },
    {
      "question": "VLAN: Wie werden Geräte in einem VLAN eingeteilt?",
      "answer": "Geräte werden in Gruppen (VLANs) eingeteilt."
    },
    {
      "question": "VLAN: Was erhält jedes VLAN?",
      "answer": "Jedes VLAN erhält eine eigene ID im Bereich von 1 bis 4095."
    },
    {
      "question": "VLAN: Wie werden Ports auf einem Switch einem VLAN zugewiesen?",
      "answer": "Ports am Switch werden mit der entsprechenden VLAN-ID konfiguriert."
    },
    {
      "question": "WLAN: Was beeinflusst die WLAN-Übertragungsrate?",
      "answer": "Die Übertragungsrate kann durch Entfernung, Hindernisse, Störungen, veraltete Hardware und viele Geräte im Netzwerk beeinträchtigt werden."
    },
    {
      "question": "Wi-Fi: Was ist Wi-Fi?",
      "answer": "Wi-Fi ist die praktische Bezeichnung für drahtlose Netzwerke nach dem IEEE-802.11-Standard."
    },
    {
      "question": "Wi-Fi: Was beeinflusst die Reichweite und Antennengröße bei Wi-Fi?",
      "answer": "Je höher die Frequenz eines Funksignals, desto kleiner ist die Antenne, aber die Reichweite nimmt ab."
    },
    {
      "question": "WLAN-Frequenzbänder: Welche Kanäle sind bei 2,4 GHz überlappungsfrei?",
      "answer": "Kanal 1, 6 und 11 sind bei 2,4 GHz überlappungsfrei."
    },
    {
      "question": "WLAN-Frequenzbänder: Welche Frequenz hat mehr verfügbare Kanäle, 2,4 GHz oder 5 GHz?",
      "answer": "5 GHz hat mehr verfügbare Kanäle."
    },
    {
      "question": "WLAN-Frequenzbänder: Welche Frequenz hat eine höhere Geschwindigkeit, 2,4 GHz oder 5 GHz?",
      "answer": "5 GHz hat eine höhere Geschwindigkeit, aber geringere Reichweite."
    },
    {
      "question": "WLAN-Kanalbreite: Was passiert bei größerer Kanalbreite?",
      "answer": "Je größer die Kanalbreite, desto höher der Datendurchsatz, aber auch anfälliger für Störungen."
    },
    {
      "question": "WEP: Was war das Problem mit WEP?",
      "answer": "WEP hatte einen schwachen Algorithmus und zu kurze Schlüssel, was es leicht zu knacken machte."
    },
    {
      "question": "WPA: Was war WPA?",
      "answer": "WPA war eine Reaktion auf die Schwächen von WEP und bot mehr Sicherheit, wurde aber nicht als finaler Standard eingeführt."
    },
    {
      "question": "WPA2-Personal: Wie erfolgt die Authentifizierung bei WPA2-Personal?",
      "answer": "Die Authentifizierung erfolgt über ein gemeinsames Passwort (Pre-Shared Key)."
    },
    {
      "question": "WPA2-Personal: Wo wird WPA2-Personal verwendet?",
      "answer": "WPA2-Personal wird meist in privaten Haushalten oder kleinen Netzwerken verwendet."
    },
    {
      "question": "WPA2-Enterprise: Wie erfolgt die Authentifizierung bei WPA2-Enterprise?",
      "answer": "Die Authentifizierung erfolgt über einen RADIUS-Server mit individuellen Zugangsdaten für jeden Nutzer."
    },
    {
      "question": "WPA2-Enterprise: Wo wird WPA2-Enterprise eingesetzt?",
      "answer": "WPA2-Enterprise wird in Unternehmen, Schulen oder großen Organisationen genutzt."
    },
    {
      "question": "Antennen bei WLAN-Geräten: Welche Antennen werden häufig in WLAN-Routern eingesetzt?",
      "answer": "In WLAN-Routern werden oft Dipolantennen (Stabantennen) verwendet."
    },
    {
      "question": "Antennen bei WLAN-Geräten: Was zeichnet eine Parabolantenne aus?",
      "answer": "Eine Parabolantenne bündelt das Signal stark in eine Richtung und erreicht hohe Reichweiten."
    },
    {
      "question": "Antennen bei WLAN-Geräten: Was ist eine Yagi-Antenne?",
      "answer": "Eine Yagi-Antenne hat eine gerichtete Abstrahlung mit hoher Reichweite und wird für gezielte WLAN-Verbindungen genutzt."
    },
    {
      "question": "Bridge Modus: Was ermöglicht der Bridge-Modus?",
      "answer": "Im Bridge-Modus können getrennte LANs über Funk verbunden werden."
    },
    {
      "question": "Repeater-Modus: Was passiert im Repeater-Modus?",
      "answer": "Im Repeater-Modus wird die Reichweite des WLANs durch Erweiterung der Funkzellen vergrößert."
    },
    {
      "question": "Roaming: Was ist Roaming im WLAN?",
      "answer": "Roaming ermöglicht es WLAN-Geräten, automatisch zwischen verschiedenen Zugangspunkten zu wechseln, ohne die Verbindung zu verlieren."
    },
    {
      "question": "Infrastruktur-Modus: Was ist der Infrastruktur-Modus?",
      "answer": "Im Infrastruktur-Modus geht jegliche Kommunikation über einen Accesspoint, der Zugang zum LAN bietet."
    },
    {
      "question": "Ad-hoc-Modus: Was ist der Ad-hoc-Modus?",
      "answer": "Im Ad-hoc-Modus kommunizieren WLAN-Clients direkt untereinander ohne Accesspoint."
    },
    {
      "question": "Antennen bei WLAN-Geräten: Warum sind mehrere Antennen in WLAN-Geräten wichtig?",
      "answer": "Mehr Antennen ermöglichen mehr gleichzeitige Datenströme und damit mehr Geschwindigkeit und Stabilität."
    },
    {
      "question": "MU-MIMO: Was bedeutet MU-MIMO?",
      "answer": "MU-MIMO steht für Multi-User Multiple Input, Multiple Output und erlaubt es, mehreren Geräten gleichzeitig unterschiedliche Daten zu senden."
    },
    {
      "question": "MU-MIMO: Welche Geräte müssen MU-MIMO unterstützen?",
      "answer": "Sowohl der Access Point als auch die Clients müssen MU-MIMO unterstützen."
    },
    {
      "question": "MU-MIMO: Wie funktioniert MU-MIMO bei WLAN-ac (Wi-Fi 5)?",
      "answer": "Bei WLAN-ac funktioniert MU-MIMO nur für den Downlink (vom Router zum Gerät)."
    },
    {
      "question": "MU-MIMO: Wann wurde auch der Uplink (vom Gerät zum Router) mit MU-MIMO eingeführt?",
      "answer": "Mit WLAN-ax (Wi-Fi 6) wurde auch der Uplink mit MU-MIMO eingeführt."
    }
  ],
  "IT-Tec s2": [
    {
      "question": "Was ist eine private IP-Adresse in IPv4?",
      "answer": "Eine private IP-Adresse in IPv4 ist eine Adresse, die für die interne Netzwerkkommunikation innerhalb eines privaten Netzwerks verwendet wird und nicht im öffentlichen Internet geroutet wird."
    },
    {
      "question": "Welcher IP-Bereich gehört zu den privaten IP-Adressen in IPv4? (Bereich A)",
      "answer": "Der IP-Bereich A ist 10.0.0.0 bis 10.255.255.255."
    },
    {
      "question": "Welcher IP-Bereich gehört zu den privaten IP-Adressen in IPv4? (Bereich B)",
      "answer": "Der IP-Bereich B ist 172.16.0.0 bis 172.31.255.255."
    },
    {
      "question": "Welcher IP-Bereich gehört zu den privaten IP-Adressen in IPv4? (Bereich C)",
      "answer": "Der IP-Bereich C ist 192.168.0.0 bis 192.168.255.255."
    },
    {
      "question": "Warum werden private IP-Adressen verwendet?",
      "answer": "Private IP-Adressen werden verwendet, um Geräte innerhalb eines privaten Netzwerks zu identifizieren, ohne dass diese IP-Adressen im öffentlichen Internet sichtbar sind."
    },
    {
      "question": "Was passiert, wenn ein Gerät mit einer privaten IP-Adresse auf das Internet zugreifen möchte?",
      "answer": "Wenn ein Gerät mit einer privaten IP-Adresse auf das Internet zugreifen möchte, erfolgt die Umwandlung der privaten Adresse in eine öffentliche IP-Adresse durch ein Verfahren namens NAT (Network Address Translation)."
    },
    {
      "question": "Was ist der Zweck der NAT bei privaten IP-Adressen?",
      "answer": "NAT (Network Address Translation) ermöglicht es Geräten mit privaten IP-Adressen, über eine einzige öffentliche IP-Adresse mit dem Internet zu kommunizieren, indem es die private Adresse in eine öffentliche Adresse umwandelt."
    },
    {
      "question": "Was ist LPWAN im Kontext des Internets der Dinge (IoT)?",
      "answer": "LPWAN (Low Power Wide Area Network) bietet eine hohe Reichweite, niedrigen Energieverbrauch und eine kostengünstige Lösung für die Vernetzung von IoT-Geräten."
    },
    {
      "question": "Was sind die Vorteile von LPWAN für IoT-Geräte?",
      "answer": "LPWAN bietet eine hohe Reichweite, niedrigen Energieverbrauch und eine kostengünstige Vernetzung für IoT-Geräte."
    },
    {
      "question": "Was ist ein LAN und wie wird es im Unternehmen verwendet?",
      "answer": "Ein LAN (Local Area Network) bietet hohe Bandbreite, geringe Latenzzeiten und hohe Sicherheit. Es ermöglicht den gemeinsamen Zugriff auf Ressourcen und die effiziente Kommunikation innerhalb des Unternehmens."
    },
    {
      "question": "Welche Vorteile bietet ein LAN für ein Unternehmen?",
      "answer": "Ein LAN bietet hohe Bandbreite, geringe Latenzzeiten und eine hohe Sicherheit, was eine effiziente Kommunikation und den gemeinsamen Zugriff auf Ressourcen im Unternehmen ermöglicht."
    },
    {
      "question": "Was bedeutet RAID und wie wird es verwendet?",
      "answer": "RAID (Redundant Array of Independent Disks) ist eine Technologie, die mehrere Festplatten zu einem einzigen logischen Laufwerk kombiniert, um die Datenverfügbarkeit und/oder Performance zu erhöhen. Es gibt verschiedene RAID-Level (z.B. RAID 0, RAID 1, RAID 5), die unterschiedliche Vorteile bei Geschwindigkeit, Datensicherheit und Redundanz bieten."
    },
    {
      "question": "Was ist der Unterschied zwischen RAID 0 und RAID 1?",
      "answer": "RAID 0 kombiniert Festplatten zu einem einzigen Volume zur Verbesserung der Lese- und Schreibgeschwindigkeit, bietet jedoch keine Redundanz. RAID 1 hingegen spiegelt die Daten auf zwei Festplatten, was eine höhere Datensicherheit bietet, aber keine Performance-Steigerung."
    },
    {
      "question": "Was bedeutet MTBF und warum ist es wichtig?",
      "answer": "MTBF (Mean Time Between Failures) ist eine Kennzahl, die die durchschnittliche Zeit beschreibt, die zwischen zwei Ausfällen eines Systems oder einer Festplatte vergeht. Ein hoher MTBF-Wert bedeutet, dass das System oder die Festplatte weniger wahrscheinlich ausfällt, was besonders in kritischen Infrastrukturen wichtig ist."
    },
    {
      "question": "Wie wird MTBF berechnet?",
      "answer": "MTBF wird normalerweise anhand von Systemtests oder historischen Ausfallraten berechnet. Die Berechnung ist eine statistische Schätzung der durchschnittlichen Zeit zwischen den Ausfällen eines Systems oder einer Festplatte."
    },
    {
      "question": "Was ist RADIUS und wie funktioniert es?",
      "answer": "RADIUS (Remote Authentication Dial-In User Service) ist ein zentraler Authentifizierungs-, Autorisierungs- und Abrechnungsprotokoll, das für die Verwaltung von Benutzerzugriffen auf Netzwerke und Dienste verwendet wird. Es ermöglicht einer zentralen Stelle, Benutzerdaten zu überprüfen und den Zugriff auf Netzwerkknoten zu steuern."
    },
    {
      "question": "Was sind die Vorteile von RADIUS für die Authentifizierung?",
      "answer": "RADIUS bietet eine zentralisierte Authentifizierung und Autorisierung, was die Verwaltung von Benutzern und deren Zugriffsrechten erleichtert. Es bietet auch zusätzliche Sicherheitsfunktionen wie die Verschlüsselung von Passwörtern während der Übertragung."
    },
    {
      "question": "Was ist NAS (Network Attached Storage)?",
      "answer": "NAS ist eine Speicherlösung, die über ein Netzwerk zugänglich ist. Es handelt sich um ein Gerät oder System, das mehrere Festplatten enthält und es Benutzern ermöglicht, Daten über das Netzwerk zu speichern und abzurufen."
    },
    {
      "question": "Was ist der Hauptvorteil von NAS?",
      "answer": "Der Hauptvorteil von NAS ist die zentrale Verwaltung von Daten, die über ein Netzwerk von mehreren Benutzern zugänglich sind, was die Datensicherung und das Teilen von Dateien vereinfacht.Datenbasiert speicherzugriffe"
    },
    {
      "question": "Wie funktioniert NAS?",
      "answer": "NAS ist ein eigenständiger Server, der über das Netzwerk verbunden ist und als zentraler Speicherort für Daten dient. Nutzer können über Dateifreigaben und Netzwerkprotokolle wie SMB, NFS oder AFP auf diese Daten zugreifen."
    },
    {
      "question": "Was ist SAN (Storage Area Network)?",
      "answer": "SAN ist ein spezialisiertes Netzwerk, das Speicherressourcen miteinander verbindet und diese Speicher über ein eigenes Netzwerk mit hoher Geschwindigkeit bereitstellt. Es bietet schnellen Zugriff auf Block-Level-Daten und wird hauptsächlich in großen Unternehmen genutzt.Blockbasierte Speicherzugriffe"
    },
    {
      "question": "Was unterscheidet SAN von NAS?",
      "answer": "Im Gegensatz zu NAS, das Dateien über das Netzwerk bereitstellt, bietet SAN Block-Level-Speicher, der wie ein lokaler Festplattenspeicher verwendet wird, und ist daher schneller und leistungsfähiger für große Datenmengen."
    },
    {
      "question": "Was sind die Vorteile von SAN?",
      "answer": "SAN bietet hohe Geschwindigkeit und geringe Latenz bei der Datenübertragung, was besonders für Anwendungen mit hohem Datenaufkommen wie Datenbanken oder virtuelle Maschinen vorteilhaft ist."
    },
    {
      "question": "Wann sollte man SAN anstelle von NAS verwenden?",
      "answer": "SAN eignet sich für Umgebungen mit hohem Datenaufkommen, wie z.B. große Datenbanken oder Virtualisierungsumgebungen, in denen hohe Performance und niedrige Latenz erforderlich sind. NAS ist hingegen besser für kleinere, weniger anspruchsvolle Anforderungen."
    },
    {
      "question": "Was sind typische Anwendungsfälle für NAS?",
      "answer": "NAS wird oft in Büros oder kleinen bis mittleren Unternehmen verwendet, um Daten zu speichern und diese über das Netzwerk zu teilen, z. B. für Datei-Backups, Medienarchivierung oder Homeoffice-Lösungen."
    },
    {
      "question": "Welche Netzwerkprotokolle verwendet NAS?",
      "answer": "NAS verwendet in der Regel Netzwerkprotokolle wie SMB (Server Message Block), NFS (Network File System) und AFP (Apple Filing Protocol) für den Zugriff auf die gespeicherten Daten."
    },
    {
      "question": "Was ist eine typische Konfiguration für SAN?",
      "answer": "SAN besteht typischerweise aus einer Kombination von speziellen Storage-Servern, Fibre Channel Switches und Speicher-Arrays, die über Fibre Channel oder iSCSI miteinander verbunden sind."
    },
    {
      "question": "Welche Vor- und Nachteile hat NAS im Vergleich zu SAN?",
      "answer": "Vorteile von NAS: Einfacher zu implementieren und kostengünstiger. Nachteile: Geringere Performance im Vergleich zu SAN, da es auf Datei-Ebene arbeitet. SAN bietet höhere Performance und wird für block-level Speicher verwendet, ist jedoch komplexer und teurer."
    },
    {
      question: "Welche Aufgabe hat der Datenbus?",
      answer: "Er überträgt Daten zwischen Komponenten."
    },
    {
      question: "Wozu dient der Steuerbus?",
      answer: "Er steuert Abläufe wie Lesen und Schreiben."
    },
    {
      question: "Was macht der Adressbus?",
      answer: "Er überträgt Speicheradressen."
    },
    {
      question: "Wo wird SRAM verwendet?",
      answer: "In den Cache-Speichern der CPU (L1, L2, L3)."
    },
    {
      question: "Was sind Vorteile von SRAM?",
      answer: "SRAM ist sehr schnell."
    },
    {
      question: "Was sind Nachteile von SRAM?",
      answer: "Er ist teuer und verbraucht viel Strom."
    },
    {
      question: "Was zeichnet den L1-Cache aus?",
      answer: "Er ist der schnellste, aber kleinste Cache."
    },
    {
      question: "Wie ist der L2-Cache im Vergleich zu L1 und L3?",
      answer: "Er ist mittelgroß und mittelschnell."
    },
    {
      question: "Welche Eigenschaft hat der L3-Cache?",
      answer: "Er ist am größten, aber auch am langsamsten."
    },
    {
      question: "Was ist ein Cache allgemein?",
      answer: "Ein Zwischenspeicher für häufig genutzte Daten und Befehle."
    },
    {
      question: "Was ist DRAM?",
      answer: "Ein typischer Arbeitsspeicher (RAM)."
    },
    {
      question: "Was sind Vorteile von DRAM?",
      answer: "Es ist günstiger und stromsparend."
    },
    {
      question: "Was ist ein Nachteil von DRAM?",
      answer: "Es ist langsamer als SRAM."
    },
    {
      question: "Was bewirkt DDR (Double Data Rate)?",
      answer: "Es verdoppelt die Übertragungsrate pro Taktzyklus."

    },
    {
      question: "Wie greift man unter Windows auf Netzwerkeinstellungen zu?",
      answer: "Systemsteuerung → Netzwerk und Internet → Netzwerk- und Freigabecenter."
    },
    {
      question: "Was zeigt der Befehl 'ipconfig'?",
      answer: "Basisinformationen zur IP-Konfiguration."
    },
    {
      question: "Was zeigt 'ipconfig /all'?",
      answer: "Detaillierte Informationen zur Netzwerkkonfiguration."
    },
    {
      question: "Was macht 'ipconfig /release'?",
      answer: "Gibt die aktuelle IP-Adresse frei."
    },
    {
      question: "Was macht 'ipconfig /renew'?",
      answer: "Fordert eine neue IP-Adresse vom DHCP an."
    },
    {
      question: "Wofür steht der Linux-Befehl 'ifconfig'?",
      answer: "Er zeigt die aktuelle Netzwerk-Konfiguration an."
    },
    {
      question: "Wozu dient 'dhclient' unter Linux?",
      answer: "Zum Erneuern der IP-Adresse via DHCP."

    },
    {
      question: "Was testet 'ping 127.0.0.1' oder 'ping localhost'?",
      answer: "Ob der TCP/IP-Stack korrekt funktioniert."
    },
    {
      question: "Was bewirkt 'ping <IP-Adresse>'?",
      answer: "Es testet die Verbindung zu einem anderen Rechner."
    },
    {
      question: "Was prüft 'ping <Domain>'?",
      answer: "Verbindung und Namensauflösung (DNS)."
    },
    {
      question: "Wozu dient eine MAC-Adresse?",
      answer: "Sie ist eine eindeutige Adresse jeder Netzwerkkarte."
    },
    {
      question: "Was macht das ARP-Protokoll?",
      answer: "Es ermittelt MAC-Adressen im lokalen Netzwerk."
    },
    {
      question: "Was zeigt der Befehl 'arp –a'?",
      answer: "Eine Liste aller bekannten MAC/IP-Zuordnungen."
    },
    {
      question: "Was bewirkt 'arp –d'?",
      answer: "Löscht die ARP-Tabelle."
    },
    {
      question: "Wie ist eine IPv4-Adresse aufgebaut?",
      answer: "Sie besteht aus 4 Oktetten = 32 Bit."
    },
    {
      question: "Was ist der Netzanteil?",
      answer: "Alle Bits auf der linken Seite."
    },
    {
      question: "Was ist der Hostanteil?",
      answer: "Alle Bits auf der rechten Seite."
    },
    {
      question: "Wie kommunizieren Rechner im selben Netz?",
      answer: "Sie kommunizieren direkt miteinander."
    },
    {
      question: "Wie kommunizieren Rechner in verschiedenen Netzen?",
      answer: "Sie kommunizieren über einen Router."
    },
    {
      question: "Was sind private IP-Adressen der Klasse A?",
      answer: "10.0.0.0 – 10.255.255.255 mit Maske 255.0.0.0"
    },
    {
      question: "Was sind private IP-Adressen der Klasse B?",
      answer: "172.16.0.0 – 172.31.255.255 mit Maske 255.255.0.0"
    },
    {
      question: "Was sind private IP-Adressen der Klasse C?",
      answer: "192.168.0.0 – 192.168.255.255 mit Maske 255.255.255.0"
    },
    {
      question: "Was ist die Loopback-Adresse?",
      answer: "127.0.0.1 – Sie verweist auf den eigenen Rechner."
    },
    {
      question: "Was ist eine allgemeine Broadcast-Adresse?",
      answer: "255.255.255.255 – sendet an alle im Netz."
    },
    {
      question: "Was ist eine typische Broadcast-Adresse innerhalb eines Netzes?",
      answer: "Beispiel: 192.168.1.255"
    },
    {
      question: "Was ist eine APIPA-Adresse?",
      answer: "Automatisch vergebene IP-Adresse bei DHCP-Fehler: 169.254.0.0/16"
    },
    {
      question: "Wie kann man einen Router zurücksetzen?",
      answer: "Meist über die Reset-Taste oder über eine Konsolenverbindung (z.B. mit Putty oder TeraTerm)."
    },
    {
      question: "Welche Zugriffsarten zur Router-Konfiguration gibt es?",
      answer: "• Webinterface (HTTP/HTTPS)\n• Telnet / SSH\n• SNMP\n• Konsole (seriell)"
    },
    {
      question: "Was ist die Standard-IP, der Login und ein Befehl beim bintec RS120?",
      answer: "• Standard-IP: 192.168.0.254\n• Login: admin / funkwerk\n• Befehl zur NAT-Tabelle: ipnattable"
    },
    {
      question: "Was macht ein DHCP-Server?",
      answer: "Er weist IP-Adressen und weitere Netzwerkeinstellungen automatisch zu."
    },
    {
      question: "Was macht ein DNS-Relay im Router?",
      answer: "Es leitet DNS-Anfragen weiter, wenn kein eigener DNS-Server im Netzwerk vorhanden ist."
    },

    // Netzwerktypen nach Reichweite
    {
      question: "Was ist ein CAN (Controller Area Network)?",
      answer: "Verbindung einzelner, einfacher IT-Komponenten – innerhalb weniger Meter (früher: Car Area Network)."
    },
    {
      question: "Was ist ein FAN (Field Area Network)?",
      answer: "Vernetzung von Automatisierungskomponenten über mehrere 100 Meter."
    },
    {
      question: "Was ist ein PAN (Personal Area Network)?",
      answer: "Vernetzung im häuslichen Bereich – Reichweite bis ca. 100 Meter."
    },
    {
      question: "Was ist ein LAN (Local Area Network)?",
      answer: "Privates Netzwerk für Gebäude oder Firmen – Reichweite mehrere 100 Meter."
    },
    {
      question: "Was ist ein MAN (Metropolitan Area Network)?",
      answer: "Stadtweites Netzwerk – verbindet mehrere Firmen oder Standorte, bis ca. 100 km."
    },
    {
      question: "Was ist ein WAN (Wide Area Network)?",
      answer: "Verbindet Netzwerke über Länder oder Kontinente – Reichweite mehrere 1000 km."
    },
    {
      question: "Was ist ein GAN (Global Area Network)?",
      answer: "Globales Netzwerk – deckt den gesamten Planeten ab. Begriff wird kaum noch verwendet, da WAN ähnlich ist."
    },
  ],
  "IT-Tec s3": [
    {
      "question": "FTP-Data: Welcher Port wird für den Datentransfer bei FTP verwendet?",
      "answer": "Port 20"
    },
    {
      "question": "FTP-Data: Was wird mit Port 20 bei FTP gemacht?",
      "answer": "Port 20 wird für den Datentransfer genutzt, nachdem die Verbindung hergestellt wurde."
    },
    {
      "question": "FTP-Control: Welcher Port wird für die Steuerung des FTP-Datenverkehrs verwendet?",
      "answer": "Port 21"
    },
    {
      "question": "FTP-Control: Was wird mit Port 21 bei FTP gemacht?",
      "answer": "Port 21 wird für die Kommunikation und Steuerung zwischen FTP-Server und -Client genutzt."
    },
    {
      "question": "SSH: Welcher Port wird für den sicheren Fernzugriff auf Systeme verwendet?",
      "answer": "Port 22"
    },
    {
      "question": "SSH: Was ermöglicht SSH?",
      "answer": "SSH ermöglicht verschlüsselten Remote-Zugriff auf Server und Systeme."
    },
    {
      "question": "TELNET: Welcher Port wird für unverschlüsselten Fernzugriff auf Systeme verwendet?",
      "answer": "Port 23"
    },
    {
      "question": "TELNET: Was ist an TELNET problematisch?",
      "answer": "TELNET ist unsicher, da es keine Verschlüsselung bietet."
    },
    {
      "question": "SMTP: Welcher Port wird für den Versand von E-Mails verwendet?",
      "answer": "Port 25"
    },
    {
      "question": "SMTP: Was macht SMTP?",
      "answer": "SMTP wird genutzt, um E-Mails zwischen Servern zu versenden."
    },
    {
      "question": "DNS: Welcher Port wird für DNS-Anfragen verwendet?",
      "answer": "Port 53"
    },
    {
      "question": "DNS: Was macht DNS?",
      "answer": "DNS übersetzt Domainnamen in IP-Adressen."
    },
    {
      "question": "HTTP: Welcher Port wird für unverschlüsselte Kommunikation im Web verwendet?",
      "answer": "Port 80"
    },
    {
      "question": "HTTP: Was ist HTTP?",
      "answer": "HTTP ist das grundlegende Protokoll für den Austausch von Webseiteninhalten."
    },
    {
      "question": "HTTPS: Welcher Port wird für verschlüsselte Kommunikation im Web verwendet?",
      "answer": "Port 443"
    },
    {
      "question": "HTTPS: Was ist der Unterschied zwischen HTTP und HTTPS?",
      "answer": "HTTPS nutzt SSL/TLS zur Verschlüsselung der Kommunikation und schützt die Privatsphäre."
    },
    {
      "question": "POP3: Welcher Port wird zum Abrufen von E-Mails verwendet?",
      "answer": "Port 110"
    },
    {
      "question": "POP3: Was macht POP3?",
      "answer": "POP3 wird genutzt, um E-Mails vom Server herunterzuladen und lokal zu speichern."
    },
    {
      "question": "RDP: Welcher Port wird für den Remote-Desktop-Zugriff auf Windows-Systeme verwendet?",
      "answer": "Port 3389"
    },
    {
      "question": "RDP: Was ermöglicht RDP?",
      "answer": "RDP ermöglicht es, einen Windows-Computer remote zu steuern."
    },
    {
      "question": "MySQL: Welcher Port wird für den Zugriff auf MySQL-Datenbanken verwendet?",
      "answer": "Port 3306"
    },
    {
      "question": "MySQL: Was ist MySQL?",
      "answer": "MySQL ist ein relationales Datenbankverwaltungssystem."
    },
    {
      "question": "Oracle-DB: Welcher Port wird für den Zugriff auf Oracle-Datenbanken verwendet?",
      "answer": "Port 1521"
    },
    // IT-Systeme im Netzwerk
    {
      question: "Was ist ein Server in einem Netzwerk?",
      answer: "Ein Server stellt Dienste zur Verfügung, z.B. Domain Controller, Fileserver, DHCP oder DNS."
    },
    {
      question: "Was ist ein Client in einem Netzwerk?",
      answer: "Ein Client nutzt die Dienste, z.B. ein Arbeitsplatzrechner oder ein Thin Client."
    },
    {
      question: "Was ist ein Terminal in einem Netzwerk?",
      answer: "Ein Terminal dient nur zur Ein- und Ausgabe und ist mit einem Terminalserver verbunden – z.B. in Kassensystemen."
    },

    // Terminal-Server
    {
      question: "Was ist ein Terminal-Server?",
      answer: "Ein Terminal-Server ermöglicht es, dass mehrere Clients auf eine zentrale Serverinstanz zugreifen und Programme oder Desktops ausführen, als ob sie lokal darauf arbeiten würden. Wird oft für den Fernzugriff auf Systeme verwendet."
    },
    {
      question: "Wann wird ein Terminal-Server eingesetzt?",
      answer: "Terminal-Server werden eingesetzt, wenn Benutzer von verschiedenen Orten auf die gleiche Anwendung oder Desktopumgebung zugreifen müssen, z.B. bei Remote-Desktop-Diensten."
    },

    // Cluster
    {
      question: "Was ist ein Cluster in der IT?",
      answer: "Ein Cluster ist eine Gruppe von Computern oder Servern, die miteinander verbunden sind, um als ein einzelnes System zu arbeiten. Dies erhöht die Verfügbarkeit und Skalierbarkeit von Diensten."
    },
    {
      question: "Warum wird ein Cluster in einem Netzwerk eingesetzt?",
      answer: "Cluster werden eingesetzt, um die Verfügbarkeit und Leistung zu verbessern, z.B. in High-Availability-Systemen oder um die Last auf mehrere Server zu verteilen (Lastenverteilung)."
    }, // Hub
    {
      question: "Was ist ein Hub?",
      answer: "Ein Hub ist ein einfaches Netzwerkgerät, das Datenpakete an alle angeschlossenen Geräte weiterleitet, ohne zu erkennen, wer der Empfänger ist. Dadurch entsteht unnötiger Datenverkehr und das Netzwerk wird ineffizient."
    },

    {
      question: "Warum werden Hubs heutzutage kaum noch verwendet?",
      answer: "Hubs sind ineffizient, da sie Daten an alle Geräte im Netzwerk senden, was den Datenverkehr überlastet und das Netzwerk unsicher macht. Daher sind sie durch Switches ersetzt worden."
    },
    {
      question: "Auf weclhe ISO OSI Schicht arbeitet ein Hub?",
      answer: "Ein Hub arbeitet auf der physikalischen Schicht (Layer 1) des OSI-Modells. Er überträgt elektrische Signale, ohne die Daten zu analysieren oder zu filtern."
    },
    // Switch
    {
      question: "Was ist der Unterschied zwischen einem Hub und einem Switch?",
      answer: "Ein Switch leitet Datenpakete nur an den richtigen Empfänger weiter, indem er erkennt, welches Gerät an welchem Port angeschlossen ist, während ein Hub die Daten an alle Geräte sendet."
    },
    {
      question: "Warum sind Switches effizienter als Hubs?",
      answer: "Switches sind effizienter, da sie den Datenverkehr gezielt an den richtigen Empfänger senden, wodurch der Datenfluss optimiert wird und weniger Kollisionen entstehen."
    },
    {
      question: "Auf welcher ISO OSI Schicht arbeitet ein Switch?",
      answer: "Ein Switch arbeitet auf der Sicherungsschicht (Layer 2) des OSI-Modells. Er analysiert die MAC-Adressen der Datenpakete, um den richtigen Empfänger zu bestimmen."
    },
    // Router
    {
      question: "Was ist die Funktion eines Routers?",
      answer: "Ein Router verbindet verschiedene Netzwerke miteinander, beispielsweise ein Heimnetzwerk mit dem Internet, und findet den besten Weg, um Daten von einem Netzwerk ins andere zu senden."
    },
    {
      question: "Welche Aufgaben übernimmt ein Router in den meisten Haushalten?",
      answer: "Ein Router übernimmt Aufgaben wie die Zuweisung von IP-Adressen (DHCP), Firewall-Schutz, WLAN-Verwaltung und ermöglicht den Zugang zum Internet."
    },
    {
      question: "Auf weclhe ISO OSI Schicht arbeitet ein Router",
      answer: "Ein Router arbeitet auf der Netzwerkebene (Layer 3) des OSI-Modells. Er analysiert IP-Adressen, um Datenpakete zwischen verschiedenen Netzwerken weiterzuleiten."
    },
    // Bridge
    {
      question: "Was ist eine Bridge in Netzwerken?",
      answer: "Eine Bridge verbindet zwei Netzwerke oder Netzwerksegmente miteinander und sorgt dafür, dass sie wie ein einziges Netzwerk arbeiten, indem sie nur notwendigen Datenverkehr weiterleitet."
    },
    {
      question: "Warum werden Bridges heutzutage seltener verwendet?",
      answer: "Die Funktion von Bridges ist heute oft in Switches integriert, die effizienter arbeiten, daher sind sie in modernen Netzwerken weniger verbreitet."
    },
    {
      question: "Auf weclhe ISO OSI Schicht arbeitet ein Bridge",
      answer: "Eine Bridge arbeitet auf der Sicherungsschicht (Layer 2) des OSI-Modells. Sie analysiert die MAC-Adressen der Datenpakete, um den Datenverkehr zwischen den Netzwerken zu steuern."
    },
    // Ring-Topologie
    {
      question: "Wie funktioniert eine Ring-Topologie?",
      answer: "In einer Ring-Topologie sind alle Geräte kreisförmig miteinander verbunden. Daten werden von Gerät zu Gerät weitergereicht, wobei ein Ausfall im Ring das gesamte Netzwerk stören kann."
    },
    {
      question: "Welche Nachteile hat die Ring-Topologie?",
      answer: "Ein Ausfall eines Geräts oder Kabels kann das ganze Netzwerk lahmlegen, es sei denn, es ist eine redundante Verbindung vorhanden. Zudem sind Reparaturen aufwändig."
    },

    // Bus-Topologie
    {
      question: "Wie funktioniert eine Bus-Topologie?",
      answer: "In der Bus-Topologie sind alle Geräte an ein zentrales Kabel angeschlossen, über das die Daten übertragen werden. Jedes Gerät prüft, ob die Daten für es bestimmt sind."
    },
    {
      question: "Welche Nachteile hat die Bus-Topologie?",
      answer: "Datenkollisionen sind möglich, und ein Fehler im zentralen Bus kann das gesamte Netzwerk lahmlegen. Außerdem wird das Netzwerk langsam bei vielen Teilnehmern."
    },

    // Stern-Topologie
    {
      question: "Was ist die Hauptvorteil der Stern-Topologie?",
      answer: "In einer Stern-Topologie ist der Ausfall eines einzelnen Geräts nicht für den Rest des Netzwerks problematisch, und das Netzwerk ist einfach zu erweitern und zu verwalten."
    },
    {
      question: "Was ist ein Nachteil der Stern-Topologie?",
      answer: "Der zentrale Knotenpunkt ist ein Single Point of Failure – fällt dieser aus, ist das gesamte Netzwerk betroffen."
    },

    // Baum-Topologie
    {
      question: "Wie funktioniert eine Baum-Topologie?",
      answer: "Die Baum-Topologie ist eine hierarchische Struktur aus mehreren Stern-Topologien, die in Ebenen organisiert sind. Sie ermöglicht eine strukturierte Verwaltung großer Netzwerke."
    },
    {
      question: "Was sind Nachteile der Baum-Topologie?",
      answer: "Die Baum-Topologie hat einen höheren Konfigurationsaufwand und ist komplexer in der Verwaltung."
    },

    // Vermaschte Topologie (Mesh)
    {
      question: "Was ist die Vermaschte Topologie?",
      answer: "In einer vermaschten Topologie sind die Geräte direkt miteinander verbunden, sodass es mehrere Datenwege gibt. Diese Struktur ist fehlertolerant und sehr robust."
    },
    {
      question: "Was ist ein Nachteil der Vermaschten Topologie?",
      answer: "Der hohe Verkabelungsaufwand und die Komplexität der Konfiguration machen die vermaschte Topologie teuer, vor allem bei vielen Geräten."
    },

    // Backbone-Topologie
    {
      question: "Was ist die Backbone-Topologie?",
      answer: "Die Backbone-Topologie beschreibt eine zentrale Hochgeschwindigkeitsverbindung, an die mehrere kleinere Netzwerke angeschlossen sind, und fungiert als 'Rückgrat' eines großen Netzwerks."
    },
    {
      question: "Was sind die Vorteile der Backbone-Topologie?",
      answer: "Die Backbone-Topologie bietet eine hohe Leistung und eine übersichtliche Struktur für große Netzwerke."
    },

    // EDV
    {
      question: "Was versteht man unter EDV?",
      answer: "EDV steht für elektronische Datenverarbeitung und umfasst die Erfassung, Bearbeitung, den Transport und die Ausgabe von Daten durch Software auf Hardware-Systemen."
    },

    // Sicherheit im WLAN
    {
      question: "Wie kann die Sicherheit im WLAN durch SSID-Verstecken verbessert werden?",
      answer: "Das Verstecken der SSID (Netzwerkname) macht das WLAN unsichtbar für andere, sodass nur Personen, die den Namen kennen, eine Verbindung herstellen können. Dies erhöht die Sicherheit des Netzwerks."
    },
    {
      question: "Wie kann man die SSID in einem WLAN verstecken?",
      answer: "Die SSID kann im Web-Interface des Routers deaktiviert werden, meist über eine Adresse wie http://192.168.1.245."
    },// SSID verstecken
    {
      question: "Wie kann man die SSID im WLAN verstecken?",
      answer: "Die SSID kann im Web-Interface des Routers deaktiviert werden (z.B. http://192.168.1.245), sodass das WLAN unsichtbar für andere wird. Nur wer den Netzwerknamen kennt, kann sich verbinden."
    },
    {
      question: "Was passiert, wenn die SSID im WLAN versteckt wird?",
      answer: "Wenn die SSID versteckt wird, können sich nur Geräte mit Kenntnis des Netzwerknamens verbinden. Das Netzwerk ist für andere nicht sichtbar."
    },

    // MAC-Adressfilter
    {
      question: "Was ist der MAC-Adressfilter im WLAN?",
      answer: "Der MAC-Adressfilter erlaubt es, nur bestimmten Geräten die Verbindung zum WLAN zu gestatten, indem ihre MAC-Adressen im Router unter den 'Advanced'-Einstellungen eingetragen werden."
    },
    {
      question: "Wie aktiviert man den MAC-Adressfilter im WLAN?",
      answer: "Die MAC-Adressen der Geräte müssen im Router unter 'Advanced' eingetragen werden. Nach der Änderung muss man 'Apply' klicken, um die Einstellungen zu speichern."
    },

    // Verschlüsselung aktivieren
    {
      question: "Warum sollte man die Verschlüsselung im WLAN aktivieren?",
      answer: "Die Verschlüsselung schützt die Daten im WLAN vor unbefugtem Zugriff und stellt sicher, dass niemand die Kommunikation mitlesen kann."
    },
    {
      question: "Welche Verschlüsselungsmethoden sind im WLAN empfehlenswert?",
      answer: "WPA2 ist die sicherste Option und sollte bevorzugt werden. 64-Bit-WEP ist veraltet und unsicher, daher sollte es vermieden werden."
    },

    // VLAN (Virtual Local Area Network)
    {
      question: "Was ist ein VLAN?",
      answer: "Ein VLAN (Virtual Local Area Network) unterteilt ein physisches Netzwerk in mehrere virtuelle Netzwerke. So können Geräte in unterschiedlichen, isolierten Netzwerken, obwohl sie physisch im gleichen Netzwerk sind. Jedes Vlan hat eine ID von 1 bis 4095, die Ports des switches werden den VLANs zugewiesen."
    },
    {
      question: "Warum werden VLANs eingesetzt?",
      answer: "VLANs bieten mehr Sicherheit, da Geräte in verschiedenen VLANs nicht direkt miteinander kommunizieren können. Sie verbessern die Performance, indem sie den Broadcast-Verkehr verringern, und bieten Flexibilität, da keine physische Änderung an der Infrastruktur nötig ist."
    },
    {
      question: "Was sind die vorteile von Vlans?",
      answer: "Broadcast bereiche werden verkleiner, was kollisionen veringert. Mehr Sicherheit durch Abschrimung der Gruppen, "
    },
    {
      question: "Was ist ein Trunk-Ports in VLANs?",
      answer: "Ein Trunk-Port in VLANs ist ein spezieller Switch-Port, der Verkehr von mehreren VLANs gleichzeitig transportieren kann. Er verbindet meist Switches untereinander oder einen Switch mit einem Router "

    },
    {
      question: "Wie ist ein Access-Ports in VLANs?",
      answer: "Ein Access-Port in VLANs ist ein Switch-Port, der nur Verkehr eines einzelnen VLANs transportiert. Er wird verwendet, um Endgeräte wie Computer oder Drucker mit dem Netzwerk zu verbinden."
    },
    // VLAN-Tagging
    {
      question: "Was ist VLAN-Tagging?",
      answer: "VLAN-Tagging ist der Prozess, bei dem jedem Datenpaket ein Tag hinzugefügt (swichen Source Mac und Type) wird, das anzeigt, zu welchem VLAN es gehört. Dies ermöglicht es, den Verkehr innerhalb des VLANs korrekt zu verwalten."
    },

    // Sicherheit und VLANs
    {
      question: "Warum bietet VLAN zusätzliche Sicherheit?",
      answer: "VLANs trennen Netzwerke (z.B. Mitarbeiter und Gäste) und verhindern so, dass Geräte in einem VLAN automatisch auf Ressourcen in einem anderen VLAN zugreifen können. Dies bietet eine zusätzliche Sicherheitsebene."
    },

    // Cyber-Bedrohungen
    {
      question: "Was ist ein Advanced Persistent Threat (APT)?",
      answer: "Ein APT ist eine gezielte, langanhaltende Cyber-Attacke, bei der Angreifer fortgeschrittene Techniken verwenden, um unentdeckt in ein Netzwerk einzudringen und Daten zu stehlen oder zu manipulieren."
    },
    {
      question: "Was ist Phishing?",
      answer: "Phishing ist eine betrügerische Methode, bei der Angreifer versuchen, vertrauliche Informationen wie Passwörter oder Bankdaten zu stehlen, indem sie sich als vertrauenswürdige Quelle ausgeben (z.B. Bank oder Online-Shop)."
    },
    {
      question: "Was ist Ransomware?",
      answer: "Ransomware ist eine Art von Malware, die den Zugriff auf ein System oder Daten blockiert und das Opfer auffordert, ein Lösegeld zu zahlen, um wieder Zugriff zu erhalten."
    },
    {
      question: "Was ist ein Verschlüsselungstrojaner?",
      answer: "Ein Verschlüsselungstrojaner ist eine spezielle Art von Ransomware, die Daten auf einem Computer verschlüsselt und nur gegen Zahlung eines Lösegelds wieder entschlüsselt."
    },
    {
      question: "Was ist Spyware?",
      answer: "Spyware ist Malware, die heimlich Daten von einem Computer oder Gerät sammelt und diese an Dritte weitergibt, oft ohne Wissen des Nutzers."
    },
    {
      question: "Was ist ein Exploit?",
      answer: "Ein Exploit ist eine Schwachstelle in einem System oder einer Software, die von Angreifern ausgenutzt wird, um unautorisierten Zugang zu einem Computer oder Netzwerk zu erhalten."
    },
    {
      question: "Was ist Malware?",
      answer: "Malware (malicious software) ist eine Sammlung schadhafter Software, die darauf abzielt, Systeme zu schädigen oder unautorisierten Zugriff zu erlangen. Beispiele sind Viren, Würmer, Trojaner und Ransomware."
    },

    // Informationssicherheitsbeauftragter und Datenschutzbeauftragter
    {
      question: "Was ist die Aufgabe eines Informationssicherheitsbeauftragten (ISB)?",
      answer: "Ein ISB ist verantwortlich für die Planung, Umsetzung und Überwachung von Informationssicherheitsrichtlinien, um die Vertraulichkeit, Integrität und Verfügbarkeit von Daten zu gewährleisten."
    },
    {
      question: "Was macht ein Datenschutzbeauftragter?",
      answer: "Ein Datenschutzbeauftragter sorgt dafür, dass die Datenschutzbestimmungen eingehalten werden, und berät die Organisation zu allen Fragen des Datenschutzes."
    },

    // Datenschutz und Datensicherheit
    {
      question: "Was versteht man unter personenbezogenen Daten?",
      answer: "Personenbezogene Daten sind alle Informationen, die sich auf eine identifizierte oder identifizierbare Person beziehen, wie Name, Adresse, Telefonnummer oder E-Mail-Adresse."
    },
    {
      question: "Was ist der Unterschied zwischen Datenschutz und Datensicherheit?",
      answer: "Datenschutz bezieht sich auf den Schutz personenbezogener Daten vor unbefugtem Zugriff, während Datensicherheit Maßnahmen umfasst, die verhindern, dass Daten verloren gehen oder unbefugt verändert werden."
    },
  ],
  "IT-Tec s4": [
    {
      "question": "Was ist eine statische IP-Adresse?",
      "answer": "Eine statische IP-Adresse bleibt immer gleich und wird manuell einem Gerät zugewiesen – z.B. für Server oder Drucker."
    },

    {
      "question": "Wie bekommt ein Gerät eine dynamische IP-Adresse?",
      "answer": "Dynamische IP-Adressen werden automatisch über DHCP (Dynamic Host Configuration Protocol) vom Router oder Server vergeben."
    },

    {
      "question": "Was ist redundante Hardware?",
      "answer": "Redundante Hardware sind doppelt vorhandene Komponenten wie Netzteile, Festplatten oder Server, die bei einem Ausfall automatisch einspringen, um einen unterbrechungsfreien Betrieb zu gewährleisten."
    },
    {
      "question": "Was ist ein Failover-Cluster?",
      "answer": "Ein Failover-Cluster ist ein Zusammenschluss mehrerer Server, bei dem ein anderer Server automatisch übernimmt, wenn einer ausfällt, um die Verfügbarkeit von Diensten sicherzustellen."
    },
    {
      "question": "Was ist eine Paketfilter-Firewall?",
      "answer": "Eine Paketfilter-Firewall überprüft eingehende und ausgehende Datenpakete anhand von Regeln (z.B. IP-Adresse, Port, Protokoll) und entscheidet, ob sie weitergeleitet oder blockiert werden."
    },
    {
      "question": "Was ist ein Anwendungs-Gateway (auch Proxy-Firewall genannt)?",
      "answer": "Ein Anwendungs-Gateway filtert den Datenverkehr auf der Anwendungsebene. Es überprüft und kontrolliert die Kommunikation zwischen Clients und Servern und schützt so vor Angriffen, die auf spezifische Anwendungen abzielen."
    },

    {
      "question": "Was ist Power over Ethernet (PoE)?",
      "answer": "Power over Ethernet (PoE) ist eine Technologie, die es ermöglicht, Geräte über Ethernet-Kabel mit Strom zu versorgen."
    },
    {
      "question": "Was ist eine Netzwerktopologie?",
      "answer": "Beschreibt die Struktur und Anordnung der Geräte zueinander im Netzwerk. Beispiele sind Bus-, Stern-, Ring- und Mesh-Topologie."
    },

    {
      "question": "Was ist ein Paketfilter-Firewall?",
      "answer": "Prüft Netzwerkpakete auf OSI-Schicht 3/4."
    },
    {
      "question": "Was ist eine Application-Firewall (NGFW)?",
      "answer": "Prüft den Verkehr auf Anwendungsebene (OSI-Schicht 7)."
    },
    {
      "question": "Was ist ein Device Security Check?",
      "answer": "Überprüfung eines Geräts auf Schwachstellen wie: Betriebssystemeinstellungen, Netzwerkkonfiguration und Verschlüsselung."
    },
    {
      "question": "Was ist RADIUS im Bereich WLAN?",
      "answer": "Authentifizierungsprotokoll, häufig für WLAN-Zugriffe verwendet. RADIUS Accounting protokolliert Nutzeraktivitäten im Netzwerk."
    },
    {
      "question": "Was ist Subnetz-ID IPv6 (Prefix)?",
      "answer": "Identifiziert das Subnetz."
    },
    {
      "question": "Was ist Interface-ID IPv6?",
      "answer": "Identifiziert ein Gerät innerhalb eines Subnetzes."
    },
    {
      "question": "Was sind die Vorteile von IPv6?",
      "answer": "2^128 Adressen, Integrierte Sicherheit (IPSec)."
    },
    {
      "question": "Was ist Routing (Netzwerke)?",
      "answer": "Weiterleitung zwischen Netzwerken."
    },
    {
      "question": "Was ist Switching (Netzwerke)?",
      "answer": "Weiterleitung innerhalb eines Netzwerks."
    },
    {
      "question": "Was ist IPsec (Internet Protocol Security)?",
      "answer": "Wird oft in VPNs eingesetzt. Bietet Verschlüsselung, Authentizität und Integrität von IP-Paketen. Ermöglicht eine sichere Datenübertragung über unsichere Netzwerke (z.B. Internet)."
    },
    {
      "question": "Was ist ein Vollbackup?",
      "answer": "Ein Vollbackup sichert alle Daten vollständig."
    },
    {
      "question": "Was ist eine inkrementelle Sicherung?",
      "answer": "Nach der erstellung einer Vollsicherung, wird bei einer Sicherung zu der letzten Sicherung nur der unterschied gesichert."
    },
    {
      "question": "Was ist eine differenzielle Sicherung?",
      "answer": "Es wird eine Vollsicherung gemacht und  dann wird immer alles gesichert, was seit der letzten Vollsicherung geändert wurde."
    },
    {
      "question": "Was ist das Generationenprinzip in einer Backup-Strategie?",
      "answer": "Das Generationenprinzip beschreibt unterschiedliche Backup-Arten: Sohn (tägliches Backup), Vater (wöchentliches Backup) und Großvater (monatliches Backup)."
    },
    {
      "question": "Was ist die 3-2-1 Backup-Regel bei Datensicherheit?",
      "answer": "Die 3-2-1 Regel besagt: 3 Kopien der Daten (inkl. Original), 2 verschiedene Speichermedien und 1 Kopie an einem sicheren Ort."
    },
    {
      "question": "Was ist eine Disaster Recovery-Strategie und -Maßnahme im Bereich IT-Systeme?",
      "answer": "Disaster Recovery umfasst Strategien und Maßnahmen zur Wiederherstellung von IT-Systemen nach Katastrophen, wie Cyberangriffen oder Stromausfällen, um Ausfallzeiten und Datenverlust zu minimieren."
    },
    {
      "question": "Was ist RTO (Recovery Time Objective)?",
      "answer": "RTO bezeichnet die maximal akzeptierte Zeitspanne, bis die Systemfunktionalität nach einem Ausfall wiederhergestellt ist."
    },
    {
      "question": "Was ist RPO (Recovery Point Objective)?",
      "answer": "RPO beschreibt den maximal akzeptierten Datenverlust, gemessen in Zeit (z.B. 1 Stunde alte Daten dürfen verloren gehen)."
    },
    {
      "question": "Was sind X.509-Zertifikate?",
      "answer": "X.509-Zertifikate sind der Standard für digitale Zertifikate und enthalten Informationen wie den Namen des Inhabers, den öffentlichen Schlüssel, den Signaturalgorithmus und die Zertifizierungsstelle (CA)."
    },

    {
      "question": "Was ist ein PAN (Personal Area Network)?",
      "answer": "Ein kleines, privates Netzwerk zur Verbindung persönlicher Geräte über kurze Distanz (z.B. Bluetooth)."
    },
    {
      "question": "Was ist ein Access Point?",
      "answer": "Ein Access Point erweitert die Reichweite eines WLANs und ermöglicht den Zugang zum Netzwerk."
    },
    {
      "question": "Was ist Quality of Service (QoS)?",
      "answer": "QoS gibt Anwendungen unterschiedliche Prioritäten, damit z.B. Video- oder Sprachdaten bevorzugt übertragen werden."
    },
    {
      "question": "Welche Cloud-Modelle gibt es?",
      "answer": "Public Cloud (öffentlich), Private Cloud (intern, geschützt) und Hybride Cloud (Kombination aus beiden)."
    },
    {
      "question": "Vor was schützt ein RAID?",
      "answer": "RAID schützt in erster Linie vor physischem Festplattenschaden. Es bietet keine Sicherheit gegen Virenbefall oder versehentliches Löschen."
    },
    {
      "question": "Was ist DHCP?",
      "answer": "DHCP (Dynamic Host Configuration Protocol) ist ein Netzwerkprotokoll, das automatisch IP-Adressen und andere Netzwerkkonfigurationsinformationen an Geräte im Netzwerk verteilt."
    },
    {
      "question": "Was ist der Zweck von DHCP?",
      "answer": "Der Zweck von DHCP ist es, den Prozess der manuellen Konfiguration von Netzwerkeinstellungen zu automatisieren und Geräten automatisch IP-Adressen zuzuweisen."
    },
    {
      "question": "Welche Rolle spielt der DHCP-Server?",
      "answer": "Der DHCP-Server weist den DHCP-Clients IP-Adressen und andere Netzwerkkonfigurationsinformationen aus einem vordefinierten Pool zu."
    },
    {
      "question": "Was ist ein DHCP-Client?",
      "answer": "Ein DHCP-Client ist ein Gerät, das eine IP-Adresse und Netzwerkkonfigurationen benötigt und eine Anfrage an den DHCP-Server sendet."
    },
    {
      "question": "Was ist eine Lease-Zeit in DHCP?",
      "answer": "Die Lease-Zeit ist die Gültigkeitsdauer einer zugewiesenen IP-Adresse. Nach Ablauf dieser Zeit muss der Client die IP-Adresse erneuern oder eine neue anfordern."
    },
    {
      "question": "Welche zusätzlichen Informationen kann ein DHCP-Server übermitteln?",
      "answer": "Neben der IP-Adresse kann der DHCP-Server auch Informationen wie Subnetzmaske, Standardgateway, DNS-Server und eventuell Hostnamen, Domainnamen und NTP-Server übermitteln."
    },
    {
      "question": "Wie werden Zeiten wie Lease-Duration und Renewal Time im DHCP übermittelt?",
      "answer": "Diese Informationen werden über DHCP-Optionen wie 'Leaseduration' und 'Renewal Time' übermittelt."
    },
    {
      "question": "Welche wichtige Information übermittelt der Client im DHCP Discover-Frame?",
      "answer": "Der Client übermittelt in der DHCP-Discover-Nachricht oft die angeforderte (alte) IP-Adresse."
    },
    {
      "question": "Was ist der DORA-Prozess im DHCP?",
      "answer": "DORA beschreibt den Ablauf, bei dem ein Gerät eine IP-Adresse über DHCP erhält: Discover, Offer, Request, Acknowledge."
    },
    {
      "question": "Was passiert während der Discover-Phase im DORA-Prozess?",
      "answer": "In der Discover-Phase sendet der Client eine DHCP-Discover-Nachricht, um nach einem DHCP-Server zu suchen."
    },
    {
      "question": "Was passiert während der Offer-Phase im DORA-Prozess?",
      "answer": "In der Offer-Phase sendet der DHCP-Server eine DHCP-Offer-Nachricht, die eine freie IP-Adresse und Netzwerkinformationen enthält."
    },
    {
      "question": "Was passiert während der Request-Phase im DORA-Prozess?",
      "answer": "In der Request-Phase sendet der Client eine DHCP-Request-Nachricht, um die angebotene IP-Adresse zu bestätigen."
    },
    {
      "question": "Was passiert während der Acknowledge-Phase im DORA-Prozess?",
      "answer": "In der Acknowledge-Phase bestätigt der DHCP-Server dem Client die Zuweisung der IP-Adresse."
    },
    {
      "question": "Was macht der Befehl 'ipconfig /release'?",
      "answer": "Der Befehl 'ipconfig /release' gibt die aktuelle IP-Adresse des Geräts frei und gibt sie an den DHCP-Server zurück."
    },
    {
      "question": "Was macht der Befehl 'ipconfig /renew'?",
      "answer": "Der Befehl 'ipconfig /renew' fordert den DHCP-Server auf, dem Gerät eine neue IP-Adresse zuzuweisen oder die bestehende zu erneuern."
    },
    {
      "question": "Was ist das Client-Server-Modell?",
      "answer": "Das Client-Server-Modell beschreibt ein Netzwerkmodell, bei dem der Client Anfragen stellt und der Server darauf antwortet, z. B. beim Surfen im Web oder bei E-Mail-Kommunikation."
    },
    {
      "question": "Was sind Dienste in Betriebssystemen?",
      "answer": "In Windows werden Programme, die im Hintergrund laufen, als 'Dienste' bezeichnet, während sie in Linux 'Daemons' genannt werden."
    },
    {
      "question": "Welche Aufgaben hat ein DNS-Server?",
      "answer": "Ein DNS-Server wandelt Domainnamen in IP-Adressen um und umgekehrt."
    },
    {
      "question": "Welche Aufgaben hat ein DHCP-Server?",
      "answer": "Ein DHCP-Server vergibt automatisch IP-Adressen an Geräte im Netzwerk."
    },
    {
      "question": "Was ist ein Telnet-Server?",
      "answer": "Ein Telnet-Server ermöglicht Fernzugriff auf Geräte, ist jedoch unsicher. Eine sicherere Alternative ist SSH."
    },
    {
      "question": "Was ist ein SMTP-Server?",
      "answer": "Ein SMTP-Server ist für das Senden von E-Mails verantwortlich und nutzt Port 25."
    },
    {
      "question": "Was ist ein IMAP4-Server?",
      "answer": "Ein IMAP4-Server holt E-Mails vom Server, speichert sie aber weiterhin auf dem Server, was eine Synchronisation ermöglicht. Er nutzt Port 143."
    },
    {
      "question": "Was ist nslookup?",
      "answer": "nslookup ist ein Kommandozeilen-Tool, um Domainnamen in IP-Adressen aufzulösen und umgekehrt, was bei DNS-Problemen hilfreich ist."
    },
    {
      "question": "Welches Protokoll wird für die Auflösung von Domainnamen zu IP-Adressen verwendet?",
      "answer": "Das DNS-Protokoll wird verwendet, um Domainnamen in IP-Adressen aufzulösen. Es läuft über Port 53 (UDP/TCP)."
    },
    {
      "question": "Was ist SSH?",
      "answer": "SSH (Secure Shell) ist eine sichere Methode für den Fernzugriff auf Geräte, die Telnet ersetzt. Es läuft über TCP-Port 22."
    },
    {
      "question": "Welche Ports und Protokolle werden in der Netzwerkkommunikation häufig verwendet?",
      "answer": "Einige häufig genutzte Ports und Protokolle sind: DNS (Port 53), DHCP (Ports 67/68), Telnet (Port 23), SSH (Port 22), HTTP (Port 80), HTTPS (Port 443), FTP (Port 21), SMTP (Port 25), POP3 (Port 110), IMAP4 (Port 143), MQTT (Ports 1883/8883)."
    },
    {
      "question": "Was ist JBOD?",
      "answer": "JBOD (Just a Bunch Of Disks) ist kein echtes RAID, sondern einfach mehrere Festplatten zusammengefügt. Daten werden nacheinander auf die Platten geschrieben, und es gibt keinen Schutz vor Ausfällen."
    },
    {
      "question": "Was sind die Vorteile von JBOD?",
      "answer": "Der Vorteil von JBOD ist, dass es eine einfache Umsetzung ermöglicht und keine Kapazität verloren geht."
    },
    {
      "question": "Was passiert, wenn bei JBOD eine Festplatte ausfällt?",
      "answer": "Bei JBOD gibt es keinen Schutz vor Ausfällen, sodass beim Ausfall einer Festplatte alle darauf gespeicherten Daten verloren gehen können."
    },
    {
      "question": "Was ist RAID 0?",
      "answer": "RAID 0 (Striping) verteilt die Daten auf mindestens zwei Festplatten, was zu einer höheren Performance führt. Es bietet jedoch keine Redundanz – bei Ausfall einer Festplatte gehen alle Daten verloren."
    },
    {
      "question": "Was sind die Vorteile und Nachteile von RAID 0?",
      "answer": "Vorteil von RAID 0 ist eine hohe Performance, aber der Nachteil ist, dass keine Datensicherheit gewährleistet wird und alle Daten bei einem Festplattenausfall verloren gehen."
    },
    {
      "question": "Was ist RAID 1?",
      "answer": "RAID 1 (Mirroring) spiegelt die Daten 1:1 auf zwei Festplatten. Wenn eine Festplatte ausfällt, bleiben die Daten auf der anderen Festplatte erhalten."
    },
    {
      "question": "Was sind die Vorteile und Nachteile von RAID 1?",
      "answer": "Vorteil von RAID 1 ist eine hohe Datensicherheit, aber der Nachteil ist, dass nur die Hälfte des Speicherplatzes genutzt werden kann, da die Daten auf beiden Festplatten gespeichert werden."
    },
    {
      "question": "Was ist RAID 5?",
      "answer": "RAID 5 kombiniert Striping mit Parität und erfordert mindestens 3 Festplatten. Daten und Paritätsinformationen werden verteilt, sodass im Falle eines Ausfalls einer Festplatte die Daten rekonstruierbar sind."
    },
    {
      "question": "Was sind die Vorteile und Nachteile von RAID 5?",
      "answer": "RAID 5 bietet eine gute Mischung aus Sicherheit und Kapazität, jedoch ist nur ein Festplattenausfall tolerierbar. Außerdem kann die Schreibgeschwindigkeit langsamer sein als bei RAID 0."
    },
    {
      "question": "Was ist RAID 6?",
      "answer": "RAID 6 ist eine Erweiterung von RAID 5 und bietet doppelte Parität. Es benötigt mindestens 4 Festplatten und erlaubt den Ausfall von bis zu zwei Festplatten."
    },
    {
      "question": "Was sind die Vorteile und Nachteile von RAID 6?",
      "answer": "RAID 6 bietet sehr hohe Sicherheit, da es den Ausfall von zwei Festplatten toleriert. Der Nachteil ist jedoch, dass die Schreibgeschwindigkeit langsamer ist als bei RAID 5."
    },
    {
      "question": "Was ist RAID 10 (1+0)?",
      "answer": "RAID 10 kombiniert RAID 1 (Mirroring) und RAID 0 (Striping). Es erfordert mindestens 4 Festplatten und bietet eine gute Kombination aus Geschwindigkeit und Datensicherheit."
    },
    {
      "question": "Was sind die Vorteile und Nachteile von RAID 10?",
      "answer": "RAID 10 bietet sowohl hohe Geschwindigkeit als auch hohe Datensicherheit, jedoch ist der Speicherverlust von 50% ein Nachteil, da nur die Hälfte des verfügbaren Speicherplatzes genutzt wird."
    },
    {
      "question": "Was ist RAID 01 (0+1)?",
      "answer": "RAID 01 kombiniert RAID 0 (Striping) und RAID 1 (Mirroring), erfordert mindestens 4 Festplatten und bietet weniger Toleranz gegenüber Ausfällen als RAID 10."
    },
    {
      "question": "Was sind die Vorteile und Nachteile von RAID 01?",
      "answer": "RAID 01 bietet Geschwindigkeit und Sicherheit, jedoch ist es weniger robust als RAID 10 und weniger tolerant gegenüber Ausfällen."
    },
    {
      "question": "Was ist RAID 50?",
      "answer": "RAID 50 kombiniert RAID 5 und RAID 0. Es nutzt mehrere RAID 5-Gruppen und bietet eine gute Mischung aus Geschwindigkeit und Redundanz, erfordert jedoch viele Festplatten."
    },
    {
      "question": "Was sind die Vorteile und Nachteile von RAID 50?",
      "answer": "RAID 50 bietet eine bessere Geschwindigkeit und Redundanz als RAID 5 allein, aber es ist komplexer und benötigt viele Festplatten."
    },
    {
      "question": "Was ist RAID 60?",
      "answer": "RAID 60 kombiniert RAID 6 und RAID 0. Es verwendet mehrere RAID 6-Gruppen und bietet eine sehr hohe Sicherheit, da bis zu zwei Festplatten pro Gruppe ausfallen können."
    },
    {
      "question": "Was sind die Vorteile und Nachteile von RAID 60?",
      "answer": "RAID 60 bietet sehr hohe Sicherheit und kann den Ausfall von bis zu zwei Festplatten pro Gruppe tolerieren. Der Nachteil ist der höhere Speicherbedarf und die zusätzliche Komplexität."
    },
  ],
  "IT-Sicherheit": [
    {
      "question": "Welche Arten der Authentifizierung gibt es?",
      "answer": "1. Wissen – z.B. Passwort, PIN. 2. Besitz – z.B. Schlüsselkarte, Token. 3. Biometrie – z.B. Fingerabdruck, Gesichtserkennung."
    },
    {
      "question": "Was ist das Least Privilege Principle in der IT?",
      "answer": "Dabei bekommt ein Nutzer oder System nur die minimal notwendigen Berechtigungen, um Risiken wie Missbrauch oder Sicherheitslücken zu minimieren. Es ist ein Teil von Zero Trust."
    },
    {
      "question": "Was sind die Datenschutz Grundprinzipien bei der Datenerhebung?",
      "answer":
        "Zweckbindung: Daten nur für festgelegten Zweck verwenden \n Datenminimierung: Nur so viele Daten wie nötig verarbeiten \n Transparenz: Nutzer informieren, was mit ihren Daten geschieht \n Richtigkeit: Daten müssen korrekt und aktuell sein."

    },
    {
      "question": "Was sind die Aufgaben eines IT-Sicherheitsbeauftragten?",
      "answer":
        "Überwacht Sicherheitsrichtlinien  \nFührt Schulungen durch \nKontrolliert Sicherheitsmaßnahmen \nUnterstützt bei der Umsetzung gesetzlicher Vorschriften."

    },
    {
      "question": "Welche Verbindungsarten bei VPN (Virtual Private Network) gibt es?",
      "answer": "End-to-Site VPN: Einzelner Client verbindet sich mit einem Unternehmensnetzwerk (z.B. Homeoffice → Firmennetz). Site-to-Site VPN: Zwei Netzwerke werden sicher miteinander verbunden (z.B. zwei Firmenstandorte). End-to-End VPN: Direkte Verbindung zwischen zwei Endgeräten."
    },

    {
      "question": "Was ist Zero Trust Network Access (ZTNA)?",
      "answer": "Sicherheitsmodell: Niemals vertrauen, immer prüfen. Jeder Nutzer und jedes Gerät muss ständig authentifiziert werden – auch innerhalb des eigenen Netzwerks."
    },
    {
      "question": "Welche Modi gibt es bei IPsec?",
      "answer": "Tunnelmodus: Verschlüsselt den gesamten IP-Datenverkehr (häufig bei VPN zwischen Netzwerken). Transportmodus: Verschlüsselt nur die Nutzdaten, IP-Header bleibt erhalten (häufig zwischen zwei Geräten)."
    },
    {
      "question": "Was musst du tun bei einer Datenschutzverletzung?",
      "answer": "Innerhalb von 72 Stunden an die Datenschutzbehörde melden. Betroffene Personen unverzüglich informieren, wenn ein Risiko besteht."
    },
    {
      "question": "Was ist MTBF (Mean Time Between Failures)?",
      "answer": "Durchschnittliche Zeit zwischen zwei Ausfällen (bei reparierbaren Systemen)."
    },
    {
      "question": "Was ist MTTF (Mean Time To Failure)?",
      "answer": "Durchschnittliche Lebensdauer bis zum ersten Ausfall (bei nicht-reparierbaren Geräten)."
    },

    {
      "question": "Was ist PSK (Pre-Shared Key)?",
      "answer": "Ein vorab verabredeter Schlüssel, der zur Absicherung der Kommunikation dient, z.B. bei WLANs."
    },
    {
      "question": "Wie kann man Datensicherung durchführen?",
      "answer": "Datensicherung erfolgt durch Backups (aktuelle Daten) und Archivierung (langfristige Speicherung nicht mehr aktiv genutzter Daten)."
    },
    {
      "question": "Was ist eine Betriebssystemhärtung?",
      "answer": "Betriebssystemhärtung umfasst Maßnahmen wie Firewalls, Patch-Management und das Schließen unnötiger Ports zur Erhöhung der Systemsicherheit."
    },
    {
      "question": "Was ist ein Single Sign-On (SSO)?",
      "answer": "Single Sign-On ermöglicht eine einmalige Anmeldung, um auf mehrere Anwendungen zuzugreifen. Vorteil: Erhöhte Benutzerfreundlichkeit. Nachteil: Fällt SSO aus, sind alle Systeme betroffen."
    },
    {
      "question": "Was ist Zugangskontrolle?",
      "answer": "Zugangskontrolle bezieht sich auf den physischen Zugang zu Gebäuden und Räumen, etwa durch Ausweiskarten oder Sicherheitsschleusen."
    },
    {
      "question": "Was ist Zugriffskontrolle?",
      "answer": "Zugriffskontrolle betrifft den logischen Zugriff auf Systeme, geregelt über Benutzerrollen und Zugriffsrechte."
    },
    {
      "question": "Was sind Passwortsicherheitsrichtlinien?",
      "answer": "Passwörter sollten Sonderzeichen, Groß- und Kleinschreibung enthalten sowie eine ausreichende Länge haben."
    },
    {
      "question": "Was sind technische und organisatorische Maßnahmen (TOM) bei der IT-Sicherheit?",
      "answer": "Beispiele sind Alarmanlagen, Zugangs- und Zutrittskontrollen sowie Anonymisierung personenbezogener Daten."
    },
    {
      "question": "Warum müssen Firmen auf dem aktuellen Stand der Technik sein?",
      "answer": "Unternehmen müssen immer die wirksamsten und neuesten Sicherheitstechnologien einsetzen, um Datenschutz und IT-Sicherheit zu gewährleisten."
    },
    {
      "question": "Was ist Anonymisierung?",
      "answer": "Bei der Anonymisierung werden alle Identifikationsmerkmale entfernt, sodass die betroffene Person nicht mehr identifizierbar ist."
    },
    {
      "question": "Was ist Pseudonymisierung?",
      "answer": "Daten werden so verändert, dass sie ohne Zusatzinformationen nicht mehr einer bestimmten Person zugeordnet werden können."
    },
    {
      "question": "Was ist Compliance?",
      "answer": "Compliance ist die Einhaltung von gesetzlichen Vorschriften sowie interner Unternehmensrichtlinien."
    },
    {
      "question": "Was sind die Aufgaben eines Datenschutzbeauftragten?",
      "answer": "Überwachung der Einhaltung von Datenschutzrichtlinien, Beratung und Schulung von Mitarbeitern, sowie Ansprechpartner für Datenschutzfragen im Unternehmen."
    },
    {
      "question": "Was sind die Aufgaben eines Sicherheitsbeauftragten?",
      "answer": "Überwachung der Sicherheitsrichtlinien, Durchführung von Schulungen und Ansprechpartner für IT-Sicherheit im Unternehmen."
    },
    {
      "question": "Auf welche IT-Sicherheitsregeln muss ein Unternehmen achten?",
      "answer": "Unternehmen müssen die DSGVO (Europa) und das BDSG (Deutschland) beachten. Zudem ist ISO 27001 ein internationaler Standard für Informationssicherheits-Managementsysteme (ISMS)."
    },
    {
      "question": "Welche Einteilung gibt es bei den Schutzbedarfskategorien?",
      "answer": "Die Schutzbedarfskategorien lauten: normal, hoch und sehr hoch. Sie helfen, geeignete Sicherheitsmaßnahmen auszuwählen."
    },
    {
      "question": "Was sind die Prinzipien der Transparenz und Richtigkeit?",
      "answer": "Unternehmen müssen offenlegen, welche Daten sie erheben und zu welchem Zweck. Die erhobenen Daten müssen korrekt und aktuell sein."
    },
    {
      "question": "Wie werden Daten von Personen beim Datenschutz nach DSGVO unterschieden?",
      "answer": "Es wird unterschieden zwischen personenbezogenen Daten und besonderen personenbezogenen Daten (z.B. Gesundheitsdaten)."
    },
    {
      "question": "Was besagt das Verbot mit Erlaubnisvorbehalt der DSGVO?",
      "answer": "Daten dürfen nur verarbeitet werden, wenn eine spezielle Rechtsvorgabe oder eine informierte Einwilligung vorliegt."
    },
    {
      "question": "Was versteht man unter Zweckbindung in der DSGVO?",
      "answer": "Daten dürfen nur für den festgelegten Zweck erfasst und nicht weitergegeben werden."
    },
    {
      "question": "Was ist das Ziel der Datenminimierung?",
      "answer": "Nur die nötigsten Daten sollen erhoben werden."
    },
    {
      "question": "Was bedeutet erweiterte Auskunftspflichten in der DSGVO?",
      "answer": "Nutzer müssen umfassend über ihre Datenverarbeitung informiert werden."
    },
    {
      "question": "Welche Anforderungen bestehen an die Verständlichkeit von Erklärungen in der DSGVO?",
      "answer": "Die Informationen müssen für alle verständlich sein."
    },
    {
      "question": "Was bedeutet Rechenschaftspflicht für Unternehmen in Bezug auf die DSGVO?",
      "answer": "Unternehmen müssen ihre Datenverarbeitung dokumentieren und regelmäßig Risiken bewerten."
    },
    {
      "question": "Welche Information muss eine Datenschutzerklärung enthalten?",
      "answer": "Sie muss die Website-Besucher über die Verarbeitung und Weitergabe personenbezogener Daten aufklären."
    },
    {
      "question": "Wie muss die Datenschutzerklärung formuliert sein?",
      "answer": "Sie muss in verständlicher und transparenter Sprache verfasst sein."
    },
    {
      "question": "Wann muss ein Datenschutzbeauftragter ernannt werden?",
      "answer": "Ein Datenschutzbeauftragter muss ernannt werden, wenn besonders schützenswerte Daten verarbeitet werden oder mehr als zehn Personen Daten bearbeiten."
    },
    {
      "question": "Was regelt die Einwilligung in Bezug auf die DSGVO?",
      "answer": "Daten dürfen nur für den jeweiligen Zweck genutzt werden."
    },
    {
      "question": "Welche Anforderungen bestehen an die Verschlüsselung von Daten?",
      "answer": "Personenbezogene Daten müssen sicher übertragen werden."
    },
    {
      "question": "Was ist beim Tracking externer Dienstleister zu beachten?",
      "answer": "Externe Dienstleister für Tracking müssen vertraglich eingebunden werden."
    },
    {
      "question": "Was passiert bei einer Datenschutzverletzung?",
      "answer": "Der Vorfall muss gemeldet werden."
    },
    {
      "question": "Welche Informationsrechte haben Nutzer?",
      "answer": "Nutzer haben das Recht, zu erfahren, welche Daten verarbeitet werden, wie lange und von wem."
    },
    {
      "question": "Welches Recht haben Nutzer in Bezug auf ihre Daten?",
      "answer": "Nutzer können die Löschung ihrer Daten verlangen."
    },
    {
      "question": "Was bedeutet die Vorsicht im Umgang mit Datenschutz?",
      "answer": "Es dürfen keine privaten Nutzungen von Kundendaten vorgenommen werden und Passwörter sollten geheim, komplex und regelmäßig geändert werden."
    },
    {
      "question": "Welche Verhaltensweisen sind im Umgang mit sensiblen Daten wichtig?",
      "answer": "Man sollte vermeiden, in öffentlichen Bereichen über sensible Daten zu sprechen und auf die Rechte an Bildern achten."
    },
    {
      "question": "Welche Beispiele fallen unter personenbezogene Daten?",
      "answer": "Name, Adresse, Geburtsdatum, Telefonnummer, E-Mail-Adresse, Finanzinformationen, Gesundheitsdaten und mehr."
    },
    {
      "question": "Was sind besondere personenbezogene Daten?",
      "answer": "Daten wie ethnische Herkunft, politische Überzeugungen, Gesundheitsdaten, sexuelle Orientierung oder Gewerkschaftszugehörigkeit."
    },
    {
      "question": "Warum benötigen einige personenbezogene Daten besonders hohen Schutz?",
      "answer": "Weil sie sehr intime oder sensitive Informationen betreffen."
    },
    {
      "question": "Was ist das Recht auf informationelle Selbstbestimmung?",
      "answer": "Die betroffene Person hat das Recht, selbst zu entscheiden, ob und wie ihre personenbezogenen Daten verarbeitet werden dürfen."
    },
    {
      "question": "Warum ist die Einwilligung in die Datenverarbeitung wichtig?",
      "answer": "Personenbezogene Daten dürfen nur mit der Zustimmung der betroffenen Person gespeichert oder verarbeitet werden."
    },
    {
      "question": "Warum ist der Schutz personenbezogener Daten wichtig?",
      "answer": "Personenbezogene Daten geben Einblicke in die Identität einer Person und können für Missbrauch oder unbefugten Zugriff verwendet werden."
    },
    {
      "question": "Wann sind Daten nicht personenbezogen?",
      "answer": "Einzelne Informationen alleine sind nicht immer personenbezogen. Es müssen mehrere Datenpunkte vorliegen, die zusammen eine Person identifizierbar machen."
    },
    {
      "question": "Was ist das Recht auf informationelle Selbstbestimmung?",
      "answer": "Schutz vor unbefugter Verarbeitung personenbezogener Daten und aktive Zustimmung des Betroffenen erforderlich."
    },
    {
      "question": "Was ist das Auskunftsrecht der betroffenen Person?",
      "answer": "Das Recht auf Auskunft über gespeicherte personenbezogene Daten, inklusive einer kostenlosen Auskunft einmal jährlich bei Wirtschaftsauskunfteien."
    },
    {
      "question": "Was besagt das Recht auf Berichtigung, Löschung und Sperrung?",
      "answer": "Das Recht auf Berichtigung, Löschung oder Sperrung fehlerhafter oder widerrechtlich gespeicherter Daten."
    },
    {
      "question": "Was ist die Pflicht zur Schulung und Verpflichtung der Mitarbeiter?",
      "answer": "Mitarbeiter, die mit personenbezogenen Daten arbeiten, müssen in Datenschutzfragen geschult werden und über das Datengeheimnis belehrt werden."
    },
    {
      "question": "Wann ist die Weitergabe personenbezogener Daten an Dritte erlaubt?",
      "answer": "Grundsätzlich nur mit der Zustimmung des Betroffenen oder in Ausnahmefällen mit verschlüsselter und abgetrennter Übertragung."
    },
    {
      "question": "Welche Sicherheitsmaßnahmen müssen bei der Speicherung personenbezogener Daten beachtet werden?",
      "answer": "Daten müssen passwortgeschützt, verschlüsselt und vor Schadsoftware geschützt gespeichert werden. In einigen Fällen müssen sie anonymisiert werden."
    },
    {
      "question": "Was ist Zweckbindung und Löschung im Datenschutz?",
      "answer": "Daten dürfen nur für den festgelegten Zweck verarbeitet werden. Sobald der Zweck erfüllt ist, müssen sie gelöscht oder vor weiterem Zugriff geschützt werden."
    },
    {
      "question": "Welche Bedrohungen für die Informationssicherheit gibt es?",
      "answer": "Hard- und Softwareprobleme, äußere Einflüsse, Kriminelle, Probleme bei der Datenverarbeitung und Schwachstellen durch den Menschen."
    },
    {
      "question": "Was ist ein Informationssicherheitsmanagementsystem (ISMS)?",
      "answer": "Ein ISMS definiert und setzt Vorgaben und Regeln zur Sicherstellung der Informationssicherheit um."
    },
    {
      "question": "Was ist der Unterschied zwischen Informationssicherheit und IT-Sicherheit?",
      "answer": "IT-Sicherheit fokussiert sich auf den Schutz elektronisch gespeicherter Daten und IT-Systeme, während Informationssicherheit auch den Schutz nicht-technischer Systeme umfasst."
    },
    {
      "question": "Was ist der Unterschied zwischen Informationssicherheit und Datenschutz?",
      "answer": "Datenschutz schützt personenbezogene Daten und die Privatsphäre, während Informationssicherheit auch Risiken für die Wirtschaft und andere nicht-technische Bereiche abdeckt."
    },
    {
      "question": "Was sind die drei Schutzziele der Informationssicherheit?",
      "answer": "Vertraulichkeit, Integrität und Verfügbarkeit."
    },
    {
      "question": "Was ist ein VPN?",
      "answer": "Ein VPN verschlüsselt den Datenverkehr zwischen Geräten oder Netzwerken, um sichere Verbindungen über das Internet zu ermöglichen."
    },
    {
      "question": "Was bedeutet Zero Trust in der Sicherheitsstrategie?",
      "answer": "Zero Trust geht davon aus, dass kein Nutzer oder Gerät automatisch vertraut wird, und jeder Zugriff muss geprüft und mit den nötigen Rechten erlaubt werden."
    },
    {
      "question": "Was ist der Unterschied zwischen Authentifizierung und Authentisierung?",
      "answer": "Authentifizierung ist der Identitätsnachweis, während Authentifikation die Überprüfung der Identität ist."
    },
    {
      "question": "Was ist 2-Faktor-Authentifizierung (2FA)?",
      "answer": "Die Kombination von mindestens zwei Bereichen wie Passwort und Fingerabdruck zur Identitätsprüfung."
    },
    {
      "question": "Was bedeutet Autorisierung in der Zugriffskontrolle?",
      "answer": "Es wird entschieden, welche Zugriffsrechte eine Person basierend auf ihrer Identität und den erforderlichen Berechtigungen erhält."
    },
    {
      "question": "Was ist Hashing?",
      "answer": "Hashing ist ein Verfahren, bei dem ein Klartext durch einen Algorithmus in einen einzigartigen Hash-Wert umgewandelt wird, der nicht rückgängig gemacht werden kann."
    },
    {
      "question": "Welche Eigenschaften hat Hashing?",
      "answer": "Einweg-Funktion, Lavineneffekt, Kollisionsresistenz, Effizienz und keine Rückschlüsse auf den ursprünglichen Text möglich."
    },
    {
      "question": "Was ist der Zweck von Salting und Peppering in der Sicherheit?",
      "answer": "Salting fügt vor dem Hashing eine zufällige Zeichenkette hinzu, um vor Rainbow Tables zu schützen. Peppering verwendet einen geheimen Wert, der im Programm gespeichert wird, um die Sicherheit zu erhöhen."
    },
    {
      "question": "Was ist Kryptographie?",
      "answer": "Kryptographie ist die Wissenschaft der Verschlüsselung von Informationen, mit dem Ziel, Daten so zu schützen, dass sie nur von Berechtigten gelesen oder überprüft werden können."
    },
    {
      "question": "Was sind die neuen Themen der Kryptographie im digitalen Zeitalter?",
      "answer": "Digitale Signaturen, Identifikationsprotokolle, kryptografische Hashfunktionen, Geheimnisteilung, elektronische Wahlverfahren und elektronisches Geld."
    },
    {
      "question": "Was ist der Unterschied zwischen Kryptographie und Kryptoanalyse?",
      "answer": "Kryptographie schützt Daten durch Verschlüsselung, während Kryptoanalyse versucht, verschlüsselte Informationen zu knacken oder zu analysieren."
    },
    {
      "question": "Was ist symmetrische Kryptographie?",
      "answer": "Symmetrische Kryptographie verwendet denselben Schlüssel zum Verschlüsseln und Entschlüsseln von Daten, ist schnell, aber der Schlüssel muss sicher übergeben werden."
    },
    {
      "question": "Was ist asymmetrische Kryptographie?",
      "answer": "Asymmetrische Kryptographie verwendet zwei Schlüssel: einen öffentlichen Schlüssel zum Verschlüsseln und einen privaten Schlüssel zum Entschlüsseln. Der Vorteil ist eine sicherere Schlüsselübergabe, aber sie ist langsamer und rechenintensiver."
    },
    {
      "question": "Was ist hybride Kryptographie?",
      "answer": "Hybride Kryptographie kombiniert symmetrische und asymmetrische Kryptographie, indem Daten symmetrisch verschlüsselt und der symmetrische Schlüssel asymmetrisch übertragen wird."
    },
    {
      "question": "Was ist ein Cipher?",
      "answer": "Ein Cipher ist eine Methode zum Verschlüsseln von Texten, um die Bedeutung zu verschleiern, sodass Unbefugte nichts erkennen können."
    },
    {
      "question": "Was ist ein Ciphertext?",
      "answer": "Ciphertext ist der verschlüsselte Text, der durch einen Cipher erzeugt wird."
    },
    {
      "question": "Was ist eine Cipher Suite?",
      "answer": "Eine Cipher Suite ist ein Paket aus mehreren kryptografischen Verfahren, das in sicheren Netzwerkverbindungen wie HTTPS verwendet wird. Sie besteht aus Schlüsselaustausch-Algorithmus, Authentifizierungs-Algorithmus, Massenverschlüsselungs-Algorithmus und MAC/Hashing-Algorithmus."
    },
    {
      "question": "Was ist der SHA-512 Hashwert?",
      "answer": "SHA-512 ist eine Hashfunktion, die aus einer Eingabe eine feste, 512-bit lange Zeichenkette erzeugt. Es wird zur Datenprüfung genutzt und ist nicht umkehrbar."
    },
    {
      "question": "Was sind die Eigenschaften von SHA-512?",
      "answer": "SHA-512 ist nicht umkehrbar, kollisionssicher und hat einen Lawineneffekt, sodass kleine Änderungen im Input den Hash-Wert komplett verändern."
    },
    {
      "question": "Was ist AES?",
      "answer": "AES (Advanced Encryption Standard) ist eine symmetrische Verschlüsselung, bei der derselbe Schlüssel zum Verschlüsseln und Entschlüsseln von Daten verwendet wird."
    },
    {
      "question": "Was ist RSA?",
      "answer": "RSA ist ein asymmetrisches Kryptosystem, das einen öffentlichen Schlüssel zum Verschlüsseln und einen privaten Schlüssel zum Entschlüsseln verwendet."
    },
    {
      "question": "Wie werden Zertifikate zur Sicherheit verwendet?",
      "answer": "Zertifikate werden verwendet, um DNS-Abfragen zu schützen, SSL/TLS-Zertifikate für sichere Netzwerkverbindungen bereitzustellen, E-Mails zu verschlüsseln, digitale Signaturen zu erstellen und die Identität bei Systemanmeldungen zu prüfen."
    },
    {
      "question": "Was ist der Nutzen von SSL/TLS-Zertifikaten?",
      "answer": "SSL/TLS-Zertifikate sorgen dafür, dass sich der Server eindeutig identifizieren kann, und ermöglichen eine sichere Kommunikation über Netzwerke."
    },
    {
      "question": "Wie wird digitale Signatur zur Sicherheit eingesetzt?",
      "answer": "Digitale Signaturen, die mit Zertifikaten erstellt werden, ermöglichen es, nachzuweisen, dass ein Dokument unverändert und wirklich vom angegebenen Absender stammt."
    },
    {
      "question": "Warum sind Zertifikate für die Systemanmeldung wichtig?",
      "answer": "Zertifikate bieten mehr Sicherheit als Passwörter, da sie schwerer zu erraten oder abzufangen sind und somit eine sichere Identitätsprüfung ermöglichen."
    },
    {
      "question": "Was ist die Public Key Infrastructure (PKI)?",
      "answer": "Die Public Key Infrastructure (PKI) ist ein System, das Public Key und Private Key nutzt, um die Identität der Kommunikationspartner zu überprüfen und die Authentizität von Zertifikaten zu gewährleisten."
    },
    {
      "question": "Wie wird ein Zertifikat in einer PKI ausgestellt?",
      "answer": "Die PKI überprüft die Identität eines Nutzers oder Geräts und stellt ein Zertifikat für den Public Key aus, das die Authentizität des Schlüsselpaares bestätigt."
    },
    {
      "question": "Was ist die hierarchische Struktur einer PKI?",
      "answer": "Eine PKI besteht aus einer Root Certificate Authority (CA), die untergeordnete Zertifizierungsstellen (Issuing CAs) autorisiert. Diese stellen dann Zertifikate für Endgeräte und Nutzer aus."
    },
    {
      "question": "Welche Sicherheitsprobleme gibt es in der PKI?",
      "answer": "CAs können kompromittiert werden, und es gab Fälle, in denen Zertifikate gestohlen wurden. Es gibt jedoch öffentliche Listen von zurückgezogenen Zertifikaten, die regelmäßig abgeglichen werden sollten."
    },
    {
      "question": "Was ist eine digitale Signatur?",
      "answer": "Eine digitale Signatur nutzt kryptografische Verfahren, um Nachrichten mit einem privaten Schlüssel zu signieren und dient der sicheren, rechtlich anerkannten Signatur von Nachrichten."
    },
    {
      "question": "Was ist erforderlich, um eine digitale Signatur zu erstellen?",
      "answer": "Der öffentliche Schlüssel muss eindeutig dem Unterzeichner zugeordnet werden, und nur dieser sollte den privaten Schlüssel besitzen."
    },
    {
      "question": "Welche Arten von elektronischen Signaturen gibt es?",
      "answer": "Es gibt die einfache elektronische Signatur, die fortgeschrittene elektronische Signatur und die qualifizierte elektronische Signatur."
    },
    {
      "question": "Was ist eine einfache elektronische Signatur?",
      "answer": "Eine einfache elektronische Signatur hat keine besonderen Anforderungen und ist rechtlich nicht beweiswürdig. Ein Beispiel ist der Name unter einer E-Mail."
    },
    {
      "question": "Was ist eine fortgeschrittene elektronische Signatur?",
      "answer": "Eine fortgeschrittene elektronische Signatur ermöglicht die eindeutige Identifizierung des Unterzeichners und ist rechtlich wirksam, wenn die beweisführende Partei die Echtheit nachweisen kann."
    },
    {
      "question": "Was ist eine qualifizierte elektronische Signatur?",
      "answer": "Eine qualifizierte elektronische Signatur basiert auf einem qualifizierten Zertifikat und einer sicheren Signaturerstellungseinheit (SSEE). Sie ist rechtlich gleichwertig mit einer Unterschrift auf Papier."
    },
    {
      "question": "Was ist der Transportmodus in IPsec?",
      "answer": "Im Transportmodus bleibt der Original-IP-Header erhalten, nur die Nutzlast (Daten) wird verschlüsselt."
    },
    {
      "question": "Was ist der Tunnelmodus in IPsec?",
      "answer": "Im Tunnelmodus wird der gesamte IP-Header sowie die Nutzlast verschlüsselt, und ein neuer IP-Header wird hinzugefügt, um die Kommunikation zwischen virtuellen Schnittstellen zu ermöglichen."
    },
    {
      "question": "Welche Sicherheitseigenschaften bietet IPsec?",
      "answer": "IPsec bietet Datenschutz durch Verschlüsselung, Inhaltsintegrität durch Datenauthentifizierung, Absenderauthentifizierung und ggf. Zertifikate."
    },
    {
      "question": "Was sind die Schlüsselaustauschmethoden in IPsec?",
      "answer": "Zu den Schlüsselaustauschmethoden in IPsec gehören der manuelle Schlüssel, AutoKey-IKE (Internet Key Exchange) und der Diffie-Hellman Exchange."
    },
    {
      "question": "Was ist das Authentication Header (AH)-Protokoll in IPsec?",
      "answer": "Das AH-Protokoll authentifiziert die Quelle eines IP-Pakets und überprüft die Integrität des Inhalts durch einen Hash (z. B. HMAC mit MD5 oder SHA)."
    },
    {
      "question": "Was ist das Encapsulating Security Payload (ESP)-Protokoll in IPsec?",
      "answer": "Das ESP-Protokoll bietet Verschlüsselung und Authentifizierung des gesamten IP-Pakets, wobei im Tunnelmodus das gesamte IP-Paket (einschließlich Header und Payload) verschlüsselt wird."
    },
    {
      "question": "Welche Authentifizierungsalgorithmen werden im AH-Protokoll verwendet?",
      "answer": "Die Authentifizierungsalgorithmen im AH-Protokoll sind MD5 (Message Digest 5) und SHA (Secure Hash Algorithm), wobei SHA als sicherer gilt."
    },
    {
      "question": "Welche Verschlüsselungsalgorithmen werden im ESP-Protokoll verwendet?",
      "answer": "Zu den Verschlüsselungsalgorithmen im ESP-Protokoll gehören DES (Data Encryption Standard), 3DES (Triple DES) und AES (Advanced Encryption Standard), wobei AES empfohlen wird."
    },
    {
      "question": "Welche Authentifizierung wird im ESP-Protokoll verwendet?",
      "answer": "MD5 oder SHA können für die Authentifizierung im ESP-Protokoll verwendet werden."
    },
    {
      "question": "Was ist das Grundprinzip der asymmetrischen Verschlüsselung?",
      "answer": "In der asymmetrischen Verschlüsselung gibt es zwei Schlüssel: einen öffentlichen Schlüssel (Public Key), den jeder einsehen kann, und einen privaten Schlüssel (Private Key), der nur vom Besitzer des Schlüssels verwendet wird. Nachrichten werden mit dem öffentlichen Schlüssel verschlüsselt und mit dem privaten Schlüssel entschlüsselt."
    },
    {
      "question": "Was sind die Vorteile der asymmetrischen Verschlüsselung?",
      "answer": "Die Vorteile der asymmetrischen Verschlüsselung sind, dass kein sicherer Schlüsselaustausch erforderlich ist, da der öffentliche Schlüssel öffentlich zugänglich ist, und dass die Verteilung einfach ist, da jeder den öffentlichen Schlüssel erhalten kann, um sicher zu kommunizieren."
    },
    {
      "question": "Was sind die Nachteile der asymmetrischen Verschlüsselung?",
      "answer": "Die Nachteile der asymmetrischen Verschlüsselung sind, dass sie langsam ist, da das Entschlüsseln mit dem privaten Schlüssel viel Rechenleistung erfordert, und dass es bei häufigem Gebrauch zu Verzögerungen kommen kann."
    },
    {
      "question": "Was ist der RSA-Algorithmus?",
      "answer": "Der RSA-Algorithmus ist eines der bekanntesten asymmetrischen Verfahren. Es wird häufig in digitalen Signaturen und bei der Verschlüsselung von Daten im Internet eingesetzt."
    },
    {
      "question": "Warum ist Verschlüsselung in der heutigen digitalen Welt wichtig?",
      "answer": "Verschlüsselung ist wichtig, weil sie sicherstellt, dass Informationen nur von autorisierten Empfängern gelesen werden können. Sie schützt Privatsphäre, Sicherheit und Vertrauen, indem sie verhindert, dass Daten abgefangen und missbraucht werden."
    },
    {
      "question": "Welche Ziele verfolgt die Präsentation zu Verschlüsselungsverfahren?",
      "answer": "Die Präsentation verfolgt das Ziel, drei wichtige Verschlüsselungsverfahren zu erklären: symmetrische Verschlüsselung, asymmetrische Verschlüsselung und hybride Verschlüsselung."
    },
    {
      "question": "Was ist das hybride Verschlüsselungsverfahren?",
      "answer": "Das hybride Verschlüsselungsverfahren kombiniert die Vorteile der symmetrischen und asymmetrischen Verschlüsselung. Es nutzt einen symmetrischen Session Key für die schnelle Verschlüsselung der Nachricht und verschlüsselt diesen Session Key mit einem asymmetrischen Verfahren."
    },
    {
      "question": "Wie funktioniert das hybride Verschlüsselungsverfahren?",
      "answer": "Person A erstellt einen Session Key, um die Nachricht symmetrisch zu verschlüsseln. Der Public Key von Person B wird verwendet, um den Session Key asymmetrisch zu verschlüsseln. Person A sendet die verschlüsselte Nachricht und den verschlüsselten Session Key an Person B, der den Session Key mit seinem Private Key entschlüsselt und damit die Nachricht entschlüsselt."
    },
    {
      "question": "Was sind die Vorteile des hybriden Verschlüsselungsverfahrens?",
      "answer": "Das hybride Verschlüsselungsverfahren ist effizient, da es die schnelle symmetrische Verschlüsselung für die eigentliche Nachricht nutzt, während es das asymmetrische Verfahren nur für den Session Key verwendet. Es bietet auch hohe Sicherheit, da der Session Key geschützt wird und regelmäßig erneuert wird."
    },
    {
      "question": "Was sind die Nachteile des hybriden Verschlüsselungsverfahrens?",
      "answer": "Der Nachteil des hybriden Verschlüsselungsverfahrens ist die Komplexität, da es die Implementierung von zwei Verschlüsselungsverfahren erfordert."
    },
    {
      "question": "Welche bekannten Beispiele nutzen das hybride Verschlüsselungsverfahren?",
      "answer": "Beispiele für das hybride Verschlüsselungsverfahren sind TLS/SSL (Transport Layer Security), das für sichere Verbindungen im Internet wie HTTPS verwendet wird, und PGP (Pretty Good Privacy), das in der E-Mail-Verschlüsselung genutzt wird."
    },
    {
      "question": "Was ist TLS/SSL?",
      "answer": "TLS/SSL (Transport Layer Security) ist ein Protokoll, das für sichere Verbindungen im Internet sorgt, insbesondere bei HTTPS-Verbindungen, und auf dem hybriden Verschlüsselungsverfahren basiert."
    },
    {
      "question": "Was ist PGP (Pretty Good Privacy)?",
      "answer": "PGP ist ein Verschlüsselungsverfahren, das in der E-Mail-Verschlüsselung verwendet wird und ebenfalls auf dem hybriden Verschlüsselungsverfahren basiert."
    },
    {
      "question": "Warum ist das hybride Verschlüsselungsverfahren bevorzugt?",
      "answer": "Das hybride Verschlüsselungsverfahren ist bevorzugt, weil es die Geschwindigkeit und Effizienz der symmetrischen Verschlüsselung mit der Sicherheit der asymmetrischen Verschlüsselung kombiniert, was es zur bevorzugten Methode für sichere und schnelle Kommunikation macht, insbesondere im Internet."
    },
    {
      "question": "Hybrides Verschlüsselungsverfahren: Was vereint es?",
      "answer": "Es vereint die Geschwindigkeit der symmetrischen Verschlüsselung mit der Sicherheit der asymmetrischen Verschlüsselung."
    },
    {
      "question": "Symmetrisches Verschlüsselungsverfahren: Wie funktioniert die Verschlüsselung?",
      "answer": "Person A verschlüsselt die Nachricht mit einem Schlüssel und sendet diese an Person B."
    },
    {
      "question": "Symmetrisches Verschlüsselungsverfahren: Was benötigt Person B, um die Nachricht zu entschlüsseln?",
      "answer": "Person B benötigt denselben Schlüssel, den Person A verwendet hat."
    },
    {
      "question": "Symmetrisches Verschlüsselungsverfahren: Wie wird der Schlüssel zwischen A und B übermittelt?",
      "answer": "Person A überträgt den Schlüssel an Person B."
    },
    {
      "question": "Symmetrisches Verschlüsselungsverfahren: Was passiert, wenn der Schlüssel abgefangen wird?",
      "answer": "Die gesamte Kommunikation kann kompromittiert werden."
    },
    {
      "question": "Symmetrisches Verschlüsselungsverfahren: Welche Nachteile hat es?",
      "answer": "Das Schlüsselverteilungsproblem: Der Schlüssel muss sicher übertragen werden."
    },
    {
      "question": "Symmetrisches Verschlüsselungsverfahren: Nenne ein Beispiel für ein unsicheres Verfahren.",
      "answer": "DES (Data Encryption Standard)."
    },
    {
      "question": "Symmetrisches Verschlüsselungsverfahren: Welches Verfahren ist heutzutage der Standard?",
      "answer": "AES (Advanced Encryption Standard)."
    },
    {
      "question": "Zertifikate in der Informationssicherheit: Was bestätigt ein Zertifikat?",
      "answer": "Es bestätigt die Identität einer Entität und enthält deren öffentlichen Schlüssel."
    },
    {
      "question": "Zertifikate in der Informationssicherheit: Was ist der Hauptbestandteil eines digitalen Zertifikats?",
      "answer": "Der öffentliche Schlüssel der Entität."
    },
    {
      "question": "Zertifikate in der Informationssicherheit: Was wird verwendet, um die Integrität eines Zertifikats sicherzustellen?",
      "answer": "Die digitale Signatur der Zertifizierungsstelle (CA)."
    },
    {
      "question": "Zertifikate in der Informationssicherheit: Wer ist verantwortlich für die Ausstellung und Verwaltung von Zertifikaten?",
      "answer": "Die Zertifizierungsstelle (CA)."
    },
    {
      "question": "Zertifikate in der Informationssicherheit: Welche Funktion hat der öffentliche Schlüssel im Zertifikat?",
      "answer": "Er wird verwendet, um Daten zu verschlüsseln oder die Integrität von Nachrichten zu überprüfen."
    },
    {
      "question": "Zertifikate in der Informationssicherheit: Was stellt die digitale Signatur sicher?",
      "answer": "Dass das Zertifikat nicht manipuliert wurde."
    },
    {
      "question": "Zertifikate in der Informationssicherheit: Welche Arten von digitalen Zertifikaten gibt es?",
      "answer": "Einzelzertifikate, Zwischenzertifikate, Root-Zertifikate."
    },
    {
      "question": "Zertifikate in der Informationssicherheit: Was ist ein Einzelzertifikat?",
      "answer": "Ein Zertifikat, das einer einzelnen Entität wie einer Webseite oder einem Benutzer zugewiesen wird."
    },
    {
      "question": "Zertifikate in der Informationssicherheit: Was ist ein Zwischenzertifikat?",
      "answer": "Ein Zertifikat, das als Bindeglied zwischen der Root-Zertifizierungsstelle und den Endzertifikaten fungiert."
    },
    {
      "question": "Zertifikate in der Informationssicherheit: Was ist die Funktion eines Root-Zertifikats?",
      "answer": "Es ist die höchste vertrauenswürdige Instanz in der PKI und stellt die ersten Zertifikate aus."
    },
    {
      "question": "Zertifikate in der Informationssicherheit: Wo sind Root-Zertifikate häufig vorinstalliert?",
      "answer": "In den meisten Betriebssystemen und Anwendungen."
    },
    {
      "question": "Zertifikate in der Informationssicherheit: Was ist das Ziel von Zertifikaten?",
      "answer": "Sicherzustellen, dass der öffentliche Schlüssel tatsächlich zu der angegebenen Entität gehört."
    },
    {
      "question": "Symmetrisches Verschlüsselungsverfahren: Wie wird es bei großen Datenmengen bewertet?",
      "answer": "Es ist besonders schnell."
    },
    {
      "question": "Arten von digitalen Signaturen: Was ist eine einfache elektronische Signatur?",
      "answer": "Eine einfache digitale Signatur hat keine speziellen Anforderungen und ist rechtlich nicht bindend."
    },
    {
      "question": "Arten von digitalen Signaturen: Was ist ein Beispiel für eine einfache elektronische Signatur?",
      "answer": "Eine gescannte Unterschrift oder ein Name am Ende einer E-Mail."
    },
    {
      "question": "Arten von digitalen Signaturen: Was ist eine fortgeschrittene elektronische Signatur (AES)?",
      "answer": "Eine AES ermöglicht eine eindeutige Identifizierung des Unterzeichners und ist rechtlich beweisbar, aber die Beweislast liegt bei der Partei, die sich auf die Signatur beruft."
    },
    {
      "question": "Arten von digitalen Signaturen: Was ist eine qualifizierte elektronische Signatur (QES)?",
      "answer": "Eine QES basiert auf einem qualifizierten Zertifikat und einer sicheren Signaturerstellungseinheit (SSEE) und hat den gleichen rechtlichen Wert wie eine handschriftliche Unterschrift."
    },
    {
      "question": "Verwendung von Zertifikaten: Was ermöglichen SSL/TLS-Zertifikate?",
      "answer": "Sie ermöglichen sichere, verschlüsselte Verbindungen im Internet, wie bei HTTPS-Verbindungen zu Webseiten."
    },
    {
      "question": "Verwendung von Zertifikaten: Wie werden Zertifikate bei der E-Mail-Verschlüsselung eingesetzt?",
      "answer": "Zertifikate werden verwendet, um E-Mails zu verschlüsseln und zu signieren, sodass nur der beabsichtigte Empfänger die Nachricht lesen kann und der Absender authentifiziert ist."
    },
    {
      "question": "Verwendung von Zertifikaten: Wie wird ein Zertifikat bei der VPN- und Systemanmeldung eingesetzt?",
      "answer": "Zertifikate werden verwendet, um die Identität von Benutzern oder Systemen bei der Anmeldung zu verifizieren."
    },
    {
      "question": "Verwendung von Zertifikaten: Welche Rolle spielen Zertifikate bei digitalen Signaturen?",
      "answer": "Zertifikate spielen eine wichtige Rolle bei der Erstellung und Verifikation digitaler Signaturen von Dokumenten."
    },
    {
      "question": "Vorteile von Zertifikaten: Was ist ein Vorteil von Zertifikaten in Bezug auf Vertrauenswürdigkeit?",
      "answer": "Zertifikate bieten eine vertrauenswürdige und nachprüfbare Möglichkeit der Identitätsprüfung."
    },
    {
      "question": "Vorteile von Zertifikaten: Wie verbessern Zertifikate die Sicherheit?",
      "answer": "Zertifikate ermöglichen sichere Datenübertragungen und gewährleisten die Integrität und Authentizität von Nachrichten."
    },
    {
      "question": "Vorteile von Zertifikaten: Welche rechtliche Bedeutung haben qualifizierte digitale Signaturen?",
      "answer": "Qualifizierte digitale Signaturen haben in vielen Ländern die gleiche rechtliche Bedeutung wie handschriftliche Unterschriften."
    },
    {
      "question": "Herausforderungen von Zertifikaten: Was ist eine Herausforderung bei der Verwaltung von Zertifikaten?",
      "answer": "Zertifikate müssen regelmäßig erneuert und die Zertifikatskette gepflegt werden."
    },
    {
      "question": "Herausforderungen von Zertifikaten: Was erfordert der Aufbau einer PKI?",
      "answer": "Der Aufbau einer PKI erfordert technisches Wissen und geeignete Infrastruktur."
    },
    {
      "question": "Herausforderungen von Zertifikaten: Was passiert, wenn eine Zertifizierungsstelle kompromittiert wird?",
      "answer": "Es können falsche Zertifikate ausgestellt werden, was die Sicherheit gefährdet."
    }
  ],
  "IT-Tech": [


    {
      "question": "Wie lautet die Formel zur Berechnung von Watt?",
      "answer": "P = U × I (P = Leistung in Watt, U = Spannung in Volt, I = Stromstärke in Ampere)."
    },
    {
      "question": "Wie lautet die Formel zur Berechnung von Wattstunden?",
      "answer": "W = P × t (W = Arbeit in Joule oder Wh, P = Leistung in Watt, t = Zeit in Sekunden oder Stunden)."
    },

  ],
  "AEuP": [

    {
      "question": "Was ist Stateless bei RESTful APIs?",
      "answer": "Stateless bedeutet, dass jede Anfrage unabhängig von der vorherigen ist und der Server keine Sitzungsdaten speichert. Jede Anfrage muss alle nötigen Informationen beinhalten, um sie zu verarbeiten."
    },
    {
      "question": "Warum ist Versionierung wichtig in der Softwareentwicklung?",
      "answer": "Damit man Änderungen nachvollziehen kann, Fehler korrigieren kann und die Zusammenarbeit mit anderen verbessert wird."
    },
    {
      "question": "Was ist ein Update?",
      "answer": "Ein Update innerhalb einer Version, z.B. zur Behebung von Bugs."
    },
    {
      "question": "Was ist ein Upgrade?",
      "answer": "Ein Versionssprung oder Wechsel auf eine neue Version."
    },
    {
      "question": "Was sind strukturierte Daten?",
      "answer": "Klare Tabellenstruktur (z.B. SQL) hat Regeln und ist gut organisiert."
    },
    {
      "question": "Was sind semi-strukturierte Daten?",
      "answer": "XML, JSON – gewisse Ordnung, aber nicht streng tabellarisch."
    },
    {
      "question": "Was sind unstrukturierte Daten?",
      "answer": "Texte, Bilder, Videos – keine feste Struktur."
    },
    {
      "question": "Was ist Pfadüberdeckung?",
      "answer": "Jeder logische Pfad im Programm muss mindestens einmal getestet werden."
    },
    {
      "question": "Was ist Zweigüberdeckung?",
      "answer": "Jede Entscheidungsalternative (z.B. if/else) muss mindestens einmal durchlaufen werden."
    },

    {
      "question": "Was ist SOAP (Simple Object Access Protocol)?",
      "answer": "Protokoll für Webservices, basiert auf XML. Standardisiert den Austausch strukturierter Informationen über HTTP. Plattform- und sprachunabhängig."
    },


    {
      "question": "Was ist ein Data Warehouse?",
      "answer": "Ein Data Warehouse ist ein zentraler Datenspeicher, in dem Unternehmensdaten aus verschiedenen Quellen strukturiert und bereinigt abgelegt werden."
    },
    {
      "question": "Was ist ein Data Lake?",
      "answer": "Ein Data Lake ist ein zentraler Speicherort für unstrukturierte oder teilweise strukturierte Daten, die für spätere Analysen genutzt werden können."
    },
    {
      "question": "Was ist ein Data Mesh?",
      "answer": "Ein Data Mesh ist ein dezentraler Ansatz für Datenmanagement, bei dem Fachbereiche für die Aufbereitung und Bereitstellung von Daten verantwortlich sind."
    },
    {
      "question": "Was ist Blockchain (Beispiel Kryptowährung)?",
      "answer": "Daten werden in verketteten Blöcken gespeichert. Jeder Block enthält Transaktionen, Zeitstempel und Verweis auf den vorherigen Block."
    },
    {
      "question": "Was ist Cloud, Fog und Edge Computing?",
      "answer": "Cloud: Ressourcenbereitstellung über das Internet. Fog: Dezentrale Datenverarbeitung nahe am Nutzer (z.B. Router). Edge: Verarbeitung direkt am Gerät (z.B. Kamera)."
    },
    {
      "question": "Was ist Zustandslosigkeit (Statelessness) bei REST-API?",
      "answer": "Jede Anfrage enthält alle nötigen Informationen – keine Speicherung von Zuständen zwischen Anfragen."
    },
    {
      "question": "Was sind REST-API Prinzipien?",
      "answer": "Client-Server-Trennung, Zustandslosigkeit, Caching und einheitliche Schnittstellen."
    },
    {
      "question": "Was ist CSV (Comma-Separated Values)?",
      "answer": "CSV ist ein einfaches Textformat, bei dem Werte durch Trennzeichen (z.B. Komma) getrennt sind und für Tabellen verwendet wird."
    },
    {
      "question": "Was ist XML?",
      "answer": "XML ist eine Markup-Sprache zur hierarchischen Darstellung von Daten mithilfe von Tags."
    },
    {
      "question": "Was ist eine generische Klasse?",
      "answer": "Verwendet Typparameter (z.B. <T>), um Funktionen/Methoden für verschiedene Datentypen zu ermöglichen."
    },
    {
      "question": "Was ist eine iterative Vorgehensweise?",
      "answer": "Mehrfache Ausführung eines Vorgangs (z.B. mit Schleifen: for, while)."
    },
    {
      "question": "Was ist eine rekursive Vorgehensweise?",
      "answer": "Eine Funktion ruft sich selbst auf, bis eine Abbruchbedingung erfüllt ist."
    },
    {
      "question": "Was ist OAuth 2.0?",
      "answer": "OAuth 2.0 ist ein Protokoll, das es Nutzern ermöglicht, Drittanbieter-Apps Zugriff zu gewähren, ohne ihre Passwörter weiterzugeben."
    },
    {
      "question": "Was versteht man unter einer objektorientierten Programmiersprache?",
      "answer": "Ein System wird durch das Zusammenspiel kooperierender Objekte beschrieben. Einem Objekt sind bestimmte Attribute (Eigenschaften) und Methoden zugeordnet. Diese können auch vererbt werden. Das System ist in der Lage, von Objekten Nachrichten zu empfangen und zu senden."
    },
    {
      "question": "Was versteht man unter einer imperativen Programmiersprache?",
      "answer": "Ein Programm besteht aus einer Folge von Anweisungen, die vorgeben, in welcher Reihenfolge was vom Computer getan werden soll."
    },

    {
      "question": "Was ist Pseudocode?",
      "answer": "Der Code ähnelt einem Mix aus natürlicher Sprache, höherer Programmiersprache und mathematischen Verknüpfungen. Er ist nicht maschinenlesbar, aber für Programmierer verständlich."
    },
    {
      "question": "Nenne sechs Qualitätskriterien, die allgemein an eine Software gestellt werden.",
      "answer": "Kompatibilität, Portabilität, Verifizierbarkeit, Effizienz, Usability, Sicherheit."
    },
    {
      "question": "Was sind imperative Programmiersprachen?",
      "answer": "Ablauf von Befehlen, die ein Problem lösen, z. B. C."
    },
    {
      "question": "Was ist der Unterschied zwischen einer Entwicklerdokumentation und einer Anwenderdokumentation?",
      "answer": "Die Entwicklerdokumentation nutzt zahlreiche Abkürzungen und Fachbegriffe. In der Anwenderdokumentation befindet sich keine programmiertechnische Systembeschreibung."
    },
    {
      "question": "Was ist Polymorphie?",
      "answer": "Polymorphie bedeutet, dass Kindklassen die Methoden ihrer Elternklasse überschreiben und je nach Objekt unterschiedlich verhalten können."
    },
    {
      "question": "Was sind die drei Besonderheiten bei der Objektorientierung?",
      "answer": "In der objektorientierten Programmierung sind die drei Hauptmerkmale Kapselung, Vererbung und Polymorphie."
    },
    {
      "question": "Was ist in der OOP unter Vererbung zu verstehen?",
      "answer": "Elternklassen geben ihre Eigenschaften und Methoden an die untergeordneten Kindklassen weiter."
    },
    {
      "question": "Was versteht man bei der OOP unter Kapselung?",
      "answer": "Daten und Methoden innerhalb einer Struktur werden zusammengefasst. Ermöglicht mit dem Geheimnisprinzip den kontrollierten Zugriff auf Daten und Methoden über Schnittstellen."
    },
    {
      "question": "Was versteht man in der Programmierung unter Default?",
      "answer": "Bezeichnet den voreingestellten Wert."
    },
    {
      "question": "Was ist der Unterschied zwischen dynamischer und statischer Typisierung?",
      "answer": "In dynamischen Sprachen (wie Python) wird der Datentyp zur Laufzeit geprüft, während in statischen Sprachen (wie C++) der Datentyp zur Kompilierzeit festgelegt wird."
    },
    {
      "question": "Was ist der Unterschied zwischen starker und schwacher Typisierung?",
      "answer": "Starke Typisierung schließt ungewollte Typumwandlungen aus, während schwache Typisierung diese zulässt."
    },
    {
      "question": "Was ist der Unterschied zwischen expliziter und impliziter Typisierung?",
      "answer": "Der Unterschied zwischen direkt angegebenen (expliziten) und automatisch zugewiesenen (impliziten) Typen."
    },
    {
      "question": "Was ist optionale Typisierung?",
      "answer": "Optionale Typisierung (z. B. in Python durch Type Hints) ermöglicht eine flexiblere Typenprüfung."
    },
    {
      "question": "Was ist Hashing?",
      "answer": "Hashing ist eine einwegige Verschlüsselungstechnik, die nicht zurückgerechnet werden kann. Es wird auch das Konzept von 'Salt' und 'Pepper' zur Verstärkung der Sicherheit erklärt."
    },
    {
      "question": "Was versteht man unter Salt und Pepper im Zusammenhang mit Hashing?",
      "answer": "Salt ist eine zufällige Zeichenfolge, die zusammen mit dem Passwort gehasht wird, um die Sicherheit zu erhöhen, und Pepper ist eine zusätzliche Sicherheitsmaßnahme, bei der der Hashwert weiter verändert wird."
    },
    {
      "question": "Was ist MD5-Hashing?",
      "answer": "MD5-Hashing wird verwendet, um die Unterschiede zwischen Eingaben wie 'Apfel' und 'apfel' zu zeigen. Es wird beschrieben, wie Hashes für Passwörter mit Salt kombiniert werden, um zusätzliche Sicherheit zu gewährleisten."
    },
    {
      "question": "Was ist unter einem Softwareentwurf zu verstehen?",
      "answer": "Der Softwareentwurf bildet die Grundlage für die Implementierung und umfasst die detaillierte Planung der Softwareumsetzung."
    },
    {
      "question": "Was beinhaltet ein Softwareentwurf?",
      "answer": "Ein Softwareentwurf umfasst Aufgaben des Systems, Schnittstellen, zu verwendende Komponenten, die eingesetzte Hardware, das Betriebssystem und die Programmiersprache."
    },
    {
      "question": "Nenne drei Vorteile einer Individualsoftware gegenüber einer Branchensoftware.",
      "answer": "1. Weniger oder keine Lizenzgebühren, 2. Anpassung an die spezifischen Prozesse des Unternehmens, 3. Mehr Gestaltungsmöglichkeiten."
    },
    {
      "question": "Erläutere die Funktionsweise der Schleife als Kontrollstruktur.",
      "answer": "Eine Schleife wird so lange wiederholt, bis die Bedingung nicht mehr zutrifft oder eine festgelegte Durchlaufzahl erreicht ist."
    },
    {
      "question": "Welche Wichtigkeit hat ein Entwurf unter der Beachtung der Größe des Teams und der Größe des Projekts?",
      "answer": "Je größer das Team oder das Projekt ist, desto wichtiger ist ein genauer Entwurf. Nur so können alle Teammitglieder ihre Aufgaben genau erkennen und effizient arbeiten."
    },
    {
      "question": "Welche 6 Phasen gibt es bei einem professionellen Software-Engineering?",
      "answer": "1. Planung, 2. Analyse, 3. Entwurf, 4. Implementierung, 5. Test, 6. Dokumentation."
    },
    {
      "question": "Eine Software besteht aus allen Modultests problemlos. Kann man jetzt die Aussage treffen, dass die Software fehlerfrei ist?",
      "answer": "Nein, es müssten alle denkbaren Use-Cases durchgetestet werden, was in der Praxis jedoch unmöglich ist."
    },
    {
      "question": "Was ist ein Array?",
      "answer": "Ein Array ist eine Datenstruktur, die mehrere Werte speichert. Es kann eindimensional (wie eine Liste) oder mehrdimensional (wie eine Matrix oder Tabelle) sein."
    },
    {
      "question": "Was ist ein Key-Value-Daten-Typ?",
      "answer": "Ein Key-Value-Daten-Typ speichert Daten als Paare von Schlüssel und Wert. Jeder Schlüssel ist mit einem Wert verknüpft, wodurch eine schnelle Suche nach dem Wert über den Schlüssel ermöglicht wird."
    },
    {
      "question": "Was ist ein Interpreter?",
      "answer": "Ein Interpreter verarbeitet den Quellcode eines Projekts zur Laufzeit. Er liest und analysiert jede Zeile und führt sie sofort aus."
    },
    {
      "question": "Um was handelt es sich bei der Programmiersprache Java?",
      "answer": "Java ist eine objektorientierte Compilersprache."
    },

    {
      "question": "Um was handelt es sich bei der Programmiersprache Perl?",
      "answer": "Perl ist eine objektorientierte Skriptsprache."
    },
    {
      "question": "Um was handelt es sich bei der Programmiersprache C?",
      "answer": "C ist eine imperative Compilersprache."
    },
    {
      "question": "Um was handelt es sich bei der Programmiersprache Ruby?",
      "answer": "Ruby ist eine objektorientierte Skriptsprache."
    },
    {
      "question": "Was versteht man unter einer Skriptsprache?",
      "answer": "Eine Skriptsprache ist eine Programmiersprache, die über einen Interpreter ausgeführt wird."
    },
    {
      "question": "Was versteht man unter einer Compilersprache?",
      "answer": "Eine Compilersprache wird durch einen Compiler in Maschinensprache umgewandelt, wobei der gesamte Quellcode des Programms übersetzt wird, bevor das Programm ausgeführt wird."
    },
    {
      "question": "Wofür steht die Abkürzung API?",
      "answer": "API steht für Application Programming Interface."
    },
    {
      "question": "Wie viele voneinander unbekannte Systeme kommunizieren bei einer API miteinander?",
      "answer": "Zwei Systeme kommunizieren miteinander."
    },
    {
      "question": "Wer stellt den Dienst über eine API bereit, wenn man sich mit seinem Google-Login bei einer Drittwebseite einloggt?",
      "answer": "Google stellt den Dienst über die API bereit."
    },
    {
      "question": "Musst du den Code von Facebook kennen, um über eine API Facebook-Kommentare auf deiner Webseite einzubinden?",
      "answer": "Nein, weil die API eine Schnittstelle bereitstellt, über die man Funktionen nutzen kann, ohne den internen Code zu kennen."
    },
    {
      "question": "Warum reduzieren APIs den Programmieraufwand?",
      "answer": "Weil viele Funktionen über fertige Schnittstellen nutzbar sind, ohne dass man sie selbst programmieren muss. Man greift auf bewährte Dienste zu, statt alles neu zu entwickeln."
    },
    {
      "question": "Wie ist es möglich, über eine Vergleich-Webseite einen Flug von Lufthansa zu buchen?",
      "answer": "Die Webseite nutzt die öffentliche API von Lufthansa, um Flugdaten abzurufen und Buchungen zu ermöglichen."
    },
    {
      "question": "Was benötigt man, um eine API zu nutzen?",
      "answer": "Einen API-Key."
    },
    {
      "question": "Warum ist der API-Key notwendig?",
      "answer": "Er identifiziert den Nutzer und verhindert unkontrollierte oder missbräuchliche Zugriffe."
    },
    {
      "question": "Woher bekommt man einen API-Key?",
      "answer": "Vom Anbieter der API – meist durch Registrierung auf dessen Entwicklerplattform."
    },
    {
      "question": "Was versteht man im Zusammenhang mit APIs unter einem Aufruf?",
      "answer": "Ein API-Aufruf ist die Anfrage eines Programms an eine API, um Daten zu senden oder abzurufen."
    },
    {
      "question": "Wofür steht die Abkürzung JSON?",
      "answer": "JSON steht für JavaScript Object Notation."
    },
    {
      "question": "Warum ist JSON bei Programmierern so beliebt?",
      "answer": "Weil JSON leicht lesbar, einfach zu verarbeiten und mit fast allen Programmiersprachen kompatibel ist."
    },
    {
      "question": "Welcher Code erscheint, wenn auf einer Datenbank nichts abgespeichert ist?",
      "answer": "200 – OK. Die Anfrage war erfolgreich, auch wenn keine Daten zurückgegeben wurden."
    },
    {
      "question": "Wie stellt man sicher, dass man auf einer Datenbank nichts überschreibt?",
      "answer": "Zuerst den aktuellen Inhalt abfragen (z. B. mit GET), um zu prüfen, ob bereits Daten vorhanden sind."
    },
    {
      "question": "Wie geht man vor, um auf einer Datenbank nichts zu überschreiben, wenn Daten vorhanden sind?",
      "answer": "Zuerst mit GET die vorhandenen Daten auslesen, dann beides zusammenführen (alte + neue Daten) und anschließend mit PUT oder POST die aktualisierten Daten hochladen."
    },
    {
      "question": "Was bedeutet ein 4xx-Fehler bei der GET-Methode in Zusammenhang mit APIs?",
      "answer": "Die Anfrage ist fehlerhaft – mögliche Gründe sind keine Berechtigung, Ressource nicht vorhanden oder GET-Methode nicht unterstützt."
    },
    {
      "question": "Was sind zwei mögliche Gründe für den Fehlercode 404?",
      "answer": "1. Die angeforderte URL existiert nicht (falsche oder veraltete Adresse). 2. Die Ressource wurde verschoben, aber der Link wurde nicht aktualisiert (toter Link)."
    },
    {
      "question": "Kann man die Aussage treffen, dass eine Software fehlerfrei ist, wenn sie aus allen Modultests besteht?",
      "answer": "Nein, weil man alle möglichen Use-Case-Tests durchführen müsste, was unmöglich ist."
    },
    {
      "question": "Was ist ein Array?",
      "answer": "Ein Array besteht aus mehreren Datenwerten, die entweder eindimensional wie Listen oder mehrdimensional wie Matrizen und Tabellen sein können."
    },
    {
      "question": "Wie funktioniert ein Interpreter?",
      "answer": "Zur Laufzeit wird der Quellcode Zeile für Zeile analysiert und ausgeführt."
    },
    {
      "question": "Was ist eine objektorientierte Compilersprache?",
      "answer": "Eine objektorientierte Compilersprache ist zum Beispiel Java."
    },
    {
      "question": "Was ist eine objektorientierte Skriptsprache?",
      "answer": "Beispiele für objektorientierte Skriptsprachen sind Perl und Ruby."
    },
    {
      "question": "Was versteht man unter einer Compilersprache?",
      "answer": "Der Code wird vor der Laufzeit in Maschinencode übersetzt."
    },
    {
      "question": "Was ist eine objektorientierte Programmiersprache?",
      "answer": "In einer objektorientierten Programmiersprache arbeiten kooperative Objekte zusammen, die Attribute und Methoden haben. Das System kann Objekt-Nachrichten empfangen und senden."
    },
    {
      "question": "Was ist eine imperative Programmiersprache?",
      "answer": "Eine imperative Programmiersprache besteht aus einer Folge von Anweisungen, die dem Computer sagen, was als Nächstes zu tun ist."
    },

    {
      "question": "Was ist Pseudocode?",
      "answer": "Pseudocode ist ein Mix aus Programmiersprache, mathematischer Verknüpfung und natürlicher Sprache."
    },

    {
      "question": "Welche Qualitätskriterien gibt es für Software?",
      "answer": "Die Qualitätskriterien für Software sind: Kompatibilität, Portabilität, Usability, Integrität, Effizienz und Verifizierbarkeit."
    },
    {
      "question": "Was ist Eclipse?",
      "answer": "Eclipse ist eine Entwicklungsumgebung, die ursprünglich für Java entwickelt wurde, aber auch für andere Sprachen mit Erweiterungen nutzbar ist."
    },
    {
      "question": "Wie können Eingabefehler für Endnutzer reduziert werden?",
      "answer": "Eingabefehler können durch Plausibilitätsüberprüfung und Begrenzungen reduziert werden, z. B. PLZ nur Zahlen oder E-Mail-Syntax überprüfen."
    },
    {
      "question": "Was bedeutet GUI?",
      "answer": "GUI steht für grafische Benutzeroberfläche."
    },
    {
      "question": "Was ist der Unterschied zwischen Entwicklerdokumentation und Anwendungsdokumentation?",
      "answer": "Entwicklerdokumentation enthält viele Abkürzungen und Fachbegriffe, während Anwendungsdokumentation keine programmiertechnische Systembeschreibung enthält."
    },
    {
      "question": "Was versteht man bei der OOP unter Polymorphie?",
      "answer": "Polymorphie tritt auf, wenn eine Methode in einer abgeleiteten Klasse die gleiche Signatur hat wie in der Basisklasse, und zur Laufzeit die Methode überschrieben wird."
    },
    {
      "question": "Was sind Default-Werte?",
      "answer": "Default-Werte sind voreingestellte Werte."
    },
    {
      "question": "Was ist die Funktion von alert() in JavaScript?",
      "answer": "alert() in JavaScript zeigt ein Fehlermeldungs-Popup an, das eine Nachricht als Parameter übergeben bekommt."
    },
    {
      "question": "Was versteht man bei der OOP unter Vererbung?",
      "answer": "Bei der Vererbung erbt eine Kindklasse von der Elternklasse die Methoden und Eigenschaften."
    },
    {
      "question": "Was bedeutet NOT NULL?",
      "answer": "NOT NULL bedeutet, dass das Feld nicht null sein darf."
    },
    {
      "question": "Was versteht man bei der OOP unter Kapselung?",
      "answer": "Kapselung bedeutet, dass Daten und Methoden innerhalb einer Struktur zusammengefasst sind und der Zugriff über Schnittstellen erfolgt. Dies folgt dem Geheimnisprinzip."
    },
    {
      "question": "Wofür steht REST in REST-API?",
      "answer": "Steht für Representational State Transfer - Application Programming Interfac."
    },
    {
      "question": "Was ist eine REST-API?",
      "answer": "Eine REST-API ist eine Schnittstelle, über die Systeme über HTTP miteinander kommunizieren können."
    },
    {
      "question": "Welche Protokolle nutzt REST?",
      "answer": "REST nutzt das HTTP-Protokoll."
    },
    {
      "question": "Was bedeutet GET in einer REST-API?",
      "answer": "GET wird verwendet, um Daten vom Server abzurufen."
    },
    {
      "question": "Was bedeutet POST in einer REST-API?",
      "answer": "POST wird verwendet, um neue Daten an den Server zu senden."
    },
    {
      "question": "Was bedeutet PUT in einer REST-API?",
      "answer": "PUT wird verwendet, um vorhandene Daten vollständig zu aktualisieren."
    },
    {
      "question": "Was bedeutet PATCH in einer REST-API?",
      "answer": "PATCH wird verwendet, um Daten teilweise zu aktualisieren."
    },
    {
      "question": "Was bedeutet DELETE in einer REST-API?",
      "answer": "DELETE wird verwendet, um Daten zu löschen."
    },
    {
      "question": "Was ist ein Endpunkt (Endpoint) in einer REST-API?",
      "answer": "Ein Endpunkt ist eine URL, über die eine bestimmte Funktion der API angesprochen wird."
    },
    {
      "question": "Was ist ein JSON-Format bei REST?",
      "answer": "JSON ist ein Datenformat, das häufig zum Austausch von Informationen in REST-APIs verwendet wird."
    },
    {
      "question": "Was ist ein Statuscode 200?",
      "answer": "Er bedeutet, dass die Anfrage erfolgreich war."
    },
    {
      "question": "Was bedeutet der Statuscode 404?",
      "answer": "404 bedeutet, dass die angeforderte Ressource nicht gefunden wurde."
    },
    {
      "question": "Was bedeutet der Statuscode 400?",
      "answer": "Falsche oder fehlerhafte Anfrage vom Client."
    },
    {
      "question": "Was bedeutet der Statuscode 100?",
      "answer": "100 bedeutet, dass die Anfrage empfangen wurde und der Client fortfahren kann."
    },
    {
      "question": "Was bedeutet der Statuscode 102?",
      "answer": "102 bedeutet, dass die Anfrage bearbeitet wird, aber noch keine Antwort vorliegt."
    },
    {
      "question": "Was bedeutet der Statuscode 301?",
      "answer": "Die Ressource wurde dauerhaft verschoben – neue Adresse wird mitgeteilt."
    },
    {
      "question": "Was bedeutet der Statuscode 500?",
      "answer": "500 zeigt einen Serverfehler an."
    },
    {
      "question": "Ist REST zustandslos?",
      "answer": "Ja, jede Anfrage ist unabhängig – der Server speichert keinen Zustand zwischen den Anfragen."
    },
    {
      "question": "Was ist ein Vorteil von REST?",
      "answer": "REST ist leichtgewichtig, flexibel und nutzt standardisierte HTTP-Methoden."
    },
    {
      "question": "Welche fünf Hauptbereiche gibt es bei HTTP-Statuscodes?",
      "answer": "1xx: Information, 2xx: Erfolg, 3xx: Weiterleitung, 4xx: Clientfehler, 5xx: Serverfehler"
    },
    {
      "question": "Was bedeutet der Statuscode-Bereich 1xx?",
      "answer": "1xx bedeutet, dass es sich um eine rein informative Antwort handelt."
    },
    {
      "question": "Was bedeutet der Statuscode-Bereich 2xx?",
      "answer": "2xx bedeutet, dass die Anfrage erfolgreich war."
    },
    {
      "question": "Was bedeutet der Statuscode-Bereich 3xx?",
      "answer": "3xx bedeutet, dass eine Weiterleitung erforderlich ist."
    },
    {
      "question": "Was bedeutet der Statuscode-Bereich 4xx?",
      "answer": "4xx bedeutet, dass ein Fehler beim Client aufgetreten ist."
    },
    {
      "question": "Was bedeutet der Statuscode-Bereich 5xx?",
      "answer": "5xx bedeutet, dass ein Serverfehler aufgetreten ist."
    },
    {
      "question": "Wie sieht eine HTTP-Response grob aus?",
      "answer": "Sie besteht aus Statuscode, Header und Body."
    },
    {
      "question": "Was steht im Body einer Response?",
      "answer": "Im Body stehen meist die angeforderten Daten oder eine Fehlermeldung."
    },
    {
      "question": "Was steht im Header einer Response?",
      "answer": "Der Header enthält Metadaten wie Content-Type, Datum oder Caching-Informationen."
    },
    {
      "question": "Was zeigt der Status einer Response an?",
      "answer": "Ob die Anfrage erfolgreich war oder ein Fehler aufgetreten ist."
    },
    {
      "question": "Wie sieht ein typischer HTTP-Request aus?",
      "answer": "Ein Request enthält Methode (z.B. GET), URL (Endpunkt), Header und optional einen Body."
    },
    {
      "question": "Was steht im Body eines HTTP-Requests?",
      "answer": "Im Body stehen meist Daten, die an den Server gesendet werden."
    },
    {
      "question": "Was steht im Header eines HTTP-Requests?",
      "answer": "Im Header stehen Informationen wie Authentifizierung JWT, Content-Type oder Spracheinstellungen."
    },
    {
      "question": "Welche HTTP-Methoden sind am häufigsten in REST-APIs?",
      "answer": "GET, POST, PUT, und DELETE"
    },
    {
      "question": "Wofür wird die Methode GET verwendet?",
      "answer": "GET wird verwendet, um Daten vom Server abzurufen."
    },
    {
      "question": "Wofür wird die Methode POST verwendet?",
      "answer": "POST wird verwendet, um neue Daten zu erstellen."
    },
    {
      "question": "Wofür wird die Methode PUT verwendet?",
      "answer": "PUT wird verwendet, um vorhandene Daten vollständig zu aktualisieren."
    },
    {
      "question": "Wofür wird die Methode DELETE verwendet?",
      "answer": "DELETE wird verwendet, um Daten zu löschen."
    },
    {
      "question": "Was bedeutet On-Premises?",
      "answer": "Bei On-Premises wird die gesamte IT-Infrastruktur im eigenen Unternehmen betrieben und verwaltet – inklusive Hardware, Software, Updates und Sicherheit."
    },
    {
      "question": "Was ist der Hauptunterschied zwischen On-Premises und Cloud-Lösungen?",
      "answer": "On-Premises läuft lokal im Unternehmen, während Cloud-Lösungen extern von Anbietern bereitgestellt werden – meist über das Internet."
    },
    {
      "question": "Was ist SaaS (Software as a Service)?",
      "answer": "SaaS stellt komplette Anwendungen über das Internet bereit. Der Nutzer greift z.B. per Browser darauf zu. Beispiele: Google Docs, Microsoft 365."
    },
    {
      "question": "Was ist PaaS (Platform as a Service)?",
      "answer": "PaaS bietet eine Plattform zur Entwicklung, Testung und Bereitstellung von Anwendungen. Entwickler müssen sich nicht um Infrastruktur kümmern. Beispiel: Heroku."
    },
    {
      "question": "Was ist IaaS (Infrastructure as a Service)?",
      "answer": "IaaS stellt virtuelle Maschinen, Netzwerke und Speicher bereit. Der Nutzer verwaltet Betriebssysteme und Software selbst. Beispiel: Amazon AWS EC2."
    },
    {
      "question": "Was verwaltet man selbst bei IaaS?",
      "answer": "Das Betriebssystem, Middleware, Daten und Anwendungen – die Infrastruktur wie Server, Speicher und Netzwerk wird vom Anbieter verwaltet."
    },
    {
      "question": "Was ist der Unterschied zwischen SaaS und PaaS?",
      "answer": "Bei SaaS nutzt man fertige Software, bei PaaS entwickelt man eigene Anwendungen auf einer vorgefertigten Plattform."
    },
    {
      "question": "Nenne ein Beispiel für IaaS.",
      "answer": "Amazon EC2 – stellt virtuelle Maschinen bereit, auf denen man sein eigenes Betriebssystem und Software installieren kann."
    },
    {
      "question": "Nenne ein Beispiel für SaaS.",
      "answer": "Google Workspace (z.B. Google Docs, Google Mail)."
    },
    {
      "question": "Nenne ein Beispiel für PaaS.",
      "answer": "Microsoft Azure App Services oder Heroku."
    },
    {
      "question": "Welche Vorteile hat SaaS?",
      "answer": "Einfach zu nutzen, keine Installation nötig, Updates und Wartung übernimmt der Anbieter."
    },
    {
      "question": "Welche Verantwortung hat man bei On-Premises?",
      "answer": "Man ist für alles verantwortlich – von der Hardware über das Netzwerk bis zur Sicherheit und Wartung der Software."
    },
    {
      "question": "Was ist statische Typisierung?",
      "answer": "Der Datentyp muss bereits vor der Laufzeit festgelegt werden, z.B. bei Java."
    },
    {
      "question": "Was ist dynamische Typisierung?",
      "answer": "Der Datentyp wird erst zur Laufzeit bestimmt, z.B. bei JavaScript."
    },
    {
      "question": "Was ist starke Typisierung?",
      "answer": "Eine Sprache erlaubt keine oder kaum automatische Typumwandlung. Entwickler müssen explizit umwandeln."
    },
    {
      "question": "Was ist schwache Typisierung?",
      "answer": "Die Sprache erlaubt oft automatische und implizite Typumwandlungen zwischen verschiedenen Datentypen."
    },
    {
      "question": "Was versteht man unter impliziter Typumwandlung?",
      "answer": "Eine automatische Umwandlung von Datentypen, z.B. von Integer zu Float, wenn keine Daten verloren gehen."
    },
    {
      "question": "Was ist explizite Typumwandlung?",
      "answer": "Der Entwickler muss die Umwandlung von einem Datentyp in einen anderen selbst vornehmen."
    },
    {
      "question": "Nenne ein Beispiel für eine Sprache mit statischer Typisierung.",
      "answer": "Java."
    },
    {
      "question": "Nenne ein Beispiel für eine Sprache mit dynamischer Typisierung.",
      "answer": "JavaScript."
    },
    {
      "question": "Warum kann schwache Typisierung zu Problemen führen?",
      "answer": "Weil automatisch Typen umgewandelt werden können, wodurch unvorhergesehene Fehler entstehen können."
    },
    {
      "question": "Was ist eine virtuelle Maschine (VM)?",
      "answer": "Ein System, das seine Ressourcen in virtuelle Systeme aufteilt. Auf jeder VM läuft ein eigenes Betriebssystem."
    },
    {
      "question": "Was ist ein Hypervisor?",
      "answer": "Ein Programm zur Erstellung und Verwaltung von VMs."
    },
    {
      "question": "Was ist ein Typ-1-Hypervisor?",
      "answer": "Ein Hypervisor, der direkt auf der Hardware läuft (Bare Metal), z.B. Hyper-V."
    },
    {
      "question": "Was ist ein Typ-2-Hypervisor?",
      "answer": "Ein Hypervisor, der auf einem Betriebssystem läuft, z.B. VirtualBox."
    },
    {
      "question": "Wofür wird Server-Virtualisierung eingesetzt?",
      "answer": "Für den Betrieb von Mailservern, Webservern, Fileservern usw."
    },
    {
      "question": "Was ist ein ThinClient in der Client-Virtualisierung?",
      "answer": "Ein abgespeckter PC, der nur zur Verbindung mit einer VM dient."
    },
    {
      "question": "Was sind Vor- und Nachteile von Client-Virtualisierung?",
      "answer": "Vorteil: billig, leicht zu patchen. Nachteil: netzwerkgebunden, bei Corona waren Laptops praktikabler."
    },
    {
      "question": "Was ist Anwendungsvirtualisierung (Application-Server)?",
      "answer": "Der Nutzer startet die Anwendung lokal, aber sie läuft auf einem Server. Für ihn wirkt es, als wäre sie lokal."
    },
    {
      "question": "Was sind die Vorteile der Anwendungsvirtualisierung?",
      "answer": "Nur eine Instanz muss gepatcht werden, geringer Verwaltungsaufwand, lokal wirkende Anwendung."
    },
    {
      "question": "Was ist Containerisierung?",
      "answer": "Mehrere Anwendungen laufen in isolierten Containern, die sich denselben Kernel teilen. Jeder Container hat ein eigenes Dateisystem."
    },
    {
      "question": "Welche Vorteile bieten Container gegenüber VMs?",
      "answer": "Geringer Ressourcenverbrauch, schnelle Startzeit, Isolierung durch Namespaces und cgroups."
    },
    {
      "question": "Was sind cgroups und wofür werden sie verwendet?",
      "answer": "Control Groups – teilen die Ressourcen (CPU, RAM) zwischen Containern."
    },
    {
      "question": "Was sind Namespaces in Containern?",
      "answer": "Sorgen für die Isolation, sodass Container sich gegenseitig nicht sehen."
    },
    {
      "question": "Was macht Docker Compose?",
      "answer": "Startet mehrere Container-Anwendungen mit Konfigurationsdateien und Skripten gleichzeitig."
    },
    {
      "question": "Was ist Kubernetes?",
      "answer": "Eine Orchestrierungssoftware, die Container automatisch starten, skalieren und verwalten kann."
    },
    {
      "question": "Was kann Kubernetes im Fehlerfall tun?",
      "answer": "Automatisch neue Container starten, wenn ein bestehender ausfällt oder überlastet ist."
    },
    {
      "question": "Was ist die 1. Generation von Programmiersprachen?",
      "answer": "Maschinensprache (1GL) – besteht nur aus 0 und 1, direkt vom Prozessor ausführbar."
    },
    {
      "question": "Was ist die 2. Generation von Programmiersprachen?",
      "answer": "Assembler (2GL) – benutzt mnemonische Codes, wird in Maschinencode übersetzt."
    },
    {
      "question": "Was zählt zur 3. Generation der Programmiersprachen?",
      "answer": "Hochsprachen wie C, C++, Java – menschenlesbar, aber maschinenfern."
    },
    {
      "question": "Was ist die 4. Generation der Programmiersprachen?",
      "answer": "Deklarative Sprachen wie SQL – Fokus liegt auf dem Was, nicht dem Wie."
    },
    {
      "question": "Was versteht man unter unstrukturierter Programmierung?",
      "answer": "Programmierung mit 'GOTO'-Befehlen – Sprünge zwischen Codeabschnitten, schwer wartbar, fehleranfällig."
    },
    {
      "question": "Was ist strukturierte Programmierung?",
      "answer": "Code folgt logischen Strukturen wie Sequenzen, Verzweigungen, Schleifen – besser wartbar."
    },
    {
      "question": "Was sind Programmierparadigmen?",
      "answer": "Verschiedene Denkmodelle zur Umsetzung von Programmen: Prozedural, Objektorientiert, Funktional, Logisch."
    },
    {
      "question": "Was ist prozedurale Programmierung?",
      "answer": "Programme bestehen aus Funktionen/Prozeduren. Nachteile: Datenstruktur und Logik sind getrennt."
    },
    {
      "question": "Was ist objektorientierte Programmierung (OOP)?",
      "answer": "Programme bestehen aus Objekten mit Attributen und Methoden. Stützt sich auf Vererbung, Polymorphie und Kapselung."
    },
    {
      "question": "Was ist funktionale Programmierung?",
      "answer": "Programme bestehen aus Funktionen. Kein Zustand, keine Objekte. Daten sind unveränderlich (Immutability)."
    },
    {
      "question": "Was ist logische Programmierung?",
      "answer": "Basierend auf Fakten und Regeln. Nutzt Backtracking, um Lösungen zu finden. Beispiel: Prolog."
    },
    {
      "question": "Was bedeutet Immutability in der funktionalen Programmierung?",
      "answer": "Daten werden nicht verändert. Neue Werte entstehen durch Zuweisung, nicht durch Modifikation."
    },
    {
      "question": "Was ist Backtracking in der logischen Programmierung?",
      "answer": "Eine Technik, bei der das Programm zu vorherigen Zuständen zurückkehrt, wenn eine Lösung fehlschlägt."
    },

    {
      "question": "Wofür steht die Abkürzung CRUD in der Datenverarbeitung?",
      "answer": "Create, Read, Update, Delete – das sind die vier grundlegenden Operationen zur Bearbeitung von Daten in einer Datenbank."
    },
    {
      question: "Was ist Betriebssystem-Software?",
      answer: "Ein Betriebssystem verwaltet die Hardware und Software eines Computers und stellt eine Benutzeroberfläche bereit. Beispiele sind Linux, Windows und Mac."
    },
    {
      question: "Was sind Treiber?",
      answer: "Treiber sind Programme, die die Kommunikation zwischen der Hardware (z.B. Tastatur, Maus, Grafik) und dem Betriebssystem ermöglichen."
    },
    {
      question: "Was ist Anwendungssoftware?",
      answer: "Anwendungssoftware sind Programme, die den Benutzern bei der Erledigung spezifischer Aufgaben helfen, wie Office 2021, Firefox oder Chrome."
    },
    {
      question: "Was sind Standard-Anwendungsprogramme?",
      answer: "Standard-Anwendungsprogramme sind Softwarelösungen, die allgemein verwendet werden, wie z.B. Microsoft Office oder Webbrowser wie Firefox und Chrome."
    },
    {
      question: "Was sind Branchen-Anwendungsprogramme?",
      answer: "Branchen-Anwendungssoftware ist für spezifische Unternehmensbedürfnisse konzipiert, wie z.B. SAP für die Verwaltung von Unternehmensressourcen."
    },
    {
      question: "Was ist Individualsoftware?",
      answer: "Individualsoftware ist maßgeschneiderte Software, die speziell für die Anforderungen eines Unternehmens oder einer Person entwickelt wird."
    },
    {
      question: "Was ist das Modularitätsprinzip?",
      answer: "Das Modularitätsprinzip besagt, dass komplexe Aufgaben in kleinere, unabhängige Module zerlegt werden, um die Komplexität zu verringern."
    },
    {
      question: "Was versteht man unter dem Abstraktionsprinzip?",
      answer: "Das Abstraktionsprinzip bedeutet, dass nur wesentliche Daten berücksichtigt werden, um die Komplexität zu reduzieren."
    },
    {
      question: "Was passiert in der Analysephase des Softwarelebenszyklus?",
      answer: "In der Analysephase wird das Problem gründlich untersucht, um die Anforderungen und Ziele des Projekts zu verstehen."
    },
    {
      question: "Was wird in der Planungsphase festgelegt?",
      answer: "In der Planungsphase werden Schritte, Ressourcen und der Zeitrahmen festgelegt, um das Projekt erfolgreich umzusetzen."
    },
    {
      question: "Was ist das Ziel der Designphase?",
      answer: "In der Designphase wird die Architektur des Systems entwickelt, um die Struktur und das Aussehen der Software zu bestimmen."
    },
    {
      question: "Was passiert in der Programmierphase?",
      answer: "In der Programmierphase wird der Code geschrieben, um die Software basierend auf den vorherigen Entwürfen und Anforderungen zu erstellen."
    },

    {
      question: "Was geschieht im Einsatz?",
      answer: "Im Einsatz wird die Software nach erfolgreichen Tests in der realen Umgebung implementiert und für die Benutzer zugänglich gemacht."
    },
    {
      question: "Was passiert in der Wartungsphase?",
      answer: "In der Wartungsphase werden Fehler behoben und die Software an Änderungen der Umgebung oder Anforderungen angepasst."
    },
    {
      question: "Was bedeutet kontinuierliche Verbesserung im Softwarelebenszyklus?",
      answer: "Durch kontinuierliche Verbesserung werden neue Funktionen hinzugefügt und die Software wird optimiert, um ihre Leistung und Benutzerfreundlichkeit zu steigern."
    },
    {
      question: "Was ist 1G in der Programmiersprache?",
      answer: "1G ist die Maschinensprache, die aus binären Zahlen (0 und 1) besteht und direkt von der Hardware verstanden wird."
    },
    {
      question: "Was sind 2G-Programmiersprachen?",
      answer: "2G sind Assemblersprachen, die symbolische Anweisungen verwenden, die mit einem Assembler in Maschinensprache übersetzt werden, z.B. x86 Assembler."
    },
    {
      question: "Was zeichnet 3G-Programmiersprachen aus?",
      answer: "3G-Programmiersprachen sind problemorientiert und benötigen einen Interpreter oder Compiler, um den Code in Maschinensprache umzuwandeln, z.B. C, Java, Python."
    },
    {
      question: "Was sind 4G-Programmiersprachen?",
      answer: "4G-Programmiersprachen sind deskriptiv und beschreiben, was das Programm tun soll, ohne detaillierte Algorithmen vorzugeben, z.B. SQL oder XML."
    },
    {
      question: "Was ist ein rekursiver Algorithmus?",
      answer: "Ein rekursiver Algorithmus ruft sich selbst auf, um ein Problem in kleinere, gleichartige Teilprobleme zu zerlegen, bis eine Abbruchbedingung erreicht ist."
    },
    {
      question: "Was ist ein iterativer Algorithmus?",
      answer: "Ein iterativer Algorithmus löst ein Problem durch wiederholte Ausführung eines bestimmten Befehls oder einer Schleife, bis eine Abbruchbedingung erfüllt ist."
    },
    {
      question: "Was ist der Unterschied zwischen einem Compiler und einem Interpreter?",
      answer: "Ein Compiler übersetzt den gesamten Quellcode eines Programms auf einmal in Maschinensprache, während ein Interpreter den Quellcode direkt zur Laufzeit ausführt."
    },
    {
      question: "Was ist ein Cross-Compiler?",
      answer: "Ein Cross-Compiler übersetzt Quellcode in Maschinensprache für eine andere Plattform, als auf der er ausgeführt wird."
    },
    {
      question: "Was ist ein Debugger?",
      answer: "Ein Debugger hilft dabei, logische Fehler im Code zu finden, wie z.B. falsche Berechnungen oder fehlerhafte Klammern."
    },
    {
      question: "Was macht eine IDE (Integrierte Entwicklungsumgebung)?",
      answer: "Eine IDE vereint Werkzeuge wie einen Editor, Compiler, Debugger und weitere Hilfsprogramme in einer Oberfläche, um die Softwareentwicklung zu erleichtern."
    },

    {
      question: "Was ist eine Benutzerdokumentation?",
      answer: "Die Benutzerdokumentation ist das Handbuch für den Benutzer. Es enthält Anleitungen, wie die Software verwendet wird, sowie Anforderungen an die Hardware und Anweisungen zur Installation."
    },
    {
      question: "Was bedeutet Endlichkeit bei einem Algorithmus?",
      answer: "Endlichkeit bedeutet, dass ein Algorithmus nach einer endlichen Anzahl von Schritten ein Ergebnis liefert. Der Algorithmus darf nicht unendlich laufen."
    },
    {
      question: "Was versteht man unter Eindeutigkeit (Determinismus) bei einem Algorithmus?",
      answer: "Eindeutigkeit bedeutet, dass ein Algorithmus so formuliert ist, dass bei gleichen Eingaben immer das gleiche Ergebnis erzielt wird."
    },
    {
      question: "Was bedeutet Termination bei einem Algorithmus?",
      answer: "Termination bedeutet, dass ein Algorithmus sicherstellt, dass er irgendwann endet und nicht in einer Endlosschleife verweilt."
    },
    {
      question: "Was ist Determiniertheit bei einem Algorithmus?",
      answer: "Determiniertheit bedeutet, dass der Algorithmus für jede Eingabe genau die gleichen Schritte ausführt und zu einem spezifischen Ergebnis führt."
    },
    {
      question: "Was bedeutet Ausführbarkeit bei einem Algorithmus?",
      answer: "Ausführbarkeit bedeutet, dass alle Schritte eines Algorithmus praktisch umsetzbar sind und effizient auf realen Computern durchgeführt werden können."
    },
    {
      question: "Was bedeutet Allgemeingültigkeit bei einem Algorithmus?",
      answer: "Allgemeingültigkeit bedeutet, dass ein Algorithmus für eine Vielzahl von Eingabewerten und -typen anwendbar ist und nicht nur für spezielle Fälle funktioniert."
    },
    {
      question: "Was bedeutet Effektivität bei einem Algorithmus?",
      answer: "Effektivität bedeutet, dass ein Algorithmus das Problem korrekt löst, ohne unnötige oder überflüssige Schritte zu enthalten."
    },
    {
      question: "Was ist Effizienz bei einem Algorithmus?",
      answer: "Effizienz bedeutet, dass der Algorithmus möglichst wenige Ressourcen (wie Zeit oder Speicher) benötigt, um das Problem zu lösen."
    },
    {
      question: "Was bedeutet Schnelligkeit bei einem Algorithmus?",
      answer: "Schnelligkeit bedeutet, dass der Algorithmus das Ergebnis möglichst schnell liefert, d.h. mit der geringstmöglichen Laufzeit."
    },
    {
      question: "Was versteht man unter Wartbarkeit bei einem Algorithmus?",
      answer: "Wartbarkeit bedeutet, dass ein Algorithmus so gestaltet ist, dass er bei Bedarf leicht angepasst oder erweitert werden kann."
    },
    {
      question: "Was bedeutet Übersichtlichkeit bei einem Algorithmus?",
      answer: "Übersichtlichkeit bedeutet, dass der Algorithmus klar strukturiert und einfach zu verstehen ist, sodass andere Entwickler ihn leicht nachvollziehen können."
    },
    {
      question: "Was versteht man unter Funktionalität als Qualitätsmerkmal von Softwaresystemen?",
      answer: "Funktionalität beschreibt, inwieweit das Softwaresystem die festgelegten Anforderungen und Funktionen korrekt und vollständig erfüllt."
    },
    {
      question: "Was bedeutet Zuverlässigkeit als Qualitätsmerkmal von Softwaresystemen?",
      answer: "Zuverlässigkeit bedeutet, dass das Softwaresystem stabil arbeitet und Fehler vermeidet oder schnell behebt, sodass es kontinuierlich die gewünschten Ergebnisse liefert."
    },
    {
      question: "Was bedeutet Benutzbarkeit als Qualitätsmerkmal von Softwaresystemen?",
      answer: "Benutzbarkeit bezeichnet, wie einfach und intuitiv das System für die Endanwender zu verstehen, zu erlernen und zu bedienen ist."
    },
    {
      question: "Was versteht man unter Effizienz als Qualitätsmerkmal von Softwaresystemen?",
      answer: "Effizienz bezieht sich auf die Fähigkeit des Systems, seine Aufgaben mit minimalem Ressourcenverbrauch, wie Zeit und Speicher, auszuführen."
    },
    {
      question: "Was bedeutet Änderbarkeit als Qualitätsmerkmal von Softwaresystemen?",
      answer: "Änderbarkeit beschreibt, wie leicht das System angepasst, erweitert oder korrigiert werden kann, um neue Anforderungen oder Fehler zu berücksichtigen."
    },
    {
      question: "Was versteht man unter Übertragbarkeit als Qualitätsmerkmal von Softwaresystemen?",
      answer: "Übertragbarkeit ist die Fähigkeit des Systems, in verschiedenen Umgebungen oder auf unterschiedlichen Plattformen korrekt zu funktionieren, ohne signifikante Änderungen."
    },
    {
      question: "Was sind interne Informationen?",
      answer: "Interne Informationen stammen aus dem Unternehmen selbst, wie z.B. Kundendaten, Bestellstatistiken oder Berichte, und sind oft schnell und kostengünstig verfügbar, jedoch möglicherweise nicht immer aktuell."
    },
    {
      question: "Was sind externe Informationen?",
      answer: "Externe Informationen stammen von Quellen außerhalb des Unternehmens, wie Internetrecherchen, Fachzeitschriften oder Messen. Sie sind oft kostenpflichtig und erfordern einen höheren Aufwand zur Beschaffung und Verifizierung."
    },
    {
      question: "Was sind Primärdaten?",
      answer: "Primärdaten werden direkt vom Unternehmen durch Erhebungen wie Befragungen oder Beobachtungen gesammelt, um genau die benötigten Informationen zu erhalten."
    },
    {
      question: "Was sind Sekundärdaten?",
      answer: "Sekundärdaten sind bereits bestehende Daten, die zu einem früheren Zeitpunkt gesammelt wurden und für ähnliche Fragestellungen genutzt werden können, jedoch möglicherweise nicht immer aktuell oder vollständig zutreffend sind."
    },
    {
      question: "Was ist Datenschutz?",
      answer: "Datenschutz schützt die Privatsphäre der Menschen, indem er festlegt, welche persönlichen Daten erhoben und verarbeitet werden dürfen."
    },
    {
      question: "Was bedeutet das Recht auf informationelle Selbstbestimmung?",
      answer: "Das Recht auf informationelle Selbstbestimmung gibt jedem Menschen die Kontrolle darüber, welche seiner persönlichen Daten gesammelt und genutzt werden."
    },
    {
      question: "Was ist Datensicherheit?",
      answer: "Datensicherheit sorgt dafür, dass alle Daten, ob personenbezogen oder nicht, vor Verlust, Manipulation und unbefugtem Zugriff geschützt werden."
    },
    {
      question: "Was regelt das Bundesdatenschutzgesetz (BDSG)?",
      answer: "Das Bundesdatenschutzgesetz regelt in Deutschland den Umgang mit personenbezogenen Daten und schützt die Rechte der betroffenen Personen."
    },

    {
      question: "Was ist statische Code-Analyse?",
      answer: "Prüfen des Codes auf Fehler ohne Programmausführung."
    },

    {
      question: "Was ist das Zweierkomplement?",
      answer: "Methode zur Darstellung negativer Zahlen in Binärform."
    },
    {
      question: "Was ist Vorzeichen-Bit?",
      answer: "Methode, bei der das führende Bit das Vorzeichen angibt."
    },
    {
      question: "Was ist RGB?",
      answer: "RGB ist ein Farbcodierungssystem mit 24-Bit-Farbtiefe, wobei jede der drei Farben (Rot, Grün, Blau) 256 mögliche Werte hat, was 255×255×255 ergibt."
    },
    {
      question: "Was ist RGBA?",
      answer: "RGBA ist ein Farbcodierungssystem mit 32-Bit-Farbtiefe, das zusätzlich zum RGB-Wert einen Alpha-Kanal zur Transparenzkontrolle beinhaltet."
    },
    {
      question: "Was sind flüchtige Daten?",
      answer: "Flüchtige Daten gehen verloren, sobald der Strom abgeschaltet wird, z. B. Daten im RAM."
    },
    {
      question: "Was sind dauerhafte Daten?",
      answer: "Dauerhafte Daten bleiben auch ohne Strom erhalten, z. B. auf Festplatten oder SSDs."
    },
    {
      question: "Was sind Anwendungsdaten?",
      answer: "Anwendungsdaten sind vom Benutzer erstellte Daten, wie z. B. Dokumente oder Bilder."
    },
    {
      question: "Was sind Systemdaten?",
      answer: "Systemdaten sind technische Daten, die vom Betriebssystem oder Programmen generiert werden."
    },
    {
      question: "Was sind Protokolldaten?",
      answer: "Protokolldaten dienen der Nachvollziehbarkeit von Systemereignissen."
    },
    {
      question: "Was sind öffentliche Daten?",
      answer: "Öffentliche Daten sind frei zugänglich für jeden, wie z. B. Webseiteninhalte."
    },
    {
      question: "Was sind interne Daten?",
      answer: "Interne Daten sind nur für Mitarbeiter zugänglich, z. B. Unternehmensdokumente."
    },
    {
      question: "Was sind vertrauliche Daten?",
      answer: "Vertrauliche Daten sind personenbezogene Daten, wie z. B. eine Personalakte."
    },
    {
      question: "Was sind geheime Daten?",
      answer: "Geheime Daten sind hochsensible Daten, wie z. B. Bankdaten oder Passwörter."
    },
    {
      question: "Was sind strukturierte Daten?",
      answer: "Strukturierte Daten haben eine klar definierte Struktur, z. B. in relationalen Datenbanken (SQL)."
    },
    {
      question: "Was sind unstrukturierte Daten?",
      answer: "Unstrukturierte Daten haben keine feste Struktur, wie z. B. Bilder, Videos oder Audiodateien."
    },
    {
      question: "Was sind semistrukturierte Daten?",
      answer: "Semistrukturierte Daten sind teilweise strukturiert, wie z. B. E-Mails, die strukturierte Felder wie Absender und Empfänger und unstrukturierte Inhalte haben."
    },
    {
      question: "Was sind analoge Daten?",
      answer: "Analoge Daten sind kontinuierliche Werte, wie sie zum Beispiel durch einen Uhrzeiger oder einen Tachometer dargestellt werden."
    },
    {
      question: "Was sind digitale Daten?",
      answer: "Digitale Daten sind diskrete Werte, die oft in Form von Binärcode vorliegen."
    },
    {
      question: "Was ist eine IDE?",
      answer: "Eine IDE (Integrierte Entwicklungsumgebung) ist eine Sammlung von Tools, die das Entwickeln von Software erleichtern, z. B. Compiler, Debugger und Code-Editor."
    },
    {
      question: "Was ist eine API?",
      answer: "Eine API (Application Programming Interface) ist eine Schnittstelle, die es verschiedenen Systemen ermöglicht, miteinander zu kommunizieren."
    },
    {
      question: "Was ist das JDK?",
      answer: "Das JDK (Java Development Kit) ist erforderlich, um Java-Programme zu kompilieren. Es enthält alle notwendigen Tools, um Java-Code zu entwickeln."
    },
    {
      question: "Was ist Bytecode?",
      answer: "Bytecode ist ein Zwischencode, der von der JVM (Java Virtual Machine) in Maschinencode umgewandelt wird."
    },
    {
      question: "Was ist die Java Virtual Machine (JVM)?",
      answer: "Die JVM ist dafür zuständig, den Bytecode in Maschinencode umzuwandeln, der vom Betriebssystem ausgeführt werden kann."
    },
    {
      question: "Was ist die JRE?",
      answer: "Das JRE (Java Runtime Environment) ist notwendig, um ein Java-Programm auszuführen. Es enthält die JVM sowie andere Bibliotheken."
    },
    {
      question: "Was ist die zweistufige Übersetzung in Java?",
      answer: "Der Java-Code wird zuerst kompiliert (Java Code -> Bytecode), und der Bytecode wird dann von der JVM in Maschinencode übersetzt, um auf dem Betriebssystem ausgeführt zu werden."
    },
    {
      question: "Was ist Syntax in der Programmierung?",
      answer: "Syntax legt die Regeln und die Schreibweise fest, die eine Programmiersprache für korrekten Code verlangt."
    },
    {
      question: "Was ist implizites Typcasting?",
      answer: "Implizites Typcasting ist die automatische Umwandlung von Datentypen, z. B. von `int` zu `double`, ohne dass der Entwickler dies explizit angeben muss."
    },
    {
      question: "Was ist explizites Typcasting?",
      answer: "Explizites Typcasting erfordert eine manuelle Umwandlung von Datentypen, z. B. von `double` zu `int`, und muss durch den Entwickler angegeben werden."
    },
    {
      question: "Wie sieht der Aufbau einer Variable in Java aus?",
      answer: "Der Aufbau einer Variable in Java besteht aus dem Datentyp und einem Bezeichner, z. B. `int abc;`."
    },
    {
      question: "Was ist ein Array in Java?",
      answer: "Ein Array in Java ist eine Sammlung von Elementen gleichen Datentyps, z. B. `int[] a3 = {2,3,4,5,6};`."
    },
    {
      question: "Wie definiert man ein 2D-Array in Java?",
      answer: "Ein 2D-Array in Java kann wie folgt definiert werden: `int[][] a5 = {{1,2,3}, {4,5,6}, {7,8,9}};`."
    },
    {
      question: "Was ist Interfacing in der Programmierung?",
      answer: "Interfacing bezeichnet die Kommunikation zwischen zwei verschiedenen Programmiersprachen, bei der eine Sprache Funktionen einer anderen verwenden kann."
    },
    {
      question: "Was sind Bindings?",
      answer: "Bindings beziehen sich auf die Bereitstellung einer Schnittstelle zwischen zwei Programmiersprachen, z. B. Python-C-Bindings, die es Python ermöglichen, Funktionen aus einer C-Bibliothek zu nutzen."
    },
    {
      question: "Was ist ein Foreign Function Interface (FFI)?",
      answer: "FFI ist ein Mechanismus, der es einer Programmiersprache ermöglicht, Funktionen aus einer anderen Programmiersprache aufzurufen, wie z. B. Python’s ctypes oder cffi."
    },
    {
      question: "Was ist ein Wrapper in der Programmierung?",
      answer: "Ein Wrapper ist eine Schnittstelle, die die Interaktion mit einer anderen Programmiersprache vereinfacht, indem sie eine höhere Abstraktionsebene bietet, z. B. ein C-Wrapper für Python."
    },
    {
      question: "Was bedeutet Cross-language Integration?",
      answer: "Cross-language Integration beschreibt die Fähigkeit von Programmen, in mehreren Programmiersprachen zu arbeiten, also verschiedene Sprachen miteinander zu verbinden."
    },
    {
      question: "Was bedeutet Interop (Interoperabilität)?",
      answer: "Interop ist die Fähigkeit verschiedener Systeme oder Programmiersprachen, miteinander zu arbeiten, z. B. bei der Kommunikation von Technologien aus verschiedenen Bereichen."
    },
    {
      question: "Was bedeutet Extending in der Programmierung?",
      answer: "Extending bezeichnet den Prozess, bei dem eine Programmiersprache wie Python durch Funktionen oder Module einer anderen Sprache wie C erweitert wird."
    },
    {
      question: "Was bedeutet Embedding in der Programmierung?",
      answer: "Embedding ist der Prozess, bei dem du eine Sprache wie Python in ein anderes Programm (z. B. ein C-Programm) einbettest, sodass Python-Code innerhalb des C-Codes ausgeführt wird."
    },
    {
      "question": "Ethernet: Wozu dient die Preamble im Ethernet Frame?",
      "answer": "Zur Synchronisation vor dem Frame."
    },
    {
      "question": "Ethernet: Wie lang ist die Destination MAC-Adresse im Ethernet Frame?",
      "answer": "6 Bytes."
    },
    {
      "question": "Ethernet: Was zeigt die Source MAC im Ethernet Frame?",
      "answer": "Die Quelladresse."
    },
    {
      "question": "Ethernet: Welcher Wert steht im Type-Feld für IPv4?",
      "answer": "0x0800."
    },
    {
      "question": "Ethernet: Wie groß ist der Datenbereich im Ethernet Frame?",
      "answer": "46 bis 1500 Bytes."
    },
    {
      "question": "Ethernet: Was macht das FCS-Feld im Ethernet Frame?",
      "answer": "Es prüft auf Fehler."
    },
    {
      "question": "ARP: Wo befindet sich der ARP Header im Ethernet Frame?",
      "answer": "Im Data-Feld des Ethernet Frames."
    },
    {
      "question": "ARP: Wie lang ist der ARP Header?",
      "answer": "28 Bytes."
    },
    {
      "question": "ARP: Was ist ein ARP Request?",
      "answer": "Ein Broadcast zur Abfrage einer MAC-Adresse."
    },
    {
      "question": "ARP: Welche MAC-Adresse wird bei einem ARP Request verwendet?",
      "answer": "FF:FF:FF:FF:FF:FF (Broadcast)."
    },
    {
      "question": "ARP: Welche Informationen enthält ein ARP Request?",
      "answer": "Eigene MAC/IP, Ziel-IP, leere Ziel-MAC."
    },
    {
      "question": "ARP: Was passiert beim ARP Reply?",
      "answer": "Die Ziel-MAC-Adresse wird zurückgesendet."
    },
    {
      "question": "ARP: Was passiert nach dem Empfang eines ARP Reply?",
      "answer": "Die MAC-Adresse wird in die ARP-Tabelle eingetragen."
    },
    {
      "question": "TCP: Wie viele Schritte hat der TCP 3-Way Handshake?",
      "answer": "Drei."
    },
    {
      "question": "TCP: Was sendet der Client zuerst im Handshake?",
      "answer": "SYN."
    },
    {
      "question": "TCP: Was sendet der Server im zweiten Schritt?",
      "answer": "SYN-ACK."
    },
    {
      "question": "TCP: Was sendet der Client zuletzt im Handshake?",
      "answer": "ACK."
    },
    {
      "question": "TCP: Wozu dienen die Sequenznummern in TCP?",
      "answer": "Zur Sicherstellung der Reihenfolge und Erkennung von Fehlern."
    },
    {
      "question": "TCP: Was passiert, wenn ein TCP-Paket fehlt?",
      "answer": "Es wird erneut angefordert."
    },
    {
      "question": "Ports: Was ist ein Socket?",
      "answer": "Eine Kombination aus IP-Adresse und Port."
    },
    {
      "question": "Ports: Wie viele Bits hat eine Portnummer?",
      "answer": "16 Bit."
    },
    {
      "question": "Ports: Was sind Well Known Ports?",
      "answer": "Ports von 0 bis 1023 für bekannte Dienste."
    },
    {
      "question": "Ports: Was sind Registered Ports?",
      "answer": "Ports von 1024 bis 49151 für registrierte Anwendungen."
    },
    {
      "question": "Ports: Was sind Dynamic oder Private Ports?",
      "answer": "Ports von 49152 bis 65535 für Clients."
    },
    {
      "question": "Ports: Wer verwaltet die Portnummern im Internet?",
      "answer": "Die IANA (Internet Assigned Numbers Authority)."
    },
    {
      "question": "Ethernet: Wie wird die Mindestlänge eines Ethernet-Frames erreicht?",
      "answer": "Durch Auffüllen mit zusätzlichen Daten (Padding)."
    },
    {
      "question": "Ethernet: Wie lang ist ein Ethernet-Frame mindestens?",
      "answer": "64 Bytes."
    },
    {
      "question": "Ethernet: Wie lang ist der Ethernet-Header?",
      "answer": "14 Bytes."
    },
    {
      "question": "Ethernet: Wie lang ist der Ethernet-Trailer (FCS)?",
      "answer": "4 Bytes."
    },
    {
      "question": "Ethernet: Wie lang ist typischerweise der ARP-Datenbereich im Ethernet Frame?",
      "answer": "28 Bytes."
    },
    {
      "question": "ARP: Wie läuft die Kommunikation mit ARP Schritt für Schritt ab?",
      "answer": "1. Sender kennt nur die IP des Zielgeräts. 2. Sender sendet ARP Request (Broadcast) mit eigener MAC/IP und Ziel-IP. 3. Zielgerät erkennt eigene IP, speichert MAC/IP des Senders und antwortet mit ARP Reply. 4. Sender empfängt ARP Reply und speichert MAC/IP des Ziels. Danach ist Kommunikation möglich."
    },
    {
      "question": "DHCP: Wie läuft der DHCP-Prozess Schritt für Schritt ab?",
      "answer": "1. DHCP Discover (Client sucht Server, Broadcast). 2. DHCP Offer (Server bietet IP an). 3. DHCP Request (Client fragt angebotene IP an). 4. DHCP Acknowledgment (Server bestätigt Zuweisung). Danach kann der Client die IP-Adresse verwenden."
    }
  ],
  "WISO": [
    {
      question: "Was ist der Leitzins?",
      answer: "Der Leitzins ist der Zinssatz, den die EZB festlegt, und beeinflusst den Geldfluss in der Wirtschaft."
    },
    {
      question: "Wie beeinflusst ein niedriger Leitzins die Wirtschaft?",
      answer: "Ein niedriger Leitzins macht Kredite günstiger und erhöht die Geldmenge im Umlauf."
    },
    {
      question: "Wie beeinflusst ein hoher Leitzins die Wirtschaft?",
      answer: "Ein hoher Leitzins macht Kredite teurer und reduziert die Geldmenge im Umlauf."
    },
    {
      question: "Was ist Inflation?",
      answer: "Inflation bezeichnet den Rückgang der Kaufkraft des Geldes, wodurch man für den gleichen Betrag weniger kaufen kann."
    },
    {
      question: "Was sind die Ursachen der Inflation?",
      answer: "Ursachen der Inflation können Nachfrageinflation, Angebotsinflation und Geldmengeninflation sein."
    },
    {
      question: "Was ist Deflation?",
      answer: "Deflation ist der Anstieg der Kaufkraft des Geldes, wodurch man für den gleichen Betrag mehr kaufen kann."
    },
    {
      question: "Was sind die Ursachen der Deflation?",
      answer: "Deflation entsteht oft durch zu geringe Nachfrage und gleichzeitig hohes Angebot."
    },
    {
      question: "Was sind die Folgen der Inflation?",
      answer: "Inflation führt zur Entwertung von Ersparnissen und belastet vor allem Rentner und Arbeitslose."
    },
    {
      question: "Wie kann Inflation bekämpft werden?",
      answer: "Inflation kann durch eine Erhöhung des Leitzinses bekämpft werden."
    },
    {
      question: "Was ist ein Warenkorb und wie wird er zur Berechnung der Inflationsrate verwendet?",
      answer: "Der Warenkorb ist eine Zusammenstellung von typischen Waren und Dienstleistungen, deren Preisentwicklung mit dem Vorjahr verglichen wird, um die Inflationsrate zu berechnen."
    },
    {
      question: "Was versteht man unter Kaufkraft?",
      answer: "Kaufkraft beschreibt, wie viel man für eine bestimmte Menge Geld kaufen kann."
    },
    {
      question: "Was ist der Binnenwert des Geldes?",
      answer: "Der Binnenwert des Geldes beschreibt, wie viel man mit einer Einheit Geld für Güter kaufen kann."
    },
    {
      question: "Was ist die Verkehrsgleichung?",
      answer: "Die Verkehrsgleichung beschreibt das Verhältnis zwischen Geldmenge und dem Gesamtwert der gehandelten Güter."
    },
    {
      question: "Was sind die Phasen des Konjunkturzyklus?",
      answer: "Die Phasen des Konjunkturzyklus umfassen die Expansion, den Boom, die Rezession und die Depression."
    },
    {
      question: "Was sind Frühindikatoren zur Konjunkturbeobachtung?",
      answer: "Frühindikatoren sind z.B. Lagerbestände und der Aktienindex."
    },
    {
      question: "Was sind Spätindikatoren zur Konjunkturbeobachtung?",
      answer: "Spätindikatoren sind z.B. Steuereinnahmen und die Inflationsrate."
    },
    {
      question: "Was sind Präsenzindikatoren zur Konjunkturbeobachtung?",
      answer: "Präsenzindikatoren sind z.B. aktuelle Lagerbestände, Preise und offene Stellen."
    },
    {
      question: "Welche Maßnahmen können zur Stabilisierung der Konjunktur ergriffen werden?",
      answer: "Zur Stabilisierung können der Leitzins angepasst oder staatliche Schulden aufgenommen werden, um die Wirtschaft zu stützen."
    },
    {
      question: "Was sind nachfragestimulierte Maßnahmen zur Konjunkturpolitik?",
      answer: "Nachfragestimulierte Maßnahmen umfassen Subventionen, Steuersenkungen und Abschreibungsmöglichkeiten."
    },
    {
      question: "Was sind angebotsseitige Maßnahmen zur Konjunkturpolitik?",
      answer: "Angebotsseitige Maßnahmen verbessern die Produktionskapazitäten durch gute Infrastruktur und günstige Rahmenbedingungen für Unternehmen."
    },
    {
      question: "Wie berechnet man denn Gleichgewichtspreis? (Marktgleichgewicht)",
      answer: "Vom Gleichgewichspunkt => Menge * Preis"
    },
    {
      "question": "Was versteht man unter Binnenkonjunktur?",
      "answer": "Binnenkonjunktur bezeichnet die Wirtschaftsentwicklung im Inland, die auf heimischer Nachfrage basiert."
    },
    {
      "question": "Was bedeutet Preisstabilität im magischen Viereck?",
      "answer": "Preisstabilität bedeutet die Sicherung der Kaufkraft."
    },
    {
      "question": "Was ist hohe Vollbeschäftigung im magischen Viereck?",
      "answer": "Hohe Vollbeschäftigung bedeutet weniger als 2% Arbeitslose."
    },
    {
      "question": "Was bedeutet stetiges Wirtschaftswachstum im magischen Viereck?",
      "answer": "Stetiges Wirtschaftswachstum bedeutet, dass die Wirtschaft kontinuierlich wächst."
    },
    {
      "question": "Was bedeutet Gleichgewicht in der In- und Außenwirtschaft im magischen Viereck?",
      "answer": "Gleichgewicht in der In- und Außenwirtschaft bedeutet, dass Exporte und Importe im Gleichgewicht sind."
    },
    {
      "question": "Was ist die Handelsbilanz?",
      "answer": "Die Handelsbilanz ist die Verrechnung von Export und Import von Waren."
    },
    {
      "question": "Was ist die Dienstleistungsbilanz?",
      "answer": "Die Dienstleistungsbilanz ist die Verrechnung von Export und Import von Dienstleistungen."
    },
    {
      "question": "Was umfasst die Bilanz der Erwerbs- und Vermögenseinkommen?",
      "answer": "Sie umfasst alle Kapitalanlagen, die gezahlt werden, wie etwa Zinsen und Dividenden."
    },
    {
      "question": "Was ist die laufende Übertragung in der Leistungsbilanz?",
      "answer": "Die laufende Übertragung umfasst unentgeltliche Leistungen wie Renten, Spenden und Entwicklungshilfe."
    },
    {
      "question": "Was ist die Außenbilanz?",
      "answer": "Die Außenbilanz ist die Summe der Handelsbilanz und der Dienstleistungsbilanz."
    },
    {
      "question": "Was versteht man unter Vermögensübertragung?",
      "answer": "Vermögensübertragung beschreibt einmalige Übertragungen zwischen Ländern, wie etwa Schuldenerlass oder Unterstützung von Ländern."
    },
    {
      "question": "Was sind Direktinvestitionen?",
      "answer": "Direktinvestitionen sind Beteiligungen in Form von Aktien oder anderen Beteiligungen an Unternehmen im Ausland."
    },
    {
      "question": "Was versteht man unter Wertpapieren?",
      "answer": "Wertpapiere umfassen den Erwerb und Verkauf von klassischen Wertpapieren wie Aktien oder Anleihen."
    },
    {
      "question": "Was bedeutet Kreditverkehr in der Kapitalbilanz?",
      "answer": "Kreditverkehr umfasst sowohl langfristige als auch kurzfristige Kredite zwischen Ländern."
    },
    {
      "question": "Was sind nicht wiederaufladbare Transaktionen?",
      "answer": "Nicht wiederaufladbare Transaktionen umfassen schwer nachverfolgbare Vorgänge wie Koffergeschäfte."
    },
    {
      "question": "Was versteht man unter Netto-Auslands-Aktiva?",
      "answer": "Die Netto-Auslands-Aktiva resultieren aus den Salden der Kapitalbilanz und den nicht wiederaufladbaren Transaktionen."
    },
    {
      "question": "Was ist ein Devisenzufluss?",
      "answer": "Devisenzufluss bezeichnet den Eintritt von ausländischer Währung in ein Land, z.B. durch Exporte, Tourismus oder ausländische Investitionen."
    },
    {
      "question": "Was ist ein Devisenabfluss?",
      "answer": "Devisenabfluss bezeichnet das Verlassen der heimischen Währung aus einem Land, z.B. durch Importe oder Auslandsinvestitionen."
    },
    {
      "question": "Was bedeutet ein Leistungsbilanzüberschuss?",
      "answer": "Ein Leistungsbilanzüberschuss entsteht, wenn ein Land mehr Einnahmen aus Exporten und Dienstleistungen erzielt, als es für Importe ausgibt."
    },
    {
      "question": "Was sind die Folgen eines Leistungsbilanzüberschusses für die Binnenkonjunktur?",
      "answer": "Ein Exportboom führt zu steigenden Investitionen, sinkender Arbeitslosigkeit und einer steigenden Nachfrage."
    },
    {
      "question": "Was bedeutet ein Leistungsbilanzdefizit?",
      "answer": "Ein Leistungsbilanzdefizit entsteht, wenn ein Land mehr für Importe und Dienstleistungen ausgibt als es durch Exporte und Einnahmen erzielt."
    },
    {
      "question": "Was sind die Folgen eines Leistungsbilanzdefizits für die Binnenkonjunktur?",
      "answer": "Ein hohes Importvolumen führt zu sinkenden Investitionen, steigender Arbeitslosigkeit und einer sinkenden Nachfrage."
    },
    {
      "question": "Was passiert mit dem Wechselkurs im Außenhandel bei einem Leistungsbilanzdefizit?",
      "answer": "Durch den Umtausch von Euro in Dollar steigt der Dollar-Kurs, was die Exporterlöse durch einen sinkenden Euro-Wechselkurs ausgleicht."
    },
    {
      "question": "Was sind die Bedürfnisse in der Reihenfolge?",
      "answer": "1. Grundbedürfnisse: Essen, Trinken, Schlafen. 2. Sicherheitsbedürfnisse: Haus, Wohnung, berufliche Sicherheit. 3. Sozialbedürfnisse: Freundschaft, Liebe, Zusammengehörigkeit. 4. Ich-Bedürfnisse: Anerkennung. 5. Selbstverwirklichung."
    },
    {
      "question": "Was beschreibt die Formel für Rentabilität?",
      "answer": "Rentabilität = Gewinn / Kapital."
    },
    {
      "question": "Was ist Eigenkapitalrentabilität?",
      "answer": "Eigenkapitalrentabilität zeigt die Rentabilität eines Unternehmens im Verhältnis zum eingesetzten Eigenkapital."
    },
    {
      "question": "Wie wird Produktivität berechnet?",
      "answer": "Produktivität = Output / Input."
    },
    {
      "question": "Wie wird Wirtschaftlichkeit berechnet?",
      "answer": "Wirtschaftlichkeit = Erlöse / Kosten oder Ertrag / Aufwand."
    },
    {
      "question": "Wie berechnet man die Arbeitslosenquote?",
      "answer": "Arbeitslosenquote = Arbeitslose / Erwerbspersonen * 100."
    },
    {
      "question": "Was bedeutet Vollbeschäftigung?",
      "answer": "Vollbeschäftigung bedeutet eine Arbeitslosenquote von 2% bis 4%."
    },
    {
      "question": "Was ist Unterbeschäftigung?",
      "answer": "Unterbeschäftigung liegt vor, wenn die Arbeitslosenquote mehr als 2% bis 4% beträgt."
    },
    {
      "question": "Was ist Überbeschäftigung?",
      "answer": "Überbeschäftigung bedeutet, dass mehr offene Stellen als Arbeitslose existieren."
    },
    {
      "question": "Was ist friktionelle Arbeitslosigkeit?",
      "answer": "Friktionelle Arbeitslosigkeit tritt auf, wenn jemand aufgrund eines Jobwechsels vorübergehend arbeitslos ist."
    },
    {
      "question": "Was ist saisonale Arbeitslosigkeit?",
      "answer": "Saisonale Arbeitslosigkeit entsteht, wenn aufgrund jahreszeitbedingter Faktoren wie in der Landwirtschaft oder im Tourismus keine Arbeit vorhanden ist."
    },
    {
      "question": "Was ist konjunkturelle Arbeitslosigkeit?",
      "answer": "Konjunkturelle Arbeitslosigkeit tritt auf, wenn die Wirtschaft schwächelt und weniger Arbeitsplätze zur Verfügung stehen."
    },
    {
      "question": "Was ist strukturelle Arbeitslosigkeit?",
      "answer": "Strukturelle Arbeitslosigkeit entsteht durch Umstrukturierungen, wie etwa durch den Wandel in bestimmten Branchen oder Technologien."
    },
    {
      "question": "Was ist langzeit Arbeitslosigkeit?",
      "answer": "Langzeit Arbeitslosigkeit liegt vor, wenn jemand mehr als ein Jahr lang arbeitslos ist."
    },
    {
      "question": "Was ist die Theorie der freien Marktwirtschaft?",
      "answer": "Die Theorie der freien Marktwirtschaft besagt, dass freier Handel zum Wohlstand aller führt."
    },
    {
      "question": "Wie funktioniert der Staat in einer freien Marktwirtschaft?",
      "answer": "In einer freien Marktwirtschaft greift der Staat nicht ein und agiert als 'Nachtwächter'."
    },
    {
      "question": "Wie erfolgt die Preisbildung in einer freien Marktwirtschaft?",
      "answer": "In einer freien Marktwirtschaft erfolgt die Preisbildung durch Angebot und Nachfrage."
    },
    {
      "question": "Welche Probleme gibt es in der freien Marktwirtschaft?",
      "answer": "In der freien Marktwirtschaft können Monopole entstehen, und sozial schwache Menschen können ausgenutzt werden."
    },
    {
      "question": "Was ist die Theorie der Zentralverwaltungswirtschaft?",
      "answer": "Die Theorie der Zentralverwaltungswirtschaft besagt, dass es kein Privat Eigentum an Produktionsmitteln gibt."
    },
    {
      "question": "Wie funktioniert der Staat in einer Zentralverwaltungswirtschaft?",
      "answer": "In einer Zentralverwaltungswirtschaft ist der Staat Eigentümer der Produktionsmittel und verwaltet die Wirtschaft durch eine Planungsbehörde."
    },
    {
      "question": "Wie erfolgt die Preisbildung in einer Zentralverwaltungswirtschaft?",
      "answer": "In einer Zentralverwaltungswirtschaft bestimmt der Staat die Preise."
    },
    {
      "question": "Welche Probleme gibt es in einer Zentralverwaltungswirtschaft?",
      "answer": "In einer Zentralverwaltungswirtschaft gibt es keine freie Entfaltung für den Einzelnen."
    },
    {
      "question": "Was ist die Theorie der sozialen Marktwirtschaft?",
      "answer": "Die Theorie der sozialen Marktwirtschaft vereint die besten Aspekte der freien Marktwirtschaft und der zentralen Planung."
    },
    {
      "question": "Wie funktioniert der Staat in einer sozialen Marktwirtschaft?",
      "answer": "In einer sozialen Marktwirtschaft hat der Staat viele Freiheiten und nur wenig Einfluss, und es wird eine 'Sozialstadt' angestrebt."
    },
    {
      "question": "Was ist das Solidaritätsprinzip?",
      "answer": "Das Solidaritätsprinzip besagt, dass die Gemeinschaft dem Einzelnen hilft."
    },
    {
      "question": "Was ist das Subsidiaritätsprinzip?",
      "answer": "Das Subsidiaritätsprinzip besagt, dass der Staat einspringt, wenn der Einzelne sich nicht mehr selbst helfen kann."
    },
    {
      "question": "Was sind marktkonforme Maßnahmen?",
      "answer": "Marktkonforme Maßnahmen beinhalten staatliche Unterstützungen wie Wohngeld oder Kindergeld."
    },
    {
      "question": "Was sind marktkonträre Maßnahmen?",
      "answer": "Marktkonträre Maßnahmen beinhalten staatliche Eingriffe in den Markt, wie Mindestlöhne, Gaspreisbremse oder Mietpreisbremse."
    },
  ],
  "WISO2": [
    {
      "question": "Außenwirtschaft: Was ist ein Grund für Außenwirtschaft?",
      "answer": "Rohstoffbeschaffung: Zugang zu wichtigen natürlichen Ressourcen."
    },
    {
      "question": "Außenwirtschaft: Was bedeutet Abhängigkeit in der Außenwirtschaft?",
      "answer": "Wirtschaftliche Verflechtungen, die zu gegenseitiger Abhängigkeit führen."
    },
    {
      "question": "Außenwirtschaft: Was versteht man unter Arbeitsteilung?",
      "answer": "Spezialisierung der Produktionsfaktoren für höhere Effizienz."
    },
    {
      "question": "Außenwirtschaft: Wie kann Außenwirtschaft zur Kriegsvermeidung beitragen?",
      "answer": "Wirtschaftliche Kooperationen können Konflikte eindämmen."
    },
    {
      "question": "Außenwirtschaft: Was wird durch Außenwirtschaft in Bezug auf neue Produkte ermöglicht?",
      "answer": "Innovation und Technologietransfer ermöglichen eine breitere Produktpalette."
    },
    {
      "question": "Protektionismus: Was ist Protektionismus?",
      "answer": "Schutz des heimischen Marktes vor ausländischen Produkten."
    },
    {
      "question": "Protektionismus: Welche kurzfristigen Effekte hat Protektionismus?",
      "answer": "Kann kurzfristig positive Effekte haben."
    },
    {
      "question": "Protektionismus: Welche langfristigen Nachteile hat Protektionismus?",
      "answer": "Reduziert die Produktvielfalt und den Zugang zu neuen Technologien aus dem Ausland."
    },
    {
      "question": "Autarkie: Was versteht man unter Autarkie?",
      "answer": "Wirtschaftliche Unabhängigkeit von anderen Ländern."
    },
    {
      "question": "Freihandelsabkommen: Was ist ein Freihandelsabkommen?",
      "answer": "Verträge, die den Handel erleichtern – etwa durch den Wegfall von Zöllen."
    },
    {
      "question": "Europäische Zentralbank (EZB): Was ist das Hauptziel der EZB?",
      "answer": "Sicherstellung der Kaufkraft des Euro und Schaffung von Preisstabilität."
    },
    {
      "question": "Europäische Zentralbank (EZB): Wie agiert die EZB in Bezug auf nationale Regierungen?",
      "answer": "Die EZB agiert unabhängig von den nationalen Regierungen."
    },
    {
      "question": "Europäische Zentralbank (EZB): Welche Kernfunktion hat die EZB im Bereich Banknotendruck?",
      "answer": "Kontrolle über die Ausgabe von Banknoten."
    },
    {
      "question": "Europäische Zentralbank (EZB): Welche Rolle spielt die EZB in der Geldpolitik?",
      "answer": "Einfluss auf die wirtschaftliche Entwicklung in Europa."
    },
    {
      "question": "Europäische Zentralbank (EZB): Was versteht man unter Devisengeschäften der EZB?",
      "answer": "Steuerung des Zahlungsverkehrs."
    },
    {
      "question": "Europäische Zentralbank (EZB): Was regelt die EZB bezüglich des Leitzinses?",
      "answer": "Festlegung und Anpassung des Leitzinses."
    },
    {
      "question": "Europäische Zentralbank (EZB): Welche Aufgabe hat die EZB in der Bankenaufsicht?",
      "answer": "Überwachung der Banken in der Europäischen Union."
    },
    {
      "question": "Instrumente der EZB: Was sind Offenmarktgeschäfte?",
      "answer": "Kauf und Verkauf von Wertpapieren an Banken – planbar, gezielt und fair, jedoch nur solange der Vorrat reicht."
    },
    {
      "question": "Instrumente der EZB: Was sind ständige Fazilitäten?",
      "answer": "Sofort verfügbare Kreditfazilitäten für Banken, die kurzfristig überschüssige Gelder anlegen oder schnell Geld benötigen."
    },
    {
      "question": "Instrumente der EZB: Welche Konsequenzen hat die Nutzung ständiger Fazilitäten für Banken?",
      "answer": "Meist geringere Zinseinnahmen bzw. höhere Zinszahlungen."
    },
    {
      "question": "Instrumente der EZB: Was bedeutet Mindestreservepolitik?",
      "answer": "Banken sind verpflichtet, einen bestimmten Prozentsatz (aktuell ca. 1%) ihrer Einlagen als Reserve zu halten."
    },
    {
      "question": "Instrumente der EZB: Was ist der Zweck der Mindestreservepolitik?",
      "answer": "Gewährleistung der Stabilität und Sicherheit."
    },
    {
      "question": "Europäische Zentralbank (EZB): Was umfasst der Begriff ‚ESZB‘?",
      "answer": "Der Begriff ‚ESZB‘ umfasst sowohl die EZB als auch die nationalen Zentralbanken."
    },
    {
      "question": "EZB-Rat: Wo befindet sich der Sitz des EZB-Rats?",
      "answer": "Frankfurt am Main"
    },
    {
      "question": "EZB-Rat: Wie oft finden Sitzungen des EZB-Rats statt?",
      "answer": "Alle zwei Wochen"
    },
    {
      "question": "EZB-Rat: Welche Aufgaben hat der EZB-Rat bei seinen Sitzungen?",
      "answer": "Festlegung von Leitlinien und Beschlüssen, Bestimmung des Leitzinses, Bankaufsicht"
    },
    {
      "question": "EZB-Rat: Was ist das Direktorium des EZB-Rats?",
      "answer": "Es besteht aus 6 Mitgliedern, darunter der Präsident und der Vizepräsident, und ist für die Umsetzung der Geldpolitik und Leitung des Geschäftsbetriebs der EZB verantwortlich."
    },
    {
      "question": "EZB-Rat: Was ist die Aufgabe des Erweiterten Rats der EZB?",
      "answer": "Er hat eine beratende Funktion, erstellt den Jahresbericht und bereitet den Eintritt neuer Euro-Mitgliedsländer vor."
    },
    {
      "question": "Leitzins: Was ist der Leitzins?",
      "answer": "Der Zinssatz, den die EZB in Europa (bzw. die FED in den USA) festlegt."
    },
    {
      "question": "Leitzins: Was passiert bei einem niedrigen Leitzins?",
      "answer": "Kredite werden günstiger, aber Anlagemöglichkeiten weniger attraktiv, was zu einer erhöhten Geldmenge im Umlauf führt."
    },
    {
      "question": "Leitzins: Was passiert bei einem hohen Leitzins?",
      "answer": "Kredite werden teurer, Anlageformen attraktiver, wodurch weniger Geld im Umlauf ist."
    },
    {
      "question": "Leitzins: Was ist das Ziel des Leitzinses?",
      "answer": "Stabilisierung konjunktureller Schwankungen und Erreichen eines wirtschaftlichen Gleichgewichts."
    },
    {
      "question": "Inflation und Deflation: Was ist eine offene Inflation?",
      "answer": "Eine Inflation, die erkennbar ist und sofort Einfluss auf die Kaufkraft hat, wobei der Staat keinen Einfluss nimmt."
    },
    {
      "question": "Inflation und Deflation: Was ist eine verdeckte Inflation?",
      "answer": "Eine nicht erkennbare Inflation, bei der der Staat durch Maßnahmen wie Substitution oder Festlegung von Höchstpreisen den Preis stabil hält."
    },
    {
      "question": "Inflation: Was ist Inflation?",
      "answer": "Ein Rückgang der Kaufkraft des Geldes – man bekommt weniger für den gleichen Geldbetrag."
    },
    {
      "question": "Inflation: Was sind die Ursachen von Inflation?",
      "answer": "Nachfrageinflation (Nachfrage ist größer als Angebot), Angebotsinflation (z. B. teurere Rohstoffkosten), Geldmengeninflation (zu hohe Geldmenge im Umlauf)."
    },
    {
      "question": "Inflation: Was sind die Folgen von Inflation?",
      "answer": "Entwertung der Ersparnisse, Personen, die sich nicht an steigende Preise anpassen können (z. B. Rentner, Arbeitslose), leiden darunter."
    },
    {
      "question": "Inflation: Welche Maßnahme wird gegen Inflation ergriffen?",
      "answer": "Erhöhung des Leitzinses."
    },
    {
      "question": "Inflation: Wie kann eine moderat angestrebte Inflation von etwa 2% das Wirtschaftswachstum fördern?",
      "answer": "Eine moderate Inflation kann das Wirtschaftswachstum fördern."
    },
    {
      "question": "Deflation: Was ist Deflation?",
      "answer": "Ein Anstieg der Kaufkraft des Geldes – man bekommt mehr für den gleichen Geldbetrag."
    },
    {
      "question": "Deflation: Was sind die Ursachen von Deflation?",
      "answer": "Zu geringe Nachfrage bei gleichzeitig hohem Angebot, Sparverhalten und die Erwartung weiter sinkender Preise."
    },
    {
      "question": "Deflation: Was sind die Folgen von Deflation?",
      "answer": "Unternehmen produzieren weniger, Löhne sinken und es kommt zu Entlassungen."
    },
    {
      "question": "Deflation: Welche Maßnahmen werden gegen Deflation ergriffen?",
      "answer": "Senkung des Leitzinses, Erhöhung staatlicher Ausgaben und Ankurbelung des Geldkreislaufs."
    },
    {
      "question": "Warenkorb und Inflationsrate: Was ist ein Warenkorb?",
      "answer": "Eine Zusammenstellung typischer Waren und Dienstleistungen, deren Preisentwicklung zum Vorjahr verglichen wird, um die Inflationsrate zu berechnen."
    },
    {
      "question": "Kaufkraft: Was ist Kaufkraft?",
      "answer": "Kaufkraft gibt an, wie viel du für dein Geld bekommst."
    },
    {
      "question": "Binnenwert des Geldes: Was beschreibt der Binnenwert des Geldes?",
      "answer": "Der Binnenwert des Geldes beschreibt, wie viel Wert es im Verhältnis zu Gütern hat."
    },
    {
      "question": "Verkehrsgleichung: Was ist die Verkehrsgleichung?",
      "answer": "Geldvolumen = Gesamtwert der Güter; G * U = P * H."
    },
    {
      "question": "Verkehrsgleichung: Was bedeutet G * U = P * H?",
      "answer": "G steht für die Geldmenge, U für die Umlaufgeschwindigkeit, P für die Preise und H für das Handelsvolumen."
    },
    {
      "question": "Kaufkraft: Was passiert mit der Kaufkraft, wenn der Preis sinkt?",
      "answer": "Wenn der Preis sinkt, steigt die Kaufkraft."
    },
    {
      "question": "Kaufkraft: Was passiert mit der Kaufkraft, wenn der Preis steigt?",
      "answer": "Wenn der Preis steigt, sinkt die Kaufkraft."
    },
    {
      "question": "Kaufkraft: Wie berechnet sich die Kaufkraft?",
      "answer": "Kaufkraft = H / (G * U)."
    },
    {
      "question": "Konjunktur: Was beeinflusst die Konjunktur?",
      "answer": "Unternehmen, Staat und private Haushalte."
    },
    {
      "question": "Konjunkturzyklus: Was ist die Phase der Expansion?",
      "answer": "In der Expansion sinkt die Arbeitslosigkeit und die Zinsen steigen."
    },
    {
      "question": "Konjunkturzyklus: Was passiert in der Boom-Phase?",
      "answer": "In der Boom-Phase gibt es eine sehr niedrige Arbeitslosigkeit."
    },
    {
      "question": "Konjunkturzyklus: Was passiert in der Rezessions-Phase?",
      "answer": "In der Rezession steigt die Arbeitslosigkeit."
    },
    {
      "question": "Konjunkturzyklus: Was passiert in der Depression?",
      "answer": "In der Depression herrscht sehr hohe Arbeitslosigkeit."
    },
    {
      "question": "Indikatoren zur Konjunkturbeobachtung: Was sind Frühindikatoren?",
      "answer": "Frühindikatoren sind zum Beispiel Lagerbestände und Aktienindex."
    },
    {
      "question": "Indikatoren zur Konjunkturbeobachtung: Was sind Spätindikatoren?",
      "answer": "Spätindikatoren sind zum Beispiel Steuereinnahmen und Inflationsrate."
    },
    {
      "question": "Indikatoren zur Konjunkturbeobachtung: Was sind Präsenzindikatoren?",
      "answer": "Präsenzindikatoren sind zum Beispiel aktuelle Lagerbestände, Preise und offene Stellen."
    },
    {
      "question": "Maßnahmen zur Stabilisierung der Konjunktur: Wie kann die EZB die Konjunktur stabilisieren?",
      "answer": "Durch Leitzinsanpassungen – Senken oder Erhöhen des Leitzinses, um wirtschaftliche Schwankungen zu glätten."
    },
    {
      "question": "Maßnahmen zur Stabilisierung der Konjunktur: Wie kann der Staat in Rezessionen und Depressionen die Wirtschaft stützen?",
      "answer": "Der Staat kann gezielt Schulden aufnehmen, um die Wirtschaft zu stützen."
    },
    {
      "question": "Maßnahmen zur Stabilisierung der Konjunktur: Was sollte bei Expansions- oder Boomphasen beachtet werden?",
      "answer": "Bei Expansions- oder Boomphasen ist es wichtig, eine übermäßige Verschuldung zu vermeiden."
    },
    {
      "question": "Maßnahmen zur Stabilisierung der Konjunktur: Was versteht man unter nachfrageseitiger Politik?",
      "answer": "Die Politik versucht, das Kaufen zu verstärken, zum Beispiel durch Subventionen, Steuersenkungen oder Abschreibungsmöglichkeiten."
    },
    {
      "question": "Maßnahmen zur Stabilisierung der Konjunktur: Was versteht man unter angebotsseitiger Politik?",
      "answer": "Die Politik hilft der Wirtschaft durch eine gute Infrastruktur und günstige Rahmenbedingungen."
    },
    {
      "question": "Binnenkonjunktur: Was ist Binnenkonjunktur?",
      "answer": "Binnenkonjunktur bezeichnet die Wirtschaftsentwicklung im Inland, die auf heimischer Nachfrage basiert."
    },
    {
      "question": "Magisches Viereck: Was bedeutet Preisstabilität im Magischen Viereck?",
      "answer": "Sicherung der Kaufkraft."
    },
    {
      "question": "Magisches Viereck: Was bedeutet hohe Vollbeschäftigung im Magischen Viereck?",
      "answer": "Weniger als 2% Arbeitslose."
    },
    {
      "question": "Magisches Viereck: Was bedeutet stetiges Wirtschaftswachstum im Magischen Viereck?",
      "answer": "Die Wirtschaft wächst stetig weiter."
    },
    {
      "question": "Magisches Viereck: Was bedeutet Gleichgewicht in der In- und Außenwirtschaft?",
      "answer": "Export und Import sind im Gleichgewicht."
    },
    {
      "question": "Zahlungsbilanz: Welche Institutionen sind für die Zahlungsbilanz zuständig?",
      "answer": "Die DZB für Deutschland und die EZB für die EU."
    },
    {
      "question": "Leistungsbilanz: Was umfasst die Handelsbilanz?",
      "answer": "Die Warenverrechnung von Export und Import."
    },
    {
      "question": "Leistungsbilanz: Was umfasst die Dienstleistungsbilanz?",
      "answer": "Die Verrechnung von Dienstleistungsexport und -import."
    },
    {
      "question": "Leistungsbilanz: Was umfasst die Erwerbs- und Vermögenseinkommensbilanz?",
      "answer": "Alle Kapitalanlagen, die gezahlt werden – Export minus Import."
    },
    {
      "question": "Leistungsbilanz: Was umfasst die laufende Übertragungsbilanz?",
      "answer": "Unentgeltliche Leistungen wie Rente, Spenden und Entwicklungshilfe – Export minus Import."
    },
    {
      "question": "Zahlungsbilanz: Wie berechnet sich der Außenbetrag?",
      "answer": "Der Außenbetrag ist gleich der Handelsbilanz plus der Dienstleistungsbilanz."
    },
    {
      "question": "Vermögensübertragung: Was bedeutet Vermögensübertragung?",
      "answer": "Einmalige Übertragung zwischen Ländern, etwa durch Schuldenerlass oder Unterstützung."
    },
    {
      "question": "Vermögensübertragung: Wie kann eine Vermögensübertragung zwischen Ländern erfolgen?",
      "answer": "Durch Schuldenerlass, Unterstützung von Ländern oder Einwanderung und Erbschaften."
    },
    {
      "question": "Kapitalbilanz: Was umfasst Direktinvestitionen?",
      "answer": "Beteiligungen in Form von Aktien."
    },
    {
      "question": "Kapitalbilanz: Was umfasst den Bereich Wertpapiere?",
      "answer": "Erwerb und Verkauf von klassischen Wertpapieren."
    },
    {
      "question": "Kapitalbilanz: Was umfasst den Bereich Kreditverkehr?",
      "answer": "Langfristige und kurzfristige Kredite."
    },
    {
      "question": "Kapitalbilanz: Was sind sonstige Transaktionen?",
      "answer": "Sonstige Finanztransaktionen, die nicht in andere Kategorien passen."
    },
    {
      "question": "Saldo nicht wiederaufladbare Transaktionen: Was umfasst dieser Saldo?",
      "answer": "Alle ungeklärten Dinge, die man nicht nachverfolgen kann, wie Koffergeschäfte."
    },
    {
      "question": "Devisen: Was ist ein Devisenzufluss?",
      "answer": "Wenn ausländische Währung in ein Land fließt, etwa durch Exporte oder ausländische Investitionen."
    },
    {
      "question": "Devisen: Was ist ein Devisenabfluss?",
      "answer": "Wenn heimische Währung das Land verlässt, zum Beispiel durch Importe oder Auslandskredite."
    },
    {
      "question": "Leistungsbilanzüberschuss: Was bedeutet ein Leistungsbilanzüberschuss?",
      "answer": "Ein Land erhält mehr durch Exporte und Dienstleistungen, als es ausgibt. Mehr Geld fließt ins Land als hinaus."
    },
    {
      "question": "Binnenkonjunktur: Was passiert bei einem Exportboom?",
      "answer": "Investitionen steigen, Arbeitslosigkeit sinkt und die Nachfrage steigt."
    },
    {
      "question": "Binnenkonjunktur: Was passiert bei einem Exportboom in Bezug auf die Inlandsgeldmenge?",
      "answer": "Die Inlandsgeldmenge steigt, was zu importierter Inflation führt."
    },
    {
      "question": "Außenhandel: Was passiert mit dem Eurokurs bei einem USD-Umtausch?",
      "answer": "Der Eurokurs steigt."
    },
    {
      "question": "Außenhandel: Was passiert, wenn der Eurokurs steigt?",
      "answer": "Die Exporterlöse sinken, und die Leistungsbilanz wird ausgeglichen."
    },
    {
      "question": "Was ist ein Leistungsbilanzdefizit?",
      "answer": "Es entsteht, wenn ein Land mehr für Importe und Dienstleistungen ausgibt als es durch Exporte und Einnahmen erhält, was zu einem Nettoabfluss von Geld führt."
    },
    {
      "question": "Was passiert bei einem hohen Import für die Binnenkonjunktur?",
      "answer": "Investitionen sinken, Arbeitslosigkeit steigt, Nachfrage sinkt, was zu einer Rezession führt."
    },
    {
      "question": "Was passiert bei einem hohen Import für die Inlandsgeldmenge?",
      "answer": "Die Inlandsgeldmenge sinkt, wodurch auch die Inflation sinkt."
    },
    {
      "question": "Was passiert bei einem €-Umtausch in $ für den Außenhandel?",
      "answer": "Der $-Kurs steigt, was Exporterlöse steigen lässt und die Leistungsbilanz ausgleicht."
    },
    {
      "question": "Was ist die Reihenfolge der Bedürfnisse laut der Bedürfnishierarchie?",
      "answer": "1. Grundbedürfnisse, 2. Sicherheitsbedürfnisse, 3. Sozialbedürfnisse, 4. Ich-Bedürfnisse, 5. Selbstverwirklichung."
    },
    {
      "question": "Was ist der Zusammenhang zwischen Bedürfnis und Nachfrage?",
      "answer": "Bedürfnis führt zu Geld, was dann zu einem Bedarf führt, der den Kaufwillen und schließlich die Nachfrage auslöst."
    },
    {
      "question": "Wie berechnet man die Rentabilität?",
      "answer": "Rentabilität = Gewinn / Kapital."
    },
    {
      "question": "Wie berechnet man die Eigenkapitalrentabilität?",
      "answer": "Eigenkapitalrentabilität = Jahresgewinn * 100 / Eigenkapital."
    },
    {
      "question": "Wie berechnet man die Produktivität?",
      "answer": "Produktivität = Output / Input."
    },
    {
      "question": "Wie berechnet man die Wirtschaftlichkeit?",
      "answer": "Wirtschaftlichkeit = Erlöse / Kosten oder Ertrag / Aufwand."
    },
    {
      "question": "Was ist eine Beschäftigungsquote?",
      "answer": "Die Beschäftigungsquote zeigt den Grad der Kapazitätsauslastung einer Volkswirtschaft."
    },
    {
      "question": "Wie berechnet man die Arbeitslosenquote?",
      "answer": "Arbeitslosenquote = Arbeitslose / Erwerbspersonen * 100."
    },
    {
      "question": "Was bedeutet Vollbeschäftigung in Bezug auf die Arbeitslosenquote?",
      "answer": "Vollbeschäftigung liegt vor, wenn die Arbeitslosenquote zwischen 2% und 4% liegt."
    },
    {
      "question": "Was bedeutet Unterbeschäftigung?",
      "answer": "Unterbeschäftigung bedeutet eine Arbeitslosenquote von mehr als 2%-4%."
    },
    {
      "question": "Was ist die Bedeutung von Überbeschäftigung?",
      "answer": "Überbeschäftigung tritt auf, wenn es mehr offene Stellen gibt als Arbeitslose."
    },
    {
      "question": "Welche Arten von Arbeitslosigkeit gibt es?",
      "answer": "Friktionelle, saisonelle, konjunkturelle, strukturelle und Langzeitarbeitslosigkeit."
    },
    {
      "question": "Was ist friktionelle Arbeitslosigkeit?",
      "answer": "Arbeitslosigkeit aufgrund eines Jobwechsels, die von kurzer Dauer ist."
    },
    {
      "question": "Was ist saisonelle Arbeitslosigkeit?",
      "answer": "Arbeitslosigkeit aufgrund saisonaler Schwankungen, z.B. in der Landwirtschaft oder im Tourismus."
    },
    {
      "question": "Was ist konjunkturelle Arbeitslosigkeit?",
      "answer": "Arbeitslosigkeit aufgrund einer schwachen Wirtschaftslage."
    },
    {
      "question": "Was ist strukturelle Arbeitslosigkeit?",
      "answer": "Arbeitslosigkeit aufgrund von Umstrukturierungen oder Veränderungen in der Wirtschaft."
    },
    {
      "question": "Was ist Langzeitarbeitslosigkeit?",
      "answer": "Arbeitslosigkeit, die länger als ein Jahr dauert."
    },
    {
      "question": "Was ist die Theorie der freien Marktwirtschaft?",
      "answer": "Freier Handel führt zum Wohlstand aller, ohne staatliche Eingriffe."
    },
    {
      "question": "Was sind die Probleme der freien Marktwirtschaft?",
      "answer": "Monopole und Ausnutzung sozial schwacher Menschen."
    },
    {
      "question": "Was ist die Theorie der Zentralverwaltungswirtschaft?",
      "answer": "Es gibt kein Privat Eigentum an Produktionsmitteln, und der Staat verwaltet alles."
    },
    {
      "question": "Was sind die Probleme der Zentralverwaltungswirtschaft?",
      "answer": "Es gibt keine freie Entfaltung für den Einzelnen und der Staat bestimmt die Preise."
    },
    {
      "question": "Was ist die Theorie der sozialen Marktwirtschaft?",
      "answer": "Es kombiniert das Beste aus beiden Welten: Der Staat bietet viele Freiheiten und wenig Einfluss, aber sorgt für soziale Absicherung."
    },
    {
      "question": "Was ist das Solidaritätsprinzip in der sozialen Marktwirtschaft?",
      "answer": "Die Gemeinschaft hilft dem Einzelnen."
    },
    {
      "question": "Was ist das Subsidiaritätsprinzip?",
      "answer": "Der Staat springt ein, wenn der Einzelne sich nicht selbst helfen kann."
    },
    {
      "question": "Was bedeutet marktkonforme Politik?",
      "answer": "Der Staat gibt Menschen Geld, z.B. Wohngeld oder Kindergeld."
    },
    {
      "question": "Was bedeutet marktkonträre Politik?",
      "answer": "Der Staat greift in den Markt ein, z.B. durch Mindestlöhne oder Mietpreisbremse."
    }
  ],
  "WISO3": [
    {
      "question": "Für wen gilt die Steuerklasse I?",
      "answer": "Für ledige, geschiedene oder dauerhaft getrennt lebende Personen ohne Kinder."
    },
    {
      "question": "Wer fällt in die Steuerklasse II?",
      "answer": "Alleinerziehende mit Kind, die Anspruch auf den Entlastungsbetrag haben."
    },
    {
      "question": "Welche Personen wählen die Steuerklasse III?",
      "answer": "Verheiratete Hauptverdiener, deren Partner in Steuerklasse V ist."
    },
    {
      "question": "Wann kommt Steuerklasse IV zur Anwendung?",
      "answer": "Wenn beide Ehepartner etwa gleich viel verdienen."
    },
    {
      "question": "Für wen ist Steuerklasse V gedacht?",
      "answer": "Für verheiratete Personen mit geringerem Einkommen, wenn der Partner in Steuerklasse III ist."
    },
    {
      "question": "Welche Personen werden in Steuerklasse VI eingeordnet?",
      "answer": "Personen mit einem Zweitjob oder einer weiteren Beschäftigung."
    },
    {
      "question": "Was regelt der Arbeitsvertrag?",
      "answer": "Ein Arbeitsvertrag regelt die Rechte und Pflichten von Arbeitgeber (AG) und Arbeitnehmer (AN). Der AN verpflichtet sich zur Arbeitsleistung, während der AG dafür ein Arbeitsentgelt zahlt. Die Höhe des Entgelts wird verhandelt."
    },
    {
      "question": "Welche Pflichten hat der Arbeitnehmer im Arbeitsvertrag?",
      "answer": "Der Arbeitnehmer verpflichtet sich zur Arbeitsleistung."
    },
    {
      "question": "Welche Pflicht hat der Arbeitgeber im Arbeitsvertrag?",
      "answer": "Der Arbeitgeber verpflichtet sich zur Zahlung eines Arbeitsentgelts."
    },
    {
      "question": "Kann ein Arbeitsvertrag mündlich abgeschlossen werden?",
      "answer": "Ja, ein Arbeitsvertrag kann mündlich abgeschlossen werden, es gibt keine gesetzlich vorgeschriebene Form."
    },
    {
      "question": "Was muss der Arbeitgeber nach dem Nachweisgesetz tun?",
      "answer": "Der Arbeitgeber muss innerhalb eines Monats nach Arbeitsbeginn die wesentlichen Vertragsbedingungen schriftlich festhalten und dem Arbeitnehmer aushändigen."
    },
    {
      "question": "Muss der Arbeitsvertrag unterschrieben werden?",
      "answer": "Ja, der Arbeitsvertrag muss von beiden Parteien unterschrieben werden."
    },
    {
      "question": "Was sind die Hauptpflichten des Arbeitgebers?",
      "answer": "Die Hauptpflicht des Arbeitgebers ist die Zahlung der Vergütung und die Ausgabe einer Lohnabrechnung."
    },
    {
      "question": "Welche Nebenpflichten hat der Arbeitgeber?",
      "answer": "Die Nebenpflichten des Arbeitgebers umfassen die Fürsorgepflicht, den Schutz der Persönlichkeitsrechte, die Gewährung von Urlaub, die Ausstellung von Arbeitszeugnissen und die Gleichbehandlung der Arbeitnehmer."
    },
    {
      "question": "Hat der Arbeitgeber das Weisungsrecht?",
      "answer": "Ja, der Arbeitgeber hat das Weisungsrecht gemäß § 106 Gewerbeordnung (GewO)."
    },
    {
      "question": "Was ist die Hauptpflicht des Arbeitnehmers?",
      "answer": "Die Hauptpflicht des Arbeitnehmers ist die persönliche Arbeitsleistung, die bei Krankheit, Mutterschutz und Urlaub entfällt."
    },
    {
      "question": "Welche Nebenpflichten hat der Arbeitnehmer?",
      "answer": "Zu den Nebenpflichten des Arbeitnehmers gehören die Treuepflicht, die Verschwiegenheitspflicht und das Wettbewerbsverbot."
    },
    {
      "question": "Welche Rechte hat der Arbeitnehmer bezüglich seiner Akteneinsicht?",
      "answer": "Der Arbeitnehmer hat das Recht auf Akteneinsicht."
    },
    {
      "question": "Nennen Sie mir verschiedene Vertragsarten im Arbeitsrecht.",
      "answer": "Unbefristeter Arbeitsvertrag, Befristeter Arbeitsvertrag (Zeit- oder Zweckbefristet), Projektbezogener Arbeitsvertrag, Teilzeitarbeitsvertrag, Aushilfsvertrag, Minijob-Arbeitsvertrag, Arbeitsvertrag für freie Mitarbeiter, Praktikantenvertrag"
    },
    {
      "question": "Nennen Sie mir wichtige Inhalte in einem Arbeitsvertrag.",
      "answer": "Beginn des Arbeitsverhältnisses, Art der Tätigkeit, Dauer des Arbeitsverhältnisses, Probezeit, Art und Ort der Tätigkeit, Arbeitszeit, Arbeitsvergütung, Urlaub, Lohnfortzahlung im Krankheitsfall, Fristen zur Arbeitsunfähigkeitsbescheinigung, Anzeige von Nebentätigkeiten, Widerrufsvorbehalt bei Zusatzzahlungen, Zusatzvereinbarungen, Geheimhaltungsverpflichtung, Wettbewerbsverbot"
    },
    {
      "question": "Hat der Arbeitnehmer Anspruch auf Urlaub?",
      "answer": "Ja, der Arbeitnehmer hat Anspruch auf Urlaub."
    },
    {
      "question": "Wie ist die Pausenregelung bei Arbeitszeiten?",
      "answer": "Bei 6-9 Stunden Arbeit hat der Arbeitnehmer Anspruch auf mindestens 30 Minuten Pause. Bei mehr als 9 Stunden Arbeit sind mindestens 45 Minuten Pause vorgeschrieben."
    },
    {
      "question": "Hat der Arbeitnehmer ein Recht auf Raucherpausen?",
      "answer": "Nein, der Arbeitnehmer hat kein Recht auf Raucherpausen."
    },
    {
      "question": "Welche fünf Sozialversicherungen gibt es in Deutschland?",
      "answer": "In Deutschland gibt es fünf Sozialversicherungen: Krankenversicherung, Pflegeversicherung, Arbeitslosenversicherung, Rentenversicherung und Unfallversicherung."
    },
    {
      "question": "Wer ist Träger der Krankenversicherung?",
      "answer": "Träger der Krankenversicherung sind die gesetzlichen Krankenkassen."
    },
    {
      "question": "Wie wird die Krankenversicherung finanziert?",
      "answer": "Die Krankenversicherung wird halb-halb durch den Arbeitgeber und den Arbeitnehmer finanziert."
    },
    {
      "question": "Wer ist Träger der Pflegeversicherung?",
      "answer": "Die Träger der Pflegeversicherung sind die Pflegekassen, die Teil der gesetzlichen Krankenkassen sind."
    },
    {
      "question": "Wie wird die Pflegeversicherung finanziert?",
      "answer": "Die Pflegeversicherung wird halb-halb durch den Arbeitgeber und den Arbeitnehmer finanziert."
    },
    {
      "question": "Wer ist Träger der Arbeitslosenversicherung?",
      "answer": "Träger der Arbeitslosenversicherung ist die Bundesagentur für Arbeit."
    },
    {
      "question": "Wie wird die Arbeitslosenversicherung finanziert?",
      "answer": "Die Arbeitslosenversicherung wird halb-halb durch den Arbeitgeber und den Arbeitnehmer finanziert."
    },
    {
      "question": "Wer ist Träger der Rentenversicherung?",
      "answer": "Träger der Rentenversicherung ist die Deutsche Rentenversicherung."
    },
    {
      "question": "Wie wird die Rentenversicherung finanziert?",
      "answer": "Die Rentenversicherung wird halb-halb durch den Arbeitgeber und den Arbeitnehmer finanziert."
    },
    {
      "question": "Wer ist Träger der Unfallversicherung?",
      "answer": "Träger der Unfallversicherung ist die gesetzliche Unfallversicherung, meist in Form der Berufsgenossenschaften."
    },
    {
      "question": "Wie wird die Unfallversicherung finanziert?",
      "answer": "Die Unfallversicherung wird vollständig durch den Arbeitgeber finanziert."
    },
    {
      "question": "Was ist die Rechtsgrundlage für eine Betriebsvereinbarung?",
      "answer": "Die Rechtsgrundlage für eine Betriebsvereinbarung ist § 77 Betriebsverfassungsgesetz (BetrVG)."
    },
    {
      "question": "Was ist eine Betriebsvereinbarung?",
      "answer": "Eine Betriebsvereinbarung ist eine schriftliche Vereinbarung zwischen dem Betriebsrat und dem Arbeitgeber. Sie muss schriftlich abgeschlossen und für alle sichtbar im Betrieb ausgelegt sein."
    },
    {
      "question": "Was gilt für alle Beschäftigten, wenn eine Betriebsvereinbarung abgeschlossen wird?",
      "answer": "Die Betriebsvereinbarung ist unmittelbar, zwingend und verbindlich und gilt automatisch für alle Beschäftigten im Betrieb."
    },
    {
      "question": "Welche Inhalte kann eine Betriebsvereinbarung regeln?",
      "answer": "Eine Betriebsvereinbarung kann Regelungen zur betrieblichen Ordnung und zum Verhalten im Betrieb enthalten, wie z. B. Raucherregelungen, Pausenzeiten, Arbeitszeiten, Überstunden und weitere soziale Angelegenheiten."
    },
    {
      "question": "Was besagt der Tarifvorrang in Bezug auf Betriebsvereinbarungen?",
      "answer": "Der Tarifvorrang besagt, dass Themen, die in einem Tarifvertrag geregelt sind, nicht zusätzlich oder abweichend in einer Betriebsvereinbarung geregelt werden dürfen. Eine Betriebsvereinbarung darf einen Tarifvertrag nicht negativ beeinflussen."
    },
    {
      "question": "Was muss der Arbeitgeber dem Betriebsrat im Hinblick auf Arbeitsplätze und neue Technologien tun?",
      "answer": "Der Arbeitgeber muss den Betriebsrat rechtzeitig informieren und anhören."
    },
    {
      "question": "Bei welchen Entscheidungen darf der Betriebsrat mitwirken?",
      "answer": "Der Betriebsrat darf bei Einstellungen, Versetzungen und Kündigungen mitwirken."
    },
    {
      "question": "Was ist das Mitbestimmungsrecht des Betriebsrats?",
      "answer": "Der Betriebsrat hat ein echtes Mitspracherecht (Veto-Recht) bei Arbeitszeiten, Überstunden, Urlaubsplanung und sozialen Angelegenheiten."
    },
    {
      "question": "Bei welchen Themen hat der Betriebsrat ein Mitwirkungsrecht?",
      "answer": "Der Betriebsrat darf bei Entscheidungen zu Einstellungen, Versetzungen und Kündigungen mitwirken."
    },
    {
      "question": "Welche Rechte hat der Betriebsrat bei der Festlegung von Arbeitszeiten?",
      "answer": "Der Betriebsrat hat ein Mitbestimmungsrecht bei der Festlegung von Arbeitszeiten."
    },
    {
      "question": "Welche sozialen Angelegenheiten kann der Betriebsrat mitbestimmen?",
      "answer": "Der Betriebsrat hat ein Mitbestimmungsrecht bei sozialen Angelegenheiten, z. B. in Bezug auf Urlaub und Überstunden."
    },
    {
      "question": "Wie viele wahlberechtigte Arbeitnehmer benötigt man zur Gründung eines Betriebsrats?",
      "answer": "Mindestens 5 wahlberechtigte Arbeitnehmer."
    },
    {
      "question": "Wie viele der wahlberechtigten Arbeitnehmer müssen wählbar sein?",
      "answer": "Mindestens 3 müssen wählbar sein, das heißt volljährig und mindestens 6 Monate im Betrieb beschäftigt."
    },
    {
      "question": "Wie viele Betriebsratsmitglieder gibt es bei 5 bis 20 Arbeitnehmern im Betrieb?",
      "answer": "1 Betriebsratsmitglied."
    },
    {
      "question": "Wie viele Mitglieder hat der Betriebsrat bei 21 bis 50 Arbeitnehmern?",
      "answer": "3 Mitglieder."
    },
    {
      "question": "Ab wie vielen Arbeitnehmern muss mindestens ein Betriebsratsmitglied vollständig freigestellt werden?",
      "answer": "Ab 200 Arbeitnehmern."
    },
    {
      "question": "Wie häufig finden Betriebsratswahlen statt?",
      "answer": "Alle 4 Jahre."
    },
    {
      "question": "Dürfen Betriebsratswahlen behindert werden?",
      "answer": "Nein, die Wahl darf nicht behindert werden."
    },
    {
      "question": "Wie oft finden Betriebsversammlungen statt?",
      "answer": "Mindestens einmal im Vierteljahr (alle 3 Monate)."
    },
    {
      "question": "Wie wird die Zeit für Betriebsversammlungen behandelt?",
      "answer": "Betriebsversammlungen sind bezahlte Arbeitszeit."
    },
    {
      "question": "Darf der Betriebsrat zum Streik aufrufen?",
      "answer": "Nein, das ist Aufgabe der Gewerkschaften."
    },
    {
      "question": "Was passiert als erstes, wenn ein Tarifvertrag ausläuft?",
      "answer": "Der Tarifvertrag läuft aus, und es beginnt die Verhandlung über einen neuen Tarifvertrag."
    },
    {
      "question": "Wer setzt sich zu den Tarifverhandlungen an einen Tisch?",
      "answer": "Arbeitgeber und Gewerkschaften."
    },
    {
      "question": "Was kann während der Verhandlungen als Druckmittel eingesetzt werden?",
      "answer": "Warnstreiks können stattfinden."
    },
    {
      "question": "Was passiert, wenn keine Einigung in den Tarifverhandlungen erzielt wird?",
      "answer": "Ein Schlichter kann eingeschaltet werden, um zu helfen."
    },
    {
      "question": "Was passiert, wenn auch die Schlichtung scheitert?",
      "answer": "Es kommt zur Urabstimmung, bei der mindestens 75 % der Mitglieder für den Streik stimmen müssen."
    },
    {
      "question": "Wann endet der Streik?",
      "answer": "Der Streik endet, wenn mindestens 25 % der Mitglieder dem neuen Tarifvertrag zustimmen."
    },
    {
      "question": "Was dürfen Arbeitgeber und Arbeitnehmer laut Grundgesetz bilden?",
      "answer": "Sie dürfen Gewerkschaften bzw. Arbeitgeberverbände gründen."
    },
    {
      "question": "Was bedeutet Tarifautonomie?",
      "answer": "Nur Gewerkschaften und Arbeitgeber dürfen über Tarife verhandeln – der Staat mischt sich nicht ein."
    },
    {
      "question": "Was ist die Tarifbindung?",
      "answer": "Ein Tarifvertrag gilt, solange er gültig ist oder nicht gekündigt wurde."
    },
    {
      "question": "Was bedeutet Friedenspflicht?",
      "answer": "Während der Laufzeit eines Tarifvertrags darf nicht gestreikt werden."
    },
    {
      "question": "Was regelt der Manteltarifvertrag?",
      "answer": "Arbeitsbedingungen wie Arbeitszeit, Urlaub, Kündigungsfristen – aber nicht den Lohn."
    },
    {
      "question": "Wie lange gilt ein Manteltarifvertrag in der Regel?",
      "answer": "Etwa 3 bis 5 Jahre."
    },
    {
      "question": "Was regelt der Lohn- und Gehaltstarifvertrag?",
      "answer": "Er regelt die Entgelte, also Löhne und Gehälter."
    },
    {
      "question": "Wie lange gilt ein Lohn- und Gehaltstarifvertrag meistens?",
      "answer": "Meistens 1 bis 2 Jahre."
    },
    {
      "question": "Für wen gelten Tarifverträge grundsätzlich?",
      "answer": "Nur für Mitglieder der jeweiligen Gewerkschaft oder des Arbeitgeberverbands."
    },
    {
      "question": "Wann gilt ein Tarifvertrag auch für Nichtmitglieder?",
      "answer": "Wenn er für allgemeinverbindlich erklärt wurde oder der Arbeitgeber ihn freiwillig für alle anwendet."
    },
    {
      "question": "Was ist ein Vorteil von Tarifverträgen für Arbeitgeber?",
      "answer": "Es muss nicht mit jedem Arbeitnehmer einzeln verhandelt werden."
    },
    {
      "question": "Was ist ein Vorteil von Tarifverträgen für Arbeitnehmer?",
      "answer": "Einheitliche Regeln und im Streikfall Streikgeld von der Gewerkschaft."
    },
    {
      "question": "Wann endet ein Zeitvertrag?",
      "answer": "Ein Zeitvertrag endet automatisch mit dem vereinbarten Datum."
    },
    {
      "question": "Was ist ein Aufhebungsvertrag?",
      "answer": "Ein Aufhebungsvertrag ist eine einvernehmliche Beendigung des Arbeitsverhältnisses durch zwei Willenserklärungen."
    },
    {
      "question": "Was braucht man für eine wirksame Kündigung?",
      "answer": "Sie muss schriftlich erfolgen und nachweisbar zugegangen sein."
    },
    {
      "question": "Wie lange ist die Kündigungsfrist für Arbeitnehmer bei ordentlicher Kündigung?",
      "answer": "4 Wochen zum 15. oder zum Monatsende."
    },
    {
      "question": "Wie lange ist die Kündigungsfrist für Arbeitgeber laut § 622 BGB?",
      "answer": "Ebenfalls 4 Wochen, kann sich aber mit Dienstjahren verlängern."
    },
    {
      "question": "Was ist eine außerordentliche Kündigung?",
      "answer": "Eine fristlose Kündigung mit wichtigem Grund, z.B. bei Diebstahl oder ausbleibender Lohnzahlung."
    },
    {
      "question": "Wer hat besonderen Kündigungsschutz?",
      "answer": "Schwangere, Schwerbehinderte, Azubis, Pflegezeitnehmende, JAV, Betriebsräte, Datenschutzbeauftragte."
    },
    {
      "question": "Wie lange gilt der Kündigungsschutz nach Ende einer Amtszeit z.B. als Betriebsrat?",
      "answer": "Ein Jahr nach Ende der Amtszeit."
    },
    {
      "question": "Wann gilt das Kündigungsschutzgesetz (KSchG)?",
      "answer": "Wenn der Betrieb mehr als 10 Mitarbeiter hat und das Arbeitsverhältnis länger als 6 Monate besteht."
    },
    {
      "question": "Wie werden Teilzeitkräfte bei der Mitarbeiterzahl berechnet? (KSchG)",
      "answer": "30 Std./Woche = 0,75; 20 Std./Woche = 0,5; Vollzeit = 1,0"
    },
    {
      "question": "Was sind die drei Kündigungsgründe laut KSchG?",
      "answer": "Personenbedingt, verhaltensbedingt, betriebsbedingt."
    },
    {
      "question": "Was bedeutet soziale Rechtfertigung bei Kündigungen?",
      "answer": "Die Kündigung muss auf anerkannten Gründen beruhen, z.B. Krankheit oder Stellenabbau."
    },
    {
      "question": "Was muss vor einer verhaltensbedingten Kündigung passieren?",
      "answer": "In der Regel muss vorher eine Abmahnung erfolgen."
    },
    {
      "question": "Was prüft der Arbeitgeber vor einer Kündigung nach KSchG?",
      "answer": "Ob ein milderes Mittel wie z.B. Versetzung möglich ist."
    },
    {
      "question": "Ab wann gilt eine Person als schwerbehindert?",
      "answer": "Ab einem Grad der Behinderung von 50 % und einer voraussichtlichen Dauer von mindestens 6 Monaten."
    },
    {
      "question": "Wie viele schwerbehinderte Menschen muss ein Betrieb mit 20 Arbeitsplätzen mindestens beschäftigen?",
      "answer": "Mindestens eine Person, also 5 % der Arbeitsplätze."
    },
    {
      "question": "Was passiert, wenn ein Betrieb keine schwerbehinderten Menschen einstellt?",
      "answer": "Der Betrieb muss eine Ausgleichsabgabe zahlen."
    },
    {
      "question": "Wie viele zusätzliche Urlaubstage haben schwerbehinderte Menschen?",
      "answer": "5 zusätzliche Urlaubstage pro Jahr."
    },
    {
      "question": "Darf man eine schwerbehinderte Person einfach kündigen?",
      "answer": "Nein, es braucht die Zustimmung des Integrationsamts."
    },
    {
      "question": "Wann muss der Antrag auf Zustimmung zur Kündigung gestellt werden?",
      "answer": "Spätestens 2 Wochen vor der geplanten Kündigung."
    },
  ],
  "WISO4": [
    {
      "question": "Wie lange besteht Kündigungsschutz bei Schwangerschaft?",
      "answer": "Während der Schwangerschaft und 4 Monate nach der Geburt."
    },
    {
      "question": "Wie lange ist die Klagefrist bei Kündigung während der Schwangerschaft?",
      "answer": "3 Wochen."
    },
    {
      "question": "Wann darf ein Beschäftigungsverbot ausgesprochen werden?",
      "answer": "Wenn die Gesundheit von Mutter oder Kind gefährdet ist."
    },
    {
      "question": "Wie lange gilt das absolute Beschäftigungsverbot vor der Geburt?",
      "answer": "6 Wochen vor der Geburt."
    },
    {
      "question": "Wie lange gilt das absolute Beschäftigungsverbot nach der Geburt?",
      "answer": "8 Wochen nach der Geburt."
    },
    {
      "question": "Wie lange dauert das Beschäftigungsverbot bei Früh- oder Mehrlingsgeburten?",
      "answer": "12 Wochen nach der Geburt."
    },
    {
      "question": "Darf eine Schwangere nachts arbeiten?",
      "answer": "Nein, nicht zwischen 20 Uhr und 6 Uhr."
    },
    {
      "question": "Darf eine Schwangere an Sonn- und Feiertagen arbeiten?",
      "answer": "Nein, das ist verboten."
    },
    {
      "question": "Wie viel zahlt die Krankenkasse als Mutterschaftsgeld?",
      "answer": "Bis zu 13 Euro pro Tag."
    },
    {
      "question": "Wer zahlt die Differenz zum vollen Gehalt beim Mutterschaftsgeld?",
      "answer": "Der Arbeitgeber, basierend auf dem Durchschnittsverdienst der letzten 3 Monate."
    },
    {
      "question": "Wie viele Urlaubstage hat man bei einer 6-Tage-Woche laut BUrlG?",
      "answer": "24 Werktage."
    },
    {
      "question": "Wie viele Urlaubstage hat man bei einer 5-Tage-Woche laut BUrlG?",
      "answer": "20 Werktage."
    },
    {
      "question": "Wann besteht der volle Urlaubsanspruch?",
      "answer": "Nach 6 Monaten Betriebszugehörigkeit."
    },
    {
      "question": "Wie viel Urlaub steht einem in den ersten 6 Monaten zu?",
      "answer": "1/12 des Jahresurlaubs pro vollem Monat."
    },
    {
      "question": "Bis wann kann Urlaub ins nächste Jahr übertragen werden?",
      "answer": "Bis zum 31. März des Folgejahres – nur bei besonderem Grund."
    },
    {
      "question": "Wie soll Urlaub laut Gesetz genommen werden?",
      "answer": "Möglichst zusammenhängend, mindestens 12 Tage am Stück."
    },
    {
      "question": "Wann beginnt und endet eine Ausbildung laut BBiG?",
      "answer": "Die Ausbildung beginnt laut Vertrag und endet mit der Abschlussprüfung oder dem vertraglichen Enddatum."
    },
    {
      "question": "Wie lange dauert die Probezeit laut BBiG?",
      "answer": "Die Probezeit dauert mindestens 1 Monat und höchstens 4 Monate."
    },
    {
      "question": "Darf in der Probezeit gekündigt werden?",
      "answer": "Ja, in der Probezeit darf jederzeit fristlos gekündigt werden."
    },
    {
      "question": "Wann darf nach der Probezeit gekündigt werden?",
      "answer": "Nur mit wichtigem Grund, z.B. Berufswechsel oder Diebstahl."
    },
    {
      "question": "Wie lange ist die Kündigungsfrist nach der Probezeit?",
      "answer": "Die Kündigungsfrist beträgt 4 Wochen (28 Tage)."
    },
    {
      "question": "Hat ein Azubi Anspruch auf Vergütung?",
      "answer": "Ja, der Azubi hat Anspruch auf eine angemessene Vergütung."
    },
    {
      "question": "Hat der Azubi Anspruch auf Urlaub?",
      "answer": "Ja, der Azubi hat gesetzlichen Anspruch auf Urlaub."
    },
    {
      "question": "Muss der Betrieb Ausbildungsmittel kostenlos bereitstellen?",
      "answer": "Ja, alle Ausbildungsmittel müssen kostenlos sein."
    },
    {
      "question": "Darf der Azubi für die Berufsschule freigestellt werden?",
      "answer": "Ja, der Azubi muss für Berufsschule und Prüfungen freigestellt werden."
    },
    {
      "question": "Was gehört zu den Pflichten eines Azubis?",
      "answer": "Berichtsheft führen, Schweigepflicht, Lernpflicht, Sorgfaltspflicht und Schulbesuch."
    },
    {
      "question": "Für wen gilt das Jugendarbeitsschutzgesetz?",
      "answer": "Für Jugendliche ab 15 bis unter 18 Jahren."
    },
    {
      "question": "Wie lange dürfen Jugendliche täglich arbeiten?",
      "answer": "Maximal 8 Stunden pro Tag, 40 Stunden pro Woche."
    },
    {
      "question": "Wann darf ein Jugendlicher 8,5 Stunden arbeiten?",
      "answer": "Wenn an anderen Tagen kürzer gearbeitet wird."
    },
    {
      "question": "Ist am Prüfungstag Arbeit erlaubt?",
      "answer": "Nein, am Prüfungstag ist der Jugendliche freigestellt."
    },
    {
      "question": "Darf man arbeiten, wenn vor 9 Uhr Schule ist?",
      "answer": "Nein, dann darf im Betrieb nicht gearbeitet werden."
    },
    {
      "question": "Was gilt bei Blockunterricht mit mehr als 25 Stunden?",
      "answer": "Dann ist keine Arbeit im Betrieb erlaubt."
    },
    {
      "question": "Was passiert bei Einzelschultagen mit über 5 Stunden?",
      "answer": "Auch dann darf im Betrieb nicht gearbeitet werden."
    },
    {
      "question": "Welche ärztlichen Untersuchungen sind Pflicht?",
      "answer": "Erstuntersuchung und erste Nachuntersuchung sind Pflicht."
    },
    {
      "question": "Darf ein Jugendlicher Akkordarbeit machen?",
      "answer": "Nein, Akkordarbeit ist verboten."
    },
    {
      "question": "Wie viel Urlaub hat ein Jugendlicher mit 15 Jahren?",
      "answer": "30 Werktage."
    },
    {
      "question": "Wie lang ist die Pause bei 5 Stunden Arbeit?",
      "answer": "Mindestens 30 Minuten."
    },
    {
      "question": "Wie lang ist die Ruhezeit zwischen zwei Arbeitstagen?",
      "answer": "Mindestens 12 Stunden."
    },
    {
      "question": "Wann ist Nachtruhe für Jugendliche?",
      "answer": "Von 20 Uhr bis 6 Uhr."
    },
    {
      "question": "Dürfen Jugendliche an Samstagen arbeiten?",
      "answer": "In der Regel nicht, nur bei Ausnahmen."
    },
    {
      question: "Was bedeutet das SMART-Prinzip?",
      answer: "Das SMART-Prinzip ist eine Methode zur Zieldefinition und steht für Spezifisch, Messbar, Akzeptiert, Realistisch und Terminieren."
    },
    {
      question: "Was gehört zum Unternehmensleitbild?",
      answer: "Das Unternehmensleitbild setzt sich aus Vision (Zukunftsbild des Unternehmens), Mission (Umsetzung der Vision) und Philosophie (Werte und Normen) zusammen."
    },
    {
      question: "Was versteht man unter Corporate Identity?",
      answer: "Corporate Identity bezeichnet das Erscheinungsbild eines Unternehmens, das durch Corporate Culture, Corporate Behavior, Corporate Design und Corporate Communication geprägt wird."
    },
    {
      question: "Was umfasst die Corporate Culture?",
      answer: "Die Corporate Culture umfasst die Philosophie, das Leitbild und die Werte des Unternehmens."
    },
    {
      question: "Was umfasst das Corporate Behavior?",
      answer: "Das Corporate Behavior umfasst das Verhalten und die Beziehungen des Unternehmens zu seinen Kunden und Partnern."
    },
    {
      question: "Was gehört zum Corporate Design?",
      answer: "Das Corporate Design umfasst das Logo, den Stylesheet, die Website und Arbeitskleidung des Unternehmens."
    },
    {
      question: "Was gehört zur Corporate Communication?",
      answer: "Corporate Communication umfasst die interne und externe Kommunikation des Unternehmens über Web, Print, Radio und TV."
    },
    {
      question: "Welche Abteilungen gibt es in einem Unternehmen?",
      answer: "Die Abteilungen in einem Unternehmen sind: Geschäftsführung, Buchhaltung, Finanzen, Controlling, Personalabteilung, Einkauf, Produktion, Absatz."
    },
    {
      question: "Was sind die Produktionsfaktoren?",
      answer: "Die Produktionsfaktoren sind: Menschliche Arbeitskraft, Betriebsmittel, Rohstoffe, Fremdanteile, Hilfsmittel, Betriebsstoffe und Handelswaren."
    },
    {
      question: "Was ist menschliche Arbeitskraft als Produktionsfaktor?",
      answer: "Menschliche Arbeitskraft umfasst Tätigkeiten wie Lagerist, Buchhalter oder andere Berufe."
    },
    {
      question: "Was sind Betriebsmittel als Produktionsfaktor?",
      answer: "Betriebsmittel sind Maschinen, gebaute Lizenzen oder andere Mittel, die zur Produktion verwendet werden."
    },
    {
      question: "Was sind Rohstoffe als Produktionsfaktor?",
      answer: "Rohstoffe sind Materialien wie Metall oder Aluminium, die in der Produktion verwendet werden."
    },
    {
      question: "Was sind Fremdanteile als Produktionsfaktor?",
      answer: "Fremdanteile sind zusammengesetzte Rohstoffe wie Bremsen oder Räder, die für die eigene Produktion benötigt werden."
    },
    {
      question: "Was sind Hilfsmittel als Produktionsfaktor?",
      answer: "Hilfsmittel sind Dinge wie Schrauben oder Kleber, die für die Produktion notwendig sind."
    },
    {
      question: "Was sind Betriebsstoffe als Produktionsfaktor?",
      answer: "Betriebsstoffe sind Dinge wie Benzin, Öl oder Strom, die zur Aufrechterhaltung des Produktionsprozesses dienen."
    },
    {
      question: "Was sind Handelswaren als Produktionsfaktor?",
      answer: "Handelswaren sind Produkte wie Helme oder Ersatzteile, die von der Industrie benötigt werden."
    },
    {
      question: "Was sind die Wirtschaftssektoren?",
      answer: "Die Wirtschaftssektoren sind: Primärsektor (Urproduktion), Sekundärsektor (Industrie), Tertiärsektor (Dienstleistungen) und Quartärsektor (Informationssektor)."
    },
    {
      question: "Was ist der Primärsektor?",
      answer: "Der Primärsektor umfasst die Urproduktion, wie Landwirtschaft, Forstwirtschaft und Fischerei."
    },
    {
      question: "Was ist der Sekundärsektor?",
      answer: "Der Sekundärsektor umfasst die Industrie und Handwerk, in dem Rohstoffe weiterverarbeitet werden."
    },
    {
      question: "Was ist der Tertiärsektor?",
      answer: "Der Tertiärsektor umfasst Dienstleistungen wie Kliniken, Friseure oder Einzelhandel."
    },
    {
      question: "Was ist der Quartärsektor?",
      answer: "Der Quartärsektor umfasst den Informationssektor, der sich auf Informatiker und Informationsdienste konzentriert."
    },
  ],
  "WISO5": [
    {
      "question": "Was ist ein Verkäufermarkt",
      "answer": "Ein Verkäufermarkt ist ein Markt mit mehr Nachfrage als Angebot, was zu höheren Preisen führt."
    },
    {
      "question": "Was ist ein Käufermarkt?",
      "answer": "Ein Käufermarkt ist ein Markt mit mehr Angebot als Nachfrage, was zu niedrigeren Preisen führt."
    },
    {
      "question": "Was sind die Organe einer GmbH?",
      "answer": "Gesellschafter, Geschäftsführung und Aufsichtsrat."
    },
    {
      "question": "Was sind die Organe einer AG?",
      "answer": "Hauptversammlung, Vorstand und Aufsichtsrat."
    },
    {
      "question": "Was ist eine Holding in der Organisation?",
      "answer": "Eine Dachfirma, unter der viele Firmen organisiert sind."
    }
    ,
    {
      "question": "Was ist der Unterschied zwischen Lasten- und Pflichtenheft?",
      "answer": "Das Lastenheft beschreibt vom Auftraggeber, was gemacht werden soll. Das Pflichtenheft beschreibt vom Auftragnehmer, wie es umgesetzt wird."
    },
    {
      question: "Was ist das ökonomische Prinzip?",
      answer: "Das ökonomische Prinzip umfasst das Maximalprinzip (mit gegebenen Mitteln maximaler Ertrag) und das Minimalprinzip (mit gegebenem Ziel minimaler Einsatz)."
    },
    {
      question: "Was ist das Maximalprinzip?",
      answer: "Das Maximalprinzip besagt, dass mit gegebenen Mitteln der maximale Ertrag erzielt werden soll."
    },
    {
      question: "Was ist das Minimalprinzip?",
      answer: "Das Minimalprinzip besagt, dass mit gegebenem Ziel der minimale Einsatz an Mitteln erfolgen soll."
    },
    {
      question: "Was ist berufliche Arbeitsteilung?",
      answer: "Berufliche Arbeitsteilung bedeutet die Spezialisierung von Tätigkeiten, wie bei Berufen wie Fischer oder Metzger."
    },
    {
      question: "Was ist berufliche Spaltung?",
      answer: "Berufliche Spaltung beschreibt die Aufteilung eines Berufes in verschiedene Bereiche, wie zum Beispiel Systemadministrator und Anwendungsentwickler."
    },
    {
      question: "Was ist betriebliche Arbeitsteilung?",
      answer: "Betriebliche Arbeitsteilung bedeutet, dass Aufgaben innerhalb eines Unternehmens aufgeteilt werden, sodass jeder Arbeiter nur einen Teil erledigt."
    },
    {
      question: "Was ist überbetriebliche Arbeitsteilung?",
      answer: "Überbetriebliche Arbeitsteilung bedeutet, dass Aufgaben an andere Firmen abgegeben werden, die auf diese spezialisiert sind."
    },
    {
      question: "Was ist internationale Arbeitsteilung?",
      answer: "Internationale Arbeitsteilung beschreibt den Export und Import von Waren und Dienstleistungen, die ein Land selbst nicht produziert."
    },
    {
      question: "Was ist der Markt?",
      answer: "Ein Markt beschreibt das Zusammenspiel von Angebot und Nachfrage. Ein vollkommener Markt existiert nicht."
    },
    {
      question: "Was ist ein vollkommener Markt?",
      answer: "Ein vollkommener Markt zeichnet sich durch viele Anbieter und Nachfrager, homogene Güter, vollständige Markttransparenz und rationales Verhalten der Marktteilnehmer aus. Ein solcher Markt existiert jedoch nicht."
    },
    {
      question: "Was ist Konsumentenrente?",
      answer: "Die Konsumentenrente ist der finanzielle Vorteil des Käufers, der einen Preis unter dem maximalen Zahlungsbereitschaftspreis zahlt."
    },
    {
      question: "Was ist Produzentenrente?",
      answer: "Die Produzentenrente ist der finanzielle Vorteil des Verkäufers, der einen Preis über dem minimalen Produktionspreis erzielt."
    },
    {
      question: "Wie wird der Marktpreis berechnet?",
      answer: "Der Marktpreis wird durch das Gleichsetzen der Angebots- und Nachfragefunktionen ermittelt, z. B. AF: 10P – 20, NF: 100 – 2P, was zu einem Marktpreis von P = 10 führt."
    },
    {
      question: "Was ist elastische und unelastische Nachfrage?",
      answer: "Elastische Nachfrage bedeutet, dass die Nachfrage stark auf Preisänderungen reagiert, unelastische Nachfrage bedeutet, dass sie wenig auf Preisänderungen reagiert."
    },
    {
      question: "Was sind Marktarten?",
      answer: "Marktarten sind: Faktormärkte (Arbeitsmarkt, Immobilienmarkt, Finanzmarkt) und Gütermärkte (Konsumgüter, Investitionsgüter)."
    },
    {
      question: "Was ist ein Monopol?",
      answer: "Ein Monopol liegt vor, wenn es einen Anbieter und viele Nachfrager gibt, z. B. die Deutsche Bahn im Fernverkehr."
    },
    {
      question: "Was ist ein Oligopol?",
      answer: "Ein Oligopol liegt vor, wenn es wenige Anbieter und viele Nachfrager gibt, z. B. Automobilhersteller wie VW, BMW, Mercedes."
    },
    {
      question: "Was ist ein Oligopson?",
      answer: "Ein Oligopson liegt vor, wenn es wenige Nachfrager und viele Anbieter gibt."
    },
    {
      question: "Was ist ein Polypol?",
      answer: "Ein Polypol liegt vor, wenn es viele Anbieter und viele Nachfrager gibt, z. B. Restaurants in einer Großstadt."
    },
    {
      question: "Was sind zweiseitige Marktformen?",
      answer: "Zweiseitige Marktformen sind z. B. zweiseitiges Monopol (1 Anbieter, 1 Nachfrager) oder zweiseitiges Oligopol (wenige Anbieter, wenige Nachfrager)."
    },
    {
      "question": "Was ist ein Angebotsmonopol?",
      "answer": "Ein Angebotsmonopol liegt vor, wenn es nur einen Anbieter und viele Nachfrager gibt."
    },
    {
      "question": "Was ist ein Nachfragemonopol?",
      "answer": "Ein Nachfragemonopol liegt vor, wenn es viele Anbieter und nur einen Nachfrager gibt."
    },
    {
      "question": "Was ist ein beschränktes Angebotsmonopol?",
      "answer": "Ein beschränktes Angebotsmonopol liegt vor, wenn es nur einen Anbieter, aber nur wenige Nachfrager gibt."
    },
    {
      "question": "Was ist ein beschränktes Nachfragemonopol?",
      "answer": "Ein beschränktes Nachfragemonopol liegt vor, wenn es viele Anbieter, aber nur wenige Nachfrager gibt."
    },
    {
      question: "Was ist der Wirtschaftskreislauf?",
      answer: "Der einfache Wirtschaftskreislauf besteht aus Haushalt und Unternehmen. Der erweiterte Wirtschaftskreislauf umfasst zusätzlich den Staat, Banken und das Ausland."
    },
    {
      question: "Was ist eine Firma?",
      answer: "Eine Firma ist ein Name, unter dem der Kaufmann Geschäfte betreibt, unterschreibt und verklagt werden kann (§ 17 HGB)."
    },
    {
      question: "Was sind die Firmengrundsätze?",
      answer: "Die Firmengrundsätze sind: Firmenöffentlichkeit, Firmenausschließlichkeit, Firmenbeständigkeit und Firmenwahrheit-Klarheit."
    },
    {
      question: "Was sind die verschiedenen Firmenarten?",
      answer: "Die Firmenarten sind: Personenfirma (Bürgerlicher Name + Rechtsformzusatz), Sachfirma (Unternehmensgegenstand + Rechtsformzusatz), Fantasiefirma (Fantasiename + Rechtsformzusatz), Mischfirma (Mischung aus Sachfirma und Personenfirma + Rechtsformzusatz)."
    },
    {
      question: "Was ist der Unterschied zwischen deklaratorischer und konstitutiver Wirkung?",
      answer: "Deklaratorisch bedeutet, dass die Eintragung nur eine formale Sache ist (z. B. Prokura, OHG, KG). Konstitutiv bedeutet, dass die Eintragung rechtserklärend ist (z. B. GmbH, AG)."
    },
    {
      question: "Was ist das Handelsregister?",
      answer: "Das Handelsregister wird elektronisch von Gerichten geführt und ist einsehbar. Es gibt zwei Abteilungen: Abteilung A für Personengesellschaften und Einzelunternehmen und Abteilung B für Kapitalgesellschaften."
    },
    {
      question: "Wer ist ein Kaufmann?",
      answer: "Ein Kaufmann ist jemand, der ein Handelsgewerbe betreibt oder im Handelsregister eingetragen ist. Ein Kaufmann muss dauerhaft, mit Gewinnerzielungsabsicht und selbstständig arbeiten."
    },
    {
      question: "Was ist Prokura?",
      answer: "Prokura ist eine Vollmacht, die für Rechtsgeschäfte erteilt wird. Sie darf nicht für Grundstücksverkäufe erteilt werden, aber für Käufe. Die Prokura muss ins Handelsregister eingetragen werden und kann durch Widerruf oder Beendigung des Dienstverhältnisses enden."
    },
    {
      question: "Was sind Handlungsvollmachten?",
      answer: "Handlungsvollmachten sind: Einzelvollmacht (für ein einzelnes Rechtsgeschäft), Artvollmacht (für wiederkehrende Rechtsgeschäfte) und Allgemeine Handelsvollmacht (für alle gewöhnlichen Rechtsgeschäfte)."
    },
    {
      question: "Was ist eine GmbH?",
      answer: "Eine GmbH (Gesellschaft mit beschränkter Haftung) ist eine juristische Person, die mindestens 1 Gesellschafter hat. Die Haftung ist auf das Gesellschaftsvermögen begrenzt, und das Mindestkapital beträgt 25.000 €."
    },
    {
      question: "Was ist eine AG?",
      answer: "Eine AG (Aktiengesellschaft) ist eine juristische Person mit mindestens 1 Gesellschafter. Das Mindestkapital beträgt 50.000 €, und die Haftung ist auf das Gesellschaftsvermögen begrenzt. Die Dividende wird an die Aktionäre ausgeschüttet."
    },
    {
      question: "Was ist eine OHG?",
      answer: "Eine OHG (Offene Handelsgesellschaft) ist eine Personengesellschaft, die mindestens 2 Gesellschafter hat. Es gibt kein Mindestkapital und eine unbeschränkte Haftung der Gesellschafter. Der Gewinn wird zu 4 % Verzinsung der Kapitaleinlage verteilt."
    },
    {
      question: "Was ist eine KG?",
      answer: "Eine KG (Kommanditgesellschaft) besteht aus mindestens 2 Gesellschaftern: einem Komplementär (Vollhafter) und einem Kommanditisten (Teilhaber). Es gibt kein Mindestkapital, und der Gewinn wird zu 4 % Verzinsung der Kapitaleinlage verteilt."
    },
    {
      question: "Wie ist die Prokura in Bezug auf das Handelsregister geregelt?",
      answer: "Prokura muss im Handelsregister eingetragen werden und ist deklaratorisch. Das Innenverhältnis kann eingeschränkt werden, aber im Außenverhältnis sind die Handlungen des Prokuristen rechtsverbindlich, auch wenn er in seiner Befugnis eingeschränkt ist."
    },
    {
      question: "Wann endet die Prokura?",
      answer: "Die Prokura endet bei Widerruf, Beendigung des Dienstverhältnisses, Tod des Prokuristen oder bei Auflösung des Unternehmens. Sie endet nicht durch den Tod des Unternehmensinhabers."
    },
    {
      question: "Was ist eine Einzelvollmacht?",
      answer: "Eine Einzelvollmacht ist eine Vollmacht für ein einzelnes Rechtsgeschäft, z.B. für den Kauf eines Laptops. Sie wird mit der Unterschrift „i.A.“ erteilt."
    },
    {
      question: "Was ist eine Artvollmacht?",
      answer: "Eine Artvollmacht ist eine Vollmacht, die für wiederkehrende Rechtsgeschäfte erteilt wird, z.B. regelmäßiger Einkauf von Waren. Sie wird ebenfalls mit „i.A.“ unterschrieben."
    },
    {
      question: "Was ist eine Allgemeine Handelsvollmacht?",
      answer: "Eine Allgemeine Handelsvollmacht umfasst alle gewöhnlichen Geschäftsaktivitäten eines Unternehmens, z.B. die Leitung einer Filiale. Sie wird mit „i.V.“ unterschrieben."
    }, {
      question: "Was sind die Gründe für Außenwirtschaft?",
      answer: "Die Gründe für Außenwirtschaft sind vielfältig, unter anderem die Rohstoffbeschaffung, wirtschaftliche Abhängigkeiten, Arbeitsteilung, Kriegsvermeidung und die Möglichkeit, neue Produkte zu schaffen."
    },
    {
      question: "Was versteht man unter Rohstoffbeschaffung in der Außenwirtschaft?",
      answer: "Rohstoffbeschaffung bedeutet, dass Länder durch Außenwirtschaft Zugang zu wichtigen natürlichen Ressourcen erhalten."
    },
    {
      question: "Was sind Abhängigkeiten in der Außenwirtschaft?",
      answer: "Abhängigkeiten beziehen sich auf wirtschaftliche Verflechtungen zwischen Ländern, die zu gegenseitiger Abhängigkeit führen."
    },
    {
      question: "Was bedeutet Arbeitsteilung in der Außenwirtschaft?",
      answer: "Arbeitsteilung bedeutet, dass sich Länder auf bestimmte Produktionsbereiche spezialisieren, um effizienter zu arbeiten."
    },
    {
      question: "Wie trägt Außenwirtschaft zur Kriegsvermeidung bei?",
      answer: "Durch wirtschaftliche Kooperationen können Länder Konflikte vermeiden und Frieden sichern."
    },
    {
      question: "Wie fördert Außenwirtschaft die Einführung neuer Produkte?",
      answer: "Außenwirtschaft ermöglicht den Technologietransfer und die Innovation, wodurch eine breitere Produktpalette entsteht."
    },
    {
      question: "Was ist Protektionismus?",
      answer: "Protektionismus bezeichnet den Schutz des heimischen Marktes vor ausländischen Produkten."
    },
    {
      question: "Welche kurzfristigen Vorteile hat Protektionismus?",
      answer: "Kurzfristig kann Protektionismus positive Effekte auf die heimische Wirtschaft haben, wie etwa den Schutz lokaler Arbeitsplätze."
    },
    {
      question: "Welche langfristigen Nachteile hat Protektionismus?",
      answer: "Langfristig kann Protektionismus zu einer reduzierten Produktvielfalt und weniger Zugang zu neuen Technologien führen."
    },
    {
      question: "Was bedeutet Autarkie?",
      answer: "Autarkie bezeichnet die wirtschaftliche Unabhängigkeit eines Landes von anderen Ländern."
    },
    {
      question: "Was ist ein Freihandelsabkommen?",
      answer: "Ein Freihandelsabkommen ist ein Vertrag, der den Handel zwischen Ländern erleichtert, meist durch den Wegfall von Zöllen."
    },
    {
      question: "Was sind die Hauptaufgaben der Europäischen Zentralbank (EZB)?",
      answer: "Die Hauptaufgaben der EZB sind die Sicherstellung der Kaufkraft des Euro, die Schaffung von Preisstabilität und die Durchführung der Geldpolitik."
    },
    {
      question: "Wie agiert die EZB im Vergleich zu nationalen Regierungen?",
      answer: "Die EZB agiert unabhängig von den nationalen Regierungen."
    },
    {
      question: "Was sind die Kernfunktionen der EZB?",
      answer: "Die Kernfunktionen der EZB umfassen die Kontrolle der Banknotenausgabe, die Geldpolitik, Devisengeschäfte, die Leitzinsregelung und die Bankenaufsicht."
    },
    {
      question: "Was sind Offenmarktgeschäfte der EZB?",
      answer: "Offenmarktgeschäfte umfassen den Kauf und Verkauf von Wertpapieren durch die EZB an Banken."
    },
    {
      question: "Was sind Ständige Fazilitäten der EZB?",
      answer: "Ständige Fazilitäten sind kurzfristige Kreditfazilitäten für Banken, die überschüssige Gelder anlegen oder schnell Geld benötigen."
    },
    {
      question: "Was ist die Mindestreservepolitik der EZB?",
      answer: "Die Mindestreservepolitik verpflichtet Banken, einen bestimmten Prozentsatz ihrer Einlagen als Reserve zu halten, um die Stabilität zu gewährleisten."
    },
    {
      question: "Was umfasst der Begriff ESZB?",
      answer: "Der Begriff ESZB umfasst sowohl die EZB als auch die nationalen Zentralbanken."
    },
    {
      question: "Was ist der EZB-Rat und wie ist er strukturiert?",
      answer: "Der EZB-Rat setzt sich aus dem Direktorium (6 Mitglieder) und dem Erweiterten Rat (27 Mitglieder) zusammen und trifft sich alle zwei Wochen."
    },
    {
      question: "Welche Aufgaben hat der EZB-Rat?",
      answer: "Der EZB-Rat legt Leitlinien fest, bestimmt den Leitzins und überwacht die Bankenaufsicht."
    },
    { "question": "Was sind natürliche Personen?", "answer": "Jeder Mensch ab der Geburt bis zum Tod." },
    { "question": "Wann beginnt die Rechtsfähigkeit juristischer Personen?", "answer": "Mit der Gründung, z.B. Eintragung ins Handelsregister." },
    { "question": "Was ist eine privatrechtliche juristische Person?", "answer": "Unternehmen, Vereine etc. (z.B. GmbH, AG)." },
    { "question": "Was ist eine öffentlich-rechtliche juristische Person?", "answer": "Vom Staat gegründet (z.B. Schule, Stadt)." },
    { "question": "Welche Formen der Willenserklärung gibt es?", "answer": "Ausdrücklich, konkludent, Schweigen." },
    { "question": "Was bedeutet ausdrückliche Willenserklärung?", "answer": "Mündlich oder schriftlich." },
    { "question": "Was bedeutet konkludente Willenserklärung?", "answer": "Durch schlüssiges Verhalten." },
    { "question": "Wann gilt Schweigen als Zustimmung?", "answer": "Bei Kaufleuten." },
    { "question": "Was ist ein einseitiges Rechtsgeschäft?", "answer": "Z.B. Testament." },
    { "question": "Was ist ein zweiseitiges Rechtsgeschäft?", "answer": "Z.B. Vertrag (zwei Willenserklärungen)." },
    { "question": "Wie sind Kinder unter 7 Jahren rechtlich?", "answer": "Willenserklärungen sind nichtig." },
    { "question": "Wie sind 7- bis 17-Jährige geschäftsfähig?", "answer": "Beschränkt geschäftsfähig, Zustimmung nötig." },
    { "question": "Was regelt der Taschengeldparagraph?", "answer": "Kauf mit eigenem Geld ist gültig." },
    { "question": "Wann liegt ein rechtlicher Vorteil vor?", "answer": "Z.B. bei Geschenken." },
    { "question": "Ab wann ist man voll geschäftsfähig?", "answer": "Ab 18 Jahren." },
    { "question": "Was ist Besitz?", "answer": "Nutzung einer Sache, ohne Eigentümer zu sein." },
    { "question": "Was ist Eigentum?", "answer": "Rechtlicher Besitz – durch Einigung und Übergabe." },
    { "question": "Wie kommt ein Kaufvertrag zustande?", "answer": "Durch Angebot und Annahme." },
    { "question": "Was ergibt Bestellvorgang + Lieferung?", "answer": "Einen Kaufvertrag." },
    { "question": "Welche Inhalte hat ein Kaufvertrag?", "answer": "Art, Menge, Qualität, Preis, Verpackung, Versand, Zahlungsart, AGB." },
    { "question": "Was ist ein bürgerlicher Kauf?", "answer": "Privatperson ↔ Privatperson." },
    { "question": "Was ist ein einseitiger Handelskauf?", "answer": "Unternehmer ↔ Privatperson." },
    { "question": "Was ist ein zweiseitiger Handelskauf?", "answer": "Unternehmer ↔ Unternehmer." },
    { "question": "Was ist ein Stückkauf?", "answer": "Einzelstück, nicht ersetzbar." },
    { "question": "Was ist ein Gattungskauf?", "answer": "Austauschbare Massenware." },
    { "question": "Was ist ein Ramschkauf?", "answer": "Gesamtposten unbekannter Qualität." },
    { "question": "Was ist Kauf auf Probe?", "answer": "Kauf kann zurückgegeben werden." },
    { "question": "Was ist Kauf nach Probe?", "answer": "Lieferung muss wie Probe sein." },
    { "question": "Was ist Kauf zur Probe?", "answer": "Kleine Menge zum Test." },
    { "question": "Was ist ein Terminkauf?", "answer": "Lieferung in bestimmtem Zeitraum." },
    { "question": "Was ist ein Fixkauf?", "answer": "Lieferung zu festem Termin, sonst kein Interesse mehr." },
    { "question": "Was ist Kauf auf Abruf?", "answer": "Lieferung/Zahlung zu späterem Zeitpunkt." },
    { "question": "Was ist ein quantitativer Angebotsvergleich?", "answer": "Preisvergleich mittels Handelskalkulation." },
    { "question": "Was ist ein qualitativer Angebotsvergleich?", "answer": "Bewertung von Nutzen, Service etc." },
    { "question": "Was passiert bei Wareneingang?", "answer": "Ware innen und außen auf Schäden prüfen." },
    { "question": "Was ist Annahmeverzug?", "answer": "Käufer nimmt Ware nicht an." },
    { "question": "Wer trägt Lagerkosten bei Annahmeverzug?", "answer": "Der Käufer." },
    { "question": "Bei bei Annahmeverzug, wie haftet der Verkäufer dann noch?", "answer": "Ab Verzug nur bei grober Fahrlässigkeit oder Vorsatz." },
    { "question": "Was ist Lieferverzug?", "answer": "Verkäufer liefert nicht rechtzeitig." },
    { "question": "Was kann der Käufer bei Lieferverzug tun?", "answer": "Mahnen, Frist setzen, zurücktreten, Schadensersatz." },
    { "question": "Was ist Zahlungsverzug?", "answer": "Käufer zahlt nicht fristgerecht." },
    { "question": "Welche Rechte hat der Verkäufer bei Zahlungsverzug?", "answer": "Mahnen, Frist setzen, Rücktritt + Schadensersatz." },
    { "question": "Was darf der Käufer bei mangelhafter Lieferung fordern?", "answer": "Nachbesserung oder Ersatz." },
    { "question": "Was kann der Käufer nach 2 Fehlversuchen, bei mangelhafter Lieferung tun?", "answer": "Rücktritt, Minderung, Schadensersatz." },
    { "question": "Wie lange gilt Gewährleistung bei Neuware?", "answer": "24 Monate." },
    { "question": "Wie lange gilt Gewährleistung bei Gebrauchtware?", "answer": "12 Monate." },
    { "question": "Wer muss nach 6 Monaten den Mangel beweisen?", "answer": "Der Käufer." },
    { "question": "Was ist eine Garantie?", "answer": "Freiwillige Leistung des Herstellers." },
    { "question": "Was sollte man bei Garantie beachten?", "answer": "AGB lesen." },
    { "question": "Was sind offene Mängel?", "answer": "Sofort sichtbar." },
    { "question": "Was sind versteckte Mängel?", "answer": "Erst bei Nutzung erkennbar." },
    { "question": "Was sind arglistig verschwiegene Mängel?", "answer": "Bekannter Mangel wurde absichtlich nicht genannt." },
    { "question": "Was ist eine Falschlieferung?", "answer": "Falsche Ware geliefert." },
    { "question": "Was ist eine Minderlieferung?", "answer": "Zu wenig geliefert." },
    { "question": "Was ist ein Montagemangel?", "answer": "Fehler beim Aufbau." },
    { "question": "Was ist ein Beschaffenheitsmangel?", "answer": "Ware entspricht nicht der vereinbarten Qualität." },
    { "question": "Wie berechnet man den Deckungsbeitrag?", "answer": "Umsatzerlöse - variable Kosten." },
    { "question": "Wie berechnet man den Gewinn?", "answer": "Deckungsbeitrag - Fixkosten." },
    { "question": "Was zeigt die Gewinnschwelle?", "answer": "Wie viele Stücke verkauft werden müssen für Gewinn." },
    {
      "questeion": "Welche Kaufmannseigenschaften gibt es?",
      "answer": "Formkaufmann, Istkaufmann und Kannkaufmann"
    }
  ],
  "IT-System": [
    {
      "question": "Was sind wichtige Faktoren bei der Auswahl von Speicherlösungen?",
      "answer": "Kosten: Optimierung der Kosten je nach Speicheranforderungen. Performance: Auswahl des Speichers basierend auf benötigter Geschwindigkeit. Skalierbarkeit: Möglichkeit der Erweiterung des Speichers bei Bedarf. Zuverlässigkeit: Speicherlösungen müssen zuverlässig und fehlerresistent sein."
    },
    {
      "question": "Was ist Objekt-Storage?",
      "answer": "Speichert Daten als Objekte mit Metadaten und einer eindeutigen ID."
    },
    {
      "question": "Was ist Storage Tiering?",
      "answer": "Das Aufteilen der Daten nach Wichtigkeit und Zugriffsfrequenz auf verschiedene Medien. Kostenoptimierung durch weniger wichtige Daten auf HDD und Leistungsoptimierung durch wichtige Daten auf SSD. Automatisierung wählt basierend auf Nutzungsmustern die Daten aus."
    },
    {
      "question": "Was ist Kilo (k) und was entspricht es?",
      "answer": "Kilo (k) ist 10^3, also 1.000."
    },
    {
      "question": "Was ist Mega (M) und was entspricht es?",
      "answer": "Mega (M) ist 10^6, also 1.000.000."
    },
    {
      "question": "Was ist Giga (G) und was entspricht es?",
      "answer": "Giga (G) ist 10^9, also 1.000.000.000."
    },
    {
      "question": "Was ist Tera (T) und was entspricht es?",
      "answer": "Tera (T) ist 10^12, also 1.000.000.000.000."
    },
    {
      "question": "Was ist Peta (P) und was entspricht es?",
      "answer": "Peta (P) ist 10^15, also 1.000.000.000.000.000."
    },
    {
      "question": "Was ist Exa (E) und was entspricht es?",
      "answer": "Exa (E) ist 10^18, also 1.000.000.000.000.000.000."
    },
    {
      "question": "Was ist Zetta (Z) und was entspricht es?",
      "answer": "Zetta (Z) ist 10^21, also 1.000.000.000.000.000.000.000."
    },
    {
      "question": "Was ist Yotta (Y) und was entspricht es?",
      "answer": "Yotta (Y) ist 10^24, also 1.000.000.000.000.000.000.000.000."
    },
    {
      "question": "Was ist Mikro (μ) und was entspricht es?",
      "answer": "Mikro (μ) ist 10^-6, also 0,000001."
    },
    {
      "question": "Was ist Nano (n) und was entspricht es?",
      "answer": "Nano (n) ist 10^-9, also 0,000000001."
    },
    {
      "question": "Was ist Pico (p) und was entspricht es?",
      "answer": "Pico (p) ist 10^-12, also 0,000000000001."
    },
    {
      "question": "Was ist Femto (f) und was entspricht es?",
      "answer": "Femto (f) ist 10^-15, also 0,000000000000001."
    },
    {
      "question": "Was ist Atto (a) und was entspricht es?",
      "answer": "Atto (a) ist 10^-18, also 0,000000000000000001."
    },
    {
      "question": "Was ist Zepto (z) und was entspricht es?",
      "answer": "Zepto (z) ist 10^-21, also 0,000000000000000000001."
    },
    {
      "question": "Was ist Yocto (y) und was entspricht es?",
      "answer": "Yocto (y) ist 10^-24, also 0,000000000000000000000001."
    }, {
      "question": "Was ist IPv4?",
      "answer": "IPv4 (Internet Protocol Version 4) ist die vierte Version des Internetprotokolls, das in der Kommunikation von Computern über Netzwerke verwendet wird. Es verwendet 32-Bit-Adressen."
    },
    {
      "question": "Wie viele Adressen sind mit IPv4 möglich?",
      "answer": "IPv4 bietet 2^32 mögliche Adressen, also rund 4,3 Milliarden Adressen."
    },
    {
      "question": "Was ist der Unterschied zwischen IPv4 und IPv6?",
      "answer": "IPv6 verwendet 128-Bit-Adressen und bietet damit deutlich mehr mögliche Adressen als IPv4, das nur 32-Bit-Adressen nutzt."
    },
    {
      "question": "Warum wurde IPv6 entwickelt?",
      "answer": "IPv6 wurde entwickelt, um die begrenzte Anzahl von IPv4-Adressen zu erweitern und die steigende Anzahl von Geräten im Internet zu unterstützen."
    },
    {
      "question": "Was ist eine IPv6-Adresse?",
      "answer": "Eine IPv6-Adresse besteht aus acht Gruppen von vier hexadezimalen Ziffern, die durch Doppelpunkte getrennt sind."
    },
    {
      "question": "Was ist das ISO/OSI-Modell?",
      "answer": "Das ISO/OSI-Modell ist ein Referenzmodell für Netzwerkkommunikation, das in sieben Schichten unterteilt ist, um die Kommunikation zwischen Computern zu ermöglichen."
    },
    {
      "question": "Welche Schichten gibt es im ISO/OSI-Modell?",
      "answer": "Die sieben Schichten des ISO/OSI-Modells sind: Physikalische Schicht, Datenverbindungsschicht, Netzwerkschicht, Transportschicht, Sitzungsschicht, Darstellungsschicht und Anwendungsschicht."
    },
    {
      "question": "Was passiert in der Netzwerkschicht des ISO/OSI-Modells?",
      "answer": "In der Netzwerkschicht werden Datenpakete weitergeleitet und zwischen verschiedenen Netzwerken adressiert, häufig durch Routing-Protokolle wie IP."
    },
    {
      "question": "Was ist die MAC-Adresse?",
      "answer": "Die MAC-Adresse (Media Access Control) ist eine eindeutige Kennung für jedes Netzwerkgerät und wird in der Regel von der Hardware des Geräts festgelegt."
    },
    {
      "question": "Wie ist der Aufbau einer MAC-Adresse?",
      "answer": "Eine MAC-Adresse besteht aus 6 Byte (48 Bit), wobei die ersten 3 Byte den Hersteller des Geräts identifizieren (Organizationally Unique Identifier - OUI)."
    }, {
      "question": "Was ist die Bedeutung der CIDR-Notation?",
      "answer": "CIDR (Classless Inter-Domain Routing) ist eine Methode zur Darstellung von IP-Adressen und deren zugehörigen Subnetzmasken, z.B. 192.168.1.0/24."
    },
    {
      "question": "Was ist eine private IPv4-Adresse?",
      "answer": "Private IPv4-Adressen sind für den internen Gebrauch innerhalb eines Netzwerks reserviert und nicht im öffentlichen Internet routbar. Sie gehören zu den Bereichen 10.0.0.0 bis 10.255.255.255, 172.16.0.0 bis 172.31.255.255 und 192.168.0.0 bis 192.168.255.255."
    },
    {
      "question": "Was ist ein Gateway in einem Netzwerk?",
      "answer": "Ein Gateway ist ein Netzwerkgerät, das als Brücke zwischen verschiedenen Netzwerken dient und den Datenverkehr zwischen ihnen weiterleitet."
    },
    {
      "question": "Was ist der Unterschied zwischen unicast, multicast und broadcast?",
      "answer": "Unicast bedeutet eine 1:1-Kommunikation zwischen Sender und Empfänger, multicast ist eine 1:n-Kommunikation, und broadcast ist eine Kommunikation an alle Geräte im Netzwerk."
    },
    {
      "question": "Was ist NAT (Network Address Translation)?",
      "answer": "NAT ist eine Methode, bei der private IP-Adressen in öffentliche IP-Adressen umgewandelt werden, um den Zugriff auf das Internet zu ermöglichen, ohne dass jedes Gerät eine öffentliche IP-Adresse benötigt."
    },
    {
      "question": "Was ist ein DNS-Server?",
      "answer": "Ein DNS-Server (Domain Name System) übersetzt Domainnamen in IP-Adressen, damit Computer im Internet kommunizieren können."
    },
    {
      "question": "Was ist IPv4-Subnetting?",
      "answer": "IPv4-Subnetting ist der Prozess, bei dem eine IP-Adresse in mehrere Subnetze unterteilt wird, um die Verwaltung und Nutzung von IP-Adressen zu optimieren."
    },
    {
      "question": "Was ist ein Public IPv6-Adressbereich?",
      "answer": "Der öffentliche IPv6-Adressbereich ist ein Bereich von IPv6-Adressen, der für die Kommunikation im öffentlichen Internet verwendet wird."
    }, {
      "question": "Wie heißt der linke Teil einer IPv4-Adresse?",
      "answer": "Der linke Teil einer IPv4-Adresse ist der Netzteil."
    },
    {
      "question": "Wie heißt der rechte Teil einer IPv4-Adresse?",
      "answer": "Der rechte Teil einer IPv4-Adresse ist der Hostteil."
    },
    {
      "question": "Was stellt der Netzteil einer IPv4-Adresse dar?",
      "answer": "Der Netzteil einer IPv4-Adresse stellt das Netzwerk dar, zu dem der Host gehört."
    },
    {
      "question": "Was stellt der Hostteil einer IPv4-Adresse dar?",
      "answer": "Der Hostteil einer IPv4-Adresse stellt den spezifischen Host innerhalb des Netzwerks dar."
    },
    {
      "question": "Wie heißt der linke Teil einer IPv6-Adresse?",
      "answer": "Der linke Teil einer IPv6-Adresse ist der Netzteil."
    },
    {
      "question": "Wie heißt der rechte Teil einer IPv6-Adresse?",
      "answer": "Der rechte Teil einer IPv6-Adresse ist der Hostteil."
    },
    {
      "question": "Was stellt der Netzteil einer IPv6-Adresse dar?",
      "answer": "Der Netzteil einer IPv6-Adresse stellt das Netzwerk dar, zu dem der Host gehört."
    },
    {
      "question": "Was stellt der Hostteil einer IPv6-Adresse dar?",
      "answer": "Der Hostteil einer IPv6-Adresse stellt den spezifischen Host innerhalb des Netzwerks dar."
    },
    {
      "question": "Wie viele Bits umfasst der Netzteil einer IPv4-Adresse?",
      "answer": "Der Netzteil einer IPv4-Adresse umfasst in der Regel die ersten 8 bis 24 Bits, abhängig von der Subnetzmaske."
    },
    {
      "question": "Wie viele Bits umfasst der Hostteil einer IPv4-Adresse?",
      "answer": "Der Hostteil einer IPv4-Adresse umfasst in der Regel die restlichen Bits, die nicht zum Netzteil gehören."
    },
    {
      "question": "Wie viele Bits umfasst der Netzteil einer IPv6-Adresse?",
      "answer": "Der Netzteil einer IPv6-Adresse umfasst in der Regel die ersten 64 Bits."
    },
    {
      "question": "Wie viele Bits umfasst der Hostteil einer IPv6-Adresse?",
      "answer": "Der Hostteil einer IPv6-Adresse umfasst in der Regel die letzten 64 Bits."
    },
    {
      "question": "Was ist ein Dienst?",
      "answer": "Ein Dienst ist eine Funktion oder Aufgabe, die einem Computer oder Netzwerk bereitgestellt wird, wie z.B. das Abrufen von Daten oder das Bereitstellen von Ressourcen."
    },
    {
      "question": "Was ist ein Protokoll?",
      "answer": "Ein Protokoll sind Regeln und Standards, die die Kommunikation und den Datenaustausch zwischen zwei Geräten oder Anwendungen steuern."
    },
    {
      "question": "Was beschreibt die Anwendungsschicht im OSI-Modell?",
      "answer": "Die Anwendungsschicht (Application Layer) bezieht sich auf die Kommunikation über Dienste wie HTTPS (Port 443) oder DNS (Port 53)."
    },
    {
      "question": "Was ist die Darstellungsschicht im OSI-Modell?",
      "answer": "Die Darstellungsschicht (Presentation Layer) kümmert sich um die Datenformatierung, z.B. mit SSL/TLS-Verschlüsselung."
    },
    {
      "question": "Was ist die Sitzungsschicht im OSI-Modell?",
      "answer": "Die Sitzungsschicht (Session Layer) sorgt für die Verwaltung von Sitzungen, z.B. mit H.245 für Videoanrufe."
    },
    {
      "question": "Was beschreibt die Transportschicht im OSI-Modell?",
      "answer": "Die Transportschicht (Transport Layer) sorgt für eine fehlerfreie Datenübertragung, z.B. durch TCP und UDP."
    },
    {
      "question": "Was ist die Vermittlungsschicht im OSI-Modell?",
      "answer": "Die Vermittlungsschicht (Network Layer) sorgt für die Weiterleitung von Datenpaketen und verwendet IP (Internet Protocol)."
    },
    {
      "question": "Was ist die Sicherungsschicht im OSI-Modell?",
      "answer": "Die Sicherungsschicht (Data Link Layer) kümmert sich um die Übertragung von Frames und nutzt MAC-Adressen."
    },
    {
      "question": "Was beschreibt die Bitübertragungsschicht im OSI-Modell?",
      "answer": "Die Bitübertragungsschicht (Physical Layer) befasst sich mit der physischen Übertragung von Daten, z.B. über Kabel."
    },
    {
      "question": "Was ist HTTP?",
      "answer": "HTTP (Hypertext Transfer Protocol) ist ein Protokoll zum Austausch von Webseiten und nutzt Port 80."
    },
    {
      "question": "Was ist HTTPS?",
      "answer": "HTTPS (Hypertext Transfer Protocol Secure) ist eine sichere Version von HTTP und nutzt Port 443."
    },
    {
      "question": "Was ist FTP?",
      "answer": "FTP (File Transfer Protocol) dient der Datenübertragung zwischen zwei PCs und nutzt Port 21."
    },
    {
      "question": "Was ist SMTP?",
      "answer": "SMTP (Simple Mail Transfer Protocol) ist ein Protokoll zum Senden von E-Mails und nutzt Port 25."
    },
    {
      "question": "Was ist IMAP?",
      "answer": "IMAP (Internet Message Access Protocol) dient dem Abrufen und Verwalten von E-Mails und nutzt Port 143."
    },
    {
      "question": "Was ist POP3?",
      "answer": "POP3 (Post Office Protocol v3) dient dem Abrufen und lokalen Speichern von E-Mails und nutzt Port 110."
    },
    {
      "question": "Was ist DNS?",
      "answer": "DNS (Domain Name System) übersetzt Domain-Namen in IP-Adressen und nutzt Port 53."
    },
    {
      "question": "Was ist TCP?",
      "answer": "TCP (Transmission Control Protocol) sorgt für eine zuverlässige Datenübertragung und nutzt oft Port 443."
    },
    {
      "question": "Was ist UDP?",
      "answer": "UDP (User Datagram Protocol) ist ein unzuverlässiges Protokoll für die Datenübertragung."
    },
    {
      "question": "Was ist IP?",
      "answer": "IP (Internet Protocol) sorgt für die Adressierung und Weiterleitung von Datenpaketen im Netzwerk und unterstützt IPv4 und IPv6."
    },
    {
      "question": "Was ist ICMP?",
      "answer": "ICMP (Internet Control Message Protocol) wird für Netzwerk-Fehlerbehandlung und Tests verwendet, z.B. beim Ping-Befehl."
    },
    {
      "question": "Was ist DHCP?",
      "answer": "DHCP (Dynamic Host Configuration Protocol) vergibt automatisch IP-Adressen an Geräte im Netzwerk und nutzt Port 67/68."
    },
    {
      "question": "Was ist SSL?",
      "answer": "SSL (Secure Socket Layer) ist eine ältere Verschlüsselungstechnik bis Version 3.1."
    },
    {
      "question": "Was ist TLS?",
      "answer": "TLS (Transport Layer Security) ist eine neuere und sicherere Verschlüsselungstechnik, die bis Version 1.3 reicht."
    },
    {
      "question": "Was ist SSH?",
      "answer": "SSH (Secure Shell) ist ein Protokoll für den sicheren Remote-Zugriff auf Systeme und nutzt Port 22."
    },
    {
      "question": "Was ist RDP?",
      "answer": "RDP (Remote Desktop Protocol) wird für den Fernzugriff auf einen Computer oder Server verwendet und nutzt Port 2289."
    },
    {
      "question": "Was ist SNMP?",
      "answer": "SNMP (Simple Network Management Protocol) wird zur Überwachung und Verwaltung von Netzwerken verwendet und nutzt Port 161."
    },
    {
      "question": "Was ist der IP-Bereich für Klasse A?",
      "answer": "Der IP-Bereich für Klasse A reicht von 0.0.0.0 bis 127.255.255.255 und hat eine Subnetzmaske von 255.0.0.0 (/8)."
    },
    {
      "question": "Was ist der IP-Bereich für Klasse B?",
      "answer": "Der IP-Bereich für Klasse B reicht von 128.0.0.0 bis 192.255.255.255 und hat eine Subnetzmaske von 255.255.0.0 (/16)."
    },
    {
      "question": "Was ist der IP-Bereich für Klasse C?",
      "answer": "Der IP-Bereich für Klasse C reicht von 192.0.0.0 bis 223.255.255.255 und hat eine Subnetzmaske von 255.255.255.0 (/24)."
    },
    {
      "question": "Was ist der Multicastbereich in IPv4?",
      "answer": "Der Multicastbereich in IPv4 reicht von 224.0.0.0 bis 239.255.255.255."
    },
    {
      "question": "Was ist der experimentelle Bereich in IPv4?",
      "answer": "Der experimentelle Bereich in IPv4 reicht von 240.0.0.0 bis 255.255.255.255."
    },
    {
      "question": "Was ist der private IP-Bereich der Klasse A?",
      "answer": "Der private IP-Bereich der Klasse A reicht von 10.0.0.0/8 bis 10.255.255.255."
    },
    {
      "question": "Was ist der private IP-Bereich der Klasse B?",
      "answer": "Der private IP-Bereich der Klasse B reicht von 172.16.0.0/12 bis 172.32.255.255/16."
    },
    {
      "question": "Was ist der private IP-Bereich der Klasse C?",
      "answer": "Der private IP-Bereich der Klasse C reicht von 192.168.0.0/16 bis 192.169.255.255/16."
    },
    {
      "question": "Was ist der Loopback-Bereich in IPv4?",
      "answer": "Der Loopback-Bereich in IPv4 ist 127.0.0.0/8 und wird für localhost verwendet."
    },
    {
      "question": "Was ist der APIPA-Bereich in IPv4?",
      "answer": "Der APIPA-Bereich in IPv4 reicht von 169.254.0.0/16 und wird verwendet, wenn keine DHCP-Adresse verfügbar ist."
    },
    {
      "question": "Was ist die Super-Broadcast-Adresse in IPv4?",
      "answer": "Die Super-Broadcast-Adresse in IPv4 ist 255.255.255.255."
    },
    {
      "question": "Was bedeutet es, dass ein Server auf 0.0.0.0 lauscht?",
      "answer": "Ein Server kann auf 0.0.0.0 lauschen, wenn er einen offenen Port in seiner Firewall hat, sodass andere Netzwerkteilnehmer mit der IP-Adresse des Servers und dem Port auf den Dienst zugreifen können."
    }
  ],
  "IT-Sicherheit": [
    {
      "question": "Warum macht man regelmäßig Software-Updates?",
      "answer": "Um Sicherheitslücken zu schließen, neue Funktionen bereitzustellen, Fehler zu beheben und die Leistung oder Stabilität zu verbessern."
    },
    {
      "question": "Was ist ein Load Balancer?",
      "answer": "Ein Load Balancer verteilt Anfragen an mehrere Server, um die Last gleichmäßig zu verteilen und die Performance zu verbessern."
    },
    {
      "question": "Was ist Pretexting in der Social Engineering?",
      "answer": "Pretexting ist eine Methode, bei der ein Angreifer eine falsche Identität vorgibt, um Informationen zu erschleichen."
    },
    {
      "question": "Was sind wesentliche Bestandteile einer Datenschutzrichtlinie im Unternehmen?",
      "answer": "Zweckbindung: Festlegung der konkreten Zwecke, für die Daten erhoben werden. Transparenz: Betroffene müssen darüber informiert werden, wie ihre Daten verwendet werden. \n Sicherheitsmaßnahmen: Definieren, wie die Daten technisch und organisatorisch geschützt werden. \n  Aufbewahrungsfristen: Bestimmung, wie lange Daten gespeichert werden, bevor sie gelöscht werden. Datensparsamkeit: Nur Daten erheben, die wirklich notwendig sind."
    },
    {
      "question": "Warum macht man Schulungen für den IT-Schutz?",
      "answer": "Sensibilisierung, rechtliche Anforderungen erfüllen, menschliche Fehler minimieren, Wissen aktualisieren, Sicherheit stärken."
    },
    {
      "question": "Was sind Schutzmaßnahmen gegen Ransomware?",
      "answer": "Schulungen, Backups und Antivirenprogramme, die es erkennen, Ports sperren, Mailfilter."
    },
    {
      "question": "Was ist eine Zero-Trust-Strategie?",
      "answer": "Benutzer bekommen minimale Rechte und kontinuierliche Überprüfung beim Zugriff."
    },
    {
      "question": "Was sind Sicherheitsaudits?",
      "answer": "Sicherheitsaudits sind systematische Überprüfungen, bei denen die Sicherheit von IT-Systemen, Netzwerken oder Anwendungen bewertet wird, um Schwachstellen zu identifizieren und die Einhaltung von Sicherheitsrichtlinien zu prüfen."
    },
    {
      "question": "Wie kann man ein WLAN-Netzwerk absichern?",
      "answer": "WPA3-Verschlüsselung, MAC-Adressfilterung, Deaktivierung des SSID-Broadcasts."
    },
    {
      "question": "Was ist Data Loss Prevention (DLP)?",
      "answer": "Eine Sicherheitsstrategie, die darauf abzielt, das unbefugte Entfernen oder Weitergeben von sensiblen Daten aus einem Unternehmen zu verhindern."
    },
    {
      "question": "Was sind Audits?",
      "answer": "Audits sind unabhängige Prüfungen oder Untersuchungen von Prozessen, Systemen oder Finanzberichten, um deren Genauigkeit, Einhaltung von Standards und Wirksamkeit zu bewerten. Sicherheits-Checks."
    },
    {
      "question": "Nenne physikalische Sicherheitsmaßnahmen von Serverräumen?",
      "answer": "Zutrittskontrolle, Videoüberwachung, Rauch- und Feuermelder."
    },
    {
      "question": "Was ist eine Datenschutz-Folgenabschätzung (DSFA)?",
      "answer": "Eine Datenschutz-Folgenabschätzung (DSFA) ist eine Analyse, die durchgeführt wird, um die Auswirkungen einer geplanten Datenverarbeitung auf den Schutz personenbezogener Daten zu bewerten und Risiken für die betroffenen Personen zu identifizieren."
    },
    {
      "question": "Was sind Maßnahmen gegen Brute-Force-Angriffe?",
      "answer": "Account sperren bei Fehlversuchen, 2FA, Passwort-Mindestanforderungen und CAPTCHA."
    },

    {
      "question": "Welche Angriffszenarien im Bereich IoT gibt es?",
      "answer": "Man-in-the-Middle, DDoS-Angriffe auf Smart-Geräte und Botnet-Angriffe."
    },

    {
      "question": "Nenne drei Maßnahmen der DSGVO?",
      "answer": "Datenminimierung, Pseudonymisierung, Verschlüsselung, Zugriffskontrolle (Rollen-Konzepte), Kennzeichnung der DSGVO, wo sie angewendet wird."
    },

    {
      "question": "Was ist IT Governance?",
      "answer": "IT Governance ist ein Rahmenwerk, das sicherstellt, dass die IT-Strategie und die Unternehmensstrategie übereinstimmen und die IT-Ziele effektiv erreicht werden."
    },
    {
      "question": "Was ist Compliance?",
      "answer": "Eine Mischung aus Richtlinien und Vorschriften, deren Einhaltung gewährleistet werden muss."
    },
    {
      "question": "Was bedeutet VPN und wie funktioniert die Verschlüsselung?",
      "answer": "VPN (Virtual Private Network) ermöglicht es, eine sichere Verbindung über ein unsicheres Netzwerk, wie das Internet, zu erstellen. Die Verschlüsselung stellt sicher, dass die Daten während der Übertragung geschützt sind, indem sie in einen Code umgewandelt werden, der nur mit einem Schlüssel entschlüsselt werden kann."
    },
    {
      "question": "Welche Arten der VPN-Verschlüsselung gibt es?",
      "answer": "Es gibt verschiedene Verschlüsselungsmethoden, darunter IPSec (Internet Protocol Security), SSL (Secure Sockets Layer) und TLS (Transport Layer Security), die für sichere VPN-Verbindungen verwendet werden."
    },
    {
      "question": "Was sind Zugriffrechte, Rollen und Rechte in einem System?",
      "answer": "Zugriffsrechte sind Berechtigungen, die einem Benutzer oder einer Benutzergruppe in einem System zugewiesen werden, um auf bestimmte Ressourcen zugreifen zu können. Rollen sind Gruppen von Zugriffrechten, die zu bestimmten Benutzerarten oder -aufgaben passen, während Rechte festlegen, welche spezifischen Aktionen innerhalb eines Systems erlaubt sind, z.B. lesen, schreiben, oder ausführen."
    },
    {
      "question": "Was ist der Unterschied zwischen einer Rolle und einem Recht?",
      "answer": "Eine Rolle ist eine Sammlung von Rechten, die typischerweise mit bestimmten Benutzergruppen verbunden sind, wie Administratoren oder normale Benutzer. Ein Recht ist eine spezifische Berechtigung, wie das Bearbeiten oder Löschen von Daten."
    },
    {
      "question": "Wofür steht ISMS?",
      "answer": "ISMS steht für Informationssicherheits-Managementsystem."
    },
    {
      "question": "Was ist das Ziel eines ISMS?",
      "answer": "Ein ISMS soll Vertraulichkeit, Integrität und Verfügbarkeit dauerhaft sicherstellen."
    },
    {
      "question": "Wer leitet das ISMS?",
      "answer": "Der Informationssicherheitsbeauftragte (ISB) leitet das ISMS."
    },
    {
      "question": "Was passiert, wenn der ISB bekannte Lücken nicht meldet?",
      "answer": "Er macht sich strafbar."
    },
    {
      "question": "Wer setzt die Maßnahmen des ISMS praktisch um?",
      "answer": "Das Facility Management setzt die Maßnahmen um, die vom ISB beraten werden."
    },
    {
      "question": "Was ist das CIA-Prinzip?",
      "answer": "Das CIA-Prinzip steht für Confidentiality (Vertraulichkeit), Integrity (Integrität) und Availability (Verfügbarkeit)."
    },
    {
      "question": "Was sind Aufgaben des ISMS?",
      "answer": "Koordination der Sicherheitsmaßnahmen, Übersicht über den Sicherheitsstatus, Bewertung von Maßnahmen, kontinuierliche Verbesserung."
    },
    {
      "question": "Was bedeutet kontinuierliche Verbesserung im ISMS?",
      "answer": "Laufende Überprüfung und Weiterentwicklung der Sicherheitsmaßnahmen, z.B. nach dem PDCA-Zyklus."
    },
    {
      "question": "Welche Grundsätze gelten für ein ISMS?",
      "answer": "Ausrichtung an Geschäftsprozessen, Risikoerkennung, kontinuierliche Verbesserung."
    },
    {
      "question": "Was ist mit 'Ausrichtung an Geschäftsprozessen' gemeint?",
      "answer": "Sicherheitsmaßnahmen müssen zu den IT-Systemen und Abläufen des Unternehmens passen."
    },
    {
      "question": "Warum ist Risikobewertung wichtig im ISMS?",
      "answer": "Nur durch Kenntnis der Risiken können passende Schutzmaßnahmen gewählt werden."
    },
    {
      "question": "Nenne zentrale Elemente eines ISMS.",
      "answer": "Sicherheitsorganisation, Asset Management, Risikomanagement, Sicherheitsmaßnahmen."
    },
    {
      "question": "Was versteht man unter Asset Management?",
      "answer": "Verwaltung und Bewertung aller wichtigen Informationswerte als Basis für das Risikomanagement."
    },
    {
      "question": "Was beinhaltet das Risikomanagement?",
      "answer": "Identifikation, Bewertung und Behandlung von Risiken."
    },
    {
      "question": "Was sind Sicherheitsmaßnahmen im ISMS?",
      "answer": "Technische und organisatorische Maßnahmen zur Behandlung erkannter Risiken."
    },
    {
      "question": "Was passiert in der Strukturanalyse?",
      "answer": "Relevante Objekte werden identifiziert und gruppiert, z.B. nach Typ, Anwendung oder Netzwerkzugehörigkeit."
    },
    {
      "question": "Welche Kriterien werden zur Gruppierung in der Strukturanalyse verwendet?",
      "answer": "Gleicher Typ, gleiche Konfiguration, gleiche Anwendung oder gleiches Netzwerk."
    },
    {
      "question": "Was ist die Schutzbedarfsfeststellung?",
      "answer": "Jedem Objekt wird ein Schutzbedarf für Vertraulichkeit, Integrität und Verfügbarkeit zugewiesen."
    },
    {
      "question": "Welche drei Schutzziele gibt es im ISMS?",
      "answer": "Vertraulichkeit, Integrität und Verfügbarkeit."
    },
    {
      "question": "Was bedeutet Schutzbedarf 'normal'?",
      "answer": "Der potenzielle Schaden ist begrenzt und überschaubar."
    },
    {
      "question": "Was bedeutet Schutzbedarf 'hoch'?",
      "answer": "Ein erheblicher Schaden wäre möglich."
    },
    {
      "question": "Was bedeutet Schutzbedarf 'sehr hoch'?",
      "answer": "Die Schadensauswirkungen wären gravierend oder existenzbedrohend."
    },
    {
      "question": "Was ist Schutzbedarfsvererbung?",
      "answer": "Übertragung des Schutzbedarfs auf verbundene Objekte."
    },
    {
      "question": "Was besagt das Maximumprinzip?",
      "answer": "Hat ein Objekt hohen Schutzbedarf, gilt dieser auch für verbundene Objekte."
    },
    {
      "question": "Was ist der Kumulationseffekt?",
      "answer": "Der Schutzbedarf steigt, wenn viele Systeme gleichzeitig ausfallen könnten."
    },
    {
      "question": "Was ist der Verteilungseffekt?",
      "answer": "Der Schutzbedarf kann sinken, wenn Prozesse auf viele Systeme verteilt sind."
    },
    {
      "question": "Was bedeutet Abhängigkeit bei der Schutzbedarfsvererbung?",
      "answer": "Ein Objekt übernimmt den höheren Schutzbedarf, wenn es auf ein anderes angewiesen ist."
    },
    {
      "question": "Was bedeutet PDCA im Kontext des ISMS?",
      "answer": "PDCA steht für Plan-Do-Check-Act und beschreibt einen Zyklus zur kontinuierlichen Verbesserung von Prozessen, auch in der IT-Sicherheit."
    }, {
      "question": "Was sind IT-Grundschutz-Bausteine?",
      "answer": "IT-Grundschutz-Bausteine beschreiben typische IT-Komponenten oder Prozesse und geben konkrete Sicherheitsanforderungen zum Schutz dieser."
    },
    {
      "question": "Welche vier Teile enthält ein IT-Grundschutz-Baustein?",
      "answer": "1. Beschreibung, 2. Gefährdungslage, 3. Sicherheitsanforderungen, 4. Umsetzungsstatus."
    },
    {
      "question": "Was bedeutet der Umsetzungsstatus 'Basis'?",
      "answer": "Er beschreibt grundlegende Sicherheitsmaßnahmen, die in jedem Fall umgesetzt werden müssen."
    },
    {
      "question": "Was ist die Voraussetzung für eine Risikoanalyse?",
      "answer": "Erfassung der Zielobjekte, Schutzbedarfsfeststellung und Zuordnung von IT-Grundschutz-Bausteinen."
    },
    {
      "question": "Was ist das Ziel der Risikoidentifikation?",
      "answer": "Mögliche Gefährdungen für die analysierten Objekte zu erkennen."
    },
    {
      "question": "Wie wird ein Risiko bewertet?",
      "answer": "Risiko = Auswirkung x Eintrittshäufigkeit, oft dargestellt in einer Risikomatrix."
    },
    {
      "question": "Was bedeutet Risikovermeidung?",
      "answer": "Das Risiko gar nicht erst entstehen lassen, z.B. durch Rechteentzug."
    },
    {
      "question": "Was ist Risikotransfer?",
      "answer": "Das Übertragen des Risikos auf Dritte, z.B. durch eine Versicherung."
    },
    {
      "question": "Was versteht man unter Risikomigration?",
      "answer": "Maßnahmen einführen, um das Risiko zu verringern."
    },
    {
      "question": "Wann akzeptiert man ein Risiko?",
      "answer": "Wenn die Risikobehandlung teurer ist als das Risiko selbst."
    },
    {
      "question": "Welche Gefahr besteht bei Feuer im Rechenzentrum?",
      "answer": "Elektrobrände oder externe Brände können Systeme zerstören."
    },
    {
      "question": "Wie schützt man sich im RZ vor Feuer?",
      "answer": "Brandmelder, Löschanlagen, keine Brandlasten und Feuerlöscher einsetzen."
    },
    {
      "question": "Welche Gefahr besteht bei Wasser im Rechenzentrum?",
      "answer": "Leitungslecks, Hochwasser oder defekte Kühlanlagen können Technik beschädigen."
    },
    {
      "question": "Wie schützt man sich vor Wasser im RZ?",
      "answer": "Abdichtung, Leckageüberwachung, keine unnötigen Wasserleitungen."
    },
    {
      "question": "Was passiert bei Stromausfall im Rechenzentrum?",
      "answer": "Datenverluste und Unterbrechungen im Betrieb können entstehen."
    },
    {
      "question": "Wie kann man sich vor Stromausfall schützen?",
      "answer": "USV, Netzersatzanlagen und regelmäßige Tests."
    },
    {
      "question": "Warum ist Klimatisierung im Rechenzentrum wichtig?",
      "answer": "Überhitzung und Luftfeuchtigkeit können Technik beschädigen."
    },
    {
      "question": "Wie schützt man sich vor Einbruch im RZ?",
      "answer": "Zutrittskontrolle, Videoüberwachung und physischer Schutz."
    },
    {
      "question": "Warum ist Kabelmanagement wichtig?",
      "answer": "Fehlendes Management kann zu Bränden oder Ausfällen führen."
    },
    {
      "question": "Was ist eine typische Gefahr beim häuslichen Arbeitsplatz?",
      "answer": "Unbefugter Zutritt, z.B. durch Familienmitglieder."
    },
    {
      "question": "Welche Schutzmaßnahme MUSS am häuslichen Arbeitsplatz umgesetzt werden?",
      "answer": "Dokumente/Datenträger müssen sicher und verschlossen aufbewahrt werden."
    },
    {
      "question": "Was ist eine Standardmaßnahme für den Home-Office-Schutz?",
      "answer": "Trennung von privaten und beruflichen Räumen."
    },
    {
      "question": "Welche Gefahr besteht bei Laptops im Außeneinsatz?",
      "answer": "Diebstahl, Datenverlust oder Transportschäden."
    },
    {
      "question": "Was ist eine MUSS-Anforderung für Laptops?",
      "answer": "Aktive Personal Firewall und aktuelle Antivirensoftware."
    },
    {
      "question": "Was ist eine empfohlene Maßnahme (SOLLTE) bei Laptops?",
      "answer": "Verwendung von VPN und TLS für sicheren Datentransfer."
    },
    {
      "question": "Was bedeutet erhöhter Schutzbedarf bei Laptops?",
      "answer": "Zentrales Management-Tool und sichere Lagerung ungenutzter Geräte."
    },
    {
      "question": "Warum sind klare Übergaberegeln bei Laptop-Nutzung wichtig?",
      "answer": "Zur Vermeidung von Datenverlust und zur Nachvollziehbarkeit der Nutzung."
    }, {
      "question": "Wofür steht NTFS?",
      "answer": "NTFS steht für 'New Technology File System'."
    },
    {
      "question": "Welches Betriebssystem nutzt NTFS als Standard-Dateisystem?",
      "answer": "Windows."
    },
    {
      "question": "Nenne zwei Sicherheitsfeatures von NTFS.",
      "answer": "Rechteverwaltung pro Datei/Ordner und Unterstützung von EFS."
    },
    {
      "question": "Was ersetzt NTFS?",
      "answer": "Es ersetzt ältere Dateisysteme wie FAT32."
    },
    {
      "question": "Wofür steht PST?",
      "answer": "Personal Storage Table – ein Datei-Format von Microsoft Outlook."
    },
    {
      "question": "Was wird in einer PST-Datei gespeichert?",
      "answer": "E-Mails, Kalender, Kontakte usw. lokal auf dem Rechner."
    },
    {
      "question": "Ist eine PST-Datei automatisch verschlüsselt?",
      "answer": "Nein, sie ist standardmäßig nicht verschlüsselt."
    },
    {
      "question": "Was sollte man bei sensiblen Daten in PST-Dateien beachten?",
      "answer": "Sie sollten geschützt und gesichert werden."
    },
    {
      "question": "Was macht das EFS (Encrypting File System)?",
      "answer": "Es verschlüsselt einzelne Dateien oder Ordner auf NTFS-Laufwerken."
    },
    {
      "question": "Wer kann auf EFS-verschlüsselte Dateien zugreifen?",
      "answer": "Nur der Benutzer mit dem passenden Schlüssel/Zertifikat."
    },
    {
      "question": "Wie merkt der Benutzer die EFS-Verschlüsselung im Alltag?",
      "answer": "Gar nicht – die Verschlüsselung erfolgt transparent."
    },
    {
      "question": "Was ist ein Risiko bei EFS?",
      "answer": "EFS schützt nicht, wenn ein Angreifer als eingeloggter Benutzer Zugriff hat."
    },
    {
      "question": "Was muss man bei EFS unbedingt sichern?",
      "answer": "Das Verschlüsselungszertifikat – sonst droht Datenverlust."
    },
    {
      "question": "Was ist BitLocker?",
      "answer": "Eine vollständige Festplattenverschlüsselung von Windows."
    },
    {
      "question": "Was wird durch BitLocker geschützt?",
      "answer": "Das gesamte Laufwerk, auch vor Zugriff bei Diebstahl."
    },
    {
      "question": "Wann schützt BitLocker besonders effektiv?",
      "answer": "Schon beim Hochfahren des Systems, bevor Windows startet."
    },
    {
      "question": "Was kann BitLocker zur Entsperrung unterstützen?",
      "answer": "Ein TPM-Chip (Trusted Platform Module) für automatische Entsperrung."
    },
    {
      "question": "Was passiert bei Diebstahl eines BitLocker-verschlüsselten Geräts ohne TPM oder Passwort?",
      "answer": "Ein Angreifer kann nicht auf die Daten zugreifen."
    },
    {
      "question": "Wie geht man Schritt für Schritt bei der Umsetzung von Informationssicherheit vor?",
      "answer": "1. Strukturanalyse: Alle relevanten Objekte (z.B. IT-Systeme, Prozesse, Räume) werden erfasst und gruppiert. 2. Schutzbedarfsfeststellung: Für jedes Objekt wird bewertet, wie hoch der Bedarf an Vertraulichkeit, Integrität und Verfügbarkeit ist. 3. Bausteine auswählen: Passende IT-Grundschutz-Bausteine werden zugeordnet. 4. Risikoanalyse: Risiken werden identifiziert, bewertet und geeignete Maßnahmen abgeleitet. 5. Sicherheitsmaßnahmen umsetzen: Technische und organisatorische Maßnahmen werden angewendet. 6. Kontinuierliche Verbesserung: Alle Maßnahmen werden regelmäßig geprüft und angepasst (z.B. nach dem PDCA-Zyklus)."
    }
  ],
  "Projekt & Management": [
  
    {
      question: "Was ist die Top-Down-Methode?",
      answer: "Die Top-Down-Methode zerlegt ein Gesamtproblem in kleinere Teilaufgaben, die nach und nach gelöst werden."
    },
    {
      question: "Was beschreibt die Bottom-Up-Methode?",
      answer: "Beim Bottom-Up-Ansatz beginnt man mit der Entwicklung kleiner, funktionierender Module (z. B. Funktionen, Klassen) und integriert diese schrittweise zu einem Gesamtsystem."
    },
    {
      "question": "Was sind die Herausforderungen bei der mobilen Entwicklung?",
      "answer": "Verschiedene Betriebssysteme und Versionen, Performance-Optimierung, Sicherheit und responsives Design."
    },
   
    {
      "question": "Was ist der Vorteil von Design Patterns?",
      "answer": "Wiederverwendbare Lösungen, erhöhte Wartbarkeit und bessere Skalierbarkeit."
    },
    {
      "question": "Was ist Domain-Driven Design (DDD)?",
      "answer": "Bei Domain-Driven Design arbeiten Fachexperten, z.B. aus Vertrieb oder Finanzen, eng mit Entwicklern zusammen, um durch bessere Kommunikation ein Produkt zu entwickeln, das den fachlichen Anforderungen genau entspricht."
    },
    {
      "question": "Was ist ACID-Prinzipien?",
      "answer": "Atomicity: Alles oder nichts. Consistency: Daten bleiben konsistent. Isolation: Transaktionen beeinflussen sich nicht gegenseitig. Durability: Nach erfolgreichem Abschluss bleiben Änderungen bestehen."
    },
    {
      "question": "Was ist eine User Story?",
      "answer": "Kurzbeschreibung einer Funktion aus Sicht eines Nutzers. Beispiel: „Als Nutzer möchte ich mich anmelden können, um meine Daten zu verwalten.“ Wird später in Tasks unterteilt (z.B. UI, Backend, Test)."
    },
    {
      "question": "Was ist ein Service Level Agreement (SLA)?",
      "answer": "Ein Rahmenvertrag zwischen Dienstleister und Kunde. Hier wird Qualität, Verfügbarkeit, Reaktionszeiten und Verantwortlichkeiten geregelt."
    },
    {
      "question": "Was ist Standard Operating Procedures (SOP) in Unternehmen?",
      "answer": "Standardisierte Arbeitsanweisungen in Unternehmen. Sichern gleichbleibende Qualität und helfen, Vorschriften und Prozesse korrekt einzuhalten."
    },
    {
      "question": "Was ist ITIL (Information Technology Infrastructure Library)?",
      "answer": "Framework für IT-Service-Management. Basiert auf bewährten Praktiken (Best Practices) zur effizienten Bereitstellung von IT-Services."
    },
    {
      "question": "Was ist MVP (Minimum Viable Product)?",
      "answer": "MVP ist eine frühe, funktionsfähige Version eines Produkts mit minimalem Funktionsumfang. Ziel ist es, frühzeitig Kundenfeedback in der agilen Entwicklung zu erhalten."
    },

    {
      "question": "Was ist ein kontinuierlicher Verbesserungsprozess (KVP)?",
      "answer": "Der kontinuierliche Verbesserungsprozess umfasst die laufende Optimierung von Produkten, Prozessen und Dienstleistungen innerhalb einer Organisation."
    },
    {
      "question": "Was ist Forming – Storming – Norming – Performing bei Teambildung?",
      "answer": "1. Forming (Kennenlernen)\n 2. Storming (Konflikte und Rollenklärung) \n 3. Norming (Zusammenarbeit verbessert sich) \n 4. Performing (Effektive Teamarbeit)."
    },
    {
      "question": "Was ist das V-Modell?",
      "answer": "Das V-Modell ist ein sequenzielles Vorgehensmodell, bei dem jede Entwicklungsphase eine passende Testphase zugeordnet wird. Es eignet sich besonders für Projekte mit hohen Qualitätsanforderungen."
    },
    {
      "question": "Welche IT-Support-Level gibt es?",
      "answer": "Level 1: Erster Kontakt, Ticket-Erstellung. Level 2: Fehleranalyse. Level 3: Expertenlösungen und Workarounds."
    },
    {
      "question": "Was ist Privacy by Design?",
      "answer": "Datenschutz wird von Anfang an in Systeme und Prozesse integriert."
    },
    {
      "question": "Was ist Privacy by Default?",
      "answer": "Datenschutzfreundliche Einstellungen sind standardmäßig aktiviert, ohne dass der Nutzer eingreifen muss."
    },

    {
      "question": "Was ist ein Projektstrukturplan (PSP)?",
      "answer": "Ein Projektstrukturplan zerlegt ein Projekt in einzelne Arbeitspakete. Er wird häufig als Baumdiagramm dargestellt, jedoch ohne Zeitbezug."
    },
    {
      "question": "Was ist ein Netzplan?",
      "answer": "Ein Netzplan stellt die Abhängigkeiten zwischen Vorgängen und die zeitliche Planung eines Projekts grafisch dar."
    },
    {
      "question": "Was ist ein Gesamtpuffer im Netzplan?",
      "answer": "Die Zeitspanne zwischen dem frühesten und dem spätesten möglichen Starttermin eines Vorgangs."
    },
    {
      "question": "Was ist ein freier Puffer im Netzplan?",
      "answer": "Die Zeit zwischen dem Ende eines Vorgangs und dem frühesten Beginn seines Nachfolgers, ohne diesen zu verzögern."
    },
    {
      "question": "Was ist der kritische Pfad im Netzplan?",
      "answer": "Der kritische Pfad besteht aus Vorgängen ohne Zeitpuffer. Eine Verzögerung dort verzögert das gesamte Projekt."
    },
    {
      "question": "Was ist der Unterschied zwischen klassischen und agilen Vorgehensmodellen?",
      "answer": "Klassisch: Feste Abläufe, wenig flexibel. Agil: Iterativ, flexibel, dynamisch anpassbar."
    },
    {
      "question": "Was ist ein Wasserfallmodell?",
      "answer": "Ein lineares Vorgehensmodell, bei dem jede Projektphase (z.B. Analyse, Design, Implementierung) nacheinander abgeschlossen wird."
    },
    {
      "question": "Was ist ein Spiralmodell?",
      "answer": "Ein iteratives Vorgehensmodell mit wiederholten Zyklen und integrierter Risikobewertung in jeder Phase."
    },
    {
      "question": "Warum ändern sich Anforderungen in IT-Projekten?",
      "answer": "Anforderungen ändern sich, weil Stakeholder ihre Ziele aufgrund neuer Informationen oder Änderungen in Gesetzen anpassen."
    },
    {
      "question": "Welche Folgen haben sich ändernde Anforderungen in IT-Projekten?",
      "answer": "In 56% der IT-Projekte passen die ursprünglichen Anforderungen nicht zum Endprodukt, was zu Zeit- und Budgetverschwendung führt."
    },
    {
      "question": "Was ist das Ziel von Anforderungsmanagement?",
      "answer": "Das Ziel ist es, sicherzustellen, dass die Anforderungen der internen und externen Stakeholder an das Produkt erfüllt werden."
    },
    {
      "question": "Was sind die Qualitätsmerkmale der Dokumentation von Anforderungen?",
      "answer": "Vollständig, Adäquat, Verständlich, Eindeutig, Prüfbar, Nachverfolgbar, Risikogerecht."
    },
    {
      "question": "Was sind die drei Aspekte des magischen Dreiecks des Projektmanagements?",
      "answer": "Zeit, Kosten (Ressourcen) und Qualität."
    },
    {
      "question": "Was zeichnet ein Projekt aus?",
      "answer": "Ein Projekt ist einmalig, mit klarem Ziel, abgegrenzt von anderen Vorhaben, zeitlich begrenzt, mit eigener Organisation, definiertem Team und finanziellen Abgrenzungen."
    },
    {
      "question": "Was ist ein phasenorientiertes Vorgehen im Projektmanagement?",
      "answer": "Ein phasenorientiertes Vorgehen unterteilt das Projekt in klar definierte Phasen mit Meilensteinen nach jeder Phase. Nur bei erfolgreichem Abschluss geht es weiter."
    },
    {
      "question": "Wann eignet sich das phasenorientierte Vorgehen?",
      "answer": "Es eignet sich bei stabilen, planbaren Projekten, wie z.B. beim Wasserfall- oder V-Modell."
    },
    {
      "question": "Was ist iteratives Vorgehen im Projektmanagement?",
      "answer": "Iteratives Vorgehen bedeutet, dass die Phasen des Projekts nacheinander durchlaufen werden, jedoch in mehreren Zyklen."
    },
    {
      "question": "Was ist evolutionäres Vorgehen im Projektmanagement?",
      "answer": "Evolutionäres Vorgehen ist iterativ, mit mehr Spielraum für Änderungen und Fokus auf funktionierendem Code, oft ohne umfassende Planung."
    },
    {
      "question": "Was ist das Ziel des agilen Vorgehens?",
      "answer": "Das Ziel des agilen Vorgehens ist es, mit hoher Flexibilität auf Änderungen zu reagieren, während Planung, Entwicklung und Tests oft parallel laufen."
    },
    {
      "question": "Welche Methoden gehören zum agilen Vorgehen?",
      "answer": "Beispiele sind Scrum und Kanban."
    },
    {
      "question": "Welche Phasen umfasst das agile Vorgehen?",
      "answer": "Das agile Vorgehen umfasst die Phasen Planung, Entwicklung und Test."
    },
    {
      "question": "Was sind die 4 Ebenen der Kommunikation?",
      "answer": "Die vier Ebenen der Kommunikation sind: Sachebene, Selbstkundgabe, Beziehungsebene und Appell-Ebene."
    },
    {
      "question": "Was ist die Sachebene in der Kommunikation?",
      "answer": "Die Sachebene betrifft Fakten, Daten und reine Informationen, also die Frage ‚Worum geht es?‘."
    },
    {
      "question": "Was ist die Selbstkundgabe in der Kommunikation?",
      "answer": "Die Selbstkundgabe zeigt, was der Sender über sich selbst preisgibt, wie z.B. Gefühle und Einstellungen."
    },
    {
      "question": "Was beschreibt die Beziehungsebene in der Kommunikation?",
      "answer": "Die Beziehungsebene zeigt, wie der Sender zum Empfänger steht, z.B. durch Ton, Mimik und Gestik."
    },
    {
      "question": "Was ist die Appell-Ebene in der Kommunikation?",
      "answer": "Die Appell-Ebene beschreibt, was der Sender beim Empfänger bewirken möchte, z.B. ein Wunsch oder ein Befehl."
    },
    {
      "question": "Was bedeutet Usability?",
      "answer": "Usability bedeutet, wie benutzerfreundlich ein digitales Produkt ist. Es hängt immer von der Zielgruppe ab."
    },
    {
      "question": "Was ist der Unterschied zwischen Utility und Usability?",
      "answer": "Utility beschreibt, was das Produkt kann. Usability beschreibt, wie gut man das Produkt benutzen kann."
    },
    {
      "question": "Was ist UX?",
      "answer": "UX (User Experience) ist das gesamte Erlebnis, das ein Nutzer mit einem Produkt hat. Ziel ist es, eine positive Erfahrung zu schaffen."
    },
    {
      "question": "Was ist das Ziel einer guten UX?",
      "answer": "Das Ziel einer guten UX ist es, dass der Nutzer eine positive Erfahrung macht und sich für das Produkt begeistert."
    },
    {
      "question": "Was ist eine sinnvolle Reihenfolge in der Produktplanung?",
      "answer": "Die sinnvolle Reihenfolge ist: Use case → Sketch → Wireframe → Mockup → Prototype → Produkt."
    },
    {
      "question": "Was ist wichtig bei einem UI, um eine gute UX zu erreichen?",
      "answer": "Ein konsistentes Design, Mobile First, Responsive Design, intuitive Navigation, schnelle Ladezeit, Performance und Feedback."
    },
    {
      "question": "Was ist ein API-Call?",
      "answer": "Ein API-Call ist eine Anfrage von einem Programm an eine andere Software oder einen Server, um Daten zu erhalten oder eine Aktion auszuführen."
    },
    {
      "question": "Wie viele Hauptarten von SoftwareAnforderungen an gibt es und welche sind das?",
      "answer": "Es gibt drei Hauptarten von Anforderungen: Funktionale Anforderungen, Nicht-funktionale Anforderungen und Randbedingungen."
    },
    {
      "question": "Welche funktionalen Anforderungen gibt es?",
      "answer": "Beispielsweise Benutzerschnittstellen, Architektur, Stromversorgung und Lastenbalancierung."
    },
    {
      "question": "Welche nicht-funktionalen Anforderungen gibt es?",
      "answer": "Beispielsweise Performance, Sicherheit, Benutzbarkeit, Testbarkeit, Wartbarkeit und Portabilität."
    },
    {
      "question": "Welche Randbedingungen gibt es?",
      "answer": "Beispielsweise Kosten, Marktanalyse, Prozesse, Vertrieb, Organisation und Dokumentation."
    },
    {
      "question": "Was ist Anforderungsermittlung im Software-Engineering?",
      "answer": "Anforderungsermittlung bezieht sich auf die Sammlung der Anforderungen aus verschiedenen Quellen mittels Erhebungsmethodik."
    },
    {
      "question": "Was sind die wichtigsten Schritte der Anforderungsermittlung?",
      "answer": "Die Schritte umfassen Erhebung, Dokumentation und Verwaltung der Anforderungen."
    },
    {
      "question": "Was ist die Bedeutung der Dokumentation im Anforderungsmanagement?",
      "answer": "Dokumentation sorgt dafür, dass die Anforderungen klar und nachvollziehbar festgehalten werden."
    },
    {
      "question": "Was ist die Verwaltung von Anforderungen?",
      "answer": "Verwaltung stellt sicher, dass Anforderungen validiert, priorisiert und bei Änderungen nachverfolgt werden können."
    },
    {
      "question": "Welche Erhebungsmethoden gibt es?",
      "answer": "Erhebungsmethoden sind z.B. Interviews, Kundenumfragen, Personenanalysen, Prototypen, offene und verdeckte Beobachtungen, Konkurrenzanalysen."
    },
    {
      "question": "Was versteht man unter ‚Lessons Learned‘ in einem Projekt?",
      "answer": "‚Lessons Learned‘ bezieht sich auf die Erkenntnisse und Erfahrungen, die am Ende eines Projektes gesammelt werden. Diese können sowohl positive als auch negative Aspekte umfassen und dienen dazu, aus den gemachten Erfahrungen zu lernen und zukünftige Projekte zu verbessern."
    },
    {
      "question": "Was ist das Wasserfallmodell?",
      "answer": "Ein lineares, klassisches Projektmanagementmodell mit den Phasen: Analyse, Anforderung, Entwurf, Implementierung, Testen, Wartung."
    },
    {
      "question": "Welche Nachteile hat das Wasserfallmodell?",
      "answer": "Es ist unflexibel bei Änderungen und erfordert eine vollständige Planung im Voraus."
    },
    {
      "question": "Was ist Scrum?",
      "answer": "Ein agiles Projektmanagementmodell, das flexibel auf Änderungen reagieren kann und auf Transparenz, Iterationen und Zusammenarbeit basiert."
    },
    {
      "question": "Wie unterscheidet sich Scrum vom Wasserfallmodell?",
      "answer": "Scrum ist iterativ und flexibel, während das Wasserfallmodell linear und wenig anpassbar ist."
    },
    {
      "question": "Warum gilt Scrum als agil?",
      "answer": "Weil es schnelle Anpassungen an neue Anforderungen erlaubt und regelmäßig Feedback einholt."
    },
    {
      "question": "In welcher Reihenfolge verlaufen die Phasen im Wasserfallmodell?",
      "answer": "Analyse, Anforderung, Entwurf, Implementierung, Testen, Wartung."
    },
    {
      question: "Was sind die Vorteile des V-Modells?",
      answer: "Das V-Modell bietet frühes Testen und eine klare Struktur, hat jedoch höhere Kosten und eingeschränkte Flexibilität."
    },
    {
      question: "Was ist das Spiralmodell?",
      answer: "Das Spiralmodell ist flexibel und fokussiert auf iterative Planung, aber es fehlt ein klares Endziel."
    },
    {
      question: "Was ist Scrum?",
      answer: "Scrum ist ein agiles Vorgehensmodell, das Flexibilität und Transparenz bietet, jedoch für große Teams zu komplex sein kann und hohe Disziplin erfordert."
    },
    {
      question: "Was ist ein klassisches Vorgehensmodell?",
      answer: "Klassische Vorgehensmodelle, wie das Wasserfallmodell, folgen einem festen, linearen Prozess. Dieser Prozess ist in klare Phasen unterteilt: Analyse, Entwurf, Implementierung, Testen und Wartung. Jede Phase wird nacheinander abgearbeitet, und Änderungen sind während des Prozesses nur schwer möglich."
    },
    {
      question: "Was ist ein agiles Vorgehensmodell?",
      answer: "Agile Vorgehensmodelle, wie Scrum, sind flexibler und iterativ. Sie bestehen aus kurzen, sich wiederholenden Entwicklungszyklen (Sprints), in denen regelmäßig Feedback eingeholt wird. Dies ermöglicht schnelle Anpassungen an sich ändernde Anforderungen und eine kontinuierliche Verbesserung der Software."
    },
    {
      "question": "Was bedeutet Transparenz in Scrum?",
      "answer": "Alle Projektbeteiligten haben jederzeit Einblick in den aktuellen Stand und die nächsten Schritte."
    },
    {
      question: "Was ist das Lastenheft?",
      answer: "Das Lastenheft beschreibt, **was** gemacht werden soll und enthält die Anforderungen, den Ist- und Soll-Zustand."
    },
    {
      question: "Was ist das Pflichtenheft?",
      answer: "Das Pflichtenheft beschreibt, **wie** das Lastenheft umgesetzt werden soll und wird Bestandteil des Vertrages."
    },
    {
      question: "Was sind die Merkmale eines Projektes?",
      answer: "Ein Projekt ist einmalig, hat ein klares Ziel, der Ausgang ist ungewiss und es ist zeitlich begrenzt."
    },
    {
      question: "Welche Ziele sollten in einem Projekt festgelegt werden?",
      answer: "Neben dem SMART-Prinzip sollten Projekte auch ein Kostenziel, Sachziel und Terminziel haben."
    },
    {
      question: "Welche Phasen umfasst der Software-Lebenszyklus?",
      answer: "Anforderungsanalyse, Design, Implementierung, Test, Abnahme und Wartung."
    },
    {
      question: "Was sind die Projektphasen?",
      answer: "Initialisierung, Analyse, Planung, Durchführung, Überwachen, Abschluss."
    },
    {
      question: "Was ist ein Meilenstein in einem Projekt?",
      answer: "Ein Meilenstein ist der Abschluss einer Phase und leitet eine neue Phase im Projekt ein."
    },
    {
      "question": "Welche Rollen gibt es im Scrum Framework und was sind ihre Hauptaufgaben?",
      "answer": "Im Scrum Framework gibt es drei Hauptrollen: der Product Owner, der Scrum Master und das Scrum Team. Der Product Owner ist verantwortlich für das Product Backlog, definiert die Anforderungen und stellt sicher, dass das Team an den richtigen Aufgaben arbeitet. Der Scrum Master sorgt dafür, dass Scrum korrekt umgesetzt wird und unterstützt das Team bei der Beseitigung von Hindernissen. Das Scrum Team arbeitet an den Aufgaben des Sprint Backlogs und liefert das Inkrement."
    },
    {
      "question": "Was ist das Product Backlog und wer ist dafür verantwortlich?",
      "answer": "Das Product Backlog ist eine geordnete Liste von Anforderungen, Features, Verbesserungen und Fehlerbehebungen, die das Produkt betreffen. Es wird vom Product Owner verwaltet und kontinuierlich priorisiert. Das Product Backlog enthält alle Wünsche und Anforderungen, die während der Produktentwicklung berücksichtigt werden sollen."
    },
    {
      "question": "Was ist das Sprint Backlog und wie unterscheidet es sich vom Product Backlog?",
      "answer": "Das Sprint Backlog ist eine Liste von Aufgaben, die das Scrum-Team im aktuellen Sprint umsetzen soll. Es wird während des Sprint Planning Meetings vom Team aus dem Product Backlog abgeleitet. Das Sprint Backlog ist fokussierter und umfasst nur die Aufgaben, die während des jeweiligen Sprints bearbeitet werden."
    },
    {
      "question": "Wie lange dauert ein Sprint und was passiert am Ende eines Sprints?",
      "answer": "Ein Sprint dauert normalerweise zwischen 1 und 4 Wochen. Am Ende jedes Sprints sollte ein funktionierendes Produktinkrement vorliegen, das potenziell ausgeliefert werden kann. Das Team präsentiert dieses Inkrement im Sprint Review und reflektiert den Sprint in der Sprint Retrospektive, um Verbesserungen für den nächsten Sprint zu identifizieren."
    },
    {
      "question": "Was ist das Daily Scrum und wie wird es durchgeführt?",
      "answer": "Das Daily Scrum ist ein kurzes tägliches Meeting, das maximal 15 Minuten dauert. Hier gibt das Team ein Update über den Fortschritt, bespricht, was gestern erreicht wurde, was heute geplant ist und ob es Hindernisse gibt. Ziel ist es, das Team synchron zu halten und Probleme frühzeitig zu erkennen."
    },
    {
      "question": "Was sind Stakeholder im Scrum-Framework und wie wird mit ihnen zusammengearbeitet?",
      "answer": "Stakeholder sind alle Personen oder Gruppen, die ein Interesse am Produkt oder Projekt haben. Sie können Kunden, Führungskräfte, Partner oder Endbenutzer sein. Der Scrum Master sorgt dafür, dass Stakeholder regelmäßig informiert werden, und der Product Owner kommuniziert mit den Stakeholdern, um ihre Anforderungen zu verstehen und in das Product Backlog zu integrieren."
    },
    {
      "question": "Was ist der Unterschied zwischen einem Scrum Team und einem traditionellen Entwicklungsteam?",
      "answer": "Ein Scrum Team ist selbstorganisiert, interdisziplinär und besteht aus Mitgliedern mit verschiedenen Fähigkeiten, die zusammenarbeiten, um ein Inkrement zu liefern. Im Vergleich dazu sind traditionelle Entwicklungsteams oft hierarchisch organisiert und spezialisierter in einzelnen Aufgabenbereichen."
    },
    {
      "question": "Was ist ein Inkrement in Scrum?",
      "answer": "Ein Inkrement ist ein funktionierender Teil des Produkts, der am Ende eines Sprints geliefert wird. Es muss mit den vorherigen Inkrementen kompatibel sein und sollte alle notwendigen Features und Funktionen enthalten, um für den Endnutzer nutzbar zu sein."
    },
    {
      "question": "Was ist das Sprint Goal und warum ist es wichtig?",
      "answer": "Das Sprint Goal ist ein klar definiertes Ziel für den Sprint, das die Richtung und den Fokus für das Scrum Team vorgibt. Es hilft dem Team, priorisierte Aufgaben zu bearbeiten und das Endziel zu erreichen. Ein gut formuliertes Sprint Goal stellt sicher, dass alle Teammitglieder auf dasselbe Ziel hinarbeiten."
    },
    {
      "question": "Was sind die Scrum Artefakte und welche Funktion haben sie?",
      "answer": "Die Scrum Artefakte sind: Product Backlog, Sprint Backlog und Inkrement. Das Product Backlog ist die Sammlung aller Anforderungen, das Sprint Backlog sind die Aufgaben für den aktuellen Sprint, und das Inkrement ist das Ergebnis des Sprints, ein funktionsfähiges Produkt oder ein Teil des Produkts."
    },
    {
      "question": "Was ist der Unterschied zwischen einem Scrum Master und einem traditionellen Projektmanager?",
      "answer": "Der Scrum Master ist dafür verantwortlich, Scrum zu implementieren und das Team zu unterstützen, während der traditionelle Projektmanager oft die Verantwortung für die gesamte Projektplanung, Ressourcenzuteilung und Risikomanagement übernimmt. Der Scrum Master sorgt für die Einhaltung der Scrum-Prozesse, während der Projektmanager traditionell mehr Kontrolle und Planung übernimmt."
    },
    {
      "question": "Was ist eine Sprint Retrospektive und was wird dort besprochen?",
      "answer": "Die Sprint Retrospektive ist ein Treffen am Ende jedes Sprints, bei dem das Scrum Team zusammenkommt, um den vergangenen Sprint zu reflektieren. Es werden Fragen wie: Was lief gut? Was könnte besser werden? Was können wir beim nächsten Sprint verbessern? besprochen, um kontinuierliche Verbesserung zu fördern."
    },
    {
      "question": "Wie wird im Scrum-Framework mit Änderungen umgegangen?",
      "answer": "Im Scrum-Framework wird Flexibilität gefördert. Änderungen können während des Projekts auftreten, und der Product Owner sorgt dafür, dass das Product Backlog regelmäßig aktualisiert wird, um auf neue Anforderungen oder Änderungen der Marktbedingungen zu reagieren. Scrum ist darauf ausgelegt, schnell auf Änderungen zu reagieren und Anpassungen vorzunehmen."
    },
    {
      "question": "Was ist das Definition of Done (DoD) und warum ist es wichtig?",
      "answer": "Die Definition of Done (DoD) beschreibt klare Kriterien, die festlegen, wann eine Aufgabe oder ein Inkrement als vollständig betrachtet wird. Sie ist wichtig, um sicherzustellen, dass das Team einheitliche Standards für die Qualität des Produkts hat und um Missverständnisse oder unvollständige Arbeiten zu vermeiden."
    },
    {
      "question": "Was passiert im Sprint Planning Meeting?",
      "answer": "Im Sprint Planning Meeting wird das Sprint Goal definiert, und das Team plant, welche Aufgaben aus dem Product Backlog in den aktuellen Sprint übernommen werden. Das Sprint Backlog wird erstellt, und der Teamaufwand für jede Aufgabe wird geschätzt. Dabei wird auch der Umfang und die Ressourcen des Sprints berücksichtigt."
    },
    {
      "question": "Was macht Change Request Management?",
      "answer": "Change Request Management plant, steuert und setzt Änderungen im Projekt um, um sicherzustellen, dass sie erfolgreich und kontrolliert durchgeführt werden."
    },
    {
      "question": "Nennen Sie mir klassische Vorgehensmodelle der Softwareentwicklung.",
      "answer": "Wasserfallmodell , V-Modell , Spiralmodell"
    },
    {
      "question": "Nennen Sie mir agile Vorgehensmodelle.",
      "answer": "Scrum , Kanban,  Extreme,  Programming (XP)"
    }
  ],
  "Analyse / test": [
    {
      "question": "Was ist Print-Debugging?",
      "answer": "Es wird Ausgabe Funktionen verwendet (z.b console.log(), print()), um den Programmablauf zu verfolgen und Fehler zu identifizieren."
    },
    {
      "question": "Was ist E2E-Tests (End-to-End-Tests)?",
      "answer": "End-to-End-Tests (E2E-Tests) sind eine Form von Tests, die das gesamte System als Ganzes testen. Ziel ist es, sicherzustellen, dass alle Komponenten der Software zusammenarbeiten, wie sie sollten, und die gesamte Anwendung aus der Sicht des Endnutzers funktioniert"
    },

    {
      "question": "Welche drei Analyseverfahren gibt es, um Umfang, Voraussetzungen, Dauer und Kosten einer Entwicklung zu ermitteln?",
      "answer": "Die drei Analyseverfahren sind: 1. Systemanalyse, 2. Prozessanalyse, 3. Datenanalyse."
    },
    {
      "question": "Was ist ein Performance-Test?",
      "answer": "Testet Software unter realistischen und extremen Bedingungen."
    },
    {
      "question": "Was ist eine Sandbox?",
      "answer": "Eine Sandbox ist ein isolierter Bereich, in dem Software sicher getestet werden kann, ohne das Gesamtsystem zu gefährden."
    },
    {
      "question": "Was ist ein Extremwerttest?",
      "answer": "Ein Test mit Werten außerhalb der spezifizierten Grenzen zur Erkennung von Schwachstellen und Fehlern."
    },
    {
      "question": "Was ist ein Last- und Performancetest?",
      "answer": "Ein Test, der das Verhalten einer Software unter Last und Dauerbelastung prüft."
    },
    { "question": "Testarten: Was wird beim Unit-Test getestet?", "answer": "Einzelne Funktionen oder Klassen isoliert." },
    { "question": "Testarten: Was wird beim Integrationstest geprüft?", "answer": "Zusammenarbeit mehrerer Komponenten." },
    { "question": "Testarten: Was wird beim Systemtest geprüft?", "answer": "Das gesamte System als Ganzes." },
    { "question": "Testarten: Wer führt normalerweise den Akzeptanztest durch?", "answer": "Der Kunde." },
    { "question": "Testmethoden: Was ist ein Blackbox-Test?", "answer": "Test ohne Kenntnis des Codes, Fokus auf Eingaben und Ausgaben." },
    { "question": "Testmethoden: Was ist ein Whitebox-Test?", "answer": "Test mit Kenntnis des Codes, Prüfung der Logik und Bedingungen." },
    {
      "question": "Was ist der Unterschied zwischen Whitebox-Tests und Blackbox-Tests?",
      "answer": "Whitebox-Tests überprüfen die Funktionsweise mithilfe des Quellcodes. Blackbox-Tests prüfen nur die nach außen sichtbaren Funktionen."
    },
    {
      "question": "Was ist der Unterschied zwischen Whitebox-Tests und Blackbox-Tests?",
      "answer": "Whitebox-Tests überprüfen die Funktionsweise des Quellcodes, während Blackbox-Tests die äußeren, sichtbaren Funktionen ohne Quellcode überprüfen."
    },
    {
      question: "Warum ist die Testphase wichtig?",
      answer: "Das Testen stellt sicher, dass die Software fehlerfrei funktioniert und den Anforderungen entspricht."
    },
    {
      question: "Was gehört zur Testdokumentation?",
      answer: "Die Testdokumentation umfasst die Testplanung, Festlegung der Testfälle, Auswahl der Tests und Testergebnisse. Sie definiert Strategien, Ziele und Zeitrahmen für Tests, beschreibt die Testfälle, bestimmt die Art der Tests und erfasst die Testergebnisse, einschließlich festgestellter Fehler oder Bestätigungen."
    },
    {
      question: "Was ist Testplanung in der Testdokumentation?",
      answer: "Die Testplanung definiert die Strategien, Ziele und Zeitrahmen für die Tests. Sie legt fest, wie und wann Tests durchgeführt werden, um die Qualität der Software sicherzustellen."
    },

    {
      question: "Was ist die Festlegung der Testfälle in der Testdokumentation?",
      answer: "Die Festlegung der Testfälle umfasst eine detaillierte Beschreibung der Szenarien und Erwartungen, die während des Tests überprüft werden sollen, um sicherzustellen, dass die Software alle Anforderungen erfüllt."
    },
    {
      question: "Was versteht man unter der Auswahl der Tests in der Testdokumentation?",
      answer: "Die Auswahl der Tests bestimmt, welche Arten von Tests durchgeführt werden, wie z.B. Unit Tests, Integrationstests oder Systemtests, um verschiedene Aspekte der Software zu überprüfen."
    },
    {
      question: "Was gehört zu den Testergebnissen in der Testdokumentation?",
      answer: "Die Testergebnisse beinhalten die Erfassung der Ergebnisse der Tests, einschließlich festgestellter Fehler, Probleme oder Bestätigungen, dass die Software den Anforderungen entspricht."
    },
    {
      question: "Was ist Black-Box-Testing?",
      answer: "Testen der Funktionalität ohne Kenntnis des Quellcodes."
    },
    {
      question: "Was ist White-Box-Testing?",
      answer: "Testen basierend auf dem Quellcode und internen Abläufen."
    },
    {
      question: "Was ist ein Schreibtischtest?",
      answer: "Manuelles Durchspielen des Programms, z. B. mit Struktogrammen."
    },
    {
      question: "Was ist ein Unit-Test?",
      answer: "Test einzelner Funktionen oder Module."
    },
    {
      question: "Was ist ein Integrationstest?",
      answer: "Überprüfung des Zusammenspiels mehrerer Module."
    },
    {
      question: "Was ist ein Systemtest?",
      answer: "Test des gesamten Systems in einer realistischen Testumgebung."
    },
    {
      question: "Was ist ein End-to-End-Test?",
      answer: "Simulation kompletter Benutzerworkflows."
    },
    {
      question: "Was ist ein Regressionstest?",
      answer: "Sicherstellen, dass bestehende Funktionen nach Änderungen weiterhin korrekt arbeiten."
    },
    {
      question: "Was ist ein Performance-Test?",
      answer: "Test der Systemleistung unter Last."
    },
    {
      question: "Was ist ein Security-Test?",
      answer: "Überprüfung des Systems auf Sicherheitslücken."
    },

    {
      "question": "Was ist der Vorteil von automatisierten Tests?",
      "answer": "Frühe Fehlererkennung, erhöhte Code-Stabilität und kontinuierliche Qualitätssicherung."
    },
    {
      "question": "Drei Methoden zur Anforderungsanalyse",
      "answer":
        "Interview: Austausch mit dem Kunden  \nWorkshops: Gemeinsames Erarbeiten von Anforderungen  \nPrototyp: Ein frühes Testmodell zur Validierung von Anforderungen."
    },
    {
      "question": "Was ist TDD?",
      "answer": "Test Driven Development (TDD) ist eine Methode, bei der zunächst automatisierte Tests geschrieben werden, bevor die eigentliche Programmierung erfolgt."
    },
    {
      "question": "Was ist der Unterschied zwischen Major, Minor und Patch?",
      "answer": "Major: Eine neue Version mit signifikanten Änderungen \nMinor: Neue Features und kleinere Erweiterungen  \nPatch: Fehlerbehebungen und kleinere Updates"
    },
    {
      "question": "Was ist eine Nutzwertanalyse?",
      "answer": "Hilft bei Entscheidungen, indem Kriterien festgelegt und gewichtet werden. Anschließend werden Punkte an Kandidaten vergeben und durch die Berechnung ergibt sich der Gewinner."
    },
    {
      "question": "Was ist Lifecycle-Management?",
      "answer": "Beschreibt die Verwaltung des Lebenszyklus von Software, Hardware oder Systemen, von der Einführung bis zur Entsorgung."
    },
    {
      "question": "Was ist ein CRM-System?",
      "answer": "Customer Relationship Management (CRM) ist ein System, das hilft, Kundenbeziehungen, Verkaufsprozesse und Marketing zu optimieren."
    },
    {
      "question": "Was ist ein CMS-System?",
      "answer": "Content Management System (CMS) ist ein System, mit dem man schnell Webseiten erstellen kann, ohne tiefgehende technische Kenntnisse zu haben."
    },
    {
      "question": "Was bedeutet CI (Continuous Integration)?",
      "answer": "CI (Continuous Integration): Bei einer Codeänderung wird automatisch der Build durchgeführt und automatisierte Tests ausgeführt."
    },
    {
      "question": "Was bedeutet CD (Continuous Delivery/Deployment)?",
      "answer": "CD (Continuous Delivery/Deployment): Nach der CI wird automatisch ausgerollt in der Produktionsumgebung."
    },
    {
      "question": "Was ist Staging Environment bei einer Testumgebung?",
      "answer": "Das Staging Environment simuliert reale Bedingungen und dient als Testumgebung zwischen Entwicklung und Produktion."
    },
    {
      "question": "Was ist ein Komponententest?",
      "answer": "Test einzelner Module eines Systems."
    },
    {
      "question": "Was ist ein Funktionstest?",
      "answer": "Testet Funktionen aus der Sicht des Anwenders."
    },
    {
      "question": "Was ist ein Integrationstest?",
      "answer": "Testet das Zusammenspiel mehrerer Komponenten, Module oder Systeme, um sicherzustellen, dass sie miteinander arbeiten."
    },
    {
      "question": "Was ist ein Code Review?",
      "answer": "Überprüfung des Quellcodes durch Kollegen auf Verständlichkeit, Wartbarkeit, Funktionalität und Einhaltung von Standards."
    },
    {
      "question": "Was ist eine Anweisungsüberdeckung (Statement Coverage)?",
      "answer": "Sicherstellt, dass jede Codezeile während des Tests mindestens einmal ausgeführt wird."
    },
    {
      "question": "Was ist Code Coverage?",
      "answer": "Code Coverage misst, wie viel Prozent des Quellcodes während eines Tests tatsächlich ausgeführt wird. Verschiedene Arten: Anweisungsüberdeckung, Zweigüberdeckung, etc."
    },
    {
      "question": "Was ist Branch Coverage (Zweigüberdeckung)?",
      "answer": "Branch Coverage prüft, ob alle möglichen Ausgänge (true/false) von Verzweigungen wie if, else, switch mindestens einmal durchlaufen wurden."
    },
    {
      "question": "Was ist ein Unit Test?",
      "answer": "Test einzelner Komponenten oder Methoden isoliert. Verwendet das FIRST-Prinzip: Fast, Independent, Repeatable, Self-validating, Timely."
    },
    {
      "question": "Was sind funktionale Anforderungen?",
      "answer": "Funktionale Anforderungen beschreiben, was ein System tun soll (z.B. Benutzer kann sich einloggen)."
    },
    {
      "question": "Was sind nicht-funktionale Anforderungen?",
      "answer": "Nicht-funktionale Anforderungen beschreiben, wie ein System arbeitet (z.B. Performance, Sicherheit, Zuverlässigkeit)."
    },
    {
      "question": "Was sind Randbedigung(Rahmenbedigung) in der IT?",
      "answer": "Sie beschreiben äußere Einschränkungen und Vorgaben, unter denen das System entwickelt oder betrieben werden muss. Diese können technologisch, organisatorisch, rechtlich oder wirtschaftlich "
    },
    {
      "question": "Was ist ein statisches Testverfahren?",
      "answer": "Ein statisches Testverfahren überprüft den Code ohne Ausführung, z.B. durch Code-Reviews oder Analysen."
    },
    {
      "question": "Was ist ein dynamisches Testverfahren?",
      "answer": "Ein dynamisches Testverfahren führt den Code aus, um das Verhalten des Systems unter realen Bedingungen zu testen."
    },
    {
      "question": "Was ist der Extremwerttest?",
      "answer": "Testet Grenzwerte (z.B. maximale/minimale Eingaben), um Schwachstellen zu erkennen."
    },
    {
      "question": "Was sind Äquivalenzklassen bei Testen?",
      "answer": "Eingabewerte werden in Gruppen (Klassen) mit ähnlichem Verhalten eingeteilt. Eine Eingabe pro Klasse genügt für effizientes Testen."
    },
    {
      "question": "Was ist ein Penetrationstest?",
      "answer": "Ein Penetrationstest simuliert gezielte Angriffe, um Schwachstellen in IT-Systemen aufzudecken."
    }
  ],
  "KI": [
    {
      "question": "Was ist eine schwache KI?",
      "answer": "Eine schwache KI ist auf eine bestimmte Aufgabe spezialisiert, z.B. Sprachassistenten oder Chatbots."
    },
    {
      "question": "Was ist eine starke KI?",
      "answer": "Eine starke KI kann wie ein Mensch denken, verstehen und flexibel in verschiedenen Bereichen handeln – sie existiert noch nicht vollständig."
    },
    {
      "question": "Was ist ein neuronales Netzwerk?",
      "answer": "Ein neuronales Netzwerk ist ein KI-Modell, das vom Aufbau des menschlichen Gehirns inspiriert ist und Informationen in Schichten verarbeitet."
    },
    {
      "question": "Was ist ein LLM (Large Language Model)?",
      "answer": "Ein LLM ist ein großes Sprachmodell, das mithilfe riesiger Textmengen trainiert wurde, um natürliche Sprache zu verstehen und zu erzeugen."
    },
    {
      "question": "Was ist Supervised Learning?",
      "answer": "Beim Supervised Learning lernt die KI aus Trainingsdaten mit den richtigen Antworten (Labels)."
    },
    {
      "question": "Was ist Unsupervised Learning?",
      "answer": "Beim Unsupervised Learning lernt die KI ohne vorgegebene Antworten, sie erkennt Muster oder Gruppen in den Daten."
    },
    {
      "question": "Was ist Self-Supervised Learning?",
      "answer": "Beim Self-Supervised Learning erzeugt die KI ihre eigenen Trainingslabels aus den Daten, um daraus zu lernen."
    },
    {
      "question": "Was ist Reinforcement Learning?",
      "answer": "Beim Reinforcement Learning lernt die KI durch Belohnung oder Bestrafung – sie wird belohnt, wenn sie etwas richtig macht."
    },
    {
      "question": "Was ist der Unterschied zwischen Supervised und Unsupervised Learning?",
      "answer": "Supervised Learning verwendet beschriftete Daten, während Unsupervised Learning Muster in unbeschrifteten Daten sucht."
    },
    {
      "question": "Welches KI-Lernverfahren nutzt Belohnung als Feedback?",
      "answer": "Reinforcement Learning nutzt Belohnung als Feedback, um zu lernen."
    },
    {
      "question": "Welche Lernmethode nutzt beschriftete Daten (Labels)?",
      "answer": "Supervised Learning nutzt beschriftete Daten."
    },
    {
      "question": "Welche Lernmethode findet Muster ohne Labels?",
      "answer": "Unsupervised Learning findet Muster ohne vorgegebene Labels."
    },
    {
      "question": "Was bedeutet Künstliche Intelligenz (KI)?",
      "answer": "Künstliche Intelligenz ist die Fähigkeit von Maschinen, Aufgaben zu erledigen, die normalerweise menschliche Intelligenz erfordern."
    },
    {
      "question": "Wo wird KI im Alltag eingesetzt?",
      "answer": "Zum Beispiel in Sprachassistenten, Übersetzern, Empfehlungen in Apps, Gesichtserkennung oder Navigation."
    },
    {
      "question": "Was ist ein KI-Modell?",
      "answer": "Ein KI-Modell ist ein trainiertes System, das aus Daten gelernt hat und Vorhersagen oder Entscheidungen treffen kann."
    },
    {
      "question": "Was braucht man, um eine KI zu trainieren?",
      "answer": "Man braucht viele Daten, Rechenleistung und ein Lernverfahren (z.B. ein neuronales Netzwerk)."
    },
    {
      "question": "Was ist ein Datensatz in der KI?",
      "answer": "Ein Datensatz ist eine große Sammlung von Informationen, mit denen die KI trainiert wird."
    },
    {
      "question": "Was ist Bias (Verzerrung) in der KI?",
      "answer": "Bias bedeutet, dass eine KI Vorurteile zeigt, weil sie mit unfairen oder einseitigen Daten trainiert wurde."
    },
    {
      "question": "Warum ist Ethik in der KI wichtig?",
      "answer": "Weil KI faire Entscheidungen treffen und keine Menschen benachteiligen soll."
    },
    {
      "question": "Was ist ein Beispiel für eine gefährliche Nutzung von KI?",
      "answer": "Deepfakes oder automatisierte Überwachung können missbraucht werden."
    },
    {
      "question": "Was ist Explainable AI (erklärbare KI)?",
      "answer": "Das ist eine KI, deren Entscheidungen für Menschen verständlich erklärt werden können."
    },
    {
      "question": "Was ist ein Chatbot?",
      "answer": "Ein Chatbot ist ein Programm, das mit Menschen über Text oder Sprache kommuniziert – oft mit KI."
    },
    {
      "question": "Wie kann man KI verbessern?",
      "answer": "Durch bessere Daten, mehr Training, gute Tests und faire Algorithmen."
    },
    {
      "question": "Was ist eine Trainingsphase bei KI?",
      "answer": "In der Trainingsphase lernt die KI aus Beispielen, wie sie Aufgaben lösen kann."
    },
    {
      "question": "Kann KI kreativ sein?",
      "answer": "Ja, zum Beispiel bei der Bilderzeugung, Musik oder Texten – aber sie basiert auf gelernten Mustern."
    },
    {
      "question": "Was ist ein Prompt bei LLMs?",
      "answer": "Ein Prompt ist die Eingabe, mit der man ein Sprachmodell wie ChatGPT anweist, etwas zu tun."
    },
    {
      "question": "Wie unterscheidet sich eine klassische Software von KI?",
      "answer": "Klassische Software folgt festen Regeln, KI kann aus Daten lernen und eigene Lösungen finden."
    },
    {
      "question": "Wie lässt sich KI in Netzwerken nutzen?",
      "answer": "Für Anomalieerkennung, Sicherheitsüberwachung oder Netzwerkoptimierung."
    },
    {
      "question": "Warum ist Datenvorverarbeitung wichtig für KI?",
      "answer": "Weil saubere und einheitliche Daten die Grundlage für ein gutes Modell sind."
    },
    {
      "question": "Was ist ein Training-Set und was ein Test-Set?",
      "answer": "Das Training-Set dient zum Lernen, das Test-Set zur Überprüfung der Leistung des Modells."
    },
    {
      "question": "Welche rechtlichen Aspekte muss man bei KI-Projekten beachten?",
      "answer": "Datenschutz (DSGVO), Urheberrecht und ethische Grundsätze."
    },
    {
      "question": "Was ist ein AI-Workflow?",
      "answer": "Ein Ablaufplan, der Schritte wie Datensammlung, Modelltraining, Test und Deployment umfasst."
    },
    {
      "question": "Wie kann man ein KI-Modell in eine Anwendung integrieren?",
      "answer": "Über eine API oder durch direkte Einbindung in den Code als Bibliothek."
    },
    {
      "question": "Was bedeutet Modell-Feintuning?",
      "answer": "Ein bereits trainiertes Modell wird mit spezifischen Daten weiter angepasst."
    },
    {
      "question": "Was ist ein neuronales Netzwerk?",
      "answer": "Ein neuronales Netzwerk ist ein KI-Modell, das aus vielen Schichten von Neuronen besteht und Muster in Daten erkennt."
    },
    {
      "question": "Aus welchen Schichten besteht ein neuronales Netzwerk?",
      "answer": "Aus Eingabeschicht, versteckten Schichten (Hidden Layers) und Ausgabeschicht."
    },
    {
      "question": "Was ist der Input Layer in einem neuronalen Netzwerk?",
      "answer": "Der Input Layer ist die Eingangsschicht, in der die Daten ins Netzwerk eingespeist werden."
    },
    {
      "question": "Welche Aufgabe hat der Input Layer?",
      "answer": "Er nimmt die Rohdaten entgegen und leitet sie an die nächste Schicht weiter."
    },
    {
      "question": "Was ist ein Beispiel für Eingabedaten im Input Layer?",
      "answer": "Zum Beispiel Pixelwerte eines Bildes oder Zahlen aus einer Tabelle."
    },
    {
      "question": "Was ist der Hidden Layer?",
      "answer": "Der Hidden Layer ist die Zwischenschicht, die die eigentliche Verarbeitung der Daten übernimmt."
    },
    {
      "question": "Warum heißt er Hidden Layer?",
      "answer": "Weil seine Berechnungen für außenstehende Nutzer nicht direkt sichtbar sind."
    },
    {
      "question": "Was passiert im Hidden Layer?",
      "answer": "Die Daten werden mit Gewichtungen und Aktivierungsfunktionen verarbeitet."
    },
    {
      "question": "Kann es mehrere Hidden Layers geben?",
      "answer": "Ja, in tiefen neuronalen Netzwerken gibt es oft viele Hidden Layers – daher der Begriff Deep Learning."
    },
    {
      "question": "Wie funktioniert ein neuronales Netzwerk?",
      "answer": "Ein neuronales Netzwerk besteht aus vielen Neuronen, die in Schichten organisiert sind. Jedes Neuron bekommt Eingaben, prüft deren Stärke und wird aktiviert, wenn sie stark genug sind. Dann gibt es ein Signal an die nächste Schicht weiter. So wandern die Informationen Schicht für Schicht bis zur letzten Schicht – dort wird schließlich das Ergebnis berechnet."
    },
    {
      "question": "Wie funktioniert die Gewichtung von Eingaben in einem neuronalen Netzwerk?",
      "answer": "Jeder Eingang zu einem Neuron hat ein eigenes Gewicht. Dieses Gewicht bestimmt, wie stark die jeweilige Eingabe das Neuron beeinflusst. Das Neuron summiert alle gewichteten Eingaben. Wird dabei ein bestimmter Schwellwert überschritten, wird das Neuron aktiviert und gibt ein Signal weiter."
    },
    {
      "question": "Was ist der Output Layer?",
      "answer": "Der Output Layer gibt das Ergebnis der Verarbeitung zurück, z.B. eine Vorhersage oder Klassifikation."
    },
    {
      "question": "Was macht der Output Layer?",
      "answer": "Er fasst alle Berechnungen zusammen und liefert das finale Ergebnis des Netzwerks."
    },
    {
      "question": "Wie viele Neuronen hat der Output Layer?",
      "answer": "Das hängt vom Problem ab – z.B. 1 Neuron für Ja/Nein oder mehrere für Klassen bei Klassifikationen."
    },
    {
      "question": "Was ist die Aktivierungsfunktion in einem neuronalen Netzwerk?",
      "answer": "Die Aktivierungsfunktion entscheidet, ob ein Neuron ein Signal weitergibt. Sie verarbeitet die gewichtete Summe der Eingaben und gibt z.B. 0 oder 1 aus oder einen Wert dazwischen."
    },
    {
      "question": "Wie lernt ein neuronales Netzwerk?",
      "answer": "Es passt die Gewichte der Verbindungen zwischen Neuronen an, um den Fehler bei der Vorhersage zu verringern. Das passiert durch viele Wiederholungen mit Trainingsdaten."
    },
    {
      "question": "Was bedeutet eine Epoche beim Training eines neuronalen Netzwerks?",
      "answer": "Eine Epoche ist ein vollständiger Durchlauf aller Trainingsdaten durch das Netzwerk."
    },
    {
      "question": "Wie wird der Fehler im neuronalen Netzwerk gemessen?",
      "answer": "Mit einer sogenannten Verlustfunktion (Loss Function), die angibt, wie weit die Ausgabe vom gewünschten Ergebnis abweicht."
    },
    {
      "question": "Warum bestehen neuronale Netzwerke aus mehreren Schichten?",
      "answer": "Jede Schicht kann unterschiedliche Merkmale in den Daten erkennen. So können komplexe Muster Schritt für Schritt gelernt werden."
    },
    {
      "question": "Wie hängen Input, Hidden und Output Layer zusammen?",
      "answer": "Sie sind durch Gewichte verbunden und geben die Daten schrittweise von Schicht zu Schicht weiter."
    },
    {
      "question": "Welche Rolle spielen die Gewichte zwischen den Layern?",
      "answer": "Sie bestimmen, wie stark ein Wert von einem Neuron das nächste beeinflusst."
    },
    {
      "question": "Welche Funktion wird in den Neuronen verwendet?",
      "answer": "Aktivierungsfunktionen wie ReLU, Sigmoid oder Tanh bestimmen, ob ein Neuron aktiviert wird."
    },
    {
      "question": "Warum braucht man Hidden Layers?",
      "answer": "Weil sie komplexe Muster und Zusammenhänge in den Daten erkennen können."
    },
    {
      "question": "Was passiert, wenn es keine Hidden Layer gibt?",
      "answer": "Dann ist das Netzwerk sehr einfach und kann keine komplexen Muster lernen."
    },
    {
      "question": "Was passiert in den Neuronen eines neuronalen Netzwerks?",
      "answer": "Jedes Neuron verrechnet Eingabewerte mit Gewichtungen und wendet eine Aktivierungsfunktion an."
    },
    {
      "question": "Was ist eine Aktivierungsfunktion?",
      "answer": "Eine Funktion, die entscheidet, ob ein Neuron 'aktiviert' wird, z.B. ReLU oder Sigmoid."
    },
    {
      "question": "Wie lernt ein neuronales Netzwerk?",
      "answer": "Durch Training mit Daten: Es passt die Gewichte an, um Fehler zu minimieren."
    },
    {
      "question": "Wie wird der Fehler im Netzwerk gemessen?",
      "answer": "Mit einer sogenannten Verlustfunktion (Loss Function)."
    },
    {
      "question": "Was ist Backpropagation?",
      "answer": "Ein Verfahren, mit dem der Fehler rückwärts durchs Netzwerk fließt, um die Gewichte zu korrigieren."
    },
    {
      "question": "Was bewirken die Gewichtungen im neuronalen Netzwerk?",
      "answer": "Sie bestimmen, wie stark ein Eingangswert die Ausgabe beeinflusst."
    },
    {
      "question": "Was ist ein Epoch im Training eines neuronalen Netzwerks?",
      "answer": "Eine vollständige Durchlauf aller Trainingsdaten durch das Netzwerk."
    },
    {
      "question": "Wofür kann ein neuronales Netzwerk eingesetzt werden?",
      "answer": "Zum Beispiel für Spracherkennung, Bilderkennung, Textverarbeitung oder Vorhersagen."
    },
    {
      "question": "Was ist der 'Task' in einem Prompt?",
      "answer": "Der Task beschreibt die konkrete Aufgabe, die die KI ausführen soll."
    },
    {
      "question": "Was bedeutet 'Rolle' in einem Prompt?",
      "answer": "Die Rolle gibt vor, in welcher Funktion die KI antworten soll, z.B. als Lehrer oder Entwickler."
    },
    {
      "question": "Was ist der 'Kontext' in einem Prompt?",
      "answer": "Der Kontext liefert Hintergrundwissen oder Rahmenbedingungen zur Aufgabe."
    },
    {
      "question": "Wofür steht das 'Output-Format' im Prompt?",
      "answer": "Das Output-Format beschreibt, wie die Antwort aussehen soll, z.B. als Liste, Tabelle oder JSON."
    },
    {
      "question": "Was ist der Hauptunterschied zwischen Deep Learning und traditionellem maschinellen Lernen?",
      "answer": "Der Hauptunterschied besteht darin, dass Deep Learning auf neuronalen Netzwerken basiert und automatisch Merkmale aus Rohdaten lernt, während traditionelles maschinelles Lernen oft manuelle Feature-Extraktion erfordert."
    },
    {
      "question": "Warum nennt man Deep Learning 'Deep'?",
      "answer": "Es wird 'Deep' genannt, weil es auf Netzwerken mit vielen Schichten basiert, die es dem Modell ermöglichen, komplexe Muster und Hierarchien in den Daten zu lernen."
    },
    {
      "question": "Was sind die Eingabeschichten in einem Deep Learning Modell?",
      "answer": "Die Eingabeschicht ist die erste Schicht in einem neuronalen Netzwerk, die die Rohdaten empfängt und an die folgenden Schichten weiterleitet."
    },
    {
      "question": "Was ist eine verborgene Schicht in einem Deep Learning Netzwerk?",
      "answer": "Verborgene Schichten sind Zwischenebenen in einem neuronalen Netzwerk, die die Eingabedaten verarbeiten und abstrahierte Merkmale lernen."
    },
    {
      "question": "Was ist eine Ausgabeschicht in einem neuronalen Netzwerk?",
      "answer": "Die Ausgabeschicht gibt die Vorhersage des neuronalen Netzwerks aus, basierend auf den Berechnungen der vorherigen Schichten."
    },
    {
      "question": "Was ist ein Gewicht in einem neuronalen Netzwerk?",
      "answer": "Ein Gewicht bestimmt die Stärke des Zusammenhangs zwischen den Eingaben und den Neuronen eines neuronalen Netzwerks und wird während des Trainings angepasst."
    },
    {
      "question": "Was ist ein Bias in einem neuronalen Netzwerk?",
      "answer": "Ein Bias ist ein zusätzlicher Parameter in jedem Neuron, der es dem Modell ermöglicht, die Aktivierung zu verschieben, um eine genauere Vorhersage zu treffen."
    },
    {
      "question": "Was ist die Aktivierungsfunktion in einem neuronalen Netzwerk?",
      "answer": "Eine Aktivierungsfunktion bestimmt, ob ein Neuron aktiviert wird oder nicht und hilft dabei, Nichtlinearität in das Modell zu bringen, was es leistungsfähiger macht."
    },
    {
      "question": "Warum sind Aktivierungsfunktionen wie ReLU oder Sigmoid wichtig?",
      "answer": "Aktivierungsfunktionen wie ReLU oder Sigmoid ermöglichen es dem neuronalen Netzwerk, komplexe, nichtlineare Beziehungen in den Daten zu lernen."
    },
    {
      "question": "Was ist Overfitting in Deep Learning?",
      "answer": "Overfitting tritt auf, wenn ein Modell zu gut auf die Trainingsdaten passt und nicht generalisierbar ist, was zu einer schlechten Leistung auf neuen, ungesehenen Daten führt."
    },
    {
      "question": "Was ist Underfitting in Deep Learning?",
      "answer": "Underfitting tritt auf, wenn ein Modell nicht in der Lage ist, die Muster in den Trainingsdaten zu erfassen, weil es zu einfach oder ungenau ist."
    },
    {
      "question": "Wie kann man Overfitting in Deep Learning vermeiden?",
      "answer": "Man kann Overfitting vermeiden, indem man Regularisierungstechniken wie Dropout, Datenaugmentation oder die Verwendung eines Validierungsdatensatzes anwendet."
    },
    {
      "question": "Was ist die Rolle der Lernrate in Deep Learning?",
      "answer": "Die Lernrate bestimmt, wie schnell oder langsam ein Modell während des Trainings seine Gewichtungen anpasst. Eine zu hohe Lernrate kann zu instabilen Ergebnissen führen, während eine zu niedrige den Lernprozess verlangsamt."
    },
    {
      "question": "Was ist Gradient Descent im Deep Learning?",
      "answer": "Gradient Descent ist ein Optimierungsverfahren, das verwendet wird, um die Gewichte eines neuronalen Netzwerks so zu aktualisieren, dass der Fehler (Loss) minimiert wird."
    },
    {
      "question": "Was ist der Unterschied zwischen Mini-Batch und Stochastic Gradient Descent?",
      "answer": "Stochastic Gradient Descent (SGD) verwendet eine einzelne Datenprobe, um die Gewichtungen zu aktualisieren, während Mini-Batch Gradient Descent eine kleinere Gruppe von Datenproben verwendet, um den Durchschnittsfehler zu berechnen."
    },
    {
      "question": "Was ist eine Epoch im Deep Learning?",
      "answer": "Eine Epoche bezeichnet einen vollständigen Durchlauf des gesamten Trainingsdatensatzes durch das neuronale Netzwerk während des Trainingsprozesses."
    },
    {
      "question": "Was sind Hyperparameter im Deep Learning?",
      "answer": "Hyperparameter sind die Parameter, die vor dem Training des Modells festgelegt werden, wie z. B. die Anzahl der Schichten, Lernrate oder Batch-Größe."
    },
    {
      "question": "Was ist ein Batch in Deep Learning?",
      "answer": "Ein Batch ist eine Gruppe von Trainingsdaten, die zusammen in einem Schritt durch das Netzwerk verarbeitet werden. Die Batch-Größe gibt an, wie viele Datenpunkte in einem Batch enthalten sind."
    },
    {
      "question": "Warum ist Datenvorverarbeitung wichtig im Deep Learning?",
      "answer": "Datenvorverarbeitung ist wichtig, um die Eingabedaten zu bereinigen, zu normalisieren oder zu transformieren, was die Genauigkeit und Effizienz des Modells verbessert."
    },
    {
      "question": "Was ist ein Testdatensatz im Deep Learning?",
      "answer": "Ein Testdatensatz ist eine Sammlung von Daten, die während des Trainings nicht verwendet wird, sondern dazu dient, die Leistung des Modells nach dem Training zu evaluieren."
    },
    {
      "question": "Was bedeutet 'Cross-Validation' im Deep Learning?",
      "answer": "Cross-Validation ist eine Technik, bei der der Trainingsdatensatz in mehrere Teilmengen unterteilt wird, um das Modell auf verschiedenen Datensätzen zu validieren und die Leistung zu überprüfen."
    },
    {
      "question": "Was ist ein Verlustfunktion (Loss Function)?",
      "answer": "Die Verlustfunktion misst die Differenz zwischen der tatsächlichen und der vom Modell vorhergesagten Ausgabe. Ziel ist es, den Verlust während des Trainings zu minimieren."
    },
    {
      "question": "Was ist eine Batch Normalization im Deep Learning?",
      "answer": "Batch Normalization ist eine Technik, die verwendet wird, um die Eingaben jeder Schicht zu normalisieren, was das Training stabilisiert und beschleunigt."
    },
    {
      "question": "Was ist ein Deep Learning Framework?",
      "answer": "Ein Deep Learning Framework ist eine Softwarebibliothek wie TensorFlow oder PyTorch, die Entwicklern hilft, neuronale Netzwerke zu erstellen, zu trainieren und zu testen."
    }
  ],
  "SQL und DB": [
    {
      "question": "Was ist ein Key-Value-Store?",
      "answer": "Ein Key-Value-Store ist eine Datenbank, die Daten als Schlüssel-Wert-Paare speichert. Jede gespeicherte Information hat einen eindeutigen Schlüssel und einen zugehörigen Wert. Diese Art von Datenbank eignet sich besonders für schnelle Lese- und Schreiboperationen und ist einfach skalierbar."
    },
    {
      "question": "Was ist eine dokumentenorientierte Datenbank?",
      "answer": "Eine dokumentenorientierte Datenbank speichert Daten in Form von Dokumenten, häufig im JSON-, BSON- oder XML-Format. Jedes Dokument ist ein eigenständiges Datenelement, das eine flexible Struktur hat, was bedeutet, dass nicht alle Dokumente die gleiche Struktur haben müssen. Diese Datenbanken eignen sich besonders gut für unstrukturierte und semi-strukturierte Daten."
    },
    {
      "question": "Was ist eine spaltenorientierte Datenbank?",
      "answer": "Eine spaltenorientierte Datenbank speichert Daten in Spalten statt in Zeilen. Jede Spalte wird separat gespeichert und optimiert, um schnelle Leseoperationen für große Mengen von Daten zu ermöglichen. Diese Art von Datenbank ist besonders nützlich für analytische Anwendungen, bei denen häufig nur ein Teil der Daten benötigt wird."
    },
    {
      "question": "Was ist eine Graphdatenbank?",
      "answer": "Eine Graphdatenbank speichert Daten in Form von Knoten, Kanten und Eigenschaften. Sie wird verwendet, um komplexe Beziehungen zwischen Daten zu modellieren, wie sie zum Beispiel in sozialen Netzwerken, Empfehlungsmaschinen oder Netzwerkanalysen vorkommen. Graphdatenbanken sind besonders effizient bei der Abfrage von Beziehungen und Verbindungen zwischen Entitäten."
    },
    {
      "question": "Was ist Datenbankindexierung?",
      "answer": "Hierbei erhalten Tabellen einen Index, wodurch die Suche nach Werten schneller wird. Sollte jedoch vermieden werden, wenn ständig neue Änderungen vorgenommen werden, da dann der Index regelmäßig neu erstellt werden muss."
    },
    {
      "question": "Was ist Datenbankpartitionierung?",
      "answer": "Das Aufteilen großer Datenmengen in kleinere, leichter zu handhabende Teile."
    },
    {
      "question": "Was sind Transaktionsbefehle in SQL?",
      "answer": "BEGIN TRANSACTION: Startet eine Transaktion. COMMIT: Bestätigt und speichert alle Änderungen dauerhaft. ROLLBACK: Macht alle Änderungen in der Transaktion rückgängig."
    },
    {
      "question": "Was ist ein Regressionstest?",
      "answer": "Stellt sicher, dass bestehende Funktionen nach Änderungen weiterhin korrekt funktionieren."
    },
    {
      "question": "Was ist Datenbindung bei Model und View?",
      "answer": "Einweg: Daten fließen vom Model zur View. Zweiweg: Daten fließen in beide Richtungen."
    },
    {
      "question": "Nenne wichtige Datentypen in SQL.",
      "answer": "Wichtige SQL-Datentypen sind INT, VARCHAR, TEXT, DATE, BOOLEAN, FLOAT und DECIMAL."
    },
    {
      "question": "Was ist referenzielle Integrität bei SQL?",
      "answer": "Stellt sicher, dass Fremdschlüssel auf gültige Datensätze in anderen Tabellen verweisen."
    },
    {
      "question": "Was sind Stored Procedures bei SQL?",
      "answer": "Vordefinierte SQL-Prozeduren, die wie Funktionen wiederverwendbar sind, um die Sicherheit und Performance zu erhöhen."
    },
    {
      "question": "Was entspricht einem Tupel im Relationen-Modell?",
      "answer": "Ein Tupel entspricht im Relationen-Modell der Entität des ER-Modells."
    },
    {
      "question": "Wie werden Beziehungen zwischen Relationen im Relationen-Modell erstellt?",
      "answer": "Beziehungen zwischen Relationen werden mit Hilfe von Fremdschlüsseln erstellt."
    },
    {
      "question": "Was entspricht einer Relation im Relationen-Modell?",
      "answer": "Eine Relation im Relationen-Modell entspricht in der relationalen Datenbank einer Tabelle."
    },
    {
      "question": "Was macht ein Primärschlüssel?",
      "answer": "Ein Primärschlüssel macht jede Tabelle eindeutig identifizierbar."
    },
    {
      "question": "Was ist ein anderes Wort für Suchschlüssel?",
      "answer": "Ein anderes Wort für Suchschlüssel ist Index."
    },
    {
      "question": "Welche Voraussetzung muss bei der Bildung von Primärschlüsseln eingehalten werden?",
      "answer": "Bei der Bildung von Primärschlüsseln muss das Prinzip der Eindeutigkeit eingehalten werden."
    },
    {
      "question": "Was entspricht einer Tabelle im logischen Datenmodell?",
      "answer": "Eine Tabelle entspricht der Entitätsmenge im logischen Datenmodell."
    },
    {
      "question": "Was beschreibt das ER-Modell?",
      "answer": "Das ER-Modell beschreibt Daten in einem bestimmten Anwendungsbereich und dient zur Modellierung eines Ausschnitts der realen Welt."
    },
    {
      "question": "Was ist eine Datenbank?",
      "answer": "Eine Datenbank fasst zusammengehörige Entitätstypen in Tabellen zusammen."
    },
    {
      "question": "Was ist eine Entität?",
      "answer": "Eine Entität ist ein konkretes Objekt, das in der Datenbank abgebildet wird."
    },
    {
      "question": "Was ist eine Entitätsmenge?",
      "answer": "Eine Entitätsmenge ist die Gruppe gleichartiger Entitäten, z.B. alle Kunden."
    },
    {
      "question": "Was speichert eine Tabelle oder Relation?",
      "answer": "Eine Tabelle oder Relation speichert gleichartige Entitäten, wobei jede Tabellenzeile einen Datensatz (Tupel) repräsentiert."
    },
    {
      "question": "Was enthält ein Datensatz oder Tupel?",
      "answer": "Ein Datensatz oder Tupel enthält alle zusammengehörigen Werte einer Entität."
    },
    {
      "question": "Was ist ein Attribut?",
      "answer": "Ein Attribut beschreibt eine Eigenschaft eines Entitätstyps und entspricht einer Spalte der Tabelle."
    },
    {
      "question": "Was ist ein Datenfeld?",
      "answer": "Ein Datenfeld enthält den Wert eines Attributs in einem Datensatz."
    },
    {
      "question": "Was ist der Zweck eines Datentyps?",
      "answer": "Der Datentyp definiert das Format und die Größe eines Attributs."
    },
    {
      "question": "Was ist ein Schlüssel?",
      "answer": "Ein Schlüssel ist ein Attribut oder eine Attributkombination, die eine Entität eindeutig identifiziert."
    },
    {
      "question": "Was ist ein Primärschlüssel?",
      "answer": "Der Primärschlüssel ist der eindeutig gewählte Hauptschlüssel, der oft künstlich ist (z.B. Mitarbeiter-Nr)."
    },
    {
      "question": "Was ist DDL (Data Definition Language)?",
      "answer": "DDL wird verwendet, um die Struktur von Datenbanken und Tabellen zu erstellen, zu ändern oder zu löschen."
    },
    {
      "question": "Was wird mit DQL (Data Query Language) gemacht?",
      "answer": "DQL dient der Abfrage von Daten aus einer Datenbank, hauptsächlich über den SELECT-Befehl."
    },
    {
      "question": "Was macht DML (Data Manipulation Language)?",
      "answer": "DML wird genutzt, um Daten in Tabellen einzufügen, zu ändern oder zu löschen."
    },
    {
      "question": "Was regelt DCL (Data Control Language)?",
      "answer": "DCL regelt den Zugriff auf Datenbankobjekte durch Rechtevergabe."
    },
    {
      "question": "Was ist eine Fremdschlüsselverletzung?",
      "answer": "Eine Fremdschlüsselverletzung tritt auf, wenn Datensätze in einer Tabelle gelöscht werden, auf die andere Tabellen verweisen, und die Löschaktion von der eingestellten Aktion abhängt (RESTRICT, CASCADE, SET NULL)."
    },
    {
      "question": "Was ist SQL?",
      "answer": "SQL (Structured Query Language) ist eine standardisierte Sprache zur Verwaltung und Abfrage von Daten in relationalen Datenbanken."
    },
    {
      "question": "Was ist eine relationale Datenbank?",
      "answer": "Eine relationale Datenbank speichert Daten in Tabellen, die durch Beziehungen miteinander verbunden sind."
    },
    {
      "question": "Was ist eine Tabelle in SQL?",
      "answer": "Eine Tabelle ist eine strukturierte Sammlung von Daten, die in Zeilen und Spalten organisiert ist."
    },
    {
      "question": "Was ist ein Primärschlüssel?",
      "answer": "Ein Primärschlüssel ist ein eindeutiger Bezeichner für jede Zeile in einer Tabelle."
    },
    {
      "question": "Was ist ein Fremdschlüssel?",
      "answer": "Ein Fremdschlüssel ist ein Feld in einer Tabelle, das auf den Primärschlüssel einer anderen Tabelle verweist."
    },
    {
      "question": "Welche Anomalien können bei einer unnormalisierten Datenbank auftreten?",
      "answer": "Einfüge-, Änderungs- und Löschanomalien. Diese können zu Dateninkonsistenzen oder Datenverlust führen."
    },
    {
      "question": "Was ist das Ziel der Normalisierung in einer Datenbank?",
      "answer": "Die Vermeidung von Redundanzen und Anomalien durch strukturierte und logische Aufteilung der Daten auf mehrere Tabellen."
    },
    {
      "question": "Was sind die Merkmale der 1. Normalform (1NF)?",
      "answer": "Alle Werte in den Attributen müssen atomar sein (nicht weiter teilbar). Mehrfache Werte werden in einzelne Zeilen ausgelagert."
    },
    {
      "question": "Was ist Voraussetzung für die 2. Normalform (2NF)?",
      "answer": "Die 1. Normalform muss erfüllt sein. Zusätzlich dürfen Nicht-Schlüsselattribute nur vom gesamten Primärschlüssel abhängig sein (voll funktional abhängig)."
    },
    {
      "question": "Welche Beziehungen müssen bei der 2. Normalform beachtet werden?",
      "answer": "Fremdschlüssel müssen eingefügt werden, um Tabellen bei Bedarf zu verknüpfen (1:N, N:1 oder 1:1). N:M-Beziehungen werden durch Zwischentabellen aufgelöst."
    },
    {
      "question": "Was ist die Voraussetzung für die 3. Normalform (3NF)?",
      "answer": "Die 2. Normalform muss erfüllt sein. Außerdem dürfen keine transitiven Abhängigkeiten bestehen (ein Nicht-Schlüsselattribut darf nicht von einem anderen Nicht-Schlüsselattribut abhängen)."
    },
    { "question": "Datenbank: Was ist eine Entität?", "answer": "Ein konkretes Objekt, das gespeichert werden soll." },
    { "question": "Datenbank: Was ist eine Entitätsmenge?", "answer": "Gruppe ähnlicher Entitäten." },
    { "question": "Datenbank: Was ist ein DBMS?", "answer": "Software zur Verwaltung von Datenbanken." },
    { "question": "Datenbank: Was ist eine Tabelle?", "answer": "Struktur zur Speicherung gleichartiger Entitäten." },
    { "question": "Datenbank: Was ist ein Datensatz/Tupel?", "answer": "Daten zu einer Entität in einer Tabellenzeile." },
    { "question": "Datenbank: Was ist ein Attribut?", "answer": "Merkmal eines Entitätstyps, z.B. Name." },
    { "question": "Datenbank: Was ist ein Datenfeld?", "answer": "Attribut + konkreter Wert." },
    { "question": "Datenbank: Was legt der Datentyp fest?", "answer": "Typ des Attributs (Text, Zahl, Datum)." },
    { "question": "Phasen der Datenbankentwicklung: Was ist Ziel der externen Phase?", "answer": "Ermittlung des Informationsbedarfs der Nutzer." },
    { "question": "Phasen der Datenbankentwicklung: Was ist Ziel der konzeptionellen Phase?", "answer": "Formale Beschreibung aller relevanten Objekte und Beziehungen." },
    { "question": "Phasen der Datenbankentwicklung: Was ist Ziel der logischen Phase?", "answer": "Umsetzung des semantischen Modells in ein relationales Modell." },
    { "question": "Phasen der Datenbankentwicklung: Was ist Ziel der physischen Phase?", "answer": "Modellierung der Datenbankstruktur in einem konkreten DBMS." },
    { "question": "SQL: Was bedeutet DDL?", "answer": "Data Definition Language - Strukturierung der Datenbank." },
    { "question": "SQL: Was bedeutet DML?", "answer": "Data Manipulation Language - Arbeiten mit den Daten." },
    { "question": "SQL: Was bedeutet DQL?", "answer": "Data Query Language - Daten abfragen." },
    { "question": "SQL: Was bedeutet DCL?", "answer": "Data Control Language - Zugriffsrechte verwalten." },
    { "question": "SQL-Code: Einfaches SELECT-Statement?", "answer": "SELECT Vorname, Nachname\nFROM Kunden;" },
    { "question": "SQL-Code: SELECT mit WHERE und LIKE?", "answer": "SELECT Vorname, Nachname\nFROM Kunden\nWHERE Nachname LIKE 'Me%';" },
    { "question": "SQL-Code: SELECT mit JOIN?", "answer": "SELECT Kunden.Vorname, Bestellungen.Produkt\nFROM Kunden\nJOIN Bestellungen ON Kunden.KundenID = Bestellungen.KundenID;" },
    { "question": "SQL-Code: SELECT + WHERE + LIKE kombiniert?", "answer": "SELECT Bestellungen.Produkt\nFROM Bestellungen\nWHERE Bestellungen.Produkt LIKE '%Buch';" },
    { "question": "SQL-Code: Alias für Tabellen?", "answer": "SELECT k.Vorname, k.Nachname, b.Produkt\nFROM Kunden AS k\nJOIN Bestellungen AS b ON k.KundenID = b.KundenID;" },
    { "question": "SQL-Code: CREATE TABLE Beispiel Kunden?", "answer": "CREATE TABLE Kunden (\n\tProduktID INT PRIMARY KEY,\n\tProduktname VARCHAR(100),\n\tPreis DECIMAL(10,2),\n\tVerfügbar BOOLEAN,\n\tErstellungsdatum DATE,\n\tBild BLOB\n);" },
    { "question": "SQL-Code: CREATE TABLE mit Fremdschlüssel?", "answer": "CREATE TABLE Bestellungen (\n\tBestellID INT PRIMARY KEY,\n\tProdukt VARCHAR(100),\n\tBestelldatum DATE,\n\tKundenID INT,\n\tFOREIGN KEY (KundenID) REFERENCES Kunden(KundenID)\n);" },
    { "question": "SQL-Code: SELECT mit ORDER BY?", "answer": "SELECT Vorname, Nachname, Geburtsdatum\nFROM Kunden\nORDER BY Geburtsdatum DESC;" },
    { "question": "SQL: Aggregatfunktion zum Zählen?", "answer": "SELECT COUNT(*) AS AnzahlKunden\nFROM Kunden;" },
    { "question": "SQL: Aggregatfunktion zum Summieren?", "answer": "SELECT SUM(Preis) AS Gesamtumsatz\nFROM Bestellungen;" },
    { "question": "SQL: Aggregatfunktion für Durchschnitt?", "answer": "SELECT AVG(Preis) AS Durchschnittspreis\nFROM Produkte;" },
    { "question": "SQL: Aggregatfunktion für Maximum?", "answer": "SELECT MAX(Preis) AS HöchsterPreis\nFROM Produkte;" },
    { "question": "SQL: Aggregatfunktion für Minimum?", "answer": "SELECT MIN(Preis) AS NiedrigsterPreis\nFROM Produkte;" },
    { "question": "SQL: GROUP BY mit Aggregatfunktion?", "answer": "SELECT KundenID, COUNT(*) AS AnzahlBestellungen\nFROM Bestellungen\nGROUP BY KundenID;" },
    { "question": "SQL: HAVING nach Aggregatfunktion?", "answer": "SELECT KundenID, COUNT(*) AS AnzahlBestellungen\nFROM Bestellungen\nGROUP BY KundenID\nHAVING COUNT(*) > 5;" },
    { "question": "SQL-Code: INSERT INTO Beispiel?", "answer": "INSERT INTO Kunden (KundenID, Vorname, Nachname, Email, Geburtsdatum)\nVALUES (1, 'Max', 'Mustermann', 'max.mustermann@email.com', '1985-06-15');" },
    { "question": "SQL: Generelle Struktur einer SQL-Abfrage?", "answer": "SELECT <Spalten>\nFROM <Tabelle1>\nJOIN <Tabelle2> ON <Bedingung>\nWHERE <Bedingung>\nGROUP BY <Spalten>\nHAVING <Bedingung>\nORDER BY <Spalten> [ASC|DESC]\nLIMIT <Anzahl>;" },
    { "question": "SQL-Code: SELECT mit Zeitraum (BETWEEN)?", "answer": "SELECT BestellID, KundenID, Bestelldatum, Betrag\nFROM Bestellungen\nWHERE Bestelldatum BETWEEN '2025-01-01' AND '2025-04-01';" },
    { "question": "SQL-Code: SELECT nach Monat und Jahr?", "answer": "SELECT BestellID, KundenID, Bestelldatum, Betrag\nFROM Bestellungen\nWHERE YEAR(Bestelldatum) = 2025 AND MONTH(Bestelldatum) = 4;" },
    { "question": "SQL-Code: Aktuelles Datum mit NOW()?", "answer": "SELECT BestellID, KundenID, Bestelldatum, Betrag\nFROM Bestellungen\nWHERE Bestelldatum = CURDATE();" },
    { "question": "SQL-Code: Subquery in WHERE?", "answer": "SELECT Vorname, Nachname\nFROM Kunden\nWHERE KundenID IN (SELECT KundenID FROM Bestellungen WHERE Betrag > 100);" },
    { "question": "SQL-Code: Subquery im SELECT-Teil?", "answer": "SELECT Vorname, Nachname,\n(SELECT COUNT(*) FROM Bestellungen WHERE Bestellungen.KundenID = Kunden.KundenID) AS Bestellanzahl\nFROM Kunden;" },
    { "question": "SQL-Code: Subquery im FROM-Teil?", "answer": "SELECT Sub.KundenID, Sub.Bestellanzahl\nFROM (SELECT KundenID, COUNT(*) AS Bestellanzahl FROM Bestellungen GROUP BY KundenID) AS Sub;" },
    { "question": "SQL-Code: Subquery in JOIN?", "answer": "SELECT Kunden.Vorname, Kunden.Nachname, Bestellungen.Betrag\nFROM Kunden\nINNER JOIN (SELECT KundenID, Betrag FROM Bestellungen WHERE Betrag > 100) AS Bestellungen\nON Kunden.KundenID = Bestellungen.KundenID;" },
    { "question": "SQL-Code: Neue Spalte hinzufügen?", "answer": "ALTER TABLE Kunden\nADD Geburtsdatum DATE;" },
    { "question": "SQL-Code: Spalte löschen?", "answer": "ALTER TABLE Kunden\nDROP COLUMN Geburtsdatum;" },
    { "question": "SQL-Code: Ganze Tabelle löschen?", "answer": "DROP TABLE Kunden;" },
    { "question": "SQL: LIKE mit %?", "answer": "SELECT * FROM Kunden\nWHERE Name LIKE 'A%';" },
    { "question": "SQL: LIKE mit _ (Unterstrich)?", "answer": "SELECT * FROM Kunden\nWHERE Name LIKE '__e__';" }
    ,
    {
      "question": "Welche fünf Haupttypen von Datenbanken werden allgemein unterschieden?",
      "answer": "Relationale Datenbanken, NoSQL-Datenbanken, Objektorientierte Datenbanken, Hierarchische Datenbanken und Netzwerkdatenbanken."
    },
    {
      "question": "Was sind die NoSQL-Datenbank-Typen?",
      "answer": "Key-Value-Stores, Dokumentenorientiert, Spaltenorientiert und Graphdatenbanken."
    },
    {
      "question": "Was ist die Grundidee relationaler Datenbanken?",
      "answer": "Daten werden in Tabellen (Relationen) gespeichert – Zeilen sind Datensätze, Spalten sind Attribute."
    },
    {
      "question": "Wie werden Beziehungen zwischen Tabellen in relationalen Datenbanken hergestellt?",
      "answer": "Beziehungen werden über Primär- und Fremdschlüssel hergestellt."
    },
    {
      "question": "Welche Abfragesprache wird in relationalen Datenbanken verwendet?",
      "answer": "SQL (Structured Query Language)."
    },
    {
      "question": "Was sind die Vorteile relationaler Datenbanken?",
      "answer": "Sie sind strukturiert, konsistent und weit verbreitet."
    },
    {
      "question": "Nenne Beispiele für relationale Datenbanken.",
      "answer": "MySQL, PostgreSQL, Oracle, Microsoft SQL Server."
    },
    {
      "question": "Was ist die Grundidee von NoSQL-Datenbanken?",
      "answer": "NoSQL-Datenbanken sind flexibler als RDBMS und haben keine feste Tabellenstruktur."
    },
    {
      "question": "Für was sind NoSQL-Datenbanken besonders geeignet?",
      "answer": "Für große, verteilte, unstrukturierte Datenmengen."
    },
    {
      "question": "Welche Haupttypen von NoSQL-Datenbanken gibt es?",
      "answer": "Key-Value-Stores, Dokumentenorientiert, Spaltenorientiert und Graphdatenbanken."
    },
    {
      "question": "Was sind Key-Value-Stores in NoSQL-Datenbanken?",
      "answer": "Sie speichern Daten als Schlüssel-Wert-Paare und sind oft sehr schnell, häufig in-memory."
    },
    {
      "question": "Nenne Beispiele für Key-Value-Stores.",
      "answer": "Redis, Amazon DynamoDB."
    },
    {
      "question": "Was ist die Besonderheit von dokumentenorientierten NoSQL-Datenbanken?",
      "answer": "Sie speichern Daten als Dokumente (z.B. JSON, BSON), die eine sehr flexible Struktur bieten und oft alle relevanten Informationen enthalten."
    },
    {
      "question": "Nenne Beispiele für dokumentenorientierte NoSQL-Datenbanken.",
      "answer": "MongoDB, CouchDB."
    },
    {
      "question": "Was bedeutet ‚self-contained‘ bei dokumentenorientierten Datenbanken?",
      "answer": "Jedes Dokument enthält alle relevanten Informationen für einen bestimmten Anwendungsfall."
    },
    {
      "question": "Was ist der Unterschied zwischen relationalen und dokumentenorientierten Datenbanken?",
      "answer": "Dokumentenorientierte Datenbanken haben keine klassischen Relationen wie relationale Datenbanken, sondern stellen Beziehungen oft nur durch IDs oder Referenzen her."
    },
    {
      "question": "Was ist die Besonderheit von spaltenorientierten NoSQL-Datenbanken?",
      "answer": "Sie speichern Daten spaltenweise statt zeilenweise, was sie ideal für analytische Abfragen mit vielen gleichartigen Werten macht."
    },
    {
      "question": "Nenne Beispiele für spaltenorientierte NoSQL-Datenbanken.",
      "answer": "Apache Cassandra, HBase."
    },
    {
      "question": "Was ist die Grundidee von Graphdatenbanken?",
      "answer": "Graphdatenbanken speichern Daten in Knoten und Kanten und sind ideal für Netzwerke und Beziehungen."
    },
    {
      "question": "Nenne Beispiele für Graphdatenbanken.",
      "answer": "Neo4j, ArangoDB."
    },
    {
      "question": "Für was sind Graphdatenbanken besonders geeignet?",
      "answer": "Sie sind ideal für die Modellierung von Beziehungen, z.B. in sozialen Netzwerken oder bei vernetzten Geräten."
    },
    {
      "question": "Was ist die Grundidee von objektorientierten Datenbanken?",
      "answer": "Objektorientierte Datenbanken speichern komplette Objekte mit Attributen und Methoden, ähnlich wie in der objektorientierten Programmierung."
    },
    {
      "question": "Nenne Beispiele für objektorientierte Datenbanken.",
      "answer": "db4o, ObjectDB."
    },
    {
      "question": "Wie speichern hierarchische Datenbanken Daten?",
      "answer": "Daten werden in einer Baumstruktur gespeichert, wobei jeder Datensatz einen 'Eltern'-Datensatz hat."
    },
    {
      "question": "Welche Vorteile und Nachteile haben hierarchische Datenbanken?",
      "answer": "Sie sind schnell für bestimmte Abfragen, aber unflexibel bei Änderungen."
    },
    {
      "question": "Nenne ein Beispiel für eine hierarchische Datenbank.",
      "answer": "IBM IMS."
    },
    {
      "question": "Was ist der Unterschied zwischen hierarchischen und Netzwerkdatenbanken?",
      "answer": "Netzwerkdatenbanken erlauben es, dass ein Datensatz mehrere 'Eltern' haben kann, was sie flexibler, aber komplexer macht."
    },
    {
      "question": "Nenne ein Beispiel für eine Netzwerkdatenbank.",
      "answer": "Integrated Data Store (IDS)."
    }

  ],
  "Architekur und Muster": [
    {
      "question": "Was ist Pipelines-Architektur?",
      "answer": "Pipelines-Architektur ist eine Softwarearchitektur, die Daten in mehreren aufeinanderfolgenden Verarbeitungsschritten verarbeitet. Jeder Schritt ist ein Modul, das eine bestimmte Funktion erfüllt und die Ausgabe an das nächste Modul weitergibt."
    },
    {
      "question": "Was ist die Event-Driven-Architektur?",
      "answer": "Event Producer(Apps) stoßen Message Broker an und der Broker stößst die Event Consumer(Server)an. Man kann leicht neue Funktionen oder Systeme hinzufügen. Die Event-Driven-Architektur ermöglicht, dass Systeme automatisch auf Ereignisse reagieren"
    },
    {
      "question": "was ist ein Framework?",
      "answer": "Ein Framework ist eine Sammlung von vorgefertigten Komponenten und Regeln, die Entwicklern helfen, Softwareanwendungen effizient zu erstellen. Es bietet eine Struktur und wiederverwendbare Bausteine, um Entwicklungszeit zu sparen."
    },
    {
      "question": "Was ist ein Monolithisches Architektur?",
      "answer": "Ein monolithisches Architektur ist eine Softwarearchitektur, bei der alle Komponenten einer Anwendung in einem einzigen, zusammenhängenden Block verarbeitet werden. Änderungen oder Erweiterungen sind schwieriger und das System kann bei wachsendem Umfang unübersichtlich werden."
    },
    {
      "question": "Was ist eine Modularisierung?",
      "answer": "Modularisierung ist die Zerlegung von Code in kleine, wiederverwendbare Module zur Reduktion von Komplexität."
    },
    // Peer to Peer
    {
      question: "Was ist ein Peer-to-Peer-Architektur?",
      answer: "In einem Peer-to-Peer-Architektur (P2P) sind alle Geräte gleichberechtigt und können sowohl als Client als auch als Server fungieren. Es gibt keinen zentralen Server."
    },
    {
      question: "Wann ist ein Peer-to-Peer-Architektur sinnvoll?",
      answer: "Ein P2P ist sinnvoll, wenn kleine Netzwerke ohne zentrale Verwaltung benötigt werden, z.B. in einem Heimnetzwerk oder bei Dateifreigaben zwischen einzelnen Computern."
    },

    // Client-Server
    {
      question: "Was ist der Unterschied zwischen einem Client-Server-Architektur und einem Peer-to-Peer-Architektur?",
      answer: "In einem Client-Server-Architektur gibt es einen zentralen Server, der Dienste anbietet (z.B. Datenbanken, Dateiserver), während Clients diese Dienste anfordern. In einem Peer-to-Peer-Netzwerk gibt es keine zentrale Instanz."
    },
    {
      question: "Was ist ein Client in einem Client-Server-Architektur?",
      answer: "Ein Client ist ein Gerät, das Dienste von einem zentralen Server anfordert, z.B. ein Computer, der eine Webseite von einem Webserver abruft."
    },
    {
      question: "Was ist ein Server in einem Client-Server-Architektur?",
      answer: "Ein Server stellt Dienste bereit, die von den Clients angefordert werden, z.B. ein Webserver, der Webseiten liefert, oder ein Mailserver, der E-Mails verwaltet."
    },
    {
      "question": "Was ist Microservices-Architektur?",
      "answer": "Microservices-Architektur teilt eine große Software in viele kleine, unabhängige Dienste auf, die jeweils eine bestimmte Funktion erfüllen und separat entwickelt, getestet und aktualisiert werden können."
    },
    {
      "question": "Was ist eine Dreischichtenarchitektur?",
      "answer": "1. Präsentationsschicht (UI), 2. Anwendungsschicht (Logik), 3. Datenzugriffsschicht (Datenbank). Dient zur Modularisierung, besseren Wartbarkeit und Trennung von Zuständigkeiten."
    },
    {
      "question": "Was ist Model View Controller (MVC)?",
      "answer": "Software-Architektur zur Trennung von Datenmodell, Benutzeroberfläche und Steuerlogik."
    },
    {
      "question": "Was bedeutet es, dass Phasen in der Softwareentwicklung häufig iterativ durchlaufen werden?",
      "answer": "Phasen werden häufig mit Wiederholungen in kurzen Abständen durchlaufen."
    },
    {
      "question": "Was bildet die Grundlage für die Implementierung in der Softwareentwicklung?",
      "answer": "Der Softwareentwurf bildet die Grundlage für die Implementierung."
    },
    {
      "question": "Was beinhaltet der Softwareentwurf?",
      "answer": "Der Softwareentwurf beinhaltet Aufgaben des Systems, Schnittstellen des Systems, Einbindung vorhandener Komponenten, einzusetzende Hardware und zu unterstützende Betriebssysteme."
    },
    {
      "question": "Was sind die Vorteile von Individualsoftware im Vergleich zu Branchensoftware?",
      "answer": "Individualsoftware ist auf lange Sicht günstiger, da keine Lizenz- oder Abo-Gebühren anfallen, und sie passt sich den Wünschen des Unternehmens an und bietet mehr Gestaltungsmöglichkeiten."
    },
    {
      "question": "Was ist eine Kontrollstruktur einer Schleife?",
      "answer": "Eine Schleife läuft so lange weiter, wie die Bedingung zutrifft oder die Durchlaufzahl nicht erreicht ist."
    },
    {
      "question": "Was ist bei einem großen Team und der Größe des Projekts zu beachten?",
      "answer": "Je größer das Team, desto wichtiger ist ein genauer Entwurf, damit das gesamte Team seine Aufgaben klar erkennen kann."
    },
    {
      "question": "Welche sind die 6 Phasen der Softwareentwicklung?",
      "answer": "Die 6 Phasen der Softwareentwicklung sind: 1. Planung, 2. Analyse, 3. Entwurf, 4. Implementierung, 5. Test, 6. Dokumentation."
    },



    {
      "question": "Was ist ein Erzeugungsmuster?",
      "answer": "Erzeugungsmuster befassen sich mit der Erstellung von Objekten und bieten Lösungen, wie man Objekte instanziiert."
    },
    {
      "question": "Was sind Beispiele für Erzeugungsmuster?",
      "answer": "Beispiele für Erzeugungsmuster sind das Singleton-Pattern und das Factory-Pattern."
    },
    {
      "question": "Wie funktioniert das Factory muster?",
      "answer": "Es gibt ein Interface Produkt, von dem verschiedeneProdukte abgeleitet werden.\n Dann gibt es eine Farbrik, die mit einer Methode wie CreateProduct (z.B. mit einem Produkttyp als String) neue Produkte erzeugt.\nDie Methode der Fabrik entscheidet, welches Produkt erzeugt wird, und gibt es zurück."
    },
    {
      "question": "Wie funktioniert das Singleton-Muster?",
      "answer": "Es gibt eine Klasse, die eine private statische Instanz von sich selbst enthält (zunächst auf null gesetzt).\nDer Konstruktor der Klasse ist privat, sodass keine Objekte von außen erzeugt werden können.\nEs gibt eine öffentliche Methode namens GetInstance().\nDiese Methode prüft, ob die private statische Instanz null ist.\nFalls ja, wird eine neue Instanz erstellt.\nAm Ende gibt die Methode die Instanz zurück."
    },





    {
      "question": "Was ist ein Strukturmuster?",
      "answer": "Ein Strukturmuster hilft dabei, Klassen oder Objekte so zu organisieren, dass sie effizient zusammenarbeiten und die Struktur des Systems verbessern."
    },
    {
      "question": "Was ist ein Beispiel für ein Strukturmuster?",
      "answer": " Beispiele für Strukturmuster sind Adapter-Pattern "
    },



    {
      "question": "Was ist ein Verhaltensmuster?",
      "answer": "Verhaltensmuster definieren, wie Objekte miteinander kommunizieren und interagieren sollen."
    },
    {
      "question": "Was sind Beispiele für Verhaltensmuster?",
      "answer": "Beispiele für Verhaltensmuster sind das Observer-Pattern und das Command-Pattern."
    },
    {
      "question": "Wie funktioniert das Observer-Muster?",
      "answer": "Es gibt ein interface Observer mit einer Benachrichtigungs Methode, von dem alle Observer abgeleitet werden.\nDann gitb es eine Klasse Subjekt(dies kann von einer abstracten Klasse abgeleitet werden muss aber nicht).\n Das Subjekt hat eine Offenliche Observern list\n und daszu eine öffenlich methode zum hinzufügen und endfernen aus der liste.\n Wenn Sich der Zustand des SUbjekt verändert, dann dann ruft er alle Benachtichtigungs Methode der Observer auf in der Liste"
    },




    { "question": "UML-Diagramme: Was beschreiben Strukturdiagramme?", "answer": "Den statischen Aufbau des Systems." },
    { "question": "UML-Diagramme: Was beschreiben Verhaltensdiagramme?", "answer": "Dynamische Abläufe." },
    { "question": "UML-Diagramme: Was zeigen Interaktionsdiagramme?", "answer": "Die Zusammenarbeit von Objekten." },
    { "question": "UML-Diagramme: Nenne drei Strukturdiagramme.", "answer": "Klassendiagramm, Objektdiagramm, Komponentendiagramm." },
    { "question": "UML-Diagramme: Nenne vier Interaktionsdiagramme.", "answer": "Sequenzdiagramm, Kommunikationsdiagramm, Zeitverlaufsdiagramm, Interaktionsübersichtsdiagramm." },
    { "question": "Phasen der Softwareentwicklung: Was passiert in der Analysephase?", "answer": "Erfassen von Wünschen und Anforderungen des Auftraggebers." },
    { "question": "Phasen der Softwareentwicklung: Was wird in der Entwurfsphase entschieden?", "answer": "Softwarearchitektur, Benutzeroberfläche, Programmiersprachen und Ressourcenplanung." },
    { "question": "Phasen der Softwareentwicklung: Was passiert in der Implementierungsphase?", "answer": "Code wird geschrieben und dokumentiert." },
    { "question": "Phasen der Softwareentwicklung: Wann wird getestet?", "answer": "Vor, während und nach der Entwicklung." },
    { "question": "Phasen der Softwareentwicklung: Was passiert in der Einsatzphase?", "answer": "Software wird dem Kunden übergeben oder veröffentlicht." },
    { "question": "Phasen der Softwareentwicklung: Was passiert in der Wartungsphase?", "answer": "Fehler werden durch Updates oder Patches behoben." },
    {
      "question": "Was sind Design Patterns?",
      "answer": "Design Patterns sind bewährte Lösungsvorschläge für wiederkehrende Probleme im Entwurf von objektorientierten Softwaresystemen."
    },
    {
      "question": "Was sind die Vorteile von Design Patterns?",
      "answer": "Bewährte Lösungen, vereinfachte Diskussion, Programmiersprachenunabhängigkeit und Transparenz von Vor- und Nachteilen."
    },
    {
      "question": "Wie werden Endwurfsmuster (Design Patterns) unterteilt?",
      "answer": "In Erzeugungsmuster (Creational Patterns), Strukturmuster (Structural Patterns) und Verhaltensmuster (Behavioral Patterns)."
    },
    {
      "question": "Was ist der Zweck von Erzeugungsmustern (Creational Patterns)?",
      "answer": "Sie betreffen die Erzeugung von Objekten und sorgen dafür, dass der Erstellungsprozess von der konkreten Implementierung getrennt bleibt."
    },
    {
      "question": "Was ist der Zweck von Strukturmustern (Structural Patterns)?",
      "answer": "Strukturmuster befassen sich mit dem Design und der Struktur von Software und definieren Beziehungen zwischen Klassen und Objekten."
    },
    {
      "question": "Was ist der Zweck von Verhaltensmustern (Behavioral Patterns)?",
      "answer": "Sie modellieren das Verhalten der Software und verbessern die Flexibilität und Kommunikation zwischen Objekten."
    },

    {
        "question":"Wie sieht die 3-Schichtenarchitektur (DDD/Clean Architecture) aus ?",
        "answer": "UI (Interface Layer) => \nDomain (Business Logic) => \nInfrastruktur"
    },
    {
        "question":"Wie sieht die 4-Schichtenarchitektur (DDD/Clean Architecture) aus ?",
        "answer": "UI (Interface Layer) => \nApplication Layer (Handler Request, Session Mangment) => \nDomain (Entities, Business Rules) => \nInfrastruktur"
    },
    {
        "question":"Wie sieht die 6-Schichtenarchitektur (DDD/Clean Architecture) aus ?",
        "answer": "UI (Interface Layer) => \nApplication Layer (Handler Request, Session Mangment) => \nDomain (Entities, Business Rules) => Low Level Bisniss(Berechnungen) => \nTechnical Services(zb secruity) => \nFoundation(Threads etc)"
    }



  ],
  "Python": [
    {
      "question": "Python: Ausgabe auf dem Bildschirm",
      "answer": "print(\"Hallo Welt!\")"
    },
    {
      "question": "Python: Benutzereingabe abfragen",
      "answer": "name = input(\"Wie heißt du? \")\nprint(\"Hallo\", name)"
    },
    {
      "question": "Python: while-Schleife",
      "answer": "zahl = 0\nwhile zahl < 5:\n\tprint(\"Zahl ist:\", zahl)\n\tzahl += 1"
    },
    {
      "question": "Python: for-Schleife",
      "answer": "for i in range(5):\n\tprint(\"Durchlauf:\", i)"
    },
    {
      "question": "Python: match / case (Switch Case)",
      "answer": "match farbe:\n\tcase \"rot\":\n\t\tprint(\"Stopp!\")\n\tcase \"grün\":\n\t\tprint(\"Los!\")\n\tcase \"gelb\":\n\t\tprint(\"Langsam...\")\n\tcase _:\n\t\tprint(\"Unbekannte Farbe\")"
    },
    {
      "question": "Python: Anzahl der Elemente eines Datentyps zurückgeben",
      "answer": "len(menge)"
    },
    {
      "question": "Python: SET",
      "answer": "farben = {\"rot\", \"blau\", \"grün\"}\nfarben.add(\"gelb\")  # Wert hinzufügen\nfarben.remove(\"blau\")  # Wert entfernen\nfor f in farben:\n\tprint(f)"
    },
    {
      "question": "Python: Dict (Dictionary)",
      "answer": "person = {\"name\": \"Anna\", \"alter\": 25}\nperson[\"stadt\"] = \"Berlin\"\nperson[\"alter\"] = 26\nwert = person.pop(\"alter\")\nfor key, value in person.items():\n\tprint(key, \":\", value)"
    },
    {
      "question": "Python: List",
      "answer": "zahlen = [1, 2, 3]\nzahlen.append(4)\nzahlen.insert(0, 100)\nzahlen.pop()\nzahlen.pop(0)\nfor z in zahlen:\n\tprint(z)"
    },
    {
      "question": "Python: Enumerate bei Listen",
      "answer": "for index, z in enumerate(zahlen):\n\tprint(f\"Index {index}: {z}\")"
    },
    {
      "question": "Python: Enumerate bei Dictionary",
      "answer": "person = {\"name\": \"Anna\", \"alter\": 25}\nfor index, (key, value) in enumerate(person.items()):\n\tprint(f\"Index {index}: {key} = {value}\")"
    },
    {
      "question": "Python: Enumerate bei Set",
      "answer": "farben = {\"rot\", \"grün\", \"blau\"}\nfor index, f in enumerate(farben):\n\tprint(f\"Index {index}: {f}\")"
    },
    {
      "question": "Python: Funktion definieren (addiere)",
      "answer": "def addiere(a, b):\n\treturn a + b\n\nergebnis = addiere(5, 7)"
    },
    {
      "question": "Python: Funktion definieren (berechnungen)",
      "answer": "def berechnungen(a, b):\n\tsumme = a + b\n\tdifferenz = a - b\n\n\treturn summe, differenz\nsumme, differenz = berechnungen(10, 5)"
    },
    {
      "question": "Python: String in List umwandeln",
      "answer": "mein_string = \"Hallo\"\nmeine_liste = list(mein_string)\nprint(meine_liste)  # Ausgabe: ['H', 'a', 'l', 'l', 'o']"
    },
    {
      "question": "Python: List in String umwandeln",
      "answer": "meine_liste = ['H', 'e', 'l', 'l', 'o']\nmein_string = ''.join(meine_liste)\nprint(mein_string)  # Ausgabe: \"Hello\""
    },
    {
      "question": "Python: String in Int umwandeln",
      "answer": "zahl_str = \"123\"\nzahl_int = int(zahl_str)\nprint(zahl_int)  # Ausgabe: 123"
    },
    {
      "question": "Python: String in float umwandeln",
      "answer": "zahl_str = \"12.34\"\nzahl_float = float(zahl_str)\nprint(zahl_float)  # Ausgabe: 12.34"
    },
    {
      "question": "Python: Zahl in String umwandeln",
      "answer": "zahl = 123\nzahl_str = str(zahl)\nprint(zahl_str)  # Ausgabe: \"123\""
    },
    {
      "question": "Python: String in Bool umwandeln",
      "answer": "string_true = \"True\"\nbool_wert = bool(string_true)\nprint(bool_wert)  # Ausgabe: True\n\nstring_false = \"False\"\nbool_wert = bool(string_false)\nprint(bool_wert)  # Ausgabe: True"
    },
    {
      "question": "Python: Klasse definieren",
      "answer": "class Rechteck:\n\tanzahl = 0\n\tdef __init__(self, breite, hoehe):\n\t\tself.hoehe = hoehe\n\t\tRechteck.anzahl += 1\n\tdef flaeche(self):\n\t\treturn self.breite * self.hoehe"
    },
    {
      "question": "Syntaxfehler",
      "answer": "Beschreibung: Syntaxfehler treten auf, wenn der Code gegen die Regeln der Programmiersprache verstößt. Es handelt sich um Fehler in der Grammatik des Codes."
    },
    {
      "question": "Semantische Fehler",
      "answer": "Beschreibung: Semantische Fehler sind schwerer zu erkennen, da der Code syntaktisch korrekt ist, aber nicht die beabsichtigte Logik erfüllt."
    },
    {
      "question": "Single Point of Truth (SPOT/SSOT)",
      "answer": "Besagt, dass es eine allgemeingültige und korrekte Datenquelle gibt."
    },
    {
      "question": "Hilfsmittel bei Syntaxfehlern",
      "answer": "Syntaxfehler werden von der IDE gefunden und in der Fehlerliste angezeigt."
    },
    {
      "question": "Hilfsmittel bei Logikfehlern",
      "answer": "Struktogramm\nClean Code\nKommentare\nDebugger"
    },
    {
      "question": "Type Casting (Typumwandlung)",
      "answer": "Type Casting ist die Umwandlung eines Werts von einem Datentyp in einen anderen (z.B. Zahl → Text).\n\n🟢 Implizites Casting:\n\t- Automatisch durch das System\n\t- Kein Datenverlust\n\n🔴 Explizites Casting:\n\t- Manuell durch Entwickler\n\t- Typ muss klar angegeben werden"
    }
  ],
  "Softwarequalität": [
    {
      "question": "Welche Hauptbereiche umfasst die Softwarequalität?",
      "answer": "Die Softwarequalität umfasst Funktionalität, Benutzbarkeit, Änderbarkeit, Effizienz, Übertragbarkeit und Zuverlässigkeit."
    },
    {
      "question": "Was versteht man unter Softwarequalität?",
      "answer": "Softwarequalität beschreibt, wie gut Software ihre Anforderungen erfüllt und wie zuverlässig, sicher und benutzbar sie ist."
    },
    {
      "question": "Was bedeutet FUNKTIONALITÄT bei Softwarequalität? ISO 9126",
      "answer": "Funktionalität umfasst: \n Richtigkeit => ob die Software die gewünschten Aufgaben korrekt und sicher erfüllt. \n Interoperabilität => mit anderer Software zusammenarbeiten können \n Richtigkeit => dass die Aufgaben das richtige Ergebnis zeigen \n Ordnungsmäßigkeit => Einhaltung von Normen und rechtlichen Vorgaben \n Sicherheit => Datensicherheit und Datenschutz"
    },
    {
      "question": "Was bedeutet BENUTZBARKEIT bei Softwarequalität? ISO 9126",
      "answer": "Benutzbarkeit umfasst: \n Verständlichkeit => leicht verständlich \n Erlernbarkeit => leichtes Erlernen des Produkts \n Bedienbarkeit => Barrierefreiheit \n Attraktivität => ansprechendes Design der Software (UX)"
    },
    {
      "question": "Was bedeutet ÄNDERBARKEIT bei Softwarequalität? ISO 9126",
      "answer": "Änderbarkeit umfasst: \n Analysierbarkeit => Fehler können z.B. über Logs gefunden werden \n Testbarkeit => Wie gut kann man die Software testen (am besten isoliert) \n Modifizierbarkeit => Kann man den Code einfach ändern, ohne andere Funktionen zu beeinträchtigen? \n Stabilität => Läuft die Software nach Änderungen stabil?"
    },
    {
      "question": "Was bedeutet EFFIZIENZ bei Softwarequalität? ISO 9126",
      "answer": "Effizienz umfasst: \n Verbrauchsverhalten => Wie viele Ressourcen werden verbraucht? \n Zeitverhalten => Wie schnell ist die Software? \n Beides steht im Konflikt, es ist ein Trade-off."
    },
    {
      "question": "Was bedeutet ÜBERTRAGBARKEIT bei Software? ISO 9126",
      "answer": "Übertragbarkeit umfasst: \n Anpassbarkeit => Anpassbar an die Umgebung, z.B. unterschiedliche CPUs oder Geräte \n Austauschbarkeit => Im Software-Lebenszyklus durch neue Software ersetzbar \n Installierbarkeit => Leicht installierbar, z.B. durch ein Installations-Tool (Wizard) \n Koexistenz => Die Software blockiert keine andere Software, z.B. durch Port-Konflikte"
    },
    {
      "question": "Was bedeutet ZUVERLÄSSIGKEIT bei Software? ISO 9126",
      "answer": "Zuverlässigkeit umfasst: \n Fehlertoleranz => Die Software stürzt bei Nutzerfehlern nicht ab \n Reife => Die Software soll vor der Auslieferung ausgereift sein \n Wiederherstellbarkeit => Fehler sollen rückgängig gemacht werden können"
    },
    {
      "question": "Welche Bereiche gibt es in der Softwarequalität nach ISO 9126?",
      "answer": "Funktionalität, Übertragbarkeit, Änderbarkeit, Effizienz, Benutzbarkeit und Zuverlässigkeit."
    },
    {
      "question": "Was ist Qualitätssicherung?",
      "answer": "Qualitätssicherung bezeichnet Maßnahmen zur Fehlervermeidung während der Entwicklung und Herstellung eines Produkts."
    },
    {
      "question": "Was ist Qualitätskontrolle?",
      "answer": "Qualitätskontrolle bezeichnet die Fehlererkennung nach der Herstellung, z.B. durch Tests."
    },
    {
      "question": "Was ist Barrierefreiheit?",
      "answer": "Software soll für alle Nutzergruppen zugänglich sein, z.B. durch Untertitel, Brailleschrift oder Spracherkennung."
    },
    {
      "question": "Was ist Softwareergonomie?",
      "answer": "Softwareergonomie umfasst intuitive Bedienung, Fehlervermeidung und Benutzerfreundlichkeit."
    },
    

  ],
  "GIT": [
    {
      "question": "Wie füge ich Dateien zum Staging-Bereich hinzu?",
      "answer": "git add . (Fügt alle geänderten oder neuen Dateien hinzu)\ngit add <Dateiname> (Fügt eine spezifische Datei hinzu)"
    },
    {
      "question": "Wie speichere ich die Änderungen mit einer Commit-Nachricht?",
      "answer": "git commit -m \"Deine Nachricht hier\" (Commitet die Änderungen mit einer Nachricht)"
    },
    {
      "question": "Wie sende ich meine lokalen Änderungen an das entfernte Repository?",
      "answer": "git push (Sendet die Änderungen an das entfernte Repository)\ngit push origin <branchname> (Push zu einem spezifischen Branch)"
    },
    {
      "question": "Wie hole ich die neuesten Änderungen aus dem entfernten Repository?",
      "answer": "git pull (Holt und integriert die neuesten Änderungen vom entfernten Repository)"
    },
    {
      "question": "Wie überprüfe ich den aktuellen Status meines Repositories?",
      "answer": "git status (Zeigt den aktuellen Status der Dateien und des Repositories)"
    },
    {
      "question": "Wie sehe ich die Commit-Historie?",
      "answer": "git log (Zeigt die vollständige Commit-Historie)\ngit log --oneline (Zeigt eine kurze Übersicht der Commits)"
    },
    {
      "question": "Wie klone ich ein entferntes Repository auf meinen Computer?",
      "answer": "git clone <URL> (Kopiert ein Repository von einer URL auf deinen lokalen Computer)"
    },
    {
      "question": "Wie liste ich alle Branches auf oder erstelle einen neuen Branch?",
      "answer": "git branch (Listet alle Branches im Repository)\ngit branch <neuerBranchname> (Erstellt einen neuen Branch)\ngit checkout <Branchname> (Wechselt zu einem anderen Branch)"
    },
    {
      "question": "Wie merge ich einen anderen Branch in meinen aktuellen Branch?",
      "answer": "git merge <branchname> (Fügt die Änderungen eines anderen Branches in den aktuellen Branch ein)"
    },
    {
      "question": "Wie setze ich Änderungen im Staging-Bereich oder Commit zurück?",
      "answer": "git reset (Setzt Änderungen im Staging-Bereich zurück)\ngit reset --soft HEAD~1 (Setzt den letzten Commit zurück, behält aber die Änderungen)\ngit reset --hard HEAD~1 (Setzt den letzten Commit und die Änderungen vollständig zurück)"
    }

  ],
  "Shell Program":[
    {
      "question": "Wie navigiere ich zu einem anderen Verzeichnis?",
      "answer": "cd <Pfad> (Wechselt in das angegebene Verzeichnis)"
    },
    {
      "question": "Wie liste ich die Dateien in einem Verzeichnis auf?",
      "answer": "ls (Listet alle Dateien und Ordner im aktuellen Verzeichnis)"
    },
    {
      "question": "Wie zeige ich den Inhalt einer Datei an?",
      "answer": "cat <Dateiname> (Zeigt den Inhalt der Datei an)"
    },
    {
      "question": "Wie erstelle ich eine neue Datei?",
      "answer": "touch <Dateiname> (Erstellt eine leere Datei)"
    },
    {
      "question": "Wie lösche ich eine Datei?",
      "answer": "rm <Dateiname> (Löscht eine Datei)"
    },
    {
      "question": "Wie erstelle ich ein neues Verzeichnis?",
      "answer": "mkdir <Verzeichnisname> (Erstellt ein neues Verzeichnis)"
    },
    {
      "question": "Wie lösche ich ein Verzeichnis?",
      "answer": "rmdir <Verzeichnisname> (Löscht ein Verzeichnis, wenn es leer ist)\nrm -r <Verzeichnisname> (Löscht ein Verzeichnis und dessen Inhalt)"
    },
    {
      "question": "Wie kopiere ich eine Datei?",
      "answer": "cp <Quelle> <Ziel> (Kopiert eine Datei von Quelle nach Ziel)"
    },
    {
      "question": "Wie verschiebe ich eine Datei?",
      "answer": "mv <Quelle> <Ziel> (Verschiebt eine Datei von Quelle nach Ziel)"
    },
    {
      "question": "Wie gebe ich den aktuellen Arbeitsordner aus?",
      "answer": "pwd (Zeigt den aktuellen Arbeitsordner)"
    },
    {
      "question": "Wie finde ich Hilfe zu einem Befehl?",
      "answer": "man <Befehl> (Zeigt die Hilfe für den angegebenen Befehl)\n--help (zeigt Hilfe zu einem Befehl, z. B. `ls --help`)"
    },
    {
      "question": "Wie führe ich ein Skript aus?",
      "answer": "./<Skriptname> (Führt ein Skript aus)"
    },
    {
      "question": "Wie gebe ich den Inhalt einer Datei zeilenweise aus?",
      "answer": "more <Dateiname> (Zeigt den Inhalt der Datei zeilenweise)"
    },
    {
      "question": "Wie navigiere ich zu einem anderen Verzeichnis?",
      "answer": "cd <Pfad> (Wechselt in das angegebene Verzeichnis)"
    },
    {
      "question": "Wie gehe ich zum übergeordneten Verzeichnis?",
      "answer": "cd .. (Wechselt in das übergeordnete Verzeichnis)"
    },
    {
      "question": "Wie gehe ich zum Home-Verzeichnis?",
      "answer": "cd ~ (Wechselt zum Home-Verzeichnis)\ncd $HOME (In PowerShell ebenfalls)"
    },
    {
      "question": "Wie navigiere ich zum Root-Verzeichnis?",
      "answer": "cd / (Wechselt zum Root-Verzeichnis in Bash)\ncd 'C:\\' (In PowerShell für das Root-Verzeichnis von Laufwerk C)"
    },
    {
      "question": "Wie navigiere ich in ein Verzeichnis mit Leerzeichen im Namen?",
      "answer": "cd \"<Verzeichnisname mit Leerzeichen>\" (In Bash und PowerShell mit Anführungszeichen)"
    },
    {
      "question": "Wie zeige ich den aktuellen Arbeitsordner?",
      "answer": "pwd (Zeigt den aktuellen Arbeitsordner in Bash und PowerShell)"
    },
    {
      "question": "Wie navigiere ich mit einem absoluten Pfad?",
      "answer": "cd /path/to/directory (Wechselt zu einem Verzeichnis mit einem absoluten Pfad in beiden Shells)"
    },
    {
      "question": "Wie navigiere ich mit einem relativen Pfad?",
      "answer": "cd <RelativerPfad> (Wechselt zu einem Verzeichnis relativ zum aktuellen Verzeichnis)"
    },
    {
      "question": "Wie navigiere ich zum letzten Verzeichnis, in dem ich war?",
      "answer": "cd - (Wechselt zum vorherigen Verzeichnis in Bash und PowerShell)"
    },
    {
      "question": "Wie liste ich alle Verzeichnisse und Dateien im aktuellen Verzeichnis auf?",
      "answer": "ls (Listet alle Dateien und Ordner im aktuellen Verzeichnis in Bash und PowerShell)"
    },
    {
      "question": "Wie gehe ich in das Home-Verzeichnis eines anderen Benutzers?",
      "answer": "cd ~<Benutzername> (In Bash, um ins Home-Verzeichnis eines anderen Benutzers zu wechseln)\nIn PowerShell: cd C:\\Users\\<Benutzername>"
    }
  ],
  "Extra": [
    {
      "question": "Was sind Cyber-Physische Systeme (CPS)?",
      "answer": "Vernetzte Systeme, die physische Prozesse mit digitaler Steuerung und Kommunikation verbinden (z.B. in Industrie 4.0, Smart Homes, autonome Fahrzeuge)."
    },
    {
      "question": "Wie funktioniert ein Cyber-Physisches System?",
      "answer": "Sensoren erfassen Daten → Regeln/KI treffen Entscheidungen → Aktoren führen Aktionen aus → Kommunikation mit anderen Geräten."
    },
    {
      "question": "Was für Sensoren gibt es in CPS?",
      "answer": "Temperatursensor (misst Wärme), Bewegungssensor (erkennt Bewegung), Lichtsensor (erfasst Helligkeit), Feuchtigkeitssensor (misst Luftfeuchte), Drucksensor (erfasst Druckänderungen)."
    },
    {
      "question": "Was für Aktoren gibt es in CPS?",
      "answer": "LED (zeigt Licht), Motor (erzeugt Bewegung), Relais (schaltet Strom), Heizelement (erzeugt Wärme), Display (zeigt Infos), Elektromagnet (zieht an), Lautsprecher (gibt Ton aus)."
    },
    {
      "question": "Was ist Industrie 4.0?",
      "answer": "Industrie 4.0 ist die Vernetzung von IoT, KI, Big Data , Cloud Computing, und Cyber-Physische Systeme (CPS)."
    },
    {
      "question": "Was sind die Herausforderungen bei Big Data?",
      "answer": "Große Datenmengen, komplexe Integration, Datenqualität, Verarbeitungsgeschwindigkeit und Datenschutz & -sicherheit."
    },
    {
      "question": "Was ist das Internet of Things (IoT)?",
      "answer": "IoT bezeichnet vernetzte Geräte, die Daten erfassen und intelligente Aktionen ausführen. Datenschutzrisiken sind eine Herausforderung."
    },

    {
      "question": "Was ist SOAP?",
      "answer": "SOAP (Simple Object Access Protocol) ist ein Protokoll für den Austausch strukturierter Informationen in Webdiensten. Es verwendet XML zur Codierung der Nachrichten und HTTP oder SMTP als Transportprotokoll."
    },
    {
      "question": "Was ist ein Binder/Linker?",
      "answer": "Ein Binder/Linker ist ein Programm, das alle Teile eines Programms (z.B. Bibliotheken) zusammenfügt und die endgültige ausführbare Datei erstellt."
    },
    {
      "question": "Was ist ein Lader/Loader?",
      "answer": "Ein Lader/Loader ist ein Programm, das die ausführbare Datei in den Arbeitsspeicher lädt und sie zur Ausführung bereitstellt."
    },
    {
      "question": "Nenne mir Maßnahmen zu Zugang, Zutritts- und Zugangskontrolle.",
      "answer": "Zugang: Mehrfaktor-Authentifizierung (MFA)\nZutritt: Elektronische Zutrittskontrollen (z. B. Smartcards, PIN-Codes), Biometrische Zugangskontrollen (z. B. Fingerabdruckscanner, Gesichtserkennung)\nZugriff: Role-Based Access Control (RBAC)"
    },
    {
      "question": "Was ist iSCSI (Internet Small Computer Systems Interface)?",
      "answer": "iSCSI ist ein Netzwerkprotokoll, das Block-Level-Zugriff auf Speichergeräte ermöglicht. Es wird häufig in Storage Area Networks (SAN) verwendet."
    },
    {
      "question": "Was ist Fibre Channel (FC)?",
      "answer": "Fibre Channel ist ein Hochgeschwindigkeitsnetzwerkprotokoll, das speziell für die Verbindung von Storage-Systemen und Servern in einem SAN entwickelt wurde."
    },
    {
      "question": "Was ist NFS (Network File System)?",
      "answer": "NFS ist ein Netzwerkprotokoll, das es einem Computer ermöglicht, Dateien über ein Netzwerk so zu verwenden, als ob sie auf einem lokalen Dateisystem gespeichert wären. Es wurde ursprünglich von Sun Microsystems entwickelt."
    },
    {
      "question": "Was ist SNMP (Simple Network Management Protocol)?",
      "answer": "SNMP ist ein weit verbreitetes Protokoll, das im Bereich des Monitorings und der Verwaltung von Netzwerkgeräten verwendet wird. Es ermöglicht das Sammeln und Überwachen von Informationen von Netzwerkgeräten wie Routern, Switches, Servern, Druckern und anderen netzwerkfähigen Geräten. Port 161 für Nachrichten und 162 für Agenten."
    },
    {
      "question": "Was ist Predictive Maintenance (vorausschauende Wartung)?",
      "answer": "Predictive Maintenance ist eine moderne Instandhaltungsstrategie, bei der technische Systeme und Anlagen kontinuierlich überwacht werden, um zukünftige Ausfälle frühzeitig vorherzusagen – bevor sie tatsächlich eintreten."
    },
    {
      "question": "Was zählt zum unlauteren Wettbewerb (UWG)?",
      "answer": "Irreführende Werbung\nAggressive Verkaufsmethoden (z.B. Zwang)\nHerabwürdigung von Mitbewerbern\nLockvogelangebote (nicht erhältliche Waren zu extremen Preisen)\nSchneeballsysteme\nFalsche Versprechen oder Täuschung"
    },
    {
      "question": "Wann gelten Allgemeine Geschäftsbedingungen (AGB) nicht?",
      "answer": "Wenn sie nicht eindeutig mitgeteilt wurden\nWenn sie gegen geltendes Recht verstoßen\nWenn sie überraschende Klauseln enthalten (z.B. ungewöhnliche Regelungen, mit denen der Kunde nicht rechnen musste)"
    },
    {
      "question": "Ab wann gelten AGB?",
      "answer": "Wenn der Kunde ausdrücklich oder stillschweigend zugestimmt hat (z.B. durch Unterschrift oder durch Nutzung der Dienstleistung)"
    },
    {
      "question": "Wie muss ein Unternehmen auf die AGB hinweisen?",
      "answer": "Schriftlich, mündlich oder digital\nIm Laden: deutlich sichtbar aushängen\nOnline: vor dem Kauf zur Zustimmung bereitstellen"
    },
    {
      "question": "Was sind AGB?",
      "answer": "Vorformulierte Vertragsbedingungen, die für viele Verträge gelten sollen"
    },
    {
      "question": "Was versteht man unter Compliance?",
      "answer": "Compliance bedeutet die Einhaltung von Gesetzen, Vorschriften, Richtlinien und ethischen Standards durch Unternehmen oder Personen"
    },
    {
      "question": "Was versteht man unter Regelkonformität?",
      "answer": "Regelkonformität heißt, sich an interne und externe Vorgaben zu halten\nSie ist ein Teilbereich von Compliance und betrifft konkret das Einhalten von Regeln, Vorschriften und Gesetzen"
    },
    {
      "question": "Was ist Customer Relationship Management (CRM)?",
      "answer": "CRM ist das Kundenbeziehungsmanagement\nZiel: Verbesserung der Kundenbindung, -betreuung und der Geschäftsbeziehungen"
    },
    {
      "question": "Wie ist das Widerrufsrecht bei Fernabsatzverträgen und Online-Käufen?",
      "answer": "14 Tage Widerrufsrecht ab Erhalt der Ware\nAchtung: Es gibt Ausnahmen, z.B. bei individuell angefertigten Waren oder versiegelter Software"
    },
    {
      "question": "Was ist Open Data (offene Daten)?",
      "answer": "Frei zugängliche und kostenlose Daten, die von jedem verwendet, geteilt und weiterbearbeitet werden dürfen\nBeispiel: Wetterdaten vom Deutschen Wetterdienst"
    },
    {
      "question": "Was ist eine API-Schnittstelle (Application Programming Interface)?",
      "answer": "Eine Programmierschnittstelle, über die Software-Anwendungen automatisch miteinander kommunizieren\nBeispiel: Eine App greift über eine API auf Wetterdaten zu"
    },
    {
      "question": "Was ist der Kontinuierliche Verbesserungsprozess (KVP)?",
      "answer": "Ein Prozess zur laufenden Verbesserung in kleinen Schritten\nEr basiert oft auf dem PDCA-Zyklus (Plan – Do – Check – Act)"
    },
    {
      "question": "Was sind die Q7 – die sieben Qualitätswerkzeuge im KVP?",
      "answer": "1. Fehlersammelkarte (Checkliste): Erfassung von Fehlerarten und -häufigkeiten\n2. Verlaufsdiagramm (Liniendiagramm): Zeigt zeitliche Entwicklungen eines Prozesses oder Wertes\n3. Pareto-Diagramm: Sortiert Probleme nach ihrer Bedeutung nach Dringlichkeit in einem Balkendiagramm (Pareto ist bekannt für 80/20-Regel)\n4. Ishikawa- oder Fischgrät-Diagramm: Zeigt Ursachen eines Problems und deren Verzweigungen\n5. Histogramm (Häufigkeitsdiagramm): Zeigt die Verteilung und Häufigkeit von Fehlern\n6. Streudiagramm: Zeigt Zusammenhänge zwischen Fehlern (Diagramm mit Punktewolke)\n7. Regelkarte (Control Chart): Zeigt Prozessverläufe über die Zeit und Abweichungen"
    },
    {
      "question": "Was steht in einem Abnahmeprotokoll?",
      "answer": "Wurden alle vereinbarten Leistungen erbracht?\nGibt es sichtbare Mängel oder Schäden?\nDatum, Ort und Beteiligte\nUnterschriften aller Parteien\nEvtl. Fristen zur Mängelbeseitigung"
    },
    {
      "question": "Was bedeutet Barrierefreiheit?",
      "answer": "Barrierefreiheit bedeutet, dass Produkte, Dienstleistungen oder Gebäude so gestaltet sind, dass sie für alle Menschen – auch mit Einschränkungen – nutzbar sind"
    },
    {
      "question": "Auf was sollte man bei der Auswahl eines geeigneten IT-Sicherheitsproduktes achten?",
      "answer": "DSGVO BDSG konform\nSecurity by design\nKompatibilität mit vorhandenen Produkten\nBedienbarkeit\nHersteller und Produktvertrauen\nKundensupport\nSkalierbarkeit und Zukunftssicherheit\nPreis-Leistungs-Verhältnis"
    },
    {
      "question": "Wie kann man IT-Systeme objektiv bewerten (IT-Grundschutzmodellierung)?",
      "answer": "1. Schutzbedarfsfeststellung\n2. Modellierung des Informationsverbundes\n3. Gefährdungsanalyse\n4. Auswahl geeigneter Sicherheitsmaßnahmen\n5. Dokumentation und Umsetzung\n6. Regelmäßige Überprüfung / Audit"
    },
    {
      "question": "Nenne Richtlinien für Entwickler für IT-Sicherheitsmaßnahmen.",
      "answer": "Security by design (Sicherheit bereits während der Softwareentwicklung)\nPrivacy by Design (Der Schutz personenbezogener Daten ist von Anfang an integriert.)\nNur starke Passwörter erlauben\nVerschlüsselungen (Nichts in Klartext stehen haben)\nNur vertrauenswürdige Bibliotheken verwenden\nAuf DSGVO und BDSG achten\nSicherheitsupdates\nZugriffsrechte korrekt setzen"
    },
    {
      "question": "Berate einen Privathaushalt in IT-Sicherheit. Was würdest du empfehlen?",
      "answer": "Antivirenprogramm\nRegelmäßige Updates\nStarke Passwörter\nAufklärung über Phishing und Social Engineering"
    },
    {
      "question": "Was machst du, um die IT-Sicherheit eines Unternehmens einzuführen?",
      "answer": "Implementierung vom ISMS\nRegelmäßige Sicherheits-Audits\nMitarbeiterschulung\nNotfall- und Wiederherstellungspläne"
    },
    {
      "question": "Was ist ein Device Security Check?",
      "answer": "Ein Device Security Check ist eine gründliche Überprüfung der Sicherheitsaspekte eines Geräts. Diese Überprüfung umfasst mehrere Maßnahmen und Tests, um sicherzustellen, dass das Gerät keine Schwachstellen aufweist und dass die Sicherheitsrichtlinien und -vorgaben eingehalten werden."
    },
    {
      "question": "Was ist Identity Management (Identitätsmanagement)?",
      "answer": "Die Verwaltung von Benutzeridentitäten in einer Organisation. Dies beinhaltet die Erstellung, Verwaltung und Deaktivierung von Benutzerkonten, einschließlich der zugehörigen persönlichen Daten und Authentifizierungsinformationen (z. B. Benutzernamen, Passwörter, biometrische Daten)."
    },
    {
      "question": "Was ist Access Management (Zugriffsmanagement)?",
      "answer": "Die Verwaltung der Berechtigungen und Rechte, die ein Benutzer auf bestimmte IT-Ressourcen hat. Dies sorgt dafür, dass ein Benutzer nur auf die Daten, Anwendungen oder Systeme zugreifen kann, für die er autorisiert ist."
    },
    {
      "question": "Was ist Benutzeridentität (Identity)?",
      "answer": "Benutzeridentitäten sind eindeutige Profile, die jeder Person oder jedem Benutzer in einem System zugeordnet werden. Diese Profile umfassen persönliche Informationen und Authentifizierungsmerkmale wie Passwörter, Token oder biometrische Daten."
    },
    {
      "question": "Was ist Authentifizierung (Authentication)?",
      "answer": "Authentifizierung stellt sicher, dass die Person, die auf ein System zugreifen möchte, tatsächlich die ist, die sie vorgibt zu sein. Dies kann durch verschiedene Methoden erfolgen, wie z.B. Passwörter, Zwei-Faktor-Authentifizierung (2FA), biometrische Merkmale oder Smartcards."
    },
    {
      "question": "Was ist Autorisierung (Authorization)?",
      "answer": "Autorisierung regelt, welche Ressourcen oder Informationen einem authentifizierten Benutzer zugänglich sind und welche Aktionen er auf diesen Ressourcen ausführen darf (Lesen, Schreiben, Löschen, etc.). Dies wird häufig über Rollen- und Rechtesysteme (Role-Based Access Control, RBAC) verwaltet."
    },
    {
      "question": "Was ist Single Sign-On (SSO)?",
      "answer": "Single Sign-On ermöglicht es Benutzern, sich einmalig anzumelden und dann auf mehrere Anwendungen und Systeme ohne weitere Anmeldevorgänge zuzugreifen. SSO vereinfacht den Zugriff und erhöht die Sicherheit, indem es die Anzahl der notwendigen Authentifizierungen reduziert."
    },
    {
      "question": "Was ist (Role-Based Access Control, RBAC)?",
      "answer": "Bei RBAC werden Benutzern verschiedene Rollen zugewiesen, die mit bestimmten Berechtigungen und Zugriffsebenen verbunden sind. Diese Methode vereinfacht die Verwaltung von Zugriffsrechten und sorgt für eine klare Trennung der Verantwortlichkeiten."
    },
    {
      "question": "Was ist Business-Continuity-Planung (BCP)?",
      "answer": "Die Entwicklung und Umsetzung eines Business Continuity Plans stellt sicher, dass das Unternehmen auch bei einem Vorfall schnell wieder arbeitsfähig ist."
    },
    {
      "question": "Wie erfasst man Anforderungen eines Projektes?",
      "answer": "Interviews mit Stakeholdern, Workshops, Fragebögen, User Stories / Use Cases und Prototypen"
    }
  ],

};

export { cardSets };
