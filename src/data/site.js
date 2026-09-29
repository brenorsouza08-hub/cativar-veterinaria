// Informações confirmadas da Cativar.
// Centralizadas aqui para facilitar atualizações futuras.

const WHATSAPP_NUMBER = '5592984131732'

export const whatsappLink = (
  message = 'Olá! Gostaria de saber mais sobre os serviços da Cativar.',
) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`

export const site = {
  name: 'Cativar',
  tagline: 'Clínica Veterinária • Pet Shop • Banho e Tosa',
  phone: '(92) 98413-1732',
  phoneHref: 'tel:+5592984131732',
  instagramHandle: '@cativarveterinaria',
  instagramUrl: 'https://www.instagram.com/cativarveterinaria/',
  address: {
    street: 'R. São Eusébio, 100 - Monte das Oliveiras',
    city: 'Manaus - AM',
    zip: '69093-820',
    full: 'R. São Eusébio, 100 - Monte das Oliveiras, Manaus - AM, 69093-820',
  },
  rating: { value: 4.7, label: '4,7', count: 14 },
}

const mapsQuery = encodeURIComponent(`Cativar Clínica Veterinária, ${site.address.full}`)

// Busca pelo endereço/nome no Google Maps (não é um link inventado de perfil).
// Quando o link oficial do perfil da Cativar no Google estiver disponível,
// substitua `googleReviewsUrl` por ele.
export const mapsSearchUrl = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`
export const googleReviewsUrl = mapsSearchUrl
export const mapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(site.address.full)}&output=embed`

export const navLinks = [
  { id: 'inicio', label: 'Início' },
  { id: 'sobre', label: 'Sobre' },
  { id: 'servicos', label: 'Serviços' },
  { id: 'cuidado', label: 'Cuidado' },
  { id: 'avaliacoes', label: 'Avaliações' },
  { id: 'contato', label: 'Contato' },
]

// Trechos públicos de avaliações do Google (transcritos sem alterações).
export const reviews = [
  'De excelência sem palavras tudo de bom o atendimento Dra doutora',
  'Não sei o nome da sala de atendimento, mas o ambiente é muito agradável.',
  'Pet shop ótimo, tem muita coisa.',
]
