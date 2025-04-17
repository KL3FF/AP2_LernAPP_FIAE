const cardSets = {
  "IT-Tec": [
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
      "question": "Kann eine private IP-Adresse im Internet erreichbar sein?",
      "answer": "Nein, private IP-Adressen sind im Internet nicht direkt erreichbar. Sie können jedoch durch NAT oder einen Proxy-Server mit dem Internet kommunizieren."
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
      "question": "Was ist ein Strukturmuster?",
      "answer": "Ein Strukturmuster hilft dabei, Klassen oder Objekte so zu organisieren, dass sie effizient zusammenarbeiten und die Struktur des Systems verbessern."
    },
    {
      "question": "Was ist ein Beispiel für ein Strukturmuster?",
      "answer": "Ein Beispiel für ein Strukturmuster ist das Facade-Pattern."
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
      "question": "Was ist ein Verhaltensmuster?",
      "answer": "Verhaltensmuster definieren, wie Objekte miteinander kommunizieren und interagieren sollen."
    },
    {
      "question": "Was sind Beispiele für Verhaltensmuster?",
      "answer": "Beispiele für Verhaltensmuster sind das Observer-Pattern und das Command-Pattern."
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
      "answer": "Der Hauptvorteil von NAS ist die zentrale Verwaltung von Daten, die über ein Netzwerk von mehreren Benutzern zugänglich sind, was die Datensicherung und das Teilen von Dateien vereinfacht."
    },
    {
      "question": "Wie funktioniert NAS?",
      "answer": "NAS ist ein eigenständiger Server, der über das Netzwerk verbunden ist und als zentraler Speicherort für Daten dient. Nutzer können über Dateifreigaben und Netzwerkprotokolle wie SMB, NFS oder AFP auf diese Daten zugreifen."
    },
    {
      "question": "Was ist SAN (Storage Area Network)?",
      "answer": "SAN ist ein spezialisiertes Netzwerk, das Speicherressourcen miteinander verbindet und diese Speicher über ein eigenes Netzwerk mit hoher Geschwindigkeit bereitstellt. Es bietet schnellen Zugriff auf Block-Level-Daten und wird hauptsächlich in großen Unternehmen genutzt."
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
      question: "Was ist der Netzanteil bei 255.255.255.0?",
      answer: "Beispiel: 192.168.1.0"
    },
    {
      question: "Was ist der Hostanteil bei 192.168.1.10 mit 255.255.255.0?",
      answer: "Hostanteil ist: 0.0.0.10"
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

    // Gründe für Netzwerke
    {
      question: "Welche Gründe gibt es für den Einsatz von Netzwerken?",
      answer: "• Ressourcensharing (z.B. Drucker)\n• Datasharing\n• Softwaresharing\n• Prozessorsharing\n• Informationsaustausch\n• Sicherheit & Redundanz"
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
    },  // Peer to Peer
    {
      question: "Was ist ein Peer-to-Peer-Netzwerk?",
      answer: "In einem Peer-to-Peer-Netzwerk (P2P) sind alle Geräte gleichberechtigt und können sowohl als Client als auch als Server fungieren. Es gibt keinen zentralen Server."
    },
    {
      question: "Wann ist ein Peer-to-Peer-Netzwerk sinnvoll?",
      answer: "Ein P2P-Netzwerk ist sinnvoll, wenn kleine Netzwerke ohne zentrale Verwaltung benötigt werden, z.B. in einem Heimnetzwerk oder bei Dateifreigaben zwischen einzelnen Computern."
    },

    // Client-Server
    {
      question: "Was ist der Unterschied zwischen einem Client-Server-Netzwerk und einem Peer-to-Peer-Netzwerk?",
      answer: "In einem Client-Server-Netzwerk gibt es einen zentralen Server, der Dienste anbietet (z.B. Datenbanken, Dateiserver), während Clients diese Dienste anfordern. In einem Peer-to-Peer-Netzwerk gibt es keine zentrale Instanz."
    },
    {
      question: "Was ist ein Client in einem Client-Server-Netzwerk?",
      answer: "Ein Client ist ein Gerät, das Dienste von einem zentralen Server anfordert, z.B. ein Computer, der eine Webseite von einem Webserver abruft."
    },
    {
      question: "Was ist ein Server in einem Client-Server-Netzwerk?",
      answer: "Ein Server stellt Dienste bereit, die von den Clients angefordert werden, z.B. ein Webserver, der Webseiten liefert, oder ein Mailserver, der E-Mails verwaltet."
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

    // Switch
    {
      question: "Was ist der Unterschied zwischen einem Hub und einem Switch?",
      answer: "Ein Switch leitet Datenpakete nur an den richtigen Empfänger weiter, indem er erkennt, welches Gerät an welchem Port angeschlossen ist, während ein Hub die Daten an alle Geräte sendet."
    },
    {
      question: "Warum sind Switches effizienter als Hubs?",
      answer: "Switches sind effizienter, da sie den Datenverkehr gezielt an den richtigen Empfänger senden, wodurch der Datenfluss optimiert wird und weniger Kollisionen entstehen."
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

    // Bridge
    {
      question: "Was ist eine Bridge in Netzwerken?",
      answer: "Eine Bridge verbindet zwei Netzwerke oder Netzwerksegmente miteinander und sorgt dafür, dass sie wie ein einziges Netzwerk arbeiten, indem sie nur notwendigen Datenverkehr weiterleitet."
    },
    {
      question: "Warum werden Bridges heutzutage seltener verwendet?",
      answer: "Die Funktion von Bridges ist heute oft in Switches integriert, die effizienter arbeiten, daher sind sie in modernen Netzwerken weniger verbreitet."
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
      answer: "Ein VLAN (Virtual Local Area Network) unterteilt ein physisches Netzwerk in mehrere virtuelle Netzwerke. So können Geräte in unterschiedlichen, isolierten Netzwerken arbeiten, obwohl sie physisch im gleichen Netzwerk sind."
    },
    {
      question: "Warum werden VLANs eingesetzt?",
      answer: "VLANs bieten mehr Sicherheit, da Geräte in verschiedenen VLANs nicht direkt miteinander kommunizieren können. Sie verbessern die Performance, indem sie den Broadcast-Verkehr verringern, und bieten Flexibilität, da keine physische Änderung an der Infrastruktur nötig ist."
    },

    // Funktionsweise von VLANs
    {
      question: "Wie funktionieren VLANs?",
      answer: "VLANs werden mithilfe von Switches erstellt, die den Datenverkehr zwischen den VLANs steuern. Jedes Datenpaket bekommt ein Tag, das angibt, zu welchem VLAN es gehört. Für die Kommunikation zwischen VLANs ist häufig ein Router notwendig (Inter-VLAN Routing)."
    },

    // VLAN-Tagging
    {
      question: "Was ist VLAN-Tagging?",
      answer: "VLAN-Tagging ist der Prozess, bei dem jedem Datenpaket ein Tag hinzugefügt wird, das anzeigt, zu welchem VLAN es gehört. Dies ermöglicht es, den Verkehr innerhalb des VLANs korrekt zu verwalten."
    },
    // VLAN-Beispiele
    {
      question: "Gib ein Beispiel für ein VLAN für die Verwaltung.",
      answer: "Ein VLAN für die Verwaltung ist nur für Administratoren und Verwaltungspersonal zugänglich. Es bietet mehr Sicherheit, da es vom Rest des Netzwerks getrennt ist."
    },
    {
      question: "Was ist ein VLAN für Mitarbeiter?",
      answer: "Ein VLAN für Mitarbeiter trennt die Mitarbeitergeräte vom Rest des Netzwerks. Es sorgt für eine bessere Netzwerkorganisation und Sicherheit."
    },
    {
      question: "Wie funktioniert ein VLAN für Gäste?",
      answer: "Ein VLAN für Gäste ermöglicht den Gästen Zugang zum WLAN, jedoch ohne Zugriff auf interne Netzwerke. Dies schützt vertrauliche Unternehmensressourcen."
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

    // Datensicherung
    {
      question: "Was ist der Unterschied zwischen differenzieller und inkrementeller Sicherung?",
      answer: "Die differenzielle Sicherung sichert alle Daten, die seit der letzten vollständigen Sicherung geändert wurden, während die inkrementelle Sicherung nur die Daten sichert, die seit der letzten Sicherung verändert wurden."
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
    }
  ],
  "AEuP": [
    {
      "question": "Wofür steht REST in REST-API?",
      "answer": "REST steht für Representational State Transfer."
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
      "question": "Welche Hauptbereiche umfasst die Softwarequalität?",
      "answer": "Die Softwarequalität umfasst Funktionalität, Benutzbarkeit, Veränderbarkeit, Effizienz, Übertragbarkeit und Zuverlässigkeit."
    },
    {
      "question": "Was versteht man unter Softwarequalität?",
      "answer": "Softwarequalität beschreibt, wie gut Software ihre Anforderungen erfüllt und wie zuverlässig, sicher und benutzbar sie ist."
    },
    {
      "question": "Was bedeutet Funktionalität bei Softwarequalität?",
      "answer": "Funktionalität beschreibt, ob die Software die gewünschten Aufgaben korrekt und sicher erfüllt."
    },
    {
      "question": "Was gehört zur Benutzbarkeit von Software?",
      "answer": "Benutzbarkeit umfasst Verständlichkeit, Erlernbarkeit, Bedienbarkeit und Attraktivität der Software."
    },
    {
      "question": "Was ist mit Effizienz in der Softwarequalität gemeint?",
      "answer": "Effizienz bedeutet, dass die Software wenig Ressourcen verbraucht und schnell arbeitet."
    },
    {
      "question": "Was beschreibt die Veränderbarkeit von Software?",
      "answer": "Veränderbarkeit zeigt, wie leicht eine Software analysiert, getestet, modifiziert oder stabil gehalten werden kann."
    },
    {
      "question": "Was versteht man unter Übertragbarkeit?",
      "answer": "Übertragbarkeit bedeutet, wie gut sich Software auf andere Systeme oder Plattformen anpassen lässt."
    },
    {
      "question": "Was bedeutet Zuverlässigkeit bei Software?",
      "answer": "Zuverlässigkeit meint, dass die Software auch bei Fehlern stabil läuft und reif für den Einsatz ist."
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
    {
      "question": "Wofür steht die Abkürzung CRUD in der Datenverarbeitung?",
      "answer": "Create, Read, Update, Delete – das sind die vier grundlegenden Operationen zur Bearbeitung von Daten in einer Datenbank."
    },
    {
      "question": "Was gehört zur Funktionalität bei Softwarequalität?",
      "answer": "Angemessenheit, Sicherheit, Richtigkeit, Interoperabilität"
    },
    {
      "question": "Welche Aspekte umfasst die Benutzbarkeit von Software?",
      "answer": "Attraktivität, Bedienbarkeit, Erlernbarkeit, Verständlichkeit"
    },
    {
      "question": "Welche Eigenschaften beschreiben die Veränderbarkeit von Software?",
      "answer": "Analysierbarkeit, Testbarkeit, Modifizierbarkeit, Stabilität"
    },
    {
      "question": "Was beschreibt die Effizienz bei Softwarequalität?",
      "answer": "Trade-Off zwischen Verbrauchsverhalten und Zeitverhalten"
    },
    {
      "question": "Welche Kriterien zählen zur Übertragbarkeit von Software?",
      "answer": "Anpassbarkeit, Austauschbarkeit, Koexistenz mit anderen Programmen, Installierbarkeit"
    },
    {
      "question": "Was zählt zur Zuverlässigkeit bei Softwarequalität?",
      "answer": "Fehlertoleranz, Reife"
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
      question: "Was ist die Top-Down-Methode?",
      answer: "Die Top-Down-Methode zerlegt ein Gesamtproblem in kleinere Teilaufgaben, die nach und nach gelöst werden."
    },
    {
      question: "Was beschreibt die Bottom-Up-Methode?",
      answer: "Die Bottom-Up-Methode beginnt mit der Entwicklung von Einzelmodulen, die später zu einem Gesamtsystem zusammengefügt werden."
    },
    {
      question: "Was ist die Up-Down-Methode?",
      answer: "Die Up-Down-Methode zerteilt Aufgaben in Teilprobleme und entwickelt kritische Teilaufgaben durch Module."
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
      question: "Warum ist die Testphase wichtig?",
      answer: "Das Testen stellt sicher, dass die Software fehlerfrei funktioniert und den Anforderungen entspricht."
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
      question: "Was ist die Testplanung?",
      answer: "Festlegung der Teststrategie, Testziele und Ressourcen."
    },
    {
      question: "Was ist der Testentwurf?",
      answer: "Erstellen von Testfällen basierend auf den Anforderungen."
    },
    {
      question: "Was ist die Testvorbereitung?",
      answer: "Vorbereitung der Testumgebung und Testdaten."
    },
    {
      question: "Was ist die Testdurchführung?",
      answer: "Ausführen der Testfälle und Dokumentation der Ergebnisse."
    },
    {
      question: "Was ist die Testauswertung?",
      answer: "Auswerten der Testergebnisse im Vergleich zu den erwarteten Ergebnissen."
    },
    {
      question: "Was ist der Testabschluss?",
      answer: "Dokumentation der Ergebnisse und Lessons Learned."
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
      question: "Was ist statische Code-Analyse?",
      answer: "Prüfen des Codes auf Fehler ohne Programmausführung."
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
    }
  ],
  "WISO": [
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
      "answer": "Eine fristlose Kündigung mit wichtigem Grund, z. B. bei Diebstahl oder ausbleibender Lohnzahlung."
    },
    {
      "question": "Wer hat besonderen Kündigungsschutz?",
      "answer": "Schwangere, Schwerbehinderte, Azubis, Pflegezeitnehmende, JAV, Betriebsräte, Datenschutzbeauftragte."
    },
    {
      "question": "Wie lange gilt der Kündigungsschutz nach Ende einer Amtszeit z. B. als Betriebsrat?",
      "answer": "Ein Jahr nach Ende der Amtszeit."
    },
    {
      "question": "Wann gilt das Kündigungsschutzgesetz (KSchG)?",
      "answer": "Wenn der Betrieb mehr als 10 Mitarbeiter hat und das Arbeitsverhältnis länger als 6 Monate besteht."
    },
    {
      "question": "Wie werden Teilzeitkräfte bei der Mitarbeiterzahl berechnet?",
      "answer": "30 Std./Woche = 0,75; 20 Std./Woche = 0,5; Vollzeit = 1,0"
    },
    {
      "question": "Was sind die drei Kündigungsgründe laut KSchG?",
      "answer": "Personenbedingt, verhaltensbedingt, betriebsbedingt."
    },
    {
      "question": "Was bedeutet soziale Rechtfertigung bei Kündigungen?",
      "answer": "Die Kündigung muss auf anerkannten Gründen beruhen, z. B. Krankheit oder Stellenabbau."
    },
    {
      "question": "Was muss vor einer verhaltensbedingten Kündigung passieren?",
      "answer": "In der Regel muss vorher eine Abmahnung erfolgen."
    },
    {
      "question": "Was prüft der Arbeitgeber vor einer Kündigung nach KSchG?",
      "answer": "Ob ein milderes Mittel wie z. B. Versetzung möglich ist."
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
      "answer": "Nur mit wichtigem Grund, z. B. Berufswechsel oder Diebstahl."
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
      question: "Was sind spezielle Monopolformen?",
      answer: "Spezielle Monopolformen sind: Angebotsmonopol (1 Anbieter, viele Nachfrager), Nachfragemonopol (viele Anbieter, 1 Nachfrager), beschränktes Angebotsmonopol (1 Anbieter, wenige Nachfrager) und beschränktes Nachfragemonopol (viele Anbieter, 1 Nachfrager)."
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
    { "question": "Was zeigt die Gewinnschwelle?", "answer": "Wie viele Stücke verkauft werden müssen für Gewinn." }
  ],
  "IT-System": [
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
  "Projektmanagement": [
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
      answer: "Der Software-Lebenszyklus umfasst die Phasen Anforderungsanalyse, Design/Entwurf, Implementierung, Test, Abnahme und Wartung."
    },
    {
      question: "Was sind die Projektphasen?",
      answer: "Die Projektphasen sind Initialisierung, Analyse, Planen, Ausführen, Überwachen/Testen, Abschluss/Abnahme und Wartung."
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
      "answer": "Die Aktivierungsfunktion entscheidet, ob ein Neuron ein Signal weitergibt. Sie verarbeitet die gewichtete Summe der Eingaben und gibt z. B. 0 oder 1 aus oder einen Wert dazwischen."
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
  ]
};

export { cardSets };
