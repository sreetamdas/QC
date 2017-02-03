typist = document.querySelector "#typist-element"
new Typist typist,
  letterInterval: 60
  textInterval:   3000
  onSlide: (text, options) ->
    suffix = options.typist.getAttribute "data-typist-suffix"
    log "#{text} #{suffix}" # ugly since it's JS
