## Sobre

Projeto desenvolvido para aprofundar os conhecimentos e centralizar meus melhores trabalhos pessoais em um único espaço.

Desenvolvi com: <code>TypeScript · React · Styled Components</code>

## Estrutura

```
src/
├── assets/
│   └── i18n/              # Traduções e configuração de idiomas
├── components/
│   ├── LanguageToggle/    # Botão para alternar o idioma
│   ├── ThemeToggle/       # Botão para alternar o tema
│   ├── ScrollIndicator/   # Indicador e botão para rolar a página
│   └── Navbar/            # Barra de navegação
├── hooks/
│   └── usePersistedState  # Hook para estado persistido no localStorage
├── pages/
│   ├── Home/              # Seção inicial, com informações básicas e botões de redes sociais e download do currículo
│   ├── Skills/            # Seção de habilidades
│   ├── Experience/        # Seção de experiências
│   └── Projects/          # Seção de projetos
└── styles/
    ├── borders/           # Tokens de borda
    ├── colors/            # Paleta de cores
    ├── themes/            # Definição dos temas
    ├── globals.ts         # Estilos globais
    ├── theme-provider.ts  # Provider de tema
    └── fonts.ts           # Configuração de fontes
```
