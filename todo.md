# Handcrafted Haven - Project TODO

## Core Features (10 Requisitos BYU Idaho)

- [x] 1. Navigation System - barra de navegação superior responsiva com Home, Products, Artisans e busca integrada
- [x] 2. Global Theming - paleta clássica/artesanal (tons terrosos, bege, verde musgo) com tipografia serif elegante
- [x] 3. Product Catalog Grid - grade responsiva (1/2/3 colunas) com imagem, nome, artesão, categoria e preço
- [x] 4. Product Card UI - cards com hover effects, badge de categoria, artesão clicável e botão de detalhes
- [x] 5. Search & Filtering - busca em tempo real por nome e filtros por categoria com contagem de resultados
- [x] 6. Product Detail Page - página individual com imagem ampliada, descrição, info do criador e reviews
- [x] 7. Product Reviews - sistema de avaliação com estrelas, comentário, nome do revisor e data
- [x] 8. Artisan Profile Page - página dedicada com bio, foto/avatar, localização e grid de produtos
- [x] 9. Accessibility Audit - aria-labels, alt text, navegação por teclado, contraste adequado
- [x] 10. Deployment Pipeline - build otimizado, script de deploy e push automático para GitHub

## Database & Backend

- [ ] Schema: Artisans table com bio, location, avatar
- [ ] Schema: Products table com artisan_id, description, category, price, image_url
- [ ] Schema: Reviews table com product_id, rating, comment, reviewer_name, created_at
- [ ] tRPC procedures para listar produtos, filtrar, buscar
- [ ] tRPC procedures para listar artesãos
- [ ] tRPC procedures para criar/listar reviews
- [ ] tRPC procedures para obter detalhes de produto e artesão

## Frontend Pages & Components

- [ ] Layout base com Navigation System
- [ ] Home page com hero section e featured products
- [ ] Products page com catalog grid, search e filtering
- [ ] Product detail page com reviews section
- [ ] Artisan profile page com bio e produtos
- [ ] ProductCard component com hover effects
- [ ] ReviewCard component para exibir avaliações
- [ ] Search bar component integrado na navegação
- [ ] Category filter buttons

## Styling & Theme

- [ ] Google Fonts serif integration (Lora ou Playfair Display)
- [ ] CSS variables para paleta clássica/artesanal
- [ ] Tailwind config customizado com cores terrosas, bege, verde musgo
- [ ] Responsive design mobile-first
- [ ] Hover effects e transições suaves

## Accessibility

- [ ] aria-labels em todos os botões e links interativos
- [ ] alt text em todas as imagens de produtos e artesãos
- [ ] Navegação completa por teclado (Tab, Enter, Escape)
- [ ] Contraste de cores adequado (WCAG AA mínimo)
- [ ] Semantic HTML (nav, main, article, section)
- [ ] Focus indicators visíveis

## Testing & Quality

- [ ] Vitest tests para tRPC procedures
- [ ] Testes de acessibilidade
- [ ] Testes de responsividade em diferentes breakpoints

## Deployment

- [ ] Build script otimizado
- [ ] GitHub Actions workflow para deploy automático
- [ ] Push para repositório bryanwessantana/handcrafted-haven
- [ ] Verificação de deployment


## Mudanças Solicitadas - Fase 2

- [x] Trocar paleta de cores para azul #0F172A e variações mais claras
- [x] Ajustar espaçamento na navbar (mais espaço antes de Home e depois de Artisans)
- [x] Usar imagens reais dos produtos em todas as páginas
- [x] Adicionar fotos reais dos artesãos na seção "Meet Our Artisans"
- [x] Remover espaço em branco antes do footer na Home
- [x] Aplicar azul mais claro para "Meet Our Artisans" e "Supporting Local Craftsmanship"
- [x] Fazer footer com mesma cor do Meet Our Artisans em todas as páginas
- [x] Garantir carregamento de imagens em Products page
- [x] Garantir carregamento de imagens em ProductDetail page
- [x] Garantir carregamento de imagens em Artisans page
- [x] Garantir carregamento de imagens em ArtisanProfile page
