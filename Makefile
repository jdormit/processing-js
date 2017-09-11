build/bundle.js : clean
	node_modules/.bin/tsc

clean :
	rm -rf public/js/bundle.js
