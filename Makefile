PATH  := node_modules/.bin:$(PATH)
SHELL := /bin/zsh

.PHONY: css
css:
	mkdir -p bundle
	postcss --watch --use autoprefixer --use postcss-import css/app.css --output bundle/app.css

.PHONY: js
js:
	mkdir -p build
	webpack --watch --progress js/app.jsx build/app.js --module-bind "js=babel" --module-bind "jsx=babel" -d

.PHONY: minjs
minjs:
	mkdir -p bundle
	webpack --progress js/app.jsx bundle/app.js --module-bind "js=babel" --module-bind "jsx=babel" -p

.PHONY: server
server:
	browser-sync start --server --files='index.html,bundle/app.css,build/App.js'

.PHONY: clean
clean:
	rm -r bundle

.PHONY: all
all:
	(make css & make js & make server & wait)