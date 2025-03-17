document.addEventListener('DOMContentLoaded', function() {
    // Referências para as telas
    const loginScreen = document.getElementById('login-screen');
    const controleProcessosScreen = document.getElementById('controle-processos-screen');
    const iniciarProcessoScreen = document.getElementById('iniciar-processo-screen');
    const textosModelosScreen = document.getElementById('textos-modelos-screen');
    const blocosAssinaturaScreen = document.getElementById('blocos-assinatura-screen');
    const gerarDocumentoScreen = document.getElementById('gerar-documento-screen');

    // Referências para os links de navegação
    const navControleProcessos = document.getElementById('nav-controle-processos');
    const navIniciarProcesso = document.getElementById('nav-iniciar-processo');
    const navTextosModelos = document.getElementById('nav-textos-modelos');
    const navBlocosAssinatura = document.getElementById('nav-blocos-assinatura');
    const navGerarDocumento = document.getElementById('nav-gerar-documento');
    const navLogout = document.getElementById('nav-logout');
    
    // Array com todos os links de navegação
    const navLinks = [
        navControleProcessos,
        navIniciarProcesso,
        navTextosModelos,
        navBlocosAssinatura,
        navGerarDocumento
    ];

    // Função para esconder todas as telas
    function hideAllScreens() {
        loginScreen.classList.add('d-none');
        controleProcessosScreen.classList.add('d-none');
        iniciarProcessoScreen.classList.add('d-none');
        textosModelosScreen.classList.add('d-none');
        blocosAssinaturaScreen.classList.add('d-none');
        gerarDocumentoScreen.classList.add('d-none');
    }

    // Função para mostrar uma tela específica
    function showScreen(screen) {
        hideAllScreens();
        screen.classList.remove('d-none');
    }
    
    // Função para atualizar o menu ativo
    function setActiveNavLink(activeLink) {
        navLinks.forEach(link => {
            link.classList.remove('active');
        });
        if (activeLink) {
            activeLink.classList.add('active');
        }
    }

    // Manipulador de evento para o formulário de login
    document.getElementById('login-form').addEventListener('submit', function(e) {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        // Simulação de autenticação (em um sistema real, isso seria feito no servidor)
        if (username && password) {
            showScreen(controleProcessosScreen);
            setActiveNavLink(navControleProcessos);
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    });

    // Manipuladores de eventos para os links de navegação
    navControleProcessos.addEventListener('click', function(e) {
        e.preventDefault();
        showScreen(controleProcessosScreen);
        setActiveNavLink(navControleProcessos);
    });

    navIniciarProcesso.addEventListener('click', function(e) {
        e.preventDefault();
        showScreen(iniciarProcessoScreen);
        setActiveNavLink(navIniciarProcesso);
    });

    navTextosModelos.addEventListener('click', function(e) {
        e.preventDefault();
        showScreen(textosModelosScreen);
        setActiveNavLink(navTextosModelos);
    });

    navBlocosAssinatura.addEventListener('click', function(e) {
        e.preventDefault();
        showScreen(blocosAssinaturaScreen);
        setActiveNavLink(navBlocosAssinatura);
    });

    navGerarDocumento.addEventListener('click', function(e) {
        e.preventDefault();
        showScreen(gerarDocumentoScreen);
        setActiveNavLink(navGerarDocumento);
    });

    navLogout.addEventListener('click', function(e) {
        e.preventDefault();
        showScreen(loginScreen);
        setActiveNavLink(null);
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
    });

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