const artikel = document.querySelector('article')

const admin = document.querySelector('#administration')

admin.addEventListener('click', (e) => {
    e.preventDefault()

    artikel.innerHTML = "<p>As the capital of France, Paris is the seat of France's national government. For the executive, the two chief officers each have their own official residences, which also serve as their offices. The President of the French Republic resides at the Élysée Palace in the 8th arrondissement, while the Prime Minister's seat is at the Hôtel Matignon in the 7th arrondissement. Government ministries are located in various parts of the city; many are located in the 7th arrondissement, near the Hôtel Matignon.</p>"
})

const history = document.querySelector('#history')

history.addEventListener('click', (e) => {
    e.preventDefault()

    artikel.innerHTML = "<p>The Parisii, a sub-tribe of the Celtic Senones, inhabited the Paris area from around the middle of the 3rd century BC. One of the area's major north–south trade routes crossed the Seine on the île de la Cité; this meeting place of land and water trade routes gradually became an important trading centre. The Parisii traded with many river towns (some as far away as the Iberian Peninsula) and minted their own coins for that purpose.</p><p>The Romans conquered the Paris Basin in 52 BC and began their settlement on Paris' Left Bank. The Roman town was originally called Lutetia (more fully, Lutetia Parisiorum, 'Lutetia of the Parisii', modern French Lutèce). It became a prosperous city with a forum, baths, temples, theatres, and an amphitheatre.</p>"
})

const geo = document.querySelector('#geography')

geo.addEventListener('click', (e) => {
    e.preventDefault()

    artikel.innerHTML = "<p>Paris is located in northern central France, in a north-bending arc of the river Seine whose crest includes two islands, the Île Saint-Louis and the larger Île de la Cité, which form the oldest part of the city. The river's mouth on the English Channel (La Manche) is about 233 mi (375 km) downstream from the city. The city is spread widely on both banks of the river. Overall, the city is relatively flat, and the lowest point is 35 m (115 ft) above sea level. Paris has several prominent hills, the highest of which is Montmartre at 130 m (427 ft).</p><p>Excluding the outlying parks of Bois de Boulogne and Bois de Vincennes, Paris covers an oval measuring about 87 km2 (34 sq mi) in area, enclosed by the 35 km (22 mi) ring road, the Boulevard Périphérique. The city's last major annexation of outlying territories in 1860 not only gave it its modern form but also created the 20 clockwise-spiralling arrondissements (municipal boroughs). From the 1860 area of 78 km2 (30 sq mi), the city limits were expanded marginally to 86.9 km2(33.6 sq mi) in the 1920s. In 1929, the Bois de Boulogne and Bois de Vincennes forest parks were officially annexed to the city, bringing its area to about 105 km2 (41 sq mi). The metropolitan area of the city is 2,300 km2(890 sq mi).</p>"
})