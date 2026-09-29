// IMAGENS DE DEMONSTRAÇÃO
// ---------------------------------------------------------------
// Todas as fotos abaixo são placeholders ilustrativos (Unsplash).
// Para usar fotos reais da Cativar, coloque os arquivos em /public/fotos/
// e troque o `src` correspondente, por exemplo:
//   hero: { src: '/fotos/recepcao.jpg', alt: '...' }
// Caso alguma imagem não carregue, o componente SmartImage exibe
// automaticamente um bloco neutro no lugar.
// ---------------------------------------------------------------

const unsplash = (id, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`

export const images = {
  hero: {
    src: unsplash('1628009368231-7bb7cfcb0def', 1400),
    alt: 'Cão recebendo cuidado veterinário com carinho',
    label: 'Atendimento',
  },
  aboutMain: {
    src: unsplash('1601758228041-f3b2795255f1', 1100),
    alt: 'Tutora abraçando seu cachorro',
    label: 'Pets',
  },
  aboutDetail: {
    src: unsplash('1514888286974-6c03e2ca1dba', 700),
    alt: 'Gato tranquilo olhando para a câmera',
    label: 'Cuidado',
  },
  services: {
    clinica: {
      src: unsplash('1583337130417-3346a1be7dee', 900),
      alt: 'Cachorro em atendimento veterinário',
      label: 'Clínica Veterinária',
    },
    petshop: {
      src: unsplash('1450778869180-41d0601e046e', 900),
      alt: 'Tutor e seu cachorro juntos',
      label: 'Pet Shop',
    },
    banho: {
      src: unsplash('1516734212186-a967f81ad0d7', 900),
      alt: 'Cachorro após o banho',
      label: 'Banho e Tosa',
    },
  },
  gallery: [
    { src: unsplash('1543466835-00a7907e9de1', 900), alt: 'Cachorro olhando para cima', label: 'Pets', shape: 'tall' },
    { src: unsplash('1576201836106-db1758fd1c97', 1100), alt: 'Pet em atendimento', label: 'Atendimento', shape: 'wide' },
    { src: unsplash('1574158622682-e40e69881006', 900), alt: 'Gato descansando', label: 'Cuidados', shape: 'square' },
    { src: unsplash('1537151625747-768eb6cf92b2', 900), alt: 'Cachorro em ambiente tranquilo', label: 'Ambiente', shape: 'square' },
    { src: unsplash('1583511655857-d19b40a7a54e', 900), alt: 'Cachorro com acessórios', label: 'Pet Shop', shape: 'tall' },
  ],
  instagram: [
    unsplash('1517849845537-4d257902454a', 600),
    unsplash('1592194996308-7b43878e84a6', 600),
    unsplash('1587300003388-59208cc962cb', 600),
    unsplash('1548199973-03cce0bbc87b', 600),
    unsplash('1596854407944-bf87f6fdd49e', 600),
    unsplash('1561037404-61cd46aa615b', 600),
  ],
}
