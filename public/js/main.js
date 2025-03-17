document.addEventListener('DOMContentLoaded', function() {
    console.log('Main.js carregado');
    
    // Referências para as telas
    const loginScreen = document.getElementById('login-screen');
    const controleProcessosScreen = document.getElementById('controle-processos-screen');
    
    // Referência para o menu de navegação
    const mainNavbar = document.getElementById('main-navbar');
    
    // Verificar se os elementos existem
    if (!loginScreen || !controleProcessosScreen || !mainNavbar) {
        console.error('Elementos essenciais não encontrados');
        return;
    }

    // Manipulador de evento para o formulário de login
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            console.log('Login form submitted');
            
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            
            // Simulação de autenticação
            if (username && password) {
                // Mostrar o menu de navegação
                mainNavbar.classList.remove('d-none');
                console.log('Menu de navegação visível:', !mainNavbar.classList.contains('d-none'));
                
                // Mostrar a tela de controle de processos
                loginScreen.classList.add('d-none');
                controleProcessosScreen.classList.remove('d-none');
            } else {
                alert('Por favor, preencha todos os campos.');
            }
        });
    }
    
    // Manipulador de evento para o botão de logout
    const logoutButton = document.getElementById('nav-logout');
    if (logoutButton) {
        logoutButton.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Esconder o menu de navegação
            mainNavbar.classList.add('d-none');
            
            // Mostrar a tela de login
            controleProcessosScreen.classList.add('d-none');
            loginScreen.classList.remove('d-none');
            
            // Limpar os campos de login
            if (document.getElementById('username')) {
                document.getElementById('username').value = '';
            }
            if (document.getElementById('password')) {
                document.getElementById('password').value = '';
            }
        });
    }
    
    // Adicionar manipuladores de eventos para os links de navegação
    const navLinks = {
        'nav-controle-processos': controleProcessosScreen,
        'nav-iniciar-processo': document.getElementById('iniciar-processo-screen'),
        'nav-textos-modelos': document.getElementById('textos-modelos-screen'),
        'nav-blocos-assinatura': document.getElementById('blocos-assinatura-screen'),
        'nav-gerar-documento': document.getElementById('gerar-documento-screen')
    };
    
    // Função para esconder todas as telas
    function hideAllScreens() {
        for (const key in navLinks) {
            if (navLinks[key]) {
                navLinks[key].classList.add('d-none');
            }
        }
    }
    
    // Adicionar event listeners para cada link de navegação
    for (const key in navLinks) {
        const link = document.getElementById(key);
        const screen = navLinks[key];
        
        if (link && screen) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Esconder todas as telas
                hideAllScreens();
                
                // Mostrar a tela correspondente
                screen.classList.remove('d-none');
                
                // Atualizar o link ativo
                for (const k in navLinks) {
                    const l = document.getElementById(k);
                    if (l) {
                        l.classList.remove('active');
                    }
                }
                link.classList.add('active');
            });
        }
    }

    // Manipuladores de eventos para os botões da tela de controle de processos
    document.getElementById('btn-enviar-processo').addEventListener('click', function() {
        alert('Funcionalidade: Enviar Processo');
    });

    document.getElementById('btn-atualizar-andamento').addEventListener('click', function() {
        alert('Funcionalidade: Atualizar Andamento');
    });

    document.getElementById('btn-atribuicao-processos').addEventListener('click', function() {
        alert('Funcionalidade: Atribuição de Processos');
    });

    document.getElementById('btn-incluir-bloco').addEventListener('click', function() {
        alert('Funcionalidade: Incluir em Bloco');
    });

    document.getElementById('btn-concluir-processo').addEventListener('click', function() {
        alert('Funcionalidade: Concluir Processo na Unidade');
    });

    // Manipulador de evento para o botão "Novo Bloco" na tela de blocos de assinatura
    document.getElementById('btn-novo-bloco').addEventListener('click', function() {
        alert('Funcionalidade: Criar Novo Bloco de Assinatura');
    });

    // Manipulador de evento para o botão "Incluir Documento" na tela de gerar documento
    document.getElementById('btn-incluir-documento').addEventListener('click', function() {
        alert('Funcionalidade: Incluir Novo Documento');
    });

    // Manipuladores de eventos para os radio buttons na tela de gerar documento
    document.getElementById('interno').addEventListener('change', function() {
        document.getElementById('documento-interno-options').classList.remove('d-none');
        document.getElementById('documento-externo-options').classList.add('d-none');
    });

    document.getElementById('externo').addEventListener('change', function() {
        document.getElementById('documento-interno-options').classList.add('d-none');
        document.getElementById('documento-externo-options').classList.remove('d-none');
    });

    document.getElementById('edital').addEventListener('change', function() {
        document.getElementById('documento-interno-options').classList.remove('d-none');
        document.getElementById('documento-externo-options').classList.add('d-none');
    });
}); 