const storiesData = [
    {
        title: "El Encuentro en el Parque y los Agapornis",
        text: "Carlos trabaja diseñando maquinaria industrial, una labor que exige precisión milimétrica frente a la pantalla. Sin embargo, su verdadera paz la encuentra al amanecer en su pequeño jardín, observando a sus queridos pájaros agapornis, cuyas interacciones sociales siempre le enseñan algo nuevo sobre la empatía. Hoy decidió dar un paso fuera de su zona de confort: fue al parque local donde un grupo de vecinos organizaba un partido de fútbol informal. Al principio, su timidez natural le hacía dudar en acercarse, sintiendo el peso de la introversión. Pero respiró hondo, se acercó a la banda y preguntó si necesitaban un jugador más. Con una sonrisa, le pasaron el peto. En ese instante, comprendió que las barreras sociales a veces son solo muros mentales que construimos nosotros mismos. El lenguaje del fútbol y la naturaleza no necesitan muchas palabras para unir a las personas.",
        vocabulary: [
            { es: "diseñando (diseñar)", tr: "tasarlayarak (tasarlamak)" },
            { es: "la maquinaria industrial", tr: "endüstri makinaları" },
            { es: "una labor", tr: "bir iş / görev / emek" },
            { es: "exige (exigir)", tr: "gerektirir (gerektirmek)" },
            { es: "la precisión milimétrica", tr: "milimetrik hassasiyet" },
            { es: "frente a la pantalla", tr: "ekranın karşısında" },
            { es: "sin embargo", tr: "bununla birlikte / ama" },
            { es: "su verdadera paz", tr: "gerçek huzuru" },
            { es: "al amanecer", tr: "şafak vaktinde / gün doğumunda" },
            { es: "observando (observar)", tr: "gözlemleyerek (gözlemlemek)" },
            { es: "sus queridos pájaros", tr: "sevgili kuşları" },
            { es: "los agapornis", tr: "muhabbet kuşları / cennet papağanları" },
            { es: "cuyas interacciones", tr: "ki onların etkileşimleri" },
            { es: "enseñan (enseñar)", tr: "öğretirler (öğretmek)" },
            { es: "la empatía", tr: "empati / duygudaşlık" },
            { es: "dar un paso", tr: "bir adım atmak" },
            { es: "fuera de su zona de confort", tr: "konfor alanının dışına" },
            { es: "un grupo de vecinos", tr: "bir grup komşu" },
            { es: "un partido de fútbol informal", tr: "resmi olmayan / mahalle futbol maçı" },
            { es: "al principio", tr: "başlangıçta / ilk başta" },
            { es: "la timidez natural", tr: "doğal çekingenlik / utangaçlık" },
            { es: "le hacía dudar", tr: "tereddüt etmesine yol açıyordu" },
            { es: "acercarse", tr: "yaklaşmak" },
            { es: "sintiendo el peso", tr: "ağırlığını hissederek" },
            { es: "la introversión", tr: "içe kapanıklık" },
            { es: "respiró hondo", tr: "derin bir nefes aldı" },
            { es: "la banda", tr: "saha kenarı / kenar çizgisi" },
            { es: "un jugador más", tr: "bir oyuncu daha" },
            { es: "con una sonrisa", tr: "bir gülümsemeyle" },
            { es: "le pasaron el peto", tr: "ona antrenman yeleğini uzattılar" },
            { es: "en ese instante", tr: "o anda" },
            { es: "comprendió (comprender)", tr: "anladı / kavradı (anlamak)" },
            { es: "las barreras sociales", tr: "sosyal engeller" },
            { es: "a veces", tr: "bazen" },
            { es: "muros mentales", tr: "zihinsel duvarlar" },
            { es: "construimos (construir)", tr: "inşa ediyoruz (inşa etmek)" },
            { es: "el lenguaje", tr: "dil / lisan" },
            { es: "unir a las personas", tr: "insanları birleştirmek" }
        ],
        quiz: [
            { q: "'Al amanecer' ifadesinin Türkçe karşılığı nedir?", options: ["Gece yarısı", "Şafak vaktinde / Gün doğumunda", "Öğle yemeğinde", "Akşamüstü"], answer: 1 },
            { q: "'Dudar' fiili metinde hangi anlamda kullanılmıştır?", options: ["Koşmak", "Tereddüt etmek / Şüphe duymak", "Gülmek", "Kızmak"], answer: 1 },
            { q: "'Acercarse' ne demektir?", options: ["Uzaklaşmak", "Yaklaşmak", "Oturmak", "Beklemek"], answer: 1 },
            { q: "'Respiró hondo' cümlesi ne anlama gelir?", options: ["Hızlıca koştu", "Derin bir nefes aldı", "Yüksek sesle bağırdı", "Su içti"], answer: 1 },
            { q: "Futbol maçında Carlos'a uzatılan 'el peto' nedir?", options: ["Futbol topu", "Antrenman yeleği", "Su şişesi", "Krampon"], answer: 1 },
            { q: "'Muros mentales' ifadesinin anlamı nedir?", options: ["Taş duvarlar", "Zihinsel duvarlar", "Yüksek binalar", "Açık kapılar"], answer: 1 },
            { q: "'Sin embargo' bağlacı hangi anlamı verir?", options: ["Çünkü", "Bununla birlikte / Ama", "Ayrıca", "Sonuç olarak"], answer: 1 },
            { q: "'Exigir' fiilinin Türkçe karşılığı nedir?", options: ["Gerektirmek / Talep etmek", "Vazgeçmek", "Unutmak", "Saklamak"], answer: 0 },
            { q: "'Comprendió' kelimesi hangi fiilden gelir ve ne demektir?", options: ["Comprar - Satın aldı", "Comprender - Anladı / Kavradı", "Comer - Yedi", "Compartir - Paylaştı"], answer: 1 },
            { q: "'Una labor' kelimesinin anlamı nedir?", options: ["Bir tatil", "Bir iş / görev / emek", "Bir oyun", "Bir hayvan"], answer: 1 }
        ]
    },
    {
        title: "Viajar para Conectar con el Mundo",
        text: "Para un ingeniero enfocado en planos y estructuras complejas como Carlos, viajar al extranjero representa mucho más que cambiar de paisaje; es una oportunidad vital para expandir sus horizontes relacionales. A menudo, las personas reservadas encuentran en los viajes una excusa perfecta para practicar la escucha activa y perder el miedo al qué dirán. En su último viaje a un pueblo montañoso, se sentó en una pequeña cafetería rodeada de naturaleza virgen. Vio a unos lugareños charlando animadamente sobre un partido de fútbol local. Armándose de valor, Carlos se atrevió a hacer una pregunta sobre el marcador del equipo. Esa simple frase rompió el hielo. Descubrió que compartir una pasión común genera puentes instantáneos entre almas introvertidas y el resto del mundo. Volvió a casa con la certeza de que cada nueva conexión humana nutre tanto como un nuevo paisaje.",
        vocabulary: [
            { es: "enfocado en", tr: "odaklanmış" },
            { es: "planos y estructuras complejas", tr: "karmaşık planlar ve yapılar" },
            { es: "viajar al extranjero", tr: "yurt dışına seyahat etmek" },
            { es: "representa (representar)", tr: "temsil eder / ifade eder" },
            { es: "cambiar de paisaje", tr: "manzara / ortam değiştirmek" },
            { es: "una oportunidad vital", tr: "hayati bir fırsat" },
            { es: "expandir sus horizontes", tr: "ufuklarını genişletmek" },
            { es: "relacionales", tr: "ilişkisel / sosyal ilişkilerle ilgili" },
            { es: "a menudo", tr: "sık sık / genellikle" },
            { es: "las personas reservadas", tr: "çekingen / içine kapanık insanlar" },
            { es: "encuentran (encontrar)", tr: "bulurlar (bulmak)" },
            { es: "una excusa perfecta", tr: "mükemmel bir bahane / vesile" },
            { es: "la escucha activa", tr: "aktif dinleme" },
            { es: "perder el miedo", tr: "korkuyu yenmek / kaybetmek" },
            { es: "al qué dirán", tr: "elalem ne der endişesine" },
            { es: "un pueblo montañoso", tr: "dağlık bir köy / kasaba" },
            { es: "rodeada de", tr: "ile çevrili" },
            { es: "la naturaleza virgen", tr: "dokunulmamış / el değmemiş doğa" },
            { es: "los lugareños", tr: "yerli halk / yöre halkı" },
            { es: "charlando animadamente", tr: "canlı / neşeli bir şekilde sohbet ederek" },
            { es: "armándose de valor", tr: "cesaretini toplayarak" },
            { es: "se atrevió a (atreverse)", tr: "cesaret etti (cesaret etmek)" },
            { es: "el marcador del equipo", tr: "takımın maç skoru" },
            { es: "esa simple frase", tr: "o basit cümle" },
            { es: "rompió el hielo", tr: "buzları kırdı" },
            { es: "descubrió (descubrir)", tr: "keşfetti (keşfetmek)" },
            { es: "compartir una pasión común", tr: "ortak bir tutkuyu paylaşmak" },
            { es: "genera puentes instantáneos", tr: "anlık köprüler kurar / oluşturur" },
            { es: "almas introvertidas", tr: "içe dönük ruhlar" },
            { es: "el resto del mundo", tr: "dünyanın geri kalanı" },
            { es: "con la certeza de que", tr: "... kesin inancıyla / eminliğiyle" },
            { es: "nutre (nutrir)", tr: "besler (beslemek)" }
        ],
        quiz: [
            { q: "'A menudo' sıklık zarfının anlamı nedir?", options: ["Nadiren", "Sık sık / Genellikle", "Asla", "Sadece bir kez"], answer: 1 },
            { q: "'Las personas reservadas' kimlere denir?", options: ["Çok konuşanlara", "Çekingen / içine kapanık insanlara", "Sinirli insanlara", "Sürekli gezenlere"], answer: 1 },
            { q: "'El miedo al qué dirán' ifadesi neyi anlatır?", options: ["Yükseklik korkusunu", "Elalem ne der korkusunu", "Karanlık korkusunu", "Yalnızlık korkusunu"], answer: 1 },
            { q: "'Armándose de valor' ne demektir?", options: ["Silahlanarak", "Cesaretini toplayarak", "Korkarak kaçarak", "Hızlıca yürüyerek"], answer: 1 },
            { q: "'Se atrevió' fiilinin kökü ve anlamı nedir?", options: ["Atreverse - Cesaret etti", "Aprender - Öğrendi", "Abrir - Açtı", "Ayudar - Yardım etti"], answer: 0 },
            { q: "Futbol sohbetindeki 'el marcador' kelimesi ne anlama gelir?", options: ["Hakem", "Maç skoru / Tabelası", "Stadyum", "Taraftar"], answer: 1 },
            { q: "'Rompió el hielo' deyiminin Türkçe karşılığı nedir?", options: ["Buzları kırdı (ortamı yumuşattı)", "Soğuk su içti", "Camı kırdı", "Yere düştü"], answer: 0 },
            { q: "'Los lugareños' kimlerdir?", options: ["Turistler", "Yerli halk / Yöre halkı", "Yabancılar", "Garsonlar"], answer: 1 },
            { q: "'Nutrir' fiili metinde hangi anlamda kullanılmıştır?", options: ["Yormak", "Beslemek", "Üzmek", "Unutmak"], answer: 1 },
            { q: "'Con la certeza de que' ifadesinin anlamı nedir?", options: ["Şüpheyle", "Kesin inancıyla / Eminliğiyle", "Korkuyla", "Tesadüfen"], answer: 1 }
        ]
    },
    {
        "title": "Un sábado en el mercado de Almería",
        "text": "Lucía siempre había comprado la fruta en el supermercado, con prisas y sin mirar a nadie. Pero este sábado decidió acercarse al Mercado Central de Almería. Nada más entrar, le envolvió el olor a tomates recién cogidos y a pescado del día. Un frutero mayor, con las manos curtidas por el sol, le ofreció probar un trozo de melón. «Pruébelo sin compromiso, que hoy está buenísimo», le dijo guiñándole un ojo. Lucía sonrió y acabó llevándose mucho más de lo que tenía en la lista. Mientras el hombre le pesaba los pimientos, le contó que llevaba cuarenta años en el mismo puesto y que conocía a sus clientes por su nombre. Al salir, Lucía se dio cuenta de que no había mirado el móvil ni una sola vez. Había descubierto que hacer la compra también podía ser una forma de conversar, de pertenecer a un barrio y de bajar el ritmo.",
        "vocabulary": [
            {
                "es": "con prisas",
                "tr": "aceleyle, telaşla"
            },
            {
                "es": "nada más entrar",
                "tr": "içeri girer girmez"
            },
            {
                "es": "le envolvió (envolver)",
                "tr": "onu sardı, kapladı"
            },
            {
                "es": "recién cogidos",
                "tr": "yeni toplanmış"
            },
            {
                "es": "el pescado del día",
                "tr": "günün taze balığı"
            },
            {
                "es": "el frutero",
                "tr": "manav"
            },
            {
                "es": "las manos curtidas",
                "tr": "yıpranmış, nasır tutmuş eller"
            },
            {
                "es": "un trozo",
                "tr": "bir parça"
            },
            {
                "es": "sin compromiso",
                "tr": "hiçbir zorunluluk olmadan"
            },
            {
                "es": "guiñándole un ojo (guiñar)",
                "tr": "ona göz kırparak"
            },
            {
                "es": "acabó llevándose",
                "tr": "sonunda yanına aldı / satın aldı"
            },
            {
                "es": "pesar",
                "tr": "tartmak"
            },
            {
                "es": "los pimientos",
                "tr": "biberler"
            },
            {
                "es": "llevaba cuarenta años",
                "tr": "kırk yıldır ... idi"
            },
            {
                "es": "el puesto",
                "tr": "tezgâh; iş yeri"
            },
            {
                "es": "se dio cuenta de (darse cuenta)",
                "tr": "farkına vardı"
            },
            {
                "es": "ni una sola vez",
                "tr": "bir kez bile"
            },
            {
                "es": "hacer la compra",
                "tr": "alışveriş yapmak (gıda)"
            },
            {
                "es": "pertenecer a",
                "tr": "bir yere ait olmak"
            },
            {
                "es": "bajar el ritmo",
                "tr": "yavaşlamak, tempoyu düşürmek"
            }
        ],
        "quiz": [
            {
                "q": "'Nada más entrar' ne demektir?",
                "options": [
                    "İçeri girer girmez",
                    "Hiç girmeden",
                    "Sadece girişte",
                    "Girmekten başka"
                ],
                "answer": 0
            },
            {
                "q": "'Recién cogidos' tomatlar nasıl tomatlardır?",
                "options": [
                    "Çürümüş",
                    "Pişmiş",
                    "Yeni toplanmış",
                    "İthal edilmiş"
                ],
                "answer": 2
            },
            {
                "q": "'El frutero' kimdir?",
                "options": [
                    "Manav",
                    "Balıkçı",
                    "Kasap",
                    "Fırıncı"
                ],
                "answer": 0
            },
            {
                "q": "'Sin compromiso' ifadesinin anlamı nedir?",
                "options": [
                    "Sözleşmeyle",
                    "Hiçbir zorunluluk olmadan",
                    "Nişanlanmadan",
                    "Ücretli olarak"
                ],
                "answer": 1
            },
            {
                "q": "'Guiñar un ojo' ne demektir?",
                "options": [
                    "Ağlamak",
                    "Gözünü kapatmak",
                    "Kaş çatmak",
                    "Göz kırpmak"
                ],
                "answer": 3
            },
            {
                "q": "'Pesar' fiilinin anlamı nedir?",
                "options": [
                    "Düşünmek",
                    "Ödemek",
                    "Soymak",
                    "Tartmak"
                ],
                "answer": 3
            },
            {
                "q": "'El puesto' bu metinde neyi ifade eder?",
                "options": [
                    "Postane",
                    "Park yeri",
                    "Mevsim",
                    "Pazar tezgâhı"
                ],
                "answer": 3
            },
            {
                "q": "'Darse cuenta de' ne demektir?",
                "options": [
                    "Hesap vermek",
                    "Farkına varmak",
                    "Saymak",
                    "Bir şeyi vermek"
                ],
                "answer": 1
            },
            {
                "q": "'Hacer la compra' ne anlama gelir?",
                "options": [
                    "Alışveriş yapmak (gıda)",
                    "Bir şirket satın almak",
                    "Yemek yapmak",
                    "Fiyat pazarlığı yapmak"
                ],
                "answer": 0
            },
            {
                "q": "'Bajar el ritmo' ifadesinin anlamı nedir?",
                "options": [
                    "Yavaşlamak",
                    "Müziği kısmak",
                    "Aşağı inmek",
                    "Dans etmek"
                ],
                "answer": 0
            }
        ]
    },
    {
        "title": "El primer día en el piso compartido",
        "text": "Javier llegó a Madrid con dos maletas y un nudo en el estómago. Había alquilado una habitación en un piso compartido en Lavapiés, y no conocía a ninguno de sus nuevos compañeros. Al abrir la puerta, Marta, una chica de Zaragoza, lo recibió con una sonrisa. «¿Qué tal el viaje? Pasa, pasa, que te enseño la casa», le dijo. En la cocina había una pizarra con el reparto de las tareas: fregar los platos, sacar la basura, limpiar el baño. «Aquí lo hacemos todo por turnos, ¿vale? Si vosotros dos os organizáis bien, no habrá problemas», añadió mirando a Javier y a Hugo, el tercer compañero. Esa noche cenaron juntos una tortilla de patatas que Hugo había preparado. Entre risas, Javier descubrió que los tres echaban de menos a sus familias. Aquella noche se acostó tranquilo: la ciudad seguía siendo enorme, pero ya no se sentía tan solo.",
        "vocabulary": [
            {
                "es": "un nudo en el estómago",
                "tr": "midede bir düğüm (gerginlik)"
            },
            {
                "es": "alquilar",
                "tr": "kiralamak"
            },
            {
                "es": "el piso compartido",
                "tr": "paylaşımlı daire"
            },
            {
                "es": "los compañeros de piso",
                "tr": "ev arkadaşları"
            },
            {
                "es": "lo recibió (recibir)",
                "tr": "onu karşıladı"
            },
            {
                "es": "pasa, pasa",
                "tr": "gir, gir (buyur)"
            },
            {
                "es": "te enseño la casa",
                "tr": "sana evi gezdireyim"
            },
            {
                "es": "la pizarra",
                "tr": "yazı tahtası"
            },
            {
                "es": "el reparto de las tareas",
                "tr": "iş bölümü"
            },
            {
                "es": "fregar los platos",
                "tr": "bulaşık yıkamak"
            },
            {
                "es": "sacar la basura",
                "tr": "çöpü çıkarmak"
            },
            {
                "es": "por turnos",
                "tr": "sırayla, nöbetleşe"
            },
            {
                "es": "¿vale?",
                "tr": "tamam mı?"
            },
            {
                "es": "os organizáis (organizarse)",
                "tr": "(siz) kendinizi organize ederseniz"
            },
            {
                "es": "añadió (añadir)",
                "tr": "ekledi"
            },
            {
                "es": "la tortilla de patatas",
                "tr": "patatesli İspanyol omleti"
            },
            {
                "es": "entre risas",
                "tr": "gülüşmeler arasında"
            },
            {
                "es": "echar de menos",
                "tr": "özlemek"
            },
            {
                "es": "se acostó (acostarse)",
                "tr": "yattı"
            },
            {
                "es": "seguía siendo",
                "tr": "olmaya devam ediyordu"
            }
        ],
        "quiz": [
            {
                "q": "'Un nudo en el estómago' neyi anlatır?",
                "options": [
                    "Gerginlik / heyecan",
                    "Açlık",
                    "Mide ağrısı tedavisi",
                    "Kemer"
                ],
                "answer": 0
            },
            {
                "q": "'Alquilar' ne demektir?",
                "options": [
                    "Satın almak",
                    "Satmak",
                    "Kiralamak",
                    "Taşınmak"
                ],
                "answer": 2
            },
            {
                "q": "'Te enseño la casa' ne demektir?",
                "options": [
                    "Sana evi gezdireyim",
                    "Sana ev öğretiyorum",
                    "Evini istiyorum",
                    "Evini temizliyorum"
                ],
                "answer": 0
            },
            {
                "q": "'Fregar los platos' ne anlama gelir?",
                "options": [
                    "Tabak kırmak",
                    "Yemek servis etmek",
                    "Sofrayı kurmak",
                    "Bulaşık yıkamak"
                ],
                "answer": 3
            },
            {
                "q": "'Sacar la basura' ne demektir?",
                "options": [
                    "Çöpü çıkarmak",
                    "Çöp kutusu almak",
                    "Fotoğraf çekmek",
                    "Para çekmek"
                ],
                "answer": 0
            },
            {
                "q": "'Por turnos' ifadesinin anlamı nedir?",
                "options": [
                    "Hep birlikte",
                    "Hiçbir zaman",
                    "Hızlıca",
                    "Sırayla"
                ],
                "answer": 3
            },
            {
                "q": "İspanya'da sıkça kullanılan '¿vale?' ne demektir?",
                "options": [
                    "Değer mi?",
                    "Kaç para?",
                    "Tamam mı?",
                    "Gidiyor musun?"
                ],
                "answer": 2
            },
            {
                "q": "'Añadir' fiilinin anlamı nedir?",
                "options": [
                    "Çıkarmak",
                    "Eklemek",
                    "Bağırmak",
                    "Yaş almak"
                ],
                "answer": 1
            },
            {
                "q": "'Echar de menos' ne demektir?",
                "options": [
                    "Eksik atmak",
                    "Azaltmak",
                    "Unutmak",
                    "Özlemek"
                ],
                "answer": 3
            },
            {
                "q": "'Acostarse' fiilinin anlamı nedir?",
                "options": [
                    "Kıyıya gitmek",
                    "Alışmak",
                    "Yatmak",
                    "Uyanmak"
                ],
                "answer": 2
            }
        ]
    },
    {
        "title": "La sobremesa del domingo",
        "text": "En casa de los abuelos de Elena, la comida del domingo nunca termina con el postre. Después del café empieza la sobremesa, ese rato largo en el que nadie tiene prisa por levantarse. Este domingo, su tío Paco sacó un álbum de fotos antiguas y, de repente, la mesa se llenó de recuerdos. La abuela se emocionó al ver una foto de su boda en un pueblo de Jaén, y empezó a contar cómo conoció al abuelo en una verbena. Los primos pequeños, que al principio solo querían jugar con el móvil, acabaron escuchando con la boca abierta. Elena pensó que en su trabajo siempre se quejaban de falta de tiempo, pero allí el tiempo parecía estirarse. Cuando por fin se despidieron, ya era de noche. Mientras conducía de vuelta a casa, Elena decidió que esas tardes sin reloj eran un lujo que no quería perder.",
        "vocabulary": [
            {
                "es": "la sobremesa",
                "tr": "yemekten sonra sofrada sohbet"
            },
            {
                "es": "el postre",
                "tr": "tatlı"
            },
            {
                "es": "ese rato",
                "tr": "o zaman dilimi"
            },
            {
                "es": "tener prisa",
                "tr": "acelesi olmak"
            },
            {
                "es": "levantarse",
                "tr": "kalkmak"
            },
            {
                "es": "sacó (sacar)",
                "tr": "çıkardı"
            },
            {
                "es": "de repente",
                "tr": "birden"
            },
            {
                "es": "se llenó de (llenarse)",
                "tr": "... ile doldu"
            },
            {
                "es": "los recuerdos",
                "tr": "anılar"
            },
            {
                "es": "se emocionó (emocionarse)",
                "tr": "duygulandı"
            },
            {
                "es": "la boda",
                "tr": "düğün"
            },
            {
                "es": "la verbena",
                "tr": "yazın açık havada yapılan semt şenliği"
            },
            {
                "es": "los primos",
                "tr": "kuzenler"
            },
            {
                "es": "con la boca abierta",
                "tr": "ağzı açık (hayranlıkla)"
            },
            {
                "es": "quejarse de",
                "tr": "... den şikâyet etmek"
            },
            {
                "es": "la falta de",
                "tr": "... eksikliği"
            },
            {
                "es": "estirarse",
                "tr": "uzamak, gerilmek"
            },
            {
                "es": "se despidieron (despedirse)",
                "tr": "vedalaştılar"
            },
            {
                "es": "conducir",
                "tr": "araba sürmek"
            },
            {
                "es": "un lujo",
                "tr": "bir lüks"
            }
        ],
        "quiz": [
            {
                "q": "'La sobremesa' nedir?",
                "options": [
                    "Masa örtüsü",
                    "Ana yemek",
                    "Yemekten sonra sofrada sohbet",
                    "Sehpa"
                ],
                "answer": 2
            },
            {
                "q": "'El postre' ne demektir?",
                "options": [
                    "Afiş",
                    "Çorba",
                    "Tatlı",
                    "Mektup"
                ],
                "answer": 2
            },
            {
                "q": "'De repente' ifadesinin anlamı nedir?",
                "options": [
                    "Tekrar",
                    "Yavaşça",
                    "Bazen",
                    "Birden"
                ],
                "answer": 3
            },
            {
                "q": "'Los recuerdos' ne demektir?",
                "options": [
                    "Anılar",
                    "Hediyeler",
                    "Kayıtlar",
                    "Kurallar"
                ],
                "answer": 0
            },
            {
                "q": "'Emocionarse' fiilinin anlamı nedir?",
                "options": [
                    "Kızmak",
                    "Sıkılmak",
                    "Duygulanmak",
                    "Hareket etmek"
                ],
                "answer": 2
            },
            {
                "q": "'La boda' nedir?",
                "options": [
                    "Düğün",
                    "Mahzen",
                    "Kulübe",
                    "Bodrum"
                ],
                "answer": 0
            },
            {
                "q": "'Con la boca abierta' ne anlama gelir?",
                "options": [
                    "Esneyerek",
                    "Yemek yerken",
                    "Ağzı açık, hayranlıkla",
                    "Bağırarak"
                ],
                "answer": 2
            },
            {
                "q": "'Quejarse de' ne demektir?",
                "options": [
                    "Kalmak",
                    "Vazgeçmek",
                    "Şikâyet etmek",
                    "Övünmek"
                ],
                "answer": 2
            },
            {
                "q": "'Despedirse' fiilinin anlamı nedir?",
                "options": [
                    "İşten kovmak",
                    "Ayrılmak istememek",
                    "Selamlaşmak",
                    "Vedalaşmak"
                ],
                "answer": 3
            },
            {
                "q": "İspanya İspanyolcasında 'conducir' ne demektir?",
                "options": [
                    "İletmek",
                    "Araba sürmek",
                    "Yönetmek",
                    "Taşımak"
                ],
                "answer": 1
            }
        ]
    },
    {
        "title": "Aprender a decir que no",
        "text": "Durante años, Sara había sido la compañera a la que todo el mundo recurría. Si alguien necesitaba ayuda con un informe, ella se quedaba hasta tarde; si había que cubrir un turno, ella siempre se ofrecía. Sin embargo, últimamente se sentía agotada y apenas tenía tiempo para sí misma. Un lunes, su jefe le pidió que se encargara de un proyecto nuevo, además de todo lo que ya llevaba. Sara notó cómo se le aceleraba el corazón. Respiró y, por primera vez, contestó con calma: «Ahora mismo no puedo asumir más tareas sin que baje la calidad de mi trabajo». Para su sorpresa, el jefe no se enfadó; al contrario, le agradeció su sinceridad y repartió el proyecto entre otros compañeros. Esa tarde, Sara salió de la oficina a su hora y fue a dar un paseo por el Retiro. Comprendió que poner límites no la convertía en egoísta, sino en alguien que se respeta.",
        "vocabulary": [
            {
                "es": "recurrir a",
                "tr": "başvurmak, yardım istemek"
            },
            {
                "es": "el informe",
                "tr": "rapor"
            },
            {
                "es": "quedarse hasta tarde",
                "tr": "geç saate kadar kalmak"
            },
            {
                "es": "cubrir un turno",
                "tr": "bir vardiyayı devralmak"
            },
            {
                "es": "ofrecerse",
                "tr": "gönüllü olmak"
            },
            {
                "es": "últimamente",
                "tr": "son zamanlarda"
            },
            {
                "es": "agotada",
                "tr": "bitkin"
            },
            {
                "es": "apenas",
                "tr": "neredeyse hiç, ancak"
            },
            {
                "es": "encargarse de",
                "tr": "üstlenmek, ilgilenmek"
            },
            {
                "es": "además de",
                "tr": "... e ek olarak"
            },
            {
                "es": "se le aceleraba el corazón",
                "tr": "kalbi hızlanıyordu"
            },
            {
                "es": "asumir",
                "tr": "üstlenmek"
            },
            {
                "es": "la calidad",
                "tr": "kalite"
            },
            {
                "es": "para su sorpresa",
                "tr": "şaşırtıcı biçimde"
            },
            {
                "es": "enfadarse",
                "tr": "kızmak (İspanya)"
            },
            {
                "es": "al contrario",
                "tr": "aksine"
            },
            {
                "es": "agradecer",
                "tr": "teşekkür etmek, minnettar olmak"
            },
            {
                "es": "repartir",
                "tr": "dağıtmak, paylaştırmak"
            },
            {
                "es": "salir a su hora",
                "tr": "mesai bitince çıkmak"
            },
            {
                "es": "poner límites",
                "tr": "sınır koymak"
            }
        ],
        "quiz": [
            {
                "q": "'Recurrir a alguien' ne demektir?",
                "options": [
                    "Birini takip etmek",
                    "Birinden kaçmak",
                    "Birinden yardım istemek",
                    "Birini eleştirmek"
                ],
                "answer": 2
            },
            {
                "q": "'El informe' nedir?",
                "options": [
                    "Rapor",
                    "Üniforma",
                    "Bilgisayar",
                    "Form doldurma"
                ],
                "answer": 0
            },
            {
                "q": "'Agotada' kelimesinin anlamı nedir?",
                "options": [
                    "Damla damla",
                    "Heyecanlı",
                    "Bitkin",
                    "Kızgın"
                ],
                "answer": 2
            },
            {
                "q": "'Apenas' ne demektir?",
                "options": [
                    "Hemen",
                    "Her zaman",
                    "Neredeyse hiç",
                    "Ancak sonra"
                ],
                "answer": 2
            },
            {
                "q": "'Encargarse de' ne anlama gelir?",
                "options": [
                    "Sipariş vermek",
                    "Şarj etmek",
                    "Yüklemek",
                    "Üstlenmek"
                ],
                "answer": 3
            },
            {
                "q": "'Se le aceleraba el corazón' ne demektir?",
                "options": [
                    "Aşık oluyordu",
                    "Kalbi duruyordu",
                    "Koşuyordu",
                    "Kalbi hızlanıyordu"
                ],
                "answer": 3
            },
            {
                "q": "İspanya'da 'enfadarse' ne demektir?",
                "options": [
                    "Kızmak",
                    "Sıkılmak",
                    "Hastalanmak",
                    "Utanmak"
                ],
                "answer": 0
            },
            {
                "q": "'Al contrario' ifadesinin anlamı nedir?",
                "options": [
                    "Karşıdan",
                    "Sayarak",
                    "Bu yüzden",
                    "Aksine"
                ],
                "answer": 3
            },
            {
                "q": "'Repartir' fiilinin anlamı nedir?",
                "options": [
                    "Tekrar gitmek",
                    "Ayrılmak",
                    "Tamir etmek",
                    "Dağıtmak"
                ],
                "answer": 3
            },
            {
                "q": "'Poner límites' ne demektir?",
                "options": [
                    "Sınır koymak",
                    "Hız sınırını aşmak",
                    "Bir şeyi bitirmek",
                    "Hedef belirlemek"
                ],
                "answer": 0
            }
        ]
    },
    {
        "title": "Pasos en el Camino de Santiago",
        "text": "Miguel nunca había caminado más de diez kilómetros seguidos, pero tras un año difícil decidió hacer el Camino de Santiago desde Sarria. El primer día le salieron ampollas en los pies y estuvo a punto de rendirse. En el albergue, una peregrina alemana llamada Ingrid le prestó unas tiritas y le dio un consejo: «No pienses en Santiago; piensa solo en la próxima etapa». A la mañana siguiente, Miguel salió temprano, cuando la niebla todavía cubría los prados gallegos. Poco a poco, empezó a disfrutar del silencio, del sonido de sus botas sobre la tierra y de los saludos de otros caminantes: «¡Buen Camino!». Compartió mesa con desconocidos que, al cabo de unos días, ya parecían viejos amigos. Cuando por fin llegó a la plaza del Obradoiro, se le saltaron las lágrimas. No había resuelto todos sus problemas, pero había aprendido a avanzar paso a paso.",
        "vocabulary": [
            {
                "es": "seguidos",
                "tr": "aralıksız, art arda"
            },
            {
                "es": "tras",
                "tr": "... den sonra"
            },
            {
                "es": "le salieron ampollas",
                "tr": "ayakları su topladı"
            },
            {
                "es": "estar a punto de",
                "tr": "... mek üzere olmak"
            },
            {
                "es": "rendirse",
                "tr": "pes etmek"
            },
            {
                "es": "el albergue",
                "tr": "hacı/yolcu yurdu, hostel"
            },
            {
                "es": "la peregrina",
                "tr": "hacı, kutsal yolcu (kadın)"
            },
            {
                "es": "prestar",
                "tr": "ödünç vermek"
            },
            {
                "es": "las tiritas",
                "tr": "yara bandı (İspanya)"
            },
            {
                "es": "el consejo",
                "tr": "tavsiye"
            },
            {
                "es": "la etapa",
                "tr": "etap, aşama"
            },
            {
                "es": "la niebla",
                "tr": "sis"
            },
            {
                "es": "los prados",
                "tr": "çayırlar"
            },
            {
                "es": "las botas",
                "tr": "botlar"
            },
            {
                "es": "compartir mesa",
                "tr": "aynı masayı paylaşmak"
            },
            {
                "es": "los desconocidos",
                "tr": "yabancılar, tanımadık kişiler"
            },
            {
                "es": "al cabo de",
                "tr": "... sonunda, ... sonra"
            },
            {
                "es": "se le saltaron las lágrimas",
                "tr": "gözlerinden yaş boşandı"
            },
            {
                "es": "resolver",
                "tr": "çözmek"
            },
            {
                "es": "avanzar paso a paso",
                "tr": "adım adım ilerlemek"
            }
        ],
        "quiz": [
            {
                "q": "'Le salieron ampollas' ne demektir?",
                "options": [
                    "Ayakları kaydı",
                    "Yeni ayakkabı aldı",
                    "Ayağı kırıldı",
                    "Ayakları su topladı"
                ],
                "answer": 3
            },
            {
                "q": "'Estar a punto de' ifadesinin anlamı nedir?",
                "options": [
                    "Hazır olmak",
                    "Noktaya varmak",
                    "Sözünü tutmak",
                    "... mek üzere olmak"
                ],
                "answer": 3
            },
            {
                "q": "'Rendirse' fiilinin anlamı nedir?",
                "options": [
                    "Kazanmak",
                    "Dinlenmek",
                    "Teslim almak",
                    "Pes etmek"
                ],
                "answer": 3
            },
            {
                "q": "'El albergue' nedir?",
                "options": [
                    "Hastane",
                    "Kilise",
                    "Yolcu yurdu / hostel",
                    "Kasaba meydanı"
                ],
                "answer": 2
            },
            {
                "q": "'Prestar' ne demektir?",
                "options": [
                    "Dikkat etmek",
                    "Satmak",
                    "Geri istemek",
                    "Ödünç vermek"
                ],
                "answer": 3
            },
            {
                "q": "İspanya'da 'las tiritas' nedir?",
                "options": [
                    "Şeritler",
                    "Çoraplar",
                    "Bisküviler",
                    "Yara bandı"
                ],
                "answer": 3
            },
            {
                "q": "'La niebla' ne demektir?",
                "options": [
                    "Sis",
                    "Kar",
                    "Gölge",
                    "Yağmur"
                ],
                "answer": 0
            },
            {
                "q": "'Los desconocidos' kimlerdir?",
                "options": [
                    "Bilinmeyen yerler",
                    "Tanımadık kişiler",
                    "Eski dostlar",
                    "Bilim insanları"
                ],
                "answer": 1
            },
            {
                "q": "'Al cabo de unos días' ne demektir?",
                "options": [
                    "Birkaç gün önce",
                    "Birkaç gün sonra",
                    "Günlerin başında",
                    "Her gün"
                ],
                "answer": 1
            },
            {
                "q": "'Se le saltaron las lágrimas' ne anlama gelir?",
                "options": [
                    "Gözlerinden yaş boşandı",
                    "Güldü",
                    "Zıpladı",
                    "Gözlerini kapattı"
                ],
                "answer": 0
            }
        ]
    },
    {
        "title": "Una tarde de lluvia en Bilbao",
        "text": "Ana había planeado pasear por la ría de Bilbao, pero desde por la mañana caía un sirimiri fino que lo empapaba todo. En lugar de quedarse en el hotel de mal humor, decidió refugiarse en el Museo Guggenheim. Al principio no entendía muchas de las obras: una escultura de acero gigante le pareció un laberinto sin sentido. Sin embargo, al recorrerla por dentro, notó cómo cambiaban el sonido y la luz, y sintió una extraña calma. Un guía le explicó que el arte contemporáneo no siempre busca ser bonito, sino provocar preguntas. Ana se quedó pensando en ello mientras tomaba un café con un pintxo de tortilla en una cafetería cercana. Al salir, la lluvia seguía allí, pero ya no le molestaba. Se dio cuenta de que a veces los planes que se tuercen nos llevan a lugares que nunca habríamos elegido y que, sin embargo, necesitábamos.",
        "vocabulary": [
            {
                "es": "la ría",
                "tr": "nehir ağzı (haliç)"
            },
            {
                "es": "el sirimiri",
                "tr": "çiseleyen ince yağmur (Bask)"
            },
            {
                "es": "empapar",
                "tr": "sırılsıklam etmek"
            },
            {
                "es": "en lugar de",
                "tr": "... yerine"
            },
            {
                "es": "de mal humor",
                "tr": "keyifsiz, huysuz"
            },
            {
                "es": "refugiarse",
                "tr": "sığınmak"
            },
            {
                "es": "las obras",
                "tr": "eserler"
            },
            {
                "es": "la escultura",
                "tr": "heykel"
            },
            {
                "es": "el acero",
                "tr": "çelik"
            },
            {
                "es": "sin sentido",
                "tr": "anlamsız"
            },
            {
                "es": "recorrer",
                "tr": "dolaşmak, gezmek"
            },
            {
                "es": "por dentro",
                "tr": "içinden"
            },
            {
                "es": "el guía",
                "tr": "rehber"
            },
            {
                "es": "provocar",
                "tr": "yol açmak, kışkırtmak"
            },
            {
                "es": "quedarse pensando",
                "tr": "düşünceye dalmak"
            },
            {
                "es": "el pintxo",
                "tr": "Bask usulü küçük atıştırmalık"
            },
            {
                "es": "cercana",
                "tr": "yakındaki"
            },
            {
                "es": "molestar",
                "tr": "rahatsız etmek"
            },
            {
                "es": "torcerse",
                "tr": "ters gitmek, bükülmek"
            },
            {
                "es": "elegir",
                "tr": "seçmek"
            }
        ],
        "quiz": [
            {
                "q": "'Sirimiri' nedir?",
                "options": [
                    "Çiseleyen ince yağmur",
                    "Fırtına",
                    "Dolu",
                    "Güneşli hava"
                ],
                "answer": 0
            },
            {
                "q": "'Empapar' ne demektir?",
                "options": [
                    "Kurutmak",
                    "Paketlemek",
                    "Ezmek",
                    "Sırılsıklam etmek"
                ],
                "answer": 3
            },
            {
                "q": "'En lugar de' ifadesinin anlamı nedir?",
                "options": [
                    "... yerinde",
                    "... in içinde",
                    "... e rağmen",
                    "... yerine"
                ],
                "answer": 3
            },
            {
                "q": "'De mal humor' ne demektir?",
                "options": [
                    "Şakacı",
                    "Keyifsiz",
                    "Kötü huylu kişi",
                    "Hasta"
                ],
                "answer": 1
            },
            {
                "q": "'Refugiarse' fiilinin anlamı nedir?",
                "options": [
                    "Reddetmek",
                    "Mülteci olmak",
                    "Dinlenmek",
                    "Sığınmak"
                ],
                "answer": 3
            },
            {
                "q": "'El acero' nedir?",
                "options": [
                    "Kaldırım",
                    "Çelik",
                    "Bakır",
                    "Taş"
                ],
                "answer": 1
            },
            {
                "q": "'Recorrer' ne demektir?",
                "options": [
                    "Dolaşmak, gezmek",
                    "Tekrar koşmak",
                    "Kesmek",
                    "Hatırlamak"
                ],
                "answer": 0
            },
            {
                "q": "'Provocar' bu metinde hangi anlamdadır?",
                "options": [
                    "Kavga etmek",
                    "Yasaklamak",
                    "Tatmak",
                    "Yol açmak"
                ],
                "answer": 3
            },
            {
                "q": "'Molestar' fiilinin anlamı nedir?",
                "options": [
                    "Taciz etmek",
                    "Öğütmek",
                    "Sevindirmek",
                    "Rahatsız etmek"
                ],
                "answer": 3
            },
            {
                "q": "'Los planes que se tuercen' ne demektir?",
                "options": [
                    "Gizli planlar",
                    "İptal edilen planlar",
                    "Ters giden planlar",
                    "Uzun planlar"
                ],
                "answer": 2
            }
        ]
    },
    {
        "title": "El huerto urbano del barrio",
        "text": "En un solar abandonado de Valencia, un grupo de vecinos decidió crear un huerto urbano. Al principio, solo había escombros y malas hierbas, y muchos pensaban que la idea no prosperaría. Pero Rosa, una maestra jubilada, no se desanimó. Cada mañana iba con su azada y su sombrero de paja, y poco a poco se le unieron otros vecinos: un estudiante de agrónomos, una familia ecuatoriana y un panadero del barrio. Juntos abonaron la tierra, plantaron tomateras, lechugas y habas, y montaron un sistema de riego por goteo con botellas recicladas. Los niños del colegio cercano venían por las tardes a regar y a buscar caracoles. Cuando llegó la primera cosecha, organizaron una paella en el propio huerto. Mientras comían, Rosa miró a su alrededor y comprendió que lo que más había crecido allí no eran las verduras, sino los lazos entre personas que antes ni siquiera se saludaban.",
        "vocabulary": [
            {
                "es": "el solar",
                "tr": "boş arsa"
            },
            {
                "es": "el huerto urbano",
                "tr": "kent bostanı"
            },
            {
                "es": "los escombros",
                "tr": "moloz"
            },
            {
                "es": "las malas hierbas",
                "tr": "yabani otlar"
            },
            {
                "es": "prosperar",
                "tr": "başarılı olmak, gelişmek"
            },
            {
                "es": "jubilada",
                "tr": "emekli (kadın)"
            },
            {
                "es": "desanimarse",
                "tr": "cesareti kırılmak"
            },
            {
                "es": "la azada",
                "tr": "çapa"
            },
            {
                "es": "el sombrero de paja",
                "tr": "hasır şapka"
            },
            {
                "es": "se le unieron (unirse)",
                "tr": "ona katıldılar"
            },
            {
                "es": "abonar la tierra",
                "tr": "toprağı gübrelemek"
            },
            {
                "es": "las tomateras",
                "tr": "domates fideleri"
            },
            {
                "es": "las habas",
                "tr": "bakla"
            },
            {
                "es": "el riego por goteo",
                "tr": "damla sulama"
            },
            {
                "es": "regar",
                "tr": "sulamak"
            },
            {
                "es": "los caracoles",
                "tr": "salyangozlar"
            },
            {
                "es": "la cosecha",
                "tr": "hasat"
            },
            {
                "es": "a su alrededor",
                "tr": "etrafına"
            },
            {
                "es": "los lazos",
                "tr": "bağlar"
            },
            {
                "es": "ni siquiera",
                "tr": "bile ... değil"
            }
        ],
        "quiz": [
            {
                "q": "'El solar' bu metinde nedir?",
                "options": [
                    "Güneş paneli",
                    "Güneşli gün",
                    "Avlu",
                    "Boş arsa"
                ],
                "answer": 3
            },
            {
                "q": "'Los escombros' ne demektir?",
                "options": [
                    "Gölgeler",
                    "Süpürgeler",
                    "Moloz",
                    "Taş duvarlar"
                ],
                "answer": 2
            },
            {
                "q": "'Las malas hierbas' nedir?",
                "options": [
                    "Zehirli bitkiler",
                    "Kötü kokular",
                    "Kurumuş çiçekler",
                    "Yabani otlar"
                ],
                "answer": 3
            },
            {
                "q": "'Jubilada' ne demektir?",
                "options": [
                    "Mutlu",
                    "Genç",
                    "Çalışkan",
                    "Emekli"
                ],
                "answer": 3
            },
            {
                "q": "'Desanimarse' fiilinin anlamı nedir?",
                "options": [
                    "Canlanmak",
                    "Hayvan beslemek",
                    "Uyanmak",
                    "Cesareti kırılmak"
                ],
                "answer": 3
            },
            {
                "q": "'La azada' nedir?",
                "options": [
                    "Kürek",
                    "Çapa",
                    "Tırmık",
                    "Makas"
                ],
                "answer": 1
            },
            {
                "q": "'Abonar la tierra' ne demektir?",
                "options": [
                    "Arsaya abone olmak",
                    "Toprağı satmak",
                    "Toprağı gübrelemek",
                    "Toprağı sulamak"
                ],
                "answer": 2
            },
            {
                "q": "'El riego por goteo' nedir?",
                "options": [
                    "Yağmurlama",
                    "Sel",
                    "Damla sulama",
                    "Kuyu"
                ],
                "answer": 2
            },
            {
                "q": "'La cosecha' ne demektir?",
                "options": [
                    "Hasat",
                    "Mutfak",
                    "Ekim",
                    "Kasa"
                ],
                "answer": 0
            },
            {
                "q": "'Ni siquiera se saludaban' ne demektir?",
                "options": [
                    "Selamlaşmıyorlardı bile",
                    "Hep selamlaşıyorlardı",
                    "Sadece selamlaşıyorlardı",
                    "Selamlarını gönderdiler"
                ],
                "answer": 0
            }
        ]
    },
    {
        "title": "De tapas por Granada",
        "text": "Cuando Leila se mudó a Granada para estudiar, le sorprendió una costumbre: en muchos bares, cada vez que pides una caña, te ponen una tapa gratis. Su compañera de clase, Carmen, le propuso quedar el viernes para «ir de tapas» por el barrio del Realejo. Al principio, a Leila le costaba seguir las conversaciones; la gente hablaba deprisa y se comía las letras. «Tranquila, aquí decimos ‘pescao’ en vez de ‘pescado’, ya te acostumbrarás», se rió Carmen. En el tercer bar, un camarero muy simpático les trajo unas berenjenas con miel de caña y les preguntó de dónde era Leila. En pocos minutos, la barra entera estaba charlando sobre las diferencias entre Marruecos y Andalucía. Leila volvió a casa con el estómago lleno y la sensación de haber dado un gran paso. Había descubierto que en España muchas amistades nacen de pie, junto a una barra y entre platos que se comparten.",
        "vocabulary": [
            {
                "es": "mudarse",
                "tr": "taşınmak"
            },
            {
                "es": "la costumbre",
                "tr": "gelenek, alışkanlık"
            },
            {
                "es": "la caña",
                "tr": "küçük bardak fıçı bira"
            },
            {
                "es": "la tapa",
                "tr": "küçük meze porsiyonu"
            },
            {
                "es": "proponer",
                "tr": "önermek"
            },
            {
                "es": "quedar",
                "tr": "buluşmak (İspanya)"
            },
            {
                "es": "ir de tapas",
                "tr": "bar bar gezip meze yemek"
            },
            {
                "es": "costar (le costaba)",
                "tr": "zorlanmak (zorlanıyordu)"
            },
            {
                "es": "deprisa",
                "tr": "hızlıca"
            },
            {
                "es": "comerse las letras",
                "tr": "harfleri yutmak"
            },
            {
                "es": "acostumbrarse",
                "tr": "alışmak"
            },
            {
                "es": "el camarero",
                "tr": "garson (İspanya)"
            },
            {
                "es": "simpático",
                "tr": "sevimli, cana yakın"
            },
            {
                "es": "las berenjenas",
                "tr": "patlıcanlar"
            },
            {
                "es": "la miel de caña",
                "tr": "şeker kamışı pekmezi"
            },
            {
                "es": "la barra",
                "tr": "bar tezgâhı"
            },
            {
                "es": "charlar",
                "tr": "sohbet etmek"
            },
            {
                "es": "dar un gran paso",
                "tr": "büyük bir adım atmak"
            },
            {
                "es": "la amistad",
                "tr": "dostluk"
            },
            {
                "es": "de pie",
                "tr": "ayakta"
            }
        ],
        "quiz": [
            {
                "q": "'Mudarse' ne demektir?",
                "options": [
                    "Değişmek",
                    "Taşınmak",
                    "Susmak",
                    "Giyinmek"
                ],
                "answer": 1
            },
            {
                "q": "İspanya'da 'una caña' genellikle nedir?",
                "options": [
                    "Olta",
                    "Baston",
                    "Şeker kamışı suyu",
                    "Küçük bardak fıçı bira"
                ],
                "answer": 3
            },
            {
                "q": "İspanya'da 'quedar con alguien' ne demektir?",
                "options": [
                    "Biriyle kalmak",
                    "Birini beklemek",
                    "Birine kızmak",
                    "Biriyle buluşmak"
                ],
                "answer": 3
            },
            {
                "q": "'Le costaba seguir' ne demektir?",
                "options": [
                    "Takip etmek pahalıydı",
                    "Takip etmeyi seviyordu",
                    "Takip etmekte zorlanıyordu",
                    "Takip etmeyi bıraktı"
                ],
                "answer": 2
            },
            {
                "q": "'Deprisa' ifadesinin anlamı nedir?",
                "options": [
                    "Yavaşça",
                    "Hızlıca",
                    "Sessizce",
                    "Birden"
                ],
                "answer": 1
            },
            {
                "q": "'Comerse las letras' ne anlama gelir?",
                "options": [
                    "Kitap okumak",
                    "Mektup yemek",
                    "Harfleri yutmak",
                    "Yazım hatası yapmak"
                ],
                "answer": 2
            },
            {
                "q": "'Acostumbrarse' fiilinin anlamı nedir?",
                "options": [
                    "Kostüm giymek",
                    "Yatmak",
                    "Gelenek kurmak",
                    "Alışmak"
                ],
                "answer": 3
            },
            {
                "q": "İspanya'da 'el camarero' kimdir?",
                "options": [
                    "Oda hizmetlisi",
                    "Kameraman",
                    "Aşçı",
                    "Garson"
                ],
                "answer": 3
            },
            {
                "q": "'Charlar' ne demektir?",
                "options": [
                    "Şarj etmek",
                    "Şarkı söylemek",
                    "Şikâyet etmek",
                    "Sohbet etmek"
                ],
                "answer": 3
            },
            {
                "q": "'De pie' ifadesinin anlamı nedir?",
                "options": [
                    "Yürüyerek",
                    "Ayak ucunda",
                    "Oturarak",
                    "Ayakta"
                ],
                "answer": 3
            }
        ]
    },
    {
        "title": "El tren que no llegaba",
        "text": "El tren de Málaga a Madrid llevaba más de una hora parado en mitad del campo por una avería. Al principio, los pasajeros resoplaban y miraban el reloj con impaciencia. Daniel, que tenía una reunión importante, estaba de los nervios y no paraba de escribir mensajes. A su lado, una señora mayor sacó de su bolso una bolsa de magdalenas y se las ofreció. «Hijo, enfadarse no va a hacer que el tren ande más rápido», le dijo con una sonrisa. Daniel se rió por primera vez en toda la mañana y aceptó una magdalena. Poco a poco, la gente del vagón empezó a hablar: un chico tocaba la guitarra, una pareja compartía fotos de su viaje y un revisor pasaba ofreciendo agua. Cuando el tren por fin arrancó, Daniel llamó a su jefe y le explicó el retraso con tranquilidad. Había perdido una hora, pero había ganado una lección sobre la paciencia.",
        "vocabulary": [
            {
                "es": "llevaba ... parado",
                "tr": "... dır durmuş haldeydi"
            },
            {
                "es": "en mitad del campo",
                "tr": "kırın ortasında"
            },
            {
                "es": "la avería",
                "tr": "arıza"
            },
            {
                "es": "resoplar",
                "tr": "burnundan solumak, homurdanmak"
            },
            {
                "es": "la impaciencia",
                "tr": "sabırsızlık"
            },
            {
                "es": "la reunión",
                "tr": "toplantı"
            },
            {
                "es": "estar de los nervios",
                "tr": "sinirleri gerilmiş olmak"
            },
            {
                "es": "no paraba de",
                "tr": "durmadan ... yordu"
            },
            {
                "es": "el bolso",
                "tr": "el çantası"
            },
            {
                "es": "las magdalenas",
                "tr": "küçük kekler (İspanya)"
            },
            {
                "es": "ofrecer",
                "tr": "ikram etmek, sunmak"
            },
            {
                "es": "andar",
                "tr": "yürümek; (araç) gitmek"
            },
            {
                "es": "aceptar",
                "tr": "kabul etmek"
            },
            {
                "es": "el vagón",
                "tr": "vagon"
            },
            {
                "es": "la pareja",
                "tr": "çift; partner"
            },
            {
                "es": "el revisor",
                "tr": "kondüktör, bilet kontrolörü"
            },
            {
                "es": "arrancar",
                "tr": "hareket etmek, çalışmak (araç)"
            },
            {
                "es": "el retraso",
                "tr": "gecikme"
            },
            {
                "es": "la tranquilidad",
                "tr": "sakinlik"
            },
            {
                "es": "la paciencia",
                "tr": "sabır"
            }
        ],
        "quiz": [
            {
                "q": "'La avería' nedir?",
                "options": [
                    "Arıza",
                    "Kuş kafesi",
                    "Kaza",
                    "Yolcu"
                ],
                "answer": 0
            },
            {
                "q": "'Resoplar' ne demektir?",
                "options": [
                    "Şarkı söylemek",
                    "Uyumak",
                    "Homurdanmak / burnundan solumak",
                    "Üflemek, mum söndürmek"
                ],
                "answer": 2
            },
            {
                "q": "'La reunión' ne demektir?",
                "options": [
                    "Birleşme",
                    "Tekrar",
                    "Toplantı",
                    "Seyahat"
                ],
                "answer": 2
            },
            {
                "q": "'Estar de los nervios' ne anlama gelir?",
                "options": [
                    "Sinir hastası olmak",
                    "Çok sakin olmak",
                    "Ağrısı olmak",
                    "Sinirleri gerilmiş olmak"
                ],
                "answer": 3
            },
            {
                "q": "'No paraba de escribir' ne demektir?",
                "options": [
                    "Durmadan yazıyordu",
                    "Yazmayı bıraktı",
                    "Hiç yazmadı",
                    "Yazmak için durdu"
                ],
                "answer": 0
            },
            {
                "q": "İspanya'da 'las magdalenas' nedir?",
                "options": [
                    "Mendiller",
                    "Çiçekler",
                    "Kurabiye kalıpları",
                    "Küçük kekler"
                ],
                "answer": 3
            },
            {
                "q": "Bu metinde 'que el tren ande' ne anlama gelir?",
                "options": [
                    "Trenin yürüyüş yapması",
                    "Trenin durması",
                    "Trenin gitmesi",
                    "Trenin dönmesi"
                ],
                "answer": 2
            },
            {
                "q": "'El revisor' kimdir?",
                "options": [
                    "Makinist",
                    "Gözlükçü",
                    "Gazeteci",
                    "Kondüktör"
                ],
                "answer": 3
            },
            {
                "q": "'Arrancar' bu metinde ne demektir?",
                "options": [
                    "Koparmak",
                    "Hareket etmek",
                    "Kaçmak",
                    "Fren yapmak"
                ],
                "answer": 1
            },
            {
                "q": "'El retraso' nedir?",
                "options": [
                    "Portre",
                    "Geri ödeme",
                    "İlerleme",
                    "Gecikme"
                ],
                "answer": 3
            }
        ]
    },
    {
        "title": "Volver a empezar a los cuarenta",
        "text": "A los cuarenta y dos años, Beatriz llevaba casi dos décadas trabajando en un banco de Sevilla. Tenía un buen sueldo y un contrato fijo, pero cada domingo por la noche sentía una angustia difícil de explicar. Su verdadera pasión había sido siempre la cerámica; de joven pasaba horas en el taller de su tío en Triana. Un día, tras mucho darle vueltas, se apuntó a un curso nocturno de alfarería. Sus manos, torpes al principio, fueron recuperando la habilidad olvidada. Algunos amigos le decían que estaba loca por arriesgar su estabilidad, mientras que otros la animaban a lanzarse. Beatriz no dejó el banco de golpe: pidió una reducción de jornada y empezó a vender sus piezas en un mercadillo de artesanía. Al cabo de un año, ya tenía clientes fijos y una pequeña tienda en internet. Comprendió que nunca es tarde para escuchar lo que de verdad nos hace sentir vivos.",
        "vocabulary": [
            {
                "es": "dos décadas",
                "tr": "yirmi yıl"
            },
            {
                "es": "el sueldo",
                "tr": "maaş"
            },
            {
                "es": "el contrato fijo",
                "tr": "süresiz (kadrolu) sözleşme"
            },
            {
                "es": "la angustia",
                "tr": "sıkıntı, kaygı"
            },
            {
                "es": "el taller",
                "tr": "atölye"
            },
            {
                "es": "darle vueltas a algo",
                "tr": "bir şeyi kafada evirip çevirmek"
            },
            {
                "es": "apuntarse a",
                "tr": "... e yazılmak"
            },
            {
                "es": "la alfarería",
                "tr": "çömlekçilik"
            },
            {
                "es": "torpes",
                "tr": "beceriksiz, sakar"
            },
            {
                "es": "recuperar",
                "tr": "geri kazanmak"
            },
            {
                "es": "la habilidad",
                "tr": "beceri"
            },
            {
                "es": "arriesgar",
                "tr": "riske atmak"
            },
            {
                "es": "animar",
                "tr": "cesaretlendirmek"
            },
            {
                "es": "lanzarse",
                "tr": "atılmak, cesaret edip başlamak"
            },
            {
                "es": "de golpe",
                "tr": "bir anda"
            },
            {
                "es": "la reducción de jornada",
                "tr": "çalışma saatlerinin azaltılması"
            },
            {
                "es": "las piezas",
                "tr": "parçalar, eserler"
            },
            {
                "es": "el mercadillo",
                "tr": "semt pazarı"
            },
            {
                "es": "la artesanía",
                "tr": "el sanatları"
            },
            {
                "es": "los clientes fijos",
                "tr": "müdavim müşteriler"
            }
        ],
        "quiz": [
            {
                "q": "'El sueldo' ne demektir?",
                "options": [
                    "Zemin",
                    "Uyku",
                    "Borç",
                    "Maaş"
                ],
                "answer": 3
            },
            {
                "q": "'El contrato fijo' nedir?",
                "options": [
                    "Süresiz (kadrolu) sözleşme",
                    "Kısa süreli sözleşme",
                    "Sabit fiyat",
                    "Kira kontratı"
                ],
                "answer": 0
            },
            {
                "q": "'La angustia' ne demektir?",
                "options": [
                    "Darlık",
                    "Öfke",
                    "Sıkıntı, kaygı",
                    "Mutluluk"
                ],
                "answer": 2
            },
            {
                "q": "'Darle vueltas a algo' ne anlama gelir?",
                "options": [
                    "Bir şeyin etrafında koşmak",
                    "Bir şeyi geri vermek",
                    "Bir şeyi döndürmek",
                    "Bir şeyi kafada evirip çevirmek"
                ],
                "answer": 3
            },
            {
                "q": "'Apuntarse a un curso' ne demektir?",
                "options": [
                    "Bir kursu not etmek",
                    "Bir kursu bırakmak",
                    "Bir kursa yazılmak",
                    "Bir kurs vermek"
                ],
                "answer": 2
            },
            {
                "q": "'Torpes' kelimesinin anlamı nedir?",
                "options": [
                    "Beceriksiz",
                    "Güçlü",
                    "Hızlı",
                    "Soğuk"
                ],
                "answer": 0
            },
            {
                "q": "'Arriesgar' ne demektir?",
                "options": [
                    "Sulamak",
                    "Riske atmak",
                    "Güvenceye almak",
                    "Kazanmak"
                ],
                "answer": 1
            },
            {
                "q": "'Animar' fiilinin anlamı nedir?",
                "options": [
                    "Canlandırmak (çizgi film)",
                    "Engellemek",
                    "Hayvan beslemek",
                    "Cesaretlendirmek"
                ],
                "answer": 3
            },
            {
                "q": "'De golpe' ifadesinin anlamı nedir?",
                "options": [
                    "Darbeyle",
                    "Bir anda",
                    "Yavaşça",
                    "Gol atarak"
                ],
                "answer": 1
            },
            {
                "q": "'El mercadillo' nedir?",
                "options": [
                    "Süpermarket",
                    "Borsa",
                    "Market arabası",
                    "Semt pazarı"
                ],
                "answer": 3
            }
        ]
    },
    {
        "title": "La abuela y el móvil",
        "text": "La abuela de Pablo, Concha, tenía ochenta años y nunca había querido saber nada de los móviles. «Eso es para los jóvenes», repetía. Pero cuando su nieta se fue a trabajar a Dublín, cambió de opinión. Un domingo por la tarde, Pablo se sentó a su lado con paciencia infinita. Le enseñó a desbloquear la pantalla, a subir el volumen y a hacer una videollamada. Concha se equivocaba una y otra vez, pulsaba botones sin querer y se desesperaba. «Abuela, no pasa nada, no lo vas a romper», la tranquilizaba él. Después de varias tardes, por fin consiguió llamar sola a su nieta. Cuando vio su cara en la pantalla, se le iluminaron los ojos. Ahora Concha manda audios cada mañana, comparte recetas en el grupo familiar y hasta envía emojis de corazones. Pablo, por su parte, aprendió que enseñar también es una forma de cariño, y que nunca es tarde para descubrir algo nuevo.",
        "vocabulary": [
            {
                "es": "no querer saber nada de",
                "tr": "... hakkında hiçbir şey bilmek istememek"
            },
            {
                "es": "repetir",
                "tr": "tekrarlamak"
            },
            {
                "es": "la nieta",
                "tr": "kız torun"
            },
            {
                "es": "cambiar de opinión",
                "tr": "fikrini değiştirmek"
            },
            {
                "es": "infinita",
                "tr": "sonsuz"
            },
            {
                "es": "desbloquear la pantalla",
                "tr": "ekran kilidini açmak"
            },
            {
                "es": "subir el volumen",
                "tr": "sesi açmak"
            },
            {
                "es": "la videollamada",
                "tr": "görüntülü arama"
            },
            {
                "es": "equivocarse",
                "tr": "hata yapmak"
            },
            {
                "es": "una y otra vez",
                "tr": "defalarca"
            },
            {
                "es": "pulsar",
                "tr": "basmak (tuşa)"
            },
            {
                "es": "sin querer",
                "tr": "istemeden"
            },
            {
                "es": "desesperarse",
                "tr": "umutsuzluğa kapılmak"
            },
            {
                "es": "no pasa nada",
                "tr": "bir şey olmaz, sorun değil"
            },
            {
                "es": "tranquilizar",
                "tr": "sakinleştirmek"
            },
            {
                "es": "conseguir",
                "tr": "başarmak"
            },
            {
                "es": "se le iluminaron los ojos",
                "tr": "gözlerinin içi parladı"
            },
            {
                "es": "mandar audios",
                "tr": "sesli mesaj göndermek"
            },
            {
                "es": "por su parte",
                "tr": "kendi açısından"
            },
            {
                "es": "el cariño",
                "tr": "sevgi, şefkat"
            }
        ],
        "quiz": [
            {
                "q": "'Cambiar de opinión' ne demektir?",
                "options": [
                    "Fikrini değiştirmek",
                    "Fikrini söylemek",
                    "Fikirleri değiş tokuş etmek",
                    "Fikir sormak"
                ],
                "answer": 0
            },
            {
                "q": "'Desbloquear la pantalla' ne demektir?",
                "options": [
                    "Ekran kilidini açmak",
                    "Ekranı kırmak",
                    "Ekranı kapatmak",
                    "Ekranı temizlemek"
                ],
                "answer": 0
            },
            {
                "q": "'La videollamada' nedir?",
                "options": [
                    "Görüntülü arama",
                    "Video kaset",
                    "Sesli mesaj",
                    "Film izleme"
                ],
                "answer": 0
            },
            {
                "q": "'Equivocarse' fiilinin anlamı nedir?",
                "options": [
                    "Eşit olmak",
                    "Tartışmak",
                    "Unutmak",
                    "Hata yapmak"
                ],
                "answer": 3
            },
            {
                "q": "'Una y otra vez' ne demektir?",
                "options": [
                    "Defalarca",
                    "Bir kez",
                    "Sırayla",
                    "Asla"
                ],
                "answer": 0
            },
            {
                "q": "'Pulsar' bu metinde ne demektir?",
                "options": [
                    "Nabız saymak",
                    "Tuşa basmak",
                    "İtmek, kapıyı",
                    "Çalmak, müzik"
                ],
                "answer": 1
            },
            {
                "q": "'Sin querer' ifadesinin anlamı nedir?",
                "options": [
                    "Sevmeden",
                    "İstemeden",
                    "İsteyerek",
                    "Söylemeden"
                ],
                "answer": 1
            },
            {
                "q": "'No pasa nada' ne anlama gelir?",
                "options": [
                    "Sorun değil",
                    "Hiçbir şey geçmiyor",
                    "Kimse gelmiyor",
                    "Hiçbir şey anlamıyorum"
                ],
                "answer": 0
            },
            {
                "q": "'Conseguir' fiilinin anlamı nedir?",
                "options": [
                    "Başarmak",
                    "Takip etmek",
                    "Sonuçlanmak",
                    "İkna etmek"
                ],
                "answer": 0
            },
            {
                "q": "'El cariño' nedir?",
                "options": [
                    "Pahalılık",
                    "Araba",
                    "Sevgi, şefkat",
                    "Hediye"
                ],
                "answer": 2
            }
        ]
    },
    {
        "title": "Noche de estrellas en Cabo de Gata",
        "text": "Irene y sus amigos llevaban meses diciendo que algún día dormirían bajo las estrellas, y por fin se decidieron. Cogieron el coche un viernes de agosto y se fueron al Parque Natural de Cabo de Gata, en Almería. Aparcaron cerca de una cala escondida y bajaron por un sendero de piedras con las linternas del móvil. Al llegar, el mar estaba en calma y el cielo, completamente despejado. Lejos de la contaminación lumínica de la ciudad, se veían miles de estrellas y hasta la Vía Láctea. Tumbados en la arena, nadie decía nada; solo se oía el murmullo de las olas. Al rato, una estrella fugaz cruzó el cielo y todos gritaron a la vez. Irene pensó en lo pequeña que se sentía y, al mismo tiempo, en lo afortunada que era. Al amanecer se dieron un baño en el agua fresca y volvieron a casa cansados, con arena en los zapatos y una sensación de libertad que les duraría semanas.",
        "vocabulary": [
            {
                "es": "dormir bajo las estrellas",
                "tr": "yıldızların altında uyumak"
            },
            {
                "es": "decidirse",
                "tr": "karar vermek"
            },
            {
                "es": "coger el coche",
                "tr": "arabaya binmek (İspanya)"
            },
            {
                "es": "aparcar",
                "tr": "park etmek"
            },
            {
                "es": "la cala",
                "tr": "küçük koy"
            },
            {
                "es": "escondida",
                "tr": "gizli, saklı"
            },
            {
                "es": "el sendero",
                "tr": "patika"
            },
            {
                "es": "la linterna",
                "tr": "el feneri"
            },
            {
                "es": "en calma",
                "tr": "durgun, sakin"
            },
            {
                "es": "despejado",
                "tr": "açık, bulutsuz"
            },
            {
                "es": "la contaminación lumínica",
                "tr": "ışık kirliliği"
            },
            {
                "es": "la Vía Láctea",
                "tr": "Samanyolu"
            },
            {
                "es": "tumbados (tumbarse)",
                "tr": "uzanmış"
            },
            {
                "es": "el murmullo",
                "tr": "mırıltı, uğultu"
            },
            {
                "es": "las olas",
                "tr": "dalgalar"
            },
            {
                "es": "al rato",
                "tr": "bir süre sonra"
            },
            {
                "es": "la estrella fugaz",
                "tr": "kayan yıldız"
            },
            {
                "es": "a la vez",
                "tr": "aynı anda"
            },
            {
                "es": "afortunada",
                "tr": "şanslı"
            },
            {
                "es": "darse un baño",
                "tr": "denize girmek, yüzmek"
            }
        ],
        "quiz": [
            {
                "q": "İspanya'da 'coger el coche' ne demektir?",
                "options": [
                    "Araba çalmak",
                    "Arabayı tamir etmek",
                    "Arabaya binip yola çıkmak",
                    "Arabayı yıkamak"
                ],
                "answer": 2
            },
            {
                "q": "'Aparcar' fiilinin anlamı nedir?",
                "options": [
                    "Ayrılmak",
                    "Park etmek",
                    "Görünmek",
                    "Hazırlamak"
                ],
                "answer": 1
            },
            {
                "q": "'La cala' nedir?",
                "options": [
                    "Küçük koy",
                    "Kale",
                    "Sokak",
                    "Mağara"
                ],
                "answer": 0
            },
            {
                "q": "'El sendero' ne demektir?",
                "options": [
                    "Tohum",
                    "Gönderen",
                    "Patika",
                    "Yamaç"
                ],
                "answer": 2
            },
            {
                "q": "'Cielo despejado' ne demektir?",
                "options": [
                    "Kapalı gökyüzü",
                    "Yıldızsız gece",
                    "Fırtınalı hava",
                    "Bulutsuz gökyüzü"
                ],
                "answer": 3
            },
            {
                "q": "'La contaminación lumínica' nedir?",
                "options": [
                    "Hava kirliliği",
                    "Işık kirliliği",
                    "Gürültü kirliliği",
                    "Ay ışığı"
                ],
                "answer": 1
            },
            {
                "q": "'Tumbarse' fiilinin anlamı nedir?",
                "options": [
                    "Devirmek",
                    "Uzanmak",
                    "Gömmek",
                    "Dans etmek"
                ],
                "answer": 1
            },
            {
                "q": "'La estrella fugaz' nedir?",
                "options": [
                    "Kutup yıldızı",
                    "Uydu",
                    "Gezegen",
                    "Kayan yıldız"
                ],
                "answer": 3
            },
            {
                "q": "'A la vez' ifadesinin anlamı nedir?",
                "options": [
                    "Sırayla",
                    "Aynı anda",
                    "Bir kez",
                    "Yine"
                ],
                "answer": 1
            },
            {
                "q": "'Darse un baño' bu metinde ne demektir?",
                "options": [
                    "Güneşlenmek",
                    "Banyoyu temizlemek",
                    "Denize girmek",
                    "Tuvalete gitmek"
                ],
                "answer": 2
            }
        ]
    },
    {
        "title": "El miedo a hablar en público",
        "text": "A Tomás le temblaban las manos solo de pensar en la presentación del lunes. Tenía que exponer los resultados de su equipo delante de toda la dirección de la empresa, y hablar en público le aterraba desde el colegio. Su amiga Nuria, que daba clases de teatro, le propuso ensayar con ella durante el fin de semana. «No intentes ser perfecto; intenta ser claro», le aconsejó. Le enseñó a respirar con el abdomen, a hacer pausas y a mirar a varias personas en lugar de clavar los ojos en el suelo. Tomás grabó su discurso con el móvil y se dio cuenta de que hablaba demasiado deprisa. El lunes, antes de entrar en la sala, repasó sus notas y se recordó a sí mismo que conocía el tema mejor que nadie. Se le trabó la lengua un par de veces, pero siguió adelante. Al terminar, la directora lo felicitó por su claridad. Tomás aprendió que el valor no es no tener miedo, sino actuar a pesar de él.",
        "vocabulary": [
            {
                "es": "temblar",
                "tr": "titremek"
            },
            {
                "es": "la presentación",
                "tr": "sunum"
            },
            {
                "es": "exponer",
                "tr": "sunmak, açıklamak"
            },
            {
                "es": "la dirección",
                "tr": "yönetim"
            },
            {
                "es": "aterrar",
                "tr": "dehşete düşürmek"
            },
            {
                "es": "ensayar",
                "tr": "prova yapmak"
            },
            {
                "es": "aconsejar",
                "tr": "tavsiye etmek"
            },
            {
                "es": "respirar con el abdomen",
                "tr": "karından nefes almak"
            },
            {
                "es": "hacer pausas",
                "tr": "duraklamalar yapmak"
            },
            {
                "es": "clavar los ojos en",
                "tr": "gözlerini ... e dikmek"
            },
            {
                "es": "grabar",
                "tr": "kaydetmek"
            },
            {
                "es": "el discurso",
                "tr": "konuşma"
            },
            {
                "es": "la sala",
                "tr": "salon"
            },
            {
                "es": "repasar",
                "tr": "gözden geçirmek, tekrar etmek"
            },
            {
                "es": "se le trabó la lengua",
                "tr": "dili dolaştı"
            },
            {
                "es": "seguir adelante",
                "tr": "devam etmek"
            },
            {
                "es": "felicitar",
                "tr": "tebrik etmek"
            },
            {
                "es": "la claridad",
                "tr": "açıklık, netlik"
            },
            {
                "es": "el valor",
                "tr": "cesaret; değer"
            },
            {
                "es": "a pesar de",
                "tr": "... e rağmen"
            }
        ],
        "quiz": [
            {
                "q": "'Temblar' fiilinin anlamı nedir?",
                "options": [
                    "Titremek",
                    "Korkmak",
                    "Terlemek",
                    "Düşmek"
                ],
                "answer": 0
            },
            {
                "q": "'Exponer' bu metinde ne demektir?",
                "options": [
                    "Saklamak",
                    "Tehlikeye atmak",
                    "İhraç etmek",
                    "Sunmak, açıklamak"
                ],
                "answer": 3
            },
            {
                "q": "'Aterrar' ne demektir?",
                "options": [
                    "İniş yapmak",
                    "Dehşete düşürmek",
                    "Toprağa gömmek",
                    "Sakinleştirmek"
                ],
                "answer": 1
            },
            {
                "q": "'Ensayar' fiilinin anlamı nedir?",
                "options": [
                    "Deneme yazmak",
                    "Prova yapmak",
                    "Kirletmek",
                    "Tatmak"
                ],
                "answer": 1
            },
            {
                "q": "'Clavar los ojos en el suelo' ne demektir?",
                "options": [
                    "Yere çivi çakmak",
                    "Yere düşmek",
                    "Gözlerini yere dikmek",
                    "Gözlerini kapamak"
                ],
                "answer": 2
            },
            {
                "q": "'Grabar' bu metinde ne demektir?",
                "options": [
                    "Kazımak",
                    "Vergilendirmek",
                    "Silmek",
                    "Kaydetmek"
                ],
                "answer": 3
            },
            {
                "q": "'Repasar' ne demektir?",
                "options": [
                    "Ütülemek",
                    "Geçip gitmek",
                    "Tekrar geçmek, yoldan",
                    "Gözden geçirmek"
                ],
                "answer": 3
            },
            {
                "q": "'Se le trabó la lengua' ne anlama gelir?",
                "options": [
                    "Dilini ısırdı",
                    "Dili dolaştı",
                    "Sustu",
                    "Yabancı dil konuştu"
                ],
                "answer": 1
            },
            {
                "q": "'Felicitar' fiilinin anlamı nedir?",
                "options": [
                    "Mutlu olmak",
                    "Tebrik etmek",
                    "Eleştirmek",
                    "Teşekkür etmek"
                ],
                "answer": 1
            },
            {
                "q": "'A pesar de' ifadesinin anlamı nedir?",
                "options": [
                    "... sayesinde",
                    "... ağırlığıyla",
                    "... yüzünden",
                    "... e rağmen"
                ],
                "answer": 3
            }
        ]
    },
    {
        "title": "Una nueva vida en la protectora",
        "text": "Desde que se jubiló, Fernando pasaba los días en casa viendo la tele y apenas salía. Su hija, preocupada, le sugirió hacerse voluntario en una protectora de animales de Murcia. Fernando aceptó a regañadientes, convencido de que no duraría ni una semana. El primer día le asignaron a un perro mayor y miedoso llamado Lucas, que llevaba dos años esperando una familia. Lucas no se dejaba tocar y se escondía en un rincón de la jaula. Fernando, en vez de forzarlo, se sentaba cada tarde a su lado y le leía el periódico en voz alta. Al cabo de un mes, el perro empezó a menear la cola cuando lo veía llegar. Un día, Lucas apoyó la cabeza en su rodilla, y Fernando sintió un nudo en la garganta. Esa misma semana firmó los papeles de adopción. Ahora salen a pasear dos veces al día, y los vecinos dicen que no saben quién ha rescatado a quién.",
        "vocabulary": [
            {
                "es": "jubilarse",
                "tr": "emekli olmak"
            },
            {
                "es": "apenas salía",
                "tr": "neredeyse hiç dışarı çıkmıyordu"
            },
            {
                "es": "preocupada",
                "tr": "endişeli"
            },
            {
                "es": "sugerir",
                "tr": "önermek"
            },
            {
                "es": "hacerse voluntario",
                "tr": "gönüllü olmak"
            },
            {
                "es": "la protectora de animales",
                "tr": "hayvan barınağı"
            },
            {
                "es": "a regañadientes",
                "tr": "istemeye istemeye"
            },
            {
                "es": "convencido",
                "tr": "ikna olmuş, emin"
            },
            {
                "es": "durar",
                "tr": "sürmek, dayanmak"
            },
            {
                "es": "asignar",
                "tr": "atamak, vermek"
            },
            {
                "es": "miedoso",
                "tr": "korkak, ürkek"
            },
            {
                "es": "no se dejaba tocar",
                "tr": "dokunulmasına izin vermiyordu"
            },
            {
                "es": "el rincón",
                "tr": "köşe"
            },
            {
                "es": "la jaula",
                "tr": "kafes"
            },
            {
                "es": "forzar",
                "tr": "zorlamak"
            },
            {
                "es": "en voz alta",
                "tr": "yüksek sesle"
            },
            {
                "es": "menear la cola",
                "tr": "kuyruk sallamak"
            },
            {
                "es": "la rodilla",
                "tr": "diz"
            },
            {
                "es": "un nudo en la garganta",
                "tr": "boğazda düğüm (duygulanma)"
            },
            {
                "es": "rescatar",
                "tr": "kurtarmak"
            }
        ],
        "quiz": [
            {
                "q": "'Jubilarse' fiilinin anlamı nedir?",
                "options": [
                    "Emekli olmak",
                    "Kutlamak",
                    "Sevinmek",
                    "İstifa etmek"
                ],
                "answer": 0
            },
            {
                "q": "'Sugerir' ne demektir?",
                "options": [
                    "Önermek",
                    "Emretmek",
                    "Sormak",
                    "Sürmek"
                ],
                "answer": 0
            },
            {
                "q": "'La protectora de animales' nedir?",
                "options": [
                    "Veteriner",
                    "Hayvanat bahçesi",
                    "Pet shop",
                    "Hayvan barınağı"
                ],
                "answer": 3
            },
            {
                "q": "'A regañadientes' ifadesinin anlamı nedir?",
                "options": [
                    "İstemeye istemeye",
                    "Dişlerini fırçalayarak",
                    "Severek",
                    "Gülerek"
                ],
                "answer": 0
            },
            {
                "q": "'Miedoso' kelimesinin anlamı nedir?",
                "options": [
                    "Ürkek",
                    "Cesur",
                    "Yaşlı",
                    "Hasta"
                ],
                "answer": 0
            },
            {
                "q": "'El rincón' nedir?",
                "options": [
                    "Böbrek",
                    "Kuyruk",
                    "Köşe",
                    "Yatak"
                ],
                "answer": 2
            },
            {
                "q": "'La jaula' ne demektir?",
                "options": [
                    "Tasma",
                    "Mama kabı",
                    "Kafes",
                    "Kulübe"
                ],
                "answer": 2
            },
            {
                "q": "'Menear la cola' ne demektir?",
                "options": [
                    "Kuyruk sallamak",
                    "Sıra beklemek",
                    "Havlamak",
                    "Yalamak"
                ],
                "answer": 0
            },
            {
                "q": "'Un nudo en la garganta' neyi anlatır?",
                "options": [
                    "Duygulanmayı",
                    "Boğaz ağrısını",
                    "Kravat bağlamayı",
                    "Öksürmeyi"
                ],
                "answer": 0
            },
            {
                "q": "'Rescatar' fiilinin anlamı nedir?",
                "options": [
                    "Yakalamak",
                    "Bulmak",
                    "Satın almak",
                    "Kurtarmak"
                ],
                "answer": 3
            }
        ]
    },
    {
        "title": "Mi primera Feria de Abril",
        "text": "Hannah llevaba seis meses viviendo en Sevilla cuando sus compañeras de trabajo la invitaron a la Feria de Abril. «Tienes que venir, pero vestida de flamenca», le dijo Rocío entusiasmada. Hannah no sabía bailar sevillanas y le daba vergüenza, pero aceptó el reto. Rocío le prestó un traje de lunares rojo y le puso una flor en el pelo. Al llegar al recinto ferial, se quedó deslumbrada por la portada iluminada con miles de bombillas y por las calles llenas de casetas. En la caseta de la familia de Rocío, todos la recibieron como si la conocieran de toda la vida. Le ofrecieron rebujito y unas tortillitas de camarones, y una tía de Rocío se empeñó en enseñarle los pasos básicos de las sevillanas. Hannah tropezó varias veces, pero nadie se burló; al contrario, la aplaudían. A las cinco de la mañana, agotada y feliz, entendió que la Feria no era solo una fiesta, sino una manera de compartir la alegría.",
        "vocabulary": [
            {
                "es": "vestida de flamenca",
                "tr": "flamenko elbisesiyle"
            },
            {
                "es": "entusiasmada",
                "tr": "heyecanlı, coşkulu"
            },
            {
                "es": "las sevillanas",
                "tr": "Sevilla'ya özgü halk dansı"
            },
            {
                "es": "darle vergüenza a alguien",
                "tr": "birini utandırmak"
            },
            {
                "es": "el reto",
                "tr": "meydan okuma, zorluk"
            },
            {
                "es": "el traje de lunares",
                "tr": "puantiyeli elbise"
            },
            {
                "es": "el recinto ferial",
                "tr": "fuar alanı"
            },
            {
                "es": "deslumbrada",
                "tr": "gözleri kamaşmış"
            },
            {
                "es": "la portada",
                "tr": "giriş kapısı (fuar)"
            },
            {
                "es": "las bombillas",
                "tr": "ampuller"
            },
            {
                "es": "la caseta",
                "tr": "fuar çadırı/kulübesi"
            },
            {
                "es": "de toda la vida",
                "tr": "ömür boyu, eskiden beri"
            },
            {
                "es": "el rebujito",
                "tr": "manzanilla şarabı ve gazozdan içecek"
            },
            {
                "es": "las tortillitas de camarones",
                "tr": "karidesli çıtır gözleme"
            },
            {
                "es": "empeñarse en",
                "tr": "ısrar etmek"
            },
            {
                "es": "los pasos",
                "tr": "adımlar"
            },
            {
                "es": "tropezar",
                "tr": "tökezlemek"
            },
            {
                "es": "burlarse de",
                "tr": "alay etmek"
            },
            {
                "es": "aplaudir",
                "tr": "alkışlamak"
            },
            {
                "es": "la alegría",
                "tr": "neşe"
            }
        ],
        "quiz": [
            {
                "q": "'Entusiasmada' ne demektir?",
                "options": [
                    "Yorgun",
                    "Kızgın",
                    "Coşkulu",
                    "Endişeli"
                ],
                "answer": 2
            },
            {
                "q": "'Le daba vergüenza' ne demektir?",
                "options": [
                    "Utandırıyordu, başkasını",
                    "Öfkeleniyordu",
                    "Utanıyordu",
                    "Korkuyordu"
                ],
                "answer": 2
            },
            {
                "q": "'El reto' nedir?",
                "options": [
                    "Ret",
                    "Rötar",
                    "Portre",
                    "Meydan okuma"
                ],
                "answer": 3
            },
            {
                "q": "'El traje de lunares' nedir?",
                "options": [
                    "Ay ışığı elbisesi",
                    "Gece elbisesi",
                    "Puantiyeli elbise",
                    "Çizgili takım"
                ],
                "answer": 2
            },
            {
                "q": "'Deslumbrada' kelimesinin anlamı nedir?",
                "options": [
                    "Gözleri kamaşmış",
                    "Karanlıkta kalmış",
                    "Uykulu",
                    "Kaybolmuş"
                ],
                "answer": 0
            },
            {
                "q": "'Las bombillas' nedir?",
                "options": [
                    "Bombalar",
                    "Balonlar",
                    "Pompalar",
                    "Ampuller"
                ],
                "answer": 3
            },
            {
                "q": "'De toda la vida' ifadesinin anlamı nedir?",
                "options": [
                    "Hayat boyu sürecek",
                    "Tüm hayatı",
                    "Hayatta bir kez",
                    "Eskiden beri"
                ],
                "answer": 3
            },
            {
                "q": "'Empeñarse en' ne demektir?",
                "options": [
                    "Rehin vermek",
                    "Israr etmek",
                    "Başlamak",
                    "Vazgeçmek"
                ],
                "answer": 1
            },
            {
                "q": "'Tropezar' fiilinin anlamı nedir?",
                "options": [
                    "Dans etmek",
                    "Tökezlemek",
                    "Çarpmak, arabayla",
                    "Tırmanmak"
                ],
                "answer": 1
            },
            {
                "q": "'Burlarse de' ne demektir?",
                "options": [
                    "Kandırmak",
                    "Alay etmek",
                    "Gülmek, birlikte",
                    "Övmek"
                ],
                "answer": 1
            }
        ]
    }
];
