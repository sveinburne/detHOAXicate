import { iframe, div } from '@cycle/dom'

function makeIframe (selectedUrl) {
  return iframe('#Frame', { attrs: { src: selectedUrl, name: 'iframe', sandbox: undefined } })
}

function makeFallbackDiv () {
  return div('#Frame', 'Please paste an URL')
}

/**
 * @param sources
 * @param {stream} sources.selectedUrl - a stream of urls
 * @returns {{DOM: stream}}
 * @constructor
 */
function Frame (sources) {
  const { selectedUrl } = sources
  const vdom$ = selectedUrl.map(selectedUrl => selectedUrl ? makeIframe(selectedUrl) : makeFallbackDiv())
  return {
    DOM: vdom$
  }
}

export default Frame