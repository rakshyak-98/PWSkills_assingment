function validateUrl(url){
    return /(http)s?:\/\/[\w\d]+\.[a-zA-Z]+/.test(url) ? "valid url" : "invalid url"
}

// valid url
console.log(validateUrl("https://google.com"))
console.log(validateUrl("http://1google124.com"))

console.log("") // HACK: to give a line break.

// invalid urls
console.log(validateUrl(""))
console.log(validateUrl("12433.com"))
console.log(validateUrl("htt://google.com"))
console.log(validateUrl("https://google."))