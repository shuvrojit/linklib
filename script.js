
const urls = []
const saveUrl = document.querySelector("#save-url")
const savedLinks = document.querySelector("#saved-links")
const saveTab = document.querySelector("#save-tab")

getFromLocalStorage()
showLinks()

function saveToLocalStorage () {
  localStorage.setItem("urls", JSON.stringify(urls))
}

function getFromLocalStorage () {
  const savedUrls = JSON.parse(localStorage.getItem("urls"))
  if (savedUrls) {
    savedUrls.forEach((i) => urls.push(i))
  }
}

function showLinks () {
  if (urls.length > 0) {
  urls.forEach((i) => {
    savedLinks.innerHTML += `<li><a target="_blank" href="${
      i}">${i} </a></li>`
 })
  }
}

function saveCurrentTab () {
  const tabUrl = document.URL
  urls.push(tabUrl)
}

function runFunction () {
  saveToLocalStorage()
  savedLinks.replaceChildren()
  showLinks()
}

saveUrl.addEventListener("click", (e) => {
  e.preventDefault()

  const url = document.querySelector("#url")
  if (url.value.length > 0) {
    urls.push(url.value)
    url.value = ""
    runFunction()
  }
  })

saveTab.addEventListener("click", (e) => {
  e.preventDefault()
  saveCurrentTab()
  runFunction()
})
