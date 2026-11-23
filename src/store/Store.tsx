import { useEffect, useMemo, useState } from 'react';
import './store.css';

type ReleaseAsset = { name: string; size: number; browser_download_url: string; content_type?: string };
type Release = { tag_name: string; name?: string | null; body?: string | null; published_at?: string | null; html_url: string; assets: ReleaseAsset[] };
type StoreApp = { id: string; name: string; shortDescription?: string; description?: string; category?: string; icon?: string; screenshots?: string[]; features?: string[]; repo_url?: string; homepage?: string; topics?: string[]; stars?: number; updated_at?: string; release: Release };
type Catalog = { apps: StoreApp[] };

const USER = 'amideo5';
const CATALOG_URL = `${import.meta.env.BASE_URL}apps.json`;
const fmt = (n: number) => n < 1024 ? `${n} B` : n < 1048576 ? `${(n / 1024).toFixed(1)} KB` : `${(n / 1048576).toFixed(1)} MB`;
function resolveAsset(path?: string) {
    if (!path) return '';
    if (/^(https?:)?\/\//i.test(path)) return path.startsWith('//') ? `https:${path}` : path;
    return `${import.meta.env.BASE_URL}${path.replace(/^\.\//, '').replace(/^\//, '')}`;
}
function AppIcon({ app, large = false }: { app: StoreApp; large?: boolean }) {
    const [failed, setFailed] = useState(false);
    return <div className={`store-icon ${large ? 'large' : ''}`}>
        {app.icon && !failed ? <img src={resolveAsset(app.icon)} alt={`${app.name} icon`} onError={() => setFailed(true)} /> : <span>{app.name.slice(0, 1).toUpperCase()}</span>}
    </div>;
}

export default function AppStore() {
    const [apps, setApps] = useState<StoreApp[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [query, setQuery] = useState('');
    const [category, setCategory] = useState('All');
    const [selected, setSelected] = useState<StoreApp | null>(null);
    const [sort, setSort] = useState('recent');

    useEffect(() => {
        let cancelled = false;
        (async () => {
            try {
                const response = await fetch(CATALOG_URL);
                if (!response.ok) throw new Error(`Catalog request (${response.status})`);
                const catalog: Catalog = await response.json();
                const validApps = (catalog.apps ?? []).filter(app => app.release && Array.isArray(app.release.assets) && app.release.assets.some(asset => asset.browser_download_url?.trim()));
                if (!cancelled) {
                    setApps(validApps);
                    const slug = new URLSearchParams(location.search).get('app');
                    if (slug) setSelected(validApps.find(app => app.id.toLowerCase() === slug.toLowerCase()) ?? null);
                }
            } catch (e) { if (!cancelled) setError(e instanceof Error ? e.message : 'Could not load app catalog'); }
            finally { if (!cancelled) setLoading(false); }
        })();
        return () => { cancelled = true; };
    }, []);

    useEffect(() => {
        const url = new URL(location.href);
        if (selected) { url.searchParams.set('app', selected.id); document.title = `${selected.name} · ${USER} Store`; }
        else { url.searchParams.delete('app'); document.title = `${USER} App Store`; }
        history.replaceState(null, '', url);
    }, [selected]);

    const categories = useMemo(() => ['All', ...Array.from(new Set(apps.map(a => a.category).filter(Boolean) as string[]))], [apps]);
    const filtered = useMemo(() => apps.filter(app => `${app.name} ${app.shortDescription ?? ''} ${app.description ?? ''} ${(app.topics ?? []).join(' ')} ${app.category ?? ''}`.toLowerCase().includes(query.toLowerCase()) && (category === 'All' || app.category === category)).sort((a, b) => sort === 'name' ? a.name.localeCompare(b.name) : new Date(b.updated_at ?? b.release.published_at ?? 0).getTime() - new Date(a.updated_at ?? a.release.published_at ?? 0).getTime()), [apps, query, category, sort]);
    const featured = filtered[0] ?? apps[0];
    const open = (app: StoreApp) => { setSelected(app); window.scrollTo({ top: 0, behavior: 'smooth' }); };
    const close = () => { setSelected(null); window.scrollTo({ top: 0, behavior: 'smooth' }); };

    return <div className="personal-store">
        <header className="store-head">
            <a href="/" className="store-brand"><span className="store-mark">A</span><span>AMIDEO5<small>SOFTWARE LIBRARY</small></span></a>
            <div className="store-head-right"><span className="store-live"><i /> PERSONAL APP STORE</span><a href="/" className="store-back">Portfolio ↗</a></div>
        </header>

        {selected ? <main className="store-detail-page">
            <button className="store-return" onClick={close}>← Back to library</button>
            <section className="detail-hero">
                <div className="detail-main"><AppIcon app={selected} large /><div className="detail-heading"><span className="detail-category">{selected.category || 'APPLICATION'}</span><h1>{selected.name}</h1><p>{selected.shortDescription || selected.description || 'An application built and shipped independently.'}</p><div className="detail-tags"><span>{selected.release.tag_name}</span>{selected.stars != null && <span>★ {selected.stars}</span>}<span>{selected.release.assets.length} download{selected.release.assets.length === 1 ? '' : 's'}</span></div><a className="primary-download" href={selected.release.assets[0]?.browser_download_url} download>↓ Download latest <span>{selected.release.assets[0] ? fmt(selected.release.assets[0].size) : ''}</span></a></div>
                </div>
            </section>
            {selected.screenshots?.length ? <section className="store-gallery-section"><div className="section-heading"><div><span className="section-eyebrow">IN THE APP</span><h2>Screen previews</h2></div><span className="section-count">{selected.screenshots.length} images</span></div><div className="store-gallery">{selected.screenshots.map((image, index) => <a href={resolveAsset(image)} target="_blank" rel="noreferrer" className="store-gallery-item" key={`${image}-${index}`}><img src={resolveAsset(image)} alt={`${selected.name} screenshot ${index + 1}`} loading="lazy" /></a>)}</div></section> : <section className="store-gallery-section gallery-empty"><div className="empty-art"><span>PREVIEW</span><strong>{selected.name}</strong><small>Add screenshots to public/apps/ to showcase your app here.</small></div></section>}
            {selected.features?.length ? <section className="store-features"><div className="section-heading"><div><span className="section-eyebrow">WHAT IT CAN DO</span><h2>Features</h2></div></div><div className="feature-grid">{selected.features.map((feature, i) => <div className="feature-item" key={i}><span className="feature-number">{String(i + 1).padStart(2, '0')}</span><p>{feature}</p></div>)}</div></section> : null}
            <section className="detail-lower"><div className="release-column"><span className="section-eyebrow">VERSION HISTORY</span><h2>Latest release</h2><div className="release-box"><div className="release-box-top"><strong>{selected.release.name || selected.release.tag_name}</strong><span>{selected.release.published_at ? new Date(selected.release.published_at).toLocaleDateString() : selected.release.tag_name}</span></div>{selected.release.body ? <pre className="store-notes">{selected.release.body}</pre> : <p className="muted">Release notes have not been provided.</p>}</div></div><div className="download-column"><span className="section-eyebrow">GET THE APP</span><h2>Downloads</h2>{selected.release.assets.filter(asset => !!asset.browser_download_url).map(asset => <a className="store-download" key={asset.name} href={asset.browser_download_url}><span><strong>{asset.name}</strong><small>{fmt(asset.size)}</small></span><b>↓</b></a>)}<a className="store-download secondary" href={selected.release.html_url} target="_blank" rel="noreferrer"><span><strong>Release on GitHub</strong><small>View release details</small></span><b>↗</b></a>{selected.repo_url && <a className="external-link" href={selected.repo_url} target="_blank" rel="noreferrer">Source repository ↗</a>}{selected.homepage && <a className="external-link" href={selected.homepage} target="_blank" rel="noreferrer">Visit website ↗</a>}</div></section>
        </main> : <>
            <main className="store-main">
                <section className="store-intro"><div className="intro-copy"><span className="store-kicker">INDEPENDENT SOFTWARE · BUILT WITH INTENTION</span><h1>A collection of<br /><em>things I've built.</em></h1><p>Apps, experiments and useful tools. Explore what I've been building and download the latest releases.</p></div><div className="intro-aside"><span className="aside-index">01 / LIBRARY</span><span className="aside-line" /><span className="aside-note">Browse the collection<br />and find something useful.</span></div></section>
                <section className="store-controls"><div className="store-search"><span>⌕</span><input value={query} onChange={e => setQuery(e.target.value)} placeholder="Find an app..." /><kbd>SEARCH</kbd></div><div className="store-control-right"><span className="library-total">{filtered.length.toString().padStart(2, '0')} PRODUCTS</span><select value={sort} onChange={e => setSort(e.target.value)} aria-label="Sort apps"><option value="recent">Latest</option><option value="name">A–Z</option></select></div></section>
                <nav className="store-categories">{categories.map(cat => <button className={category === cat ? 'active' : ''} key={cat} onClick={() => setCategory(cat)}>{cat}</button>)}</nav>
                {loading ? <div className="store-loading">Loading collection<span className="loading-dots">...</span></div> : error ? <div className="store-error">{error}<p>Check that <code>public/apps.json</code> exists and contains valid JSON.</p></div> : filtered.length === 0 ? <div className="store-empty">No apps found. Try a different search.</div> : <>
                    {featured && !query && category === 'All' && <section className="featured-app"><div className="featured-content"><span className="featured-label"><i /> FEATURED RELEASE</span><div className="featured-app-identity"><AppIcon app={featured} /><div><h2>{featured.name}</h2><span>{featured.category || 'Application'} · {featured.release.tag_name}</span></div></div><p>{featured.shortDescription || featured.description || 'Explore the latest release.'}</p><div className="featured-actions"><button onClick={() => open(featured)}>Explore app ↗</button><a href={featured.release.assets[0]?.browser_download_url}>↓ Download</a></div></div><div className="featured-visual">{featured.screenshots?.[0] ? <img src={resolveAsset(featured.screenshots[0])} alt={`${featured.name} preview`} onError={e => { e.currentTarget.style.display = 'none'; }} /> : <div className="featured-graphic"><div className="graphic-orbit orbit-one" /><div className="graphic-orbit orbit-two" /><AppIcon app={featured} large /></div>}<span className="featured-visual-caption">{featured.name.toUpperCase()} / {featured.release.tag_name}</span></div></section>}
                    <section className="store-catalog"><div className="store-catalog-head"><div><span className="section-eyebrow">THE COLLECTION</span><h2>All applications <span>{filtered.length}</span></h2></div></div><div className="store-grid">{filtered.map(app => <button className="store-card" key={app.id} onClick={() => open(app)}><div className="card-top"><AppIcon app={app} /><span className="card-arrow">↗</span></div><div className="store-card-copy"><span className="card-category">{app.category || 'SOFTWARE'}</span><h3>{app.name}</h3><p>{app.shortDescription || app.description || 'A software project.'}</p></div><div className="store-card-foot"><span>{app.release.tag_name}</span><span>↓ {app.release.assets.length} file{app.release.assets.length === 1 ? '' : 's'}</span><span className="card-open">DETAILS ↗</span></div></button>)}</div></section>
                </>}
            </main>
        </>}
        <footer className="store-footer"><span>© {new Date().getFullYear()} AMIDEO5</span><span>BUILT & SHIPPED INDEPENDENTLY</span><a href="https://github.com/amideo5" target="_blank" rel="noreferrer">GITHUB ↗</a></footer>
    </div>;
}
