// IPTV M3U Playlist Generator for KLMR OFFICIAL CHANNEL HD
// Compatible with Smart TVs, VLC, IPTV Smarters, TiviMate, Roku and OTT Players

module.exports = function handler(req, res) {
  const host = req.headers['host'] || 'klmr-digital-tv.vercel.app';
  const proto = req.headers['x-forwarded-proto'] || 'https';
  const baseUrl = `${proto}://${host}`;

  const m3uContent = `#EXTM3U
#EXTINF:-1 tvg-id="KLMR.HD" tvg-name="KLMR OFFICIAL CHANNEL HD" tvg-logo="${baseUrl}/assets/logo-chrome-3d.png" group-title="Electronic Music",KLMR OFFICIAL CHANNEL HD • Electronic Music TV 24/7
${baseUrl}/embed
`;

  res.setHeader('Content-Type', 'audio/x-mpegurl; charset=utf-8');
  res.setHeader('Content-Disposition', 'inline; filename="klmr-channel.m3u"');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 'public, max-age=300, s-maxage=600');
  res.status(200).send(m3uContent);
}
