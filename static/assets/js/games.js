function loadGms() {
    const squareBtns = document.querySelectorAll('.square_btn');
  
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          loadSquareBtn(entry.target);
          observer.unobserve(entry.target);
        }
      });
    });
  
    squareBtns.forEach(btn => {
      observer.observe(btn);
    });
  }
  
  function loadSquareBtn(btn) {
    btn.classList.add('loaded');
}

function addGms(name, imageUrl, onClickFunction, width, height) {
    var gmsContainer = document.getElementById('gmsContainer');
    var linkElement = document.createElement('a');
    linkElement.href = "#";
    linkElement.className = "square_btn";
    linkElement.onclick = onClickFunction;

    if (width) {
        linkElement.style.width = width + 'px';
    }

    if (height) {
        linkElement.style.height = height + 'px';
    }

    var imageElement = document.createElement('img');
    imageElement.className = "rounded";
    imageElement.src = imageUrl;
    imageElement.alt = name;
    imageElement.draggable = false;

    var textElement = document.createTextNode(name);

    linkElement.appendChild(imageElement);
    linkElement.appendChild(textElement);

    gmsContainer.appendChild(linkElement);
}

var gms = {
  // All-Time favorites
  'GeForce Now': { imageUrl: "/assets/img/geforcenow.webp", onClick: geforce },
  'Roblox': { imageUrl: "/assets/img/roblox.webp", onClick: rbx },
  // Shooter Games
  '1v1.lol': { imageUrl: "/assets/img/1v1.webp", onClick: onevone },
  'Awesome Tanks 2': { imageUrl: "/assets/img/atanks2.webp", onClick: awesomeTanksTwo },
  'Florr.io': { imageUrl: "/assets/img/florr.webp", onClick: florr },
  'Krunker.io': { imageUrl: "/assets/img/krunker.webp", onClick: krunker },
  'Time Shooter SWAT': { imageUrl: "/assets/img/time-shooter-3.webp", onClick: timeShooter3 },
  // Sport Games
  'Retro Bowl': { imageUrl: "/assets/img/retro.webp", onClick: rBowl },
  'BasketBros.io': { imageUrl: "/assets/img/basketbros.webp", onClick: basketBros },
  'Basket Random': { imageUrl: "/assets/img/basketrandom.webp", onClick: basketRandom },
  'Volley Random': { imageUrl: "/assets/img/volley-random.webp", onClick: volleyRandom },
  // Ball/Platformer Games
  'Slope': { imageUrl: "/assets/img/slope.webp", onClick: slope },
  'Boxel Rebound': { imageUrl: "/assets/img/boxelrebound.webp", onClick: brebound },
  'Run 3': { imageUrl: "/assets/img/run3.webp", onClick: run3 },
  'Fireboy and Watergirl': { imageUrl: "/assets/img/fireboy-and-watergirl.webp", onClick: fBwG1 },
  'Stack Bounce': { imageUrl: "/assets/img/stackbounce.webp", onClick: stackBounce },
  'Stickman Hook': { imageUrl: "/assets/img/stickmanhook.webp", onClick: stickManHook },
  // Domination Games
  'Hole.io': { imageUrl: "/assets/img/hole-io.webp", onClick: holeio },
  'Paper.io': { imageUrl: "/assets/img/paperio.webp", onClick: paperIo },
  'Territorial.io': { imageUrl: "/assets/img/territorial.webp", onClick: territorial },
  // Running Games
  'Subway Surfers': { imageUrl: "/assets/img/subway.webp", onClick: subway },
  'Temple Run': { imageUrl: "/assets/img/temple-run.webp", onClick: templeRun },
  'OvO': { imageUrl: "/assets/img/ovo.webp", onClick: ovo },
  'Vex 3': { imageUrl: "/assets/img/vex3.webp", onClick: vex8 },
  'Vex 8': { imageUrl: "/assets/img/vex8.webp", onClick: vex8 },
  'Tall Man Run': { imageUrl: "/assets/img/tall-man-run.webp", onClick: tallManRun },
  'Crowd Run 3D': { imageUrl: "/assets/img/crowd-run-3d.webp", onClick: crowdRun3d },
  // Car/Racing Games
  'Drift Hunters': { imageUrl: "/assets/img/drifthunters.webp", onClick: driftHunters },
  'Drive Mad': { imageUrl: "/assets/img/drive-mad.webp", onClick: driveMad },
  'Moto X3M': { imageUrl: "/assets/img/motox3m.webp", onClick: motoX3M },
  // Brain Games
  'Bitlife': { imageUrl: "/assets/img/bitlife.webp", onClick: bitlife },
  '2048 ': { imageUrl: "/assets/img/2048.webp", onClick: twoZeroFourEight },
  'Pokemon 2048': { imageUrl: "/assets/img/p2048.webp", onClick: p2048 },
  'Chess.com': { imageUrl: "/assets/img/chess.webp", onClick: chess },
  'Jstris': { imageUrl: "/assets/img/jstris.webp", onClick: jstris },
  'Watermelon Game (Suika)': { imageUrl: "/assets/img/suika.webp", onClick: suikaWatermelon },
  "World's Hardest GM": { imageUrl: "/assets/img/worldshardestgm.webp", onClick: worldsHardestGm },
  // Idle/Clicking Games
  'Cookie Clicker': { imageUrl: "/assets/img/cookieclicker.webp", onClick: cookieClicker },
  'Idle Breakout': { imageUrl: "/assets/img/idlebreakout.webp", onClick: idleBreakout },
  'Monkey Mart': { imageUrl: "/assets/img/monkeymart.webp", onClick: monkeyMart },
  // Sandbox/Arcade Games
  'Eaglercraft (1.5)': { imageUrl: "/assets/img/eaglercraft.webp", onClick: eaglerCraft15 },
  'Eaglercraft (1.8)': { imageUrl: "/assets/img/eaglercraft.webp", onClick: eaglerCraft18 },
  'Kick The Buddy': { imageUrl: "/assets/img/super-buddy-kick.webp", onClick: kickTheBuddy },
  'There is No Game': { imageUrl: "/assets/img/there-is-no-gms.webp", onClick: thereIsNoGame },
};

for (var gmsName in gms) {
    if (gms.hasOwnProperty(gmsName)) {
      try {
        const { imageUrl, onClick, width, height } = gms[gmsName];
        addGms(gmsName, imageUrl, onClick, width, height);
        fetchMessage.style.display = 'none';
      } catch (error) {
        fetchMessage.innerText = 'Failed to load, please refresh.';
      }
    }
}

/* Search Bar */
document.getElementById('searchApps').addEventListener('input', function(event) {
    const query = this.value.toLowerCase();
    const links = document.getElementsByClassName('search-results')[0].getElementsByTagName('a');
    let foundResults = false;
    for(let i = 0; i < links.length; i++) {
        const link = links[i];
        const linkText = link.innerText.toLowerCase();
        if(linkText.includes(query)) {
            link.style.display = 'block';
            foundResults = true;
        } else {
            link.style.display = 'none';
        }
    }
    if(!foundResults) {
        const message = document.getElementById('searchMessage');
        message.innerText = 'No Results Found.';
        message.style.display = 'block';
    } else {
        const message = document.getElementById('searchMessage');
        message.style.display = 'none';
    }
});

loadGms();

