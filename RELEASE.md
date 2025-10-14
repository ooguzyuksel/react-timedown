# Release Guide

Bu dokümanda `react-timedown` paketinin NPM'e nasıl yayınlanacağı açıklanmaktadır.

## Ön Hazırlık

### 1. NPM Token Oluştur

1. https://www.npmjs.com/ → Account → Access Tokens
2. "Generate New Token" → "Classic Token"
3. Token Type: **Automation** seç
4. Token'ı kopyala

### 2. GitHub Secret Ekle

1. https://github.com/ooguzyuksel/react-timedown/settings/secrets/actions
2. "New repository secret"
3. Name: `NPM_TOKEN`
4. Secret: (NPM token'ını yapıştır)
5. "Add secret"

## Release Süreci

### Otomatik Release (Önerilen)

Paketi NPM'e yayınlamak için sadece bir git tag oluştur ve push et:

```bash
# Patch release (1.0.0 → 1.0.1)
yarn release:patch

# Minor release (1.0.0 → 1.1.0)
yarn release:minor

# Major release (1.0.0 → 2.0.0)
yarn release:major
```

Bu komutlar otomatik olarak:
1. Version'ı günceller
2. Build alır
3. Git commit ve tag oluşturur
4. GitHub'a push eder
5. GitHub Actions otomatik NPM'e publish eder

### Manuel Release

Eğer manuel kontrol etmek istersen:

```bash
# 1. Version'ı güncelle
yarn version patch  # veya minor/major

# 2. Build al
yarn build

# 3. Test et
yarn test

# 4. Local'de test publish (dry-run)
npm publish --dry-run

# 5. Git'e push et (tag ile birlikte)
git push && git push --tags
```

Tag push edildiğinde GitHub Actions otomatik olarak NPM'e publish edecektir.

## Version Stratejisi

### Semantic Versioning (MAJOR.MINOR.PATCH)

- **PATCH** (1.0.0 → 1.0.1): Bug fix, küçük düzeltmeler
- **MINOR** (1.0.0 → 1.1.0): Yeni özellik, geriye uyumlu
- **MAJOR** (1.0.0 → 2.0.0): Breaking change, API değişikliği

## Kontrol Listesi

Release yapmadan önce:

- [ ] Tüm testler geçiyor mu? (`yarn test`)
- [ ] Build hatasız mı? (`yarn build`)
- [ ] CHANGELOG.md güncellendi mi?
- [ ] README.md güncel mi?
- [ ] Yeni özellikler dokümante edildi mi?
- [ ] Breaking change var mı? → Major version
- [ ] Yeni özellik var mı? → Minor version
- [ ] Sadece bug fix mi? → Patch version

## GitHub Actions Workflow

Release workflow'u otomatik şu adımları yapar:

1. **Tag kontrolü**: `v*` formatında tag olmalı (örn: `v1.0.1`)
2. **Test**: Tüm testleri çalıştırır
3. **Build**: Paketi build eder
4. **Publish**: NPM'e yayınlar (public access)

Workflow durumunu kontrol et:
https://github.com/ooguzyuksel/react-timedown/actions

## NPM Paket Linki

Yayınlandıktan sonra:
https://www.npmjs.com/package/react-timedown

## Troubleshooting

### "npm ERR! 403 Forbidden"

NPM token'ın doğru eklendiğinden emin ol:
- GitHub Settings → Secrets → NPM_TOKEN

### "npm ERR! package already exists"

Version'ı arttırmayı unuttun. Version'ı manuel güncelle:
```bash
yarn version patch
```

### "npm ERR! no_perms"

NPM hesabının paketi publish etme yetkisi var mı kontrol et.
NPM'de organization kullanıyorsan, organization member olmalısın.

## İlk Publish

Eğer paket daha önce hiç publish edilmediyse, ilk kez publish etmek için:

```bash
# 1. NPM'e login ol (local'de)
npm login

# 2. Build al
yarn build

# 3. Publish et
npm publish --access public

# 4. Sonraki releaseler için git tag kullan
yarn release:patch
```

