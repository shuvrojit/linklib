
const urls = []
const saveUrl = document.querySelector("#save-url")
const savedLinks = document.querySelector("#saved-links")

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
    savedLinks.innerHTML += `<li>${i} </li>`
 })
  }
}

saveUrl.addEventListener("click", (e) => {
  e.preventDefault()

  const url = document.querySelector("#url")
  urls.push(url.value)
  url.value = ""
  saveToLocalStorage()
  savedLinks.replaceChildren()
  showLinks()
})
