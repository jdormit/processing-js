build/bundle.js : clean setup
	node_modules/.bin/tsc

setup :
	mkdir -p build

clean :
	rm -rf build
