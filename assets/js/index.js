document.addEventListener('DOMContentLoaded', function () {
    const body = document.body;
    // const toggleButton = document.createElement('button');
    // toggleButton.textContent = 'Toggle Theme';
    // toggleButton.className = 'theme-toggle';
    // document.body.appendChild(toggleButton);

    // toggleButton.addEventListener('click', function () {
    //     body.classList.toggle('dark-theme');
    //     body.classList.toggle('light-theme');
    // });

    const codeBackground = document.createElement('div');
    codeBackground.className = 'code-background';
    document.body.appendChild(codeBackground);
    const codeSnippets = [
        'console.log("Hola Mundo");',
        'print("Hello World")',
        '<title>Portafolio</title>',
        'def saludo():',
        'function test() { return true; }',
        'let count = 0;',
        'if (user) { login(); }',
        'class Persona:',
        'const app = angular.module("myApp", []);',
        'router.get("/", handler);',
        'from django.db import models',
        'return res.status(200);',
        'ngOnInit() {}',
    ];

    for (let i = 0; i < 30; i++) {
        const span = document.createElement('span');
        span.textContent = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
        span.style.left = Math.random() * 100 + 'vw';
        span.style.top = Math.random() * 100 + 'vh';
        span.style.animationDuration = 10 + Math.random() * 10 + 's';
        span.classList.add('code-line');
        codeBackground.appendChild(span);
    }
});