const artikel = document.querySelector('article')

const admin = document.querySelector('#administration')

admin.addEventListener('click', (e) => {
    e.preventDefault()

    artikel.innerHTML = "<p>Under Japanese law, Tokyo is designated as a to (都), translated as metropolis. Its administrative structure is similar to that of Japan's other prefectures. The 23 special wards (特別区, tokubetsu-ku), which until 1943 constituted the city of Tokyo, are self-governing municipalities, each having a mayor, a council, and the status of a city.</p><p>In addition to these 23 special wards, Tokyo also includes 26 more cities (市 -shi), five towns (町 -chō or machi), and eight villages (村 -son or -mura), each of which has a local government. The Tokyo Metropolitan Government administers the whole metropolis including the 23 special wards and the cities and towns that constitute the prefecture. It is headed by a publicly elected governor and metropolitan assembly. Its headquarters is in Shinjuku Ward.</p>"
})

const history = document.querySelector('#history')

history.addEventListener('click', (e) => {
    e.preventDefault()
    
    artikel.innerHTML = "<p>Tokyo was originally a small fishing village, Edo, in what was formerly part of the old Musashi Province. Edo was first fortified by the Edo clan, in the late twelfth century. In 1457, Ōta Dōkan built Edo Castle. In 1590, Tokugawa Ieyasu moved from Mikawa Province (his lifelong base) to the Kantō region. When he became shōgun in 1603, Edo became the center of his ruling. During the subsequent Edo period, Edo grew into one of the largest cities in the world with a population topping one million by the 18th century. But Edo was still the home of the Tokugawa shogunate and not the capital of Japan (the Emperor himself lived in Kyoto from 794 to 1868). During the Edo era, the city enjoyed a prolonged period of peace known as the Pax Tokugawa, and in the presence of such peace, Edo adopted a stringent policy of seclusion, which helped to perpetuate the lack of any serious military threat to the city. The absence of war-inflicted devastation allowed Edo to devote the majority of its resources to rebuilding in the wake of the consistent fires, earthquakes, and other devastating natural disasters that plagued the city.</p>"    
})

const geo = document.querySelector('#geography')

geo.addEventListener('click', (e) => {
    e.preventDefault()

    artikel.innerHTML = "<p>The mainland portion of Tokyo lies northwest of Tokyo Bay and measures about 90 km (56 mi) east to west and 25 km (16 mi) north to south. The average elevation in Tokyo is 40 m (131 ft).[44] Chiba Prefecture borders it to the east, Yamanashi to the west, Kanagawa to the south, and Saitama to the north. Mainland Tokyo is further subdivided into the special wards (occupying the eastern half) and the Tama area (多摩地域) stretching westwards. Tokyo has a latitude of 35.65 (near the 36th parallel north), which makes it more southern than Rome (41.90), Madrid (40.41) and New York City (40.71).</p><p>Also within the administrative boundaries of Tokyo Metropolis are two island chains in the Pacific Ocean directly south: the Izu Islands, and the Ogasawara Islands, which stretch more than 1,000 km (620 mi) away from the mainland. Because of these islands and the mountainous regions to the west, Tokyo's overall population density figures far under-represent the real figures for the urban and suburban regions of Tokyo.</p>"
})