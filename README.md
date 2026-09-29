# Cativar — Clínica Veterinária, Pet Shop, Banho e Tosa

Proposta de site institucional para a Cativar (Manaus - AM).

## Tecnologias

React · Vite · Tailwind CSS v4 · Lucide React

## Como rodar

```bash
npm install
npm run dev      # ambiente de desenvolvimento
npm run build    # gera a versão de produção em /dist
npm run preview  # visualiza a versão de produção
```

## Estrutura

```
src/
  components/
    Header.jsx  Hero.jsx  About.jsx  Services.jsx  Benefits.jsx
    Testimonials.jsx  Gallery.jsx  Instagram.jsx  Contact.jsx
    Footer.jsx  WhatsAppButton.jsx
    ui/         Button, Reveal, SmartImage, SectionHeading, StarRating, Logo, BrandIcons
  data/
    site.js     contato, endereço, avaliação, links e depoimentos
    images.js   todas as imagens do site (placeholders)
  hooks/        useInView, useScrolled, useActiveSection
```

## Substituindo as fotos

Todas as fotos atuais são **imagens ilustrativas** (Unsplash). Para usar fotos reais da Cativar:

1. Coloque os arquivos em `public/fotos/`.
2. Edite `src/data/images.js` trocando o `src` de cada item (ex.: `'/fotos/recepcao.jpg'`).

Se alguma imagem não carregar, o componente `SmartImage` mostra automaticamente um bloco neutro na paleta do site.

## Pendências de conteúdo

- **Link das avaliações no Google:** o botão "Ver avaliações no Google" hoje abre uma busca pelo endereço no Google Maps. Quando houver o link oficial do perfil, atualize `googleReviewsUrl` em `src/data/site.js`.
- Horários, especialidades, equipe e fotos reais não foram informados e, por isso, não aparecem no site.
