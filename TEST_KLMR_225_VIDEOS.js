#!/usr/bin/env node
/**
 * KLMR 225-Video Playlist Test Suite
 * Run by Nina / ARKAIOS to verify all 225 videos load & rotate correctly in production
 *
 * Usage: node TEST_KLMR_225_VIDEOS.js
 */

const https = require('https');
const http = require('http');

const TESTS = {
  PASSED: 0,
  FAILED: 0,
  TOTAL: 0
};

function log(level, msg) {
  const ts = new Date().toISOString();
  console.log(`[${ts}] [${level}] ${msg}`);
}

function test(name, condition, details = '') {
  TESTS.TOTAL++;
  if (condition) {
    log('PASS', `✓ ${name}`);
    TESTS.PASSED++;
  } else {
    log('FAIL', `✗ ${name} ${details}`);
    TESTS.FAILED++;
  }
}

async function fetchAPI(url) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;
    protocol.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          resolve({ status: res.statusCode, data: JSON.parse(data) });
        } catch (e) {
          resolve({ status: res.statusCode, raw: data });
        }
      });
    }).on('error', reject);
  });
}

async function runTests() {
  log('START', '🎬 KLMR 225-Video Playlist Verification (Live Vercel Production)');
  console.log('');

  // Test 1: API Health / Status
  log('TEST', '1. Server Status Check');
  try {
    const statusRes = await fetchAPI('https://klmr-digital-tv.vercel.app/api/channel/status');
    test('Server status endpoint HTTP 200', statusRes.status === 200, `Status: ${statusRes.status}`);
  } catch (e) {
    test('Server status endpoint HTTP 200', false, e.message);
  }
  console.log('');

  // Test 2: Feed API Response
  log('TEST', '2. Feed API Endpoint');
  let feedData = null;
  try {
    const res = await fetchAPI('https://klmr-digital-tv.vercel.app/api/channel/feed');
    feedData = res.data;
    test('Feed API accessible', res.status === 200, `Status: ${res.status}`);
  } catch (e) {
    test('Feed API accessible', false, e.message);
  }
  console.log('');

  if (!feedData) {
    log('ERROR', 'Cannot continue without feed data');
    process.exit(1);
  }

  // Test 3: Total Video Count
  log('TEST', '3. Playlist Size Verification');
  test('Total tracks = 225', feedData.totalTracks === 225, `Got: ${feedData.totalTracks}`);
  test('meta.total = 225', (feedData.meta?.total ?? feedData.totalTracks) === 225, `Got: ${feedData.meta?.total}`);
  test('playlist array exists', Array.isArray(feedData.playlist), `Type: ${typeof feedData.playlist}`);
  test('playlist length = 225', feedData.playlist.length === 225, `Got: ${feedData.playlist.length}`);
  console.log('');

  // Test 4: Sources Breakdown
  log('TEST', '4. Sources Breakdown');
  const youtubeCount = feedData.meta?.youtube ?? feedData.playlist.filter(v => String(v.id || '').startsWith('yt-')).length;
  const driveCount = feedData.meta?.drive ?? feedData.playlist.filter(v => String(v.id || '').startsWith('drive-')).length;
  test('YouTube videos = 61', youtubeCount === 61, `Got: ${youtubeCount}`);
  test('Drive rotation = 164', driveCount === 164, `Got: ${driveCount}`);
  test('YouTube + Drive = 225', youtubeCount + driveCount === 225, `Got: ${youtubeCount + driveCount}`);
  console.log('');

  // Test 5: Video Quality Checks
  log('TEST', '5. Video Entry Validation');
  let validVideos = 0;
  feedData.playlist.forEach((video, idx) => {
    if (video.id && video.title && video.duration && (video.youtubeId || video.url)) {
      validVideos++;
    } else {
      log('WARN', `Video ${idx} missing fields: ${JSON.stringify(video).substring(0, 50)}`);
    }
  });
  test('All 225 videos valid', validVideos === 225, `Valid: ${validVideos}/225`);
  console.log('');

  // Test 6: Duration Math
  log('TEST', '6. Cycle Duration Calculation');
  const totalSeconds = feedData.meta?.totalDurationSeconds || feedData.totalDurationSeconds || 0;
  const cycleHours = (totalSeconds / 3600).toFixed(2);
  test('Cycle duration ~15.98h', cycleHours === '15.98' || cycleHours === '15.97', `Got: ${cycleHours}h`);
  console.log('');

  // Test 7: Current Track Tracking
  log('TEST', '7. Playback State');
  test('currentIndex exists', typeof feedData.currentIndex === 'number');
  test('currentIndex in range', feedData.currentIndex >= 0 && feedData.currentIndex < 225, `Got: ${feedData.currentIndex}`);
  test('currentTrack exists', feedData.currentTrack?.id !== undefined);
  test('nextTrack exists', feedData.nextTrack?.id !== undefined);
  console.log('');

  // Test 8: Metadata Completeness
  log('TEST', '8. API Response Metadata');
  test('channel name', feedData.channel === 'KLMR OFFICIAL CHANNEL HD');
  test('status online', feedData.status === 'online');
  test('youtube count > 0', youtubeCount > 0);
  test('drive count > 0', driveCount > 0);
  test('cycleNumber exists', feedData.cycleNumber > 0);
  console.log('');

  // Test 9: Sample Videos & Duplicate Cleanup Check
  log('TEST', '9. Sample Video & Duplicate Verification');
  const yt1 = feedData.playlist.find(v => v.id === 'yt-7CmxP78alCk');
  const drive1 = feedData.playlist.find(v => v.id === 'drive-1gQfP4PBT4bE');
  const kaizoDup = feedData.playlist.find(v => v.id === 'drive-1Dy4YG-IOe2A');
  test('YouTube sample exists (Vamos a vivir)', yt1 !== undefined);
  test('Drive sample exists (The Living Tombstone - Love I Need)', drive1 !== undefined);
  test('Duplicate Kaizo Trap (drive-1Dy4YG-IOe2A) retired', kaizoDup === undefined);
  console.log('');

  // Final Report
  console.log('');
  log('REPORT', `Tests Passed: ${TESTS.PASSED}/${TESTS.TOTAL}`);
  if (TESTS.FAILED === 0) {
    log('SUCCESS', '🎉 ALL TESTS PASSED - 225 Videos Ready!');
    process.exit(0);
  } else {
    log('FAILED', `⚠️  ${TESTS.FAILED} tests failed`);
    process.exit(1);
  }
}

runTests().catch(err => {
  log('ERROR', err.message);
  process.exit(1);
});
