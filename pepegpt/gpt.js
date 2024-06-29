function registerStuff() {
    document.getElementById('chatarea')?.addEventListener('keydown', chatEnter);
    document.querySelector('.sendbtn button')?.addEventListener('click', triggerHumanChatEvent);
    document.getElementById('delbtn')?.addEventListener('click', delButtonClick);
    document.getElementById('lightmodebtn')?.addEventListener('click', toggleLightMode);
    document.getElementById('infobtn')?.addEventListener('click', showAboutDialog);
}
function chatEnter(ev) {
    if (ev.key == "Enter" && !(ev.ctrlKey || ev.shiftKey)) {
        ev.preventDefault();
        triggerHumanChatEvent();
    }
}
function triggerHumanChatEvent() {
    const ca = document.getElementById('chatarea');
    if (!ca) {
        return;
    }
    sendChatWithTemplateName(ca.value, 'humanchatentry');
    ca.value = '';
    window.setTimeout(generateCatChat, 200);
}
function generateCatChat() {
    const max = possibleResponses.length;
    const chosen = Math.floor(Math.random() * max);
    sendChatWithTemplateName(possibleResponses[chosen], 'catchatentry');
}
function sendChatWithTemplateName(msg, templateName) {
    if (msg.length == 0) {
        return;
    }
    const hce = document.getElementById(templateName);
    if (!hce) {
        return;
    }
    const df = hce.content;
    if (!df) {
        return;
    }
    const root = df.firstElementChild.cloneNode(true);
    const chatContent = root.querySelector(".chat");
    const lines = msg.split('\n');
    for (let l of lines) {
        if (l.startsWith('/')) {
            const p = document.createElement('p');
            const em = document.createElement('em');
            em.textContent = l;
            p.appendChild(em);
            chatContent.appendChild(p);
        }
        else {
            const p = document.createElement('p');
            p.textContent = l;
            chatContent.appendChild(p);
        }
    }
    const main = document.querySelector('main');
    const lastChild = document.querySelector('.chatbox');
    main.insertBefore(root, lastChild);
    root.scrollIntoView();
}
function delButtonClick() {
    const elems = document.querySelectorAll('section.history');
    for (let e of elems) {
        e.remove();
    }
}
function toggleLightMode() {
    const body = document.querySelector('body');
    if (body.classList.contains('light')) {
        body.classList.remove('light');
        document.getElementById('lightmodeicon').textContent = 'light_mode';
        document.getElementById('lightmodelabel').textContent = 'Light Mode';
    }
    else {
        body.classList.add('light');
        document.getElementById('lightmodeicon').textContent = 'dark_mode';
        document.getElementById('lightmodelabel').textContent = 'Dark Mode';
    }
}
function showAboutDialog() {
    const d = document.getElementById('aboutDialog');
    d.showModal();
}
const possibleResponses = [
    "pepe.",
    "pepe?",
    "pee ppee",
    "pe",
    "pepe, peeeeeeeeeeeeepaaaa, peowww, preeeepeee, powww.",
    "pepe pepe pepe pepe pepe pepe pepe pepe pepe pepe\npepe pepe pepe pepe pepe pepe pepe pepe\npepe pepe pepe pepe\npepe pepe",
    "purrrrr",
    "growl!!",
    "grrr",
    "mmmm.... purrr.... mmmm...",
    "purr.",
    "...",
    "pow? purrrrrrr.... mmm..",
    "hisssssss",
    "hyao!",
    "pepepe",
    "pepe? pep meeeow me peeeeoewowow pep pepw pepe.\npep, pepe mow pepe pepe.",
    "Me pepe pe peeeeooow pe pepe pep ppeeeowww purr poww pepe me pep pepew, pe pep peeowow me peeeeeoow pep pepe purrr grrr pepe. peeow; pepe, pepe, grr pepe. pepowow pep, me pepe pep .\npepeeeoow pep pepe purrr grrr. pepes, pepe moo mee pepe.\npepe pe pe peooow.",
    "pepew? pepe. pepe pepe, pepe pepe pepe.",
    "snnnnnaaaarrlll",
    "/makes eye contact and judges you silently",
    "/slowly walks up to you and boops your arm with nose",
    "/climbs up on top of wardrobe",
    "/scratches at the front door, then runs away",
    "/acts interested in the little dust mote that's flying in the sunlight.",
    "/scratches at the door. When let out, scratches at the door to be let in again.",
    "pe pee peep peepee.",
    "prrrrr... snort.",
    "/wonders about the food bowl that is clearly empty",
    "pepe? pepe pepe?\n/insists on hovering around the food bowl.\nmyaaaah!",
    "Myooooo.",
    "/jumps from the back of the sofa onto your shoulders and begins licking your neck",
    "/remains a little ball of fur and is quite warm indeed.",
    "pepe pepe pepe meeeeow pepe pepe.\n/that sounded quite tense.\npepe pepe pepe.\n/actually it sounds like the cat is just bored.",
    "/brings in a dead bird and leaves it on your bed",
    "/faces exactly away from you, so you can clearly see its backside",
    "purrr, purr, purrrrr..."
];
//# sourceMappingURL=app.js.map