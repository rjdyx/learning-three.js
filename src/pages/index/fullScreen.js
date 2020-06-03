import { debounce, observerDomResize } from '../../utils/autoSize'

let allWidth = 0
// let scale = 0
// let datavRoot = ''
// let ready = false

let dom = ''
/* eslint-disable no-unused-vars */
let width = 0
let height = 0
let debounceInitWHFun = ''
let domObserver = ''

function afterAutoResizeMixinInit () {
  initConfig()

  setAppScale()

  // ready = true
}

function initConfig () {
  const { width, height } = screen

  allWidth = width

  dom.style.width = `${width}px`
  dom.style.height = `${height}px`
}

function setAppScale () {
  const currentWidth = document.body.clientWidth
  dom.style.transform = `scale(${currentWidth / allWidth})`
}

function onResize () {
  setAppScale()
}

export async function autoResizeMixinInit () {
  await initWH(false)

  getDebounceInitWHFun()

  bindDomResizeCallback()

  if (typeof afterAutoResizeMixinInit === 'function') afterAutoResizeMixinInit()
}

function initWH (resize = true) {
  return new Promise(resolve => {
    dom = document.getElementById('dv-full-screen-container')

    width = dom.clientWidth
    height = dom.clientHeight

    if (typeof onResize === 'function' && resize) onResize()

    resolve()
  })
}

function getDebounceInitWHFun () {
  debounceInitWHFun = debounce(100, initWH)
}

function bindDomResizeCallback () {
  domObserver = observerDomResize(dom, debounceInitWHFun)

  window.addEventListener('resize', debounceInitWHFun)
}

// function unbindDomResizeCallback () {
//   domObserver.disconnect()
//   domObserver.takeRecords()
//   domObserver = null

//   window.removeEventListener('resize', debounceInitWHFun)
// }
