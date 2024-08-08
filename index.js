const artikel = document.querySelector('article')

const admin = document.querySelector('#administration')

admin.addEventListener('click', (e) => {
    e.preventDefault()

    artikel.innerHTML = "<p>London is the seat of the Government of the United Kingdom. Many government departments, as well as the prime minister's residence at 10 Downing Street, are based close to the Palace of Westminster, particularly along Whitehall. There are 73 members of Parliament (MPs) from London, elected from local parliamentary constituencies in the national Parliament. As of December 2019, 49 are from the Labour Party, 21 are Conservatives, and three are Liberal Democrat. The ministerial post of minister for London was created in 1994. The current Minister for London is Paul Scully MP.</p>"
})

const history = document.querySelector('#history')

history.addEventListener('click', (e) => {
    e.preventDefault()

    artikel.innerHTML = "<p>In 1993, the remains of a Bronze Age bridge were found on the south foreshore, upstream of Vauxhall Bridge. This bridge either crossed the Thames or reached a now lost island in it. Two of those timbers were radiocarbon dated to between 1750 BC and 1285 BC.</p><p>In 2010, the foundations of a large timber structure, dated to between 4800 BC and 4500 BC, were found on the Thames's south foreshore, downstream of Vauxhall Bridge. The function of the mesolithic structure is not known. Both structures are on the south bank of the Thames where the now-underground River Effra flows into the Thames.</p>"
})

const geo = document.querySelector('#geography')

geo.addEventListener('click', (e) => {
    e.preventDefault()

    artikel.innerHTML = "<p>London, also referred to as Greater London, is one of nine regions of England and the top-level subdivision covering most of the city's metropolis. The small ancient City of London at its core once comprised the whole settlement, but as its urban area grew, the Corporation of London resisted attempts to amalgamate the city with its suburbs , causing 'London' to be defined in a number of ways for different purposes.</p><p>Forty per cent of Greater London is covered by the London post town, within which 'LONDON' forms part of postal addresses. The London telephone area code (020) covers a larger area, similar in size to Greater London, although some outer districts are excluded and some places just outside are included. The Greater London boundary has been aligned to the M25 motorway in places</p>"
})