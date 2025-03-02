function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.style.display = sidebar.style.display === "block" ? "none" : "block";

    if (sidebar.style.display === 'block') {
        document.getElementById('menu').style.display = 'none';
      }
}

let iframeCount = 1;

document.addEventListener('DOMContentLoaded', () => {
    const searchBar = document.getElementById('searchBar');
    const sidebar = document.getElementById('sidebar');
    const menu = document.getElementById('menu');

    const searchBarColor = window.getComputedStyle(searchBar).backgroundColor;
    // Sets the sidebar AND mennu the same color as the url bar
    sidebar.style.backgroundColor = searchBarColor;
    menu.style.backgroundColor = searchBarColor;

});

function createIframe() {
    const currentIframe = document.getElementById("siteurl");
    if (currentIframe) {
        currentIframe.removeAttribute("id");
    }

    iframeCount++;
    const iframe = document.createElement("iframe");
    iframe.src = "welcome.html";
    iframe.id = "siteurl";
    iframe.title = `tab${iframeCount}`;

    document.getElementById("iframe-container").appendChild(iframe);

    // Create tab button
    const tabButton = document.createElement("button");
    tabButton.className = "btn btn-wide tab-button-container";
    tabButton.id = `tabButton-${iframeCount}`;
    tabButton.src = '';
    tabButton.innerHTML = `New Tab <span class="tab-close" onclick="removeIframe(${iframeCount})" style="font-size: 20px">&times;</span>`;
    tabButton.onclick = function() {
        const currentIframe = document.getElementById("siteurl");
        if (currentIframe) {
            currentIframe.removeAttribute("id");
        }
        iframe.id = "siteurl";
    };

    document.getElementById("tabList").appendChild(tabButton);
}

function removeIframe(id) {
    if (id === 1) return;

    const iframe = document.querySelector(`iframe[title="tab${id}"]`);
    if (iframe) {
        iframe.parentNode.removeChild(iframe);
        setTimeout(function() {
            var remainingIframes = document.querySelectorAll(".iframe-container iframe");
            var lastIframe = remainingIframes[remainingIframes.length - 1];
            lastIframe.id = "siteurl";
        }, 500);
    }

    const tabButton = document.getElementById(`tabButton-${id}`);
    if (tabButton) {
        tabButton.parentNode.removeChild(tabButton);
    }
}

function addDefaultTabButton() {
    const defaultTabButton = document.createElement("button");
    defaultTabButton.className = "btn btn-wide tab-button-container";
    defaultTabButton.id = "tabButton-1";
    defaultTabButton.innerHTML = `Default`;
    defaultTabButton.onclick = function() {
        const currentIframe = document.getElementById("siteurl");
        if (currentIframe) {
            currentIframe.removeAttribute("id");
        }
        const defaultIframe = document.querySelector('iframe[title="tab1"]');
        if (defaultIframe) {
            defaultIframe.id = "siteurl";
        }
    };

    document.getElementById("tabList").appendChild(defaultTabButton);
}