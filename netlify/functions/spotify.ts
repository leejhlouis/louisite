const client_id = process.env.VITE_SPOTIFY_CLIENT_ID
const client_secret = process.env.VITE_SPOTIFY_CLIENT_SECRET
const refresh_token = process.env.VITE_SPOTIFY_REFRESH_TOKEN

// eslint-disable-next-line no-undef
const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64')
const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token'
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`

const getAccessToken = async () => {
  const params = new URLSearchParams()
  params.append('grant_type', 'refresh_token')
  params.append('refresh_token', refresh_token ?? '')

  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: params
  })

  const { access_token } = await response.json()
  return access_token
}

export const getNowPlaying = async () => {
  const access_token = await getAccessToken()

  return fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  }).then(res => {
    if (res.status === 204 || res.status > 400) {
      return { isPlaying: false }
    }
    return res.json()
  })
}

export const handler = async () => {
  const response = await getNowPlaying()

  if (response.currently_playing_type !== 'track') {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET, POST, OPTION'
      },
      body: JSON.stringify({
        isPlaying: false
      })
    }
  }
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET, POST, OPTION'
    },
    body: JSON.stringify({
      isPlaying: response.is_playing,
      title: response.item.name,
      artist: response.item.artists
        .map((artist: { [key: string]: unknown; name: string }) => artist.name)
        .join(', '),
      albumImageUrl: response.item.album.images[0].url,
      songUrl: response.item.external_urls.spotify
    })
  }
}
