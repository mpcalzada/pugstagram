import * as sapper from "@sapper/app";

// Busca el tag "app" dentro de template.html
sapper.start({
    target: document.querySelector('app ')
});
